import React from 'react';

import {ThemeCreatorContext} from '../ThemeCreator';
import {ThemeVariant} from '../types';
import {
    addColorToTheme,
    getThemeColorOptions,
    getThemePalette,
    removeColorFromTheme,
    renameColorInTheme,
    updateColorInTheme,
} from '../utils';
import type {AddColorToThemeParams, UpdateColorInThemeParams} from '../utils';

export const useThemeCreator = () => {
    const {state, updateState} = React.useContext(ThemeCreatorContext);

    const addColor = React.useCallback(
        (params?: AddColorToThemeParams) => {
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

    const renameColor = React.useCallback(
        (oldTitle: string, newTitle: string) => {
            const newState = renameColorInTheme(state, oldTitle, newTitle);
            updateState(newState);
        },
        [state],
    );

    const palette = React.useMemo(() => getThemePalette(state), [state]);

    const getThemePrivateColorOptions = React.useCallback(
        (themeVariant: ThemeVariant) => getThemeColorOptions({themeState: state, themeVariant}),
        [state],
    );

    return {
        addColor,
        updateColor,
        removeColor,
        renameColor,
        palette,
        getThemePrivateColorOptions,
    };
};
