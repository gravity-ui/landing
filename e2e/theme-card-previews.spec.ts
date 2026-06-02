import {readFile, stat} from 'node:fs/promises';
import path from 'node:path';

import {expect, test} from '@playwright/test';

import {allThemes} from '../src/components/Themes/gallery';

const PREVIEWS_DIR = path.resolve(__dirname, '../public/themes/previews');
const EXPECTED_WIDTH = 370;
const EXPECTED_HEIGHT = 250;

// PNG dimensions sit at bytes 16-24 (big-endian width then height) of the IHDR
// chunk. Parsing them avoids pulling sharp/pngjs into the e2e suite just to
// validate the per-theme card previews exist.
async function pngSize(p: string): Promise<{width: number; height: number}> {
    const buf = await readFile(p);
    if (buf.length < 24 || buf.slice(0, 8).toString('hex') !== '89504e470d0a1a0a') {
        throw new Error(`${p} is not a PNG`);
    }
    return {width: buf.readUInt32BE(16), height: buf.readUInt32BE(20)};
}

test.describe('Theme card previews', () => {
    for (const theme of allThemes) {
        for (const mode of ['light', 'dark'] as const) {
            test(`${theme.id}-${mode}.png exists and matches size`, async () => {
                const file = path.join(PREVIEWS_DIR, `${theme.id}-${mode}.png`);
                await expect(stat(file)).resolves.toBeTruthy();
                const {width, height} = await pngSize(file);
                expect(width).toBe(EXPECTED_WIDTH);
                expect(height).toBe(EXPECTED_HEIGHT);
            });
        }
    }
});
