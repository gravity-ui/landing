import {Sliders} from '@gravity-ui/icons';
import {Button, Flex, Icon, Text} from '@gravity-ui/uikit';
import React from 'react';

import {block} from '../../../../utils';
import {useThemePaletteColor} from '../../hooks';
import {DEFAULT_BRAND_COLORS} from '../../lib/constants';
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
    const [customModeEnabled, setCustomMode] = React.useState(false);

    const [lightBrandColor, setLightBrandColor] = useThemePaletteColor({
        token: 'brand',
        theme: 'light',
    });
    const [darkBrandColor, setDarkBrandColor] = useThemePaletteColor({
        token: 'brand',
        theme: 'dark',
    });

    const activeColorIndex = React.useMemo(() => {
        return DEFAULT_BRAND_COLORS.findIndex(
            (value) => value === lightBrandColor && value === darkBrandColor,
        );
    }, [lightBrandColor, darkBrandColor]);

    const changeBrandColor = React.useCallback(
        (index: number) => {
            setCustomMode(false);

            if (activeColorIndex === index) {
                return;
            }

            setLightBrandColor(DEFAULT_BRAND_COLORS[index]);
            setDarkBrandColor(DEFAULT_BRAND_COLORS[index]);
        },
        [activeColorIndex],
    );

    const handleSelectCustomColor = React.useCallback(() => {
        setCustomMode(true);
        onSelectCustomColor();
    }, [onSelectCustomColor]);

    return (
        <ThemeSection className={b()} title="Brand colors">
            <Flex direction="column">
                <div className={b('brand-color-picker')}>
                    {DEFAULT_BRAND_COLORS.map((value, index) => (
                        <div
                            className={b('color', {
                                selected: !customModeEnabled && index === activeColorIndex,
                            })}
                            // @ts-ignore
                            style={{'--color-value': value}}
                            onClick={() => changeBrandColor(index)}
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
                        <Text variant="body-2">Custom</Text>
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
                    Edit Theme
                </Button>
            )}
        </ThemeSection>
    );
};
