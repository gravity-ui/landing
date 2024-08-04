import {Sliders} from '@gravity-ui/icons';
import {Button, Flex, Icon, Text} from '@gravity-ui/uikit';
import React from 'react';
import {Trans, useTranslation} from 'react-i18next';

import {block} from '../../../../utils';
import {SelectableCard} from '../../../SelectableCard/SelectableCard';
import {useThemePaletteColor, useThemeUtilityColor} from '../../hooks';
import {TEXT_CONTRAST_COLORS} from '../../lib/constants';
import type {ColorsOptions, ThemeVariant} from '../../lib/types';
import {ColorPickerInput} from '../ColorPickerInput/ColorPickerInput';
import {ThemableSettings} from '../ThemableSettings/ThemableSettings';
import {ThemableRow} from '../ThemableSettings/types';
import {ThemeSection} from '../ThemeSection';

import './MainSettings.scss';

const b = block('main-settings');

const BASE_CARD_BUTTON_STYLES = {
    borderRadius: '8px',
    padding: '10px 16px',
    height: 'auto',
    width: 'auto',
};

interface ThemeUtilityColorEditorProps {
    name: keyof ColorsOptions;
    theme: ThemeVariant;
}

const ThemeUtilityColorEditor: React.FC<ThemeUtilityColorEditorProps> = ({name, theme}) => {
    const [color, setColor] = useThemeUtilityColor({
        name,
        theme,
    });

    return (
        <ColorPickerInput
            value={color}
            defaultValue={color}
            onChange={setColor}
            // Цвет фона применяется к карточке, в которой он отображается. Чтобы можно было увидеть preview оборачиваем блок в border
            withBorderInPreview={name === 'base-background'}
        />
    );
};

const BrandColorEditor: React.FC<{theme: ThemeVariant}> = ({theme}) => {
    const [brandColor, setBrandColor] = useThemePaletteColor({token: 'brand', theme});

    return (
        <ColorPickerInput value={brandColor} defaultValue={brandColor} onChange={setBrandColor} />
    );
};

const TextContrastColorEditor: React.FC<{theme: ThemeVariant}> = ({theme}) => {
    const [brandTextColor, setBrandTextColor] = useThemeUtilityColor({
        name: 'text-brand-contrast',
        theme,
    });

    const [brandColor] = useThemePaletteColor({token: 'brand', theme});

    return (
        <Flex gap={4}>
            <SelectableCard
                className={b('text-card')}
                text="Black text"
                selected={brandTextColor === TEXT_CONTRAST_COLORS[theme].black}
                onClick={() => setBrandTextColor(TEXT_CONTRAST_COLORS[theme].black)}
                textProps={{
                    style: {
                        ...BASE_CARD_BUTTON_STYLES,
                        color: TEXT_CONTRAST_COLORS[theme].black,
                        backgroundColor: brandColor,
                    },
                }}
            />
            <SelectableCard
                className={b('text-card')}
                text="White text"
                selected={brandTextColor === TEXT_CONTRAST_COLORS[theme].white}
                onClick={() => setBrandTextColor(TEXT_CONTRAST_COLORS[theme].white)}
                textProps={{
                    style: {
                        ...BASE_CARD_BUTTON_STYLES,
                        color: TEXT_CONTRAST_COLORS[theme].white,
                        backgroundColor: brandColor,
                    },
                }}
            />
        </Flex>
    );
};

interface MainSettingsProps {
    advancedModeEnabled: boolean;
    toggleAdvancedMode: () => void;
}

export const MainSettings: React.FC<MainSettingsProps> = ({
    advancedModeEnabled,
    toggleAdvancedMode,
}) => {
    const {t} = useTranslation('themes');

    const rows = React.useMemo<ThemableRow[]>(() => {
        return [
            {
                id: 'base-background',
                title: t('page_background'),
                render: (theme) => <ThemeUtilityColorEditor theme={theme} name="base-background" />,
            },
            {
                id: 'brand',
                title: t('brand_color'),
                render: (theme) => <BrandColorEditor theme={theme} />,
            },
            {
                id: 'text-brand-contrast',
                title: 'Text on Brand',
                render: (theme) => <TextContrastColorEditor theme={theme} />,
                renderTitle: () => (
                    <div className={b('text-contrast-title')}>
                        <Text variant="body-2">Text on Brand</Text>
                    </div>
                ),
            },
        ];
    }, [t]);

    return (
        <ThemeSection className={b()} title={t('custom_brand_palette')}>
            <ThemableSettings
                title={
                    <Trans i18nKey="palette_colors_description" t={t}>
                        <br />
                    </Trans>
                }
                rows={rows}
                addButton={
                    <Button
                        className={b('switch-button')}
                        onClick={toggleAdvancedMode}
                        view="outlined-action"
                        size="xl"
                    >
                        <Icon data={Sliders} size={20} />
                        {advancedModeEnabled ? t('hide_advanced_settings') : t('advanced_settings')}
                    </Button>
                }
            />
        </ThemeSection>
    );
};
