import {readFileSync} from 'fs';
import path from 'path';

import {getThemePreviewPath} from '@gravity-ui/themes';
import type {CatalogNames} from '@gravity-ui/themes';
import {expect, test} from '@playwright/test';

const catalogDir = path.dirname(require.resolve('@gravity-ui/themes/catalog/manifest.json'));
const allThemes: CatalogNames = JSON.parse(
    readFileSync(path.join(catalogDir, 'names.json'), 'utf8'),
);
const getThemePreview = (id: string, mode: 'light' | 'dark') =>
    readFileSync(path.join(catalogDir, getThemePreviewPath(id, mode)));

// The catalog ships 740x500 PNGs; cards display them at half size.
const EXPECTED_WIDTH = 740;
const EXPECTED_HEIGHT = 500;

// PNG dimensions sit at bytes 16-24 (big-endian width then height) of the IHDR
// chunk. Parsing them avoids pulling sharp/pngjs into the e2e suite just to
// validate the per-theme card previews exist.
function pngSize(buf: Buffer): {width: number; height: number} {
    if (buf.length < 24 || buf.subarray(0, 8).toString('hex') !== '89504e470d0a1a0a') {
        throw new Error('Catalog preview is not a PNG');
    }
    return {width: buf.readUInt32BE(16), height: buf.readUInt32BE(20)};
}

test.describe('Theme card previews', () => {
    for (const theme of allThemes) {
        for (const mode of ['light', 'dark'] as const) {
            test(`${theme.id}-${mode}.png exists and matches size`, async () => {
                const {width, height} = pngSize(getThemePreview(theme.id, mode));
                expect(width).toBe(EXPECTED_WIDTH);
                expect(height).toBe(EXPECTED_HEIGHT);
            });
        }
    }
});
