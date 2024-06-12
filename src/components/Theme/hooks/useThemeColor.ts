import React from 'react';

import {ThemeCreatorContext} from '../ThemeCreator';
import type {ColorsOptions, ThemeVariant} from '../types';

type UseThemeColorParams = {
    name: keyof ColorsOptions;
    theme: ThemeVariant;
};

export const useThemeColor = ({name, theme}: UseThemeColorParams) => {
    const {state, updateState} = React.useContext(ThemeCreatorContext);

    const value = React.useMemo(() => state.colors[theme][name], [name, theme]);

    const updateValue = React.useCallback(
        (newValue: string) => {
            const newState = {...state};
            newState.colors[theme][name] = newValue;
            updateState(newState);
        },
        [name, theme, state],
    );

    return [value, updateValue] as const;
};
