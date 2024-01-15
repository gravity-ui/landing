import {GetStaticPaths, GetStaticProps} from 'next';
import {useRouter} from 'next/router';
import {useCallback, useMemo} from 'react';
import {Section} from 'src/components/NavigationLayout/types';
import {CONTENT_WRAPPER_ID} from 'src/constants';

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
    const router = useRouter();
    const section = designSections.find((item) => item.id === sectionId);
    const article = section?.articles.find((item) => item.id === articleId);

    if (!section || !article) {
        return null;
    }

    const sections = useMemo<Section[]>(() => {
        const result: Section[] = designSections.map((section) => ({
            id: section.id,
            title: section.title,
            // Uncomment it to show overview tab
            // url: `/design/${section.id}`,
            subSections: section.articles.map((article) => ({
                id: article.id,
                title: article.title,
                url: `/design/${section.id}/${article.id}`,
            })),
        }));
        return result;
    }, []);

    const currentSection = useMemo(
        () => sections.find((item) => item.id === sectionId),
        [sectionId, sections],
    );

    const currentIndex = useMemo(() => {
        if (!currentSection) {
            return null;
        }
        return currentSection.subSections.findIndex((item) => item.id === articleId);
    }, [currentSection, articleId]);

    const nextSection = useMemo(() => {
        if (!currentSection) {
            return null;
        }
        const nextIndex = (currentIndex + 1) % currentSection.subSections.length;
        return currentSection.subSections[nextIndex];
    }, [currentIndex, currentSection]);

    const prevSection = useMemo(() => {
        if (!currentSection) {
            return null;
        }
        const prevIndex =
            (currentIndex - 1 + currentSection.subSections.length) %
            currentSection.subSections.length;
        return currentSection.subSections[prevIndex];
    }, [currentIndex, currentSection]);

    const scrollTop = useCallback(() => {
        const content = document.getElementById(CONTENT_WRAPPER_ID);
        if (content) {
            content.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        }
    }, []);

    const onNextHandler = () => {
        router.push(nextSection.url);
        scrollTop();
    };

    const onPrevHandler = () => {
        router.push(prevSection.url);
        scrollTop();
    };

    return (
        <Layout title={`${section.title} – ${article.title}`}>
            <DesignLayout sections={sections} sectionId={sectionId} articleId={articleId}>
                <DesignArticle
                    article={article}
                    articleId={articleId}
                    prevHandler={onPrevHandler}
                    nextHandler={onNextHandler}
                    previousTitle={prevSection.title}
                    nextTitle={nextSection.title}
                />
            </DesignLayout>
        </Layout>
    );
};

export default ArticlePage;
