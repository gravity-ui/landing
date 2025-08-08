import type {BordersOptions, GravityTheme, Theme} from '@gravity-ui/uikit-themer';

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
}

export type Palette = {
    title: string;
    isCustom?: boolean;
    colors: Record<Theme, string>;
}[];
