import {useTranslation} from 'next-i18next';
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
    const {t} = useTranslation();

    return (
        <NavigationLayout
            sections={sections}
            mobileTitle={t('design-article:title')}
            searchPlaceholder={t('design-article:searchPlaceholder')}
            sectionId={sectionId}
            subSectionId={articleId}
        >
            {children}
        </NavigationLayout>
    );
};
