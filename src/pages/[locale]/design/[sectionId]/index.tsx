import {GetStaticPaths, GetStaticPathsResult, GetStaticProps} from 'next';
import {useTranslation} from 'next-i18next';
import {useRouter} from 'next/router';
import React from 'react';

import {Layout} from '../../../../components/Layout/Layout';
import {sections} from '../../../../content/design';
import {getI18nPaths, getI18nProps, getLocaleLink} from '../../../../utils';

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getI18nPaths().reduce<GetStaticPathsResult['paths']>((acc, localeItem) => {
        acc.push(
            ...sections.map((item) => ({
                params: {locale: localeItem.params.locale, sectionId: item.id},
            })),
        );
        return acc;
    }, []);

    return {
        paths: paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
    return {
        props: {sectionId: ctx.params?.sectionId, ...(await getI18nProps(ctx))},
    };
};

export const DesignSectionPage = ({sectionId}: {sectionId: string}) => {
    const {i18n} = useTranslation();
    const router = useRouter();

    const section = sections.find((item) => item.id === sectionId);

    if (!section) {
        return null;
    }

    React.useEffect(() => {
        const firstArticle = section.articles[0];

        if (firstArticle) {
            router.replace(getLocaleLink(`/design/${section.id}/${firstArticle.id}`, i18n));
        } else {
            router.replace(getLocaleLink('/', i18n));
        }
    }, []);

    // Prevent blinking before redirect
    return <Layout title={section.title} />;
};

export default DesignSectionPage;
