import {Sliders} from '@gravity-ui/icons';
import {Button, Flex, Icon, Text} from '@gravity-ui/uikit';
import {DEFAULT_THEME, type Theme, type UtilityColor} from '@gravity-ui/uikit-themer';
import {useTranslation} from 'next-i18next';
import React from 'react';

import {block} from '../../../../utils';
import {SelectableCard} from '../../../SelectableCard/SelectableCard';
import {useThemePaletteColor, useThemeUtilityColor} from '../../hooks';
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
    name: UtilityColor;
    theme: Theme;
}

const ThemeUtilityColorEditor = React.memo(({name, theme}: ThemeUtilityColorEditorProps) => {
    const [color, setColor] = useThemeUtilityColor({
        name,
        theme,
        withoutRef: name === 'base-background',
    });

    return (
        <ColorPickerInput
            name={name}
            value={color}
            defaultValue={color}
            onChange={setColor}
            // The background color is applied to the card in which it is displayed. To see the preview, we wrap the block in border
            withBorderInPreview={name === 'base-background'}
        />
    );
});

ThemeUtilityColorEditor.displayName = 'ThemeUtilityColorEditor';

const BrandColorEditor: React.FC<{theme: Theme}> = ({theme}) => {
    const [brandColor, setBrandColor] = useThemePaletteColor({token: 'brand', theme});

    return (
        <ColorPickerInput
            value={brandColor.value}
            defaultValue={brandColor.value}
            onChange={setBrandColor}
        />
    );
};

const textBrandContrastDefaults = {
    light: DEFAULT_THEME.utilityColors['text-brand-contrast'].light,
    dark: DEFAULT_THEME.utilityColors['text-brand-contrast'].dark,
};

const TextContrastColorEditor: React.FC<{theme: Theme}> = ({theme}) => {
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
                selected={brandTextColor === textBrandContrastDefaults.light.ref}
                onClick={() =>
                    setBrandTextColor(
                        textBrandContrastDefaults.light.value,
                        textBrandContrastDefaults.light.ref,
                    )
                }
                textProps={{
                    style: {
                        ...BASE_CARD_BUTTON_STYLES,
                        color: textBrandContrastDefaults.light.value,
                        backgroundColor: brandColor.value,
                    },
                }}
            />
            <SelectableCard
                className={b('text-card')}
                text="White text"
                selected={brandTextColor === textBrandContrastDefaults.dark.ref}
                onClick={() =>
                    setBrandTextColor(
                        textBrandContrastDefaults.dark.value,
                        textBrandContrastDefaults.dark.ref,
                    )
                }
                textProps={{
                    style: {
                        ...BASE_CARD_BUTTON_STYLES,
                        color: textBrandContrastDefaults.dark.value,
                        backgroundColor: brandColor.value,
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

export const MainSettings = React.memo(
    ({advancedModeEnabled, toggleAdvancedMode}: MainSettingsProps) => {
        const {t} = useTranslation('themes');

        const rows = React.useMemo<ThemableRow[]>(() => {
            return [
                {
                    id: 'base-background',
                    title: t('page_background'),
                    render: (theme) => (
                        <ThemeUtilityColorEditor theme={theme} name="base-background" />
                    ),
                },
                {
                    id: 'brand',
                    title: t('brand_color'),
                    render: (theme) => <BrandColorEditor theme={theme} />,
                },
                {
                    id: 'text-brand-contrast',
                    title: t('label_text-on-brand'),
                    render: (theme) => <TextContrastColorEditor theme={theme} />,
                    renderTitle: () => (
                        <div className={b('text-contrast-title')}>
                            <Text variant="body-2">{t('label_text-on-brand')}</Text>
                        </div>
                    ),
                },
            ];
        }, [t]);

        return (
            <ThemeSection className={b()} title={t('title_brand-palette-foundations')}>
                <ThemableSettings
                    title={t('label_basic-brand-colors')}
                    rows={rows}
                    addButton={
                        <Button
                            className={b('switch-button')}
                            onClick={toggleAdvancedMode}
                            view="outlined-action"
                            size="xl"
                        >
                            <Icon data={Sliders} size={20} />
                            {advancedModeEnabled
                                ? t('hide_advanced_settings')
                                : t('advanced_settings')}
                        </Button>
                    }
                />
            </ThemeSection>
        );
    },
);

MainSettings.displayName = 'MainSettings';
