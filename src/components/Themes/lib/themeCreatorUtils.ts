import {TextProps} from '@gravity-ui/uikit';
import {
    BordersOptions,
    GravityTheme,
    createInternalPrivateColorReference,
    createPrivateColorCssVariable,
    parseInternalPrivateColorReference,
    removeBaseColor,
    updateBaseColor,
    updateUtilityColor,
} from '@gravity-ui/uikit-themer';
import type {AnyPrivateColorToken, Theme, UtilityColor} from '@gravity-ui/uikit-themer';
import {generatePrivateColorsForBaseColors} from '@gravity-ui/uikit-themer/dist/utils';
import capitalize from 'lodash/capitalize';
import cloneDeep from 'lodash/cloneDeep';
import kebabCase from 'lodash/kebabCase';
import lowerCase from 'lodash/lowerCase';
import {v4 as uuidv4} from 'uuid';

import {
    BrandPreset,
    DEFAULT_NEW_COLOR_TITLE,
    DEFAULT_PALETTE_TOKENS,
    RADIUS_PRESETS,
} from './constants';
import type {Palette, PaletteTokens, ThemeCreatorState} from './types';
import {CustomFontSelectType, RadiusPresetName, TypographyOptions} from './types';
import {DefaultFontFamilyType, TextVariants, defaultTypographyPreset} from './typography/constants';
import {
    createFontFamilyVariable,
    createFontLinkImport,
    createTextFontFamilyVariable,
    createTextFontSizeVariable,
    createTextFontWeightVariable,
    createTextLineHeightVariable,
    getCustomFontTypeKey,
} from './typography/utils';

function createColorToken(title: string) {
    return kebabCase(title);
}

function createTitleFromToken(token: string) {
    return capitalize(lowerCase(token));
}

export function createPrivateColorCssVariableFromToken(privateColorToken: string) {
    const result = parseInternalPrivateColorReference(privateColorToken);

    if (result) {
        return createPrivateColorCssVariable(result.mainColorToken, result.privateColorCode);
    }

    return '';
}

function isManuallyCreatedToken(token: string) {
    return !DEFAULT_PALETTE_TOKENS.has(token);
}

function createNewColorTitle(currentPaletteTokens: PaletteTokens) {
    let i = 0;

    // eslint-disable-next-line no-constant-condition
    while (true) {
        const title = i === 0 ? DEFAULT_NEW_COLOR_TITLE : `${DEFAULT_NEW_COLOR_TITLE} ${i}`;
        const token = createColorToken(title);

        if (!currentPaletteTokens[token]) {
            return title;
        }

        i++;
    }
}

function createPalleteTokens(theme: GravityTheme): PaletteTokens {
    const {baseColors} = theme;

    return Object.keys(baseColors).reduce<PaletteTokens>(
        (acc, token) => ({
            ...acc,
            [token]: {
                title: createTitleFromToken(token),
            },
        }),
        {},
    );
}

export type UpdateColorInThemeParams = {
    /** The title of the color to update. */
    title: string;
    /** The theme variant to update. */
    theme: Theme;
    /** The new value of the color. */
    value: string;
};

/**
 * Updates a color in the given theme state.
 *
 * @param {ThemeCreatorState} themeState - The current state of the theme.
 * @param {UpdateColorInThemeParams} params - The parameters for the color update.
 * @returns {ThemeCreatorState} The updated theme state.
 */
export function updateColorInTheme(
    themeState: ThemeCreatorState,
    params: UpdateColorInThemeParams,
): ThemeCreatorState {
    const token = createColorToken(params.title);

    const updatedGravityTheme = updateBaseColor({
        theme: themeState.gravityTheme,
        colorToken: token,
        themeVariant: params.theme,
        value: params.value,
    });

    const newThemeState = {...themeState, gravityTheme: updatedGravityTheme};

    newThemeState.paletteTokens[token] = {
        ...newThemeState.paletteTokens[token],
        title: params.title,
    };

    return newThemeState;
}

export type AddColorToThemeParams =
    | {
          title?: string;
          colors?: Partial<Record<Theme, string>>;
      }
    | undefined;

