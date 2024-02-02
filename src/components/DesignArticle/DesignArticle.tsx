import React, {useMemo} from 'react';

import {Article} from '../../content/design/types';
import {block} from '../../utils';
import {ArticleNavigation} from '../ArticleNavigation/ArticleNavigation';
import {MDXRenderer} from '../MDXRenderer/MDXRenderer';
import {Section} from '../NavigationLayout/types';

import './DesignArticle.scss';

const b = block('design-article');

export type DesignArticleProps = {
    article: Article;
    sectionId?: string;
    sections: Section[];
};

export const DesignArticle: React.FC<DesignArticleProps> = ({article, sectionId, sections}) => {
    const currentSection = useMemo(
        () => sections.find((item) => item.id === sectionId),
        [sectionId, sections],
    );

    const currentIndex = useMemo(() => {
        if (!currentSection || !currentSection.subSections) {
            return null;
        }
        return currentSection.subSections.findIndex((item) => item.id === article.id);
    }, [currentSection, article.id]);

    const nextSection = useMemo(() => {
        if (
            !currentSection ||
            !currentSection.subSections ||
            (!currentIndex && currentIndex !== 0)
        ) {
            return null;
        }
        const nextIndex = currentIndex + 1;
        if (nextIndex >= currentSection.subSections.length) {
            return null;
        }
        return currentSection.subSections[nextIndex];
    }, [currentIndex, currentSection]);

    const prevSection = useMemo(() => {
        if (
            !currentSection ||
            !currentSection.subSections ||
            (!currentIndex && currentIndex !== 0)
        ) {
            return null;
        }
        const prevIndex = currentIndex - 1;
        if (prevIndex < 0) {
            return null;
        }
        return currentSection.subSections[prevIndex];
    }, [currentIndex, currentSection]);

    return (
        <div className={b()}>
            <h1 className={b('title')}>{article.title}</h1>
            <MDXRenderer text={article.content} />
            <div className={b('navigation')}>
                <ArticleNavigation prevSection={prevSection} nextSection={nextSection} />
            </div>
        </div>
    );
};
