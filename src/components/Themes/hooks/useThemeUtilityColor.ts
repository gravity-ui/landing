import React from 'react';

import type {ColorsOptions, ThemeVariant} from '../lib/types';

import {useThemeCreator, useThemeCreatorMethods} from './useThemeCreator';

type UseThemeColorParams = {
    name: keyof ColorsOptions;
    theme: ThemeVariant;
};

export const useThemeUtilityColor = ({name, theme}: UseThemeColorParams) => {
    const themeState = useThemeCreator();
    const {changeUtilityColor} = useThemeCreatorMethods();

    const value = React.useMemo(() => themeState.colors[theme][name], [themeState, name, theme]);

    const updateValue = React.useCallback(
        (newValue: string) => {
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
