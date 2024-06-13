import {FormRow} from '@gravity-ui/components';
import {Sliders} from '@gravity-ui/icons';
import {Button, Flex, Icon, Text} from '@gravity-ui/uikit';
import React from 'react';

import {block} from '../../../../utils';
import {ColorPickerInput} from '../../../ColorPickerInput/ColorPickerInput';
import {ThemePicker} from '../../../ThemePicker';
import {useThemeColor} from '../../hooks/useThemeColor';
import {useThemePaletteColor} from '../../hooks/useThemePaletteColor';
import type {ThemeVariant} from '../../types';

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
    const [theme, setTheme] = React.useState<ThemeVariant>('light');
    const [backgroundColor, setBackgroundColor] = useThemeColor({name: 'base-background', theme});
    const [brandColor, setBrandColor] = useThemePaletteColor({token: 'brand', theme});

    return (
        <Flex gap={8} direction="column" className={b()}>
            <Flex>
                <h1>Custom Brand Palette</h1>
            </Flex>
            <Flex gap={9}>
                <Flex direction="column">
                    <FormRow label={<Text variant="body-3">Theme</Text>} className={b('row')}>
                        <ThemePicker value={theme} onUpdate={setTheme} />
                    </FormRow>
                    <FormRow
                        label={<Text variant="body-3">Page Background</Text>}
                        className={b('row')}
                    >
                        <ColorPickerInput
                            value={backgroundColor}
                            defaultValue={backgroundColor}
                            onChange={setBackgroundColor}
                            size="xl"
                        />
                    </FormRow>
                    <FormRow label={<Text variant="body-3">Brand Color</Text>} className={b('row')}>
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
                        {advancedModeEnabled ? 'Hide Advanced Settings' : 'Advanced Settings'}
                    </Button>
                </Flex>
            </Flex>
        </Flex>
    );
};
