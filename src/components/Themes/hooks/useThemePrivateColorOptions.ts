import React from 'react';

import {getThemeColorOptions} from '../lib/themeCreatorUtils';
import {ThemeVariant} from '../lib/types';

import {useThemeCreator} from './useThemeCreator';

export const useThemePrivateColorOptions = (themeVariant: ThemeVariant) => {
    const themeState = useThemeCreator();

    return React.useMemo(
        () => getThemeColorOptions({themeState, themeVariant}),
        [themeState, themeVariant],
    );
};
