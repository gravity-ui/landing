import {GetStaticProps} from 'next';
import React from 'react';
import {Landing} from 'src/components/Examples/pages/Landing/Landing';

import {useLocaleRedirect} from '../../../hooks/useLocaleRedirect';
import {getI18nProps} from '../../../utils';

export const LandingPage = () => {
    useLocaleRedirect();

    return <Landing />;
};

export const getStaticProps: GetStaticProps = async (ctx) => {
    const result = {
        props: {
            ...(await getI18nProps(ctx, ['examples'])),
        },
    };
    return result;
};

export default LandingPage;
