import Head from 'next/head';
import React from 'react';

import {useOnLeavePageConfirmation} from '../../../hooks/useOnLeavePageConfirmation';
import {BrandPreset} from '../lib/constants';
import {ThemeCreatorContext, ThemeCreatorMethodsContext} from '../lib/themeCreatorContext';
import type {ThemeCreatorMethodsContextType} from '../lib/themeCreatorContext';
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
} from '../lib/themeCreatorUtils';
import {
    addColorToTheme,
    addFontFamilyTypeInTheme,
    applyBrandPresetToTheme,
    changeRadiusPresetInTheme,
    changeUtilityColorInTheme,
    initThemeCreator,
    removeColorFromTheme,
    removeFontFamilyTypeFromTheme,
    renameColorInTheme,
    updateAdvancedTypographyInTheme,
    updateAdvancedTypographySettingsInTheme,
    updateColorInTheme,
    updateCustomRadiusPresetInTheme,
    updateFontFamilyInTheme,
    updateFontFamilyTypeTitleInTheme,
} from '../lib/themeCreatorUtils';
import type {ThemeCreatorState, ThemeOptions} from '../lib/types';

type ThemeCreatorAction =
    | {
          type: 'addColor';
          payload?: AddColorToThemeParams;
      }
    | {
          type: 'updateColor';
          payload: UpdateColorInThemeParams;
      }
    | {
          type: 'removeColor';
          payload: string;
      }
    | {
          type: 'renameColor';
          payload: RenameColorInThemeParams;
      }
    | {
          type: 'changeUtilityColor';
          payload: ChangeUtilityColorInThemeParams;
      }
    | {
          type: 'applyBrandPreset';
          payload: BrandPreset;
      }
    | {
          type: 'changeRadiusPreset';
          payload: ChangeRadiusPresetInThemeParams;
      }
    | {
          type: 'updateCustomRadiusPreset';
          payload: UpdateCustomRadiusPresetInThemeParams;
      }
    | {
          type: 'updateFontFamily';
          payload: UpdateFontFamilyParams;
      }
    | {
          type: 'addFontFamilyType';
          payload: AddFontFamilyTypeParams;
      }
    | {
          type: 'removeFontFamilyType';
          payload: {fontType: string};
      }
    | {
          type: 'updateFontFamilyTypeTitle';
          payload: UpdateFontFamilyTypeTitleParams;
      }
    | {
          type: 'updateAdvancedTypographySettings';
          payload: UpdateAdvancedTypographySettingsParams;
      }
    | {
          type: 'updateAdvancedTypography';
      }
    | {
          type: 'reinitialize';
          payload: ThemeOptions;
      }
    | {
          type: 'openMainSettings';
      }
    | {
          type: 'setAdvancedMode';
          payload: boolean;
      };

const themeCreatorReducer = (
    prevState: ThemeCreatorState,
    action: ThemeCreatorAction,
): ThemeCreatorState => {
    const newState = {
        ...prevState,
        changesExist: true,
    };

    switch (action.type) {
        case 'addColor':
            return addColorToTheme(newState, action.payload);
        case 'removeColor':
            return removeColorFromTheme(newState, action.payload);
        case 'renameColor':
            return renameColorInTheme(newState, action.payload);
        case 'updateColor':
            return updateColorInTheme(newState, action.payload);
        case 'changeUtilityColor':
            return changeUtilityColorInTheme(newState, action.payload);
        case 'applyBrandPreset':
            return applyBrandPresetToTheme(newState, action.payload);
        case 'changeRadiusPreset':
            return changeRadiusPresetInTheme(newState, action.payload);
        case 'updateCustomRadiusPreset':
            return updateCustomRadiusPresetInTheme(newState, action.payload);
        case 'addFontFamilyType':
            return addFontFamilyTypeInTheme(newState, action.payload);
        case 'removeFontFamilyType':
            return removeFontFamilyTypeFromTheme(newState, action.payload);
        case 'updateFontFamilyTypeTitle':
            return updateFontFamilyTypeTitleInTheme(newState, action.payload);
        case 'updateFontFamily':
            return updateFontFamilyInTheme(newState, action.payload);
        case 'updateAdvancedTypographySettings':
            return updateAdvancedTypographySettingsInTheme(newState, action.payload);
        case 'updateAdvancedTypography':
            return updateAdvancedTypographyInTheme(newState);
        case 'openMainSettings':
            return {
                ...newState,
                showMainSettings: true,
            };
        case 'setAdvancedMode':
            return {
                ...newState,
                advancedModeEnabled: action.payload,
            };
        case 'reinitialize':
            return initThemeCreator(action.payload);
        default:
            return prevState;
    }
};

interface ThemeCreatorProps extends React.PropsWithChildren {
    initialTheme: ThemeOptions;
}

