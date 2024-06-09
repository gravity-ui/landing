import {Col, Flex} from '@gravity-ui/uikit';
import React from 'react';

import {useThemeCreator} from '../../hooks/useThemeCreator';

import {PaletteColors} from './PaletteColors';
import {ThemePaletteCard} from './ThemePaletteCard';

export const BasicPalette = () => {
    const {palette, addColor} = useThemeCreator();

    return (
        <Flex gap={8} direction="column">
            <Flex>
                <h1>Basic Palette</h1>
            </Flex>
            <Flex>
                <Flex width={312} style={{marginRight: '104px'}}>
                    <PaletteColors palette={palette} onAddColorClick={addColor} />
                </Flex>
                <Flex gap={4} grow={true}>
                    <Col s={6}>
                        <ThemePaletteCard theme="light" palette={palette} />
                    </Col>
                    <Col s={6}>
                        <ThemePaletteCard theme="dark" palette={palette} />
                    </Col>
                </Flex>
            </Flex>
        </Flex>
    );
};
