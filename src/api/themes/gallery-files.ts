import {createHash} from 'crypto';

import chroma from 'chroma-js';

import {
    THEME_TAGS,
    type ThemeMetadata,
    type ThemePayload,
    type ThemeTag,
    toThemeId,
    validateThemeMetadata,
} from '../../components/Themes/gallery/schema';

import {
    GALLERY_DIR,
    MAX_DESCRIPTION_LENGTH,
    MAX_TAGS,
    MAX_THEME_NAME_LENGTH,
    PREVIEWS_DIR,
    type PreviewSourceKey,
} from './config';

// Builds the exact files a gallery PR needs so that `npm run check-theme-previews`
// (scripts/update-theme-previews.mjs) treats the new entry as up to date and
// skips re-rendering. Every format detail here mirrors that script.

export class SubmissionValidationError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'SubmissionValidationError';
    }
}

// Same rule as the submit form uses to show the id.
export interface ThemeMetaDraft {
    name: string;
    descriptionEn: string;
    descriptionRu: string;
    tags: string[];
    brandColor: string;
}

export interface SubmissionAuthor {
    login: string;
    name: string | null;
}

// Control characters are never wanted in single-line metadata.
// eslint-disable-next-line no-control-regex
const CONTROL_CHARS_RE = /[\u0000-\u001f\u007f]/g;

const cleanText = (value: unknown) =>
    typeof value === 'string' ? value.replace(CONTROL_CHARS_RE, ' ').trim() : '';

function normalizeBrandColor(value: unknown) {
    if (typeof value !== 'string' || !chroma.valid(value)) {
        throw new SubmissionValidationError('brandColor is not a color');
    }
    return chroma(value).hex('rgb').toUpperCase();
}

export function buildThemeMetadata(draft: unknown, author: SubmissionAuthor): ThemeMetadata {
    if (!draft || typeof draft !== 'object') {
        throw new SubmissionValidationError('meta must be an object');
    }
    const value = draft as Record<keyof ThemeMetaDraft, unknown>;

    const name = cleanText(value.name);
    if (!name || name.length > MAX_THEME_NAME_LENGTH) {
        throw new SubmissionValidationError('name is empty or too long');
    }
    const id = toThemeId(name);
    if (!id) {
        throw new SubmissionValidationError('name gives an empty id');
    }

    const descriptionEn = cleanText(value.descriptionEn);
    // The Russian description is optional in the form; the gallery requires
    // both, so it falls back to the English text.
    const descriptionRu = cleanText(value.descriptionRu) || descriptionEn;
    if (
        !descriptionEn ||
        descriptionEn.length > MAX_DESCRIPTION_LENGTH ||
        descriptionRu.length > MAX_DESCRIPTION_LENGTH
    ) {
        throw new SubmissionValidationError('description is empty or too long');
    }

    if (!Array.isArray(value.tags) || value.tags.length > MAX_TAGS) {
        throw new SubmissionValidationError('tags must be an array of up to 3 items');
    }
    const tags = Array.from(new Set(value.tags));
    if (!tags.every((tag) => THEME_TAGS.includes(tag as ThemeTag))) {
        throw new SubmissionValidationError('unknown tag');
    }

    const metadata: ThemeMetadata = {
        id,
        name,
        author: {
            name: author.name?.trim() || author.login,
            url: `https://github.com/${author.login}`,
        },
        description: {en: descriptionEn, ru: descriptionRu},
        tags: tags as ThemeTag[],
        brandColor: normalizeBrandColor(value.brandColor),
    };

    try {
        validateThemeMetadata(metadata);
    } catch (error) {
        throw new SubmissionValidationError(error instanceof Error ? error.message : 'invalid');
    }
    return metadata;
}

