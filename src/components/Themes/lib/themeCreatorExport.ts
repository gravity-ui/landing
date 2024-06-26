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
import {
    type ColorOption,
    RadiusPresetName,
    type ThemeCreatorState,
    type ThemeVariant,
} from './types';

type ExportType = 'scss' | 'json';

type ExportThemeParams = {
    themeState: ThemeCreatorState;
    exportType?: ExportType;
    ignoreDefaultValues?: boolean;
};

export function exportTheme({
    themeState,
    exportType = 'scss',
    ignoreDefaultValues = true,
}: ExportThemeParams) {
    if (exportType === 'json') {
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
                        )}: ${color} !important;\n`;
                    },
                );
                cssVariables += '\n';
            }
        });

        cssVariables += '\n';

        cssVariables += `${createUtilityColorCssVariable('base-brand')}: ${
            palette[themeVariant].brand
        } !important;\n`;

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

                cssVariables += `${createUtilityColorCssVariable(
                    colorName,
                )}: ${color} !important;\n`;
            },
        );

        // Don't export radiuses that are equals to default
        if (!ignoreDefaultValues || themeState.borders.preset !== RadiusPresetName.Regular) {
            Object.entries(themeState.borders.values).forEach(([radiusName, radiusValue]) => {
                if (radiusValue) {
                    cssVariables += `${createBorderRadiusCssVariable(
                        radiusName,
                    )}: ${radiusValue}px !important;\n`;
                }
            });
            cssVariables += createBorderRadiusClassesForCards(themeState.borders.values);
        }

        return cssVariables;
    };

    return {
        light: prepareThemeVariables('light'),
        dark: prepareThemeVariables('dark'),
    };
}
