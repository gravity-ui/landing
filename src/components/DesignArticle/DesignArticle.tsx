import {useTranslation} from 'next-i18next';
import React from 'react';

import {Article} from '../../content/design/types';
import {block, getLocale} from '../../utils';
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
    const {i18n, t} = useTranslation();
    const locale = getLocale(i18n.language);

    const currentSection = React.useMemo(
        () => sections.find((item) => item.id === sectionId),
        [sectionId, sections],
    );

    const currentIndex = React.useMemo(() => {
        if (!currentSection || !currentSection.subSections) {
            return null;
        }
        return currentSection.subSections.findIndex((item) => item.id === article.id);
    }, [currentSection, article.id]);

    const nextSection = React.useMemo(() => {
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

        const nextSubSection = currentSection.subSections[nextIndex];

        return nextSubSection.isComingSoon ? null : nextSubSection;
    }, [currentIndex, currentSection]);

    const prevSection = React.useMemo(() => {
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

        const prevSubSection = currentSection.subSections[prevIndex];

        return prevSubSection.isComingSoon ? null : prevSubSection;
    }, [currentIndex, currentSection]);

    return (
        <div className={b()}>
            <h1 className={b('title')}>
                {t(`design-articles-info:section_${sectionId}_article_${article.id}_title`)}
            </h1>
            <MDXRenderer
                key={`${sectionId}-${article.id}-${locale}-article`}
                text={article.content[locale]}
            />
            <div className={b('navigation')}>
                <ArticleNavigation prevSection={prevSection} nextSection={nextSection} />
            </div>
        </div>
    );
};
