import path from 'node:path';
import {fileURLToPath} from 'node:url';

import {generateComponentCatalog} from './component-catalog/index.mjs';

const ROOT_DIR = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');

const {catalog, cacheHit} = await generateComponentCatalog({
    projectRoot: ROOT_DIR,
    catalogPath: path.join(ROOT_DIR, 'src/data/component-catalog.json'),
    githubToken: process.env.GITHUB_TOKEN ?? process.env.GH_TOKEN,
});

console.log(`[COMPONENT-CATALOG] ${cacheHit ? 'cache hit' : 'fetched exact GitHub tags'}`);
for (const [libraryId, library] of Object.entries(catalog.libraries)) {
    console.log(
        `[COMPONENT-CATALOG] ${libraryId}@${library.version}: ${library.components.length} published components`,
    );
}
