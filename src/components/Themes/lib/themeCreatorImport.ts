import {parseJSON} from '@gravity-ui/uikit-themer';
import React from 'react';

import {useThemeCreatorMethods} from '../hooks';

export function useImportTheme(onImportError?: () => void) {
    const {importTheme} = useThemeCreatorMethods();

    const importThemeFromJson = React.useCallback(
        (jsonString: string) => {
            try {
                const parsedUserInput = JSON.parse(jsonString);
                const customTheme = parseJSON(parsedUserInput);
                importTheme(customTheme);
            } catch {
                onImportError?.();
            }
        },
        [onImportError],
    );

    return {importThemeFromJson};
}
