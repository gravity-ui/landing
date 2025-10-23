import {GetServerSideProps} from 'next';
import {useTranslation} from 'next-i18next';
import {useRouter} from 'next/router';
import React from 'react';

import {Layout} from '../../../components/Layout/Layout';
import {sections} from '../../../content/design';
import {type MetaProps, getDesignSectionMeta, getI18nProps} from '../../../utils';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const sectionId = ctx.params?.sectionId as string;
    const locale = ctx.locale || 'en';

    // Find the section
    const section = sections.find((item) => item.id === sectionId);

    if (!section) {
        return {
            notFound: true,
        };
    }

    // Get i18n props to access translations
    const i18nProps = await getI18nProps(ctx, ['design-articles-info']);

    // Create a temporary t function for title extraction
    const translations =
        i18nProps._nextI18Next?.initialI18nStore?.[locale]?.['design-articles-info'] || {};
    const getTitle = (key: string) => translations[key] || key;

    // Get localized section title
    const sectionTitle = getTitle(`section_${sectionId}_title`);

    // Create a TFunction-compatible function for server-side use
    const serverT = ((key: string) => {
        // Handle namespaced keys
        const cleanKey = key.replace('design-articles-info:', '');
        return getTitle(cleanKey);
    }) as any; // Type assertion to bypass TFunction brand check

    // Generate dynamic meta description for section
    const sectionMeta = getDesignSectionMeta(
        sectionId,
        sectionTitle,
        serverT,
        `${sectionTitle} design guides and principles from Gravity UI`,
    );

    return {
        props: {
            sectionId,
            sectionMeta,
            ...i18nProps,
        },
    };
};

export const DesignSectionPage = ({
    sectionId,
    sectionMeta,
}: {
    sectionId: string;
    sectionMeta: MetaProps;
}) => {
    const {i18n} = useTranslation();
    const router = useRouter();

    const section = sections.find((item) => item.id === sectionId);

    React.useEffect(() => {
        const firstArticle = section?.articles[0];

        if (firstArticle) {
            router.replace(`/design/${section.id}/${firstArticle.id}`);
        } else {
            router.replace('/');
        }
    }, []);

    // Prevent blinking before redirect
    return <Layout title={i18n.t(`section_${sectionId}_title`)} meta={sectionMeta} />;
};

export default DesignSectionPage;
