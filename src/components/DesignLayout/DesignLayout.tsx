import React, {useMemo} from 'react';

import {libs} from '../../content/components';
import {sections as designSections} from '../../content/design';
import {NavigationLayout, Section, SubSection} from '../NavigationLayout/NavigationLayout';

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

        const componentsSubSections = libs.reduce<SubSection[]>((acc, lib) => {
            acc.push(
                ...lib.components
                    .filter((component) => Boolean(component.content.design))
                    .map((component) => ({
                        id: component.id,
                        title: component.title,
                        url: `/components/${lib.id}/${component.id}?tabId=design`,
                    })),
            );
            return acc;
        }, []);

        if (componentsSubSections.length > 0) {
            result.push({
                id: '__components',
                title: 'Components',
                subSections: componentsSubSections,
            });
        }

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
