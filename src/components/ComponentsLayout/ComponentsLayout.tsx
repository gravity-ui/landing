import React, {useMemo} from 'react';

import {libs} from '../../content/components';
import {NavigationLayout, Section} from '../NavigationLayout/NavigationLayout';

export type ComponentsLayoutProps = {
    libId: string;
    componentId?: string;
    children?: React.ReactNode;
};

export const ComponentsLayout: React.FC<ComponentsLayoutProps> = ({
    libId,
    componentId,
    children,
}) => {
    const sections = useMemo<Section[]>(() => {
        return libs.map((lib) => ({
            id: lib.id,
            title: lib.title,
            url: `/components/${lib.id}`,
            subSections: lib.components.map((component) => ({
                id: component.id,
                title: component.title,
                url:
                    component.isComingSoon === true ? '#' : `/components/${lib.id}/${component.id}`,
                isComingSoon: component.isComingSoon,
            })),
        }));
    }, []);

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