const MAX_PAYLOAD_KEYS = 2000;
const MAX_VALUE_LENGTH = 500;
const PAYLOAD_KEY_RE = /^--[a-z][a-z0-9-]*$/;
// Values end up inside CSS declarations: anything that could close the
// declaration or pull external resources is rejected.
const UNSAFE_VALUE_RE = /[{};<>\\]|url\s*\(|expression\s*\(|@import/i;

interface PayloadValue {
    value: string;
    ref?: string;
}

const isSafeString = (value: unknown): value is string =>
    typeof value === 'string' && value.length <= MAX_VALUE_LENGTH && !UNSAFE_VALUE_RE.test(value);

function readPayloadValue(value: unknown): PayloadValue | null {
    if (!value || typeof value !== 'object' || Array.isArray(value)) {
        return null;
    }
    const {value: itemValue, ref, ...rest} = value as Record<string, unknown>;
    if (Object.keys(rest).length || !isSafeString(itemValue)) {
        return null;
    }
    if (ref === undefined) {
        return {value: itemValue};
    }
    return isSafeString(ref) ? {value: itemValue, ref} : null;
}

// Checks the `generateJSON` output sent by the browser and rebuilds it from
// known fields only. An entry is either `{value, ref?}` or a per-mode
// `{light?, dark?}` pair of those; the key order of the input is kept.
export function validateThemePayload(value: unknown): ThemePayload {
    if (!value || typeof value !== 'object' || Array.isArray(value)) {
        throw new SubmissionValidationError('theme must be an object');
    }
    const entries = Object.entries(value as Record<string, unknown>);
    if (!entries.length || entries.length > MAX_PAYLOAD_KEYS) {
        throw new SubmissionValidationError('theme has an unexpected number of variables');
    }
    const payload: Record<string, unknown> = {};
    for (const [key, item] of entries) {
        if (!PAYLOAD_KEY_RE.test(key) || !item || typeof item !== 'object') {
            throw new SubmissionValidationError(`unexpected theme variable ${key}`);
        }
        const record = item as Record<string, unknown>;
        if ('value' in record) {
            const leaf = readPayloadValue(record);
            if (!leaf) {
                throw new SubmissionValidationError(`invalid value of ${key}`);
            }
            payload[key] = leaf;
            continue;
        }
        const {light, dark, ...rest} = record;
        const themed: Record<string, PayloadValue> = {};
        for (const [mode, modeValue] of [
            ['light', light],
            ['dark', dark],
        ] as const) {
            if (modeValue === undefined) {
                continue;
            }
            const leaf = readPayloadValue(modeValue);
            if (!leaf) {
                throw new SubmissionValidationError(`invalid ${mode} value of ${key}`);
            }
            themed[mode] = leaf;
        }
        if (Object.keys(rest).length || !Object.keys(themed).length) {
            throw new SubmissionValidationError(`invalid value of ${key}`);
        }
        payload[key] = themed;
    }
    if (!payload['--g-color-base-brand']) {
        throw new SubmissionValidationError('theme has no brand color');
    }
    return payload as ThemePayload;
}

// Gallery JSON files are 4-space indented with a trailing newline.
const formatJsonFile = (value: unknown) => `${JSON.stringify(value, null, 4)}\n`;

export function formatMetaFile(metadata: ThemeMetadata) {
    return formatJsonFile({$schema: './meta.schema.json', ...metadata});
}

export function formatThemeFile(payload: ThemePayload) {
    return formatJsonFile(payload);
}

export const sha256 = (data: string | Buffer) =>
    createHash('sha256')
        .update(
            typeof data === 'string'
                ? data
                : new Uint8Array(data.buffer, data.byteOffset, data.length),
        )
        .digest('hex');

export type PreviewSourceHashes = Record<PreviewSourceKey, string | null>;

export interface PackageVersions {
    uikit: string | null;
    themer: string | null;
}

export function readPackageVersions(packageJsonText: string): PackageVersions {
    const pkg = JSON.parse(packageJsonText) as {
        dependencies?: Record<string, string>;
        devDependencies?: Record<string, string>;
    };
    const deps = {...pkg.dependencies, ...pkg.devDependencies};
    return {
        uikit: deps['@gravity-ui/uikit'] || null,
        themer: deps['@gravity-ui/uikit-themer'] || null,
    };
}

// `buildManifestEntry` of the preview script, byte for byte.
export function computeThemeHash({
    themeFile,
    metaFile,
    versions,
    sourceHashes,
}: {
    themeFile: string;
    metaFile: string;
    versions: PackageVersions;
    sourceHashes: PreviewSourceHashes;
}) {
    const hash = createHash('sha256');
    hash.update(themeFile);
    hash.update('\0');
    hash.update(metaFile);
    hash.update('\0');
    hash.update(JSON.stringify({uikit: versions.uikit, themer: versions.themer}));
    hash.update('\0');
    hash.update(
        JSON.stringify({
            captureRoute: sourceHashes.captureRoute,
            previewLayout: sourceHashes.previewLayout,
            tablePreview: sourceHashes.tablePreview,
        }),
    );
    return hash.digest('hex');
}

const IMPORT_RE = /import\s+\w+\s+from\s+'.\/([a-z0-9-]+)\.meta\.json'/g;

// `loadThemeIds` of the preview script.
export function readGalleryIds(indexSource: string) {
    return Array.from(indexSource.matchAll(IMPORT_RE), (match) => match[1]).sort();
}

interface ManifestEntry {
    themeHash: string;
    files: {light?: string; dark?: string};
}

// Rebuilds the manifest the way the preview script writes it: entries for all
// gallery ids in sorted order, then `generatedAt`. Existing entries are copied
// from the current manifest; the new theme gets the given hashes.
export function buildManifestFile({
    currentManifest,
    indexSource,
    themeId,
    entry,
}: {
    currentManifest: string;
    indexSource: string;
    themeId: string;
    entry: {themeHash: string; files: {light: string; dark: string}};
}) {
    const current = JSON.parse(currentManifest) as {entries?: Record<string, ManifestEntry>};
    const entries: Record<string, ManifestEntry> = {};
    for (const id of readGalleryIds(indexSource)) {
        const source = id === themeId ? entry : current.entries?.[id];
        if (!source) {
            continue;
        }
        const files: ManifestEntry['files'] = {};
        if (source.files.light !== undefined) {
            files.light = source.files.light;
        }
        if (source.files.dark !== undefined) {
            files.dark = source.files.dark;
        }
        entries[id] = {themeHash: source.themeHash, files};
    }
    return `${JSON.stringify({entries, generatedAt: 'pinned'}, null, 4)}\n`;
}

const RESERVED_WORDS = new Set(
    (
        'break case catch class const continue debugger default delete do else enum export ' +
        'extends false finally for function if implements import in instanceof interface let ' +
        'new null package private protected public return static super switch this throw true ' +
        'try typeof var void while with yield await arguments eval undefined'
    ).split(' '),
);

const camelCase = (id: string) => id.replace(/-([a-z0-9])/g, (_match, char) => char.toUpperCase());

function toIdentifier(id: string, taken: Set<string>) {
    let name = camelCase(id);
    if (/^[0-9]/.test(name)) {
        name = `theme${name.charAt(0).toUpperCase()}${name.slice(1)}`;
    }
    if (RESERVED_WORDS.has(name) || taken.has(name)) {
        name = `${name}Meta`;
    }
    while (taken.has(name)) {
        name = `${name}_`;
    }
    return name;
}

const PRINT_WIDTH = 100;
const RAW_META_RE = /const RAW_META: unknown\[\] = \[([^\]]*)\];/;
const IMPORT_STATEMENT_RE = /^import\s[\s\S]*?\sfrom\s+'([^']+)';\n/gm;
const IDENTIFIER_RE = /\b[A-Za-z_$][\w$]*\b/g;

