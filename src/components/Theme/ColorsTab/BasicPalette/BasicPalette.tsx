import {Col, Flex} from '@gravity-ui/uikit';
import React from 'react';

import {useThemeCreator} from '../../hooks/useThemeCreator';

import {PaletteColors} from './PaletteColors';
import {ThemePaletteCard} from './ThemePaletteCard';

export const BasicPalette = () => {
    const {palette, addColor, removeColor, updateColor, renameColor} = useThemeCreator();

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
