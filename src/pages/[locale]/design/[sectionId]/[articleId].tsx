import {BREAKPOINTS, useWindowBreakpoint} from '@gravity-ui/page-constructor';
import {GetStaticPaths, GetStaticPathsResult, GetStaticProps} from 'next';
import {useTranslation} from 'next-i18next';
import React from 'react';

import {DesignArticle} from '../../../../components/DesignArticle/DesignArticle';
import {DesignLayout} from '../../../../components/DesignLayout/DesignLayout';
import {Layout} from '../../../../components/Layout/Layout';
import {sections as designSections} from '../../../../content/design';
import {useLocaleRedirect} from '../../../../hooks/useLocaleRedirect';
import {getI18nPaths, getI18nProps} from '../../../../utils/i18next';

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getI18nPaths().reduce<GetStaticPathsResult['paths']>((acc, localeItem) => {
        acc.push(
            ...designSections.reduce<
                {params: {locale: string; sectionId: string; articleId: string}}[]
            >((designSectionsAcc, section) => {
                section.articles.forEach((article) => {
                    designSectionsAcc.push({
                        params: {
                            locale: localeItem.params.locale,
                            sectionId: section.id,
                            articleId: article.id,
                        },
                    });
                });
                return designSectionsAcc;
            }, []),
        );
        return acc;
    }, []);

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
    return {
        props: {
            sectionId: ctx.params?.sectionId,
            articleId: ctx.params?.articleId,
            ...(await getI18nProps(ctx, ['design-article', 'design-articles-info'])),
        },
    };
};

export const ArticlePage = ({sectionId, articleId}: {sectionId: string; articleId: string}) => {
    useLocaleRedirect();

    const {i18n} = useTranslation();

    const section = designSections.find((item) => item.id === sectionId);
    const article = section?.articles.find((item) => item.id === articleId);

    const windowBreakpoint = useWindowBreakpoint();
    const isMobile = windowBreakpoint < BREAKPOINTS.lg;

    if (!section || !article) {
        return null;
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