// Registers a new theme in `gallery/index.ts`: adds the meta import in
// alphabetical position (eslint `import/order` with `alphabetize: asc`) and
// the identifier to `RAW_META`, formatted the way prettier prints it.
export function addThemeToIndex(source: string, themeId: string) {
    if (readGalleryIds(source).includes(themeId)) {
        throw new Error(`Theme ${themeId} is already registered`);
    }
    const rawMetaMatch = source.match(RAW_META_RE);
    if (!rawMetaMatch || rawMetaMatch.index === undefined) {
        throw new Error('RAW_META declaration not found in gallery/index.ts');
    }

    const taken = new Set(source.match(IDENTIFIER_RE));
    const identifier = toIdentifier(themeId, taken);
    const modulePath = `./${themeId}.meta.json`;

    const imports = Array.from(source.matchAll(IMPORT_STATEMENT_RE));
    const relativeImports = imports.filter((match) => match[1].startsWith('./'));
    const next = relativeImports.find((match) => match[1] > modulePath);
    const importLine = `import ${identifier} from '${modulePath}';\n`;
    let insertAt = next?.index;
    if (insertAt === undefined) {
        const last = relativeImports[relativeImports.length - 1] ?? imports[imports.length - 1];
        if (last?.index === undefined) {
            throw new Error('No imports found in gallery/index.ts');
        }
        insertAt = last.index + last[0].length;
    }
    let updated = source.slice(0, insertAt) + importLine + source.slice(insertAt);

    // RAW_META follows the import order, which is the id order.
    const identifierToId = new Map<string, string>();
    for (const match of updated.matchAll(IMPORT_RE)) {
        const name = match[0].match(/import\s+(\w+)\s+from/)?.[1];
        if (name) {
            identifierToId.set(name, match[1]);
        }
    }
    const items = (updated.match(RAW_META_RE)?.[1] ?? '')
        .split(',')
        .map((item) => item.trim())
        .filter(Boolean);
    const position = items.findIndex((item) => (identifierToId.get(item) ?? item) > themeId);
    items.splice(position === -1 ? items.length : position, 0, identifier);

    const singleLine = `const RAW_META: unknown[] = [${items.join(', ')}];`;
    const declaration =
        singleLine.length <= PRINT_WIDTH
            ? singleLine
            : `const RAW_META: unknown[] = [\n${items
                  .map((item) => `    ${item},`)
                  .join('\n')}\n];`;
    updated = updated.replace(RAW_META_RE, declaration);
    return updated;
}

