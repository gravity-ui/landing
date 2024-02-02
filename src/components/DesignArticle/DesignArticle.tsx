import React from 'react';

import {Article} from '../../content/design/types';
import {block} from '../../utils';
import {MDXRenderer} from '../MDXRenderer/MDXRenderer';

import './DesignArticle.scss';

const b = block('design-article');

export type DesignArticleProps = {
    article: Article;
};

export const DesignArticle: React.FC<DesignArticleProps> = ({article}) => {
    return (
        <div className={b()}>
            <h1 className={b('title')}>{article.title}</h1>
            <div className={b('content')}>
                <MDXRenderer text={article.content} />
            </div>
        </div>
    );
};
