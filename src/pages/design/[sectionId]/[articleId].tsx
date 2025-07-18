import {BREAKPOINTS, useWindowBreakpoint} from '@gravity-ui/page-constructor';
import {GetServerSideProps} from 'next';
import {useTranslation} from 'next-i18next';
import Error from 'next/error';
import React from 'react';

import {DesignArticle} from '../../../components/DesignArticle/DesignArticle';
import {DesignLayout} from '../../../components/DesignLayout/DesignLayout';
import {Layout} from '../../../components/Layout/Layout';
import {sections as designSections} from '../../../content/design';
import {getI18nProps} from '../../../utils/i18next';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    return {
        props: {
            sectionId: ctx.params?.sectionId,
            articleId: ctx.params?.articleId,
            ...(await getI18nProps(ctx, ['design-article', 'design-articles-info'])),
        },
    };
};

export const ArticlePage = ({sectionId, articleId}: {sectionId: string; articleId: string}) => {
    const {i18n} = useTranslation();

    const section = designSections.find((item) => item.id === sectionId);
    const article = section?.articles.find((item) => item.id === articleId);

    const windowBreakpoint = useWindowBreakpoint();
    const isMobile = windowBreakpoint < BREAKPOINTS.lg;

    if (!section || !article) {
        return <Error statusCode={404} />;
    }

    const sections = designSections.map((item) => {
        return {
            id: item.id,
            title: i18n.t(`design-articles-info:section_${item.id}_title`),
            // Uncomment it to show overview tab
            // url: `/design/${section.id}`,
            subSections: item.articles.map((articleItem) => ({
                id: articleItem.id,
                title: i18n.t(
                    `design-articles-info:section_${item.id}_article_${articleItem.id}_title`,
                ),
                url: `/design/${item.id}/${articleItem.id}`,
            })),
        };
    });

    return (
        <Layout
            title={`${i18n.t(`design-articles-info:section_${sectionId}_title`)} – ${i18n.t(
                `design-articles-info:section_${sectionId}_article_${articleId}_title`,
            )}`}
            hideFooter
            noScroll={!isMobile}
        >
            <DesignLayout sections={sections} sectionId={sectionId} articleId={articleId}>
                <DesignArticle article={article} sectionId={sectionId} sections={sections} />
            </DesignLayout>
        </Layout>
    );
};

export default ArticlePage;