/**
 * Adds a new color to the given theme state.
 *
 * @param {ThemeCreatorState} themeState - The current state of the theme.
 * @param {AddColorToThemeParams} params - The parameters of the adding color.
 * @returns {ThemeCreatorState} The updated theme state with the new color added.
 */
export function addColorToTheme(
    themeState: ThemeCreatorState,
    params: AddColorToThemeParams,
): ThemeCreatorState {
    const title = params?.title ?? createNewColorTitle(themeState.paletteTokens);
    const token = createColorToken(title);

    const updatedGravityTheme = updateBaseColor({
        theme: themeState.gravityTheme,
        colorToken: token,
        value: {
            light: params?.colors?.light ?? '#ffffff',
            dark: params?.colors?.dark ?? '#ffffff',
        },
    });

    const newThemeState = {...themeState, gravityTheme: updatedGravityTheme};

    newThemeState.paletteTokens = {
        ...newThemeState.paletteTokens,
        [token]: {
            title,
            isCustom: true,
        },
    };

    return newThemeState;
}

export function removeColorFromTheme(
    themeState: ThemeCreatorState,
    colorTitle: string,
): ThemeCreatorState {
    const token = createColorToken(colorTitle);

    const updatedGravityTheme = removeBaseColor(themeState.gravityTheme, token);
    const newThemeState = {...themeState, gravityTheme: updatedGravityTheme};
    delete newThemeState.paletteTokens[token];

    return newThemeState;
}

export type RenameColorInThemeParams = {
    oldTitle: string;
    newTitle: string;
};

export function renameColorInTheme(
    themeState: ThemeCreatorState,
    {oldTitle, newTitle}: RenameColorInThemeParams,
): ThemeCreatorState {
    const newThemeState = {...themeState};
    const oldToken = createColorToken(oldTitle);
    const newToken = createColorToken(newTitle);

    if (newThemeState.paletteTokens[oldToken]) {
        newThemeState.paletteTokens[newToken] = {
            ...newThemeState.paletteTokens[oldToken],
            title: newTitle,
        };
        newThemeState.gravityTheme.baseColors[newToken] = {
            ...newThemeState.gravityTheme.baseColors[oldToken],
        };
        newThemeState.gravityTheme.privateColors[newToken] =
            newThemeState.gravityTheme.privateColors[oldToken];
    }

    delete newThemeState.gravityTheme.baseColors[oldToken];
    delete newThemeState.gravityTheme.privateColors[oldToken];
    delete newThemeState.paletteTokens[oldToken];

    return newThemeState;
}

export type ThemeColorOption = {
    token: string;
    title: string;
    color: string;
    privateColors: {
        token: string;
        title: string;
        color: string;
    }[];
};

/**
 * Generates theme color options from the given palette tokens and theme variant.
 *
 * @param {Object} params - The parameters for generating theme color options.
 * @param {PaletteTokens} params.paletteTokens - The palette tokens to generate options from.
 * @param {Theme} params.themeVariant - The theme variant to filter private colors (light, dark).
 * @returns {ThemeColorOption[]} The generated theme color options.
 */
export function getThemeColorOptions({
    themeState,
    themeVariant,
}: {
    themeState: ThemeCreatorState;
    themeVariant: Theme;
}) {
    const {paletteTokens, gravityTheme} = themeState;
    const {baseColors, privateColors} = gravityTheme;

    return Object.keys(baseColors).reduce<ThemeColorOption[]>((acc, token) => {
        if (privateColors[token]?.[themeVariant]) {
            return [
                ...acc,
                {
                    token,
                    color: baseColors[token][themeVariant].value,
                    title: paletteTokens[token].title,
                    privateColors: Object.entries(privateColors[token][themeVariant]).map(
                        ([privateColorCode, color]) => ({
                            token: createInternalPrivateColorReference(token, privateColorCode),
                            title: createPrivateColorCssVariable(
                                token,
                                privateColorCode as AnyPrivateColorToken,
                            ),
                            color: color.value,
                        }),
                    ),
                },
            ];
        }

        return acc;
    }, []);
}

export type ChangeUtilityColorInThemeParams = {
    themeVariant: Theme;
    name: UtilityColor;
    value: string;
};

