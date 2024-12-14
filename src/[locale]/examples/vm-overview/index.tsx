import {GetStaticProps} from 'next';
import React from 'react';
import {VmOverview} from 'src/components/Examples/pages/VmOverview/VmOverview';

import {useLocaleRedirect} from '../../../hooks/useLocaleRedirect';
import {getI18nProps} from '../../../utils';

export const VmOverviewPage = () => {
    useLocaleRedirect();

    return <VmOverview />;
};

export const getStaticProps: GetStaticProps = async (ctx) => {
    const result = {
        props: {
            ...(await getI18nProps(ctx, ['examples'])),
        },
    };
    return result;
};

export default VmOverviewPage;
