import {Moon, Sun} from '@gravity-ui/icons';
import {Flex, Icon, RadioButton, Text} from '@gravity-ui/uikit';
import React from 'react';

import {block} from '../../../../utils';
import type {ThemeVariant} from '../../lib/types';

import './ThemePicker.scss';

const b = block('theme-picker');

interface ThemePickerProps {
    value: ThemeVariant;
    lightThemeTitle?: string;
    darkThemeTitle?: string;
    onUpdate: (value: ThemeVariant) => void;
}

export const ThemePicker: React.FC<ThemePickerProps> = ({
    value,
    onUpdate,
    lightThemeTitle = 'Light',
    darkThemeTitle = 'Dark',
}) => {
    return (
        <RadioButton<ThemeVariant> className={b()} size="xl" value={value} onUpdate={onUpdate}>
            <RadioButton.Option
                value="light"
                content={
                    <Flex className={b('option')} alignItems="center" gap={1}>
                        <Icon data={Sun} />
                        <Text>{lightThemeTitle}</Text>
                    </Flex>
                }
            />
            <RadioButton.Option
                value="dark"
                content={
                    <Flex className={b('option')} alignItems="center" gap={1}>
                        <Icon data={Moon} />
                        <Text>{darkThemeTitle}</Text>
                    </Flex>
                }
            />
        </RadioButton>
    );
};
