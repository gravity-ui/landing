import React from 'react';
import {Overview} from 'src/components/Examples/pages/Overview/Overview';

import {useLocaleRedirect} from '../../../hooks/useLocaleRedirect';

export const OverviewPage = () => {
    useLocaleRedirect();

    return <Overview />;
};

export default OverviewPage;
