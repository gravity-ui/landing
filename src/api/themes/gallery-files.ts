import {createHash} from 'crypto';

import type {ThemeMetadata, ThemePayload} from '../../components/Themes/gallery/schema';

import {GALLERY_DIR, PREVIEWS_DIR} from './config';

export {
    SubmissionMetadataError,
    SubmissionValidationError,
    buildThemeMetadata,
    validateThemePayload,
} from '@gravity-ui/themes/dist/validation';
export interface GalleryFile {
    path: string;
    content: string | Buffer;
}
export const sha256 = (value: string | Buffer) =>
    createHash('sha256')
        .update(typeof value === 'string' ? value : new Uint8Array(value))
        .digest('hex');
const formatMetaFile = (metadata: ThemeMetadata) =>
    JSON.stringify({$schema: './meta.schema.json', ...metadata}, null, 4) + '\n';
const formatThemeFile = (payload: ThemePayload) => JSON.stringify(payload, null, 4) + '\n';
export function buildGalleryFiles({
    metadata,
    payload,
    previews,
}: {
    metadata: ThemeMetadata;
    payload: ThemePayload;
    previews: {light: Buffer; dark: Buffer};
}) {
    return [
        {path: `${GALLERY_DIR}/${metadata.id}.meta.json`, content: formatMetaFile(metadata)},
        {path: `${GALLERY_DIR}/${metadata.id}.theme.json`, content: formatThemeFile(payload)},
        {path: `${PREVIEWS_DIR}/${metadata.id}-light.png`, content: previews.light},
        {path: `${PREVIEWS_DIR}/${metadata.id}-dark.png`, content: previews.dark},
    ];
}
