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

function useCatalogData<T>(enabled: boolean, load: () => Promise<T>, initial: T) {
    const [data, setData] = React.useState(initial);
    React.useEffect(() => {
        if (!enabled) {
            return undefined;
        }
        let cancelled = false;
        load()
            .then((value) => {
                if (!cancelled) {
                    setData(value);
                }
            })
            .catch(() => undefined);
        return () => {
            cancelled = true;
        };
    }, [enabled, load]);
    return data;
}

const NO_NAMES: CatalogNames = [];

export function useThemeNames(enabled: boolean) {
    return useCatalogData(enabled, loadThemeNames, NO_NAMES);
}

export const FEATURED_THEME_IDS = [
    'baseline',
    'coffee',
    'dust-olive',
    'orange',
    'retro-wave-radio',
] as const;

const NO_THEMES: ThemeMetadata[] = [];

const loadFeaturedThemes = async () => {
    const themes = await Promise.all(
        FEATURED_THEME_IDS.map((id) => loadThemeMetadata(id).catch(() => undefined)),
    );
    return themes.filter((theme): theme is ThemeMetadata => Boolean(theme));
};

export function useFeaturedThemes(enabled: boolean) {
    return useCatalogData(enabled, loadFeaturedThemes, NO_THEMES);
}

interface LoadedPages {
    tag?: ThemeTag;
    count: number;
    themes: ThemeMetadata[];
    pageCount: number;
}

// The listing grows a page at a time through `loadMore`; changing the tag starts over.
export function useThemePages(enabled: boolean, tag?: ThemeTag) {
    const [requested, setRequested] = React.useState<{tag?: ThemeTag; count: number}>({
        tag,
        count: 1,
    });
    const count = requested.tag === tag ? requested.count : 1;
    const [loaded, setLoaded] = React.useState<LoadedPages>();

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
            .catch(() => undefined);
        return () => {
            cancelled = true;
        };
    }, [enabled, tag, count]);

    const current = loaded?.tag === tag ? loaded : undefined;
    const hasMore = current?.count === count && count < current.pageCount;
    const loadMore = React.useCallback(() => {
        if (hasMore) {
            setRequested({tag, count: count + 1});
        }
    }, [hasMore, tag, count]);

    return {themes: current?.themes ?? NO_THEMES, hasMore, loadMore};
}

export * from './schema';
