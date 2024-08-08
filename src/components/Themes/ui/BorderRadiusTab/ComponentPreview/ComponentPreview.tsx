import {useTranslation} from 'next-i18next';
import React from 'react';

import {useThemeCreator} from '../../../hooks';
import {exportTheme} from '../../../lib/themeCreatorExport';
import {ThemeSection} from '../../ThemeSection';
import {Showcase} from '../Showcase/Showcase';

export const ComponentPreview = () => {
    const {t} = useTranslation('themes');
    const themeState = useThemeCreator();

    const themeStyles = React.useMemo(
        () => exportTheme({themeState, ignoreDefaultValues: false}),
        [themeState],
    );

    return (
        <ThemeSection title={t('component_preview')}>
            <Showcase style={themeStyles.dark} theme="dark" />
        </ThemeSection>
    );
};
