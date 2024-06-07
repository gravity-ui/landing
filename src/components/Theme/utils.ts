import kebabCase from 'lodash/kebabCase';
import lowerCase from 'lodash/lowerCase';

import type {
    PalleteTokens,
    PrivateColors,
    ThemeOptions,
    ThemeVariant,
    ThemeWizardState,
} from './types';

function createColorToken(title: string) {
    // TODO: Может стоит добавить slugify для поддержки ru?
    return kebabCase(title);
}

function createTitleFromToken(token: string) {
    return lowerCase(token);
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
        solid: solidColor,
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

function createPalleteTokens(pallette: ThemeOptions['pallette']): PalleteTokens {
    const tokens = Object.keys(pallette.light);

    return tokens.reduce<PalleteTokens>(
        (acc, token) => ({
            ...acc,
            [token]: {
                title: createTitleFromToken(token),
                privateColors: {
                    light: pallette.light[token]
                        ? createPrivateColors(pallette.light[token])
                        : undefined,
                    dark: pallette.dark[token]
                        ? createPrivateColors(pallette.dark[token])
                        : undefined,
                },
            },
        }),
        {},
    );
}

export function updateColor(
    themeState: ThemeWizardState,
    params: {
        title: string;
        theme: ThemeVariant;
        value: string;
    },
): ThemeWizardState {
    const newThemeState = {...themeState};
    const token = createColorToken(params.title);

    if (params.theme === 'light') {
        if (!newThemeState.pallette.light[token]) {
            newThemeState.pallette.light[token] = '';
        }

        newThemeState.pallette.light[token] = params.value;
    }

    if (params.theme === 'dark') {
        if (!newThemeState.pallette.dark[token]) {
            newThemeState.pallette.dark[token] = '';
        }

        newThemeState.pallette.dark[token] = params.value;
    }

    const privateColors = createPrivateColors(params.value);

    newThemeState.palletteTokens[token] = {
        ...newThemeState.palletteTokens[token],
        title: params.title,
        privateColors: {
            light:
                params.theme === 'light'
                    ? privateColors
                    : newThemeState.palletteTokens[token].privateColors?.light,
            dark:
                params.theme === 'dark'
                    ? privateColors
                    : newThemeState.palletteTokens[token].privateColors?.dark,
        },
    };

    return themeState;
}

export function addColor(
    themeState: ThemeWizardState,
    params: {
        title: string;
        colors?: Partial<Record<ThemeVariant, string>>;
    },
): ThemeWizardState {
    const newThemeState = {...themeState};
    const token = createColorToken(params.title);

    if (!themeState.pallette.dark[token]) {
        newThemeState.pallette.dark[token] = '';
    }

    if (!themeState.pallette.light[token]) {
        newThemeState.pallette.light[token] = '';
    }

    if (params.colors?.dark) {
        newThemeState.pallette.dark[token] = params.colors.dark;
    }

    if (params.colors?.light) {
        newThemeState.pallette.light[token] = params.colors.light;
    }

    newThemeState.palletteTokens[token] = {
        ...newThemeState.palletteTokens[token],
        title: params.title,
        privateColors: {
            light: params.colors?.light ? createPrivateColors(params.colors.light) : undefined,
            dark: params.colors?.dark ? createPrivateColors(params.colors.dark) : undefined,
        },
    };

    return themeState;
}

export function initThemeWizard(theme: ThemeOptions): ThemeWizardState {
    return {
        ...theme,
        palletteTokens: createPalleteTokens(theme.pallette),
    };
}
