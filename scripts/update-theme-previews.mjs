/* eslint-disable no-console */
// Generate per-theme card preview PNGs by snapshotting the hidden
// /themes/_internal/card-preview/<id> route with Playwright. Output lands in
// `public/themes/previews/<id>-<mode>.png` and a SHA-256 manifest at
// `public/themes/previews/previews.manifest.json` skips re-rendering when
// nothing relevant changed. Pass `--check` to fail without writing - used
// by CI to keep contributors honest.
//
// Assumes a running Next server at http://localhost:3010 with
// NEXT_PUBLIC_ENABLE_PREVIEW_ROUTES=1 (or whatever BASE_URL is set to).

import {createHash} from 'node:crypto';
import {mkdir, readFile, writeFile} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

// `playwright` itself is not a declared dependency — it only resolves as a
// transitive dep of `@playwright/test`, which re-exports the browser types.
import {chromium} from '@playwright/test';
import sharp from 'sharp';

const here = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(here, '..');
const GALLERY_DIR = path.join(ROOT, 'src/components/Themes/gallery');
const PREVIEWS_DIR = path.join(ROOT, 'public/themes/previews');
const MANIFEST_PATH = path.join(PREVIEWS_DIR, 'previews.manifest.json');

const BASE_URL = process.env.BASE_URL || 'http://localhost:3010';
// Logical viewport equals the `#capture-root` size in the hidden route. The
// table is rendered at its natural ~740-wide layout but clipped to this box
// so the captured frame zooms onto the brand button + top rows.
const CAPTURE_WIDTH = 555;
const CAPTURE_HEIGHT = 375;
// Output PNG matches 2x DPR of the 370x250 card-preview display size so the
// image stays crisp on retina without browser-side upscale.
const OUTPUT_WIDTH = 740;
const OUTPUT_HEIGHT = 500;
const CAPTURE_DPR = 2;
const MODES = ['light', 'dark'];

const CHECK_ONLY = process.argv.includes('--check');

async function fileSha256(p) {
    try {
        const buf = await readFile(p);
        return createHash('sha256').update(buf).digest('hex');
    } catch (err) {
        if (err && err.code === 'ENOENT') {
            return null;
        }
        throw err;
    }
}

async function readJson(p) {
    return JSON.parse(await readFile(p, 'utf8'));
}

async function loadThemeIds() {
    const indexSrc = await readFile(path.join(GALLERY_DIR, 'index.ts'), 'utf8');
    const importLines =
        indexSrc.match(/import\s+\w+\s+from\s+'.\/([a-z0-9-]+)\.meta\.json'/g) || [];
    const ids = importLines
        .map((line) => {
            const m = line.match(/'\.\/([a-z0-9-]+)\.meta\.json'/);
            return m ? m[1] : null;
        })
        .filter((id) => Boolean(id));
    if (!ids.length) {
        throw new Error('No theme ids resolved from gallery/index.ts');
    }
    return ids.sort();
}

async function packageVersions() {
    const pkg = await readJson(path.join(ROOT, 'package.json'));
    const deps = {...pkg.dependencies, ...pkg.devDependencies};
    return {
        uikit: deps['@gravity-ui/uikit'] || null,
        themer: deps['@gravity-ui/uikit-themer'] || null,
    };
}

async function buildManifestEntry(id, versions, sourceHashes) {
    const themePayload = await readFile(path.join(GALLERY_DIR, `${id}.theme.json`), 'utf8');
    const metaPayload = await readFile(path.join(GALLERY_DIR, `${id}.meta.json`), 'utf8');
    const hash = createHash('sha256');
    hash.update(themePayload);
    hash.update('\0');
    hash.update(metaPayload);
    hash.update('\0');
    hash.update(JSON.stringify(versions));
    hash.update('\0');
    hash.update(JSON.stringify(sourceHashes));
    return hash.digest('hex');
}

async function loadExistingManifest() {
    try {
        return await readJson(MANIFEST_PATH);
    } catch (err) {
        if (err && err.code === 'ENOENT') {
            return {entries: {}};
        }
        throw err;
    }
}

async function ensureDir(p) {
    await mkdir(p, {recursive: true});
}

