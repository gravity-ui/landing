/* eslint-disable no-console */
/**
 * Render all SVG icons from @gravity-ui/icons to 224×224 PNG files.
 */

import fs from 'fs';
import path from 'path';

import sharp from 'sharp';

import {ICONS_LIBRARY_DIR, ICONS_LIBRARY_METADATA_PATH, RENDERED_ICONS_DIR} from './constants';

const TARGET_SIZE = 224;
const ICON_SIZE = 160;

type IconMeta = {
    name: string;
    svgName: string;
    componentName: string;
    style: string;
};

async function renderSvg(svgPath: string, outputPath: string): Promise<void> {
    const svgBuffer = fs.readFileSync(svgPath);
    const iconPng = await sharp(svgBuffer).resize(ICON_SIZE, ICON_SIZE).png().toBuffer();
    const offset = Math.floor((TARGET_SIZE - ICON_SIZE) / 2);

    await sharp({
        create: {
            width: TARGET_SIZE,
            height: TARGET_SIZE,
            channels: 3,
            background: {r: 255, g: 255, b: 255},
        },
    })
        .composite([{input: iconPng, left: offset, top: offset}])
        .png()
        .toFile(outputPath);
}

export async function renderSvgs() {
    if (!fs.existsSync(ICONS_LIBRARY_DIR)) {
        console.error(`Icons library directory not found: ${ICONS_LIBRARY_DIR}`);
        console.error('Make sure node_modules are installed (npm install).');
        process.exit(1);
    }

    fs.mkdirSync(RENDERED_ICONS_DIR, {recursive: true});

    const metadata = JSON.parse(fs.readFileSync(ICONS_LIBRARY_METADATA_PATH, 'utf-8'));
    const icons: IconMeta[] = metadata.icons;
    const total = icons.length;
    let rendered = 0;
    let skipped = 0;

    for (let i = 0; i < total; i++) {
        const icon = icons[i];
        const svgPath = path.join(ICONS_LIBRARY_DIR, 'svgs', `${icon.svgName}.svg`);

        if (!fs.existsSync(svgPath)) {
            console.log(`  SKIP: ${icon.svgName}.svg not found`);
            skipped++;
            continue;
        }

        const outputPath = path.join(RENDERED_ICONS_DIR, `${icon.svgName}.png`);
        await renderSvg(svgPath, outputPath);
        rendered++;

        if ((i + 1) % 100 === 0 || i + 1 === total) {
            console.log(`  [${i + 1}/${total}] rendered`);
        }
    }

    console.log(`\nDone: ${rendered} rendered, ${skipped} skipped.`);
    console.log(`Output: ${RENDERED_ICONS_DIR}`);
}
