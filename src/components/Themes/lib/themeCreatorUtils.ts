import capitalize from 'lodash/capitalize';
import cloneDeep from 'lodash/cloneDeep';
import kebabCase from 'lodash/kebabCase';
import lowerCase from 'lodash/lowerCase';

import {
    DEFAULT_NEW_COLOR_TITLE,
    DEFAULT_PALETTE_TOKENS,
    RADIUS_PRESETS,
    THEME_COLOR_VARIABLE_PREFIX,
} from './constants';
import {generatePrivateColors} from './privateColors';
import type {
    ColorsOptions,
    Palette,
    PaletteTokens,
    PrivateColors,
    RadiusValue,
    ThemeCreatorState,
    ThemeOptions,
    ThemeVariant,
} from './types';
import {RadiusPresetName} from './types';

function createColorToken(title: string) {
    return kebabCase(title);
}

function createTitleFromToken(token: string) {
    return capitalize(lowerCase(token));
}

export function createPrivateColorToken(mainColorToken: string, privateColorCode: string) {
    return `private.${mainColorToken}.${privateColorCode}`;
}

export function isPrivateColorToken(privateColorToken?: string) {
    if (!privateColorToken) {
        return false;
    }

    const parts = privateColorToken.split('.');

    if (parts.length !== 3 || parts[0] !== 'private') {
        return false;
    }

    return true;
}

export function parsePrivateColorToken(privateColorToken: string) {
    const parts = privateColorToken.split('.');

    if (parts.length !== 3 || parts[0] !== 'private') {
        return undefined;
    }

    return {
        mainColorToken: parts[1],
        privateColorCode: parts[2],
    };
}

export function createPrivateColorCssVariable(mainColorToken: string, privateColorCode: string) {
    return `${THEME_COLOR_VARIABLE_PREFIX}-private-${mainColorToken}-${privateColorCode}`;
}

export function createPrivateColorCssVariableFromToken(privateColorToken: string) {
    const result = parsePrivateColorToken(privateColorToken);

    if (result) {
        return createPrivateColorCssVariable(result.mainColorToken, result.privateColorCode);
    }

    return '';
}

