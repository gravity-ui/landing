import React from 'react';

import {ThemeCreatorContext} from '../ThemeCreator';
import type {ColorsOptions, ThemeVariant} from '../types';
import {changeColorInTheme} from '../utils';

type UseThemeColorParams = {
    name: keyof ColorsOptions;
    theme: ThemeVariant;
};

export const useThemeColor = ({name, theme}: UseThemeColorParams) => {
    const {state, updateState} = React.useContext(ThemeCreatorContext);

    const value = React.useMemo(() => state.colors[theme][name], [state, name, theme]);

    const updateValue = React.useCallback(
        (newValue: string) => {
            const newState = changeColorInTheme({
                themeState: state,
                themeVariant: theme,
                name,
                value: newValue,
            });
            updateState(newState);
        },
        [name, theme, state],
    );

    return [value, updateValue] as const;
};
