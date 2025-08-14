import {parseCSS, parseJSON} from '@gravity-ui/uikit-themer';
import React from 'react';

import {useThemeCreatorMethods} from '../hooks';

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
};

export function useImportTheme({onImportError}: UseImportThemeParams) {
    const {importTheme} = useThemeCreatorMethods();

    const importThemeFromUserInput = React.useCallback(
        (userInput: string) => {
            let strategyIndex = 0;
            let isSuccess = false;

            while (!isSuccess && IMPORT_STRATEGIES[strategyIndex]) {
                try {
                    const theme = IMPORT_STRATEGIES[strategyIndex](userInput);
                    importTheme(theme);
                    isSuccess = true;
                } catch {
                    strategyIndex++;
                }
            }

            if (!isSuccess) {
                onImportError?.();
            }
        },
        [onImportError],
    );

    return {importThemeFromUserInput};
}
