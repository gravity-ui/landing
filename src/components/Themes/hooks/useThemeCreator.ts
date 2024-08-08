import React from 'react';

import {ThemeCreatorContext, ThemeCreatorMethodsContext} from '../lib/themeCreatorContext';

export const useThemeCreator = () => React.useContext(ThemeCreatorContext);
export const useThemeCreatorMethods = () => React.useContext(ThemeCreatorMethodsContext);