export function changeUtilityColorInTheme(
    themeState: ThemeCreatorState,
    {themeVariant, name, value}: ChangeUtilityColorInThemeParams,
): ThemeCreatorState {
    const updatedGravityTheme = updateUtilityColor({
        theme: themeState.gravityTheme,
        themeVariant,
        colorToken: name,
        value,
    });

    return {...themeState, gravityTheme: updatedGravityTheme};
}

export function applyBrandPresetToTheme(
    themeState: ThemeCreatorState,
    {brandColor, utilityColors}: BrandPreset,
): ThemeCreatorState {
    let newState = {...themeState};

    (['light', 'dark'] as const).forEach((theme) => {
        newState = updateColorInTheme(newState, {
            theme,
            title: 'brand',
            value: brandColor,
        });
    });

    // TODO use updateUtilityColor from uikit-themer
    newState.gravityTheme.utilityColors = {
        ...newState.gravityTheme.utilityColors,
        ...utilityColors,
    };

    return newState;
}

export function getThemePalette(theme: ThemeCreatorState): Palette {
    const {gravityTheme} = theme;
    const {baseColors} = gravityTheme;

    return Object.keys(baseColors).map((token) => {
        return {
            title: theme.paletteTokens[token]?.title || '',
            colors: {
                light: baseColors[token].light.value,
                dark: baseColors[token].dark.value,
            },
            isCustom: isManuallyCreatedToken(token),
        };
    });
}

export function initThemeCreator(inputTheme: GravityTheme): ThemeCreatorState {
    const gravityTheme = cloneDeep(inputTheme);
    gravityTheme.privateColors = {
        ...gravityTheme.privateColors,
        ...generatePrivateColorsForBaseColors(
            {
                brand: gravityTheme.baseColors.brand,
            },
            gravityTheme.utilityColors['base-background'].light.value,
            gravityTheme.utilityColors['base-background'].dark.value,
        ),
    };

    const paletteTokens = createPalleteTokens(gravityTheme);

    return {
        gravityTheme,
        paletteTokens,
        showMainSettings: false,
        advancedModeEnabled: false,
        changesExist: false,

        // TODO: собирать border и typography из gravityTheme
        borders: {
            preset: RadiusPresetName.Regular,
            values: RADIUS_PRESETS[RadiusPresetName.Regular],
        },
        typography: defaultTypographyPreset,
    };
}

export type ChangeRadiusPresetInThemeParams = {
    radiusPresetName: RadiusPresetName;
};

export function changeRadiusPresetInTheme(
    themeState: ThemeCreatorState,
    {radiusPresetName}: ChangeRadiusPresetInThemeParams,
): ThemeCreatorState {
    const newThemeState = {...themeState};
    const newBordersValue = {...RADIUS_PRESETS[radiusPresetName]};

    newThemeState.gravityTheme.borders = newBordersValue;

    newThemeState.borders = {
        preset: radiusPresetName,
        values: newBordersValue,
    };

    return newThemeState;
}

export type UpdateCustomRadiusPresetInThemeParams = {radiusValue: Partial<BordersOptions>};

export function updateCustomRadiusPresetInTheme(
    themeState: ThemeCreatorState,
    {radiusValue}: UpdateCustomRadiusPresetInThemeParams,
): ThemeCreatorState {
    const newThemeState = {...themeState};
    const previousRadiusValues = themeState.borders.values;

    newThemeState.borders = {
        preset: RadiusPresetName.Custom,
        values: {...previousRadiusValues, ...radiusValue},
    };

    newThemeState.gravityTheme.borders = {
        ...newThemeState.gravityTheme.borders,
        ...radiusValue,
    };

    return newThemeState;
}

export type UpdateFontFamilyParams = {
    fontType: DefaultFontFamilyType | string;
    fontWebsite?: string;
    isCustom?: boolean;
    customType?: string;
    value?: {
        title: string;
        key: string;
        link: string;
        alternatives: string[];
    };
};

