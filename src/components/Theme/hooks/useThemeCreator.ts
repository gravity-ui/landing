import React from 'react';

import {ThemeCreatorContext} from '../ThemeCreator';
import {addColorToTheme, getThemePalette, removeColorFromTheme, updateColorInTheme} from '../utils';
import type {AddColorToThemeParams, UpdateColorInThemeParams} from '../utils';

export const useThemeCreator = () => {
    const {state, updateState} = React.useContext(ThemeCreatorContext);

    const addColor = React.useCallback(
        (params: AddColorToThemeParams) => {
            const newState = addColorToTheme(state, params);
            updateState(newState);
        },
        [state],
    );

    const updateColor = React.useCallback(
        (params: UpdateColorInThemeParams) => {
            const newState = updateColorInTheme(state, params);
            updateState(newState);
        },
        [state],
    );

    const removeColor = React.useCallback(
        (colorTitle: string) => {
            const newState = removeColorFromTheme(state, colorTitle);
            updateState(newState);
        },
        [state],
    );

    const palette = React.useMemo(() => getThemePalette(state), [state]);

    return {
        addColor,
        updateColor,
        removeColor,
        palette,
    };
};
