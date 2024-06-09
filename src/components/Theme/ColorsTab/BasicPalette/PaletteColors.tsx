import {Plus} from '@gravity-ui/icons';
import {Button, Flex, Icon, Text} from '@gravity-ui/uikit';
import React from 'react';

import {Palette} from '../../types';

interface PaletteColorsProps {
    palette: Palette;
    onAddColorClick: () => void;
}

export const PaletteColors: React.FC<PaletteColorsProps> = ({palette, onAddColorClick}) => {
    return (
        <Flex direction="column" style={{paddingTop: '16px'}}>
            <Text variant="subheader-3" style={{marginBottom: '22px'}}>
                Support Colors for various cases and states
            </Text>
            <Flex gap={8} direction="column">
                {palette.map(({title}) => (
                    <Text variant="body-2" key={title}>
                        {title}
                    </Text>
                ))}
                <Button onClick={onAddColorClick} view="outlined-action" size="xl">
                    <Icon data={Plus} /> Add color
                </Button>
            </Flex>
        </Flex>
    );
};
