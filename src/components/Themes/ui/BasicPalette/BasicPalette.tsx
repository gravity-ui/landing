import {Col, Flex} from '@gravity-ui/uikit';
import React from 'react';
import {useTranslation} from 'react-i18next';

import {useThemeCreatorMethods, useThemePalette} from '../../hooks';
import {ThemeSection} from '../ThemeSection';

import {PaletteColors} from './PaletteColors';
import {ThemePaletteCard} from './ThemePaletteCard';

const hiddenColors = new Set(['white', 'black', 'brand']);

export const BasicPalette = () => {
    const {t} = useTranslation('themes');

    const {addColor, removeColor, updateColor, renameColor} = useThemeCreatorMethods();
    const origPalette = useThemePalette();

    const palette = React.useMemo(
        () => origPalette.filter(({title}) => !hiddenColors.has(title.toLowerCase())),
        [origPalette],
    );

    return (
        <ThemeSection title={t('basic_palette')}>
            <Flex gap={9}>
                <Flex width={380}>
                    <PaletteColors
                        palette={palette}
                        onAddColorClick={addColor}
                        onDeleteColor={removeColor}
                        onUpdateColorTitle={renameColor}
                    />
                </Flex>
                <Flex gap={4} grow={true}>
                    <Col s={6}>
                        <ThemePaletteCard theme="light" palette={palette} onUpdate={updateColor} />
                    </Col>
                    <Col s={6}>
                        <ThemePaletteCard theme="dark" palette={palette} onUpdate={updateColor} />
                    </Col>
                </Flex>
            </Flex>
        </ThemeSection>
    );
};
