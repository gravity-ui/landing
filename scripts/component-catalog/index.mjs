import fs from 'node:fs';
import path from 'node:path';

import {resolveInstalledPackage} from './package-resolver.mjs';

export const COMPONENT_CATALOG_SCHEMA_VERSION = 2;

const COMPONENT_NAME_RE = /^[A-Z][A-Za-z0-9]*$/;
const COMPONENT_README_RE = /^src\/components\/([^/]+)\/README\.md$/;

export const COMPONENT_LIBRARIES = [
    {
        id: 'uikit',
        packageName: '@gravity-ui/uikit',
        githubRepository: 'gravity-ui/uikit',
    },
    {
        id: 'date-components',
        packageName: '@gravity-ui/date-components',
        githubRepository: 'gravity-ui/date-components',
    },
    {
        id: 'navigation',
        packageName: '@gravity-ui/navigation',
        githubRepository: 'gravity-ui/navigation',
    },
];

/**
 * Convert a public component name to a stable route id.
 *
 * @param {string} name PascalCase component name.
 * @returns {string} kebab-case route id.
 */
export function componentNameToId(name) {
    return name
        .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
        .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
        .toLowerCase();
}

/**
 * Convert a public component name to a readable fallback title.
 *
 * @param {string} name PascalCase component name.
 * @returns {string} Human-readable title.
 */
export function componentNameToTitle(name) {
    return name.replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2').replace(/([a-z0-9])([A-Z])/g, '$1 $2');
}

/**
 * Extract landing-compatible components from an immutable GitHub source tree.
 * A component is public to the landing when its top-level PascalCase directory
 * contains a README. Nested, lab and legacy docs remain explicit overrides.
 *
 * @param {Array<{path?: string, type?: string}>} tree GitHub tree entries.
 * @returns {string[]} Sorted component names.
 */
export function getComponentNamesFromTree(tree) {
    const names = tree
        .filter((entry) => entry.type === 'blob')
        .map((entry) => entry.path?.match(COMPONENT_README_RE)?.[1])
        .filter((name) => name && COMPONENT_NAME_RE.test(name));

    return Array.from(new Set(names)).sort((left, right) => left.localeCompare(right));
}

/**
 * Resolve exact installed versions before making any remote request.
 *
 * @param {string} projectRoot Project root.
 * @param {Array<Object>} libraries Library definitions.
 * @returns {Array<Object>} Resolved library definitions.
 */
function resolveLibraries(projectRoot, libraries) {
    return libraries.map((library) => {
        const {packageJson} = resolveInstalledPackage(library.packageName, projectRoot);
        const version = packageJson.version;

        if (typeof version !== 'string' || !version) {
            throw new Error(`Installed package ${library.packageName} has no valid version`);
        }

        return {...library, version, ref: `v${version}`};
    });
}

/**
 * Check whether an ignored generated catalog already matches installed versions.
 * Git tags are treated as immutable, so a matching catalog needs no network access.
 *
 * @param {Record<string, unknown>} catalog Existing catalog.
 * @param {Array<Object>} libraries Resolved libraries.
 * @returns {boolean} Whether the catalog can be reused.
 */
function isCurrentCatalog(catalog, libraries) {
    if (catalog?.schemaVersion !== COMPONENT_CATALOG_SCHEMA_VERSION) {
        return false;
    }

    const catalogLibraries = catalog.libraries;
    if (!catalogLibraries || Object.keys(catalogLibraries).length !== libraries.length) {
        return false;
    }

    return libraries.every((library) => {
        const cached = catalogLibraries[library.id];

        return (
            cached?.packageName === library.packageName &&
            cached?.githubRepository === library.githubRepository &&
            cached?.version === library.version &&
            cached?.ref === library.ref &&
            Array.isArray(cached.components)
        );
    });
}

/**
 * Read an existing generated catalog when it is valid JSON.
 *
 * @param {string} catalogPath Catalog path.
 * @returns {Record<string, unknown> | null} Parsed catalog.
 */
