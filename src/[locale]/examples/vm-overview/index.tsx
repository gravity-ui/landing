import React from 'react';
import {VmOverview} from 'src/components/Examples/pages/VmOverview/VmOverview';

import {useLocaleRedirect} from '../../../hooks/useLocaleRedirect';

export const VmOverviewPage = () => {
    useLocaleRedirect();

    return <VmOverview />;
};

export default VmOverviewPage;
