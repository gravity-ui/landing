import {Moon, Sun} from '@gravity-ui/icons';
import {Flex, Icon, SegmentedRadioGroup, Text} from '@gravity-ui/uikit';
import type {Theme} from '@gravity-ui/uikit-themer';
import React from 'react';

import {block} from '../../../../utils';

import './ThemePicker.scss';

const b = block('theme-picker');

interface ThemePickerProps {
    value: Theme;
    lightThemeTitle?: string;
    darkThemeTitle?: string;
    onUpdate: (value: Theme) => void;
}

export const ThemePicker: React.FC<ThemePickerProps> = ({
    value,
    onUpdate,
    lightThemeTitle = 'Light',
    darkThemeTitle = 'Dark',
}) => {
    return (
        <SegmentedRadioGroup<Theme> className={b()} size="xl" value={value} onUpdate={onUpdate}>
            <SegmentedRadioGroup.Option
                value="light"
                content={
                    <Flex className={b('option')} alignItems="center" gap={1}>
                        <Icon data={Sun} />
                        <Text>{lightThemeTitle}</Text>
                    </Flex>
                }
            />
            <SegmentedRadioGroup.Option
                value="dark"
                content={
                    <Flex className={b('option')} alignItems="center" gap={1}>
                        <Icon data={Moon} />
                        <Text>{darkThemeTitle}</Text>
                    </Flex>
                }
            />
        </SegmentedRadioGroup>
    );
};
