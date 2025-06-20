import type {Theme} from '@gravity-ui/uikit-themer';
import React from 'react';

import {getThemeColorOptions} from '../lib/themeCreatorUtils';

import {useThemeCreator} from './useThemeCreator';

export const useThemePrivateColorOptions = (themeVariant: Theme) => {
    const themeState = useThemeCreator();

    return React.useMemo(
        () => getThemeColorOptions({themeState, themeVariant}),
        [themeState, themeVariant],
    );
};
