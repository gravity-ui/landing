import {useTranslation} from 'next-i18next';
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
    const {t} = useTranslation();

    return (
        <NavigationLayout
            sections={sections}
            mobileTitle={t('component:title')}
            searchPlaceholder={t('component:searchPlaceholder')}
            sectionId={libId}
            subSectionId={componentId}
        >
            {children}
        </NavigationLayout>
    );
};
