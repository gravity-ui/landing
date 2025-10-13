import {BREAKPOINTS, useWindowBreakpoint} from '@gravity-ui/page-constructor';
import {GetServerSideProps} from 'next';
import {useTranslation} from 'next-i18next';
import React from 'react';

import {DesignArticle} from '../../../components/DesignArticle/DesignArticle';
import {DesignLayout} from '../../../components/DesignLayout/DesignLayout';
import {Layout} from '../../../components/Layout/Layout';
import {sections as designSections} from '../../../content/design';
import {getI18nProps} from '../../../utils/i18next';
import {getDesignArticleMeta} from '../../../utils/meta';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const sectionId = ctx.params?.sectionId as string;
    const articleId = ctx.params?.articleId as string;

    // Find the section and article
    const section = designSections.find((item) => item.id === sectionId);
    const article = section?.articles.find((item) => item.id === articleId);

    if (!section || !article) {
        return {
            notFound: true,
        };
    }

    // Get i18n props to access translations
    const i18nProps = await getI18nProps(ctx, ['design-article', 'design-articles-info']);

    return {
        props: {
            sectionId,
            articleId,
            ...i18nProps,
        },
    };
};

export const ArticlePage = ({sectionId, articleId}: {sectionId: string; articleId: string}) => {
    const {i18n, t} = useTranslation();

    const section = designSections.find((item) => item.id === sectionId);
    const article = section?.articles.find((item) => item.id === articleId);

    const windowBreakpoint = useWindowBreakpoint();
    const isMobile = windowBreakpoint < BREAKPOINTS.lg;

    if (!section || !article) {
        return null;
    }

    // Get localized titles
    const sectionTitle = t(`design-articles-info:section_${sectionId}_title`);
    const articleTitle = t(`design-articles-info:section_${sectionId}_article_${articleId}_title`);

    // Generate meta description using translation function
    const articleMeta = getDesignArticleMeta({
        sectionId,
        sectionTitle,
        articleId,
        articleTitle,
        t,
    });

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
            title={`${sectionTitle} – ${articleTitle}`}
            hideFooter
            noScroll={!isMobile}
            meta={articleMeta}
        >
            <DesignLayout sections={sections} sectionId={sectionId} articleId={articleId}>
                <DesignArticle article={article} sectionId={sectionId} sections={sections} />
            </DesignLayout>
        </Layout>
    );
};

export default ArticlePage;
