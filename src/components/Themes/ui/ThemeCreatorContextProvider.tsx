import React from 'react';

import {ThemeCreatorContext, ThemeCreatorMethodsContext} from '../lib/themeCreatorContext';
import type {ThemeCreatorMethodsContextType} from '../lib/themeCreatorContext';
import type {
    AddColorToThemeParams,
    ChangeUtilityColorInThemeParams,
    RenameColorInThemeParams,
    UpdateColorInThemeParams,
} from '../lib/themeCreatorUtils';
import {
    addColorToTheme,
    changeRadiusPresetInTheme,
    changeUtilityColorInTheme,
    initThemeCreator,
    removeColorFromTheme,
    renameColorInTheme,
    updateColorInTheme,
    updateCustomRadiusPresetInTheme,
} from '../lib/themeCreatorUtils';
import type {RadiusPresetName, RadiusValue, ThemeCreatorState, ThemeOptions} from '../lib/types';

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
          type: 'changeRadiusPreset';
          payload: RadiusPresetName;
      }
    | {
          type: 'updateCustomRadiusPreset';
          payload: RadiusValue;
      }
    | {
          type: 'reinitialize';
          payload: ThemeOptions;
      };

const themeCreatorReducer = (
    prevState: ThemeCreatorState,
    action: ThemeCreatorAction,
): ThemeCreatorState => {
    switch (action.type) {
        case 'addColor':
            return addColorToTheme(prevState, action.payload);
        case 'removeColor':
            return removeColorFromTheme(prevState, action.payload);
        case 'renameColor':
            return renameColorInTheme(prevState, action.payload);
        case 'updateColor':
            return updateColorInTheme(prevState, action.payload);
        case 'changeUtilityColor':
            return changeUtilityColorInTheme(prevState, action.payload);
        case 'changeRadiusPreset':
            return changeRadiusPresetInTheme(prevState, action.payload);
        case 'updateCustomRadiusPreset':
            return updateCustomRadiusPresetInTheme(prevState, action.payload);
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
    const [themeCreator, dispatchThemeCreator] = React.useReducer(
        themeCreatorReducer,
        undefined,
        () => initThemeCreator(initialTheme),
    );

    React.useEffect(() => {
        dispatchThemeCreator({
            type: 'reinitialize',
            payload: initialTheme,
        });
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

    const methods = React.useMemo(
        () => ({
            addColor,
            renameColor,
            removeColor,
            updateColor,
            changeUtilityColor,
            changeRadiusPreset,
            updateCustomRadiusPreset,
        }),
        [
            addColor,
            renameColor,
            removeColor,
            updateColor,
            changeUtilityColor,
            changeRadiusPreset,
            updateCustomRadiusPreset,
        ],
    );

    return (
        <ThemeCreatorContext.Provider value={themeCreator}>
            <ThemeCreatorMethodsContext.Provider value={methods}>
                {children}
            </ThemeCreatorMethodsContext.Provider>
        </ThemeCreatorContext.Provider>
    );
};
