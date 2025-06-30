import {useTranslation} from 'next-i18next';
import {useMemo} from 'react';
import {
    ApartmentCardPreview,
    DashboardPreview2,
    KubernetesPreview,
    MailPreview,
    OsnPreview,
    TablePreview,
    TasksPreview,
} from 'src/components/UISamples';

import dashboardImage from '../../assets/ui-samples/card-dashboard.jpg';
import hotelBookingImage from '../../assets/ui-samples/card-hotel-booking.jpg';
import kubernetesImage from '../../assets/ui-samples/card-kubernetes.jpg';
import listingImage from '../../assets/ui-samples/card-listing.jpg';
import mailImage from '../../assets/ui-samples/card-mail.jpg';
import osnImage from '../../assets/ui-samples/card-osn.jpg';
import taskTrackerImage from '../../assets/ui-samples/card-task-tracker.jpg';

export enum SampleComponent {
    Dashboard = 'Dashboard',
    HotelBooking = 'HotelBooking',
    Listing = 'Listing',
    TaskTracker = 'TaskTracker',
    Kubernetes = 'Kubernetes',
    Osn = 'Osn',
    Mail = 'Mail',
}

export const useSampleComponents = () => {
    const {t} = useTranslation('home');

    return useMemo(
        () => [
            {
                type: SampleComponent.Dashboard,
                imagePreviewSrc: dashboardImage.src,
                Component: DashboardPreview2,
                title: t('ui_samples_dashboard_tab'),
                breadCrumbsItems: ['Dashboard'],
                blank: true,
            },
            {
                type: SampleComponent.HotelBooking,
                imagePreviewSrc: hotelBookingImage.src,
                Component: ApartmentCardPreview,
                title: t('ui_samples_apartment_tab'),
                blank: true,
            },
            {
                type: SampleComponent.Listing,
                imagePreviewSrc: listingImage.src,
                Component: TablePreview,
                title: t('ui_samples_table_tab'),
                breadCrumbsItems: ['Table'],
            },
            {
                type: SampleComponent.TaskTracker,
                imagePreviewSrc: taskTrackerImage.src,
                Component: TasksPreview,
                title: t('ui_samples_task_tracker_tab'),
                blank: true,
            },
            {
                type: SampleComponent.Kubernetes,
                imagePreviewSrc: kubernetesImage.src,
                Component: KubernetesPreview,
                title: t('ui_samples_kubernetes_tab'),
                blank: true,
            },
            {
                type: SampleComponent.Osn,
                imagePreviewSrc: osnImage.src,
                Component: OsnPreview,
                title: t('ui_samples_osn_tab'),
                blank: true,
            },
            {
                type: SampleComponent.Mail,
                imagePreviewSrc: mailImage.src,
                Component: MailPreview,
                title: t('ui_samples_mail_tab'),
                blank: true,
            },
        ],
        [t],
    );
};
