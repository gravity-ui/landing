import {GetStaticPaths, GetStaticProps} from 'next';

import {DesignArticle} from '../../../components/DesignArticle/DesignArticle';
import {DesignLayout} from '../../../components/DesignLayout/DesignLayout';
import {Layout} from '../../../components/Layout/Layout';
import {sections} from '../../../content/design';

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: sections.reduce<{params: {sectionId: string; articleId: string}}[]>(
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
    const section = sections.find((item) => item.id === sectionId);
    const article = section?.articles.find((item) => item.id === articleId);

    if (!section || !article) {
        return null;
    }

    return (
        <Layout title={`${section.title} – ${article.title}`}>
            <DesignLayout sectionId={sectionId} articleId={articleId}>
                <DesignArticle sectionId={sectionId} articleId={articleId} />
            </DesignLayout>
        </Layout>
    );
};

export default ArticlePage;