export function updateFontFamilyInTheme(
    themeState: ThemeCreatorState,
    {fontType, value, isCustom, fontWebsite, customType}: UpdateFontFamilyParams,
): ThemeCreatorState {
    const previousFontFamilySettings = themeState.typography.baseSetting.fontFamilies;

    const newFontFamilySettings = {
        ...previousFontFamilySettings,
        [fontType]: {
            ...previousFontFamilySettings[fontType],
            ...(value || {}),
            isCustom,
            customType: customType || previousFontFamilySettings[fontType].customType,
            fontWebsite,
        },
    };

    return {
        ...themeState,
        typography: {
            ...themeState.typography,
            baseSetting: {
                ...themeState.typography.baseSetting,
                fontFamilies: newFontFamilySettings,
            },
        },
    };
}

export type AddFontFamilyTypeParams = {
    title: string;
};

export function addFontFamilyTypeInTheme(
    themeState: ThemeCreatorState,
    {title}: AddFontFamilyTypeParams,
): ThemeCreatorState {
    const {customFontFamilyType} = themeState.typography.baseSetting;
    const newFontType = `custom-font-type-${uuidv4()}`;

    const newCustomFontFamily = [
        ...customFontFamilyType,
        {
            value: newFontType,
            content: title,
        },
    ];

    return {
        ...themeState,
        typography: {
            ...themeState.typography,
            baseSetting: {
                ...themeState.typography.baseSetting,
                fontFamilies: {
                    ...themeState.typography.baseSetting.fontFamilies,
                    [newFontType]: {
                        isCustom: true,
                        customType: CustomFontSelectType.GoogleFonts,
                        title: '',
                        key: '',
                        link: '',
                        alternatives: [],
                    },
                },
                customFontFamilyType: newCustomFontFamily,
            },
        },
    };
}

export type UpdateFontFamilyTypeTitleParams = {
    title: string;
    familyType: string;
};

export function updateFontFamilyTypeTitleInTheme(
    themeState: ThemeCreatorState,
    {title, familyType}: UpdateFontFamilyTypeTitleParams,
): ThemeCreatorState {
    const {customFontFamilyType} = themeState.typography.baseSetting;

    const newCustomFontFamily = customFontFamilyType.map((fontFamilyType) => {
        return fontFamilyType.value === familyType
            ? {
                  content: title,
                  value: familyType,
              }
            : fontFamilyType;
    });

    return {
        ...themeState,
        typography: {
            ...themeState.typography,
            baseSetting: {
                ...themeState.typography.baseSetting,
                customFontFamilyType: newCustomFontFamily,
            },
        },
    };
}

export function removeFontFamilyTypeFromTheme(
    themeState: ThemeCreatorState,
    {fontType}: {fontType: string},
): ThemeCreatorState {
    const {customFontFamilyType, fontFamilies} = themeState.typography.baseSetting;

    const {[fontType]: _, ...restFontFamilies} = fontFamilies;

    const newCustomFontFamilyType = customFontFamilyType.filter(
        (fontFamily) => fontFamily.value !== fontType,
    );

    const newAdvanced = cloneDeep(themeState.typography.advanced);

    // Reset selected font to default
    Object.entries(newAdvanced).forEach(([textVariant, settings]) => {
        if (settings.selectedFontFamilyType === fontType) {
            newAdvanced[textVariant as TextVariants].selectedFontFamilyType =
                defaultTypographyPreset.advanced[
                    textVariant as TextVariants
                ].selectedFontFamilyType;
        }
    });

    return {
        ...themeState,
        typography: {
            ...themeState.typography,
            advanced: newAdvanced,
            baseSetting: {
                ...themeState.typography.baseSetting,
                fontFamilies: restFontFamilies,
                customFontFamilyType: newCustomFontFamilyType,
            },
        },
    };
}

export type UpdateAdvancedTypographySettingsParams = {
    key: TextVariants;
    fontWeight?: number;
    selectedFontFamilyType?: string;
    sizeKey?: Exclude<TextProps['variant'], undefined>;
    fontSize?: number;
    lineHeight?: number;
};

