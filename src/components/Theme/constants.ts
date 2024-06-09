import type {ThemeOptions} from './types';

export const THEME_COLOR_VARIABLE_PREFIX = '--g-color';

export const DEFAULT_NEW_COLOR_TITLE = 'New color';

export const DEFAULT_PALETTE: ThemeOptions['palette'] = {
    light: {
        white: '', // Дефолтно заданы
        black: '', // Дефолтно заданы
        brand: '#eee',
        orange: '#FFA629',
        green: '#63E587',
        yellow: '#FFBE5C',
        red: '#FF6B00',
        blue: '#1DA3EE',
        'cool-grey': '#808895',
        purple: '#6100FF',
    },
    dark: {
        white: '', // Дефолтно заданы
        black: '', // Дефолтно заданы
        brand: '#aaa',
        orange: 'rgba(200,100,100,.20)',
        green: 'rgba(200,100,100,.20)',
        yellow: 'rgba(200,100,100,.20)',
        red: 'rgba(200,100,100,.20)',
        blue: 'rgba(200,100,100,.20)',
        'cool-grey': 'rgba(200,100,100,.20)',
        purple: 'rgba(200,100,100,.20)',
    },
};

export const DEFAULT_THEME: ThemeOptions = {
    palette: DEFAULT_PALETTE,
    colors: {
        light: {
            background: 'private.blue.550', // Ссылка на токен
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
