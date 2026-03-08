/* eslint-disable no-console */
/**
 * Evaluate icon search quality using self-retrieval, augmented retrieval,
 * and semantic group retrieval tests.
 *
 * Usage:
 *   npx tsx scripts/icon-search/evaluate.ts
 */

import fs from 'fs';
import path from 'path';

import {AutoProcessor, CLIPVisionModelWithProjection, RawImage} from '@huggingface/transformers';
import sharp from 'sharp';

import {normalizeQueryImage} from '../../src/api/normalize-image';

import {EMBEDDINGS_JSON_PATH, ICONS_LIBRARY_DIR, ICONS_LIBRARY_METADATA_PATH} from './constants';

const MODEL_ID = 'Xenova/clip-vit-base-patch16';

// ── Test configuration ───────────────────────────────────────────────────────

const TEST_ICONS = [
    // UI basics
    'heart',
    'star',
    'gear',
    'bell',
    'lock',
    'eye',
    'cloud',
    'trash-bin',
    'magnifier',
    'folder',
    'envelope',
    'globe',
    'calendar',
    'camera',
    'shield',
    'flag',
    'key',
    'moon',
    'play',
    'person',
    // Navigation
    'house',
    'compass',
    'map-pin',
    'bookmark',
    'link',
    // Actions
    'pencil',
    'copy',
    'scissors',
    'plus',
    'xmark',
    'check',
    // Media
    'microphone',
    'volume',
    'headphones',
    'music-note',
    // Data / Tech
    'database',
    'server',
    'code',
    'terminal',
    'bug',
    'chart-column',
    // Communication
    'comment',
    'at',
    // Files
    'file',
    'file-text',
    'paperclip',
    'archive',
    // User-reported issues
    'binoculars',
    // Misc
    'tag',
    'clock',
    'ban',
    'circle-info',
    'triangle-exclamation',
    'gift',
    'thumbs-up',
    'palette',
    'rocket',
    'wrench',
];

const SEMANTIC_GROUPS: {query: string; expected: string[]}[] = [
    {query: 'heart', expected: ['heart-fill', 'heart-crack']},
    {query: 'arrow-left', expected: ['arrow-right', 'arrow-up', 'arrow-down']},
    {query: 'lock', expected: ['lock-open', 'lock-fill']},
    {query: 'bell', expected: ['bell-fill', 'bell-slash']},
    {query: 'circle-check', expected: ['circle-check-fill']},
    {query: 'star', expected: ['star-fill']},
    {query: 'eye', expected: ['eye-slash']},
    {query: 'cloud', expected: ['cloud-check', 'cloud-gear', 'cloud-slash']},
    {query: 'folder', expected: ['folder-fill', 'folder-open']},
    {query: 'file', expected: ['file-text']},
    {query: 'person', expected: ['person-plus']},
    {query: 'gear', expected: ['gear-dot', 'gear-play']},
    {query: 'pencil', expected: ['pencil-to-line', 'pencil-to-square']},
    {query: 'comment', expected: ['comment-fill', 'comment-dot', 'comment-plus']},
];

type Augmentation = {
    name: string;
    render: (svgBuffer: Buffer) => Promise<Buffer>;
};

const TARGET_SIZE = 224;

