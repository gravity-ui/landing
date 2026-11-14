import {randomBytes} from 'crypto';

import {type Page, chromium} from 'playwright-core';
import sharp from 'sharp';

import type {ThemePayload} from '../../components/Themes/gallery/schema';

import {PREVIEW_MODES} from './config';
import {deleteSubmissionPreview, putSubmissionPreview} from './preview-store';

// Server-side twin of `capture()` in scripts/update-theme-previews.mjs: same
// viewport, DPR, launch args, readiness flag and sharp encoding, so a
// submitted theme gets the same card PNGs as the gallery script renders.

const CAPTURE_WIDTH = 555;
const CAPTURE_HEIGHT = 375;
const OUTPUT_WIDTH = 740;
const OUTPUT_HEIGHT = 500;
const CAPTURE_DPR = 2;
const READY_TIMEOUT_MS = 20000;

type PreviewMode = (typeof PREVIEW_MODES)[number];

export type ThemePreviews = Record<PreviewMode, Buffer>;

async function capture(page: Page, url: string, mode: PreviewMode) {
    await page.emulateMedia({colorScheme: mode, reducedMotion: 'reduce'});
    await page.goto(url, {waitUntil: 'domcontentloaded'});
    await page.waitForFunction(
        () => document.documentElement.dataset.themePreviewReady === '1',
        null,
        {timeout: READY_TIMEOUT_MS},
    );
    const rawBuffer = await page.locator('#capture-root').screenshot({
        type: 'png',
        omitBackground: false,
    });
    return sharp(rawBuffer)
        .resize(OUTPUT_WIDTH, OUTPUT_HEIGHT, {
            fit: 'cover',
            position: 'left top',
            kernel: 'lanczos3',
        })
        .png({compressionLevel: 9, adaptiveFiltering: true})
        .withMetadata({})
        .toBuffer();
}

async function renderNow(payload: ThemePayload, baseUrl: string): Promise<ThemePreviews> {
    const token = randomBytes(24).toString('base64url');
    putSubmissionPreview(token, payload);
    const browser = await chromium.launch({
        args: ['--font-render-hinting=none', '--force-color-profile=srgb', '--disable-lcd-text'],
    });
    try {
        const context = await browser.newContext({
            viewport: {width: CAPTURE_WIDTH, height: CAPTURE_HEIGHT},
            deviceScaleFactor: CAPTURE_DPR,
        });
        const page = await context.newPage();
        const result = {} as ThemePreviews;
        for (const mode of PREVIEW_MODES) {
            const url = `${baseUrl}/themes/_internal/theme-submission/${token}?mode=${mode}`;
            result[mode] = await capture(page, url, mode);
        }
        return result;
    } finally {
        deleteSubmissionPreview(token);
        await browser.close();
    }
}

// One Chromium at a time per instance: renders are memory-heavy and rare.
let queue: Promise<unknown> = Promise.resolve();

// Renders the light and dark card previews of a theme by loading the hidden
// render page of this very server (`baseUrl`) in headless Chromium.
export function renderThemePreviews(payload: ThemePayload, baseUrl: string) {
    const run = queue.then(() => renderNow(payload, baseUrl));
    queue = run.catch(() => undefined);
    return run;
}
