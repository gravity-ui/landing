import {parseCSS, parseJSON, updateBaseColor} from '@gravity-ui/uikit-themer';
import React from 'react';

import {useThemeCreatorMethods} from '../hooks';

import {DEFAULT_BRAND_COLORS} from './constants';

const getThemeFromJson = (userString: string) => {
    const parsedUserInput = JSON.parse(userString);
    return parseJSON(parsedUserInput);
};

const getThemeFromCss = (userString: string) => {
    return parseCSS(userString);
};

const isJSON = (userInput: string) => {
    try {
        JSON.parse(userInput);
        return true;
    } catch {
        return false;
    }
};

type UseImportThemeParams = {
    onImportError?: (errorMessage?: string) => void;
    onImportSuccess?: () => void;
};

export function useImportTheme({onImportError, onImportSuccess}: UseImportThemeParams) {
    const {importTheme} = useThemeCreatorMethods();

    const importThemeFromUserInput = React.useCallback(
        (userInput: string) => {
            const importStrategy = isJSON(userInput) ? getThemeFromJson : getThemeFromCss;

            try {
                let theme = importStrategy(userInput);

                if (!theme.baseColors.brand) {
                    theme = updateBaseColor({
                        theme,
                        colorToken: 'brand',
                        value: {
                            light: DEFAULT_BRAND_COLORS[0],
                            dark: DEFAULT_BRAND_COLORS[0],
                        },
                    });
                }

                importTheme(theme);
            } catch (error) {
                onImportError?.(error instanceof Error ? error.message : undefined);
                return;
            }

            onImportSuccess?.();
        },
        [onImportError, onImportSuccess, importTheme],
    );

    return {importThemeFromUserInput};
}
