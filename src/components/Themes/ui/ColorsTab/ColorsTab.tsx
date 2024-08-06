import {Flex} from '@gravity-ui/uikit';
import React from 'react';
import {Trans, useTranslation} from 'react-i18next';

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

const ADVANCED_COLORS_OPTIONS: EditableColorOption[] = [
    {
        title: 'Hovered Brand Color',
        name: 'base-brand-hover',
    },
    {
        title: 'Brand Text',
        name: 'text-brand',
    },
    {
        title: 'Higher Contrast Brand Text',
        name: 'text-brand-heavy',
    },
    {
        title: 'Brand Line Color',
        name: 'line-brand',
    },
    {
        title: 'Selection Background',
        name: 'base-selection',
    },
    {
        title: 'Hovered Selection Background',
        name: 'base-selection-hover',
    },
];

const ADDITIONAL_COLORS_OPTIONS: EditableColorOption[] = [
    {
        title: 'Link',
        name: 'text-link',
    },
    {
        title: 'Hovered Link',
        name: 'text-link-hover',
    },
    {
        title: 'Visited Link',
        name: 'text-link-visited',
    },
    {
        title: 'Hovered Visited Link',
        name: 'text-link-visited-hover',
    },
];

export const ColorsTab = () => {
    const {t} = useTranslation('themes');

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
                        options={ADVANCED_COLORS_OPTIONS}
                    />
                    <PrivateColorsSettings
                        title={t('additional_colors')}
                        cardsTitle="Link Colors"
                        options={ADDITIONAL_COLORS_OPTIONS}
                    />
                </React.Fragment>
            )}
            <ComponentPreview />
            <ExportThemeSection />
        </Flex>
    );
};
