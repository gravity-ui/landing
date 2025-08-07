import {DEFAULT_THEME, FontOptions, TextGroup} from '@gravity-ui/uikit-themer';

import {CustomFontSelectType, TypographyOptions} from '../types';

// TODO: add export to uikit-themer
export const DEFAULT_FONT_FAMILIES = ['sans', 'monospace'] as const;
export type DefaultFontFamily = typeof DEFAULT_FONT_FAMILIES[number];

export const TEXT_GROUP_NAMES: Record<TextGroup, string> = {
    body: 'Body Text',
    caption: 'Caption',
    header: 'Header',
    subheader: 'Subheader',
    display: 'Display',
    code: 'Code',
};

export const DEFAULT_FONT_FAMILY_SETTINGS: Record<DefaultFontFamily, FontOptions> = {
    sans: {
        mainFont: 'Inter',
        fallbackFonts: DEFAULT_THEME.typography.fontFamilies.sans.fallbackFonts,
    },
    monospace: {
        mainFont: 'Roboto Mono',
        fallbackFonts: DEFAULT_THEME.typography.fontFamilies.monospace.fallbackFonts,
    },
};

export const FONT_WEIGHTS = [100, 200, 300, 400, 500, 600, 700, 800, 900];

export const GOOGLE_FONTS_DOWNLOAD_HOST = 'https://fonts.googleapis.com/css2';
export const GOOGLE_FONTS_FONT_PREVIEW_HOST = 'https://fonts.google.com/specimen/';

export const defaultTypographyPreset: TypographyOptions = {
    fontFamilies: {
        sans: {
            title: 'Inter',
            link: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap',
            customType: CustomFontSelectType.GoogleFonts,
        },
        monospace: {
            title: 'Roboto Mono',
            link: 'https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap',
            customType: CustomFontSelectType.GoogleFonts,
        },
    },
    isAdvancedActive: false,
};
