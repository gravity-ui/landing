import {createContext} from 'react';

interface ThemeSubmitActions {
    openSubmit: () => void;
    pullRequestUrl: string | null;
    createTheme: () => void;
}

export const ThemeSubmitContext = createContext<ThemeSubmitActions | null>(null);
