import {Sliders} from 'landing-icons';
import {Button, Flex, Icon, Text} from 'landing-uikit';
import {useTranslation} from 'next-i18next';
import React from 'react';

import {block} from '../../../../utils';
import {useThemeCreatorMethods, useThemePaletteColor} from '../../hooks';
import {BRAND_COLORS_PRESETS} from '../../lib/constants';
import {ThemeSection} from '../ThemeSection';

import './BrandColors.scss';

const b = block('brand-colors');

interface BrandColorsProps {
    showThemeEditButton?: boolean;
    onEditThemeClick: () => void;
    onSelectCustomColor: () => void;
}

export const BrandColors: React.FC<BrandColorsProps> = ({
    showThemeEditButton,
    onEditThemeClick,
    onSelectCustomColor,
}) => {
    const {t} = useTranslation('themes');

    const [customModeEnabled, setCustomMode] = React.useState(false);

    const [lightBrandColor] = useThemePaletteColor({
        token: 'brand',
        theme: 'light',
    });
    const [darkBrandColor] = useThemePaletteColor({
        token: 'brand',
        theme: 'dark',
    });

    const {applyBrandPreset} = useThemeCreatorMethods();

    const activeColorIndex = React.useMemo(() => {
        return BRAND_COLORS_PRESETS.findIndex(
            (value) => value.brandColor === lightBrandColor && value.brandColor === darkBrandColor,
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
            </Flex>
            {showThemeEditButton && (
                <Button
                    className={b('switch-button')}
                    onClick={onEditThemeClick}
                    view="normal"
                    size="xl"
                >
                    <Icon data={Sliders} size={20} />
                    {t('action_edit-theme')}
                </Button>
            )}
        </ThemeSection>
    );
};
