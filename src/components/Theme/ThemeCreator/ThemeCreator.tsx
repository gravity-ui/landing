import React from 'react';

import {ThemeOptions} from '../types';
import {initThemeWizard} from '../utils';

import {ThemeCreatorContextProvider} from './ThemeCreatorContext';

interface ThemeCreatorProps extends React.PropsWithChildren {
    theme: ThemeOptions;
}

export const ThemeCreator: React.FC<ThemeCreatorProps> = ({theme, children}) => {
    const [state, updateState] = React.useState(() => initThemeWizard(theme));

    React.useEffect(() => {
        updateState(initThemeWizard(theme));
    }, [theme]);

    return (
        <ThemeCreatorContextProvider
            value={{
                state,
                updateState,
            }}
        >
            {children}
        </ThemeCreatorContextProvider>
    );
};
