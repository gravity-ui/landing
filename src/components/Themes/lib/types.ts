import {TextProps} from '@gravity-ui/uikit';

import {DefaultFontFamilyType, TextVariants} from './typography/constants';

export type ThemeVariant = 'light' | 'dark';

export type PaletteOptions = {
    brand: string;
    [key: string]: string;
};

export type ColorsOptions = {
    'base-background': string;
    'base-brand-hover': string;
    'base-selection': string;
    'base-selection-hover': string;
    'line-brand': string;
    'text-brand': string;
    'text-brand-heavy': string;
    'text-brand-contrast': string;
    'text-link': string;
    'text-link-hover': string;
    'text-link-visited': string;
    'text-link-visited-hover': string;
};

export type ColorOption = keyof ColorsOptions;

export type RadiusSizeName = 'xs' | 's' | 'm' | 'l' | 'xl';

export enum RadiusPresetName {
    Regular = 'radius_regular',
    Circled = 'radius_circled',
    Squared = 'radius_squared',
    Custom = 'radius_custom',
}

export type RadiusValue = Record<RadiusSizeName, string>;

export type BordersOption = {
    preset: RadiusPresetName;
    values: RadiusValue;
};

export enum CustomFontSelectType {
    GoogleFonts = 'google-fonts',
    Manual = 'manual',
}

export type TypographyOptions = {
    baseSetting: {
        defaultFontFamilyType: {
            value: DefaultFontFamilyType;
            content: string;
        }[];
        customFontFamilyType: {
            value: string;
            content: string;
        }[];
        fontFamilies: Record<
            string,
            {
                title: string;
                key: string;
                link: string;
                alternatives: string[];
                isCustom?: boolean;
                customType?: string;
                fontWebsite?: string;
            }
        >;
    };
    isAdvancedActive: boolean;
    advanced: Record<
        TextVariants,
        {
            title: string;
            fontWeight: number;
            selectedFontFamilyType: DefaultFontFamilyType;
            sizes: Partial<
                Record<
                    Exclude<TextProps['variant'], undefined>,
                    {
                        title: string;
                        fontSize: number;
                        lineHeight: number;
                    }
                >
            >;
        }
    >;
};

export interface ThemeOptions {
    /** Values of solid colors, from which private colors are calculated */
    palette: Record<ThemeVariant, PaletteOptions>;
    /** Utility colors that used in components (background, link, brand-text, etc.) */
    colors: Record<ThemeVariant, ColorsOptions>;
    borders: BordersOption;
    typography: TypographyOptions;
}

export type PrivateColors = Record<string, string>;

type PaletteToken = {
    /** Title that will using in UI */
    title: string;
    /** Is color manually created */
    isCustom?: boolean;
    /** Auto-generated private colors for each theme variant */
    privateColors: Record<ThemeVariant, PrivateColors | undefined>;
};

export type PaletteTokens = Record<string, PaletteToken>;

export interface ThemeCreatorState extends ThemeOptions {
    /** Mapping color tokens to their information (title and private colors) */
    paletteTokens: PaletteTokens;
    /** All available palette tokens in theme */
    tokens: string[];
    showMainSettings: boolean;
    advancedModeEnabled: boolean;
    changesExist: boolean;
}

export type Palette = {
    title: string;
    isCustom?: boolean;
    colors: Record<ThemeVariant, string>;
}[];
