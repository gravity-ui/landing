import {GetServerSideProps} from 'next';
import {useTranslation} from 'next-i18next';
import {useRouter} from 'next/router';
import React from 'react';

import {Layout} from '../../../components/Layout/Layout';
import {sections} from '../../../content/design';
import {getDesignSectionMeta, getI18nProps} from '../../../utils';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const sectionId = ctx.params?.sectionId as string;

    // Find the section
    const section = sections.find((item) => item.id === sectionId);

    if (!section) {
        return {
            notFound: true,
        };
    }

    // Get i18n props to access translations
    const i18nProps = await getI18nProps(ctx, ['design-articles-info']);

    return {
        props: {
            sectionId,
            ...i18nProps,
        },
    };
};

export const DesignSectionPage = ({sectionId}: {sectionId: string}) => {
    const {t} = useTranslation();
    const router = useRouter();

    const section = sections.find((item) => item.id === sectionId);

    // Get localized section title
    const sectionTitle = t(`design-articles-info:section_${sectionId}_title`);

    // Generate meta description using translation function
    const sectionMeta = getDesignSectionMeta(
        sectionId,
        sectionTitle,
        t,
        `${sectionTitle} design guides and principles from Gravity UI`,
    );

    React.useEffect(() => {
        const firstArticle = section?.articles[0];

        if (firstArticle) {
            router.replace(`/design/${section.id}/${firstArticle.id}`);
        } else {
            router.replace('/');
        }
    }, []);

    // Prevent blinking before redirect
    return <Layout title={sectionTitle} meta={sectionMeta} />;
};

export default DesignSectionPage;
