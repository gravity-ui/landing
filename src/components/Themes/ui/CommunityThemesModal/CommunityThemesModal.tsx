import {Xmark} from '@gravity-ui/icons';
import {BREAKPOINTS} from '@gravity-ui/page-constructor';
import {Button, Dialog, Icon, Text} from '@gravity-ui/uikit';
import React from 'react';

import {useWindowBreakpoint} from '../../../../hooks/useWindowBreakpoint';
import {block} from '../../../../utils';
import type {ThemePreviewMode} from '../../gallery';
import {allThemes} from '../../gallery';
import {ThemeCard} from '../ThemeCard/ThemeCard';

import './CommunityThemesModal.scss';

const b = block('community-themes-modal');

const TITLE = 'Community Themes';
const FOOTER_TITLE = "Don't see anything you like?";
const FOOTER_BODY =
    'Adjust one from the gallery, import your CSS, or start designing from scratch — complete freedom.';

export interface CommunityThemesModalProps {
    open: boolean;
    onClose: () => void;
    activeThemeId?: string | null;
    onApplyTheme: (id: string, mode: ThemePreviewMode) => void;
    onImportTheme: () => void;
    onStartFromScratch: () => void;
}

export const CommunityThemesModal: React.FC<CommunityThemesModalProps> = ({
    open,
    onClose,
    activeThemeId = null,
    onApplyTheme,
    onImportTheme,
    onStartFromScratch,
}) => {
    const breakpoint = useWindowBreakpoint();
    let variant: 'desktop' | 'tablet' | 'mobile' = 'tablet';
    if (breakpoint >= BREAKPOINTS.xl) {
        variant = 'desktop';
    } else if (breakpoint < BREAKPOINTS.sm) {
        variant = 'mobile';
    }

    // The landing scrolls inside `.layout__wrapper`, not on <body>, so
    // uikit's body scroll-lock doesn't reach it and the underlying page
    // keeps scrolling alongside the modal's own scroll area. Lock the
    // wrapper for the modal's lifetime to avoid the double-scroll feel.
    React.useEffect(() => {
        if (!open) {
            return undefined;
        }
        const wrapper = document.getElementsByClassName('gravity-ui-landing-layout__wrapper')[0] as
            | HTMLElement
            | undefined;
        if (!wrapper) {
            return undefined;
        }
        const previousOverflow = wrapper.style.overflow;
        wrapper.style.overflow = 'hidden';
        return () => {
            wrapper.style.overflow = previousOverflow;
        };
    }, [open]);

    return (
        <Dialog
            open={open}
            onClose={onClose}
            hasCloseButton={false}
            className={b({variant})}
            modalClassName={b('modal', {variant})}
            // `contentOverflow="auto"` makes uikit's `.g-modal__content`
            // scroll, which stacks with our own `__scroll-area`. Keep it
            // `visible` so the inner scroll-area is the only scroll
            // container — no double scrollbar.
            contentOverflow="visible"
            aria-label={TITLE}
        >
            <div className={b('layout')}>
                <div className={b('header')}>
                    <Text variant="header-1" className={b('title')}>
                        {TITLE}
                    </Text>
                    <Button
                        view="flat"
                        size="m"
                        onClick={onClose}
                        className={b('close-button')}
                        aria-label="Close community themes"
                    >
                        <Button.Icon>
                            <Icon data={Xmark} size={16} />
                        </Button.Icon>
                    </Button>
                </div>
                <div className={b('scroll-area')}>
                    <div className={b('cards')}>
                        {allThemes.map((theme) => (
                            <ThemeCard
                                key={theme.id}
                                metadata={theme}
                                selected={theme.id === activeThemeId}
                                onApply={onApplyTheme}
                                className={b('card')}
                            />
                        ))}
                    </div>
                    <div className={b('footer')}>
                        <div className={b('footer-text')}>
                            <Text variant="display-2" className={b('footer-title')}>
                                {FOOTER_TITLE}
                            </Text>
                            <Text variant="body-1" className={b('footer-body')}>
                                {FOOTER_BODY}
                            </Text>
                        </div>
                        <div className={b('footer-actions')}>
                            <Button view="outlined-action" size="xl" onClick={onStartFromScratch}>
                                Start From Scratch
                            </Button>
                            <Button view="outlined" size="xl" onClick={onImportTheme}>
                                Import Theme
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Dialog>
    );
};
