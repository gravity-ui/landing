import {DEFAULT_PALETTE, DEFAULT_THEME} from './constants';
import {
    createBorderRadiusClassesForCards,
    createBorderRadiusCssVariable,
    createPrivateColorCssVariable,
    createPrivateColorCssVariableFromToken,
    createPrivateColorToken,
    createUtilityColorCssVariable,
    isPrivateColorToken,
} from './themeCreatorUtils';
import type {ColorOption, ThemeCreatorState, ThemeVariant} from './types';
import {RadiusPresetName} from './types';

const SCSS_TEMPLATE = `
@use '@gravity-ui/uikit/styles/themes';

.g-root {
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

        // Don't export radiuses that are equals to default
        if (!ignoreDefaultValues || themeState.borders.preset !== RadiusPresetName.Regular) {
            Object.entries(themeState.borders.values).forEach(([radiusName, radiusValue]) => {
                if (radiusValue) {
                    cssVariables += `${createBorderRadiusCssVariable(
                        radiusName,
                    )}: ${radiusValue}px ${forPreview ? ' !important' : ''};\n`;
                }
            });
            cssVariables += createBorderRadiusClassesForCards(themeState.borders.values);
        }

        return cssVariables.trim();
    };

    return {
        light: prepareThemeVariables('light'),
        dark: prepareThemeVariables('dark'),
    };
}

type ExportThemeForDialogParams = Pick<ExportThemeParams, 'themeState' | 'format'>;

export function exportThemeForDialog({themeState, format = 'scss'}: ExportThemeForDialogParams) {
    if (format === 'json') {
        return 'not implemented';
    }

    const {light, dark} = exportTheme({themeState, format, forPreview: false});

    return SCSS_TEMPLATE.replace(
        '%LIGHT_THEME_VARIABLES%',
        light.replaceAll('\n', '\n'.padEnd(9)),
    ).replace('%DARK_THEME_VARIABLES%', dark.replaceAll('\n', '\n'.padEnd(9)));
}
