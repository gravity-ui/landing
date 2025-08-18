import noop from 'lodash/noop';
import {createContext} from 'react';

import {BrandPreset, DEFAULT_THEME} from './constants';
import {initThemeCreator} from './themeCreatorUtils';
import type {
    AddColorToThemeParams,
    AddFontFamilyTypeParams,
    ChangeRadiusPresetInThemeParams,
    ChangeUtilityColorInThemeParams,
    RenameColorInThemeParams,
    UpdateAdvancedTypographySettingsParams,
    UpdateColorInThemeParams,
    UpdateCustomRadiusPresetInThemeParams,
    UpdateFontFamilyParams,
    UpdateFontFamilyTypeTitleParams,
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
    applyBrandPreset: (preset: BrandPreset) => void;
    changeRadiusPreset: (params: ChangeRadiusPresetInThemeParams) => void;
    updateCustomRadiusPreset: (params: UpdateCustomRadiusPresetInThemeParams) => void;
    updateFontFamily: (params: UpdateFontFamilyParams) => void;
    addFontFamilyType: (params: AddFontFamilyTypeParams) => void;
    updateFontFamilyTypeTitle: (params: UpdateFontFamilyTypeTitleParams) => void;
    removeFontFamilyType: ({fontType}: {fontType: string}) => void;
    updateAdvancedTypographySettings: (params: UpdateAdvancedTypographySettingsParams) => void;
    updateAdvancedTypography: () => void;
    openMainSettings: () => void;
    setAdvancedMode: (enabled: boolean) => void;
    importThemeCreatorState: (themeCreatorState: ThemeCreatorState) => void;
}

export const ThemeCreatorMethodsContext = createContext<ThemeCreatorMethodsContextType>({
    addColor: noop,
    updateColor: noop,
    removeColor: noop,
    renameColor: noop,
    changeUtilityColor: noop,
    applyBrandPreset: noop,
    changeRadiusPreset: noop,
    updateCustomRadiusPreset: noop,
    updateFontFamily: noop,
    addFontFamilyType: noop,
    updateFontFamilyTypeTitle: noop,
    removeFontFamilyType: noop,
    updateAdvancedTypographySettings: noop,
    updateAdvancedTypography: noop,
    openMainSettings: noop,
    setAdvancedMode: noop,
    importThemeCreatorState: noop,
});
