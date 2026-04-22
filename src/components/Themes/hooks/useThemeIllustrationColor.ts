import {type Theme, type UtilityIllustrationColor} from '@gravity-ui/uikit-themer';
import React from 'react';

import {useThemeCreator, useThemeCreatorMethods} from './useThemeCreator';

type UseThemeColorParams = {
    name: UtilityIllustrationColor;
    theme: Theme;
};

export const useThemeIllustrationColor = ({name, theme}: UseThemeColorParams) => {
    const themeState = useThemeCreator();
    const {changeIllustrationColor} = useThemeCreatorMethods();

    const value = React.useMemo(() => {
        const colorFullValue = themeState.gravityTheme.libraries?.illustrations?.[name][theme];

        if (!colorFullValue) {
            return undefined;
        }

        if (colorFullValue.ref) {
            return colorFullValue.ref;
        }
        return colorFullValue.value;
    }, [themeState, name, theme]);

    const updateValue = React.useCallback(
        (newValue: string, newRef?: string) => {
            changeIllustrationColor({
                themeVariant: theme,
                name,
                value: newValue,
                ref: newRef,
            });
        },
        [name, theme, changeIllustrationColor],
    );

    return [value, updateValue] as const;
};