export const ThemeCreatorContextProvider: React.FC<ThemeCreatorProps> = ({
    initialTheme,
    children,
}) => {
    const prevInitialTheme = React.useRef(initialTheme);

    const [themeCreator, dispatchThemeCreator] = React.useReducer(
        themeCreatorReducer,
        undefined,
        () => initThemeCreator(initialTheme),
    );

    React.useEffect(() => {
        if (prevInitialTheme.current !== initialTheme) {
            prevInitialTheme.current = initialTheme;
            dispatchThemeCreator({
                type: 'reinitialize',
                payload: initialTheme,
            });
        }
    }, [initialTheme]);

    const addColor = React.useCallback<ThemeCreatorMethodsContextType['addColor']>((payload) => {
        dispatchThemeCreator({
            type: 'addColor',
            payload,
        });
    }, []);

    const renameColor = React.useCallback<ThemeCreatorMethodsContextType['renameColor']>(
        (payload) => {
            dispatchThemeCreator({
                type: 'renameColor',
                payload,
            });
        },
        [],
    );

    const removeColor = React.useCallback<ThemeCreatorMethodsContextType['removeColor']>(
        (payload) => {
            dispatchThemeCreator({
                type: 'removeColor',
                payload,
            });
        },
        [],
    );

    const updateColor = React.useCallback<ThemeCreatorMethodsContextType['updateColor']>(
        (payload) => {
            dispatchThemeCreator({
                type: 'updateColor',
                payload,
            });
        },
        [],
    );

    const changeUtilityColor = React.useCallback<
        ThemeCreatorMethodsContextType['changeUtilityColor']
    >((payload) => {
        dispatchThemeCreator({
            type: 'changeUtilityColor',
            payload,
        });
    }, []);

    const applyBrandPreset = React.useCallback<ThemeCreatorMethodsContextType['applyBrandPreset']>(
        (payload) => {
            dispatchThemeCreator({
                type: 'applyBrandPreset',
                payload,
            });
        },
        [],
    );

    const changeRadiusPreset = React.useCallback<
        ThemeCreatorMethodsContextType['changeRadiusPreset']
    >((payload) => {
        dispatchThemeCreator({
            type: 'changeRadiusPreset',
            payload,
        });
    }, []);

    const updateCustomRadiusPreset = React.useCallback<
        ThemeCreatorMethodsContextType['updateCustomRadiusPreset']
    >((payload) => {
        dispatchThemeCreator({
            type: 'updateCustomRadiusPreset',
            payload,
        });
    }, []);

    const updateFontFamily = React.useCallback<ThemeCreatorMethodsContextType['updateFontFamily']>(
        (payload) => {
            dispatchThemeCreator({
                type: 'updateFontFamily',
                payload,
            });
        },
        [],
    );

    const addFontFamilyType = React.useCallback<
        ThemeCreatorMethodsContextType['addFontFamilyType']
    >((payload) => {
        dispatchThemeCreator({
            type: 'addFontFamilyType',
            payload,
        });
    }, []);

    const updateFontFamilyTypeTitle = React.useCallback<
        ThemeCreatorMethodsContextType['updateFontFamilyTypeTitle']
    >((payload) => {
        dispatchThemeCreator({
            type: 'updateFontFamilyTypeTitle',
            payload,
        });
    }, []);

    const removeFontFamilyType = React.useCallback<
        ThemeCreatorMethodsContextType['removeFontFamilyType']
    >((payload) => {
        dispatchThemeCreator({
            type: 'removeFontFamilyType',
            payload,
        });
    }, []);

    const updateAdvancedTypographySettings = React.useCallback<
        ThemeCreatorMethodsContextType['updateAdvancedTypographySettings']
    >((payload) => {
        dispatchThemeCreator({
            type: 'updateAdvancedTypographySettings',
            payload,
        });
    }, []);

    const updateAdvancedTypography = React.useCallback<
        ThemeCreatorMethodsContextType['updateAdvancedTypography']
    >(() => {
        dispatchThemeCreator({
            type: 'updateAdvancedTypography',
        });
    }, []);

    const openMainSettings = React.useCallback(() => {
        dispatchThemeCreator({
            type: 'openMainSettings',
        });
    }, []);

    const setAdvancedMode = React.useCallback((enabled: boolean) => {
        dispatchThemeCreator({
            type: 'setAdvancedMode',
            payload: enabled,
        });
    }, []);

    const methods = React.useMemo(
        () => ({
            addColor,
            renameColor,
            removeColor,
            updateColor,
            changeUtilityColor,
            applyBrandPreset,
            changeRadiusPreset,
            updateCustomRadiusPreset,
            addFontFamilyType,
            removeFontFamilyType,
            updateAdvancedTypographySettings,
            updateFontFamilyTypeTitle,
            updateAdvancedTypography,
            updateFontFamily,
            openMainSettings,
            setAdvancedMode,
        }),
        [
            addColor,
            renameColor,
            removeColor,
            updateColor,
            changeUtilityColor,
            applyBrandPreset,
            changeRadiusPreset,
            updateCustomRadiusPreset,
            addFontFamilyType,
            removeFontFamilyType,
            updateAdvancedTypographySettings,
            updateAdvancedTypography,
            updateFontFamily,
            updateFontFamilyTypeTitle,
            openMainSettings,
            setAdvancedMode,
        ],
    );

    useOnLeavePageConfirmation(themeCreator.changesExist);

    return (
        <ThemeCreatorContext.Provider value={themeCreator}>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Inter:wght@100..900&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap"
                />
            </Head>

            <ThemeCreatorMethodsContext.Provider value={methods}>
                {children}
            </ThemeCreatorMethodsContext.Provider>
        </ThemeCreatorContext.Provider>
    );
};
