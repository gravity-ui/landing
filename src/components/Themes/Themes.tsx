import {ArrowUpFromSquare} from '@gravity-ui/icons';
import {Grid} from '@gravity-ui/page-constructor';
import {
    Button,
    Dialog,
    Flex,
    Icon,
    Text,
    Toaster,
    ToasterComponent,
    ToasterProvider,
    useToaster,
} from '@gravity-ui/uikit';
import {parseJSON} from '@gravity-ui/uikit-themer';
import {useTranslation} from 'next-i18next';
import dynamic from 'next/dynamic';
import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {ThemeExport} from 'src/components/Themes/ui/ThemeExport/ThemeExport';

import {CONTENT_WRAPPER_ID} from '../../constants';
import {block} from '../../utils';
import {CustomScrollbar} from '../CustomScrollbar';
import {TagItem, Tags} from '../Tags/Tags';

import './Themes.scss';
import type {ThemePreviewMode} from './gallery';
import {loadThemePayload} from './gallery';
import {useThemeCreator, useThemeCreatorMethods} from './hooks';
import {DEFAULT_THEME} from './lib/constants';
import type {BrandPreset} from './lib/constants';
import {normalizeImportedTheme} from './lib/normalizeImportedTheme';
import {BorderRadiusTab} from './ui/BorderRadiusTab/BorderRadiusTab';
import {ColorsTab} from './ui/ColorsTab/ColorsTab';
import {CommunityThemesModal} from './ui/CommunityThemesModal';
import {GalleryHintPopover} from './ui/GalleryHintPopover/GalleryHintPopover';
import {PreviewModeToggle} from './ui/PreviewModeToggle/PreviewModeToggle';
import {SpecificTab} from './ui/SpecificTab/SpecificTab';
import {ThemeCreatorContextProvider} from './ui/ThemeCreatorContextProvider';
import {ThemeGalleryDrawer} from './ui/ThemeGalleryDrawer';
import {ThemeImport} from './ui/ThemeImport/ThemeImport';
import {ThemePlaygroundBar} from './ui/ThemePlaygroundBar/ThemePlaygroundBar';
import {TypographyTab} from './ui/TypographyTab/TypographyTab';

// PreviewTab renders heavy UISamples that aren't SSR-safe in the current
// uikit/navigation stack — one of the descendant components resolves to
// `undefined` during server render. Load it client-only so Preview can be
// the default tab without crashing the page.
const PreviewTab = dynamic(
    () => import('./ui/PreviewTab/PreviewTab').then((mod) => mod.PreviewTab),
    {ssr: false},
);

const b = block('themes');

const MAIN_MENU_HEIGHT_VAR = '--themes-main-menu-height';
const STICKY_HEADER_HEIGHT_VAR = '--themes-sticky-header-height';

enum ThemeTab {
    Colors = 'colors',
    Typography = 'typography',
    BorderRadius = 'borderRadius',
    Specific = 'specific',
    Preview = 'preview',
}

// PreviewTab is rendered explicitly because it has required props; the
// lookup covers the prop-less tabs.
const tabToComponent: Partial<Record<ThemeTab, React.ComponentType>> = {
    [ThemeTab.Colors]: ColorsTab,
    [ThemeTab.Typography]: TypographyTab,
    [ThemeTab.BorderRadius]: BorderRadiusTab,
    [ThemeTab.Specific]: SpecificTab,
};

type PendingApply =
    | {type: 'preset'; preset: BrandPreset; index: number}
    | {type: 'theme'; id: string; mode: ThemePreviewMode};

