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
import {PreviewModeProvider} from 'src/components/UISamples/PreviewModeContext/PreviewModeContext';

import {block} from '../../../../utils';
import type {ThemePreviewMode} from '../../gallery';
import {useThemeCreator} from '../../hooks';
import {exportTheme, replaceRootToCustomClassName} from '../../lib/themeCreatorExport';
import {PreviewModeToggle} from '../PreviewModeToggle/PreviewModeToggle';

import './PreviewTab.scss';

const b = block('preview-tab');

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

interface PreviewTabProps {
    forcedPreviewMode?: ThemePreviewMode | null;
    onPreviewModeChange: (mode: ThemePreviewMode) => void;
}

export const PreviewTab: React.FC<PreviewTabProps> = ({
    forcedPreviewMode = null,
    onPreviewModeChange,
}) => {
    const {t} = useTranslation('themes');
    const themeState = useThemeCreator();

    const themeStyles = React.useMemo(() => {
        const fullStyles = exportTheme({
            themeState,
            ignoreDefaultValues: false,
        });

        return {
            previewWrapperStyles: replaceRootToCustomClassName(
                fullStyles,
                'gravity-ui-landing-themes-preview-wrapper',
            ),
            previewLayoutStyles: replaceRootToCustomClassName(
                fullStyles,
                'gravity-ui-landing-themes-preview-layout',
            ),
        };
    }, [themeState]);

    return (
        <PreviewModeProvider forcedMode={forcedPreviewMode} hideToggle>
            <Flex direction="column" gap={8}>
                <Flex className={b('heading-row')} alignItems="center" gap={3} wrap="wrap">
                    <Text variant="display-2">{t('title_ui-samples')}</Text>
                    <PreviewModeToggle
                        className={b('mode-toggle')}
                        value={forcedPreviewMode}
                        onChange={onPreviewModeChange}
                    />
                </Flex>
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
        </PreviewModeProvider>
    );
};
