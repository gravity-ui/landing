import {RadiusPresetName, RadiusValue, type ThemeOptions, type ThemeVariant} from './types';
import {defaultTypographyPreset} from './typography/constants';

export const THEME_COLOR_VARIABLE_PREFIX = '--g-color';

export const THEME_BORDER_RADIUS_VARIABLE_PREFIX = '--g-border-radius';

export const DEFAULT_NEW_COLOR_TITLE = 'New color';

export const DEFAULT_BRAND_COLORS = [
    'rgb(203,255,92)',
    'rgb(0,41,255)',
    'rgb(49,78,60)',
    'rgb(108,145,201)',
    'rgb(255,190,92)',
    'rgb(255,92,92)',
] as const;

export const TEXT_CONTRAST_COLORS: Record<ThemeVariant, {white: string; black: string}> = {
    dark: {
        white: 'rgb(255, 255, 255)',
        black: 'rgba(0, 0, 0, 0.9)', // --g-color-private-black-900
    },
    light: {
        white: 'rgb(255, 255, 255)',
        black: 'rgba(0, 0, 0, 0.85)', // --g-color-private-black-850
    },
};

export const DEFAULT_PALETTE: ThemeOptions['palette'] = {
    light: {
        white: 'rgb(255, 255, 255)',
        black: 'rgb(0, 0, 0)',
        brand: DEFAULT_BRAND_COLORS[0],
        orange: 'rgb(255, 119, 0)',
        green: 'rgb(59, 201, 53)',
        yellow: 'rgb(255, 219, 77)',
        red: 'rgb(255, 4, 0)',
        blue: 'rgb(82, 130, 255)',
        'cool-grey': 'rgb(107, 132, 153)',
        purple: 'rgb(143, 82, 204)',
    },
    dark: {
        white: 'rgb(255, 255, 255)',
        black: 'rgb(0, 0, 0)',
        brand: DEFAULT_BRAND_COLORS[0],
        orange: 'rgb(200, 99, 12)',
        green: 'rgb(91, 181, 87)',
        yellow: 'rgb(255, 203, 0)',
        red: 'rgb(232, 73, 69)',
        blue: 'rgb(82, 130, 255)',
        'cool-grey': 'rgb(96, 128, 156)',
        purple: 'rgb(143, 82, 204)',
    },
};

export const DEFAULT_PALETTE_TOKENS = new Set(Object.keys(DEFAULT_PALETTE.light));

export const DEFAULT_RADIUS: RadiusValue = {
    xs: '3',
    s: '5',
    m: '6',
    l: '8',
    xl: '10',
};

export const RADIUS_PRESETS: Record<RadiusPresetName, RadiusValue> = {
    [RadiusPresetName.Regular]: DEFAULT_RADIUS,
    [RadiusPresetName.Circled]: {
        xs: '10',
        s: '12',
        m: '14',
        l: '18',
        xl: '22',
    },
    [RadiusPresetName.Squared]: {
        xs: '0',
        s: '0',
        m: '0',
        l: '0',
        xl: '0',
    },
    [RadiusPresetName.Custom]: DEFAULT_RADIUS,
};

// Default colors mappings (values from gravity-ui styles)
// https://github.com/gravity-ui/uikit/tree/main/styles/themes
export const DEFAULT_COLORS: ThemeOptions['colors'] = {
    light: {
        'base-background': 'rgb(255,255,255)',
        'base-brand-hover': 'private.brand.600-solid',
        'base-selection': 'private.brand.200',
        'base-selection-hover': 'private.brand.300',
        'line-brand': 'private.brand.600-solid',
        'text-brand': 'private.brand.700-solid',
        'text-brand-heavy': 'private.brand.700-solid',
        'text-brand-contrast': TEXT_CONTRAST_COLORS.light.black,
        'text-link': 'private.brand.600-solid',
        'text-link-hover': 'private.orange.800-solid',
        'text-link-visited': 'private.purple.550-solid',
        'text-link-visited-hover': 'private.purple.800-solid',
    },
    dark: {
        'base-background': 'rgb(34,29,34)',
        'base-brand-hover': 'private.brand.650-solid',
        'base-selection': 'private.brand.150',
        'base-selection-hover': 'private.brand.200',
        'line-brand': 'private.brand.600-solid',
        'text-brand': 'private.brand.600-solid',
        'text-brand-heavy': 'private.brand.700-solid',
        'text-brand-contrast': TEXT_CONTRAST_COLORS.dark.black,
        'text-link': 'private.brand.550-solid',
        'text-link-hover': 'private.brand.700-solid',
        'text-link-visited': 'private.purple.700-solid',
        'text-link-visited-hover': 'private.purple.850-solid',
    },
};