const AUGMENTATIONS: Augmentation[] = [
    {
        name: 'small-80px',
        render: async (svgBuffer: Buffer) => {
            const iconPng = await sharp(svgBuffer).resize(80, 80).png().toBuffer();
            const offset = Math.floor((TARGET_SIZE - 80) / 2);
            return sharp({
                create: {
                    width: TARGET_SIZE,
                    height: TARGET_SIZE,
                    channels: 3,
                    background: {r: 255, g: 255, b: 255},
                },
            })
                .composite([{input: iconPng, left: offset, top: offset}])
                .png()
                .toBuffer();
        },
    },
    {
        name: 'large-200px',
        render: async (svgBuffer: Buffer) => {
            const iconPng = await sharp(svgBuffer).resize(200, 200).png().toBuffer();
            const offset = Math.floor((TARGET_SIZE - 200) / 2);
            return sharp({
                create: {
                    width: TARGET_SIZE,
                    height: TARGET_SIZE,
                    channels: 3,
                    background: {r: 255, g: 255, b: 255},
                },
            })
                .composite([{input: iconPng, left: offset, top: offset}])
                .png()
                .toBuffer();
        },
    },
    {
        name: 'inverted',
        render: async (svgBuffer: Buffer) => {
            const iconPng = await sharp(svgBuffer)
                .resize(160, 160)
                .negate({alpha: false})
                .png()
                .toBuffer();
            const offset = Math.floor((TARGET_SIZE - 160) / 2);
            return sharp({
                create: {
                    width: TARGET_SIZE,
                    height: TARGET_SIZE,
                    channels: 3,
                    background: {r: 0, g: 0, b: 0},
                },
            })
                .composite([{input: iconPng, left: offset, top: offset}])
                .png()
                .toBuffer();
        },
    },
    {
        name: 'offset',
        render: async (svgBuffer: Buffer) => {
            const iconPng = await sharp(svgBuffer).resize(160, 160).png().toBuffer();
            return sharp({
                create: {
                    width: TARGET_SIZE,
                    height: TARGET_SIZE,
                    channels: 3,
                    background: {r: 255, g: 255, b: 255},
                },
            })
                .composite([{input: iconPng, left: 10, top: 50}])
                .png()
                .toBuffer();
        },
    },
    {
        name: 'inverted+norm',
        render: async (svgBuffer: Buffer) => {
            const iconPng = await sharp(svgBuffer)
                .resize(160, 160)
                .negate({alpha: false})
                .png()
                .toBuffer();
            const offset = Math.floor((TARGET_SIZE - 160) / 2);
            const inverted = await sharp({
                create: {
                    width: TARGET_SIZE,
                    height: TARGET_SIZE,
                    channels: 3,
                    background: {r: 0, g: 0, b: 0},
                },
            })
                .composite([{input: iconPng, left: offset, top: offset}])
                .png()
                .toBuffer();
            return normalizeQueryImage(inverted);
        },
    },
    {
        name: 'gray-bg',
        render: async (svgBuffer: Buffer) => {
            const iconPng = await sharp(svgBuffer).resize(160, 160).png().toBuffer();
            const offset = Math.floor((TARGET_SIZE - 160) / 2);
            return sharp({
                create: {
                    width: TARGET_SIZE,
                    height: TARGET_SIZE,
                    channels: 3,
                    background: {r: 200, g: 200, b: 200},
                },
            })
                .composite([{input: iconPng, left: offset, top: offset}])
                .png()
                .toBuffer();
        },
    },
];

// ── Helpers ──────────────────────────────────────────────────────────────────

type EmbeddingsData = {
    dim: number;
    icons: {name: string; componentName: string; style: string}[];
    embeddings: number[];
};

function loadEmbeddings() {
    const data: EmbeddingsData = JSON.parse(fs.readFileSync(EMBEDDINGS_JSON_PATH, 'utf-8'));
    const emb = new Float32Array(data.embeddings);
    return {dim: data.dim, icons: data.icons, embeddings: emb};
}

function cosineSimilarityRank(
    queryEmb: Float32Array,
    storedEmb: Float32Array,
    dim: number,
    numIcons: number,
): {index: number; score: number}[] {
    let queryNorm = 0;
    for (let j = 0; j < dim; j++) {
        queryNorm += queryEmb[j] * queryEmb[j];
    }
    queryNorm = Math.sqrt(queryNorm);

    const scores: {index: number; score: number}[] = new Array(numIcons);
    for (let i = 0; i < numIcons; i++) {
        let dot = 0;
        const offset = i * dim;
        for (let j = 0; j < dim; j++) {
            dot += queryEmb[j] * storedEmb[offset + j];
        }
        scores[i] = {index: i, score: dot / queryNorm};
    }

    scores.sort((a, b) => b.score - a.score);
    return scores;
}

