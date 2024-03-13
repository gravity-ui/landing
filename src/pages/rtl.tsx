import {GetStaticProps} from 'next';
import React from 'react';

import {Landing} from '../components/Landing/Landing';
import {Layout} from '../components/Layout/Layout';
import {getI18nProps} from '../utils/i18next';

export const getStaticProps: GetStaticProps = async (ctx) => {
    return {
        props: {
            ...(await getI18nProps(ctx, ['home', 'libraries-info'])),
        },
    };
};

export const RTLPage = () => {
    return (
        <Layout isPageConstrucor isRtl>
            <Landing />
        </Layout>
    );
};

export default RTLPage;
