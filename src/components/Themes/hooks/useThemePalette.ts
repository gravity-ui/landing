import React from 'react';

import {getThemePalette} from '../lib/themeCreatorUtils';
import type {ThemeVariant} from '../lib/types';

import {useThemeCreator, useThemeCreatorMethods} from './useThemeCreator';

export const useThemePalette = () => {
    const themeState = useThemeCreator();
    return React.useMemo(() => getThemePalette(themeState), [themeState]);
};

type UseThemePaletteColorParams = {
    token: string;
    theme: ThemeVariant;
};

export const useThemePaletteColor = ({token, theme}: UseThemePaletteColorParams) => {
    const themeState = useThemeCreator();
    const {updateColor} = useThemeCreatorMethods();

    const value = React.useMemo(() => themeState.palette[theme][token], [themeState, token, theme]);

    const updateValue = React.useCallback(
        (newValue: string) => {
            updateColor({
                theme,
                title: token,
                value: newValue,
            });
        },
        [token, theme, updateColor],
    );

    return [value, updateValue] as const;
};
