import {GetStaticPaths, GetStaticProps} from 'next';
import {useTranslation} from 'next-i18next';
import React from 'react';

import {Layout} from '../../components/Layout/Layout';
import {Themes} from '../../components/Themes/Themes';
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
            ...(await getI18nProps(ctx, ['themes'])),
        },
    };
    return result;
};

export const ThemesPage = () => {
    useLocaleRedirect();

    const {t} = useTranslation();

    return (
        <Layout title={t('themes:title')}>
            <Themes />
        </Layout>
    );
};

export default ThemesPage;
