import {BUILT_IN_FONTS, DEFAULT_FONT_FAMILIES} from '@gravity-ui/themes/fonts';
import {DEFAULT_THEME, FontOptions, TextGroup} from '@gravity-ui/uikit-themer';

import {CustomFontSelectType, TypographyOptions} from '../types';

export {DEFAULT_FONT_FAMILIES} from '@gravity-ui/themes/fonts';
export type DefaultFontFamily = (typeof DEFAULT_FONT_FAMILIES)[number];

type DefaultFontFamilyOption = {
    name: string;
    fontSuggestions: {title: string; key: string; link: string}[];
};

// Loading URLs are specific to the landing Typography tab, not the catalog format.
const BUILT_IN_FONT_LINKS: Record<string, string> = {
    inter: 'https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap',
    merriweather:
        'https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap',
    titillium_web:
        'https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap',
    roboto_mono:
        'https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap',
    ubuntu_mono:
        'https://fonts.googleapis.com/css2?family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap',
    ibm_plex_mono:
        'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap',
};

const createFontSuggestions = (family: DefaultFontFamily) =>
    BUILT_IN_FONTS[family].map((title) => {
        const key = title.toLowerCase().replaceAll(' ', '_');
        return {title, key, link: BUILT_IN_FONT_LINKS[key]};
    });

export const DEFAULT_FONT_FAMILY_SUGGESTIONS: Record<DefaultFontFamily, DefaultFontFamilyOption> = {
    sans: {
        name: 'Sans Font Family',
        fontSuggestions: createFontSuggestions('sans'),
    },
    monospace: {
        name: 'Monospace Font Family',
        fontSuggestions: createFontSuggestions('monospace'),
    },
};

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
