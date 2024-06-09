import {Moon, Sun} from '@gravity-ui/icons';
import {Flex, Icon, Text} from '@gravity-ui/uikit';
import React from 'react';

import {block} from '../../../../utils';
import {Palette, ThemeVariant} from '../../types';

import './ThemePaletteCard.scss';

const b = block('theme-palette-card');

interface ThemePaletteCardProps {
    theme: ThemeVariant;
    palette: Palette;
    onUpdate?: (colorTitle: string, value: string) => void;
}

export const ThemePaletteCard: React.FC<ThemePaletteCardProps> = ({theme, palette}) => {
    return (
        <Flex className={b({[theme]: true})} gap={6} direction="column">
            <Flex gap={4} space={6}>
                <Icon data={theme === 'dark' ? Moon : Sun} size={24} />
                <Text variant="subheader-3">{theme === 'dark' ? 'Dark theme' : 'Light theme'}</Text>
            </Flex>
            <Flex gap={4} direction="column">
                {palette.map(({title, colors}) => (
                    <div key={title}>{colors[theme]}</div>
                ))}
            </Flex>
        </Flex>
    );
};
