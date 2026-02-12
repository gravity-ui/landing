import path from 'path';

export const REPO_ROOT = path.resolve(__dirname, '..', '..');
export const ICONS_LIBRARY_DIR = path.join(REPO_ROOT, 'node_modules', '@gravity-ui', 'icons');
export const ICONS_LIBRARY_METADATA_PATH = path.join(ICONS_LIBRARY_DIR, 'metadata.json');

export const DATA_DIR = path.join(__dirname, 'data');
export const RENDERED_ICONS_DIR = path.join(DATA_DIR, 'rendered_icons');
export const ICONS_VERSION_PATH = path.join(DATA_DIR, 'icons_version.txt');
export const EMBEDDINGS_JSON_PATH = path.join(
    REPO_ROOT,
    'public',
    'static',
    'icons-embeddings.json',
);
