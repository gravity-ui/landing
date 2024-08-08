import {Flex} from 'landing-uikit';
import {useTranslation} from 'next-i18next';
import React from 'react';

import {Showcase} from '../../../../blocks/Examples/components/Showcase/Showcase';
import {useThemeCreator} from '../../hooks';
import {exportTheme} from '../../lib/themeCreatorExport';
import {ThemeSection} from '../ThemeSection';

export const ComponentPreview = () => {
    const {t} = useTranslation('themes');
    const themeState = useThemeCreator();

    const themeStyles = React.useMemo(
        () => exportTheme({themeState, ignoreDefaultValues: false}),
        [themeState],
    );

    return (
        <ThemeSection title={t('component_preview')}>
            <Flex direction="column" gap={4}>
                <Showcase style={themeStyles.dark} theme="dark" />
                <Showcase style={themeStyles.light} theme="light" />
            </Flex>
        </ThemeSection>
    );
};
