import path from 'path';

export const REPO_ROOT = path.resolve(__dirname, '..', '..');
export const ICONS_LIBRARY_DIR = path.join(REPO_ROOT, 'node_modules', '@gravity-ui', 'icons');
export const ICONS_LIBRARY_METADATA_PATH = path.join(ICONS_LIBRARY_DIR, 'metadata.json');

export const RENDERED_ICONS_DIR = path.join(__dirname, 'data', 'rendered_icons');
export const EMBEDDINGS_JSON_PATH = path.join(
    REPO_ROOT,
    'public',
    'static',
    'icons-embeddings.json',
);
