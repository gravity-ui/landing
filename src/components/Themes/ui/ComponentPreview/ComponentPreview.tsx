import {Flex} from 'landing-uikit';
import {useTranslation} from 'next-i18next';
import dynamic from 'next/dynamic';
import React from 'react';

import {useThemeCreator} from '../../hooks';
import {exportTheme} from '../../lib/themeCreatorExport';
import {ThemeSection} from '../ThemeSection';

const Showcase = dynamic(
    () =>
        import('../../../../blocks/Examples/components/Showcase/Showcase').then(
            (res) => res.Showcase,
        ),
    {
        ssr: false,
    },
);

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
