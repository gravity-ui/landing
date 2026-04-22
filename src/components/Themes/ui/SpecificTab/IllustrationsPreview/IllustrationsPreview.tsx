import {Theme, ThemeProvider, spacing} from '@gravity-ui/uikit';
import {useMemo} from 'react';
import {useThemeCreator} from 'src/components/Themes/hooks';
import {exportTheme} from 'src/components/Themes/lib/themeCreatorExport';

import {block} from '../../../../../utils';
import {ILLUSTRATION_COMPONENTS} from '../constants';

import './IllustrationsPreview.scss';

const b = block('illustrations-preview');

export interface IllustrationsPreviewProps {
    theme: Theme;
}

export const IllustrationsPreview = ({theme}: IllustrationsPreviewProps) => {
    const themeState = useThemeCreator();
    const themeStyles = useMemo(
        () => exportTheme({themeState, ignoreDefaultValues: false, customRootClassName: b()}),
        [themeState],
    );

    return (
        <ThemeProvider theme={theme} scoped rootClassName={`${b({theme}, spacing({p: 10}))}`}>
            <style>{themeStyles}</style>
            <div className={b('grid')}>
                {ILLUSTRATION_COMPONENTS.map((Illustration, index) => (
                    <div key={index} className={b('cell')}>
                        <Illustration width={'100%'} height={'100%'} />
                    </div>
                ))}
            </div>
        </ThemeProvider>
    );
};