export function createUtilityColorCssVariable(colorName: string) {
    return `${THEME_COLOR_VARIABLE_PREFIX}-${colorName}`;
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

function createPrivateColors({
    themeVariant,
    colorToken,
    colorValue,
    theme,
}: {
    colorToken: string;
    colorValue: string;
    themeVariant: ThemeVariant;
    theme: ThemeOptions;
}): PrivateColors {
    return generatePrivateColors({
        theme: themeVariant,
        colorToken,
        colorValue,
        lightBg:
            themeVariant === 'light'
                ? theme.colors.light['base-background']
                : theme.colors.dark['base-background'],
        darkBg:
            themeVariant === 'dark'
                ? theme.colors.dark['base-background']
                : theme.colors.light['base-background'],
    });
}

function createPalleteTokens(theme: ThemeOptions): PaletteTokens {
    const {palette} = theme;
    const tokens = Object.keys(palette.light);

    return tokens.reduce<PaletteTokens>(
        (acc, token) => ({
            ...acc,
            [token]: {
                title: createTitleFromToken(token),
                privateColors: {
                    light: palette.light[token]
                        ? createPrivateColors({
                              colorToken: token,
                              colorValue: palette.light[token],
                              theme,
                              themeVariant: 'light',
                          })
                        : undefined,
                    dark: palette.dark[token]
                        ? createPrivateColors({
                              colorToken: token,
                              colorValue: palette.dark[token],
                              theme,
                              themeVariant: 'dark',
                          })
                        : undefined,
                },
            },
        }),
        {},
    );
}

export type UpdateColorInThemeParams = {
    /** The title of the color to update. */
    title: string;
    /** The theme variant to update. */
    theme: ThemeVariant;
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
    const newThemeState = {...themeState};
    const token = createColorToken(params.title);

    if (params.theme === 'light') {
        if (!newThemeState.palette.light[token]) {
            newThemeState.palette.light[token] = '';
        }

        newThemeState.palette.light[token] = params.value;
    }

    if (params.theme === 'dark') {
        if (!newThemeState.palette.dark[token]) {
            newThemeState.palette.dark[token] = '';
        }

        newThemeState.palette.dark[token] = params.value;
    }

    const privateColors = createPrivateColors({
        colorToken: token,
        colorValue: params.value,
        theme: newThemeState,
        themeVariant: params.theme,
    });

    newThemeState.paletteTokens[token] = {
        ...newThemeState.paletteTokens[token],
        title: params.title,
        privateColors: {
            light:
                params.theme === 'light'
                    ? privateColors
                    : newThemeState.paletteTokens[token]?.privateColors?.light,
            dark:
                params.theme === 'dark'
                    ? privateColors
                    : newThemeState.paletteTokens[token]?.privateColors?.dark,
        },
    };

    const isNewToken = !themeState.paletteTokens[token];
    if (isNewToken) {
        newThemeState.tokens.push(token);
    }

    return newThemeState;
}

export type AddColorToThemeParams =
    | {
          title?: string;
          colors?: Partial<Record<ThemeVariant, string>>;
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
    const newThemeState = {...themeState};
    const title = params?.title ?? createNewColorTitle(themeState.paletteTokens);
    const token = createColorToken(title);

    if (!themeState.palette.dark[token]) {
        newThemeState.palette.dark = {
            ...newThemeState.palette.dark,
            [token]: '',
        };
    }

    if (!themeState.palette.light[token]) {
        newThemeState.palette.light = {
            ...newThemeState.palette.light,
            [token]: '',
        };
    }

    if (params?.colors?.dark) {
        newThemeState.palette.dark = {
            ...newThemeState.palette.dark,
            [token]: params.colors.dark,
        };
    }

    if (params?.colors?.light) {
        newThemeState.palette.light = {
            ...newThemeState.palette.light,
            [token]: params.colors.light,
        };
    }

    newThemeState.paletteTokens = {
        ...newThemeState.paletteTokens,
        [token]: {
            ...newThemeState.paletteTokens[token],
            title,
            privateColors: {
                light: params?.colors?.light
                    ? createPrivateColors({
                          colorToken: token,
                          colorValue: params.colors.light,
                          theme: newThemeState,
                          themeVariant: 'light',
                      })
                    : undefined,
                dark: params?.colors?.dark
                    ? createPrivateColors({
                          colorToken: token,
                          colorValue: params.colors.dark,
                          theme: newThemeState,
                          themeVariant: 'dark',
                      })
                    : undefined,
            },
            isCustom: true,
        },
    };

    newThemeState.tokens = [...newThemeState.tokens, token];

    return newThemeState;
}

export function removeColorFromTheme(
    themeState: ThemeCreatorState,
    colorTitle: string,
): ThemeCreatorState {
    console.log('call remove color', colorTitle);
    const newThemeState = {...themeState};
    const token = createColorToken(colorTitle);

    delete newThemeState.palette.dark[token];
    delete newThemeState.palette.light[token];
    delete newThemeState.paletteTokens[token];

    newThemeState.tokens = newThemeState.tokens.filter((t) => t !== token);

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
        newThemeState.palette.dark[newToken] = newThemeState.palette.dark[oldToken];
        newThemeState.palette.light[newToken] = newThemeState.palette.dark[oldToken];
    }

    newThemeState.tokens = newThemeState.tokens.map((token) =>
        token === oldToken ? newToken : token,
    );

    delete newThemeState.palette.dark[oldToken];
    delete newThemeState.palette.light[oldToken];
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
 * @param {ThemeVariant} params.themeVariant - The theme variant to filter private colors (light, dark).
 * @returns {ThemeColorOption[]} The generated theme color options.
 */
export function getThemeColorOptions({
    themeState,
    themeVariant,
}: {
    themeState: ThemeCreatorState;
    themeVariant: ThemeVariant;
}) {
    const {tokens, paletteTokens, palette} = themeState;

    return tokens.reduce<ThemeColorOption[]>((acc, token) => {
        if (paletteTokens[token]?.privateColors[themeVariant]) {
            return [
                ...acc,
                {
                    token,
                    color: palette[themeVariant][token],
                    title: paletteTokens[token].title,
                    privateColors: Object.entries(
                        paletteTokens[token].privateColors[themeVariant]!,
                    ).map(([privateColorCode, color]) => ({
                        token: createPrivateColorToken(token, privateColorCode),
                        title: createPrivateColorCssVariable(token, privateColorCode),
                        color,
                    })),
                },
            ];
        }

        return acc;
    }, []);
}

export type ChangeUtilityColorInThemeParams = {
    themeVariant: ThemeVariant;
    name: keyof ColorsOptions;
    value: string;
};

export function changeUtilityColorInTheme(
    themeState: ThemeCreatorState,
    {themeVariant, name, value}: ChangeUtilityColorInThemeParams,
): ThemeCreatorState {
    const newState = {...themeState};
    newState.colors[themeVariant][name] = value;

    if (name === 'base-background') {
        newState.paletteTokens = createPalleteTokens(newState);
    }

    return newState;
}

export function getThemePalette(theme: ThemeCreatorState): Palette {
    return theme.tokens.map((token) => {
        return {
            title: theme.paletteTokens[token]?.title || '',
            colors: {
                light: theme.palette.light[token],
                dark: theme.palette.dark[token],
            },
            isCustom: isManuallyCreatedToken(token),
        };
    });
}

export function initThemeCreator(inputTheme: ThemeOptions): ThemeCreatorState {
    const theme = cloneDeep(inputTheme);
    const paletteTokens = createPalleteTokens(theme);

    return {
        ...theme,
        paletteTokens,
        tokens: Object.keys(paletteTokens),
    };
}

export type ChangeRadiusPresetInThemeParams = {
    radiusPresetName: RadiusPresetName;
};

export function changeRadiusPresetInTheme(
    themeState: ThemeCreatorState,
    {radiusPresetName}: ChangeRadiusPresetInThemeParams,
): ThemeCreatorState {
    const newBorderValue = {
        preset: radiusPresetName,
        values: {...RADIUS_PRESETS[radiusPresetName]},
    };

    return {...themeState, borders: newBorderValue};
}

export type UpdateCustomRadiusPresetInThemeParams = {radiusValue: Partial<RadiusValue>};

export function updateCustomRadiusPresetInTheme(
    themeState: ThemeCreatorState,
    {radiusValue}: UpdateCustomRadiusPresetInThemeParams,
): ThemeCreatorState {
    const previousRadiusValues = themeState.borders.values;
    const newCustomPresetValues = {
        preset: RadiusPresetName.Custom,
        values: {...previousRadiusValues, ...radiusValue},
    };

    return {...themeState, borders: newCustomPresetValues};
}
