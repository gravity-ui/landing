export type ThemeVariant = 'light' | 'dark';

export type PaletteOptions = {
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
    /** Values of solid colors, from which private colors are calculated */
    palette: Record<ThemeVariant, PaletteOptions>;
    /** Utility colors that used in components (background, link, brand-text, etc.) */
    colors: Record<ThemeVariant, ColorsOptions>;
    borders: BordersOptions;
    typography: TypographyOptions;
}

const PRIVATE_COLOR_VARIABLES = [
    1000, 950, 900, 850, 800, 750, 700, 650, 600, 550, 500, 450, 400, 350, 300, 250, 200, 150, 100,
    50,
] as const;

type PrivateColorVariable = (typeof PRIVATE_COLOR_VARIABLES)[number];

export type PrivateColors = Record<PrivateColorVariable, string>;

type PaletteToken = {
    /** Title that will using in UI */
    title: string;
    /** Is color manually created */
    isCustom?: boolean;
    /** Auto-generated private colors for each theme variant */
    privateColors: Record<ThemeVariant, PrivateColors | undefined>;
};

export type PaletteTokens = Record<string, PaletteToken | undefined>;

export interface ThemeWizardState extends ThemeOptions {
    /** Mapping color tokens to their information (title and private colors) */
    paletteTokens: PaletteTokens;
}

export type Palette = {
    title: string;
    isCustom?: boolean;
    colors: Record<ThemeVariant, string>;
}[];
