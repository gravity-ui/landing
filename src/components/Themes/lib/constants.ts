import {RadiusPresetName, RadiusValue, type ThemeOptions} from './types';
import {defaultTypographyPreset} from './typography/constants';

export const THEME_COLOR_VARIABLE_PREFIX = '--g-color';

export const THEME_BORDER_RADIUS_VARIABLE_PREFIX = '--g-border-radius';

export const DEFAULT_NEW_COLOR_TITLE = 'New color';

export const DEFAULT_PALETTE: ThemeOptions['palette'] = {
    light: {
        white: 'rgb(255, 255, 255)',
        black: 'rgb(0, 0, 0)',
        brand: 'rgb(82, 130, 255)',
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
        brand: 'rgb(75, 113, 214)',
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
        xs: '100',
        s: '100',
        m: '100',
        l: '100',
        xl: '100',
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

export const DEFAULT_THEME: ThemeOptions = {
    palette: DEFAULT_PALETTE,
    colors: {
        light: {
            'base-background': 'rgb(255,255,255)',
            'base-brand-hover': 'private.brand.600-solid',
            'base-selection': 'private.yellow.200',
            'base-selection-hover': 'private.yellow.300',
            'line-brand': 'private.brand.600-solid',
            'text-brand': 'private.brand.700-solid',
            'text-brand-heavy': 'private.brand.700-solid',
            'text-brand-contrast': 'private.black.850',
            'text-link': 'private.yellow.650-solid',
            'text-link-hover': 'private.orange.650-solid',
            'text-link-visited': 'private.purple.550-solid',
            'text-link-visited-hover': 'private.purple.800-solid',
        },
        dark: {
            'base-background': 'rgb(34, 29, 34)',
            'base-brand-hover': 'private.brand.650-solid',
            'base-selection': 'private.yellow.150',
            'base-selection-hover': 'private.yellow.200',
            'line-brand': 'private.brand.600-solid',
            'text-brand': 'private.brand.600-solid',
            'text-brand-heavy': 'private.brand.700-solid',
            'text-brand-contrast': 'private.black.900',
            'text-link': 'private.yellow.550-solid',
            'text-link-hover': 'private.orange.550-solid',
            'text-link-visited': 'private.purple.700-solid',
            'text-link-visited-hover': 'private.purple.850-solid',
        },
    },
    borders: {
        preset: RadiusPresetName.Regular,
        values: RADIUS_PRESETS[RadiusPresetName.Regular],
    },
    typography: defaultTypographyPreset,
};
