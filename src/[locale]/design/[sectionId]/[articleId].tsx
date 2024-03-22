import {GetStaticPaths, GetStaticPathsResult, GetStaticProps} from 'next';
import React from 'react';
import {Section} from 'src/components/NavigationLayout/types';

import {DesignArticle} from '../../../components/DesignArticle/DesignArticle';
import {DesignLayout} from '../../../components/DesignLayout/DesignLayout';
import {Layout} from '../../../components/Layout/Layout';
import {sections as designSections} from '../../../content/design';
import {useLocaleRedirect} from '../../../hooks/useLocaleRedirect';
import {getI18nPaths, getI18nProps} from '../../../utils/i18next';

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
            ...(await getI18nProps(ctx, ['design-article'])),
        },
    };
};

export const ArticlePage = ({sectionId, articleId}: {sectionId: string; articleId: string}) => {
    useLocaleRedirect();

    const section = designSections.find((item) => item.id === sectionId);
    const article = section?.articles.find((item) => item.id === articleId);

    if (!section || !article) {
        return null;
    }

    const sections = React.useMemo<Section[]>(() => {
        const result: Section[] = designSections.map(({id, title, articles}) => ({
            id: id,
            title: title,
            // Uncomment it to show overview tab
            // url: `/design/${section.id}`,
            subSections: articles.map((articleItem) => ({
                id: articleItem.id,
                title: articleItem.title,
                url: `/design/${id}/${articleItem.id}`,
            })),
        }));
        return result;
    }, []);

    return (
        <Layout title={`${section.title} – ${article.title}`}>
            <DesignLayout sections={sections} sectionId={sectionId} articleId={articleId}>
                <DesignArticle article={article} sectionId={sectionId} sections={sections} />
            </DesignLayout>
        </Layout>
    );
};

export default ArticlePage;
