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

const IMPORT_STRATEGIES = [getThemeFromJson, getThemeFromCss];

type UseImportThemeParams = {
    onImportError?: () => void;
    onImportSuccess?: () => void;
};

export function useImportTheme({onImportError, onImportSuccess}: UseImportThemeParams) {
    const {importTheme} = useThemeCreatorMethods();

    const importThemeFromUserInput = React.useCallback(
        (userInput: string) => {
            let strategyIndex = 0;
            let isSuccess = false;

            while (!isSuccess && IMPORT_STRATEGIES[strategyIndex]) {
                try {
                    let theme = IMPORT_STRATEGIES[strategyIndex](userInput);

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
                    isSuccess = true;
                } catch {
                    strategyIndex++;
                }
            }

            if (!isSuccess) {
                onImportError?.();
                return;
            }

            onImportSuccess?.();
        },
        [onImportError, onImportSuccess, importTheme],
    );

    return {importThemeFromUserInput};
}