async function embedImage(
    imgBuffer: Buffer,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    processor: any,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    visionModel: any,
): Promise<Float32Array> {
    const imgBytes = new Uint8Array(imgBuffer);
    const image = await RawImage.fromBlob(new Blob([imgBytes]));
    const imageInputs = await processor(image);
    // eslint-disable-next-line camelcase
    const {image_embeds: imageEmbeds} = await visionModel(imageInputs);
    return imageEmbeds.data as Float32Array;
}

type IconMeta = {
    name: string;
    svgName: string;
    componentName: string;
    style: string;
};

function findSvgName(svgName: string, metadata: {icons: IconMeta[]}): string | null {
    const icon = metadata.icons.find((i) => i.svgName === svgName);
    return icon ? icon.svgName : null;
}

function findIconIndexBySvgName(
    svgName: string,
    metadata: {icons: IconMeta[]},
    iconIndex: {name: string; componentName: string; style: string}[],
): number {
    const meta = metadata.icons.find((i) => i.svgName === svgName);
    if (!meta) return -1;
    return iconIndex.findIndex(
        (i) =>
            i.name === meta.name &&
            i.componentName === meta.componentName &&
            i.style === meta.style,
    );
}

// ── Test runners ─────────────────────────────────────────────────────────────

async function runSelfRetrievalTest(
    iconIndex: {name: string; componentName: string; style: string}[],
    embeddings: Float32Array,
    dim: number,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    processor: any,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    visionModel: any,
    metadata: {icons: IconMeta[]},
) {
    console.log('═══ Self-Retrieval Test ═══');
    console.log("Query with icon's own rendered PNG → expect rank #1\n");

    let top1 = 0;
    let top3 = 0;
    let top5 = 0;
    let mrrSum = 0;
    let count = 0;

    for (const svgName of TEST_ICONS) {
        const resolved = findSvgName(svgName, metadata);
        if (!resolved) {
            console.log(`  SKIP: ${svgName} not found in metadata`);
            continue;
        }

        const svgPath = path.join(ICONS_LIBRARY_DIR, 'svgs', `${resolved}.svg`);
        if (!fs.existsSync(svgPath)) {
            console.log(`  SKIP: ${resolved}.svg not found`);
            continue;
        }

        const targetIdx = findIconIndexBySvgName(svgName, metadata, iconIndex);
        if (targetIdx === -1) {
            console.log(`  SKIP: ${svgName} not in embeddings index`);
            continue;
        }

        const svgBuffer = fs.readFileSync(svgPath);
        const iconPng = await sharp(svgBuffer).resize(160, 160).png().toBuffer();
        const offset = Math.floor((TARGET_SIZE - 160) / 2);
        const queryPng = await sharp({
            create: {
                width: TARGET_SIZE,
                height: TARGET_SIZE,
                channels: 3,
                background: {r: 255, g: 255, b: 255},
            },
        })
            .composite([{input: iconPng, left: offset, top: offset}])
            .png()
            .toBuffer();

        const queryEmb = await embedImage(queryPng, processor, visionModel);
        const ranked = cosineSimilarityRank(queryEmb, embeddings, dim, iconIndex.length);
        const rank = ranked.findIndex((r) => r.index === targetIdx) + 1;

        const status = rank === 1 ? '✓' : `✗ rank=${rank}`;
        console.log(`  ${svgName}: ${status} (score=${ranked[rank - 1].score.toFixed(4)})`);

        mrrSum += 1 / rank;
        if (rank <= 1) top1++;
        if (rank <= 3) top3++;
        if (rank <= 5) top5++;
        count++;
    }

    console.log(`\n  Results (n=${count}):`);
    console.log(`    MRR:   ${(mrrSum / count).toFixed(4)}`);
    console.log(`    Top-1: ${top1}/${count} (${((top1 / count) * 100).toFixed(1)}%)`);
    console.log(`    Top-3: ${top3}/${count} (${((top3 / count) * 100).toFixed(1)}%)`);
    console.log(`    Top-5: ${top5}/${count} (${((top5 / count) * 100).toFixed(1)}%)`);

    return {top1, top3, top5, mrrSum, count};
}

