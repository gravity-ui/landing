import {Xmark} from '@gravity-ui/icons';
import {BREAKPOINTS} from '@gravity-ui/page-constructor';
import {Button, Drawer, Icon, Text} from '@gravity-ui/uikit';
import React from 'react';

import {useWindowBreakpoint} from '../../../../hooks/useWindowBreakpoint';
import {block} from '../../../../utils';
import type {ThemePreviewMode} from '../../gallery';
import {featuredThemes} from '../../gallery';
import {ThemeCard} from '../ThemeCard/ThemeCard';

import './ThemeGalleryDrawer.scss';

const useMatchMedia = (query: string): boolean => {
    const subscribe = React.useCallback(
        (callback: () => void) => {
            const mql = window.matchMedia(query);
            mql.addEventListener('change', callback);
            return () => mql.removeEventListener('change', callback);
        },
        [query],
    );
    return React.useSyncExternalStore(
        subscribe,
        () => window.matchMedia(query).matches,
        () => false,
    );
};

const b = block('theme-gallery-drawer');

const DESKTOP_TITLE = 'Theme Gallery';
const DESKTOP_DESCRIPTION =
    'Thoughtful color systems, typography & radii from real projects. Pick, apply, customize.';
const COMPACT_TITLE = 'Browse and Apply Themes';
const MOBILE_DESCRIPTION =
    'Discover production-ready themes. Apply instantly or edit in Themisator';

const DRAWER_WIDTH_VAR = '--theme-gallery-drawer-width';
const SCROLLBAR_WIDTH_VAR = '--theme-gallery-page-scrollbar-width';
const DESKTOP_DRAWER_WIDTH_PX = 447;
const TABLET_DRAWER_HEIGHT_PX = 376;
// page-constructor's JS `BREAKPOINTS` stops at xl=1185 — `BREAKPOINTS.xxl`
// is `undefined`, so any comparison against it silently returns false.
// Mirror the SCSS `$gridBreakpoints.xxl` value here so the desktop cutoff
// uses the same threshold the layout media queries do.
const XXL_BREAKPOINT_PX = 1248;

export interface ThemeGalleryDrawerProps {
    open: boolean;
    onClose: () => void;
    activeThemeId?: string | null;
    onApplyTheme?: (id: string, mode: ThemePreviewMode) => void;
    onOpenAllThemes?: () => void;
}

export const ThemeGalleryDrawer: React.FC<ThemeGalleryDrawerProps> = ({
    open,
    onClose,
    activeThemeId = null,
    onApplyTheme,
    onOpenAllThemes,
}) => {
    const breakpoint = useWindowBreakpoint();
    // page-constructor's hook returns at most xl=1185 (its BREAKPOINTS map
    // tops out there), so we can't ask it about >= xxl. Track the xxl
    // threshold via matchMedia directly.
    const isDesktop = useMatchMedia(`(min-width: ${XXL_BREAKPOINT_PX}px)`);
    const isMobile = breakpoint < BREAKPOINTS.sm;
    const isTablet = !isDesktop && !isMobile;

    const title = isDesktop ? DESKTOP_TITLE : COMPACT_TITLE;
    const description = isMobile ? MOBILE_DESCRIPTION : isDesktop ? DESKTOP_DESCRIPTION : null;
    // Figma 3325:119973 / 3325:124927 places the "All Gallery Themes"
    // CTA as the last card-sized slot at the end of the tablet drawer's
    // horizontal scroll; desktop renders it under the card stack and
    // mobile under the vertical column.
    const showAllThemesCta = true;

    const placement = isDesktop ? 'right' : 'bottom';
    const variant = isDesktop ? 'desktop' : isTablet ? 'tablet' : 'mobile';
    // Mobile height is overridden via CSS (`calc(100dvh - 64px)`) so this value is unused there.
    const size = isDesktop ? DESKTOP_DRAWER_WIDTH_PX : TABLET_DRAWER_HEIGHT_PX;

    React.useEffect(() => {
        if (!open || !isDesktop) {
            return undefined;
        }
        // Reserve only the panel width. Inner elements already carry a 40px
        // right gutter (gridContainerOffsets), which lands the visible text
        // 20px before the drawer's left edge after the drawer's own 20px
        // viewport-margin is folded in. Subtract the wrapper's scrollbar so
        // the visible gap stays exact regardless of OS scrollbar width.
        const wrapper = document.getElementsByClassName(
            'gravity-ui-landing-layout__wrapper',
        )?.[0] as HTMLElement | undefined;
        const scrollbar = wrapper ? wrapper.offsetWidth - wrapper.clientWidth : 0;
        // Reserve the full drawer width (no scrollbar subtraction) — the
        // drawer panel's right inset is pushed past the scrollbar via
        // SCROLLBAR_WIDTH_VAR, which shifts its left edge inward by the
        // same amount. The padding-inline-end on content-wrapper has to
        // match so the visible content-to-drawer gap stays unchanged.
        document.documentElement.style.setProperty(
            DRAWER_WIDTH_VAR,
            `${DESKTOP_DRAWER_WIDTH_PX}px`,
        );
        // Expose the page-scrollbar width so the drawer's right inset can
        // sit beyond the scrollbar instead of being half-covered by it.
        document.documentElement.style.setProperty(SCROLLBAR_WIDTH_VAR, `${scrollbar}px`);
        return () => {
            document.documentElement.style.removeProperty(DRAWER_WIDTH_VAR);
            document.documentElement.style.removeProperty(SCROLLBAR_WIDTH_VAR);
        };
    }, [open, isDesktop]);

    const handleOpenChange = (next: boolean) => {
        if (!next) {
            onClose();
        }
    };

    return (
        <Drawer
            open={open}
            onOpenChange={handleOpenChange}
            placement={placement}
            size={size}
            hideVeil
            className={b({placement, variant})}
            aria-label={title}
        >
            <div className={b('action-bar')}>
                <div className={b('header-text')}>
                    <Text variant="header-1" className={b('title')}>
                        {title}
                    </Text>
                    {description && (
                        <Text variant="body-1" className={b('description')}>
                            {description}
                        </Text>
                    )}
                </div>
                <Button
                    view="flat"
                    size="m"
                    onClick={onClose}
                    className={b('close-button')}
                    aria-label="Close theme gallery"
                >
                    <Button.Icon>
                        <Icon data={Xmark} size={16} />
                    </Button.Icon>
                </Button>
            </div>
            <div className={b('scroll-area')}>
                <div className={b('cards')}>
                    {featuredThemes.map((theme) => (
                        <ThemeCard
                            key={theme.id}
                            metadata={theme}
                            selected={theme.id === activeThemeId}
                            onApply={onApplyTheme}
                            className={b('card')}
                        />
                    ))}
                </div>
                {showAllThemesCta && (
                    <div className={b('all-themes-cta')}>
                        <Button
                            view="outlined"
                            size="xl"
                            onClick={onOpenAllThemes}
                            className={b('all-themes-button')}
                        >
                            All Gallery Themes
                        </Button>
                    </div>
                )}
            </div>
        </Drawer>
    );
};
