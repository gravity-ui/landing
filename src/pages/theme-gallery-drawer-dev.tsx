import {Button, Flex, Text} from '@gravity-ui/uikit';
import {parseJSON} from '@gravity-ui/uikit-themer';
import type {GetServerSideProps} from 'next';
import React from 'react';

import {Layout} from '../components/Layout/Layout';
import {loadThemePayload} from '../components/Themes/gallery';
import {useThemeCreator, useThemeCreatorMethods} from '../components/Themes/hooks';
import {DEFAULT_THEME} from '../components/Themes/lib/constants';
import {
    exportTheme,
    replaceRootToCustomClassName,
} from '../components/Themes/lib/themeCreatorExport';
import {ThemeCreatorContextProvider} from '../components/Themes/ui/ThemeCreatorContextProvider';
import {ThemeGalleryDrawer} from '../components/Themes/ui/ThemeGalleryDrawer';
import {getI18nProps} from '../utils/i18next';

const PREVIEW_CLASS = 'theme-gallery-drawer-dev-preview';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    return {
        props: {
            ...(await getI18nProps(ctx)),
        },
    };
};

const wrapperStyle: React.CSSProperties = {
    padding: '24px',
    background: 'var(--g-color-base-background)',
    minHeight: '100vh',
    paddingInlineEnd: 'calc(24px + var(--theme-gallery-drawer-width, 0px))',
    transition: 'padding-inline-end 0.25s ease',
};

const sampleSurfaceStyle: React.CSSProperties = {
    marginTop: '24px',
    padding: '20px',
    borderRadius: '12px',
    border: '1px solid var(--g-color-line-generic)',
    background: 'var(--g-color-base-float)',
};

const DrawerDevContent = () => {
    const themeState = useThemeCreator();
    const {importTheme} = useThemeCreatorMethods();
    const [open, setOpen] = React.useState(false);
    const [activeThemeId, setActiveThemeId] = React.useState<string | null>(null);
    const [lastApplied, setLastApplied] = React.useState<string | null>(null);

    const handleApplyTheme = React.useCallback(
        async (id: string) => {
            try {
                const payload = await loadThemePayload(id);
                const gravityTheme = parseJSON(payload);
                importTheme(gravityTheme);
                setActiveThemeId(id);
                setLastApplied(id);
            } catch (e) {
                // eslint-disable-next-line no-console
                console.error('Failed to apply theme', id, e);
            }
        },
        [importTheme],
    );

    const previewStyles = React.useMemo(() => {
        const css = exportTheme({themeState, ignoreDefaultValues: false});
        return replaceRootToCustomClassName(css, PREVIEW_CLASS);
    }, [themeState]);

    const [mounted, setMounted] = React.useState(false);
    React.useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div style={wrapperStyle}>
            {mounted && <style>{previewStyles}</style>}
            <Flex direction="column" gap={4}>
                <Text variant="header-1">ThemeGalleryDrawer — dev preview</Text>
                <Text variant="body-2" color="secondary">
                    Resize the browser to 1280 / 768 / 414 to see the three Figma variants. Apply a
                    theme to verify the brand color changes on the sample surface below.
                </Text>
                <Flex gap={3} alignItems="center">
                    <Button view="action" size="l" onClick={() => setOpen(true)}>
                        Open theme gallery
                    </Button>
                    <Text variant="body-1" color="secondary">
                        Last applied: {lastApplied ?? 'none'}
                    </Text>
                </Flex>
                <div className={PREVIEW_CLASS} style={sampleSurfaceStyle}>
                    <Flex direction="column" gap={3}>
                        <Text variant="subheader-2">Sample surface</Text>
                        <Text variant="body-2" color="secondary">
                            The button below uses --g-color-base-brand. Apply a theme from the
                            drawer to watch the brand color update live.
                        </Text>
                        <Flex gap={3} alignItems="center">
                            <Button view="action" size="l">
                                Brand action
                            </Button>
                            <Button view="outlined-action" size="l">
                                Brand outlined
                            </Button>
                        </Flex>
                    </Flex>
                </div>
            </Flex>
            <ThemeGalleryDrawer
                open={open}
                onClose={() => setOpen(false)}
                activeThemeId={activeThemeId}
                onApplyTheme={handleApplyTheme}
                onOpenAllThemes={() => {
                    // eslint-disable-next-line no-alert
                    alert('All Gallery Themes — opens Community Modal in Stage 5');
                }}
            />
        </div>
    );
};

export const ThemeGalleryDrawerDevPage = () => {
    return (
        <Layout title="ThemeGalleryDrawer Dev" showOnlyContent>
            <ThemeCreatorContextProvider initialTheme={DEFAULT_THEME}>
                <DrawerDevContent />
            </ThemeCreatorContextProvider>
        </Layout>
    );
};

export default ThemeGalleryDrawerDevPage;
