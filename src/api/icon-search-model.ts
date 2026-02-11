import fs from 'fs';
import path from 'path';

import {AutoProcessor, CLIPVisionModelWithProjection, RawImage} from '@huggingface/transformers';

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
const MODEL_ID = 'Xenova/clip-vit-base-patch32';

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

export async function search(imageBase64: string, topK = 12): Promise<SearchResult[]> {
    await ensureLoaded();

    if (!processor || !visionModel || !embeddings || !iconIndex) {
        throw new Error('Model not loaded');
    }

    const imageBytes = new Uint8Array(Buffer.from(imageBase64, 'base64'));
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
    return scores.slice(0, topK).map(({index, score}) => ({
        ...icons[index],
        score: Math.round(score * 10000) / 10000,
    }));
}
