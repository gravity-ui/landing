import {GetStaticProps} from 'next';
import React from 'react';

import {Interactive} from '../../components/Interactive/Interactive';
import {Layout} from '../../components/Layout/Layout';
import {getI18nProps} from '../../utils/i18next';

export const getStaticProps: GetStaticProps = async (ctx) => {
    return {
        props: {
            ...(await getI18nProps(ctx)),
        },
    };
};

export const StandPage = () => {
    return (
        <Layout title="Stand Page" showOnlyContent>
            <Interactive />
        </Layout>
    );
};

export default StandPage;
