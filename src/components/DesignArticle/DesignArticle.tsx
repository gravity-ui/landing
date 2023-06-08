import React from 'react';

import {sections} from '../../content/design';
import {block} from '../../utils';
import {MDXRenderer} from '../MDXRenderer/MDXRenderer';

import './DesignArticle.scss';

const b = block('design-article');

export type DesignArticleProps = {
    sectionId: string;
    articleId?: string;
};

export const DesignArticle: React.FC<DesignArticleProps> = ({sectionId, articleId}) => {
    const section = sections.find((item) => item.id === sectionId);
    const article = section?.articles.find((item) => item.id === articleId);

    if (!section || !article) {
        return null;
    }

    return (
        <div className={b()}>
            <h1 className={b('title')}>{article.title}</h1>
            <div className={b('content')}>
                <MDXRenderer text={article.content} />
            </div>
        </div>
    );
};
