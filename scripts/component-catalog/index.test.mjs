import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';

import {
    componentNameToId,
    componentNameToTitle,
    generateComponentCatalog,
    getComponentNamesFromTree,
} from './index.mjs';

function createPackageFixture({projectRoot, packageName, version}) {
    const packageRoot = path.join(projectRoot, 'node_modules', ...packageName.split('/'));
    fs.mkdirSync(packageRoot, {recursive: true});
    fs.writeFileSync(
        path.join(packageRoot, 'package.json'),
        JSON.stringify({name: packageName, version, main: 'index.js'}),
    );
    fs.writeFileSync(path.join(packageRoot, 'index.js'), 'module.exports = {};\n');
}

function createFetch(tree, requests = []) {
    return async (url, options) => {
        requests.push({url, options});
        return new Response(JSON.stringify({tree, truncated: false}), {status: 200});
    };
}

test('discovers only top-level PascalCase component READMEs', () => {
    const tree = [
        {type: 'blob', path: 'src/components/AvatarStack/README.md'},
        {type: 'blob', path: 'src/components/HTTPServer/README.md'},
        {type: 'blob', path: 'src/components/tabs/README.md'},
        {type: 'blob', path: 'src/components/controls/PasswordInput/README.md'},
        {type: 'blob', path: 'src/components/Button/index.ts'},
        {type: 'tree', path: 'src/components/Modal/README.md'},
    ];

    assert.deepEqual(getComponentNamesFromTree(tree), ['AvatarStack', 'HTTPServer']);
});

test('formats acronyms without splitting every capital', () => {
    assert.equal(componentNameToId('HTTPServerURL'), 'http-server-url');
    assert.equal(componentNameToTitle('HTTPServerURL'), 'HTTP Server URL');
    assert.equal(componentNameToId('AvatarStack'), 'avatar-stack');
    assert.equal(componentNameToTitle('AvatarStack'), 'Avatar Stack');
});

test('generates a catalog from the exact installed package tag', async (context) => {
    const projectRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'component-catalog-'));
    context.after(() => fs.rmSync(projectRoot, {recursive: true, force: true}));
    createPackageFixture({projectRoot, packageName: '@example/ui', version: '1.2.3'});

    const requests = [];
    const catalogPath = path.join(projectRoot, 'src/data/component-catalog.json');
    const {catalog, cacheHit} = await generateComponentCatalog({
        projectRoot,
        catalogPath,
        libraries: [
            {
                id: 'ui',
                packageName: '@example/ui',
                githubRepository: 'example/ui',
            },
        ],
        fetchImpl: createFetch(
            [{type: 'blob', path: 'src/components/FooBar/README.md'}],
            requests,
        ),
        githubToken: 'secret',
    });

    assert.equal(cacheHit, false);
    assert.equal(requests[0].url, 'https://api.github.com/repos/example/ui/git/trees/v1.2.3?recursive=1');
    assert.equal(requests[0].options.headers.Authorization, 'Bearer secret');
    assert.deepEqual(catalog.libraries.ui.components, [
        {
            id: 'foo-bar',
            name: 'FooBar',
            title: 'Foo Bar',
            githubUrl: 'https://github.com/example/ui/tree/v1.2.3/src/components/FooBar',
            readmeUrl: {
                en: 'https://raw.githubusercontent.com/example/ui/v1.2.3/src/components/FooBar/README.md',
                ru: 'https://raw.githubusercontent.com/example/ui/v1.2.3/src/components/FooBar/README-ru.md',
            },
        },
    ]);
    assert.deepEqual(JSON.parse(fs.readFileSync(catalogPath, 'utf8')), catalog);
});

test('reuses a catalog while exact package versions are unchanged', async (context) => {
    const projectRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'component-catalog-'));
    context.after(() => fs.rmSync(projectRoot, {recursive: true, force: true}));
    createPackageFixture({projectRoot, packageName: '@example/ui', version: '1.2.3'});

    const catalogPath = path.join(projectRoot, 'catalog.json');
    const libraries = [
        {id: 'ui', packageName: '@example/ui', githubRepository: 'example/ui'},
    ];
    await generateComponentCatalog({
        projectRoot,
        catalogPath,
        libraries,
        fetchImpl: createFetch([{type: 'blob', path: 'src/components/Foo/README.md'}]),
    });

    const {cacheHit} = await generateComponentCatalog({
        projectRoot,
        catalogPath,
        libraries,
        fetchImpl: () => {
            throw new Error('cache miss');
        },
    });

    assert.equal(cacheHit, true);
});

test('refreshes the catalog when an installed package version changes', async (context) => {
    const projectRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'component-catalog-'));
    context.after(() => fs.rmSync(projectRoot, {recursive: true, force: true}));
    createPackageFixture({projectRoot, packageName: '@example/ui', version: '1.2.3'});

    const catalogPath = path.join(projectRoot, 'catalog.json');
    const libraries = [
        {id: 'ui', packageName: '@example/ui', githubRepository: 'example/ui'},
    ];
    await generateComponentCatalog({
        projectRoot,
        catalogPath,
        libraries,
        fetchImpl: createFetch([{type: 'blob', path: 'src/components/Foo/README.md'}]),
    });

    createPackageFixture({projectRoot, packageName: '@example/ui', version: '2.0.0'});
    const requests = [];
    const {catalog, cacheHit} = await generateComponentCatalog({
        projectRoot,
        catalogPath,
        libraries,
        fetchImpl: createFetch(
            [{type: 'blob', path: 'src/components/Bar/README.md'}],
            requests,
        ),
    });

    assert.equal(cacheHit, false);
    assert.match(requests[0].url, /\/v2\.0\.0\?/);
    assert.equal(catalog.libraries.ui.components[0].name, 'Bar');
});

test('fails closed on truncated or malformed GitHub trees', async (context) => {
    const projectRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'component-catalog-'));
    context.after(() => fs.rmSync(projectRoot, {recursive: true, force: true}));
    createPackageFixture({projectRoot, packageName: '@example/ui', version: '1.2.3'});

    const options = {
        projectRoot,
        catalogPath: path.join(projectRoot, 'catalog.json'),
        libraries: [
            {id: 'ui', packageName: '@example/ui', githubRepository: 'example/ui'},
        ],
    };

    await assert.rejects(
        generateComponentCatalog({
            ...options,
            fetchImpl: async () =>
                new Response(JSON.stringify({tree: [], truncated: true}), {status: 200}),
        }),
        /GitHub tree is truncated/,
    );
    await assert.rejects(
        generateComponentCatalog({
            ...options,
            fetchImpl: async () => new Response(JSON.stringify({}), {status: 200}),
        }),
        /GitHub tree is missing/,
    );
});

test('reports GitHub API errors without overwriting the previous catalog', async (context) => {
    const projectRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'component-catalog-'));
    context.after(() => fs.rmSync(projectRoot, {recursive: true, force: true}));
    createPackageFixture({projectRoot, packageName: '@example/ui', version: '1.2.3'});

    const catalogPath = path.join(projectRoot, 'catalog.json');
    fs.writeFileSync(catalogPath, '{"previous":true}\n');

    await assert.rejects(
        generateComponentCatalog({
            projectRoot,
            catalogPath,
            libraries: [
                {id: 'ui', packageName: '@example/ui', githubRepository: 'example/ui'},
            ],
            fetchImpl: async () => new Response('rate limited', {status: 403}),
        }),
        /GitHub tree request failed.*403 rate limited/,
    );
    assert.equal(fs.readFileSync(catalogPath, 'utf8'), '{"previous":true}\n');
});
