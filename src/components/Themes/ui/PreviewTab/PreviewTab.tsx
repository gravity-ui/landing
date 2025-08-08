import {Flex, Text} from '@gravity-ui/uikit';
import {useTranslation} from 'next-i18next';
import React from 'react';
import {
    ApartmentCardPreview,
    CardsPreview,
    DashboardPreview,
    DashboardPreview2,
    FormPreview,
    KubernetesPreview,
    MailPreview,
    OsnPreview,
    PreviewLayout,
    TablePreview,
    TasksPreview,
} from 'src/components/UISamples';

import {useThemeCreator} from '../../hooks';
import {exportTheme} from '../../lib/themeCreatorExport';

const previewComponents = [
    {id: 'table', Component: TablePreview, title: 'Table', breadCrumbsItems: ['Table']},
    {
        id: 'form',
        Component: FormPreview,
        title: 'User edit',
        breadCrumbsItems: ['Table', 'User edit'],
    },
    {
        id: 'dashboard',
        Component: DashboardPreview,
        title: 'Dashboard',
        breadCrumbsItems: ['Dashboard'],
    },
    {id: 'cards', Component: CardsPreview, title: 'Cards', breadCrumbsItems: ['Cards']},
    {
        id: 'apartment',
        Component: ApartmentCardPreview,
        title: 'Apartment',
        blank: true,
    },
    {
        id: 'tasks',
        Component: TasksPreview,
        title: 'Tasks',
        blank: true,
    },
    {
        id: 'kubernetes',
        Component: KubernetesPreview,
        title: 'Kubernetes',
        blank: true,
    },
    {
        id: 'dashboard2',
        Component: DashboardPreview2,
        title: 'Dashboard',
        blank: true,
    },
    {
        id: 'mail',
        Component: MailPreview,
        title: 'Mail',
        blank: true,
    },
    {
        id: 'osn',
        Component: OsnPreview,
        title: 'Osn',
        blank: true,
    },
];

const replaceRootToCustom = (fullStyles: string, customRootClassName: string) => {
    return fullStyles
        .replace('.g-root {', `.g-root.${customRootClassName} {`)
        .replace('.g-root_theme_dark', `.g-root_theme_dark.${customRootClassName}_theme_dark`)
        .replace('.g-root_theme_light', `.g-root_theme_light.${customRootClassName}_theme_light`);
};

export const PreviewTab = () => {
    const {t} = useTranslation('themes');
    const themeState = useThemeCreator();

    const themeStyles = React.useMemo(() => {
        const fullStyles = exportTheme({
            themeState,
            ignoreDefaultValues: false,
        });

        return {
            previewWrapperStyles: replaceRootToCustom(
                fullStyles,
                'gravity-ui-landing-themes-preview-wrapper',
            ),
            previewLayoutStyles: replaceRootToCustom(
                fullStyles,
                'gravity-ui-landing-themes-preview-layout',
            ),
        };
    }, [themeState]);

    return (
        <Flex direction="column" gap={8}>
            <Text variant="display-2">{t('title_ui-samples')}</Text>
            <style>{themeStyles.previewLayoutStyles}</style>
            <style>{themeStyles.previewWrapperStyles}</style>

            {previewComponents.map(
                ({Component, title, breadCrumbsItems = [], id, blank}, index) => {
                    return blank ? (
                        <Component key={index} />
                    ) : (
                        <PreviewLayout
                            key={index}
                            id={id}
                            title={title}
                            breadCrumbsItems={breadCrumbsItems}
                        >
                            {(props) => <Component {...props} />}
                        </PreviewLayout>
                    );
                },
            )}
        </Flex>
    );
};
