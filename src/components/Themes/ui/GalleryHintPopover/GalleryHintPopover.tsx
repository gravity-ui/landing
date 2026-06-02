import type {PopoverInstanceProps} from '@gravity-ui/uikit/legacy';
import {Popover, PopoverBehavior} from '@gravity-ui/uikit/legacy';
import React from 'react';

import {block} from '../../../../utils';

import './GalleryHintPopover.scss';

const STORAGE_KEY = 'gravity-ui-landing-themes:gallery-hint-dismissed';
const b = block('gallery-hint-popover');

interface GalleryHintPopoverProps {
    anchorRef: React.RefObject<HTMLElement>;
}

export const GalleryHintPopover: React.FC<GalleryHintPopoverProps> = ({anchorRef}) => {
    const popoverRef = React.useRef<PopoverInstanceProps>(null);

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
        const scrollContainer = document.getElementsByClassName(
            'gravity-ui-landing-layout__wrapper',
        )[0] as HTMLElement | undefined;
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
        scrollTarget.addEventListener('scroll', handleScroll, {once: true, passive: true});
        document.addEventListener('pointerdown', handlePointerDown, true);
        return () => {
            scrollTarget.removeEventListener('scroll', handleScroll);
            document.removeEventListener('pointerdown', handlePointerDown, true);
        };
    }, [dismiss]);

    return (
        <Popover
            ref={popoverRef}
            anchorRef={anchorRef}
            behavior={PopoverBehavior.Immediate}
            placement="bottom-start"
            theme="special"
            hasClose
            onCloseClick={dismiss}
            tooltipClassName={b()}
            title="New Feature"
            content="Switch basic themes instantly and discover more in the Designer Gallery"
            tooltipActionButton={{text: 'Got it', onClick: dismiss}}
        >
            <span aria-hidden="true" />
        </Popover>
    );
};