async function capture(page, id, mode) {
    const url = `${BASE_URL}/themes/_internal/card-preview/${id}?mode=${mode}`;
    await page.emulateMedia({colorScheme: mode, reducedMotion: 'reduce'});
    await page.goto(url, {waitUntil: 'domcontentloaded'});
    await page.waitForFunction(
        // eslint-disable-next-line no-undef
        () => document.documentElement.dataset.themePreviewReady === '1',
        null,
        {timeout: 20000},
    );
    const captureRoot = page.locator('#capture-root');
    const rawBuffer = await captureRoot.screenshot({type: 'png', omitBackground: false});
    const png = await sharp(rawBuffer)
        .resize(OUTPUT_WIDTH, OUTPUT_HEIGHT, {
            fit: 'cover',
            position: 'left top',
            kernel: 'lanczos3',
        })
        .png({compressionLevel: 9, adaptiveFiltering: true})
        .withMetadata({})
        .toBuffer();
    return png;
}

async function pngOnDiskMatches(p, buffer) {
    try {
        const existing = await readFile(p);
        if (existing.equals(buffer)) {
            return true;
        }
    } catch (err) {
        if (err && err.code !== 'ENOENT') {
            throw err;
        }
    }
    return false;
}

async function main() {
    const ids = await loadThemeIds();
    const versions = await packageVersions();
    // Source-hash bundle: anything whose change would alter the rendered preview.
    const sourceHashes = {
        captureRoute: await fileSha256(
            path.join(ROOT, 'src/pages/themes/_internal/card-preview/[id].tsx'),
        ),
        previewLayout: await fileSha256(
            path.join(ROOT, 'src/components/UISamples/PreviewLayout/PreviewLayout.tsx'),
        ),
        tablePreview: await fileSha256(
            path.join(ROOT, 'src/components/UISamples/TablePreview/TablePreview.tsx'),
        ),
    };

    await ensureDir(PREVIEWS_DIR);
    const manifest = await loadExistingManifest();
    const nextManifest = {entries: {}, generatedAt: 'pinned'};

    const browser = await chromium.launch({
        args: ['--font-render-hinting=none', '--force-color-profile=srgb', '--disable-lcd-text'],
    });
    const context = await browser.newContext({
        viewport: {width: CAPTURE_WIDTH, height: CAPTURE_HEIGHT},
        deviceScaleFactor: CAPTURE_DPR,
    });
    const page = await context.newPage();

    let changed = 0;
    let total = 0;
    let wouldChange = 0;

    try {
        for (const id of ids) {
            const themeHash = await buildManifestEntry(id, versions, sourceHashes);
            const previewFiles = {};
            for (const mode of MODES) {
                total++;
                const fileName = `${id}-${mode}.png`;
                const outPath = path.join(PREVIEWS_DIR, fileName);
                const prevEntry = manifest.entries?.[id];
                const onDiskHash = await fileSha256(outPath);
                const upToDate =
                    prevEntry &&
                    prevEntry.themeHash === themeHash &&
                    prevEntry.files?.[mode] &&
                    prevEntry.files[mode] === onDiskHash &&
                    onDiskHash !== null;

                if (upToDate) {
                    previewFiles[mode] = onDiskHash;
                    continue;
                }

                const buf = await capture(page, id, mode);
                if (CHECK_ONLY) {
                    if (!(await pngOnDiskMatches(outPath, buf))) {
                        wouldChange++;
                        console.warn(`[stale] ${fileName}`);
                    }
                    previewFiles[mode] = createHash('sha256').update(buf).digest('hex');
                    continue;
                }

                await writeFile(outPath, buf);
                previewFiles[mode] = createHash('sha256').update(buf).digest('hex');
                changed++;
                console.log(`[write] ${fileName}`);
            }
            nextManifest.entries[id] = {themeHash, files: previewFiles};
        }
    } finally {
        await browser.close();
    }

    if (CHECK_ONLY) {
        const manifestBuf = Buffer.from(JSON.stringify(nextManifest, null, 4) + '\n');
        const existing = await readFile(MANIFEST_PATH).catch((e) => {
            if (e?.code === 'ENOENT') return null;
            throw e;
        });
        const manifestChanged = !existing || !existing.equals(manifestBuf);
        if (wouldChange > 0 || manifestChanged) {
            console.error(
                `Theme card previews are stale (${wouldChange} of ${total} files differ).`,
            );
            console.error(
                'Run the "Update theme previews" workflow on this branch (Actions tab -> "Update theme previews" -> Run workflow) to regenerate.',
            );
            process.exit(1);
        }
        console.log(`Theme card previews up to date (${total} files).`);
        return;
    }

    await writeFile(MANIFEST_PATH, JSON.stringify(nextManifest, null, 4) + '\n');
    console.log(`Done. ${changed} of ${total} files rewritten.`);
}

main().catch((err) => {
    console.error(err);
    process.exitCode = 1;
});
