import {Flex} from '@gravity-ui/uikit';
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
        () =>
            exportTheme({
                themeState,
                ignoreDefaultValues: false,
                customRootClassName: 'gravity-ui-landing-examples-showcase',
            }),
        [themeState],
    );

    return (
        <ThemeSection title={t('component_preview')}>
            <Flex direction="column" gap={4}>
                <Showcase style={themeStyles} theme="dark" />
                <Showcase style={themeStyles} theme="light" />
            </Flex>
        </ThemeSection>
    );
};
