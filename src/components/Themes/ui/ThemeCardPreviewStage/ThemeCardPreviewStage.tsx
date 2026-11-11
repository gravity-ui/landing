import React from 'react';

import {PreviewLayout, TablePreview} from '../../../UISamples';
import type {ThemePreviewMode} from '../../gallery';
import {useThemeCreator} from '../../hooks';
import {exportTheme, replaceRootToCustomClassName} from '../../lib/themeCreatorExport';

// The canonical frame of a gallery card preview, captured by headless Chromium.
// Mirrors `CardPreviewStage` of `src/pages/themes/_internal/card-preview/[id].tsx`
// one to one. That route keeps its own copy on purpose: its sha256 is part of
// every `themeHash` in `previews.manifest.json`, so editing it invalidates all
// committed previews. Keep the two in sync.

// Sets `data-theme-preview-ready` once fonts are in and two frames are painted.
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

interface ThemeCardPreviewStageProps {
    mode: ThemePreviewMode;
}

export const ThemeCardPreviewStage: React.FC<ThemeCardPreviewStageProps> = ({mode}) => {
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
