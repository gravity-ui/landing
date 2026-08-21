import React from 'react';

import type {ThemePreviewMode} from '../../Themes/gallery';

// Re-exported so existing consumers keep their import path; the single source
// of truth for the mode union is the gallery schema.
export type PreviewMode = ThemePreviewMode;

interface PreviewModeContextValue {
    forcedMode: PreviewMode | null;
    hideToggle: boolean;
}

const PreviewModeContext = React.createContext<PreviewModeContextValue>({
    forcedMode: null,
    hideToggle: false,
});

export const usePreviewModeContext = () => React.useContext(PreviewModeContext);

interface PreviewModeProviderProps extends PreviewModeContextValue {
    children: React.ReactNode;
}

export const PreviewModeProvider: React.FC<PreviewModeProviderProps> = ({
    forcedMode,
    hideToggle,
    children,
}) => {
    const value = React.useMemo(() => ({forcedMode, hideToggle}), [forcedMode, hideToggle]);
    return <PreviewModeContext.Provider value={value}>{children}</PreviewModeContext.Provider>;
};
