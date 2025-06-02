'use client';
import {Flex} from '@gravity-ui/uikit';
import {useTranslation} from 'next-i18next';
import React, {useMemo, useState} from 'react';
import {Tags} from 'src/components/Tags/Tags';
import {
    ApartmentCardPreview,
    DashboardPreview2,
    KubernetesPreview,
    MailPreview,
    OsnPreview,
    PreviewLayout,
    TablePreview,
    TasksPreview,
} from 'src/components/UISamples';

enum SampleTab {
    Dashboard = 'Dashboard',
    HotelBooking = 'HotelBooking',
    Listing = 'Listing',
    TaskTracker = 'TaskTracker',
    Kubernetes = 'Kubernetes',
    Osn = 'Osn',
    Mail = 'Mail',
}

function useSampleComponent(tab: SampleTab) {
    const {t} = useTranslation('home');

    if (tab === SampleTab.Listing) {
        return {
            id: 'table',
            Component: TablePreview,
            title: t('ui_samples_table_tab'),
            breadCrumbsItems: ['Table'],
        };
    }

    if (tab === SampleTab.Dashboard) {
        return {
            id: 'dashboard',
            Component: DashboardPreview2,
            title: t('ui_samples_dashboard_tab'),
            breadCrumbsItems: ['Dashboard'],
        };
    }

    if (tab === SampleTab.Kubernetes) {
        return {
            id: 'kubernetes',
            Component: KubernetesPreview,
            title: t('ui_samples_kubernetes_tab'),
            blank: true,
        };
    }

    if (tab === SampleTab.Osn) {
        return {
            id: 'osn',
            Component: OsnPreview,
            title: t('ui_samples_osn_tab'),
            blank: true,
        };
    }

    if (tab === SampleTab.Mail) {
        return {
            id: 'mail',
            Component: MailPreview,
            title: t('ui_samples_mail_tab'),
            blank: true,
        };
    }

    if (tab === SampleTab.TaskTracker) {
        return {
            id: 'task-tracker',
            Component: TasksPreview,
            title: t('ui_samples_task_tracker_tab'),
            blank: true,
        };
    }

    return {
        id: 'apartment',
        Component: ApartmentCardPreview,
        title: t('ui_samples_apartment_tab'),
        blank: true,
    };
}

export const UISamplesDesktop = () => {
    const {t} = useTranslation('home');
    const [activeTab, setActiveTab] = useState<SampleTab>(SampleTab.Dashboard);

    const tags = useMemo(
        () => [
            {
                value: SampleTab.Dashboard,
                title: t('ui_samples_dashboard_tab'),
            },
            {
                value: SampleTab.HotelBooking,
                title: t('ui_samples_apartment_tab'),
            },
            {
                value: SampleTab.Listing,
                title: t('ui_samples_table_tab'),
            },
            {
                value: SampleTab.TaskTracker,
                title: t('ui_samples_task_tracker_tab'),
            },
            {
                value: SampleTab.Kubernetes,
                title: t('ui_samples_kubernetes_tab'),
            },
            {
                value: SampleTab.Osn,
                title: t('ui_samples_osn_tab'),
            },
            {
                value: SampleTab.Mail,
                title: t('ui_samples_mail_tab'),
            },
        ],
        [],
    );

    const {Component, id, title, blank, breadCrumbsItems} = useSampleComponent(activeTab);

    return (
        <Flex direction="column" gap={8}>
            <Tags value={activeTab} onChange={setActiveTab} items={tags} />
            {blank ? (
                <Component />
            ) : (
                <PreviewLayout id={id} title={title} breadCrumbsItems={breadCrumbsItems ?? []}>
                    {(props) => <Component {...props} />}
                </PreviewLayout>
            )}
        </Flex>
    );
};
