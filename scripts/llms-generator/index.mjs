import fs from 'node:fs/promises';
import path from 'node:path';

import {Library} from './Library.mjs';
import {buildFullLlms, buildRootLlms} from './catalog.mjs';
import {PATHS} from './constants.mjs';
import {loadLibraryDescriptions} from './http.mjs';

export {Library};

// Generate the root llms.txt catalog, the llms-full.txt aggregate, and one
// per-package llms.txt per selected version under public/llms/<id>/<version>/.
// Selected versions per package: latest patch of the last 10 minors, latest
// version of the last 2 majors, and the latest patch overall (union, deduped).
// Output is stable.
export const generateLlmsTxt = async () => {
    console.log('[LLMS-GENERATOR] Starting llms.txt generation');

    const descriptions = await loadLibraryDescriptions();
    const libraries = Library.all();

    // Prime the cache: AI sections + target versions per package, concurrently.
    await Promise.all(
        libraries.map(async (library) => {
            const [extract, versions] = await Promise.all([
                library.getAiSection(),
                library.getTargetVersions(),
            ]);
            if (!extract.hasSection) {
                console.warn(
                    `[LLMS-GENERATOR] no "## For AI agents" section in ${library.id} README — falling back to catalog description`,
                );
            }
            if (versions.length === 0) {
                console.warn(`[LLMS-GENERATOR] no versions resolved for ${library.id}`);
            }
        }),
    );

    const rootText = await buildRootLlms({libraries, descriptions});

    // Write per-package files (clean subtree first to drop stale packages/versions).
    await fs.rm(PATHS.packagesLlmsDir, {recursive: true, force: true});
    const packageTexts = [];
    let fileCount = 0;
    for (const library of libraries) {
        const versions = await library.getTargetVersions();
        // Build all versions for this package concurrently (network-bound).
        const built = await Promise.all(
            versions.map(async (version) => {
                const text = await library.buildPackageLlms({descriptions, version});
                return {version, text};
            }),
        );
        for (const {version, text} of built) {
            // The root catalog links the latest version first; mirror that order
            // in llms-full.txt so the aggregate reads newest-first per package.
            packageTexts.push(text);
            const filePath = library.packageLlmsRelPath(version);
            await fs.mkdir(path.dirname(filePath), {recursive: true});
            await fs.writeFile(filePath, text);
            fileCount += 1;
        }
        // Stable version-less alias mirroring the latest version (versions[] is
        // sorted descending, so built[0] is the newest).
        if (built[0]) {
            const latestPath = library.packageLlmsLatestRelPath();
            await fs.writeFile(latestPath, built[0].text);
            fileCount += 1;
        }
        // Per-major aliases mirroring the latest generated version of each major
        // line. built[] is version-descending, so the first occurrence of a major
        // is its newest generated version.
        const latestByMajor = new Map();
        for (const {version, text} of built) {
            const major = version.split('.')[0];
            if (!latestByMajor.has(major)) latestByMajor.set(major, text);
        }
        for (const [major, text] of latestByMajor) {
            const majorPath = library.packageLlmsMajorRelPath(major);
            await fs.mkdir(path.dirname(majorPath), {recursive: true});
            await fs.writeFile(majorPath, text);
            fileCount += 1;
        }
    }

    const fullText = buildFullLlms(rootText, packageTexts);

    await fs.writeFile(PATHS.rootLlms, rootText);
    await fs.writeFile(PATHS.fullLlms, fullText);

    const rootBytes = Buffer.byteLength(rootText);
    const fullBytes = Buffer.byteLength(fullText);
    console.log(
        `[LLMS-GENERATOR] root llms.txt: ${rootBytes} bytes (${libraries.length} packages)`,
    );
    console.log(`[LLMS-GENERATOR] llms-full.txt: ${fullBytes} bytes (${fileCount} versions)`);
    console.log(`[LLMS-GENERATOR] per-package files written under public/llms/`);
};
