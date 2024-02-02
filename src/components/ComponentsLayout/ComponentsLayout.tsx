import React from 'react';

import {NavigationLayout, Section} from '../NavigationLayout/NavigationLayout';

export type ComponentsLayoutProps = {
    libId: string;
    componentId?: string;
    children?: React.ReactNode;
    sections: Section[];
};

export const ComponentsLayout: React.FC<ComponentsLayoutProps> = ({
    libId,
    componentId,
    children,
    sections,
}) => {
    return (
        <NavigationLayout
            sections={sections}
            mobileTitle="Components"
            searchPlaceholder="Search by component name"
            sectionId={libId}
            subSectionId={componentId}
        >
            {children}
        </NavigationLayout>
    );
};
