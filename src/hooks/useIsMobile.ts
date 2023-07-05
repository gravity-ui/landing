import {BREAKPOINTS, useWindowBreakpoint} from '@gravity-ui/page-constructor';

export const useIsMobile = () => {
    const currentBreakpoint = useWindowBreakpoint();

    return currentBreakpoint <= BREAKPOINTS.sm;
};
