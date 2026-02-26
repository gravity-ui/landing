/* eslint-disable no-console */
/**
 * Test example user-uploaded images through the search pipeline.
 * Usage: npx tsx scripts/icon-search/test-examples.ts
 */
import fs from 'fs';
import path from 'path';

import {AutoProcessor, CLIPVisionModelWithProjection, RawImage} from '@huggingface/transformers';
import sharp from 'sharp';

import {EMBEDDINGS_JSON_PATH} from './constants';

const MODEL_ID = 'Xenova/clip-vit-base-patch16';
const EXAMPLES_DIR = path.join(__dirname, 'examples');

const QUERY_TARGET_SIZE = 224;
const QUERY_ICON_SIZE = 200;

async function normalizeQueryImage(imageBuffer: Buffer): Promise<Buffer> {
    const grayscale = sharp(imageBuffer)
        .flatten({background: {r: 255, g: 255, b: 255}})
        .grayscale();
    const {data, info} = await grayscale.raw().toBuffer({resolveWithObject: true});

    let sum = 0;
    for (let i = 0; i < data.length; i++) {
        sum += data[i];
    }
    const meanBrightness = sum / data.length;
    console.log(
        `    mean brightness: ${meanBrightness.toFixed(1)}, will ${meanBrightness < 128 ? 'INVERT' : 'keep'}`,
    );

    let pipeline = sharp(data, {raw: {width: info.width, height: info.height, channels: 1}});
    if (meanBrightness < 128) {
        pipeline = pipeline.negate({alpha: false});
    }

    pipeline = pipeline.threshold(192);

    const trimmed = await pipeline.trim().png().toBuffer();
    const trimmedMeta = await sharp(trimmed).metadata();
    const trimmedW = trimmedMeta.width || QUERY_ICON_SIZE;
    const trimmedH = trimmedMeta.height || QUERY_ICON_SIZE;
    console.log(`    after trim: ${trimmedW}x${trimmedH}`);

    const scale = Math.min(QUERY_ICON_SIZE / trimmedW, QUERY_ICON_SIZE / trimmedH);
    const newW = Math.round(trimmedW * scale);
    const newH = Math.round(trimmedH * scale);

    const resized = await sharp(trimmed).resize(newW, newH).png().toBuffer();
    const left = Math.floor((QUERY_TARGET_SIZE - newW) / 2);
    const top = Math.floor((QUERY_TARGET_SIZE - newH) / 2);

    return sharp({
        create: {
            width: QUERY_TARGET_SIZE,
            height: QUERY_TARGET_SIZE,
            channels: 3,
            background: {r: 255, g: 255, b: 255},
        },
    })
        .composite([{input: resized, left, top}])
        .png()
        .toBuffer();
}

async function main() {
    const data = JSON.parse(fs.readFileSync(EMBEDDINGS_JSON_PATH, 'utf-8'));
    const embeddings = new Float32Array(data.embeddings);
    const dim = data.dim;
    const icons = data.icons;

    console.log('Loading model...');
    const [processor, visionModel] = await Promise.all([
        AutoProcessor.from_pretrained(MODEL_ID),
        CLIPVisionModelWithProjection.from_pretrained(MODEL_ID),
    ]);

    const files = fs.readdirSync(EXAMPLES_DIR).filter((f) => f.endsWith('.png'));

    for (const file of files) {
        console.log(`\n=== ${file} ===`);
        const imgBuffer = fs.readFileSync(path.join(EXAMPLES_DIR, file));

        const meta = await sharp(imgBuffer).metadata();
        console.log(`  size: ${meta.width}x${meta.height}, channels: ${meta.channels}`);

        for (const mode of ['raw', 'normalized'] as const) {
            let queryBuffer: Buffer;
            if (mode === 'normalized') {
                queryBuffer = await normalizeQueryImage(imgBuffer);
            } else {
                queryBuffer = imgBuffer;
            }

            const imgBytes = new Uint8Array(queryBuffer);
            const image = await RawImage.fromBlob(new Blob([imgBytes]));
            const imageInputs = await processor(image);
            // eslint-disable-next-line camelcase
            const {image_embeds: imageEmbeds} = await visionModel(imageInputs);
            const queryData = imageEmbeds.data as Float32Array;

            let queryNorm = 0;
            for (let j = 0; j < dim; j++) {
                queryNorm += queryData[j] * queryData[j];
            }
            queryNorm = Math.sqrt(queryNorm);

            const scores: {index: number; score: number}[] = [];
            for (let i = 0; i < icons.length; i++) {
                let dot = 0;
                const offset = i * dim;
                for (let j = 0; j < dim; j++) {
                    dot += queryData[j] * embeddings[offset + j];
                }
                scores.push({index: i, score: dot / queryNorm});
            }
            scores.sort((a, b) => b.score - a.score);

            console.log(`  [${mode}] top-10:`);
            for (let i = 0; i < 10; i++) {
                const s = scores[i];
                const icon = icons[s.index];
                console.log(
                    `    ${i + 1}. ${icon.name} (${icon.componentName}, ${icon.style}) score=${s.score.toFixed(4)}`,
                );
            }
        }
    }
}

main().catch(console.error);