async function runAugmentedRetrievalTest(
    iconIndex: {name: string; componentName: string; style: string}[],
    embeddings: Float32Array,
    dim: number,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    processor: any,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    visionModel: any,
    metadata: {icons: IconMeta[]},
) {
    console.log('\n═══ Augmented Retrieval Test ═══');
    console.log('Query with transformed icon → expect correct icon in top-5\n');

    const augResults: {
        name: string;
        top1: number;
        top3: number;
        top5: number;
        mrrSum: number;
        count: number;
    }[] = [];

    for (const aug of AUGMENTATIONS) {
        let augTop1 = 0;
        let augTop3 = 0;
        let augTop5 = 0;
        let augMrrSum = 0;
        let augCount = 0;

        console.log(`  --- ${aug.name} ---`);

        for (const svgName of TEST_ICONS) {
            const resolved = findSvgName(svgName, metadata);
            if (!resolved) continue;

            const svgPath = path.join(ICONS_LIBRARY_DIR, 'svgs', `${resolved}.svg`);
            if (!fs.existsSync(svgPath)) continue;

            const targetIdx = findIconIndexBySvgName(svgName, metadata, iconIndex);
            if (targetIdx === -1) continue;

            const svgBuffer = fs.readFileSync(svgPath);
            const queryPng = await aug.render(svgBuffer);
            const queryEmb = await embedImage(queryPng, processor, visionModel);
            const ranked = cosineSimilarityRank(queryEmb, embeddings, dim, iconIndex.length);
            const rank = ranked.findIndex((r) => r.index === targetIdx) + 1;

            const status = rank <= 5 ? '✓' : `✗ rank=${rank}`;
            console.log(`    ${svgName}: rank=${rank} ${status}`);

            augMrrSum += 1 / rank;
            if (rank <= 1) augTop1++;
            if (rank <= 3) augTop3++;
            if (rank <= 5) augTop5++;
            augCount++;
        }

        augResults.push({
            name: aug.name,
            top1: augTop1,
            top3: augTop3,
            top5: augTop5,
            mrrSum: augMrrSum,
            count: augCount,
        });
    }

    console.log('\n  Augmented Retrieval Summary:');
    console.log('  ' + '─'.repeat(62));
    console.log(
        `  ${'Augmentation'.padEnd(16)} ${'MRR'.padStart(8)}` +
            ` ${'Top-1'.padStart(8)} ${'Top-3'.padStart(8)} ${'Top-5'.padStart(8)}`,
    );
    console.log('  ' + '─'.repeat(62));
    for (const r of augResults) {
        const mrr = (r.mrrSum / r.count).toFixed(4);
        const t1 = `${r.top1}/${r.count}`;
        const t3 = `${r.top3}/${r.count}`;
        const t5 = `${r.top5}/${r.count}`;
        console.log(
            `  ${r.name.padEnd(16)} ${mrr.padStart(8)}` +
                ` ${t1.padStart(8)} ${t3.padStart(8)} ${t5.padStart(8)}`,
        );
    }

    const totalCount = augResults.reduce((s, r) => s + r.count, 0);
    const totalMrr = augResults.reduce((s, r) => s + r.mrrSum, 0) / totalCount;
    const totalTop1 = augResults.reduce((s, r) => s + r.top1, 0);
    const totalTop5 = augResults.reduce((s, r) => s + r.top5, 0);
    console.log('  ' + '─'.repeat(62));
    console.log(
        `  ${'OVERALL'.padEnd(16)} ${totalMrr.toFixed(4).padStart(8)}` +
            ` ${`${totalTop1}/${totalCount}`.padStart(8)}` +
            ` ${''.padStart(8)} ${`${totalTop5}/${totalCount}`.padStart(8)}`,
    );

    return {totalMrr, totalTop1, totalTop5, totalCount};
}

