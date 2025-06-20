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

export const PreviewTab = () => {
    const {t} = useTranslation('themes');
    const themeState = useThemeCreator();

    const themeStyles = React.useMemo(
        () => exportTheme({themeState, ignoreDefaultValues: false}),
        [themeState],
    );
    return (
        <Flex direction="column" gap={8}>
            <Text variant="display-2">{t('title_ui-samples')}</Text>

            {previewComponents.map(
                ({Component, title, breadCrumbsItems = [], id, blank}, index) => {
                    return blank ? (
                        <Component key={index} styles={themeStyles} />
                    ) : (
                        <PreviewLayout
                            key={index}
                            id={id}
                            title={title}
                            breadCrumbsItems={breadCrumbsItems}
                            styles={themeStyles}
                        >
                            {(props) => <Component {...props} />}
                        </PreviewLayout>
                    );
                },
            )}
        </Flex>
    );
};
