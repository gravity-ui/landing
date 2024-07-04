import {DEFAULT_PALETTE, DEFAULT_THEME} from './constants';
import {
    createBorderRadiusPresetForExport,
    createPrivateColorCssVariable,
    createPrivateColorCssVariableFromToken,
    createPrivateColorToken,
    createUtilityColorCssVariable,
    isPrivateColorToken,
} from './themeCreatorUtils';
import type {ColorOption, ThemeCreatorState, ThemeVariant} from './types';

const COMMON_VARIABLES_TEMPLATE_NAME = '%COMMON_VARIABLES%';

const SCSS_TEMPLATE = `
@use '@gravity-ui/uikit/styles/themes';

.g-root {
    ${COMMON_VARIABLES_TEMPLATE_NAME}
    &_theme_light {
        @include themes.g-theme-light;

        %LIGHT_THEME_VARIABLES%
    }

    &_theme_dark {
        @include themes.g-theme-dark;

        %DARK_THEME_VARIABLES%
    }
}
`.trim();

export type ExportFormat = 'scss' | 'json';

type ExportThemeParams = {
    themeState: ThemeCreatorState;
    format?: ExportFormat;
    ignoreDefaultValues?: boolean;
    forPreview?: boolean;
};

export function exportTheme({
    themeState,
    format = 'scss',
    ignoreDefaultValues = true,
    forPreview = true,
}: ExportThemeParams) {
    if (format === 'json') {
        throw new Error('Not implemented');
    }

    const {paletteTokens, palette} = themeState;

    const prepareThemeVariables = (themeVariant: ThemeVariant) => {
        let cssVariables = '';
        const privateColors: Record<string, string> = {};

        themeState.tokens.forEach((token) => {
            // Dont export colors that are equals to default
            if (
                ignoreDefaultValues &&
                DEFAULT_PALETTE[themeVariant][token] === themeState.palette[themeVariant][token]
            ) {
                return;
            }

            if (paletteTokens[token]?.privateColors[themeVariant]) {
                Object.entries(paletteTokens[token].privateColors[themeVariant]!).forEach(
                    ([privateColorCode, color]) => {
                        privateColors[createPrivateColorToken(token, privateColorCode)] = color;
                        cssVariables += `${createPrivateColorCssVariable(
                            token,
                            privateColorCode,
                        )}: ${color}${forPreview ? ' !important' : ''};\n`;
                    },
                );
                cssVariables += '\n';
            }
        });

        cssVariables += '\n';

        cssVariables += `${createUtilityColorCssVariable('base-brand')}: ${
            palette[themeVariant].brand
        }${forPreview ? ' !important' : ''};\n`;

        Object.entries(themeState.colors[themeVariant]).forEach(
            ([colorName, colorOrPrivateToken]) => {
                // Dont export colors that are equals to default
                if (
                    ignoreDefaultValues &&
                    DEFAULT_THEME.colors[themeVariant][colorName as ColorOption] ===
                        colorOrPrivateToken
                ) {
                    return;
                }

                const color = isPrivateColorToken(colorOrPrivateToken)
                    ? `var(${createPrivateColorCssVariableFromToken(colorOrPrivateToken)})`
                    : colorOrPrivateToken;

                cssVariables += `${createUtilityColorCssVariable(colorName)}: ${color}${
                    forPreview ? ' !important' : ''
                };\n`;
            },
        );

        if (forPreview) {
            cssVariables += createBorderRadiusPresetForExport({
                borders: themeState.borders,
                forPreview,
                ignoreDefaultValues,
            });
        }

        return cssVariables.trim();
    };

    return {
        common: createBorderRadiusPresetForExport({
            borders: themeState.borders,
            forPreview,
            ignoreDefaultValues,
        }),
        light: prepareThemeVariables('light'),
        dark: prepareThemeVariables('dark'),
    };
}

type ExportThemeForDialogParams = Pick<ExportThemeParams, 'themeState' | 'format'>;

export function exportThemeForDialog({themeState, format = 'scss'}: ExportThemeForDialogParams) {
    if (format === 'json') {
        return 'not implemented';
    }

    const {common, light, dark} = exportTheme({themeState, format, forPreview: false});

    return SCSS_TEMPLATE.replace(
        COMMON_VARIABLES_TEMPLATE_NAME,
        common.replaceAll('\n', '\n'.padEnd(5)),
    )
        .replace('%LIGHT_THEME_VARIABLES%', light.replaceAll('\n', '\n'.padEnd(9)))
        .replace('%DARK_THEME_VARIABLES%', dark.replaceAll('\n', '\n'.padEnd(9)));
}