async function runGroupRetrievalTest(
    iconIndex: {name: string; componentName: string; style: string}[],
    embeddings: Float32Array,
    dim: number,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    processor: any,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    visionModel: any,
    metadata: {icons: IconMeta[]},
) {
    console.log('\n═══ Semantic Group Retrieval Test ═══');
    console.log('Query with one icon → expect related icons in top-10\n');

    let groupHits = 0;
    let groupTotal = 0;

    for (const group of SEMANTIC_GROUPS) {
        const resolved = findSvgName(group.query, metadata);
        if (!resolved) {
            console.log(`  SKIP: ${group.query} not found`);
            continue;
        }

        const svgPath = path.join(ICONS_LIBRARY_DIR, 'svgs', `${resolved}.svg`);
        if (!fs.existsSync(svgPath)) continue;

        const svgBuffer = fs.readFileSync(svgPath);
        const iconPng = await sharp(svgBuffer).resize(160, 160).png().toBuffer();
        const offset = Math.floor((TARGET_SIZE - 160) / 2);
        const queryPng = await sharp({
            create: {
                width: TARGET_SIZE,
                height: TARGET_SIZE,
                channels: 3,
                background: {r: 255, g: 255, b: 255},
            },
        })
            .composite([{input: iconPng, left: offset, top: offset}])
            .png()
            .toBuffer();

        const queryEmb = await embedImage(queryPng, processor, visionModel);
        const ranked = cosineSimilarityRank(queryEmb, embeddings, dim, iconIndex.length);
        const top10Indices = ranked.slice(0, 10).map((r) => r.index);

        console.log(`  ${group.query} →`);
        for (const expectedSvgName of group.expected) {
            const idx = findIconIndexBySvgName(expectedSvgName, metadata, iconIndex);
            if (idx === -1) {
                console.log(`    SKIP: ${expectedSvgName} not in index`);
                continue;
            }
            const rank = ranked.findIndex((r) => r.index === idx) + 1;
            const hit = top10Indices.includes(idx);
            console.log(`    ${expectedSvgName}: rank=${rank} ${hit ? '✓' : '✗'}`);
            if (hit) groupHits++;
            groupTotal++;
        }
    }

    console.log(
        `\n  Group Retrieval: ${groupHits}/${groupTotal} in top-10` +
            ` (${((groupHits / groupTotal) * 100).toFixed(1)}%)`,
    );

    return {groupHits, groupTotal};
}

// ── Main ─────────────────────────────────────────────────────────────────────

async function main() {
    console.log('Loading embeddings...');
    const {dim, icons: iconIndex, embeddings} = loadEmbeddings();
    console.log(`  ${iconIndex.length} icons, ${dim}D embeddings`);

    console.log(`Loading CLIP model ${MODEL_ID}...`);
    const [processor, visionModel] = await Promise.all([
        AutoProcessor.from_pretrained(MODEL_ID),
        CLIPVisionModelWithProjection.from_pretrained(MODEL_ID),
    ]);
    console.log('Model loaded.\n');

    const metadata: {icons: IconMeta[]} = JSON.parse(
        fs.readFileSync(ICONS_LIBRARY_METADATA_PATH, 'utf-8'),
    );

    const selfResult = await runSelfRetrievalTest(
        iconIndex,
        embeddings,
        dim,
        processor,
        visionModel,
        metadata,
    );
    const augResult = await runAugmentedRetrievalTest(
        iconIndex,
        embeddings,
        dim,
        processor,
        visionModel,
        metadata,
    );
    const groupResult = await runGroupRetrievalTest(
        iconIndex,
        embeddings,
        dim,
        processor,
        visionModel,
        metadata,
    );

    console.log('\n═══════════════════════════════════════════');
    console.log('SUMMARY');
    console.log('═══════════════════════════════════════════');
    console.log(`  Self-retrieval MRR:      ${(selfResult.mrrSum / selfResult.count).toFixed(4)}`);
    console.log(
        `  Self-retrieval Top-1:    ${((selfResult.top1 / selfResult.count) * 100).toFixed(1)}%`,
    );
    console.log(`  Augmented MRR:           ${augResult.totalMrr.toFixed(4)}`);
    console.log(
        `  Augmented Top-5:         ${((augResult.totalTop5 / augResult.totalCount) * 100).toFixed(
            1,
        )}%`,
    );
    console.log(
        `  Group top-10 recall:     ${(
            (groupResult.groupHits / groupResult.groupTotal) *
            100
        ).toFixed(1)}%`,
    );
    console.log('═══════════════════════════════════════════\n');
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});
