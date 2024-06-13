import React from 'react';

import {ThemeCreatorContext} from '../ThemeCreator';
import type {ThemeVariant} from '../types';
import {updateColorInTheme} from '../utils';

type UseThemePaletteColorParams = {
    token: string;
    theme: ThemeVariant;
};

export const useThemePaletteColor = ({token, theme}: UseThemePaletteColorParams) => {
    const {state, updateState} = React.useContext(ThemeCreatorContext);

    const value = React.useMemo(() => state.palette[theme][token], [state, token, theme]);

    const updateValue = React.useCallback(
        (newValue: string) => {
            const newState = updateColorInTheme(state, {
                theme,
                title: token,
                value: newValue,
            });
            updateState(newState);
        },
        [token, theme, state],
    );

    return [value, updateValue] as const;
};
