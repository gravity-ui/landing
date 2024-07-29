import {Moon, Sun} from '@gravity-ui/icons';
import {Flex, Icon, Text, ThemeProvider} from '@gravity-ui/uikit';
import React from 'react';
import {useTranslation} from 'react-i18next';

import {block} from '../../../../utils';
import {useThemeUtilityColor} from '../../hooks';
import {Palette, ThemeVariant} from '../../lib/types';
import {ColorPickerInput} from '../ColorPickerInput/ColorPickerInput';
import {ThemePicker} from '../ThemePicker';

import './ThemePaletteCard.scss';

const b = block('theme-palette-card');

interface ThemePaletteCardProps {
    theme: ThemeVariant;
    palette: Palette;
    onUpdate: (params: {title: string; theme: ThemeVariant; value: string}) => void;
    onChangeTheme?: (newTheme: ThemeVariant) => void;
    showTitle?: boolean;
    onDeleteColor?: (title: string) => void;
    onUpdateColorTitle?: (params: {oldTitle: string; newTitle: string}) => void;
    renderEditor?: (paletteColorData: Palette[0]) => React.ReactNode;
}

export const ThemePaletteCard: React.FC<ThemePaletteCardProps> = ({
    theme,
    palette,
    onUpdate,
    onChangeTheme,
    renderEditor,
    showTitle = true,
}) => {
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
                {showTitle && (
                    <Flex gap={4} space={6}>
                        <Icon data={theme === 'dark' ? Moon : Sun} size={24} />
                        <Text variant="subheader-3">
                            {theme === 'dark' ? t('dark_theme') : t('light_theme')}
                        </Text>
                    </Flex>
                )}
                {onChangeTheme && <ThemePicker value={theme} onUpdate={onChangeTheme} />}
                <Flex gap={4} direction="column">
                    {palette.map((paletteColorData) => {
                        const {colors, title} = paletteColorData;

                        return (
                            <div
                                key={paletteColorData.title}
                                className={b('palette-row', {'with-editor': Boolean(renderEditor)})}
                            >
                                {renderEditor ? renderEditor(paletteColorData) : null}
                                <ColorPickerInput
                                    key={title}
                                    value={colors[theme]}
                                    defaultValue={colors[theme]}
                                    onChange={createChangeHandler(title)}
                                />
                            </div>
                        );
                    })}
                </Flex>
            </Flex>
        </ThemeProvider>
    );
};
