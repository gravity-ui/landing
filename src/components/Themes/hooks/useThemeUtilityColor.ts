import type {Theme, UtilityColor} from '@gravity-ui/uikit-themer';
import React from 'react';

import {useThemeCreator, useThemeCreatorMethods} from './useThemeCreator';

type UseThemeColorParams = {
    name: UtilityColor;
    theme: Theme;
};

export const useThemeUtilityColor = ({name, theme}: UseThemeColorParams) => {
    const themeState = useThemeCreator();
    const {changeUtilityColor} = useThemeCreatorMethods();

    const value = React.useMemo(
        () => themeState.gravityTheme.utilityColors[name][theme].value,
        [themeState, name, theme],
    );

    const updateValue = React.useCallback(
        (newValue: string) => {
            console.log('updateValue', name, newValue);
            changeUtilityColor({
                themeVariant: theme,
                name,
                value: newValue,
            });
        },
        [name, theme, changeUtilityColor],
    );

    return [value, updateValue] as const;
};
