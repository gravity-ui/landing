import noop from 'lodash/noop';
import React from 'react';

import {DEFAULT_THEME} from '../constants';
import type {ThemeWizardState} from '../types';
import {initThemeWizard} from '../utils';

interface ThemeCreatorContextType {
    state: ThemeWizardState;
    updateState: (val: ThemeWizardState) => void;
}

export const ThemeCreatorContext = React.createContext<ThemeCreatorContextType>({
    state: initThemeWizard(DEFAULT_THEME),
    updateState: noop,
});

export const ThemeCreatorContextProvider = ThemeCreatorContext.Provider;