export function updateAdvancedTypographySettingsInTheme(
    themeState: ThemeCreatorState,
    {
        key,
        fontSize,
        selectedFontFamilyType,
        sizeKey,
        fontWeight,
        lineHeight,
    }: UpdateAdvancedTypographySettingsParams,
): ThemeCreatorState {
    const previousTypographyAdvancedSettings = themeState.typography.advanced;

    const newSizes = sizeKey
        ? {
              [sizeKey]: {
                  ...previousTypographyAdvancedSettings[key].sizes[sizeKey],
                  fontSize:
                      fontSize ?? previousTypographyAdvancedSettings[key].sizes[sizeKey]?.fontSize,
                  lineHeight:
                      lineHeight ??
                      previousTypographyAdvancedSettings[key].sizes[sizeKey]?.lineHeight,
              },
          }
        : {};

    const newTypographyAdvancedSettings = {
        ...previousTypographyAdvancedSettings,
        [key]: {
            ...previousTypographyAdvancedSettings[key],
            fontWeight: fontWeight ?? previousTypographyAdvancedSettings[key].fontWeight,
            selectedFontFamilyType:
                selectedFontFamilyType ??
                previousTypographyAdvancedSettings[key].selectedFontFamilyType,
            sizes: {
                ...previousTypographyAdvancedSettings[key].sizes,
                ...newSizes,
            },
        },
    };

    return {
        ...themeState,
        typography: {
            ...themeState.typography,
            advanced: {
                ...newTypographyAdvancedSettings,
            },
        },
    };
}

export const updateAdvancedTypographyInTheme = (
    themeState: ThemeCreatorState,
): ThemeCreatorState => {
    return {
        ...themeState,
        typography: {
            ...themeState.typography,
            isAdvancedActive: !themeState.typography.isAdvancedActive,
        },
    };
};

export const createFontImportsForExport = (
    fontFamily: TypographyOptions['baseSetting']['fontFamilies'],
) => {
    let cssString = '';

    Object.entries(fontFamily).forEach(([, value]) => {
        cssString += `${createFontLinkImport(value.link)}\n`;
    });

    return cssString;
};

export const createTypographyPresetForExport = ({
    typography,
    forPreview,
}: {
    typography: TypographyOptions;
    ignoreDefaultValues: boolean;
    forPreview: boolean;
}) => {
    const {baseSetting, advanced} = typography;
    let cssString = '';

    Object.entries(baseSetting.fontFamilies).forEach(([key, value]) => {
        const customFontKey = getCustomFontTypeKey(key, baseSetting.customFontFamilyType);

        cssString += `${createFontFamilyVariable(
            customFontKey ? kebabCase(customFontKey) : key,
            value.title,
            value.alternatives,
            forPreview,
        )}\n`;
    });

    Object.entries(advanced).forEach(([key, data]) => {
        const defaultAdvancedSetting = defaultTypographyPreset.advanced[key as TextVariants];

        if (defaultAdvancedSetting.selectedFontFamilyType !== data.selectedFontFamilyType) {
            const customFontTypeKey = getCustomFontTypeKey(
                data.selectedFontFamilyType,
                baseSetting.customFontFamilyType,
            );

            cssString += `${createTextFontFamilyVariable(
                key as TextVariants,
                customFontTypeKey ? kebabCase(customFontTypeKey) : data.selectedFontFamilyType,
                forPreview,
            )}\n`;
        }
        if (defaultAdvancedSetting.fontWeight !== data.fontWeight) {
            cssString += `${createTextFontWeightVariable(
                key as TextVariants,
                data.fontWeight,
                forPreview,
            )}\n`;
            cssString += '\n';
        }

        Object.entries(data.sizes).forEach(([sizeKey, sizeData]) => {
            if (
                defaultAdvancedSetting.sizes[sizeKey as Exclude<TextProps['variant'], undefined>]
                    ?.fontSize !== sizeData.fontSize
            ) {
                cssString += `${createTextFontSizeVariable(
                    sizeKey as TextProps['variant'],
                    sizeData.fontSize,
                    forPreview,
                )}\n`;
            }

            if (
                defaultAdvancedSetting.sizes[sizeKey as Exclude<TextProps['variant'], undefined>]
                    ?.lineHeight !== sizeData.lineHeight
            ) {
                cssString += `${createTextLineHeightVariable(
                    sizeKey as TextProps['variant'],
                    sizeData.lineHeight,
                    forPreview,
                )}\n`;
                cssString += '\n';
            }
        });
    });

    return cssString;
};
