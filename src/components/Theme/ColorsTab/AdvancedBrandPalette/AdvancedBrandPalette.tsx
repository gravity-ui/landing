import {FormRow} from '@gravity-ui/components';
import {Flex, Text} from '@gravity-ui/uikit';
import React from 'react';

import {block} from '../../../../utils';
import {PrivateColorSelect} from '../../../PrivateColorSelect/PrivateColorSelect';
import {ThemePicker} from '../../../ThemePicker';
import {useThemeColor} from '../../hooks/useThemeColor';
import {useThemeCreator} from '../../hooks/useThemeCreator';
import type {ThemeVariant} from '../../types';

import './AdvancedBrandPalette.scss';

const b = block('advanced-brand-palette');

export const AdvancedBrandPalette = () => {
    const [theme, setTheme] = React.useState<ThemeVariant>('light');
    const {getThemePrivateColorOptions} = useThemeCreator();

    const colorGroups = React.useMemo(
        () => getThemePrivateColorOptions(theme),
        [getThemePrivateColorOptions, theme],
    );

    const [hoveredBrandColor, setHoveredBrandColor] = useThemeColor({
        name: 'base-brand-hover',
        theme,
    });

    const [textBrandColor, setTextBrandColor] = useThemeColor({
        name: 'text-brand',
        theme,
    });

    const [lineBrandColor, setLineBrandColor] = useThemeColor({
        name: 'line-brand',
        theme,
    });

    return (
        <Flex gap={8} direction="column" className={b()}>
            <Flex>
                <h1>Advanced Brand Palette</h1>
            </Flex>
            <Flex gap={9}>
                <Flex direction="column">
                    <FormRow label={<Text variant="body-3">Theme</Text>} className={b('row')}>
                        <ThemePicker value={theme} onUpdate={setTheme} />
                    </FormRow>
                    <FormRow
                        label={<Text variant="body-3">Hovered Brand Color</Text>}
                        className={b('row')}
                    >
                        <PrivateColorSelect
                            groups={colorGroups}
                            value={hoveredBrandColor}
                            onChange={setHoveredBrandColor}
                        />
                    </FormRow>
                    <FormRow label={<Text variant="body-3">Brand Text</Text>} className={b('row')}>
                        <PrivateColorSelect
                            groups={colorGroups}
                            value={textBrandColor}
                            onChange={setTextBrandColor}
                        />
                    </FormRow>
                    <FormRow
                        label={<Text variant="body-3">Brand Line Color</Text>}
                        className={b('row')}
                    >
                        <PrivateColorSelect
                            groups={colorGroups}
                            value={lineBrandColor}
                            onChange={setLineBrandColor}
                        />
                    </FormRow>
                </Flex>
            </Flex>
        </Flex>
    );
};
