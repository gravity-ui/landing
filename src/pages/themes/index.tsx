import {GetStaticProps} from 'next';
import {useTranslation} from 'next-i18next';
import React from 'react';

import {Layout} from '../../components/Layout/Layout';
import {Themes} from '../../components/Themes/Themes';
import {useLocaleRedirect} from '../../hooks/useLocaleRedirect';
import {useOnLeavePageConfirmation} from '../../hooks/useOnLeavePageConfirmation';
import {getI18nProps} from '../../utils';

export const getStaticProps: GetStaticProps = async (ctx) => {
    return {
        props: {
            ...(await getI18nProps(ctx, ['themes'])),
        },
    };
};

export const ThemesPage = () => {
    useLocaleRedirect();

    const {t} = useTranslation();

    useOnLeavePageConfirmation(true);

    return (
        <Layout title={t('themes:title')}>
            <Themes />
        </Layout>
    );
};

export default ThemesPage;
