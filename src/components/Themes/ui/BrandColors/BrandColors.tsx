import {Flask, HandOk} from '@gravity-ui/icons';
import {Flex, Icon, SegmentedRadioGroup, Text} from '@gravity-ui/uikit';
import {useTranslation} from 'next-i18next';
import React from 'react';

import {useIsMobile} from '../../../../hooks/useIsMobile';
import {block} from '../../../../utils';
import {useThemeCreator, useThemeCreatorMethods, useThemePaletteColor} from '../../hooks';
import {BRAND_COLORS_PRESETS} from '../../lib/constants';
import type {ColorsSettingsType} from '../../lib/types';
import {ThemeSection} from '../ThemeSection';

import './BrandColors.scss';

const b = block('brand-colors');

interface BrandColorsProps {
    onSelectCustomColor: () => void;
}

export const BrandColors: React.FC<BrandColorsProps> = ({onSelectCustomColor}) => {
    const {t} = useTranslation('themes');

    const [customModeEnabled, setCustomMode] = React.useState(false);
    const isMobile = useIsMobile();

    const [lightBrandColor] = useThemePaletteColor({
        token: 'brand',
        theme: 'light',
    });
    const [darkBrandColor] = useThemePaletteColor({
        token: 'brand',
        theme: 'dark',
    });

    const {applyBrandPreset, setColorsSettingsType} = useThemeCreatorMethods();
    const {colorsSettingsType} = useThemeCreator();

    const activeColorIndex = React.useMemo(() => {
        return BRAND_COLORS_PRESETS.findIndex(
            (value) =>
                value.brandColor === lightBrandColor.value &&
                value.brandColor === darkBrandColor.value,
        );
    }, [lightBrandColor, darkBrandColor]);

    const setBrandPreset = React.useCallback(
        (index: number) => {
            setCustomMode(false);

            if (activeColorIndex === index) {
                return;
            }

            applyBrandPreset(BRAND_COLORS_PRESETS[index]);
        },
        [activeColorIndex, applyBrandPreset],
    );

    const handleSelectCustomColor = React.useCallback(() => {
        setCustomMode(true);
        onSelectCustomColor();
    }, [onSelectCustomColor]);

    return (
        <ThemeSection className={b()} title={t('title_brand-colors')}>
            <Flex direction="column">
                <Flex gap={2} justifyContent="space-between">
                    <div className={b('brand-color-picker')}>
                        {BRAND_COLORS_PRESETS.map((value, index) => (
                            <div
                                key={index}
                                className={b('color', {
                                    selected: !customModeEnabled && index === activeColorIndex,
                                })}
                                // @ts-ignore
                                style={{'--color-value': value.brandColor}}
                                onClick={() => setBrandPreset(index)}
                            >
                                <div className={b('color-inner')} />
                            </div>
                        ))}
                        <div
                            className={b('color', {
                                selected: customModeEnabled || activeColorIndex === -1,
                                custom: true,
                            })}
                            onClick={handleSelectCustomColor}
                        >
                            <div className={b('color-inner')} />
                            <Text variant="body-2">{t('label_custom-color')}</Text>
                        </div>
                    </div>
                    {!isMobile && (
                        <SegmentedRadioGroup
                            size="xl"
                            className={b('colors-settings-type-radio-group')}
                            defaultValue={colorsSettingsType}
                            value={colorsSettingsType}
                            onChange={(e) => {
                                setColorsSettingsType(e.target.value as ColorsSettingsType);
                            }}
                        >
                            <SegmentedRadioGroup.Option value="basic">
                                <Icon data={HandOk} />
                                Basic
                            </SegmentedRadioGroup.Option>
                            <SegmentedRadioGroup.Option value="advanced">
                                <Icon data={Flask} />
                                Advanced
                            </SegmentedRadioGroup.Option>
                        </SegmentedRadioGroup>
                    )}
                </Flex>
            </Flex>
        </ThemeSection>
    );
};