function readCatalog(catalogPath) {
    try {
        return JSON.parse(fs.readFileSync(catalogPath, 'utf8'));
    } catch (error) {
        if (error.code === 'ENOENT' || error instanceof SyntaxError) {
            return null;
        }
        throw error;
    }
}

/**
 * Fetch one immutable repository tree from GitHub.
 *
 * @param {Object} library Resolved library definition.
 * @param {typeof fetch} fetchImpl Fetch implementation.
 * @param {string | undefined} githubToken Optional GitHub token.
 * @returns {Promise<Array<Object>>} GitHub tree entries.
 */
async function fetchRepositoryTree(library, fetchImpl, githubToken) {
    const url = `https://api.github.com/repos/${library.githubRepository}/git/trees/${encodeURIComponent(
        library.ref,
    )}?recursive=1`;
    const headers = {
        Accept: 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
    };

    if (githubToken) {
        headers.Authorization = `Bearer ${githubToken}`;
    }

    const response = await fetchImpl(url, {headers});
    if (!response.ok) {
        throw new Error(
            `GitHub tree request failed for ${library.githubRepository}@${library.ref}: ${response.status} ${await response.text()}`,
        );
    }

    const payload = await response.json();
    if (payload.truncated) {
        throw new Error(`GitHub tree is truncated for ${library.githubRepository}@${library.ref}`);
    }
    if (!Array.isArray(payload.tree)) {
        throw new Error(`GitHub tree is missing for ${library.githubRepository}@${library.ref}`);
    }

    return payload.tree;
}

/**
 * Generate an ignored component catalog from exact package tags on GitHub.
 *
 * @param {Object} options Generator options.
 * @param {string} options.projectRoot Project root.
 * @param {string} options.catalogPath Generated JSON path.
 * @param {Array<Object>} [options.libraries] Library definitions.
 * @param {typeof fetch} [options.fetchImpl] Fetch implementation.
 * @param {string} [options.githubToken] Optional GitHub token.
 * @param {boolean} [options.force] Ignore a matching local catalog.
 * @returns {Promise<{catalog: Record<string, unknown>, cacheHit: boolean}>} Result.
 */
export async function generateComponentCatalog({
    projectRoot,
    catalogPath,
    libraries = COMPONENT_LIBRARIES,
    fetchImpl = fetch,
    githubToken,
    force = false,
}) {
    const resolvedLibraries = resolveLibraries(projectRoot, libraries);
    const currentCatalog = readCatalog(catalogPath);

    if (!force && currentCatalog && isCurrentCatalog(currentCatalog, resolvedLibraries)) {
        return {catalog: currentCatalog, cacheHit: true};
    }

    const catalog = {
        schemaVersion: COMPONENT_CATALOG_SCHEMA_VERSION,
        libraries: {},
    };

    const generatedLibraries = await Promise.all(
        resolvedLibraries.map(async (library) => {
            const tree = await fetchRepositoryTree(library, fetchImpl, githubToken);
            const components = getComponentNamesFromTree(tree).map((name) => ({
                id: componentNameToId(name),
                name,
                title: componentNameToTitle(name),
                githubUrl: `https://github.com/${library.githubRepository}/tree/${library.ref}/src/components/${name}`,
                readmeUrl: {
                    en: `https://raw.githubusercontent.com/${library.githubRepository}/${library.ref}/src/components/${name}/README.md`,
                    ru: `https://raw.githubusercontent.com/${library.githubRepository}/${library.ref}/src/components/${name}/README-ru.md`,
                },
            }));

            return [
                library.id,
                {
                    packageName: library.packageName,
                    githubRepository: library.githubRepository,
                    version: library.version,
                    ref: library.ref,
                    components,
                },
            ];
        }),
    );

    for (const [libraryId, library] of generatedLibraries) {
        catalog.libraries[libraryId] = library;
    }

    fs.mkdirSync(path.dirname(catalogPath), {recursive: true});
    const temporaryPath = `${catalogPath}.tmp`;
    fs.writeFileSync(temporaryPath, `${JSON.stringify(catalog, null, 2)}\n`);
    fs.renameSync(temporaryPath, catalogPath);

    return {catalog, cacheHit: false};
}
