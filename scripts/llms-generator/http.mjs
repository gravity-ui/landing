import fs from 'node:fs/promises';

import {FETCH_TIMEOUT_MS, PATHS} from './constants.mjs';

// Fetch a URL as text with a timeout; returns '' on any failure.
// Pass {silent: true} for probing requests (e.g. trying several docs paths)
// where a 404 is an expected "not here" rather than a real failure.
export const fetchRaw = async (url, {silent = false} = {}) => {
    try {
        const res = await fetch(url, {signal: AbortSignal.timeout(FETCH_TIMEOUT_MS)});
        if (!res.ok) {
            if (!silent) console.warn(`[LLMS-GENERATOR] fetch ${res.status}: ${url}`);
            return '';
        }
        return await res.text();
    } catch (error) {
        if (!silent) console.warn(`[LLMS-GENERATOR] fetch failed (${error.message}): ${url}`);
        return '';
    }
};

// Human-authored descriptions used as positioning fallbacks.
export const loadLibraryDescriptions = async () => {
    try {
        const content = await fs.readFile(PATHS.librariesInfo, 'utf-8');
        return JSON.parse(content);
    } catch (error) {
        console.warn('[LLMS-GENERATOR] Failed to load library descriptions:', error.message);
        return {};
    }
};
