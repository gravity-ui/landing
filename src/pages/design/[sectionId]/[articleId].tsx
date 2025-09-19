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
import {type MetaProps, getDesignArticleMeta} from '../../../utils/lib';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const sectionId = ctx.params?.sectionId as string;
    const articleId = ctx.params?.articleId as string;
    const locale = ctx.locale || 'en';

    // Find the section and article
    const section = designSections.find((item) => item.id === sectionId);
    const article = section?.articles.find((item) => item.id === articleId);

    if (!section || !article) {
        return {
            notFound: true,
        };
    }

    // Get localized content for the article
    const articleContent =
        article.content[locale as keyof typeof article.content] || article.content.en;

    // Get i18n props to access translations
    const i18nProps = await getI18nProps(ctx, ['design-article', 'design-articles-info']);

    // Create a temporary t function for title extraction
    const translations =
        i18nProps._nextI18Next?.initialI18nStore?.[locale]?.['design-articles-info'] || {};
    const getTitle = (key: string) => translations[key] || key;

    // Get localized titles
    const sectionTitle = getTitle(`section_${sectionId}_title`);
    const articleTitle = getTitle(`section_${sectionId}_article_${articleId}_title`);

    // Generate dynamic meta description
    const articleMeta = getDesignArticleMeta(
        sectionTitle,
        articleTitle,
        articleContent,
        `${articleTitle} design guide from Gravity UI`,
    );

    return {
        props: {
            sectionId,
            articleId,
            articleMeta,
            ...i18nProps,
        },
    };
};

export const ArticlePage = ({
    sectionId,
    articleId,
    articleMeta,
}: {
    sectionId: string;
    articleId: string;
    articleMeta: MetaProps;
}) => {
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
            meta={articleMeta}
        >
            <DesignLayout sections={sections} sectionId={sectionId} articleId={articleId}>
                <DesignArticle article={article} sectionId={sectionId} sections={sections} />
            </DesignLayout>
        </Layout>
    );
};

export default ArticlePage;
