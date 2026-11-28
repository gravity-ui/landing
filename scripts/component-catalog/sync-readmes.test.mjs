import assert from 'node:assert/strict';
import {mkdtemp, readFile, rm, writeFile} from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';

import {syncComponentReadmes} from './sync-readmes.mjs';

test('syncs a tagged README and schedules changed or missing translations', async (t) => {
    const docsRoot = await mkdtemp(path.join(os.tmpdir(), 'component-readmes-'));
    t.after(() => rm(docsRoot, {recursive: true, force: true}));
    const componentDir = path.join(docsRoot, 'navigation', 'footer');
    const input = path.join(componentDir, 'README.md');
    const ja = path.join(componentDir, 'README-ja.md');
    const es = path.join(componentDir, 'README-es.md');
    const url =
        'https://raw.githubusercontent.com/gravity-ui/navigation/v6.3.1/src/components/Footer/README.md';
    let response = () => new Response('# Footer');
    const sync = () =>
        syncComponentReadmes({
            catalog: {
                libraries: {navigation: {components: [{id: 'footer', readmeUrl: {en: url}}]}},
            },
            docsRoot,
            locales: ['ja', 'es'],
            fetchReadme: async (requestedUrl) => {
                assert.equal(requestedUrl, url);
                return response();
            },
        });

    assert.deepEqual(await sync(), [{input, locales: 'ja es', outputs: [ja, es]}]);
    assert.equal(await readFile(input, 'utf8'), '# Footer');
    await writeFile(ja, '# フッター');
    assert.deepEqual(await sync(), [{input, locales: 'es', outputs: [es]}]);
    await writeFile(es, '# Pie de página');
    assert.deepEqual(await sync(), []);

    response = () => new Response('# Updated Footer');
    assert.deepEqual(await sync(), [{input, locales: 'ja es', outputs: [ja, es]}]);
    response = () => new Response('', {status: 503});
    await assert.rejects(sync(), /503/);
    assert.equal(await readFile(input, 'utf8'), '# Updated Footer');
});
