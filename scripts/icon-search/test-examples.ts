/* eslint-disable no-console */
/**
 * Test example user-uploaded images through the search pipeline.
 * Usage: npx tsx scripts/icon-search/test-examples.ts
 */
import fs from 'fs';
import path from 'path';

import {AutoProcessor, CLIPVisionModelWithProjection, RawImage} from '@huggingface/transformers';
import sharp from 'sharp';

import {normalizeQueryImage} from '../../src/api/normalize-image';

import {EMBEDDINGS_JSON_PATH} from './constants';

const MODEL_ID = 'Xenova/clip-vit-base-patch16';
const EXAMPLES_DIR = path.join(__dirname, 'examples');

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
                    `    ${i + 1}. ${icon.name} (${icon.componentName}, ${
                        icon.style
                    }) score=${s.score.toFixed(4)}`,
                );
            }
        }
    }
}

main().catch(console.error);
