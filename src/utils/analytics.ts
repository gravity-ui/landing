import {IS_PRODUCTION} from '../constants';

declare global {
    interface Window {
        dataLayer?: any[];
    }
}

export type AnalyticsAction =
    | 'install_copy'
    | 'theme_export'
    | 'icon_download'
    | 'github_click'
    | 'figma_open'
    | 'start_creating_view'
    | 'prompt_copy'
    | 'howto_start_click'
    | 'tab_switch';

// Единый канал аналитики: событие `cta` уходит в dataLayer, откуда GTM
// раскладывает его в GA4 (event = cta_action) и Метрику (reachGoal(cta_action)).
export const sendAnalyticsEvent = (action: AnalyticsAction, label?: string) => {
    if (typeof window === 'undefined') {
        return;
    }

    if (!IS_PRODUCTION) {
        console.info(`[Analytics] ${action}`, label ?? '');
        return;
    }

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        event: 'cta',
        cta_action: action,
        cta_label: label ?? '',
    });
};
