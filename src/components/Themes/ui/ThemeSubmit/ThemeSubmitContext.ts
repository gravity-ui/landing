import {createContext} from 'react';

export const ThemeSubmitContext = createContext<(() => void) | null>(null);
