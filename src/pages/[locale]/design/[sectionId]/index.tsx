import {GetServerSideProps} from 'next';
import {useTranslation} from 'next-i18next';
import {useRouter} from 'next/router';
import React from 'react';

import {Layout} from '../../../../components/Layout/Layout';
import {sections} from '../../../../content/design';
import {getI18nProps, getLocaleLink} from '../../../../utils';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
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
    return <Layout title={i18n.t(`section_${sectionId}_title`)} />;
};

export default DesignSectionPage;
