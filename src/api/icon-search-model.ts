import fs from 'fs';
import path from 'path';

import {AutoProcessor, CLIPVisionModelWithProjection, RawImage} from '@huggingface/transformers';
import sharp from 'sharp';

type IconEntry = {
    name: string;
    componentName: string;
    style: string;
};

type SearchResult = IconEntry & {
    score: number;
};

type EmbeddingsData = {
    dim: number;
    icons: IconEntry[];
    embeddings: number[];
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let processor: any = null;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let visionModel: any = null;
let embeddings: Float32Array | null = null;
let embeddingsDim = 0;
let iconIndex: IconEntry[] | null = null;
let initPromise: Promise<void> | null = null;

const EMBEDDINGS_PATH = path.join(process.cwd(), 'public', 'static', 'icons-embeddings.json');
const MODEL_ID = 'Xenova/clip-vit-base-patch16';

async function init() {
    [processor, visionModel] = await Promise.all([
        AutoProcessor.from_pretrained(MODEL_ID),
        CLIPVisionModelWithProjection.from_pretrained(MODEL_ID),
    ]);

    const data: EmbeddingsData = JSON.parse(fs.readFileSync(EMBEDDINGS_PATH, 'utf-8'));
    embeddings = new Float32Array(data.embeddings);
    embeddingsDim = data.dim;
    iconIndex = data.icons;
}

function ensureLoaded(): Promise<void> {
    if (!initPromise) {
        initPromise = init();
    }
    return initPromise;
}

const QUERY_TARGET_SIZE = 224;
const QUERY_ICON_SIZE = 200;

/**
 * Normalize a query image for consistent CLIP matching:
 * 1. Flatten alpha onto white background, convert to grayscale
 * 2. Auto-invert if dark background (white-on-dark → black-on-white)
 * 3. Apply binary threshold to get crisp black icon on white
 * 4. Trim whitespace, resize icon to fill ~200px, center on 224×224 white canvas
 */
async function normalizeQueryImage(imageBuffer: Buffer): Promise<Buffer> {
    const grayscale = sharp(imageBuffer)
        .flatten({background: {r: 255, g: 255, b: 255}})
        .grayscale();
    const {data, info} = await grayscale.raw().toBuffer({resolveWithObject: true});

    // Check mean brightness to decide if we need to invert
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
        sum += data[i];
    }
    const meanBrightness = sum / data.length;

    let pipeline = sharp(data, {raw: {width: info.width, height: info.height, channels: 1}});
    if (meanBrightness < 128) {
        pipeline = pipeline.negate({alpha: false});
    }

    // Binary threshold: pixels < 192 become black (0), rest become white (255).
    // This removes anti-aliasing artifacts and gray noise, producing a crisp icon.
    pipeline = pipeline.threshold(192);

    // Trim empty space around the icon
    const trimmed = await pipeline.trim().png().toBuffer();

    const trimmedMeta = await sharp(trimmed).metadata();
    const trimmedW = trimmedMeta.width || QUERY_ICON_SIZE;
    const trimmedH = trimmedMeta.height || QUERY_ICON_SIZE;

    // Resize to fit within QUERY_ICON_SIZE, preserving aspect ratio
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

const TOP_K = 10;

export async function search(imageBuffer: Buffer): Promise<SearchResult[]> {
    await ensureLoaded();

    if (!processor || !visionModel || !embeddings || !iconIndex) {
        throw new Error('Model not loaded');
    }

    const normalizedBuffer = await normalizeQueryImage(imageBuffer);

    const imageBytes = new Uint8Array(normalizedBuffer);
    const image = await RawImage.fromBlob(new Blob([imageBytes]));

    const imageInputs = await processor(image);
    // eslint-disable-next-line camelcase
    const {image_embeds: imageEmbeds} = await visionModel(imageInputs);

    const queryData = imageEmbeds.data as Float32Array;

    // Normalize query embedding
    let queryNorm = 0;
    for (let j = 0; j < embeddingsDim; j++) {
        queryNorm += queryData[j] * queryData[j];
    }
    queryNorm = Math.sqrt(queryNorm);

    // Compute cosine similarity (stored embeddings are already normalized)
    const numIcons = iconIndex.length;
    const scores: {index: number; score: number}[] = new Array(numIcons);

    for (let i = 0; i < numIcons; i++) {
        let dot = 0;
        const offset = i * embeddingsDim;
        for (let j = 0; j < embeddingsDim; j++) {
            dot += queryData[j] * embeddings[offset + j];
        }
        scores[i] = {index: i, score: dot / queryNorm};
    }

    scores.sort((a, b) => b.score - a.score);

    const icons = iconIndex;
    return scores.slice(0, TOP_K).map(({index, score}) => ({
        ...icons[index],
        score: Math.round(score * 10000) / 10000,
    }));
}
