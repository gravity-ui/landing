import {
    type JsonTheme,
    isThemizedValueWithReference,
    isValueWithReference,
} from '@gravity-ui/uikit-themer';
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
        catalogPromise = import('@gravity-ui/themes')
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

export async function loadThemePayload(id: string): Promise<JsonTheme> {
    const entry = (await loadThemeCatalog()).find((theme) => theme.metadata.id === id);
    if (!entry) throw new Error('Unknown theme');
    const payload: JsonTheme = {};
    // parseJSON ignores incomplete mode pairs; narrow to the values it can import.
    for (const [key, value] of Object.entries(entry.payload as ThemePayload)) {
        if (isValueWithReference(value) || isThemizedValueWithReference(value)) {
            payload[key] = value;
        }
    }
    return payload;
}

export * from './schema';
