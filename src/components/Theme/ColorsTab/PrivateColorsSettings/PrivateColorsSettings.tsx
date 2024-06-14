import {FormRow} from '@gravity-ui/components';
import {Flex, Text} from '@gravity-ui/uikit';
import React from 'react';

import {block} from '../../../../utils';
import {PrivateColorSelect} from '../../../PrivateColorSelect/PrivateColorSelect';
import {ThemePicker} from '../../../ThemePicker';
import {DEFAULT_THEME} from '../../constants';
import {useThemeColor} from '../../hooks/useThemeColor';
import {useThemeCreator} from '../../hooks/useThemeCreator';
import type {ColorsOptions, ThemeVariant} from '../../types';
import {ThemeColorOption} from '../../utils';

import './PrivateColorsSettings.scss';

const b = block('private-colors-settings');

interface PrivateColorEditorProps {
    name: keyof ColorsOptions;
    theme: ThemeVariant;
    colorGroups: ThemeColorOption[];
}

const PrivateColorEditor: React.FC<PrivateColorEditorProps> = ({name, theme, colorGroups}) => {
    const [color, setColor] = useThemeColor({
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
    const {getThemePrivateColorOptions} = useThemeCreator();

    const colorGroups = React.useMemo(
        () => getThemePrivateColorOptions(theme),
        [getThemePrivateColorOptions, theme],
    );

    return (
        <Flex gap={8} direction="column" className={b()}>
            <Flex>
                <h1>{title}</h1>
            </Flex>
            <Flex gap={9}>
                <Flex direction="column">
                    <FormRow label={<Text variant="body-3">Theme</Text>} className={b('row')}>
                        <ThemePicker value={theme} onUpdate={setTheme} />
                    </FormRow>
                    {options.map((option) => (
                        <FormRow
                            key={option.name}
                            label={<Text variant="body-3">{option.title}</Text>}
                            className={b('row')}
                        >
                            <PrivateColorEditor
                                name={option.name}
                                theme={theme}
                                colorGroups={colorGroups}
                            />
                        </FormRow>
                    ))}
                </Flex>
            </Flex>
        </Flex>
    );
};
