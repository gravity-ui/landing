import {GetStaticProps} from 'next';
import React from 'react';
import {Dashboard} from 'src/components/Examples/pages/Dashboard/Dashboard';

import {useLocaleRedirect} from '../../../hooks/useLocaleRedirect';
import {getI18nProps} from '../../../utils';

export const DashboardPage = () => {
    useLocaleRedirect();

    return <Dashboard />;
};

export const getStaticProps: GetStaticProps = async (ctx) => {
    const result = {
        props: {
            ...(await getI18nProps(ctx, ['examples'])),
        },
    };
    return result;
};

export default DashboardPage;
