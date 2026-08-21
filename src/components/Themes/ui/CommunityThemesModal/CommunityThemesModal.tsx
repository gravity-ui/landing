import {Xmark} from '@gravity-ui/icons';
import {BREAKPOINTS} from '@gravity-ui/page-constructor';
import {Button, Dialog, Icon, Text} from '@gravity-ui/uikit';
import {useTranslation} from 'next-i18next';
import React from 'react';

import {CONTENT_WRAPPER_ID} from '../../../../constants';
import {useWindowBreakpoint} from '../../../../hooks/useWindowBreakpoint';
import {block} from '../../../../utils';
import type {ThemePreviewMode} from '../../gallery';
import {allThemes} from '../../gallery';
import {ThemeCard} from '../ThemeCard/ThemeCard';

import './CommunityThemesModal.scss';

const b = block('community-themes-modal');

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
    const {t} = useTranslation('themes');
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
        const wrapper = document.getElementById(CONTENT_WRAPPER_ID);
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
            aria-label={t('gallery_modal_title')}
        >
            <div className={b('layout')}>
                <div className={b('header')}>
                    <Text variant="header-1" className={b('title')}>
                        {t('gallery_modal_title')}
                    </Text>
                    <Button
                        view="flat"
                        size="m"
                        onClick={onClose}
                        className={b('close-button')}
                        aria-label={t('gallery_modal_close_aria')}
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
                                {t('gallery_modal_footer_title')}
                            </Text>
                            <Text variant="body-1" className={b('footer-body')}>
                                {t('gallery_modal_footer_body')}
                            </Text>
                        </div>
                        <div className={b('footer-actions')}>
                            <Button view="outlined-action" size="xl" onClick={onStartFromScratch}>
                                {t('gallery_modal_start_from_scratch')}
                            </Button>
                            <Button view="outlined" size="xl" onClick={onImportTheme}>
                                {t('gallery_modal_import_theme')}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Dialog>
    );
};
