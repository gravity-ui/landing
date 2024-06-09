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
            background: 'private.blue.550',
            hoveredBrand: 'private.yellow.200',
            brandText: '',
            hcBrandText: '',
            brandLine: '',
            selectionBackground: '',
            hoveredSelectionBackground: '',
            link: '',
            hoveredLink: '',
            visitedLink: '',
        },
        dark: {
            background: '',
            hoveredBrand: '',
            brandText: '',
            hcBrandText: '',
            brandLine: '',
            selectionBackground: '',
            hoveredSelectionBackground: '',
            link: '',
            hoveredLink: '',
            visitedLink: '',
        },
    },
    borders: {},
    typography: {},
};
