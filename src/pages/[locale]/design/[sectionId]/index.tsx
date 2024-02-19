import {GetStaticPaths, GetStaticPathsResult, GetStaticProps} from 'next';
import {useTranslation} from 'next-i18next';
import {useRouter} from 'next/router';
import React from 'react';

// import {DesignLayout} from '../../../components/DesignLayout/DesignLayout';
// import {DesignSection} from '../../../components/DesignSection/DesignSection';
import nextI18nextConfig from '../../../../../next-i18next.config';
import {Layout} from '../../../../components/Layout/Layout';
import {sections} from '../../../../content/design';
import {getI18nPaths, getI18nProps} from '../../../../utils/i18next';

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
        const localePrefix =
            i18n.language === nextI18nextConfig.i18n.defaultLocale ? '/' : `/${i18n.language}/`;

        const firstArticle = section.articles[0];

        if (firstArticle) {
            router.replace(`${localePrefix}design/${section.id}/${firstArticle.id}`);
        } else {
            router.replace(localePrefix);
        }
    }, []);

    return (
        <Layout title={section.title}>
            {/* <DesignLayout sectionId={sectionId}>
                <DesignSection section={section} />
            </DesignLayout> */}
        </Layout>
    );
};

export default DesignSectionPage;
