import capitalize from 'lodash/capitalize';
import kebabCase from 'lodash/kebabCase';
import lowerCase from 'lodash/lowerCase';

import {
    DEFAULT_NEW_COLOR_TITLE,
    DEFAULT_PALETTE_TOKENS,
    THEME_COLOR_VARIABLE_PREFIX,
} from './constants';
import type {
    Palette,
    PaletteTokens,
    PrivateColors,
    ThemeOptions,
    ThemeVariant,
    ThemeWizardState,
} from './types';

function createColorToken(title: string) {
    return kebabCase(title);
}

function createTitleFromToken(token: string) {
    return capitalize(lowerCase(token));
}

function createPrivateColorToken(mainColorToken: string, privateColorCode: string) {
    return `private.${mainColorToken}.${privateColorCode}`;
}

function createPrivateColorTitle(mainColorToken: string, privateColorCode: string) {
    return `${THEME_COLOR_VARIABLE_PREFIX}-${mainColorToken}-${privateColorCode}`;
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

function createPrivateColors(solidColor: string): PrivateColors {
    return {
        50: '',
        100: '',
        150: '',
        200: '',
        250: '',
        300: '',
        350: '',
        400: '',
        450: '',
        500: '',
        550: solidColor,
        600: '',
        650: '',
        700: '',
        750: '',
        800: '',
        850: '',
        900: '',
        950: '',
        1000: '',
    };
}

function createPalleteTokens(palette: ThemeOptions['palette']): PaletteTokens {
    const tokens = Object.keys(palette.light);

    return tokens.reduce<PaletteTokens>(
        (acc, token) => ({
            ...acc,
            [token]: {
                title: createTitleFromToken(token),
                privateColors: {
                    light: palette.light[token]
                        ? createPrivateColors(palette.light[token])
                        : undefined,
                    dark: palette.dark[token]
                        ? createPrivateColors(palette.dark[token])
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
 * @param {ThemeWizardState} themeState - The current state of the theme.
 * @param {UpdateColorInThemeParams} params - The parameters for the color update.
 * @returns {ThemeWizardState} The updated theme state.
 */
export function updateColorInTheme(
    themeState: ThemeWizardState,
    params: UpdateColorInThemeParams,
): ThemeWizardState {
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

    const privateColors = createPrivateColors(params.value);

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
 * @param {ThemeWizardState} themeState - The current state of the theme.
 * @param {AddColorToThemeParams} params - The parameters of the adding color.
 * @returns {ThemeWizardState} The updated theme state with the new color added.
 */
export function addColorToTheme(
    themeState: ThemeWizardState,
    params: AddColorToThemeParams,
): ThemeWizardState {
    const newThemeState = {...themeState};
    const title = params?.title ?? createNewColorTitle(themeState.paletteTokens);
    const token = createColorToken(title);

    if (!themeState.palette.dark[token]) {
        newThemeState.palette.dark[token] = '';
    }

    if (!themeState.palette.light[token]) {
        newThemeState.palette.light[token] = '';
    }

    if (params?.colors?.dark) {
        newThemeState.palette.dark[token] = params.colors.dark;
    }

    if (params?.colors?.light) {
        newThemeState.palette.light[token] = params.colors.light;
    }

    newThemeState.paletteTokens[token] = {
        ...newThemeState.paletteTokens[token],
        title,
        privateColors: {
            light: params?.colors?.light ? createPrivateColors(params.colors.light) : undefined,
            dark: params?.colors?.dark ? createPrivateColors(params.colors.dark) : undefined,
        },
        isCustom: true,
    };

    return newThemeState;
}

export function removeColorFromTheme(
    themeState: ThemeWizardState,
    colorTitle: string,
): ThemeWizardState {
    const newThemeState = {...themeState};
    const token = createColorToken(colorTitle);

    delete newThemeState.palette.dark[token];
    delete newThemeState.palette.light[token];
    delete newThemeState.paletteTokens[token];

    return newThemeState;
}

export function renameColorInTheme(
    themeState: ThemeWizardState,
    oldTitle: string,
    newTitle: string,
): ThemeWizardState {
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

    delete newThemeState.palette.dark[oldToken];
    delete newThemeState.palette.light[oldToken];
    delete newThemeState.paletteTokens[oldToken];

    return newThemeState;
}

export type ThemeColorOption = {
    token: string;
    title: string;
    privateColors: {
        token: string;
        title: string;
        value: string;
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
    paletteTokens,
    themeVariant,
}: {
    paletteTokens: PaletteTokens;
    themeVariant: ThemeVariant;
}) {
    const colorTokens = Object.keys(paletteTokens);

    return colorTokens.reduce<ThemeColorOption[]>((acc, token) => {
        if (paletteTokens[token]?.privateColors[themeVariant]) {
            return [
                ...acc,
                {
                    token,
                    title: paletteTokens[token].title,
                    privateColors: Object.entries(
                        paletteTokens[token].privateColors[themeVariant],
                    ).map(([privateColorCode, value]) => ({
                        token: createPrivateColorToken(token, privateColorCode),
                        title: createPrivateColorTitle(token, privateColorCode),
                        value,
                    })),
                },
            ];
        }

        return acc;
    }, []);
}

export function getThemePalette(theme: ThemeWizardState): Palette {
    const colorTokens = Object.keys(theme.paletteTokens);

    return colorTokens.map((token) => {
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

export function initThemeWizard(theme: ThemeOptions): ThemeWizardState {
    return {
        ...theme,
        paletteTokens: createPalleteTokens(theme.palette),
    };
}
