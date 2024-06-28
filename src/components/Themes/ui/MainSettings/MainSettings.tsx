import {FormRow} from '@gravity-ui/components';
import {Sliders} from '@gravity-ui/icons';
import {Button, Flex, Icon, Text} from '@gravity-ui/uikit';
import React from 'react';
import {useTranslation} from 'react-i18next';

import {block} from '../../../../utils';
import {ColorPickerInput} from '../../../ColorPickerInput/ColorPickerInput';
import {useThemePaletteColor, useThemeUtilityColor} from '../../hooks';
import type {ThemeVariant} from '../../lib/types';
import {ThemePicker} from '../ThemePicker';
import {ThemeSection} from '../ThemeSection';

import './MainSettings.scss';

const b = block('main-settings');

interface MainSettingsProps {
    advancedModeEnabled: boolean;
    toggleAdvancedMode: () => void;
}

export const MainSettings: React.FC<MainSettingsProps> = ({
    advancedModeEnabled,
    toggleAdvancedMode,
}) => {
    const {t} = useTranslation('themes');

    const [theme, setTheme] = React.useState<ThemeVariant>('light');
    const [backgroundColor, setBackgroundColor] = useThemeUtilityColor({
        name: 'base-background',
        theme,
    });
    const [brandColor, setBrandColor] = useThemePaletteColor({token: 'brand', theme});

    return (
        <ThemeSection className={b()} title={t('custom_brand_palette')}>
            <Flex direction="column">
                <FormRow label={<Text variant="body-3">{t('theme')}</Text>} className={b('row')}>
                    <ThemePicker value={theme} onUpdate={setTheme} />
                </FormRow>
                <FormRow
                    label={<Text variant="body-3">{t('page_background')}</Text>}
                    className={b('row')}
                >
                    <ColorPickerInput
                        value={backgroundColor}
                        defaultValue={backgroundColor}
                        onChange={setBackgroundColor}
                        size="xl"
                    />
                </FormRow>
                <FormRow
                    label={<Text variant="body-3">{t('brand_color')}</Text>}
                    className={b('row')}
                >
                    <ColorPickerInput
                        value={brandColor}
                        defaultValue={brandColor}
                        onChange={setBrandColor}
                        size="xl"
                    />
                </FormRow>
                <Button
                    className={b('switch-button')}
                    onClick={toggleAdvancedMode}
                    view="outlined-action"
                    size="xl"
                >
                    <Icon data={Sliders} size={20} />
                    {advancedModeEnabled ? t('hide_advanced_settings') : t('advanced_settings')}
                </Button>
            </Flex>
        </ThemeSection>
    );
};
