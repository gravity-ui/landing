export const THEME_TAGS = [
    'high-contrast',
    'accessible',
    'creative',
    'modern',
    'high-readability',
    'corporate',
    'minimal',
] as const;

export type ThemeTag = (typeof THEME_TAGS)[number];

export type ThemePreviewMode = 'light' | 'dark';

export interface LocalizedString {
    en: string;
    ru: string;
}

export interface ThemeAuthor {
    name: string;
    url?: string;
}

/**
 * Theme metadata — static-imported eagerly into the registry. Small enough to
 * load all entries up front; drives the gallery drawer/modal grid.
 */
export interface ThemeMetadata {
    id: string;
    name: string;
    author: ThemeAuthor;
    description: LocalizedString;
    tags: ThemeTag[];
    previewMode: ThemePreviewMode;
    brandColor: string;
}

/**
 * Raw output of `generateJSON` from `@gravity-ui/uikit-themer` — a flat dict of
 * CSS-variable-like keys (`--g-*`). Loaded lazily via dynamic import on apply.
 */
export type ThemePayload = Record<string, {value: string; ref?: string}>;

const KEBAB_CASE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export class ThemeMetadataValidationError extends Error {
    constructor(message: string) {
        super(`Invalid theme metadata: ${message}`);
        this.name = 'ThemeMetadataValidationError';
    }
}

export function validateThemeMetadata(value: unknown): asserts value is ThemeMetadata {
    if (!value || typeof value !== 'object') {
        throw new ThemeMetadataValidationError('value is not an object');
    }
    const v = value as Record<string, unknown>;

    if (typeof v.id !== 'string' || !KEBAB_CASE.test(v.id)) {
        throw new ThemeMetadataValidationError(`id must be kebab-case string, got ${String(v.id)}`);
    }
    const id = v.id;

    if (typeof v.name !== 'string' || !v.name.trim()) {
        throw new ThemeMetadataValidationError(`[${id}] name must be a non-empty string`);
    }

    if (!v.author || typeof v.author !== 'object') {
        throw new ThemeMetadataValidationError(`[${id}] author must be an object`);
    }
    const author = v.author as Record<string, unknown>;
    if (typeof author.name !== 'string' || !author.name.trim()) {
        throw new ThemeMetadataValidationError(`[${id}] author.name must be a non-empty string`);
    }
    if (author.url !== undefined && typeof author.url !== 'string') {
        throw new ThemeMetadataValidationError(`[${id}] author.url must be a string when present`);
    }

    if (!v.description || typeof v.description !== 'object') {
        throw new ThemeMetadataValidationError(`[${id}] description must be an object`);
    }
    const description = v.description as Record<string, unknown>;
    if (typeof description.en !== 'string' || !description.en.trim()) {
        throw new ThemeMetadataValidationError(`[${id}] description.en must be a non-empty string`);
    }
    if (typeof description.ru !== 'string' || !description.ru.trim()) {
        throw new ThemeMetadataValidationError(`[${id}] description.ru must be a non-empty string`);
    }

    if (!Array.isArray(v.tags)) {
        throw new ThemeMetadataValidationError(`[${id}] tags must be an array`);
    }
    for (const tag of v.tags) {
        if (!THEME_TAGS.includes(tag as ThemeTag)) {
            throw new ThemeMetadataValidationError(
                `[${id}] unknown tag "${String(tag)}", allowed: ${THEME_TAGS.join(', ')}`,
            );
        }
    }

    if (v.previewMode !== 'light' && v.previewMode !== 'dark') {
        throw new ThemeMetadataValidationError(`[${id}] previewMode must be "light" or "dark"`);
    }

    if (typeof v.brandColor !== 'string' || !/^#[0-9A-Fa-f]{6}$/.test(v.brandColor)) {
        throw new ThemeMetadataValidationError(`[${id}] brandColor must be a #RRGGBB hex string`);
    }
}
