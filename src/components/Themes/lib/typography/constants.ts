import {DEFAULT_THEME} from '@gravity-ui/uikit-themer';

import {CustomFontSelectType, TypographyOptions} from '../types';
export const THEME_FONT_FAMILY_PREFIX = '--g-font-family';
export const THEME_TEXT_PREFIX = '--g-text';

export enum DefaultFontFamilyType {
    Sans = 'sans',
    Monospace = 'monospace',
}

// TODO: add export to uikit-themer
export const DEFAULT_FONT_FAMILIES = ['sans', 'monospace'] as const;
export type DefaultFontFamily = typeof DEFAULT_FONT_FAMILIES[number];

export const FONT_WEIGHTS = [100, 200, 300, 400, 500, 600, 700, 800, 900];

export const GOOGLE_FONTS_DOWNLOAD_HOST = 'https://fonts.googleapis.com/css2';
export const GOOGLE_FONTS_FONT_PREVIEW_HOST = 'https://fonts.google.com/specimen/';

export const DEFAULT_FONTS: Record<string, string[]> = {
    sans: ["'Helvetica Neue'", "'Helvetica'", "'Arial'", 'sans-serif'],
    monospace: [
        "'Menlo'",
        "'Monaco'",
        "'Consolas'",
        "'Ubuntu Mono'",
        "'Liberation Mono'",
        "'DejaVu Sans Mono'",
        "'Courier New'",
        "'Courier'",
        'monospace',
    ],
};

export const defaultTypographyPreset: TypographyOptions = {
    baseSetting: {
        customFontFamilyType: [],
        defaultFontFamilyType: [
            {value: DefaultFontFamilyType.Sans, content: 'Sans Font Family'},
            {value: DefaultFontFamilyType.Monospace, content: 'Monospace Font Family'},
        ],
        fontFamilies: {
            [DefaultFontFamilyType.Sans]: {
                title: 'Inter',
                key: 'inter',
                link: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap',
                customType: CustomFontSelectType.GoogleFonts,
                alternatives: DEFAULT_FONTS[DefaultFontFamilyType.Sans],
            },
            [DefaultFontFamilyType.Monospace]: {
                title: 'Roboto Mono',
                key: 'roboto_mono',
                link: 'https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap',
                customType: CustomFontSelectType.GoogleFonts,
                alternatives: DEFAULT_FONTS[DefaultFontFamilyType.Monospace],
            },
        },
    },
    isAdvancedActive: false,
    advanced: {
        body: {
            title: 'Body Text',
            fontWeight: 400,
            selectedFontFamilyType: DefaultFontFamilyType.Sans,
            sizes: {
                'body-short': {
                    title: 'Body 1 Short',
                    fontSize: 13,
                    lineHeight: 16,
                },
                'body-1': {
                    title: 'Body 1',
                    fontSize: 13,
                    lineHeight: 18,
                },
                'body-2': {
                    title: 'Body 2',
                    fontSize: 15,
                    lineHeight: 20,
                },
                'body-3': {
                    title: 'Body 3',
                    fontSize: 17,
                    lineHeight: 24,
                },
            },
        },
        caption: {
            title: 'Caption',
            fontWeight: 400,
            selectedFontFamilyType: DefaultFontFamilyType.Sans,
            sizes: {
                'caption-1': {
                    title: 'Caption 1',
                    fontSize: 9,
                    lineHeight: 12,
                },
                'caption-2': {
                    title: 'Caption 2',
                    fontSize: 11,
                    lineHeight: 16,
                },
            },
        },
        header: {
            title: 'Header',
            fontWeight: 600,
            selectedFontFamilyType: DefaultFontFamilyType.Sans,
            sizes: {
                'header-1': {
                    title: 'Header 1',
                    fontSize: 20,
                    lineHeight: 24,
                },
                'header-2': {
                    title: 'Header 2',
                    fontSize: 24,
                    lineHeight: 28,
                },
            },
        },
        subheader: {
            title: 'Subheader',
            fontWeight: 600,
            selectedFontFamilyType: DefaultFontFamilyType.Sans,
            sizes: {
                'subheader-1': {
                    title: 'Subheader 1',
                    fontSize: 13,
                    lineHeight: 18,
                },
                'subheader-2': {
                    title: 'Subheader 2',
                    fontSize: 15,
                    lineHeight: 20,
                },
                'subheader-3': {
                    title: 'Subheader 3',
                    fontSize: 17,
                    lineHeight: 24,
                },
            },
        },
        display: {
            title: 'Display',
            fontWeight: 600,
            selectedFontFamilyType: DefaultFontFamilyType.Sans,
            sizes: {
                'display-1': {
                    title: 'Display 1',
                    fontSize: 28,
                    lineHeight: 36,
                },
                'display-2': {
                    title: 'Display 2',
                    fontSize: 32,
                    lineHeight: 40,
                },
                'display-3': {
                    title: 'Display 3',
                    fontSize: 40,
                    lineHeight: 48,
                },
                'display-4': {
                    title: 'Display 4',
                    fontSize: 48,
                    lineHeight: 52,
                },
            },
        },
        code: {
            title: 'Code',
            fontWeight: 600,
            selectedFontFamilyType: DefaultFontFamilyType.Monospace,
            sizes: {
                'code-1': {
                    title: 'Code 1',
                    fontSize: 12,
                    lineHeight: 18,
                },
                'code-inline-1': {
                    title: 'Code Inline 1',
                    fontSize: 12,
                    lineHeight: 14,
                },
                'code-2': {
                    title: 'Code 2',
                    fontSize: 14,
                    lineHeight: 20,
                },
                'code-inline-2': {
                    title: 'Code Inline 2',
                    fontSize: 14,
                    lineHeight: 16,
                },
                'code-3': {
                    title: 'Code 3',
                    fontSize: 16,
                    lineHeight: 24,
                },
                'code-inline-3': {
                    title: 'Code Inline 3',
                    fontSize: 16,
                    lineHeight: 20,
                },
            },
        },
    },
};
