import {useEffect} from 'react';
import {type Metric, onCLS, onFCP, onINP, onLCP, onTTFB} from 'web-vitals';

import {IS_PRODUCTION} from '../constants';

declare global {
    interface Window {
        dataLayer?: any[];
    }
}

const sendToGoogleAnalytics = (metric: Metric) => {
    if (typeof window !== 'undefined') {
        if (!IS_PRODUCTION) {
            console.info(`[Web Vitals] ${metric.name}: ${metric.value}`);
            return;
        }

        if (window.dataLayer) {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                event: 'web-vitals',
                event_category: 'Web Vitals',
                event_action: metric.name,
                event_label: metric.id,
                event_value: metric.value,
                non_interaction: true,
            });
        }
    }
};

const reportWebVitals = (): void => {
    // Core Web Vitals
    onCLS((data) => sendToGoogleAnalytics(data));
    onLCP((data) => sendToGoogleAnalytics(data));

    // Others metriks
    onINP((data) => sendToGoogleAnalytics(data));
    onFCP((data) => sendToGoogleAnalytics(data));
    onTTFB((data) => sendToGoogleAnalytics(data));
};

export const useReportWebVitals = () => {
    return useEffect(() => {
        reportWebVitals();
    }, []);
};
