import {Col, Flex} from '@gravity-ui/uikit';
import React from 'react';

import {useThemeCreator} from '../../hooks/useThemeCreator';

import {PaletteColors} from './PaletteColors';
import {ThemePaletteCard} from './ThemePaletteCard';

const hiddenColors = new Set(['white', 'black', 'brand']);

export const BasicPalette = () => {
    const {
        palette: origPalette,
        addColor,
        removeColor,
        updateColor,
        renameColor,
    } = useThemeCreator();

    const palette = React.useMemo(
        () => origPalette.filter(({title}) => !hiddenColors.has(title.toLowerCase())),
        [origPalette],
    );

    return (
        <Flex gap={8} direction="column">
            <Flex>
                <h1>Basic Palette</h1>
            </Flex>
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
        </Flex>
    );
};
