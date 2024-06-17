import {Moon, Sun} from '@gravity-ui/icons';
import {Flex, Icon, Text, ThemeProvider} from '@gravity-ui/uikit';
import React from 'react';
import {useTranslation} from 'react-i18next';

import {block} from '../../../../utils';
import {ColorPickerInput} from '../../../ColorPickerInput/ColorPickerInput';
import {useThemeUtilityColor} from '../../hooks';
import {Palette, ThemeVariant} from '../../lib/types';

import './ThemePaletteCard.scss';

const b = block('theme-palette-card');

interface ThemePaletteCardProps {
    theme: ThemeVariant;
    palette: Palette;
    onUpdate: (params: {title: string; theme: ThemeVariant; value: string}) => void;
}

export const ThemePaletteCard: React.FC<ThemePaletteCardProps> = ({theme, palette, onUpdate}) => {
    const {t} = useTranslation('themes');
    const [backgroundColor] = useThemeUtilityColor({name: 'base-background', theme});

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
                        {theme === 'dark' ? t('dark_theme') : t('light_theme')}
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
