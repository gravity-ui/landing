import {AutoProcessor, CLIPVisionModelWithProjection, env} from '@huggingface/transformers';

const CACHE_DIR = process.env.TRANSFORMERS_CACHE_DIR || '/app/.model-cache';
const MODEL_ID = 'Xenova/clip-vit-base-patch16';

env.cacheDir = CACHE_DIR;

await Promise.all([
    AutoProcessor.from_pretrained(MODEL_ID),
    CLIPVisionModelWithProjection.from_pretrained(MODEL_ID),
]);

console.log(`Model "${MODEL_ID}" downloaded to ${CACHE_DIR}`);
