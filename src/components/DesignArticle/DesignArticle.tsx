import React from 'react';

import {Article} from '../../content/design/types';
import {block} from '../../utils';
import {ArticleNavigations} from '../ArticleNavigations/index';
import {MDXRenderer} from '../MDXRenderer/MDXRenderer';

import './DesignArticle.scss';

const b = block('design-article');

export type DesignArticleProps = {
    article: Article;
    articleId?: string;
    previousTitle: string;
    nextTitle: string;
    nextHandler: () => void;
    prevHandler: () => void;
};

export const DesignArticle: React.FC<DesignArticleProps> = ({
    article,
    previousTitle,
    nextTitle,
    nextHandler,
    prevHandler,
}) => {
    return (
        <div className={b()}>
            <h1 className={b('title')}>{article.title}</h1>
            <div className={b('content')}>
                <MDXRenderer text={article.content} />
            </div>
            <ArticleNavigations
                prevHandler={prevHandler}
                nextHandler={nextHandler}
                previousTitle={previousTitle}
                nextTitle={nextTitle}
            />
        </div>
    );
};
