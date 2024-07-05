import noop from 'lodash/noop';
import {createContext} from 'react';

import {DEFAULT_THEME} from './constants';
import {
    UpdateAdvancedTypographySettingsParams,
    UpdateFontFamilyParams,
    initThemeCreator,
} from './themeCreatorUtils';
import type {
    AddColorToThemeParams,
    ChangeRadiusPresetInThemeParams,
    ChangeUtilityColorInThemeParams,
    RenameColorInThemeParams,
    UpdateColorInThemeParams,
    UpdateCustomRadiusPresetInThemeParams,
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
    changeRadiusPreset: (params: ChangeRadiusPresetInThemeParams) => void;
    updateCustomRadiusPreset: (params: UpdateCustomRadiusPresetInThemeParams) => void;
    updateFontFamily: (params: UpdateFontFamilyParams) => void;
    addFontFamilyType: () => void;
    updateAdvancedTypographySettings: (params: UpdateAdvancedTypographySettingsParams) => void;
}

export const ThemeCreatorMethodsContext = createContext<ThemeCreatorMethodsContextType>({
    addColor: noop,
    updateColor: noop,
    removeColor: noop,
    renameColor: noop,
    changeUtilityColor: noop,
    changeRadiusPreset: noop,
    updateCustomRadiusPreset: noop,
    updateFontFamily: noop,
    addFontFamilyType: noop,
    updateAdvancedTypographySettings: noop,
});
