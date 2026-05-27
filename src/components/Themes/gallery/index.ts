import carbon from './carbon.meta.json';
import forestFloor from './forest-floor.meta.json';
import lagoon from './lagoon.meta.json';
import magentaPulse from './magenta-pulse.meta.json';
import midnightOwl from './midnight-owl.meta.json';
import pacific from './pacific.meta.json';
import paperWhite from './paper-white.meta.json';
import sakura from './sakura.meta.json';
import {type ThemeMetadata, type ThemePayload, validateThemeMetadata} from './schema';
import solarCitrus from './solar-citrus.meta.json';
import volcano from './volcano.meta.json';

const RAW_META: unknown[] = [
    carbon,
    forestFloor,
    lagoon,
    magentaPulse,
    midnightOwl,
    pacific,
    paperWhite,
    sakura,
    solarCitrus,
    volcano,
];

RAW_META.forEach(validateThemeMetadata);

export const allThemes: ThemeMetadata[] = (RAW_META as ThemeMetadata[])
    .slice()
    .sort((a, b) => a.id.localeCompare(b.id));

export const FEATURED_THEME_IDS = [
    'midnight-owl',
    'pacific',
    'volcano',
    'sakura',
    'carbon',
] as const;

export const featuredThemes: ThemeMetadata[] = FEATURED_THEME_IDS.map((id) =>
    allThemes.find((t) => t.id === id),
).filter((t): t is ThemeMetadata => t !== undefined);

export function getThemeById(id: string): ThemeMetadata | undefined {
    return allThemes.find((t) => t.id === id);
}

/**
 * Lazily loads the full theme payload for the given id. Webpack code-splits
 * each `*.theme.json` into its own chunk via the template-literal import,
 * so only the requested theme is fetched.
 */
export async function loadThemePayload(id: string): Promise<ThemePayload> {
    const mod = await import(`./${id}.theme.json`);
    return mod.default as ThemePayload;
}

export {
    THEME_TAGS,
    type LocalizedString,
    type ThemeAuthor,
    type ThemeMetadata,
    type ThemePayload,
    type ThemePreviewMode,
    type ThemeTag,
} from './schema';
