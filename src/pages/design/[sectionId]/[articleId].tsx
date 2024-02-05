import {GetStaticPaths, GetStaticProps} from 'next';
import {useMemo} from 'react';
import {Section} from 'src/components/NavigationLayout/types';

import {DesignArticle} from '../../../components/DesignArticle/DesignArticle';
import {DesignLayout} from '../../../components/DesignLayout/DesignLayout';
import {Layout} from '../../../components/Layout/Layout';
import {sections as designSections} from '../../../content/design';

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: designSections.reduce<{params: {sectionId: string; articleId: string}}[]>(
            (acc, section) => {
                section.articles.forEach((article) => {
                    acc.push({params: {sectionId: section.id, articleId: article.id}});
                });
                return acc;
            },
            [],
        ),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: {sectionId: context.params?.sectionId, articleId: context.params?.articleId},
    };
};

export const ArticlePage = ({sectionId, articleId}: {sectionId: string; articleId: string}) => {
    const section = designSections.find((item) => item.id === sectionId);
    const article = section?.articles.find((item) => item.id === articleId);

    if (!section || !article) {
        return null;
    }

    const sections = useMemo<Section[]>(() => {
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
