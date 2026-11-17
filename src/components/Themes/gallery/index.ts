import {
    CATALOG_MANIFEST_PATH,
    CATALOG_NAMES_PATH,
    type CatalogManifest,
    type CatalogNames,
    getCatalogPagePath,
    getThemeMetadataPath,
    getThemePayloadPath,
    getThemePreviewPath,
} from '@gravity-ui/themes';
import {
    type JsonTheme,
    isThemizedValueWithReference,
    isValueWithReference,
} from '@gravity-ui/uikit-themer';
import React from 'react';

import {
    type ThemeMetadata,
    type ThemePayload,
    type ThemePreviewMode,
    type ThemeTag,
    validateThemeMetadata,
} from './schema';

// next.config.js copies the package catalog into the static assets under this URL.
const CATALOG_URL = process.env.THEME_CATALOG_URL;

const requests = new Map<string, Promise<unknown>>();

// Each catalog file is fetched once; a failed request is retried on the next call.
function fetchCatalogFile(file: string): Promise<unknown> {
    let request = requests.get(file);
    if (!request) {
        request = fetch(`${CATALOG_URL}/${file}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Failed to load ${file}: ${response.status}`);
                }
                return response.json();
            })
            .catch((error) => {
                requests.delete(file);
                throw error;
            });
        requests.set(file, request);
    }
    return request;
}

const toValidMetadata = (value: unknown): ThemeMetadata[] => {
    try {
        validateThemeMetadata(value);
        return [value];
    } catch {
        return [];
    }
};

export const getThemePreviewUrl = (id: string, mode: ThemePreviewMode) =>
    `${CATALOG_URL}/${getThemePreviewPath(id, mode)}`;

export async function loadThemeMetadata(id: string) {
    const [metadata] = toValidMetadata(await fetchCatalogFile(getThemeMetadataPath(id)));
    if (!metadata) {
        throw new Error('Invalid theme metadata');
    }
    return metadata;
}

export async function loadThemeNames(): Promise<CatalogNames> {
    const names = await fetchCatalogFile(CATALOG_NAMES_PATH);
    return Array.isArray(names)
        ? names.filter((entry) => typeof entry?.id === 'string' && typeof entry?.name === 'string')
        : [];
}

// Loads the first `count` pages of the listing, optionally narrowed to one tag.
export async function loadThemePages(count: number, tag?: ThemeTag) {
    const manifest = (await fetchCatalogFile(CATALOG_MANIFEST_PATH)) as CatalogManifest;
    const pageCount = (tag ? manifest.tags[tag] : manifest)?.pageCount ?? 0;
    const pages = await Promise.all(
        Array.from({length: Math.min(count, pageCount)}, (_, index) =>
            fetchCatalogFile(getCatalogPagePath(index + 1, tag)),
        ),
    );
    return {
        themes: pages.flatMap((page) => (Array.isArray(page) ? page.flatMap(toValidMetadata) : [])),
        pageCount,
    };
}

export async function loadThemePayload(id: string): Promise<JsonTheme> {
    const source = (await fetchCatalogFile(getThemePayloadPath(id))) as ThemePayload;
    const payload: JsonTheme = {};
    // parseJSON ignores incomplete mode pairs; narrow to the values it can import.
    for (const [key, value] of Object.entries(source)) {
        if (isValueWithReference(value) || isThemizedValueWithReference(value)) {
            payload[key] = value;
        }
    }
    return payload;
}

// A failed load is reported through `error` until `retry` requests it again.
function useCatalogData<T>(enabled: boolean, load: () => Promise<T>, initial: T) {
    const [loaded, setLoaded] = React.useState<{data: T}>();
    const [attempt, setAttempt] = React.useState(0);
    const [failedAttempt, setFailedAttempt] = React.useState<number>();
    React.useEffect(() => {
        if (!enabled) {
            return undefined;
        }
        let cancelled = false;
        load()
            .then((data) => {
                if (!cancelled) {
                    setLoaded({data});
                    setFailedAttempt(undefined);
                }
            })
            .catch(() => {
                if (!cancelled) {
                    setFailedAttempt(attempt);
                }
            });
        return () => {
            cancelled = true;
        };
    }, [enabled, load, attempt]);

    const error = failedAttempt === attempt;
    const loading = enabled && loaded === undefined && !error;
    // Failed requests are evicted from the catalog cache, so a new attempt fetches them again.
    const retry = React.useCallback(() => setAttempt((value) => value + 1), []);

    return {data: loaded?.data ?? initial, loading, error, retry};
}

const NO_NAMES: CatalogNames = [];

// Names only pre-check the submit form; the server checks taken names itself,
// so a failed load leaves the form usable and is retried on the next opening.
export function useThemeNames(enabled: boolean) {
    return useCatalogData(enabled, loadThemeNames, NO_NAMES).data;
}

export const FEATURED_THEME_IDS = [
    'baseline',
    'coffee',
    'dust-olive',
    'orange',
    'retro-wave-radio',
] as const;

const NO_THEMES: ThemeMetadata[] = [];

// Any featured theme that fails to load fails the set, so `retry` can bring it back.
const loadFeaturedThemes = () => Promise.all(FEATURED_THEME_IDS.map(loadThemeMetadata));

export function useFeaturedThemes(enabled: boolean) {
    const {data, loading, error, retry} = useCatalogData(enabled, loadFeaturedThemes, NO_THEMES);
    return {themes: data, loading, error, retry};
}

interface LoadedPages {
    tag?: ThemeTag;
    count: number;
    themes: ThemeMetadata[];
    pageCount: number;
}

interface FailedPages {
    tag?: ThemeTag;
    count: number;
    attempt: number;
}

// The listing grows a page at a time through `loadMore`; changing the tag starts over.
// A failed page stops the listing until `retry` requests it again.
export function useThemePages(enabled: boolean, tag?: ThemeTag) {
    const [requested, setRequested] = React.useState<{tag?: ThemeTag; count: number}>({
        tag,
        count: 1,
    });
    const count = requested.tag === tag ? requested.count : 1;
    const [loaded, setLoaded] = React.useState<LoadedPages>();
    const [attempt, setAttempt] = React.useState(0);
    const [failed, setFailed] = React.useState<FailedPages>();

    React.useEffect(() => {
        if (!enabled) {
            return undefined;
        }
        let cancelled = false;
        loadThemePages(count, tag)
            .then((result) => {
                if (!cancelled) {
                    setLoaded({tag, count, ...result});
                }
            })
            .catch(() => {
                if (!cancelled) {
                    setFailed({tag, count, attempt});
                }
            });
        return () => {
            cancelled = true;
        };
    }, [enabled, tag, count, attempt]);

    const current = loaded?.tag === tag ? loaded : undefined;
    const error =
        failed !== undefined &&
        failed.tag === tag &&
        failed.count === count &&
        failed.attempt === attempt;
    const loading = enabled && current?.count !== count && !error;
    const hasMore = current?.count === count && count < current.pageCount;
    const loadMore = React.useCallback(() => {
        if (hasMore) {
            setRequested({tag, count: count + 1});
        }
    }, [hasMore, tag, count]);
    // Failed requests are evicted from the catalog cache, so a new attempt fetches them again.
    const retry = React.useCallback(() => setAttempt((value) => value + 1), []);

    return {themes: current?.themes ?? NO_THEMES, hasMore, loading, error, loadMore, retry};
}

export * from './schema';
