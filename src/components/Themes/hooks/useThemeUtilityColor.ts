import type {Theme, UtilityColor} from '@gravity-ui/uikit-themer';
import React from 'react';

import {useThemeCreator, useThemeCreatorMethods} from './useThemeCreator';

type UseThemeColorParams = {
    name: UtilityColor;
    theme: Theme;
    withoutRef?: boolean;
};

export const useThemeUtilityColor = ({name, theme, withoutRef}: UseThemeColorParams) => {
    const themeState = useThemeCreator();
    const {changeUtilityColor} = useThemeCreatorMethods();

    const value = React.useMemo(() => {
        const colorFullValue = themeState.gravityTheme.utilityColors[name][theme];
        if (withoutRef) {
            return colorFullValue.value;
        }
        if (colorFullValue.ref) {
            return colorFullValue.ref;
        }
        return colorFullValue.value;
    }, [themeState, name, theme]);

    const updateValue = React.useCallback(
        (newValue: string, newRef?: string) => {
            changeUtilityColor({
                themeVariant: theme,
                name,
                value: newValue,
                ref: newRef,
            });
        },
        [name, theme, changeUtilityColor],
    );

    return [value, updateValue] as const;
};
