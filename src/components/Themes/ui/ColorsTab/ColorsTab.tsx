import {Flex} from '@gravity-ui/uikit';
import {Trans, useTranslation} from 'next-i18next';
import React from 'react';

import {block} from '../../../../utils';
import {useThemeCreator, useThemeCreatorMethods} from '../../hooks';
import {BasicPalette} from '../BasicPalette/BasicPalette';
import {BrandColors} from '../BrandColors/BrandColors';
import {ComponentPreview} from '../ComponentPreview/ComponentPreview';
import {ExportThemeSection} from '../ExportThemeSection/ExportThemeSection';
import {MainSettings} from '../MainSettings/MainSettings';
import {EditableColorOption, PrivateColorsSettings} from '../PrivateColorsSettings';

import './ColorsTab.scss';

const b = block('colors-tab');

export const ColorsTab = () => {
    const {t, i18n} = useTranslation('themes');

    const advancedColorsOptions = React.useMemo<EditableColorOption[]>(
        () => [
            {
                title: t('label_advanced-colors_base-brand-hover'),
                name: 'base-brand-hover',
            },
            {
                title: t('label_advanced-colors_text-brand'),
                name: 'text-brand',
            },
            {
                title: t('label_advanced-colors_text-brand-heavy'),
                name: 'text-brand-heavy',
            },
            {
                title: t('label_advanced-colors_line-brand'),
                name: 'line-brand',
            },
            {
                title: t('label_advanced-colors_base-selection'),
                name: 'base-selection',
            },
            {
                title: t('label_advanced-colors_base-selection-hover'),
                name: 'base-selection-hover',
            },
        ],
        [i18n.language],
    );

    const additionalColorsOptions = React.useMemo<EditableColorOption[]>(
        () => [
            {
                title: t('label_additional-colors_text-link'),
                name: 'text-link',
            },
            {
                title: t('label_additional-colors_text-link-hover'),
                name: 'text-link-hover',
            },
            {
                title: t('label_additional-colors_text-link-visited'),
                name: 'text-link-visited',
            },
            {
                title: t('label_additional-colors_text-link-visited-hover'),
                name: 'text-link-visited-hover',
            },
        ],
        [i18n.language],
    );

    const {advancedModeEnabled, showMainSettings} = useThemeCreator();
    const {setAdvancedMode, openMainSettings} = useThemeCreatorMethods();

    const toggleAdvancedMode = React.useCallback(
        () => setAdvancedMode(!advancedModeEnabled),
        [setAdvancedMode, advancedModeEnabled],
    );

    const handleSelectCustomColor = React.useCallback(() => {
        openMainSettings();
        setAdvancedMode(true);
    }, [openMainSettings, setAdvancedMode]);

    return (
        <Flex direction="column" className={b()}>
            <BrandColors
                showThemeEditButton={!showMainSettings}
                onEditThemeClick={openMainSettings}
                onSelectCustomColor={handleSelectCustomColor}
            />
            {showMainSettings && (
                <MainSettings
                    advancedModeEnabled={advancedModeEnabled}
                    toggleAdvancedMode={toggleAdvancedMode}
                />
            )}
            {advancedModeEnabled && (
                <React.Fragment>
                    <BasicPalette />
                    <PrivateColorsSettings
                        title={t('advanced_brand_palette')}
                        cardsTitle={
                            <Trans i18nKey="palette_colors_description" t={t}>
                                <br />
                            </Trans>
                        }
                        options={advancedColorsOptions}
                    />
                    <PrivateColorsSettings
                        title={t('additional_colors')}
                        cardsTitle={t('label_links-color')}
                        options={additionalColorsOptions}
                    />
                </React.Fragment>
            )}
            <ComponentPreview />
            <ExportThemeSection />
        </Flex>
    );
};
