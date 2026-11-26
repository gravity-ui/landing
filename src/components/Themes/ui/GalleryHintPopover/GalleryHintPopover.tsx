import {BREAKPOINTS} from '@gravity-ui/page-constructor';
import type {PopoverInstanceProps} from '@gravity-ui/uikit/legacy';
import {Popover, PopoverBehavior} from '@gravity-ui/uikit/legacy';
import {useTranslation} from 'next-i18next';
import React from 'react';

import {useWindowBreakpoint} from '../../../../hooks/useWindowBreakpoint';
import {block, getContentScrollElement} from '../../../../utils';

import './GalleryHintPopover.scss';

const STORAGE_KEY = 'gravity-ui-landing-themes:gallery-hint-dismissed';
const b = block('gallery-hint-popover');

interface GalleryHintPopoverProps {
    anchorRef: React.RefObject<HTMLElement>;
}

export const GalleryHintPopover: React.FC<GalleryHintPopoverProps> = ({anchorRef}) => {
    const {t} = useTranslation('themes');
    const popoverRef = React.useRef<PopoverInstanceProps>(null);
    const isMobile = useWindowBreakpoint() < BREAKPOINTS.sm;

    const dismiss = React.useCallback(() => {
        popoverRef.current?.closeTooltip();
        try {
            window.localStorage.setItem(STORAGE_KEY, '1');
        } catch {
            // first-visit hint just won't persist; not worth surfacing
        }
    }, []);

    React.useEffect(() => {
        let dismissed = false;
        try {
            dismissed = window.localStorage.getItem(STORAGE_KEY) === '1';
        } catch {
            // ignore — show the hint
        }
        if (dismissed) {
            return undefined;
        }
        popoverRef.current?.openTooltip();
        // Per Figma annotation 3011:94619: the hint auto-dismisses on any
        // user action — scroll, click outside the popover, link click,
        // button press, etc. Scroll listener also covers the visual
        // overlap with the semi-transparent landing nav (blur quirk).
        //
        // Not on touch, though: a phone scrolls on the way to the bar, so the
        // hint vanished before it could be read. There a tap dismisses it,
        // which is the same "any user action" intent minus the accidental
        // trigger.
        const scrollContainer = getContentScrollElement();
        const scrollTarget = scrollContainer ?? window;
        const handleScroll = () => {
            dismiss();
        };
        // Click-anywhere dismiss: any pointer interaction outside the
        // popover's own bubble closes the hint. Legacy Popover renders
        // via a portal as `.g-popup` containing `.g-popover-legacy__...`;
        // matching either keeps clicks inside the tooltip from
        // triggering the dismiss.
        const handlePointerDown = (event: MouseEvent) => {
            const target = event.target as Element | null;
            if (target?.closest('.g-popup, [class*="g-popover-legacy"]')) {
                return;
            }
            dismiss();
        };
        if (!isMobile) {
            scrollTarget.addEventListener('scroll', handleScroll, {once: true, passive: true});
        }
        document.addEventListener('pointerdown', handlePointerDown, true);
        return () => {
            scrollTarget.removeEventListener('scroll', handleScroll);
            document.removeEventListener('pointerdown', handlePointerDown, true);
        };
    }, [dismiss, isMobile]);

    return (
        <Popover
            ref={popoverRef}
            anchorRef={anchorRef}
            behavior={PopoverBehavior.Immediate}
            // The hint is anchored to the first swatch. Opening downwards on a
            // phone drops the bubble straight onto the rest of the swatch row,
            // so it covered the very colors it is advertising; flip it above
            // the row there.
            placement={isMobile ? 'top-start' : 'bottom-start'}
            theme="special"
            hasClose
            onCloseClick={dismiss}
            tooltipClassName={b()}
            title={t('gallery_hint_title')}
            content={t('gallery_hint_content')}
            tooltipActionButton={{text: t('gallery_hint_action'), onClick: dismiss}}
        >
            <span aria-hidden="true" />
        </Popover>
    );
};