const ThemesContent = () => {
    const {t} = useTranslation('themes');

    const themeCreator = useThemeCreator();
    const {importTheme, applyBrandPreset} = useThemeCreatorMethods();
    const {add: addToast} = useToaster();

    const stickyBarRef = useRef<HTMLDivElement>(null);
    const headerRowRef = useRef<HTMLDivElement>(null);
    const firstSwatchRef = useRef<HTMLButtonElement>(null);
    // Bumped on every apply so a slower-resolving theme load can't overwrite a
    // more recent selection (last-click-wins instead of last-resolve-wins).
    const applyGenerationRef = useRef(0);

    const [isExportDialogVisible, setIsExportDialogVisible] = useState(false);
    const [isImportDialogVisible, setIsImportDialogVisible] = useState(false);
    const [galleryDrawerOpen, setGalleryDrawerOpen] = useState(false);
    const [communityModalOpen, setCommunityModalOpen] = useState(false);
    const [activeThemeId, setActiveThemeId] = useState<string | null>(null);
    // DEFAULT_THEME is built from DEFAULT_BRAND_COLORS[0], i.e. the first
    // preset is already applied to the samples on load — mark it as selected
    // so the swatch row matches what the page actually shows.
    const [activePresetIndex, setActivePresetIndex] = useState<number | null>(0);
    const [pendingApply, setPendingApply] = useState<PendingApply | null>(null);
    const [isStickyBarVisible, setStickyBarVisible] = useState(false);
    const [forcedPreviewMode, setForcedPreviewMode] = useState<ThemePreviewMode | null>(null);

    const openExportDialog = useCallback(() => setIsExportDialogVisible(true), []);
    const closeExportDialog = useCallback(() => setIsExportDialogVisible(false), []);
    const openImportDialog = useCallback(() => setIsImportDialogVisible(true), []);
    const closeImportDialog = useCallback(() => setIsImportDialogVisible(false), []);

    const showThemeImportedToast = useCallback(() => {
        addToast({
            name: 'theme-imported',
            title: t('gallery_toast_imported_title'),
            content: t('gallery_toast_imported_content'),
            theme: 'success',
            autoHiding: 5000,
        });
    }, [addToast, t]);

    const showThemeApplyErrorToast = useCallback(() => {
        addToast({
            name: 'theme-apply-error',
            title: t('gallery_toast_error_title'),
            content: t('gallery_toast_error_content'),
            theme: 'danger',
            autoHiding: 5000,
        });
    }, [addToast, t]);

    const performApplyPreset = useCallback(
        (preset: BrandPreset, index: number) => {
            // Invalidate any in-flight theme load so it can't overwrite this preset.
            applyGenerationRef.current += 1;
            applyBrandPreset(preset);
            setActivePresetIndex(index);
            setActiveThemeId(null);
            setForcedPreviewMode(null);
            // No toast here: switching a swatch is an instant local preview,
            // nothing was imported — the "Theme imported" toast only belongs
            // to applying a gallery theme.
        },
        [applyBrandPreset],
    );

    const performApplyTheme = useCallback(
        async (id: string, mode: ThemePreviewMode) => {
            const generation = (applyGenerationRef.current += 1);
            try {
                const payload = await loadThemePayload(id);
                // A newer apply happened while this load was in flight — drop it.
                if (generation !== applyGenerationRef.current) {
                    return;
                }
                const gravityTheme = normalizeImportedTheme(parseJSON(payload));
                importTheme(gravityTheme);
                setActiveThemeId(id);
                setActivePresetIndex(null);
                setForcedPreviewMode(mode);
                setCommunityModalOpen(false);
                // The drawer stays open on purpose: applying a theme is meant
                // to be tried on, so the user can keep picking from the list.
                showThemeImportedToast();
            } catch (error) {
                if (generation !== applyGenerationRef.current) {
                    return;
                }
                // eslint-disable-next-line no-console
                console.error('Failed to apply theme', id, error);
                showThemeApplyErrorToast();
            }
        },
        [importTheme, showThemeImportedToast, showThemeApplyErrorToast],
    );

    const handleStartFromScratch = useCallback(() => {
        applyGenerationRef.current += 1;
        setCommunityModalOpen(false);
        importTheme(DEFAULT_THEME);
        setActiveThemeId(null);
        setActivePresetIndex(null);
        setForcedPreviewMode(null);
    }, [importTheme]);

    const handleImportFromModal = useCallback(() => {
        setCommunityModalOpen(false);
        setIsImportDialogVisible(true);
    }, []);

    const handleSelectPreset = useCallback(
        (preset: BrandPreset, index: number) => {
            if (themeCreator.changesExist) {
                setPendingApply({type: 'preset', preset, index});
            } else {
                performApplyPreset(preset, index);
            }
        },
        [themeCreator.changesExist, performApplyPreset],
    );

    const handleApplyTheme = useCallback(
        (id: string, mode: ThemePreviewMode) => {
            if (themeCreator.changesExist) {
                setPendingApply({type: 'theme', id, mode});
            } else {
                performApplyTheme(id, mode);
            }
        },
        [themeCreator.changesExist, performApplyTheme],
    );

    const confirmPendingApply = useCallback(() => {
        if (!pendingApply) {
            return;
        }
        if (pendingApply.type === 'preset') {
            performApplyPreset(pendingApply.preset, pendingApply.index);
        } else {
            performApplyTheme(pendingApply.id, pendingApply.mode);
        }
        setPendingApply(null);
    }, [pendingApply, performApplyPreset, performApplyTheme]);

    const cancelPendingApply = useCallback(() => setPendingApply(null), []);

    const tags: TagItem<ThemeTab>[] = useMemo(
        () => [
            {value: ThemeTab.Preview, title: t('tags_preview')},
            {value: ThemeTab.Colors, title: t('tags_colors')},
            {value: ThemeTab.Typography, title: t('tags_typography')},
            {value: ThemeTab.BorderRadius, title: t('tags_borderRadius')},
            {value: ThemeTab.Specific, title: t('tags_specific')},
        ],
        [t],
    );

    useEffect(() => {
        const contentEl = document.getElementById(CONTENT_WRAPPER_ID);

        if (!contentEl) {
            return undefined;
        }

        // The landing-wide menu is sticky-pinned to viewport top with its own
        // z-index. Measure its bottom edge so the Theme Gallery drawer can
        // permanently sit beneath it, and the sticky tabs+button bar can pin
        // right under it on scroll. Re-measure on resize because the menu's
        // height changes between breakpoints (mobile hamburger vs full nav).
        const updateMenuHeight = () => {
            const menuHeight = contentEl.getBoundingClientRect().top;
            document.documentElement.style.setProperty(MAIN_MENU_HEIGHT_VAR, `${menuHeight}px`);
        };
        updateMenuHeight();
        window.addEventListener('resize', updateMenuHeight);

        const onScroll = () => {
            const headerRow = headerRowRef.current;
            if (!headerRow) {
                return;
            }
            // Hand over to the sticky bar exactly when the in-flow header row
            // starts sliding under the menu. Measured from the row itself, so
            // a taller title (longer copy, another locale) shifts the hand-off
            // along with it instead of desyncing from a hardcoded offset.
            const rowOffset =
                headerRow.getBoundingClientRect().top -
                contentEl.getBoundingClientRect().top +
                contentEl.scrollTop;
            setStickyBarVisible(contentEl.scrollTop > rowOffset);
        };
        onScroll();

        contentEl.addEventListener('scroll', onScroll, {passive: true});

        return () => {
            contentEl.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', updateMenuHeight);
            document.documentElement.style.removeProperty(MAIN_MENU_HEIGHT_VAR);
        };
    }, []);

    // The drawer sits below the sticky bar, so it needs the bar's height as a
    // CSS variable. Kept in sync with a ResizeObserver: the bar wraps to two
    // rows on narrow viewports, and a one-off measurement taken at the moment
    // of sticking would leave the drawer offset stale after a resize.
    useEffect(() => {
        const stickyBar = stickyBarRef.current;
        if (!stickyBar || !isStickyBarVisible) {
            document.documentElement.style.removeProperty(STICKY_HEADER_HEIGHT_VAR);
            return undefined;
        }
        const updateHeight = () => {
            document.documentElement.style.setProperty(
                STICKY_HEADER_HEIGHT_VAR,
                `${stickyBar.getBoundingClientRect().height}px`,
            );
        };
        updateHeight();
        const observer = new ResizeObserver(updateHeight);
        observer.observe(stickyBar);
        return () => {
            observer.disconnect();
            document.documentElement.style.removeProperty(STICKY_HEADER_HEIGHT_VAR);
        };
    }, [isStickyBarVisible]);

    const [activeTab, setActiveTab] = useState<ThemeTab>(ThemeTab.Preview);

    const TabComponent = tabToComponent[activeTab];

    let tabContent: React.ReactNode = null;
    if (activeTab === ThemeTab.Preview) {
        tabContent = (
            <PreviewTab
                forcedPreviewMode={forcedPreviewMode}
                onPreviewModeChange={setForcedPreviewMode}
            />
        );
    } else if (TabComponent) {
        tabContent = <TabComponent />;
    }

    // Plain render helper, not a component: declaring a component inside the
    // render body makes its identity depend on the memo and remounts both
    // buttons whenever the deps change.
    const renderThemeActionsButtons = () => (
        <CustomScrollbar axis="horizontal">
            <Flex direction="row" gap={2}>
                <Button
                    className={b('theme-action-btn')}
                    view="outlined-action"
                    size="xl"
                    onClick={openImportDialog}
                >
                    <Text>{t('btn_import_theme')}</Text>
                </Button>
                <Button
                    className={b('theme-action-btn')}
                    view="action"
                    size="xl"
                    onClick={openExportDialog}
                >
                    <Icon data={ArrowUpFromSquare} />
                    <Text>{t('btn_export_theme')}</Text>
                </Button>
            </Flex>
        </CustomScrollbar>
    );

    const renderHeaderRow = () => (
        <Flex className={b('header-actions')}>
            <Tags
                className={b('tags')}
                items={tags}
                value={activeTab}
                onChange={setActiveTab}
                wrap="nowrap"
            />
            <div className={b('header-action-buttons')}>
                <PreviewModeToggle
                    className={b('sticky-mode-toggle')}
                    value={forcedPreviewMode}
                    onChange={setForcedPreviewMode}
                />
                {renderThemeActionsButtons()}
            </div>
        </Flex>
    );

    return (
        <>
            <div className={b('content-wrapper')}>
                <div className={b('title')}>
                    <Text className={b('title__text')}>{t('title')}</Text>
                    <Text className={b('title__subtitle')} variant="body-2">
                        {t('subtitle')}
                    </Text>
                </div>
                <div className={b('header-actions-wrapper')} ref={headerRowRef}>
                    {renderHeaderRow()}
                </div>
                <div className={b('sticky-bar', {visible: isStickyBarVisible})} ref={stickyBarRef}>
                    {renderHeaderRow()}
                </div>

                {/* Always mounted so the background image stays decoded and
                    visible the instant the user comes back to the Preview tab
                    — toggling visibility via CSS instead of unmount/remount
                    avoids the load-flash on every tab switch. */}
                <div
                    className={b('playground-bar-wrapper', {
                        hidden: activeTab !== ThemeTab.Preview,
                    })}
                >
                    <ThemePlaygroundBar
                        activePresetIndex={activePresetIndex}
                        onSelectPreset={handleSelectPreset}
                        onOpenGallery={() => setGalleryDrawerOpen((open) => !open)}
                        firstSwatchRef={firstSwatchRef}
                    />
                    <GalleryHintPopover anchorRef={firstSwatchRef} />
                </div>

                <Grid className={b('grid')}>
                    <div className={b('grid__content')}>{tabContent}</div>
                </Grid>
            </div>

            <ThemeExport isOpen={isExportDialogVisible} onClose={closeExportDialog} />
            <ThemeImport isOpen={isImportDialogVisible} onClose={closeImportDialog} />
            <ThemeGalleryDrawer
                open={galleryDrawerOpen}
                onClose={() => setGalleryDrawerOpen(false)}
                activeThemeId={activeThemeId}
                onApplyTheme={handleApplyTheme}
                onOpenAllThemes={() => {
                    setGalleryDrawerOpen(false);
                    setCommunityModalOpen(true);
                }}
            />
            <CommunityThemesModal
                open={communityModalOpen}
                onClose={() => setCommunityModalOpen(false)}
                activeThemeId={activeThemeId}
                onApplyTheme={handleApplyTheme}
                onImportTheme={handleImportFromModal}
                onStartFromScratch={handleStartFromScratch}
            />
            <Dialog open={pendingApply !== null} onClose={cancelPendingApply} size="s">
                <Dialog.Header caption={t('gallery_unsaved_title')} />
                <Dialog.Body>
                    <Text>{t('gallery_unsaved_body')}</Text>
                </Dialog.Body>
                <Dialog.Footer
                    onClickButtonCancel={cancelPendingApply}
                    onClickButtonApply={confirmPendingApply}
                    textButtonApply={t('gallery_unsaved_confirm')}
                    textButtonCancel={t('gallery_unsaved_cancel')}
                />
            </Dialog>
        </>
    );
};

export const Themes = () => {
    const [toaster] = useState(() => new Toaster());

    return (
        <ToasterProvider toaster={toaster}>
            <ThemeCreatorContextProvider initialTheme={DEFAULT_THEME}>
                <ThemesContent />
            </ThemeCreatorContextProvider>
            <ToasterComponent />
        </ToasterProvider>
    );
};
