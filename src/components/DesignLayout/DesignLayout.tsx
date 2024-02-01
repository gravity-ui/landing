import React from 'react';

import {NavigationLayout, Section} from '../NavigationLayout/NavigationLayout';

export type DesignLayoutProps = {
    sectionId: string;
    articleId?: string;
    children?: React.ReactNode;
    sections: Section[];
};

export const DesignLayout: React.FC<DesignLayoutProps> = ({
    sectionId,
    articleId,
    children,
    sections,
}) => {
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
