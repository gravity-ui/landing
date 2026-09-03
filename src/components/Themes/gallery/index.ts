import baseline from './baseline.meta.json';
import coffee from './coffee.meta.json';
import dustOlive from './dust-olive.meta.json';
import orange from './orange.meta.json';
import retroWaveRadio from './retro-wave-radio.meta.json';
import {type ThemeMetadata, type ThemePayload, validateThemeMetadata} from './schema';
import tea from './tea.meta.json';

const RAW_META: unknown[] = [baseline, coffee, dustOlive, orange, retroWaveRadio, tea];

RAW_META.forEach(validateThemeMetadata);

export const allThemes: ThemeMetadata[] = (RAW_META as ThemeMetadata[])
    .slice()
    .sort((a, b) => a.id.localeCompare(b.id));

export const FEATURED_THEME_IDS = [
    'baseline',
    'coffee',
    'dust-olive',
    'orange',
    'retro-wave-radio',
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
