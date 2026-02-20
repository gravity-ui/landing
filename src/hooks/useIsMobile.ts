import {BREAKPOINTS} from '@gravity-ui/page-constructor';

import {useWindowBreakpoint} from './useWindowBreakpoint';

export const useIsMobile = () => {
    const currentBreakpoint = useWindowBreakpoint();

    return currentBreakpoint <= BREAKPOINTS.sm;
};
