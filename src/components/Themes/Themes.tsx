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

import {block} from '../../utils';
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

enum ThemeTab {
    Colors = 'colors',
    Typography = 'typography',
    BorderRadius = 'borderRadius',
    Preview = 'preview',
}

// PreviewTab is rendered explicitly because it has required props; the
// lookup covers the prop-less tabs.
const tabToComponent: Partial<Record<ThemeTab, React.ComponentType>> = {
    [ThemeTab.Colors]: ColorsTab,
    [ThemeTab.Typography]: TypographyTab,
    [ThemeTab.BorderRadius]: BorderRadiusTab,
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
    const firstSwatchRef = useRef<HTMLButtonElement>(null);

    const [isExportDialogVisible, setIsExportDialogVisible] = useState(false);
    const [isImportDialogVisible, setIsImportDialogVisible] = useState(false);
    const [galleryDrawerOpen, setGalleryDrawerOpen] = useState(false);
    const [communityModalOpen, setCommunityModalOpen] = useState(false);
    const [activeThemeId, setActiveThemeId] = useState<string | null>(null);
    const [activePresetIndex, setActivePresetIndex] = useState<number | null>(null);
    const [pendingApply, setPendingApply] = useState<PendingApply | null>(null);
    const [forcedPreviewMode, setForcedPreviewMode] = useState<ThemePreviewMode | null>(null);

    const openExportDialog = useCallback(() => setIsExportDialogVisible(true), []);
    const closeExportDialog = useCallback(() => setIsExportDialogVisible(false), []);
    const openImportDialog = useCallback(() => setIsImportDialogVisible(true), []);
    const closeImportDialog = useCallback(() => setIsImportDialogVisible(false), []);

    const showThemeImportedToast = useCallback(() => {
        addToast({
            name: 'theme-imported',
            title: 'Theme imported',
            content:
                'Your theme has been successfully applied. Explore and configure, then export.',
            theme: 'success',
            autoHiding: 5000,
        });
    }, [addToast]);

    const performApplyPreset = useCallback(
        (preset: BrandPreset, index: number) => {
            applyBrandPreset(preset);
            setActivePresetIndex(index);
            setActiveThemeId(null);
            setForcedPreviewMode(null);
            showThemeImportedToast();
        },
        [applyBrandPreset, showThemeImportedToast],
    );

    const performApplyTheme = useCallback(
        async (id: string, mode: ThemePreviewMode) => {
            try {
                const payload = await loadThemePayload(id);
                const gravityTheme = normalizeImportedTheme(parseJSON(payload));
                importTheme(gravityTheme);
                setActiveThemeId(id);
                setActivePresetIndex(null);
                setForcedPreviewMode(mode);
                setCommunityModalOpen(false);
                setGalleryDrawerOpen(false);
                showThemeImportedToast();
            } catch (error) {
                // eslint-disable-next-line no-console
                console.error('Failed to apply theme', id, error);
            }
        },
        [importTheme, showThemeImportedToast],
    );

    const handleStartFromScratch = useCallback(() => {
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
        ],
        [t],
    );

    useEffect(() => {
        const contentEl = document.getElementsByClassName(
            'gravity-ui-landing-layout__wrapper',
        )?.[0] as HTMLElement | undefined;

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
            document.documentElement.style.setProperty(
                '--themes-main-menu-height',
                `${menuHeight}px`,
            );
        };
        updateMenuHeight();
        window.addEventListener('resize', updateMenuHeight);

        const visibleClass = b('sticky-bar_visible');
        let stuck = false;

        const onScroll = () => {
            const stickyBar = stickyBarRef.current;
            if (!stickyBar) {
                return;
            }
            const shouldStick = contentEl.scrollTop > 136;
            if (shouldStick && !stuck) {
                stickyBar.classList.add(visibleClass);
                document.documentElement.style.setProperty(
                    '--themes-sticky-header-height',
                    `${stickyBar.getBoundingClientRect().height}px`,
                );
                stuck = true;
            } else if (!shouldStick && stuck) {
                stickyBar.classList.remove(visibleClass);
                document.documentElement.style.removeProperty('--themes-sticky-header-height');
                stuck = false;
            }
        };

        contentEl.addEventListener('scroll', onScroll);

        return () => {
            contentEl.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', updateMenuHeight);
            document.documentElement.style.removeProperty('--themes-sticky-header-height');
            document.documentElement.style.removeProperty('--themes-main-menu-height');
        };
    }, []);

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

    const ThemeActionsButtons = useCallback(
        () => (
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
        ),
        [openImportDialog, openExportDialog, t],
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
                <ThemeActionsButtons />
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
                <div className={b('header-actions-wrapper')}>{renderHeaderRow()}</div>
                <div className={b('sticky-bar')} ref={stickyBarRef}>
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
                        onOpenGallery={() => setGalleryDrawerOpen(true)}
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
                onOpenAllThemes={() => setCommunityModalOpen(true)}
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
                <Dialog.Header caption="Unsaved changes will be lost" />
                <Dialog.Body>
                    <Text>
                        Are you sure you want to continue? Your modifications to this theme
                        won&apos;t be saved.
                    </Text>
                </Dialog.Body>
                <Dialog.Footer
                    onClickButtonCancel={cancelPendingApply}
                    onClickButtonApply={confirmPendingApply}
                    textButtonApply="Yes, continue"
                    textButtonCancel="Cancel"
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