export interface GalleryFile {
    path: string;
    content: string | Buffer;
}

export interface UpstreamSnapshot {
    packageJson: string;
    indexSource: string;
    manifest: string;
    /** Raw bytes of `PREVIEW_SOURCE_PATHS`, `null` when a file is missing. */
    previewSources: Record<PreviewSourceKey, Buffer | null>;
}

// All files of the gallery PR for a validated theme and its rendered previews.
export function buildGalleryFiles({
    metadata,
    payload,
    previews,
    upstream,
}: {
    metadata: ThemeMetadata;
    payload: ThemePayload;
    previews: {light: Buffer; dark: Buffer};
    upstream: UpstreamSnapshot;
}): GalleryFile[] {
    const metaFile = formatMetaFile(metadata);
    const themeFile = formatThemeFile(payload);
    const sourceHashes = Object.fromEntries(
        Object.entries(upstream.previewSources).map(([key, buffer]) => [
            key,
            buffer ? sha256(buffer) : null,
        ]),
    ) as PreviewSourceHashes;
    const themeHash = computeThemeHash({
        themeFile,
        metaFile,
        versions: readPackageVersions(upstream.packageJson),
        sourceHashes,
    });
    const indexSource = addThemeToIndex(upstream.indexSource, metadata.id);
    const manifest = buildManifestFile({
        currentManifest: upstream.manifest,
        indexSource,
        themeId: metadata.id,
        entry: {
            themeHash,
            files: {light: sha256(previews.light), dark: sha256(previews.dark)},
        },
    });

    return [
        {path: `${GALLERY_DIR}/${metadata.id}.meta.json`, content: metaFile},
        {path: `${GALLERY_DIR}/${metadata.id}.theme.json`, content: themeFile},
        {path: `${GALLERY_DIR}/index.ts`, content: indexSource},
        {path: `${PREVIEWS_DIR}/${metadata.id}-light.png`, content: previews.light},
        {path: `${PREVIEWS_DIR}/${metadata.id}-dark.png`, content: previews.dark},
        {path: `${PREVIEWS_DIR}/previews.manifest.json`, content: manifest},
    ];
}
