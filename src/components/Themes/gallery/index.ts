import React from 'react';

import {type ThemeMetadata, type ThemePayload, validateThemeMetadata} from './schema';

type Catalog = {
    metadata: ThemeMetadata;
    payload: unknown;
    previews: {light: string; dark: string};
}[];
let catalogPromise: Promise<Catalog> | undefined;

export function loadThemeCatalog() {
    if (!catalogPromise) {
        catalogPromise = import('@gravity-ui/themes/dist/catalog.json')
            .then(({default: catalog}) => {
                return catalog.flatMap((entry) => {
                    const metadata: unknown = entry.metadata;
                    try {
                        validateThemeMetadata(metadata);
                        return [{...entry, metadata}];
                    } catch {
                        return [];
                    }
                });
            })
            .catch((error) => {
                catalogPromise = undefined;
                throw error;
            });
    }
    return catalogPromise;
}

export function useThemeCatalog(enabled: boolean) {
    const [catalog, setCatalog] = React.useState<Catalog>([]);
    React.useEffect(() => {
        if (!enabled) return undefined;
        let cancelled = false;
        loadThemeCatalog()
            .then((entries) => {
                if (!cancelled) setCatalog(entries);
            })
            .catch(() => undefined);
        return () => {
            cancelled = true;
        };
    }, [enabled]);
    return catalog;
}

export const FEATURED_THEME_IDS = [
    'baseline',
    'coffee',
    'dust-olive',
    'orange',
    'retro-wave-radio',
] as const;

export async function loadThemePayload(id: string): Promise<ThemePayload> {
    const entry = (await loadThemeCatalog()).find((theme) => theme.metadata.id === id);
    if (!entry) throw new Error('Unknown theme');
    return entry.payload as ThemePayload;
}

export * from './schema';
