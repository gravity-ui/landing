import {GetServerSideProps} from 'next';
import {useTranslation} from 'next-i18next';
import React from 'react';

import {Layout} from '../../components/Layout/Layout';
import {Themes} from '../../components/Themes/Themes';
import {getI18nProps} from '../../utils/i18next';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const result = {
        props: {
            ...(await getI18nProps(ctx, ['themes'])),
        },
    };
    return result;
};

export const ThemesPage = () => {
    const {t} = useTranslation();

    return (
        <Layout title={t('themes:title')}>
            <Themes />
        </Layout>
    );
};

export default ThemesPage;
