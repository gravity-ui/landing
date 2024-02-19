import {GetStaticPaths} from 'next';

import {sections as designSections} from '../../../content/design';
import {ArticlePage, getStaticProps} from '../../[locale]/design/[sectionId]/[articleId]';

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
