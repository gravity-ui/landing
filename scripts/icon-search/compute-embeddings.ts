/* eslint-disable no-console */
/**
 * Compute CLIP embeddings for all rendered icon PNGs.
 *
 * Run render_svgs.py first, then:
 *   npx tsx services/icon-search/scripts/compute-embeddings.ts
 */

import fs from 'fs';

import {AutoProcessor, CLIPVisionModelWithProjection, RawImage} from '@huggingface/transformers';

import {EMBEDDINGS_JSON_PATH, ICONS_LIBRARY_METADATA_PATH, RENDERED_ICONS_DIR} from './constants';

const MODEL_ID = 'Xenova/clip-vit-base-patch32';

type IconMeta = {
    name: string;
    svgName: string;
    componentName: string;
    style: string;
};

type IconEntry = {
    name: string;
    componentName: string;
    style: string;
};

export async function computeEmbeddings() {
    if (!fs.existsSync(RENDERED_ICONS_DIR) || fs.readdirSync(RENDERED_ICONS_DIR).length === 0) {
        console.error(`No rendered icons found in ${RENDERED_ICONS_DIR}`);
        console.error('Run render_svgs.py first.');
        process.exit(1);
    }

    const metadata = JSON.parse(fs.readFileSync(ICONS_LIBRARY_METADATA_PATH, 'utf-8'));
    const icons: IconMeta[] = metadata.icons;
    const total = icons.length;

    console.log(`Loading CLIP model ${MODEL_ID}...`);
    const [processor, visionModel] = await Promise.all([
        AutoProcessor.from_pretrained(MODEL_ID),
        CLIPVisionModelWithProjection.from_pretrained(MODEL_ID),
    ]);
    console.log('Model loaded.');

    const iconIndex: IconEntry[] = [];
    const allEmbeddings: number[][] = [];
    let skipped = 0;

    for (let i = 0; i < total; i++) {
        const icon = icons[i];
        const pngPath = `${RENDERED_ICONS_DIR}/${icon.svgName}.png`;

        if (!fs.existsSync(pngPath)) {
            skipped++;
            continue;
        }

        const imgBytes = new Uint8Array(fs.readFileSync(pngPath));
        const image = await RawImage.fromBlob(new Blob([imgBytes]));
        const imageInputs = await processor(image);

        // eslint-disable-next-line camelcase
        const {image_embeds: imageEmbeds} = await visionModel(imageInputs);
        const embData = imageEmbeds.data as Float32Array;

        // Normalize
        let norm = 0;
        for (let j = 0; j < embData.length; j++) {
            norm += embData[j] * embData[j];
        }
        norm = Math.sqrt(norm);

        const normalized: number[] = new Array(embData.length);
        for (let j = 0; j < embData.length; j++) {
            normalized[j] = embData[j] / norm;
        }

        allEmbeddings.push(normalized);
        iconIndex.push({
            name: icon.name,
            componentName: icon.componentName,
            style: icon.style,
        });

        if ((i + 1) % 100 === 0 || i + 1 === total) {
            console.log(`  [${i + 1}/${total}] processed`);
        }
    }

    const dim = allEmbeddings[0].length;
    const flat: number[] = [];
    for (const emb of allEmbeddings) {
        for (const v of emb) {
            flat.push(Math.round(v * 1e6) / 1e6);
        }
    }

    const output = {dim, icons: iconIndex, embeddings: flat};
    fs.writeFileSync(EMBEDDINGS_JSON_PATH, JSON.stringify(output));

    const sizeMb = (Buffer.byteLength(JSON.stringify(output)) / (1024 * 1024)).toFixed(1);
    console.log(`\nDone: ${iconIndex.length} embeddings computed, ${skipped} skipped.`);
    console.log(`Dimensions: ${dim}`);
    console.log(`File size: ${sizeMb} MB`);
    console.log(`Saved to: ${EMBEDDINGS_JSON_PATH}`);
}
