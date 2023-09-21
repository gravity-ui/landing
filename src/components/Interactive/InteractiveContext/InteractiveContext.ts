import {Theme} from '@gravity-ui/uikit';
import {createContext, useContext} from 'react';

import {ColorTheme} from '../constants';

interface InteractiveContextParams {
    color: ColorTheme;
    theme: Theme;
    changeColor: (color: ColorTheme) => void;
    switchTheme: () => void;
}

const InteractiveContext = createContext<InteractiveContextParams>({
    color: ColorTheme.Yellow,
    theme: 'dark',
    changeColor: () => {},
    switchTheme: () => {},
});

InteractiveContext.displayName = 'InteractiveContext';

export const InteractiveContextProvider = InteractiveContext.Provider;

export const InteractiveContextConsumer = InteractiveContext.Consumer;

export const useInteractiveContext = () => useContext(InteractiveContext);
