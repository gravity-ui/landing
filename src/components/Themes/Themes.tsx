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
import {loadThemePayload} from './gallery';
import {useThemeCreator, useThemeCreatorMethods} from './hooks';
import {DEFAULT_THEME} from './lib/constants';
import type {BrandPreset} from './lib/constants';
import {BorderRadiusTab} from './ui/BorderRadiusTab/BorderRadiusTab';
import {ColorsTab} from './ui/ColorsTab/ColorsTab';
import {CommunityThemesModal} from './ui/CommunityThemesModal';
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

const tabToComponent: Record<ThemeTab, React.ComponentType | undefined> = {
    [ThemeTab.Colors]: ColorsTab,
    [ThemeTab.Typography]: TypographyTab,
    [ThemeTab.BorderRadius]: BorderRadiusTab,
    [ThemeTab.Preview]: PreviewTab,
};

type PendingApply =
    | {type: 'preset'; preset: BrandPreset; index: number}
    | {type: 'theme'; id: string};

const ThemesContent = () => {
    const {t} = useTranslation('themes');

    const themeCreator = useThemeCreator();
    const {importTheme, applyBrandPreset} = useThemeCreatorMethods();
    const {add: addToast} = useToaster();

    const headerRef = useRef<HTMLDivElement>(null);

    const [isExportDialogVisible, setIsExportDialogVisible] = useState(false);
    const [isImportDialogVisible, setIsImportDialogVisible] = useState(false);
    const [galleryDrawerOpen, setGalleryDrawerOpen] = useState(false);
    const [communityModalOpen, setCommunityModalOpen] = useState(false);
    const [activeThemeId, setActiveThemeId] = useState<string | null>(null);
    const [activePresetIndex, setActivePresetIndex] = useState<number | null>(null);
    const [pendingApply, setPendingApply] = useState<PendingApply | null>(null);

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
            showThemeImportedToast();
        },
        [applyBrandPreset, showThemeImportedToast],
    );

    const performApplyTheme = useCallback(
        async (id: string) => {
            try {
                const payload = await loadThemePayload(id);
                const gravityTheme = parseJSON(payload);
                importTheme(gravityTheme);
                setActiveThemeId(id);
                setActivePresetIndex(null);
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
        (id: string) => {
            if (themeCreator.changesExist) {
                setPendingApply({type: 'theme', id});
            } else {
                performApplyTheme(id);
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
            performApplyTheme(pendingApply.id);
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
        )?.[0];

        if (!contentEl) {
            return;
        }

        const onScroll = () => {
            if (headerRef?.current?.offsetTop && headerRef.current.offsetTop > 136) {
                headerRef.current?.classList.add(b('header-actions-wrapper_sticky'));
            } else {
                headerRef.current?.classList.remove(b('header-actions-wrapper_sticky'));
            }
        };

        contentEl.addEventListener('scroll', onScroll);

        return () => {
            contentEl.removeEventListener('scroll', onScroll);
        };
    }, []);

    const [activeTab, setActiveTab] = useState<ThemeTab>(ThemeTab.Preview);

    const TabComponent = tabToComponent[activeTab];

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

    return (
        <>
            <div className={b('content-wrapper')}>
                <div className={b('title')}>
                    <Text className={b('title__text')}>{t('title')}</Text>
                </div>
                <div className={b('header-actions-wrapper')} ref={headerRef}>
                    <Flex className={b('header-actions')}>
                        <Tags
                            className={b('tags')}
                            items={tags}
                            value={activeTab}
                            onChange={setActiveTab}
                            wrap="nowrap"
                        />
                        <div className={b('header-action-buttons', 'desktop')}>
                            <ThemeActionsButtons />
                        </div>
                    </Flex>
                </div>

                <div className={b('header-action-buttons', 'mobile')}>
                    <ThemeActionsButtons />
                </div>

                <div className={b('playground-bar-wrapper')}>
                    <ThemePlaygroundBar
                        activePresetIndex={activePresetIndex}
                        onSelectPreset={handleSelectPreset}
                        onOpenGallery={() => setGalleryDrawerOpen(true)}
                    />
                </div>

                <Grid className={b('grid')}>
                    <div className={b('grid__content')}>
                        {TabComponent ? <TabComponent /> : null}
                    </div>
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
