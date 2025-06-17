import {GetServerSideProps} from 'next';
import {useTranslation} from 'next-i18next';
import React from 'react';

import nextI18nextConfig from '../../next-i18next.config';
import {Landing} from '../components/Landing/Landing';
import {Layout} from '../components/Layout/Layout';
import {getI18nProps} from '../utils/i18next';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    return {
        props: {
            ...(await getI18nProps(ctx, ['home', 'libraries-info'])),
        },
    };
};

export const RTLPage = () => {
    const {i18n} = useTranslation();
    i18n.changeLanguage(nextI18nextConfig.i18n.defaultLocale);

    return (
        <Layout isPageConstructor isRtl hideLocalePicker>
            <Landing />
        </Layout>
    );
};

export default RTLPage;
