import {createHash} from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

import {libs} from '../src/libs.mjs';

const createContentHash = (content) => {
    return createHash('sha256').update(content).digest('hex');
};

const fileExists = async (filePath) => {
    try {
        await fs.access(filePath);
        return true;
    } catch {
        return false;
    }
};

const getPackageReadmePath = (libId) => {
    return path.join(
        fileURLToPath(import.meta.url),
        '../../src/content/local-docs/libs',
        libId,
        'README.md',
    );
};

const getPackageReadme = async (lib) => {
    const readmeUrl = typeof lib.readmeUrl === 'string' ? lib.readmeUrl : lib.readmeUrl['en'];

    const res = await fetch(readmeUrl, {'User-Agent': 'request'});
    if (res.status >= 200 && res.status < 300) {
        return await res.text();
    }

    return undefined;
};

const updatePackageReadme = async (lib) => {
    let readmeContent = '';
    try {
        readmeContent = await getPackageReadme(lib);
    } catch (error) {
        console.error(`Error updating package readme: ${lib.id}`, error);
        return;
    }

    const readmePath = getPackageReadmePath(lib.id);

    if (await fileExists(readmePath)) {
        const currentReadme = await fs.readFile(readmePath, 'utf8');
        const currentReadmeHash = createContentHash(currentReadme);
        const newReadmeHash = createContentHash(readmeContent);

        if (currentReadmeHash === newReadmeHash) {
            console.log(`[README-UPDATER] Package readme is up to date: ${lib.id}`);
            return;
        } else {
            console.log(`[README-UPDATER] Package readme is outdated: ${lib.id}`);
        }
    }

    await fs.writeFile(readmePath, readmeContent);
};

const updatePackagesReadme = async () => {
    console.log('[README-UPDATER] Start updating packages readme');
    await Promise.all(libs.map(updatePackageReadme));
    console.log('[README-UPDATER] Packages readme updated');
};

updatePackagesReadme();
