import {Xmark} from '@gravity-ui/icons';
import {BREAKPOINTS} from '@gravity-ui/page-constructor';
import {Button, Drawer, Icon, Text} from '@gravity-ui/uikit';
import React from 'react';

import {useWindowBreakpoint} from '../../../../hooks/useWindowBreakpoint';
import {block} from '../../../../utils';
import {featuredThemes} from '../../gallery';
import {ThemeCard} from '../ThemeCard/ThemeCard';

import './ThemeGalleryDrawer.scss';

const b = block('theme-gallery-drawer');

const DESKTOP_TITLE = 'Theme Gallery';
const DESKTOP_DESCRIPTION =
    'Thoughtful color systems, typography & radii from real projects. Pick, apply, customize.';
const COMPACT_TITLE = 'Browse and Apply Themes';
const MOBILE_DESCRIPTION =
    'Discover production-ready themes. Apply instantly or edit in Themisator';

const DRAWER_WIDTH_VAR = '--theme-gallery-drawer-width';
const DESKTOP_DRAWER_WIDTH_PX = 447;
const TABLET_DRAWER_HEIGHT_PX = 376;

export interface ThemeGalleryDrawerProps {
    open: boolean;
    onClose: () => void;
    activeThemeId?: string | null;
    onApplyTheme?: (id: string) => void;
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
    const isDesktop = breakpoint >= BREAKPOINTS.xl;
    const isTablet = breakpoint >= BREAKPOINTS.sm && breakpoint < BREAKPOINTS.xl;
    const isMobile = breakpoint < BREAKPOINTS.sm;

    const title = isDesktop ? DESKTOP_TITLE : COMPACT_TITLE;
    const description = isMobile ? MOBILE_DESCRIPTION : isDesktop ? DESKTOP_DESCRIPTION : null;
    const showAllThemesCta = !isTablet;

    const placement = isDesktop ? 'right' : 'bottom';
    const variant = isDesktop ? 'desktop' : isTablet ? 'tablet' : 'mobile';
    // Mobile height is overridden via CSS (`calc(100dvh - 64px)`) so this value is unused there.
    const size = isDesktop ? DESKTOP_DRAWER_WIDTH_PX : TABLET_DRAWER_HEIGHT_PX;

    React.useEffect(() => {
        if (!open || !isDesktop) {
            return undefined;
        }
        document.documentElement.style.setProperty(
            DRAWER_WIDTH_VAR,
            `${DESKTOP_DRAWER_WIDTH_PX}px`,
        );
        return () => {
            document.documentElement.style.removeProperty(DRAWER_WIDTH_VAR);
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
                    <Text variant={isTablet ? 'header-1' : 'subheader-1'} className={b('title')}>
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
                    <Button
                        view="outlined"
                        size="xl"
                        onClick={onOpenAllThemes}
                        className={b('all-themes-button')}
                    >
                        All Gallery Themes
                    </Button>
                )}
            </div>
        </Drawer>
    );
};
