import noop from 'lodash/noop';
import {createContext} from 'react';

import {DEFAULT_THEME} from './constants';
import {initThemeCreator} from './themeCreatorUtils';
import type {
    AddColorToThemeParams,
    ChangeUtilityColorInThemeParams,
    RenameColorInThemeParams,
    UpdateColorInThemeParams,
} from './themeCreatorUtils';
import type {ThemeCreatorState} from './types';

export const ThemeCreatorContext = createContext<ThemeCreatorState>(
    initThemeCreator(DEFAULT_THEME),
);

export interface ThemeCreatorMethodsContextType {
    addColor: (params?: AddColorToThemeParams) => void;
    updateColor: (params: UpdateColorInThemeParams) => void;
    removeColor: (title: string) => void;
    renameColor: (params: RenameColorInThemeParams) => void;
    changeUtilityColor: (params: ChangeUtilityColorInThemeParams) => void;
}

export const ThemeCreatorMethodsContext = createContext<ThemeCreatorMethodsContextType>({
    addColor: noop,
    updateColor: noop,
    removeColor: noop,
    renameColor: noop,
    changeUtilityColor: noop,
});
