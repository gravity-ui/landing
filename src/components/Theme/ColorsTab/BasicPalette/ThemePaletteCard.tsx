import {Moon, Sun} from '@gravity-ui/icons';
import {Flex, Icon, Text, ThemeProvider} from '@gravity-ui/uikit';
import React from 'react';

import {block} from '../../../../utils';
import {ColorPickerInput} from '../../../ColorPickerInput/ColorPickerInput';
import {useThemeColor} from '../../hooks/useThemeColor';
import {Palette, ThemeVariant} from '../../types';

import './ThemePaletteCard.scss';

const b = block('theme-palette-card');

interface ThemePaletteCardProps {
    theme: ThemeVariant;
    palette: Palette;
    onUpdate: (params: {title: string; theme: ThemeVariant; value: string}) => void;
}

export const ThemePaletteCard: React.FC<ThemePaletteCardProps> = ({theme, palette, onUpdate}) => {
    const [backgroundColor] = useThemeColor({name: 'base-background', theme});

    const createChangeHandler = React.useCallback(
        (title: string) => (value: string) => {
            onUpdate({title, theme, value});
        },
        [onUpdate, theme],
    );

    return (
        <ThemeProvider theme={theme} rootClassName={b('theme-root', 'sandbox')} scoped>
            <Flex
                className={b({[theme]: true})}
                gap={6}
                direction="column"
                style={{backgroundColor}}
            >
                <Flex gap={4} space={6}>
                    <Icon data={theme === 'dark' ? Moon : Sun} size={24} />
                    <Text variant="subheader-3">
                        {theme === 'dark' ? 'Dark theme' : 'Light theme'}
                    </Text>
                </Flex>
                <Flex gap={4} direction="column">
                    {palette.map(({title, colors}) => (
                        <ColorPickerInput
                            key={title}
                            value={colors[theme]}
                            defaultValue={colors[theme]}
                            onChange={createChangeHandler(title)}
                        />
                    ))}
                </Flex>
            </Flex>
        </ThemeProvider>
    );
};
