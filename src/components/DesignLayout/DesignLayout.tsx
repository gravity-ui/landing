import React, {useMemo} from 'react';

import {sections as designSections} from '../../content/design';
import {NavigationLayout, Section} from '../NavigationLayout/NavigationLayout';

export type DesignLayoutProps = {
    sectionId: string;
    articleId?: string;
    children?: React.ReactNode;
};

export const DesignLayout: React.FC<DesignLayoutProps> = ({sectionId, articleId, children}) => {
    const sections = useMemo<Section[]>(() => {
        const result: Section[] = designSections.map((section) => ({
            id: section.id,
            title: section.title,
            url: `/design/${section.id}`,
            subSections: section.articles.map((article) => ({
                id: article.id,
                title: article.title,
                url: `/design/${section.id}/${article.id}`,
            })),
        }));
        return result;
    }, []);

    return (
        <NavigationLayout
            sections={sections}
            mobileTitle="Design"
            searchPlaceholder="Search by articles"
            sectionId={sectionId}
            subSectionId={articleId}
        >
            {children}
        </NavigationLayout>
    );
};
