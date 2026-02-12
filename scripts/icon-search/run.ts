/* eslint-disable no-console */
import fs from 'fs';
import path from 'path';

import {computeEmbeddings} from './compute-embeddings';
import {ICONS_LIBRARY_DIR, ICONS_VERSION_PATH} from './constants';
import {renderSvgs} from './render-svgs';

function getInstalledVersion(): string {
    const pkg = JSON.parse(fs.readFileSync(path.join(ICONS_LIBRARY_DIR, 'package.json'), 'utf-8'));
    return pkg.version;
}

function getSavedVersion(): string | null {
    try {
        return fs.readFileSync(ICONS_VERSION_PATH, 'utf-8').trim();
    } catch {
        return null;
    }
}

async function main() {
    const installedVersion = getInstalledVersion();
    const savedVersion = getSavedVersion();

    if (installedVersion === savedVersion) {
        console.log(`Icons version ${installedVersion} unchanged, skipping.`);
        return;
    }

    console.log(
        savedVersion
            ? `Icons version changed: ${savedVersion} -> ${installedVersion}`
            : `First run, icons version: ${installedVersion}`,
    );

    console.log('\n[1/2] Rendering SVGs...\n');
    await renderSvgs();

    console.log('\n[2/2] Computing embeddings...\n');
    await computeEmbeddings();

    fs.writeFileSync(ICONS_VERSION_PATH, installedVersion);
    console.log('\nDone!');
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});
