import catalog from '@gravity-ui/themes/dist/catalog.json';

import {type ThemeMetadata, type ThemePayload, validateThemeMetadata} from './schema';
export const allThemes: ThemeMetadata[] = catalog.map((entry) => {
    const metadata: unknown = entry.metadata;
    validateThemeMetadata(metadata);
    return metadata;
});
export const FEATURED_THEME_IDS = [
    'baseline',
    'coffee',
    'dust-olive',
    'orange',
    'retro-wave-radio',
] as const;
export const featuredThemes = allThemes.filter((theme) =>
    (FEATURED_THEME_IDS as readonly string[]).includes(theme.id),
);
export const getThemeById = (id: string) => allThemes.find((theme) => theme.id === id);
export async function loadThemePayload(id: string): Promise<ThemePayload> {
    const entry = catalog.find((theme) => theme.metadata.id === id);
    if (!entry) throw new Error('Unknown theme');
    return entry.payload as unknown as ThemePayload;
}
export function getThemePreview(id: string, mode: 'light' | 'dark') {
    return catalog.find((theme) => theme.metadata.id === id)?.previews[mode];
}
export * from './schema';
