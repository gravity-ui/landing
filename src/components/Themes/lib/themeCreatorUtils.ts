import {
    BordersOptions,
    DEFAULT_THEME,
    GravityTheme,
    createInternalPrivateColorReference,
    createPrivateColorCssVariable,
    parseInternalPrivateColorReference,
    removeBaseColor,
    updateBaseColor,
    updateUtilityColor,
} from '@gravity-ui/uikit-themer';
import type {
    AnyPrivateColorToken,
    FontFamilies,
    TextGroup,
    TextVariant,
    Theme,
    UtilityColor,
} from '@gravity-ui/uikit-themer';
import {generatePrivateColorsForBaseColors} from '@gravity-ui/uikit-themer/dist/utils';
import capitalize from 'lodash/capitalize';
import cloneDeep from 'lodash/cloneDeep';
import kebabCase from 'lodash/kebabCase';
import lowerCase from 'lodash/lowerCase';

import {
    BrandPreset,
    DEFAULT_NEW_COLOR_TITLE,
    DEFAULT_PALETTE_TOKENS,
    RADIUS_PRESETS,
} from './constants';
import type {Palette, PaletteTokens, ThemeCreatorState} from './types';
import {RadiusPresetName, TypographyOptions} from './types';
import {DefaultFontFamily, defaultTypographyPreset} from './typography/constants';
import {createFontLinkImport} from './typography/utils';

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
    fontType: DefaultFontFamily | string;
    fontWebsite?: string;
    customType?: string;
    value?: {
        title?: string;
        mainFont?: string;
        fallbackFonts?: string[];
        link?: string;
    };
};

export function updateFontFamilyInTheme(
    themeState: ThemeCreatorState,
    {fontType, value, customType, fontWebsite}: UpdateFontFamilyParams,
): ThemeCreatorState {
    const previousGravityFontFamilySettings = themeState.gravityTheme.typography.fontFamilies;

    const newGravityFontFamilySettings: FontFamilies = {
        ...previousGravityFontFamilySettings,
        [fontType]: {
            ...previousGravityFontFamilySettings[fontType],
            mainFont:
                value?.mainFont ?? previousGravityFontFamilySettings[fontType]?.mainFont ?? '',
            fallbackFonts:
                value?.fallbackFonts ??
                previousGravityFontFamilySettings[fontType]?.fallbackFonts ??
                [],
        },
    };

    const previousFontFamilySettings = themeState.typography.fontFamilies;

    const newFontFamilySettings = {
        ...previousFontFamilySettings,
        [fontType]: {
            ...previousFontFamilySettings[fontType],
            title: value?.title ?? previousFontFamilySettings[fontType].title,
            customType: customType ?? previousFontFamilySettings[fontType].customType,
            fontWebsite,
            link: value?.link ?? previousFontFamilySettings[fontType].link,
        },
    };

    return {
        ...themeState,
        gravityTheme: {
            ...themeState.gravityTheme,
            typography: {
                ...themeState.gravityTheme.typography,
                fontFamilies: newGravityFontFamilySettings,
            },
        },
        typography: {
            ...themeState.typography,
            fontFamilies: newFontFamilySettings,
        },
    };
}

export type AddFontFamilyTypeParams = {
    title: string;
    customType: string;
};

export function addFontFamilyTypeInTheme(
    themeState: ThemeCreatorState,
    {title, customType}: AddFontFamilyTypeParams,
): ThemeCreatorState {
    const {gravityTheme} = themeState;

    const typography = cloneDeep(gravityTheme.typography);

    const customFontPrefix = 'custom-font-';

    const countCustomFonts = Object.keys(gravityTheme.typography.fontFamilies).filter((name) =>
        name.startsWith(customFontPrefix),
    ).length;

    const newFontKey = `${customFontPrefix}${countCustomFonts + 1}`;

    typography.fontFamilies[newFontKey] = {
        mainFont: '',
        fallbackFonts: [],
    };

    const newFontFamilySettings = cloneDeep(themeState.typography.fontFamilies);
    newFontFamilySettings[newFontKey] = {
        title,
        link: '',
        customType,
        fontWebsite: '',
    };

    return {
        ...themeState,
        typography: {
            ...themeState.typography,
            fontFamilies: newFontFamilySettings,
        },
        gravityTheme: {
            ...gravityTheme,
            typography,
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
    const {fontFamilies} = themeState.typography;

    const newFontFamilies = {
        ...fontFamilies,
        [familyType]: {
            ...fontFamilies[familyType],
            title,
        },
    };

    return {
        ...themeState,
        typography: {
            ...themeState.typography,
            fontFamilies: newFontFamilies,
        },
    };
}

export function removeFontFamilyTypeFromTheme(
    themeState: ThemeCreatorState,
    {fontType}: {fontType: string},
): ThemeCreatorState {
    const newTypography = cloneDeep(themeState.gravityTheme.typography);
    delete newTypography.fontFamilies[fontType];

    // Reset selected font to default
    Object.entries(newTypography.groups).forEach(([group, settings]) => {
        if (settings['font-family'] === fontType) {
            newTypography.groups[group as TextGroup]['font-family'] =
                DEFAULT_THEME.typography.groups[group as TextGroup]['font-family'];
        }
    });

    const newFontFamilies = cloneDeep(themeState.typography.fontFamilies);
    delete newFontFamilies[fontType];

    return {
        ...themeState,
        typography: {
            ...themeState.typography,
            fontFamilies: newFontFamilies,
        },
        gravityTheme: {
            ...themeState.gravityTheme,
            typography: newTypography,
        },
    };
}

export type UpdateAdvancedTypographySettingsParams = {
    key: TextGroup;
    fontWeight?: number;
    selectedFontFamilyType?: string;
    sizeKey?: TextVariant;
    fontSize?: string;
    lineHeight?: string;
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
    const {groups, variants} = themeState.gravityTheme.typography;

    const newGroups = {...groups};
    const newVariants = {...variants};

    if (key) {
        newGroups[key]['font-family'] = selectedFontFamilyType ?? newGroups[key]['font-family'];
        newGroups[key]['font-weight'] = fontWeight ?? newGroups[key]['font-weight'];
    }

    if (sizeKey) {
        newVariants[sizeKey]['font-size'] = fontSize ?? newVariants[sizeKey]['font-size'];
        newVariants[sizeKey]['line-height'] = lineHeight ?? newVariants[sizeKey]['line-height'];
    }

    return {
        ...themeState,
        gravityTheme: {
            ...themeState.gravityTheme,
            typography: {
                ...themeState.gravityTheme.typography,
                variants: newVariants,
                groups: newGroups,
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

export const createFontImportsForExport = (fontFamily: TypographyOptions['fontFamilies']) => {
    let cssString = '';

    Object.entries(fontFamily).forEach(([, value]) => {
        if (value.link) {
            cssString += `${createFontLinkImport(value.link)}\n`;
        }
    });

    return cssString;
};
