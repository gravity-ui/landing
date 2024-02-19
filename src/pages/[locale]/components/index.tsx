import {GetStaticPaths, GetStaticProps} from 'next';
import {useTranslation} from 'next-i18next';
import {useRouter} from 'next/router';
import React from 'react';

import nextI18nextConfig from '../../../../next-i18next.config';
import {Layout} from '../../../components/Layout/Layout';
import {libs} from '../../../content/components';
import {getI18nPaths, getI18nProps} from '../../../utils/i18next';

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: getI18nPaths(),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
    return {
        props: {
            ...(await getI18nProps(ctx)),
        },
    };
};

export const ComponentsPage = () => {
    const {i18n} = useTranslation();
    const router = useRouter();

    React.useEffect(() => {
        const localePrefix =
            i18n.language === nextI18nextConfig.i18n.defaultLocale ? '/' : `/${i18n.language}/`;

        const firstLib = libs[0];
        if (firstLib) {
            router.replace(`${localePrefix}components/${firstLib.id}`);
        } else {
            router.replace(localePrefix);
        }
    }, []);

    // Prevent blinking before redirect
    return <Layout title="Components" />;
};

export default ComponentsPage;
