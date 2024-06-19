import type {ThemeOptions} from './types';

export const THEME_COLOR_VARIABLE_PREFIX = '--g-color';

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
    borders: {},
    typography: {},
};

export enum RadiusSize {
    xs = 'border-radius-xs',
    s = 'border-radius-s',
    m = 'border-radius-m',
    l = 'border-radius-l',
    xl = 'border-radius-xl',
    xxl = 'border-radius-xxl',
}

export const DEFAULT_RADIUS = {
    [RadiusSize.xs]: '3px',
    [RadiusSize.s]: '5px',
    [RadiusSize.m]: '6px',
    [RadiusSize.l]: '8px',
    [RadiusSize.xl]: '10px',
    [RadiusSize.xxl]: '16px',
};

export enum RadiusPresetName {
    Regular = 'radius_regular',
    Circled = 'radius_circled',
    Squared = 'radius_squared',
    Custom = 'radius_custom',
}

export const RADIUS_PRESETS = {
    [RadiusPresetName.Regular]: DEFAULT_RADIUS,
    [RadiusPresetName.Circled]: {
        [RadiusSize.xs]: '100px',
        [RadiusSize.s]: '100px',
        [RadiusSize.m]: '100px',
        [RadiusSize.l]: '100px',
        [RadiusSize.xl]: '100px',
        [RadiusSize.xxl]: '100px',
    },
    [RadiusPresetName.Squared]: {
        [RadiusSize.xs]: '0',
        [RadiusSize.s]: '0',
        [RadiusSize.m]: '0',
        [RadiusSize.l]: '0',
        [RadiusSize.xl]: '0',
        [RadiusSize.xxl]: '0',
    },
    [RadiusPresetName.Custom]: DEFAULT_RADIUS,
};
