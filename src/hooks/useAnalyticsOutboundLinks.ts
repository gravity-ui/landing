import {useEffect} from 'react';

import {type AnalyticsAction, sendAnalyticsEvent} from '../utils/analytics';

// GitHub and Figma links are scattered across page-constructor content, docs and MDX,
// so we catch them with a single delegated listener instead of per-component onClick handlers.
const getOutboundEvent = (url: URL): {action: AnalyticsAction; label: string} | null => {
    const host = url.hostname.replace(/^www\./, '');

    if (host === 'github.com') {
        const label = url.pathname.split('/').filter(Boolean).slice(0, 2).join('/');
        return {action: 'github_click', label};
    }

    if (host === 'figma.com') {
        return {action: 'figma_open', label: url.pathname};
    }

    return null;
};

const handleLinkClick = (event: MouseEvent) => {
    // auxclick: count only the middle button (opening in a new tab)
    if (event.type === 'auxclick' && event.button !== 1) {
        return;
    }

    const target = event.target as Element | null;
    const anchor = target?.closest?.('a[href]');
    const href = anchor?.getAttribute('href');

    if (!href) {
        return;
    }

    let url: URL;
    try {
        url = new URL(href, window.location.href);
    } catch {
        return;
    }

    const outboundEvent = getOutboundEvent(url);

    if (outboundEvent) {
        sendAnalyticsEvent(outboundEvent.action, outboundEvent.label);
    }
};

export const useAnalyticsOutboundLinks = () => {
    useEffect(() => {
        // capture phase — so the event is not lost to stopPropagation in components
        document.addEventListener('click', handleLinkClick, true);
        document.addEventListener('auxclick', handleLinkClick, true);

        return () => {
            document.removeEventListener('click', handleLinkClick, true);
            document.removeEventListener('auxclick', handleLinkClick, true);
        };
    }, []);
};
