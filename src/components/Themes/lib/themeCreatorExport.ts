import {generateCSS, generateJSON} from '@gravity-ui/uikit-themer';

import {createFontImportsForExport} from './themeCreatorUtils';
import type {ThemeCreatorState} from './types';

export const APPLY_THEME_TEMPLATE = {
    en: `
        Create styles.css file with the styles created in the Themer (from the section below) and import it after the default UIKit styles.
        
        // Import default UIKit styles
        import '@gravity-ui/uikit/styles/styles.css';

        // Styles from the Themer
        import './styles.css';
    `,
    ru: `
        Создайте файл styles.css со стилями, созданными в Темизаторе (из секции ниже), и импортируйте его после стилей UIKit по умолчанию.

        // Импорт стилей UIKit по умолчанию
        import '@gravity-ui/uikit/styles/styles.css';

        // Стили из Темизатора
        import './styles.css';
    `,
};

export type ExportFormat = 'css' | 'json';

type ExportThemeParams = {
    themeState: ThemeCreatorState;
    format?: ExportFormat;
    ignoreDefaultValues?: boolean;
    forPreview?: boolean;
    customRootClassName?: string;
};

export function exportTheme({
    themeState,
    format = 'css',
    ignoreDefaultValues = true,
    forPreview = true,
    customRootClassName,
}: ExportThemeParams) {
    if (format === 'json') {
        const json = generateJSON({
            theme: themeState.gravityTheme,
            ignoreDefaultValues,
            forPreview,
        });
        return JSON.stringify(json, null, 2);
    }

    let css = generateCSS({
        theme: themeState.gravityTheme,
        ignoreDefaultValues,
        forPreview,
    });

    if (customRootClassName) {
        css = css
            .replace('.g-root {', `.g-root.${customRootClassName} {`)
            .replace('.g-root_theme_dark', `.g-root_theme_dark.${customRootClassName}_theme_dark`)
            .replace(
                '.g-root_theme_light',
                `.g-root_theme_light.${customRootClassName}_theme_light`,
            );
    }

    const fontImports = createFontImportsForExport(themeState.typography.fontFamilies);

    return `${fontImports}\n\n${css}`;
}

type ExportThemeForDialogParams = Pick<ExportThemeParams, 'themeState' | 'format'>;

export function exportThemeForDialog({themeState, format = 'css'}: ExportThemeForDialogParams) {
    return exportTheme({
        themeState,
        format,
        forPreview: false,
    });
}