export const DEFAULT_THEME: ThemeOptions = {
    palette: DEFAULT_PALETTE,
    colors: DEFAULT_COLORS,
    borders: {
        preset: RadiusPresetName.Regular,
        values: RADIUS_PRESETS[RadiusPresetName.Regular],
    },
    typography: defaultTypographyPreset,
};

export type BrandPreset = {
    brandColor: typeof DEFAULT_BRAND_COLORS[number];
    colors: ThemeOptions['colors'];
};

export const BRAND_COLORS_PRESETS: BrandPreset[] = [
    {
        brandColor: 'rgb(203,255,92)',
        colors: {
            light: {
                'base-background': 'rgb(255,255,255)',
                'base-brand-hover': 'private.brand.600-solid',
                'base-selection': 'private.brand.200',
                'base-selection-hover': 'private.brand.300',
                'line-brand': 'private.brand.600-solid',
                'text-brand': 'private.brand.700-solid',
                'text-brand-heavy': 'private.brand.700-solid',
                'text-brand-contrast': TEXT_CONTRAST_COLORS.light.black,
                'text-link': 'private.brand.600-solid',
                'text-link-hover': 'private.orange.800-solid',
                'text-link-visited': 'private.purple.550-solid',
                'text-link-visited-hover': 'private.purple.800-solid',
            },
            dark: {
                'base-background': 'rgb(34,29,34)',
                'base-brand-hover': 'private.brand.650-solid',
                'base-selection': 'private.brand.150',
                'base-selection-hover': 'private.brand.200',
                'line-brand': 'private.brand.600-solid',
                'text-brand': 'private.brand.600-solid',
                'text-brand-heavy': 'private.brand.700-solid',
                'text-brand-contrast': TEXT_CONTRAST_COLORS.dark.black,
                'text-link': 'private.brand.550-solid',
                'text-link-hover': 'private.brand.700-solid',
                'text-link-visited': 'private.purple.700-solid',
                'text-link-visited-hover': 'private.purple.850-solid',
            },
        },
    },
    {
        brandColor: 'rgb(0,41,255)',
        colors: {
            light: {
                'base-background': 'rgb(255,255,255)',
                'base-brand-hover': 'private.brand.600-solid',
                'base-selection': 'private.brand.200',
                'base-selection-hover': 'private.brand.300',
                'line-brand': 'private.brand.600-solid',
                'text-brand': 'private.brand.700-solid',
                'text-brand-heavy': 'private.brand.700-solid',
                'text-brand-contrast': TEXT_CONTRAST_COLORS.light.white,
                'text-link': 'private.brand.600-solid',
                'text-link-hover': 'private.orange.800-solid',
                'text-link-visited': 'private.purple.550-solid',
                'text-link-visited-hover': 'private.purple.800-solid',
            },
            dark: {
                'base-background': 'rgb(34,29,34)',
                'base-brand-hover': 'private.brand.650-solid',
                'base-selection': 'private.brand.150',
                'base-selection-hover': 'private.brand.200',
                'line-brand': 'private.brand.600-solid',
                'text-brand': 'private.brand.600-solid',
                'text-brand-heavy': 'private.brand.700-solid',
                'text-brand-contrast': TEXT_CONTRAST_COLORS.dark.white,
                'text-link': 'private.brand.550-solid',
                'text-link-hover': 'private.brand.700-solid',
                'text-link-visited': 'private.purple.700-solid',
                'text-link-visited-hover': 'private.purple.850-solid',
            },
        },
    },
    {
        brandColor: 'rgb(49,78,60)',
        colors: {
            light: {
                'base-background': 'rgb(255,255,255)',
                'base-brand-hover': 'private.brand.600-solid',
                'base-selection': 'private.brand.200',
                'base-selection-hover': 'private.brand.300',
                'line-brand': 'private.brand.600-solid',
                'text-brand': 'private.brand.700-solid',
                'text-brand-heavy': 'private.brand.700-solid',
                'text-brand-contrast': TEXT_CONTRAST_COLORS.light.white,
                'text-link': 'private.brand.600-solid',
                'text-link-hover': 'private.orange.800-solid',
                'text-link-visited': 'private.purple.550-solid',
                'text-link-visited-hover': 'private.purple.800-solid',
            },
            dark: {
                'base-background': 'rgb(34,29,34)',
                'base-brand-hover': 'private.brand.650-solid',
                'base-selection': 'private.brand.150',
                'base-selection-hover': 'private.brand.200',
                'line-brand': 'private.brand.600-solid',
                'text-brand': 'private.brand.600-solid',
                'text-brand-heavy': 'private.brand.700-solid',
                'text-brand-contrast': TEXT_CONTRAST_COLORS.dark.white,
                'text-link': 'private.brand.550-solid',
                'text-link-hover': 'private.brand.700-solid',
                'text-link-visited': 'private.purple.700-solid',
                'text-link-visited-hover': 'private.purple.850-solid',
            },
        },
    },
    {
        brandColor: 'rgb(108,145,201)',
        colors: {
            light: {
                'base-background': 'rgb(255,255,255)',
                'base-brand-hover': 'private.brand.600-solid',
                'base-selection': 'private.brand.200',
                'base-selection-hover': 'private.brand.300',
                'line-brand': 'private.brand.600-solid',
                'text-brand': 'private.brand.700-solid',
                'text-brand-heavy': 'private.brand.700-solid',
                'text-brand-contrast': TEXT_CONTRAST_COLORS.light.white,
                'text-link': 'private.brand.600-solid',
                'text-link-hover': 'private.orange.800-solid',
                'text-link-visited': 'private.purple.550-solid',
                'text-link-visited-hover': 'private.purple.800-solid',
            },
            dark: {
                'base-background': 'rgb(34,29,34)',
                'base-brand-hover': 'private.brand.650-solid',
                'base-selection': 'private.brand.150',
                'base-selection-hover': 'private.brand.200',
                'line-brand': 'private.brand.600-solid',
                'text-brand': 'private.brand.600-solid',
                'text-brand-heavy': 'private.brand.700-solid',
                'text-brand-contrast': TEXT_CONTRAST_COLORS.dark.white,
                'text-link': 'private.brand.550-solid',
                'text-link-hover': 'private.brand.700-solid',
                'text-link-visited': 'private.purple.700-solid',
                'text-link-visited-hover': 'private.purple.850-solid',
            },
        },
    },
    {
        brandColor: 'rgb(255,190,92)',
        colors: {
            light: {
                'base-background': 'rgb(255,255,255)',
                'base-brand-hover': 'private.brand.600-solid',
                'base-selection': 'private.brand.200',
                'base-selection-hover': 'private.brand.300',
                'line-brand': 'private.brand.600-solid',
                'text-brand': 'private.brand.700-solid',
                'text-brand-heavy': 'private.brand.700-solid',
                'text-brand-contrast': TEXT_CONTRAST_COLORS.light.black,
                'text-link': 'private.brand.600-solid',
                'text-link-hover': 'private.orange.800-solid',
                'text-link-visited': 'private.purple.550-solid',
                'text-link-visited-hover': 'private.purple.800-solid',
            },
            dark: {
                'base-background': 'rgb(34,29,34)',
                'base-brand-hover': 'private.brand.650-solid',
                'base-selection': 'private.brand.150',
                'base-selection-hover': 'private.brand.200',
                'line-brand': 'private.brand.600-solid',
                'text-brand': 'private.brand.600-solid',
                'text-brand-heavy': 'private.brand.700-solid',
                'text-brand-contrast': TEXT_CONTRAST_COLORS.dark.black,
                'text-link': 'private.brand.550-solid',
                'text-link-hover': 'private.brand.700-solid',
                'text-link-visited': 'private.purple.700-solid',
                'text-link-visited-hover': 'private.purple.850-solid',
            },
        },
    },
    {
        brandColor: 'rgb(255,92,92)',
        colors: {
            light: {
                'base-background': 'rgb(255,255,255)',
                'base-brand-hover': 'private.brand.600-solid',
                'base-selection': 'private.brand.200',
                'base-selection-hover': 'private.brand.300',
                'line-brand': 'private.brand.600-solid',
                'text-brand': 'private.brand.700-solid',
                'text-brand-heavy': 'private.brand.700-solid',
                'text-brand-contrast': TEXT_CONTRAST_COLORS.light.white,
                'text-link': 'private.brand.600-solid',
                'text-link-hover': 'private.orange.800-solid',
                'text-link-visited': 'private.purple.550-solid',
                'text-link-visited-hover': 'private.purple.800-solid',
            },
            dark: {
                'base-background': 'rgb(34,29,34)',
                'base-brand-hover': 'private.brand.650-solid',
                'base-selection': 'private.brand.150',
                'base-selection-hover': 'private.brand.200',
                'line-brand': 'private.brand.600-solid',
                'text-brand': 'private.brand.600-solid',
                'text-brand-heavy': 'private.brand.700-solid',
                'text-brand-contrast': TEXT_CONTRAST_COLORS.dark.white,
                'text-link': 'private.brand.550-solid',
                'text-link-hover': 'private.brand.700-solid',
                'text-link-visited': 'private.purple.700-solid',
                'text-link-visited-hover': 'private.purple.850-solid',
            },
        },
    },
];
