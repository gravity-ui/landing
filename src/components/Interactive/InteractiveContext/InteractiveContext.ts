import {Theme} from '@gravity-ui/uikit';
import {createContext, useContext} from 'react';

import {ColorTheme} from '../constants';

interface InteractiveContextParams {
    color: ColorTheme;
    theme: Theme;
    changeColor: (color: ColorTheme) => void;
    changeTheme: (theme: Theme) => void;
}

const InteractiveContext = createContext<InteractiveContextParams>({
    color: ColorTheme.Yellow,
    theme: 'dark',
    changeColor: () => {},
    changeTheme: () => {},
});

InteractiveContext.displayName = 'InteractiveContext';

export const InteractiveContextProvider = InteractiveContext.Provider;

export const InteractiveContextConsumer = InteractiveContext.Consumer;

export const useInteractiveContext = () => useContext(InteractiveContext);
