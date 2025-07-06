import {TextProps} from '@gravity-ui/uikit';
import type {BordersOptions, GravityTheme, Theme} from '@gravity-ui/uikit-themer';

import {DefaultFontFamilyType, TextVariants} from './typography/constants';

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
