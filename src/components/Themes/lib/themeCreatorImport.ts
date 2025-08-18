import {parseCSS, parseJSON} from '@gravity-ui/uikit-themer';
import React from 'react';

import {useThemeCreatorMethods} from '../hooks';

import {initThemeCreator} from './themeCreatorUtils';

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
    const {importThemeCreatorState} = useThemeCreatorMethods();

    const importThemeFromUserInput = React.useCallback(
        (userInput: string) => {
            let strategyIndex = 0;
            let isSuccess = false;

            while (!isSuccess && IMPORT_STRATEGIES[strategyIndex]) {
                try {
                    const theme = IMPORT_STRATEGIES[strategyIndex](userInput);
                    const themeCreatorState = initThemeCreator(theme);
                    importThemeCreatorState(themeCreatorState);
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
        [onImportError, onImportSuccess, importThemeCreatorState],
    );

    return {importThemeFromUserInput};
}
