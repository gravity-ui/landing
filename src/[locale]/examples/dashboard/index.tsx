import React from 'react';
import {Dashboard} from 'src/components/Examples/pages/Dashboard/Dashboard';

import {useLocaleRedirect} from '../../../hooks/useLocaleRedirect';

export const DashboardPage = () => {
    useLocaleRedirect();

    return <Dashboard />;
};

export default DashboardPage;
