import {DEFAULT_PALETTE, DEFAULT_THEME} from './constants';
import {
    createPrivateColorCssVariable,
    createPrivateColorCssVariableFromToken,
    createPrivateColorToken,
    createUtilityColorCssVariable,
    isPrivateColorToken,
} from './themeCreatorUtils';
import type {ColorOption, ThemeCreatorState, ThemeVariant} from './types';

type ExportType = 'scss' | 'json';

export function exportTheme(
    themeState: ThemeCreatorState,
    exportType: ExportType = 'scss',
): string {
    if (exportType === 'json') {
        throw new Error('Not implemented');
    }

    const {paletteTokens} = themeState;

    const prepareThemeVariables = (themeVariant: ThemeVariant) => {
        let cssVariables = '';
        const privateColors: Record<string, string> = {};

        themeState.tokens.forEach((token) => {
            // Dont export colors that are equals to default
            if (DEFAULT_PALETTE[themeVariant][token] === themeState.palette[themeVariant][token]) {
                return;
            }

            if (paletteTokens[token]?.privateColors[themeVariant]) {
                Object.entries(paletteTokens[token].privateColors[themeVariant]).forEach(
                    ([privateColorCode, color]) => {
                        privateColors[createPrivateColorToken(token, privateColorCode)] = color;
                        cssVariables += `${createPrivateColorCssVariable(
                            token,
                            privateColorCode,
                        )}: ${color};\n`;
                    },
                );
                cssVariables += '\n';
            }
        });

        cssVariables += '\n';

        Object.entries(themeState.colors[themeVariant]).forEach(
            ([colorName, colorOrPrivateToken]) => {
                // Dont export colors that are equals to default
                if (
                    DEFAULT_THEME.colors[themeVariant][colorName as ColorOption] ===
                    colorOrPrivateToken
                ) {
                    return;
                }

                const color = isPrivateColorToken(colorOrPrivateToken)
                    ? `var(${createPrivateColorCssVariableFromToken(colorOrPrivateToken)})`
                    : colorOrPrivateToken;

                cssVariables += `${createUtilityColorCssVariable(colorName)}: ${color};\n`;
            },
        );

        return cssVariables;
    };

    let result = '';
    result += '// Light\n' + prepareThemeVariables('light');
    result += '\n// Dark\n' + prepareThemeVariables('dark');
    return result;
}
