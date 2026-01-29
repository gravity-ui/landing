import type {BordersOptions, GravityTheme, Theme, UtilityColor} from '@gravity-ui/uikit-themer';

export type PaletteOptions = {
    brand: string;
    [key: string]: string;
};

export enum RadiusPresetName {
    Regular = 'radius_regular',
    Circled = 'radius_circled',
    Squared = 'radius_squared',
    Custom = 'radius_custom',
}

export type BordersOption = {
    preset: RadiusPresetName;
    values: BordersOptions;
};

export enum CustomFontSelectType {
    GoogleFonts = 'google-fonts',
    Manual = 'manual',
}

export type ColorsSettingsType = 'basic' | 'advanced';

export type AdvancedColorType =
    | 'basic-palette'
    | 'brand-summary'
    | 'texts'
    | 'backgrounds'
    | 'lines'
    | 'effects'
    | 'misc';

export type AdvancedColorTypeGroup = {
    texts: 'base' | 'semantic' | 'brand' | 'always-dark' | 'always-light' | 'main-inversion';
    'brand-summary': 'brand-palette' | 'advanced-brand-palette' | 'additional-colors';
    'basic-palette': 'base-color' | 'extra-color';
    backgrounds:
        | 'basic'
        | 'brand'
        | 'light-semantic'
        | 'medium-semantic'
        | 'heavy-semantic'
        | 'always-light'
        | 'floats';
    lines: 'general' | 'always-light' | 'semantic';
    effects: 'other';
    misc: 'scroll' | 'axes' | 'tooltips';
};

export type TypographyOptions = {
    fontFamilies: Record<
        string,
        {
            title: string;
            link: string;
            customType?: string;
            fontWebsite?: string;
        }
    >;
    isAdvancedActive: boolean;
};

export type PrivateColors = Record<string, string>;

type PaletteToken = {
    /** Title that will using in UI */
    title: string;
    /** Is color manually created */
    isCustom?: boolean;
};

export type PaletteTokens = Record<string, PaletteToken>;

export interface ThemeCreatorState {
    /** Gravity theme with all the default values */
    gravityTheme: GravityTheme;
    /** Mapping base colors tokens to their information (title, etc.) */
    paletteTokens: PaletteTokens;
    showMainSettings: boolean;
    advancedModeEnabled: boolean;
    changesExist: boolean;

    borders: BordersOption;
    typography: TypographyOptions;
    colorsSettingsType: ColorsSettingsType;
}

export type Palette = {
    title: string;
    isCustom?: boolean;
    colors: Record<Theme, string>;
}[];

export type AdvanceColors = {
    [K in AdvancedColorType]: Record<
        AdvancedColorTypeGroup[K],
        (({colorName: UtilityColor} | {colorName: string}) & {
            light?: {
                value: string;
                ref?: string;
            };
            dark?: {
                value: string;
                ref?: string;
            };
        })[]
    >;
};
