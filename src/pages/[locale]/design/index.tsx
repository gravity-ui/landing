import {GetStaticPaths, GetStaticProps} from 'next';
import {useTranslation} from 'next-i18next';
import {useRouter} from 'next/router';
import React from 'react';

import nextI18nextConfig from '../../../../next-i18next.config';
import {Layout} from '../../../components/Layout/Layout';
import {sections} from '../../../content/design';
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

export const DesignPage = () => {
    const {i18n} = useTranslation();
    const router = useRouter();

    React.useEffect(() => {
        const localePrefix =
            i18n.language === nextI18nextConfig.i18n.defaultLocale ? '/' : `/${i18n.language}/`;

        const firstSection = sections[0];
        if (firstSection) {
            const firstArticle = firstSection.articles[0];

            if (firstArticle) {
                router.replace(`${localePrefix}design/${firstSection.id}/${firstArticle.id}`);
            } else {
                router.replace(`${localePrefix}design/${firstSection.id}`);
            }
        } else {
            router.replace('/');
        }
    }, []);

    // Prevent blinking before redirect
    return <Layout title="Design" />;
};

export default DesignPage;
