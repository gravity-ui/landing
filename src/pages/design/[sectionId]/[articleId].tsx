// Support for default locale without path prefix
import {GetStaticPaths} from 'next';

import {ArticlePage, getStaticProps} from '../../../[locale]/design/[sectionId]/[articleId]';
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

export {ArticlePage, getStaticProps};

export default ArticlePage;
