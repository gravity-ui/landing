import React from 'react';

export type PreviewMode = 'light' | 'dark';

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
