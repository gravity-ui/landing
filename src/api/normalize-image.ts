import sharp from 'sharp';

const QUERY_TARGET_SIZE = 224;
const QUERY_ICON_SIZE = 200;

/**
 * Normalize a query image for consistent CLIP matching:
 * 1. Flatten alpha onto white background, convert to grayscale
 * 2. Auto-invert if dark background (white-on-dark → black-on-white)
 * 3. Apply binary threshold to get crisp black icon on white
 * 4. Trim whitespace, resize icon to fill ~200px, center on 224×224 white canvas
 */
export async function normalizeQueryImage(imageBuffer: Buffer): Promise<Buffer> {
    const grayscale = sharp(imageBuffer)
        .flatten({background: {r: 255, g: 255, b: 255}})
        .grayscale();
    const {data, info} = await grayscale.raw().toBuffer({resolveWithObject: true});

    let sum = 0;
    for (let i = 0; i < data.length; i++) {
        sum += data[i];
    }
    const meanBrightness = sum / data.length;

    let pipeline = sharp(data, {raw: {width: info.width, height: info.height, channels: 1}});
    if (meanBrightness < 128) {
        pipeline = pipeline.negate({alpha: false});
    }

    pipeline = pipeline.threshold(192);

    const trimmed = await pipeline.trim().png().toBuffer();
    const trimmedMeta = await sharp(trimmed).metadata();
    const trimmedW = trimmedMeta.width || QUERY_ICON_SIZE;
    const trimmedH = trimmedMeta.height || QUERY_ICON_SIZE;

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
