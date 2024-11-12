import {DEFAULT_PALETTE, DEFAULT_THEME} from './constants';
import {
    createBorderRadiusPresetForExport,
    createFontImportsForExport,
    createPrivateColorCssVariable,
    createPrivateColorCssVariableFromToken,
    createPrivateColorToken,
    createTypographyPresetForExport,
    createUtilityColorCssVariable,
    isPrivateColorToken,
} from './themeCreatorUtils';
import type {ThemeCreatorState, ThemeVariant} from './types';

const COMMON_VARIABLES_TEMPLATE_NAME = '%COMMON_VARIABLES%';
const LIGHT_THEME_VARIABLES_TEMPLATE_NAME = '%LIGHT_THEME_VARIABLES%';
const DARK_THEME_VARIABLES_TEMPLATE_NAME = '%DARK_THEME_VARIABLES%';
const FONTS_TEMPLATE_NAME = '%IMPORT_FONTS%';

const SCSS_TEMPLATE = `
${FONTS_TEMPLATE_NAME}

.g-root_theme_light {
    ${COMMON_VARIABLES_TEMPLATE_NAME}

    ${LIGHT_THEME_VARIABLES_TEMPLATE_NAME}
}

.g-root_theme_dark {
    ${COMMON_VARIABLES_TEMPLATE_NAME}

    ${DARK_THEME_VARIABLES_TEMPLATE_NAME}
}
`.trim();

export const APPLY_THEME_TEMPLATE = `
    Create styles.css file with the styles created in the Themer (from the section below) and import it after the default UIKit styles.
    
    // Import default UIKit styles
    import '@gravity-ui/uikit/styles/styles.css';

    // Styles from the Themer
    import './styles.css';
`;

export type ExportFormat = 'css' | 'json';

type ExportThemeParams = {
    themeState: ThemeCreatorState;
    format?: ExportFormat;
    ignoreDefaultValues?: boolean;
    forPreview?: boolean;
};

const isBackgroundColorChanged = (themeState: ThemeCreatorState) => {
    return (
        DEFAULT_THEME.colors.dark['base-background'] !==
            themeState.colors.dark['base-background'] ||
        DEFAULT_THEME.colors.light['base-background'] !== themeState.colors.light['base-background']
    );
};

export function exportTheme({
    themeState,
    format = 'css',
    ignoreDefaultValues = true,
    forPreview = true,
}: ExportThemeParams) {
    if (format === 'json') {
        throw new Error('Not implemented');
    }

    const {paletteTokens, palette} = themeState;
    const backgroundColorChanged = isBackgroundColorChanged(themeState);

    const prepareThemeVariables = (themeVariant: ThemeVariant) => {
        let cssVariables = '';
        const privateColors: Record<string, string> = {};

        themeState.tokens.forEach((token) => {
            // Dont export colors that are equals to default (except brand color)
            // Private colors recalculate when background color changes
            const valueEqualsToDefault =
                DEFAULT_PALETTE[themeVariant][token] === themeState.palette[themeVariant][token] &&
                token !== 'brand' &&
                !backgroundColorChanged;

            if (valueEqualsToDefault && ignoreDefaultValues) {
                return;
            }

            const needExportColor =
                backgroundColorChanged || token === 'brand' || !valueEqualsToDefault;

            if (!needExportColor) {
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

            cssVariables += createTypographyPresetForExport({
                typography: themeState.typography,
                ignoreDefaultValues,
                forPreview,
            });
        }

        return cssVariables.trim();
    };

    const prepareCommonThemeVariables = () => {
        const borderRadiusVariabels = createBorderRadiusPresetForExport({
            borders: themeState.borders,
            forPreview,
            ignoreDefaultValues,
        });

        const typographyVariables = createTypographyPresetForExport({
            typography: themeState.typography,
            ignoreDefaultValues,
            forPreview,
        });

        return borderRadiusVariabels + '\n' + typographyVariables;
    };

    return {
        fontImports: createFontImportsForExport(themeState.typography.baseSetting.fontFamilies),
        common: prepareCommonThemeVariables(),
        light: prepareThemeVariables('light'),
        dark: prepareThemeVariables('dark'),
    };
}

type ExportThemeForDialogParams = Pick<ExportThemeParams, 'themeState' | 'format'>;

export function exportThemeForDialog({themeState, format = 'css'}: ExportThemeForDialogParams) {
    if (format === 'json') {
        return 'not implemented';
    }

    const {common, light, dark, fontImports} = exportTheme({
        themeState,
        format,
        forPreview: false,
    });

    return SCSS_TEMPLATE.replace(FONTS_TEMPLATE_NAME, fontImports)
        .replaceAll(COMMON_VARIABLES_TEMPLATE_NAME, common.replaceAll('\n', '\n'.padEnd(5)))
        .replace(LIGHT_THEME_VARIABLES_TEMPLATE_NAME, light.replaceAll('\n', '\n'.padEnd(9)))
        .replace(DARK_THEME_VARIABLES_TEMPLATE_NAME, dark.replaceAll('\n', '\n'.padEnd(9)));
}
