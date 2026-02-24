import {useWindowBreakpoint as useBaseWindowBreakpoint} from '@gravity-ui/page-constructor';
import React from 'react';

const WindowBreakpointContext = React.createContext<number | null>(null);

export const WindowBreakpointProvider = (props: React.PropsWithChildren) => {
    const breakpoint = useBaseWindowBreakpoint();

    return <WindowBreakpointContext.Provider value={breakpoint} {...props} />;
};

export const useWindowBreakpoint = () => {
    const breakpoint = React.useContext(WindowBreakpointContext);

    if (breakpoint === null) {
        throw new Error('useWindowBreakpoint must be used within a WindowBreakpointProvider');
    }

    return breakpoint;
};
