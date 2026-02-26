/* eslint-disable no-console */
/**
 * Compute CLIP embeddings for all rendered icon PNGs.
 *
 * Uses multi-augmentation: for each icon, computes embeddings from several
 * augmented renders (original, smaller, larger, inverted) and averages them
 * to produce a more robust stored embedding.
 *
 * Run render-svgs.ts first, then:
 *   npx tsx scripts/icon-search/compute-embeddings.ts
 */

import fs from 'fs';

import {AutoProcessor, CLIPVisionModelWithProjection, RawImage} from '@huggingface/transformers';
import sharp from 'sharp';

import {EMBEDDINGS_JSON_PATH, ICONS_LIBRARY_METADATA_PATH, RENDERED_ICONS_DIR} from './constants';

const MODEL_ID = 'Xenova/clip-vit-base-patch16';
const TARGET_SIZE = 224;

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

// Each augmented image has an associated weight for weighted averaging.
type AugmentedImage = {buffer: Buffer; weight: number};

async function createAugmentedImages(pngPath: string): Promise<AugmentedImage[]> {
    const original = fs.readFileSync(pngPath);
    // Original gets double weight to keep the stored embedding close to the canonical render
    const images: AugmentedImage[] = [{buffer: original, weight: 2}];

    // Extract the icon from the center of the original 224x224 image
    // Original is rendered at 200px icon on 224px canvas (offset=12)
    const iconBuffer = await sharp(original)
        .extract({left: 12, top: 12, width: 200, height: 200})
        .toBuffer();

    // Smaller icon (140px on 224×224 canvas)
    const smallIcon = await sharp(iconBuffer).resize(140, 140).png().toBuffer();
    const smallOffset = Math.floor((TARGET_SIZE - 140) / 2);
    const smallImg = await sharp({
        create: {
            width: TARGET_SIZE,
            height: TARGET_SIZE,
            channels: 3,
            background: {r: 255, g: 255, b: 255},
        },
    })
        .composite([{input: smallIcon, left: smallOffset, top: smallOffset}])
        .png()
        .toBuffer();
    images.push({buffer: smallImg, weight: 1});

    // Even smaller icon (80px on 224×224 canvas) — helps match tiny user uploads
    const tinyIcon = await sharp(iconBuffer).resize(80, 80).png().toBuffer();
    const tinyOffset = Math.floor((TARGET_SIZE - 80) / 2);
    const tinyImg = await sharp({
        create: {
            width: TARGET_SIZE,
            height: TARGET_SIZE,
            channels: 3,
            background: {r: 255, g: 255, b: 255},
        },
    })
        .composite([{input: tinyIcon, left: tinyOffset, top: tinyOffset}])
        .png()
        .toBuffer();
    images.push({buffer: tinyImg, weight: 1});

    // Inverted colors (white icon on black background)
    const invertedIcon = await sharp(iconBuffer)
        .resize(200, 200)
        .negate({alpha: false})
        .png()
        .toBuffer();
    const invertedOffset = Math.floor((TARGET_SIZE - 200) / 2);
    const invertedImg = await sharp({
        create: {
            width: TARGET_SIZE,
            height: TARGET_SIZE,
            channels: 3,
            background: {r: 0, g: 0, b: 0},
        },
    })
        .composite([{input: invertedIcon, left: invertedOffset, top: invertedOffset}])
        .png()
        .toBuffer();
    images.push({buffer: invertedImg, weight: 1});

    // Gray background
    const grayIcon = await sharp(iconBuffer).resize(200, 200).png().toBuffer();
    const grayOffset = Math.floor((TARGET_SIZE - 200) / 2);
    const grayImg = await sharp({
        create: {
            width: TARGET_SIZE,
            height: TARGET_SIZE,
            channels: 3,
            background: {r: 200, g: 200, b: 200},
        },
    })
        .composite([{input: grayIcon, left: grayOffset, top: grayOffset}])
        .png()
        .toBuffer();
    images.push({buffer: grayImg, weight: 1});

    // Off-center icon — helps match imprecisely cropped uploads
    const offsetIcon = await sharp(iconBuffer).resize(160, 160).png().toBuffer();
    const offsetImg = await sharp({
        create: {
            width: TARGET_SIZE,
            height: TARGET_SIZE,
            channels: 3,
            background: {r: 255, g: 255, b: 255},
        },
    })
        .composite([{input: offsetIcon, left: 10, top: 50}])
        .png()
        .toBuffer();
    images.push({buffer: offsetImg, weight: 1});

    return images;
}

export async function computeEmbeddings() {
    if (!fs.existsSync(RENDERED_ICONS_DIR) || fs.readdirSync(RENDERED_ICONS_DIR).length === 0) {
        console.error(`No rendered icons found in ${RENDERED_ICONS_DIR}`);
        console.error('Run render-svgs.ts first.');
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
    console.log('Using multi-augmentation embeddings (7 weighted variants per icon).');

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

        const augImages = await createAugmentedImages(pngPath);
        const embeddings: {data: Float32Array; weight: number}[] = [];

        for (const aug of augImages) {
            const imgBytes = new Uint8Array(aug.buffer);
            const image = await RawImage.fromBlob(new Blob([imgBytes]));
            const imageInputs = await processor(image);

            // eslint-disable-next-line camelcase
            const {image_embeds: imageEmbeds} = await visionModel(imageInputs);
            embeddings.push({data: imageEmbeds.data as Float32Array, weight: aug.weight});
        }

        // Weighted average of the embeddings
        const dim = embeddings[0].data.length;
        const averaged = new Float32Array(dim);
        let totalWeight = 0;
        for (const emb of embeddings) {
            for (let j = 0; j < dim; j++) {
                averaged[j] += emb.data[j] * emb.weight;
            }
            totalWeight += emb.weight;
        }
        for (let j = 0; j < dim; j++) {
            averaged[j] /= totalWeight;
        }

        // Normalize
        let norm = 0;
        for (let j = 0; j < dim; j++) {
            norm += averaged[j] * averaged[j];
        }
        norm = Math.sqrt(norm);

        const normalized: number[] = new Array(dim);
        for (let j = 0; j < dim; j++) {
            normalized[j] = averaged[j] / norm;
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

    const embDim = allEmbeddings[0].length;
    const flat: number[] = [];
    for (const emb of allEmbeddings) {
        for (const v of emb) {
            flat.push(Math.round(v * 1e6) / 1e6);
        }
    }

    const output = {dim: embDim, icons: iconIndex, embeddings: flat};
    fs.writeFileSync(EMBEDDINGS_JSON_PATH, JSON.stringify(output));

    const sizeMb = (Buffer.byteLength(JSON.stringify(output)) / (1024 * 1024)).toFixed(1);
    console.log(`\nDone: ${iconIndex.length} embeddings computed, ${skipped} skipped.`);
    console.log(`Dimensions: ${embDim}`);
    console.log(`File size: ${sizeMb} MB`);
    console.log(`Saved to: ${EMBEDDINGS_JSON_PATH}`);
}
