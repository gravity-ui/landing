import path from 'node:path';
import {fileURLToPath} from 'node:url';

const ROOT_DIR = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.join(ROOT_DIR, '../../public');

export const PATHS = {
    public: PUBLIC_DIR,
    rootLlms: path.join(PUBLIC_DIR, 'llms.txt'),
    fullLlms: path.join(PUBLIC_DIR, 'llms-full.txt'),
    packagesLlmsDir: path.join(PUBLIC_DIR, 'llms'),
    librariesInfo: path.join(PUBLIC_DIR, 'locales/en/libraries-info.json'),
};

export const SITE_ORIGIN = 'https://gravity-ui.com';
export const NPM_REGISTRY_ORIGIN = 'https://registry.npmjs.org';
export const UNPKG_ORIGIN = 'https://unpkg.com';
// Published builds may ship INDEX.md under either of these paths; we try both.
export const DOCS_INDEX_PATHS = ['build/docs/INDEX.md', 'dist/docs/INDEX.md'];

// Per-package llms.txt is generated for this set of versions: the latest patch of
// each of the last N minors, the latest version of each of the last M majors,
// and the latest patch overall (union, deduped).
export const LAST_MINORS = 10;
export const LAST_MAJORS = 2;
export const FETCH_TIMEOUT_MS = 5000;
