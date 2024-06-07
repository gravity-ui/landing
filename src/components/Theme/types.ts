export type ThemeVariant = 'light' | 'dark';

export type PalletteOptions = {
    brand: string;
    [key: string]: string;
};

export type ColorsOptions = {
    background: string;
    hoveredBrand: string;
    brandText: string;
    hcBrandText: string;
    brandLine: string;
    selectionBackground: string;
    hoveredSelectionBackground: string;
    link: string;
    hoveredLink: string;
    visitedLink: string;
};

export type BordersOptions = {};

export type TypographyOptions = {};

export interface ThemeOptions {
    /** Параметры solid-цветов, от которых рассчитываются private-цвета */
    pallette: Record<ThemeVariant, PalletteOptions>;
    /** Утилитарные цвета, использующиеся в компонентах (background, link, brand-text и тд) */
    colors: Record<ThemeVariant, ColorsOptions>;
    borders: BordersOptions;
    typography: TypographyOptions;
}

// Про 550 | solid подумать... Нужно ли хранить его тут?
const PRIVATE_COLOR_VARIABLES = [
    1000,
    950,
    900,
    850,
    800,
    750,
    700,
    650,
    600,
    'solid',
    500,
    450,
    400,
    350,
    300,
    250,
    200,
    150,
    100,
    50,
] as const;

type PrivateColorVariable = (typeof PRIVATE_COLOR_VARIABLES)[number];

export type PrivateColors = Record<PrivateColorVariable, string>;

type PalleteToken = {
    /** Title that will using in UI */
    title: string;
    /** Auto-generated private colors for each theme variant */
    privateColors: Record<ThemeVariant, PrivateColors | undefined>;
};

export type PalleteTokens = Record<string, PalleteToken>;

export interface ThemeWizardState extends ThemeOptions {
    /** Mapping color tokens to their information (title and private colors) */
    palletteTokens: PalleteTokens;
}
