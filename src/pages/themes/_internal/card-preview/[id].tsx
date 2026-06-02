import {type GravityTheme, parseJSON} from '@gravity-ui/uikit-themer';
import {GetServerSideProps} from 'next';
import Head from 'next/head';
import {useRouter} from 'next/router';
import React from 'react';

import {loadThemePayload} from '../../../../components/Themes/gallery';
import {useThemeCreator} from '../../../../components/Themes/hooks';
import {normalizeImportedTheme} from '../../../../components/Themes/lib/normalizeImportedTheme';
import {
    exportTheme,
    replaceRootToCustomClassName,
} from '../../../../components/Themes/lib/themeCreatorExport';
import {ThemeCreatorContextProvider} from '../../../../components/Themes/ui/ThemeCreatorContextProvider';
import {PreviewLayout, TablePreview} from '../../../../components/UISamples';

// Hidden capture page used by `scripts/update-theme-previews.mjs` (Playwright)
// to snapshot the canonical Table preview per theme. Disabled unless an env
// flag is set so the route 404s in production.
const PREVIEW_ROUTES_ENABLED = process.env.NEXT_PUBLIC_ENABLE_PREVIEW_ROUTES === '1';

export const getServerSideProps: GetServerSideProps = async () => {
    if (!PREVIEW_ROUTES_ENABLED) {
        return {notFound: true};
    }
    return {props: {}};
};

const ReadySignal: React.FC = () => {
    React.useEffect(() => {
        let cancelled = false;
        const signal = () => {
            if (cancelled) {
                return;
            }
            requestAnimationFrame(() => {
                if (cancelled) {
                    return;
                }
                requestAnimationFrame(() => {
                    if (cancelled) {
                        return;
                    }
                    document.documentElement.dataset.themePreviewReady = '1';
                });
            });
        };
        if (document.fonts && typeof document.fonts.ready?.then === 'function') {
            document.fonts.ready.then(signal);
        } else {
            signal();
        }
        return () => {
            cancelled = true;
            delete document.documentElement.dataset.themePreviewReady;
        };
    }, []);
    return null;
};

const CardPreviewStage: React.FC<{mode: 'light' | 'dark'}> = ({mode}) => {
    const themeState = useThemeCreator();

    const themeStyles = React.useMemo(() => {
        const fullStyles = exportTheme({themeState, ignoreDefaultValues: false});
        return {
            wrapper: replaceRootToCustomClassName(
                fullStyles,
                'gravity-ui-landing-themes-preview-wrapper',
            ),
            layout: replaceRootToCustomClassName(
                fullStyles,
                'gravity-ui-landing-themes-preview-layout',
            ),
        };
    }, [themeState]);

    return (
        <div
            id="capture-root"
            className={`g-root g-root_theme_${mode}`}
            style={{
                width: 555,
                height: 375,
                background: 'var(--g-color-base-background)',
                overflow: 'hidden',
            }}
        >
            <style>{themeStyles.layout}</style>
            <style>{themeStyles.wrapper}</style>
            {/*
                Render the Table at its natural ~740-wide layout but let the
                clipped #capture-root box only show the top-left chunk — that
                zooms the frame onto the brand button + first table rows where
                the theme reads most clearly.
            */}
            <div style={{width: 740}}>
                <PreviewLayout
                    id="table"
                    title="Table"
                    breadCrumbsItems={['Table']}
                    initialTheme={mode}
                >
                    {(props) => <TablePreview {...props} />}
                </PreviewLayout>
            </div>
            <ReadySignal />
        </div>
    );
};

const CardPreviewPage: React.FC = () => {
    const router = useRouter();
    const id = typeof router.query.id === 'string' ? router.query.id : null;
    const mode: 'light' | 'dark' = router.query.mode === 'dark' ? 'dark' : 'light';

    const [theme, setTheme] = React.useState<GravityTheme | null>(null);
    const [loadError, setLoadError] = React.useState<string | null>(null);

    React.useEffect(() => {
        if (!id) {
            return undefined;
        }
        let cancelled = false;
        loadThemePayload(id)
            .then((payload) => {
                if (cancelled) {
                    return;
                }
                setTheme(normalizeImportedTheme(parseJSON(payload)));
            })
            .catch((err: unknown) => {
                if (cancelled) {
                    return;
                }
                setLoadError(err instanceof Error ? err.message : String(err));
            });
        return () => {
            cancelled = true;
        };
    }, [id]);

    if (loadError) {
        return <pre data-testid="theme-preview-error">{loadError}</pre>;
    }
    if (!id || !theme) {
        return null;
    }

    return (
        <>
            <Head>
                <meta name="robots" content="noindex" />
            </Head>
            <ThemeCreatorContextProvider initialTheme={theme}>
                <CardPreviewStage mode={mode} />
            </ThemeCreatorContextProvider>
        </>
    );
};

export default CardPreviewPage;
