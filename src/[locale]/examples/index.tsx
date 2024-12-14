import {GetStaticPaths, GetStaticProps} from 'next';
import {useTranslation} from 'next-i18next';
import React from 'react';
import {Examples} from 'src/components/Examples/Examples';

import {Layout} from '../../components/Layout/Layout';
import {useLocaleRedirect} from '../../hooks/useLocaleRedirect';
import {getI18nPaths, getI18nProps} from '../../utils/i18next';

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: getI18nPaths(),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
    const result = {
        props: {
            ...(await getI18nProps(ctx, ['examples'])),
        },
    };
    return result;
};

export const ExamplesPage = () => {
    useLocaleRedirect();

    const {t} = useTranslation();

    return (
        <Layout title={t('examples:title')}>
            <Examples />
        </Layout>
    );
};

export default ExamplesPage;
