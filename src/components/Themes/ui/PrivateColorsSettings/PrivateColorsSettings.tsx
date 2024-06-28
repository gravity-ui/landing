import {FormRow} from '@gravity-ui/components';
import {Flex, Text} from '@gravity-ui/uikit';
import React from 'react';

import {block} from '../../../../utils';
import {useThemePrivateColorOptions, useThemeUtilityColor} from '../../hooks';
import {DEFAULT_THEME} from '../../lib/constants';
import {ThemeColorOption} from '../../lib/themeCreatorUtils';
import type {ColorsOptions, ThemeVariant} from '../../lib/types';
import {PrivateColorSelect} from '../PrivateColorSelect';
import {ThemePicker} from '../ThemePicker';
import {ThemeSection} from '../ThemeSection';

import './PrivateColorsSettings.scss';

const b = block('private-colors-settings');

interface PrivateColorEditorProps {
    name: keyof ColorsOptions;
    theme: ThemeVariant;
    colorGroups: ThemeColorOption[];
}

const PrivateColorEditor: React.FC<PrivateColorEditorProps> = ({name, theme, colorGroups}) => {
    const [color, setColor] = useThemeUtilityColor({
        name,
        theme,
    });

    return (
        <PrivateColorSelect
            groups={colorGroups}
            defaultValue={DEFAULT_THEME.colors[theme][name]}
            value={color}
            onChange={setColor}
        />
    );
};

export type EditableColorOption = {
    title: string;
    name: keyof ColorsOptions;
};

interface PrivateColorsSettingsProps {
    title: string;
    options: EditableColorOption[];
}

export const PrivateColorsSettings: React.FC<PrivateColorsSettingsProps> = ({title, options}) => {
    const [theme, setTheme] = React.useState<ThemeVariant>('light');
    const themePrivateColorOptions = useThemePrivateColorOptions(theme);

    return (
        <ThemeSection className={b()} title={title}>
            <Flex direction="column">
                <FormRow label={<Text variant="body-3">Theme</Text>} className={b('row')}>
                    <ThemePicker value={theme} onUpdate={setTheme} />
                </FormRow>
                {options.map((option) => (
                    <FormRow
                        key={option.name}
                        label={<Text variant="body-2">{option.title}</Text>}
                        className={b('row')}
                    >
                        <PrivateColorEditor
                            name={option.name}
                            theme={theme}
                            colorGroups={themePrivateColorOptions}
                        />
                    </FormRow>
                ))}
            </Flex>
        </ThemeSection>
    );
};
