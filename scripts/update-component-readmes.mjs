import {appendFile, readFile} from 'node:fs/promises';

import config from '../next-i18next.config.js';

import {syncComponentReadmes} from './component-catalog/sync-readmes.mjs';

const catalog = JSON.parse(await readFile('src/data/component-catalog.json', 'utf8'));
const locales = config.i18n.locales.filter((locale) => locale !== 'en' && locale !== 'ru');
const pending = await syncComponentReadmes({
    catalog,
    docsRoot: 'src/content/local-docs/components',
    locales,
});

console.log(`[COMPONENT-READMES] ${pending.length} README files need translation`);
if (process.env.GITHUB_OUTPUT) {
    await appendFile(process.env.GITHUB_OUTPUT, `matrix=${JSON.stringify(pending)}\n`);
}
