import {inflateRawSync} from 'zlib';

import sharp from 'sharp';

import {MAX_ARTIFACT_BYTES} from './config';
import {sha256} from './gallery-files';
import {isJobInputValid} from './job-input';
import type {ThemeJob} from './receipt';
import type {ThemeInput} from './types';

// GitHub artifact archives must contain exactly one bounded regular file.
function readArtifactJson(zip: Buffer) {
    if (zip.length < 22) {
        throw new Error('Invalid artifact archive');
    }
    let end = zip.length - 22;
    const lowerBound = Math.max(0, zip.length - 65557);
    while (end >= lowerBound && zip.readUInt32LE(end) !== 0x06054b50) {
        end--;
    }
    if (
        end < lowerBound ||
        zip.readUInt32LE(end) !== 0x06054b50 ||
        zip.readUInt16LE(end + 10) !== 1
    ) {
        throw new Error('Invalid artifact archive');
    }
    const central = zip.readUInt32LE(end + 16);
    if (central + 46 > zip.length || zip.readUInt32LE(central) !== 0x02014b50) {
        throw new Error('Invalid artifact directory');
    }
    const nameLength = zip.readUInt16LE(central + 28);
    const name = zip.subarray(central + 46, central + 46 + nameLength).toString();
    const method = zip.readUInt16LE(central + 10);
    const size = zip.readUInt32LE(central + 20);
    const rawSize = zip.readUInt32LE(central + 24);
    const local = zip.readUInt32LE(central + 42);
    if (
        name !== 'result.json' ||
        rawSize > MAX_ARTIFACT_BYTES ||
        local + 30 > zip.length ||
        zip.readUInt32LE(local) !== 0x04034b50 ||
        (method !== 0 && method !== 8)
    ) {
        throw new Error('Unexpected artifact file');
    }
    const start = local + 30 + zip.readUInt16LE(local + 26) + zip.readUInt16LE(local + 28);
    if (start + size > central) {
        throw new Error('Truncated artifact');
    }
    const compressed = zip.subarray(start, start + size);
    const bytes =
        method === 8
            ? inflateRawSync(new Uint8Array(compressed), {maxOutputLength: MAX_ARTIFACT_BYTES})
            : compressed;
    if (bytes.length !== rawSize) {
        throw new Error('Artifact size mismatch');
    }
    return JSON.parse(bytes.toString('utf8')) as Record<string, unknown>;
}

// Each preview is a base64 740x500 PNG whose digest is reported by the renderer.
async function readPreviewPng(encoded: unknown, hash: string) {
    if (typeof encoded !== 'string' || encoded.length > 4 * 1024 * 1024) {
        throw new Error('Invalid PNG payload');
    }
    const png = Buffer.from(encoded, 'base64');
    const info = await sharp(png, {limitInputPixels: 740 * 500}).metadata();
    if (
        info.format !== 'png' ||
        info.width !== 740 ||
        info.height !== 500 ||
        sha256(png) !== hash
    ) {
        throw new Error('Invalid PNG dimensions or digest');
    }
    return png;
}

export async function parseThemeArtifact(archive: Buffer, job: ThemeJob & {runId: number}) {
    const result = readArtifactJson(archive);
    if (
        result.userId !== job.userId ||
        result.jobId !== job.id ||
        result.runId !== job.runId ||
        result.revision !== job.revision ||
        result.themeHash !== job.themeHash ||
        !result.files ||
        !result.hashes
    ) {
        throw new Error('Theme artifact correlation mismatch');
    }
    const input = result.input as ThemeInput;
    if (!isJobInputValid(input, job.themeHash)) {
        throw new Error('Artifact input hash mismatch');
    }
    const files = result.files as Record<string, string>;
    const hashes = result.hashes as Record<string, string>;
    if (
        Array.isArray(files) ||
        Array.isArray(hashes) ||
        typeof files !== 'object' ||
        typeof hashes !== 'object' ||
        Object.keys(files).sort().join(',') !== 'dark,light' ||
        Object.keys(hashes).sort().join(',') !== 'dark,light'
    ) {
        throw new Error('Unexpected artifact file or hash keys');
    }
    const previews = {} as Record<'light' | 'dark', Buffer>;
    for (const mode of ['light', 'dark'] as const) {
        previews[mode] = await readPreviewPng(files[mode], hashes[mode]);
    }
    return {previews, input};
}
