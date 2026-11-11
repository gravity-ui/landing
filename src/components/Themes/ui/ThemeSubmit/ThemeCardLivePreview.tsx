import React from 'react';

import {PreviewLayout, TablePreview} from '../../../UISamples';
import type {ThemePreviewMode} from '../../gallery';
import {useThemeCreator} from '../../hooks';
import {exportTheme, replaceRootToCustomClassName} from '../../lib/themeCreatorExport';

// Same frame as the hidden capture route (`/themes/_internal/card-preview`):
// a 555x375 box over the Table sample rendered at its natural ~740px width.
const CAPTURE_WIDTH = 555;
const CAPTURE_HEIGHT = 375;
const SAMPLE_WIDTH = 740;

interface ThemeCardLivePreviewProps {
    mode: ThemePreviewMode;
}

// Fills the card preview area like the PNG does (`object-fit: cover` from the
// top-left corner), so the scale follows the actual box size.
export const ThemeCardLivePreview: React.FC<ThemeCardLivePreviewProps> = ({mode}) => {
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

    const boxRef = React.useRef<HTMLDivElement>(null);
    const [scale, setScale] = React.useState(1);

    React.useLayoutEffect(() => {
        const box = boxRef.current;
        if (!box) {
            return undefined;
        }
        const observer = new ResizeObserver(([entry]) => {
            const {width, height} = entry.contentRect;
            setScale(Math.max(width / CAPTURE_WIDTH, height / CAPTURE_HEIGHT));
        });
        observer.observe(box);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={boxRef}
            style={{position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none'}}
            aria-hidden="true"
        >
            <div
                // `PreviewLayout` reads `initialTheme` once, so the sample is remounted per mode.
                key={mode}
                className={`g-root g-root_theme_${mode}`}
                style={{
                    width: CAPTURE_WIDTH,
                    height: CAPTURE_HEIGHT,
                    overflow: 'hidden',
                    background: 'var(--g-color-base-background)',
                    transform: `scale(${scale})`,
                    transformOrigin: 'left top',
                }}
            >
                <style>{themeStyles.layout}</style>
                <style>{themeStyles.wrapper}</style>
                <div style={{width: SAMPLE_WIDTH}}>
                    <PreviewLayout
                        id="table"
                        title="Table"
                        breadCrumbsItems={['Table']}
                        initialTheme={mode}
                    >
                        {(props) => <TablePreview {...props} />}
                    </PreviewLayout>
                </div>
            </div>
        </div>
    );
};
