import fs from 'fs';
import path from 'path';

type IconEntry = {
    name: string;
    componentName: string;
    style: string;
};

type SearchResult = IconEntry & {
    score: number;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let processor: any = null;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let visionModel: any = null;
let embeddings: Float32Array | null = null;
let embeddingsDim = 0;
let iconIndex: IconEntry[] | null = null;
let initPromise: Promise<void> | null = null;

const DATA_DIR = path.join(process.cwd(), 'services/icon-search/data');
const EMBEDDINGS_PATH = path.join(DATA_DIR, 'embeddings.npy');
const INDEX_PATH = path.join(DATA_DIR, 'icon_index.json');
const MODEL_ID = 'Xenova/clip-vit-base-patch32';

function parseNpy(buffer: Buffer): {data: Float32Array; shape: number[]} {
    const magic = buffer.subarray(0, 6).toString('latin1');
    if (!magic.startsWith('\x93NUMPY')) {
        throw new Error('Invalid NPY file');
    }

    const majorVersion = buffer[6];
    let headerLength: number;
    let headerOffset: number;

    if (majorVersion === 1) {
        headerLength = buffer.readUInt16LE(8);
        headerOffset = 10;
    } else {
        headerLength = buffer.readUInt32LE(8);
        headerOffset = 12;
    }

    const header = buffer.subarray(headerOffset, headerOffset + headerLength).toString('ascii');

    const shapeMatch = header.match(/shape':\s*\(([^)]+)\)/);
    if (!shapeMatch) {
        throw new Error('Cannot parse shape from NPY header');
    }
    const shape = shapeMatch[1]
        .split(',')
        .map((s) => parseInt(s.trim(), 10))
        .filter((n) => !isNaN(n));

    const dataOffset = headerOffset + headerLength;
    const numElements = shape.reduce((a, b) => a * b, 1);

    const arrayBuffer = buffer.buffer.slice(
        buffer.byteOffset + dataOffset,
        buffer.byteOffset + dataOffset + numElements * 4,
    );
    const data = new Float32Array(arrayBuffer);

    return {data, shape};
}

async function init() {
    const {AutoProcessor, CLIPVisionModelWithProjection} = await import(
        '@huggingface/transformers'
    );

    [processor, visionModel] = await Promise.all([
        AutoProcessor.from_pretrained(MODEL_ID),
        CLIPVisionModelWithProjection.from_pretrained(MODEL_ID),
    ]);

    const npyBuffer = fs.readFileSync(EMBEDDINGS_PATH);
    const {data, shape} = parseNpy(npyBuffer);
    embeddings = data;
    embeddingsDim = shape[1];

    const indexJson = fs.readFileSync(INDEX_PATH, 'utf-8');
    iconIndex = JSON.parse(indexJson);
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

    const {RawImage} = await import('@huggingface/transformers');

    const imageBuffer = Buffer.from(imageBase64, 'base64');
    const uint8 = new Uint8Array(
        imageBuffer.buffer,
        imageBuffer.byteOffset,
        imageBuffer.byteLength,
    );
    const image = await RawImage.fromBlob(new Blob([uint8]));

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
