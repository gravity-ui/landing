import {Flex} from '@gravity-ui/uikit';
import React from 'react';
import {useTranslation} from 'react-i18next';

import {block} from '../../../../utils';
import {BasicPalette} from '../BasicPalette/BasicPalette';
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
        name: 'text-brand-contrast',
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

    const [advancedModeEnabled, toggleAdvancedMode] = React.useReducer(
        (enabled) => !enabled,
        false,
    );

    return (
        <Flex direction="column" className={b()}>
            <MainSettings
                advancedModeEnabled={advancedModeEnabled}
                toggleAdvancedMode={toggleAdvancedMode}
            />
            {advancedModeEnabled && (
                <React.Fragment>
                    <BasicPalette />
                    <PrivateColorsSettings
                        title={t('advanced_brand_palette')}
                        options={ADVANCED_COLORS_OPTIONS}
                    />
                    <PrivateColorsSettings
                        title={t('additional_colors')}
                        options={ADDITIONAL_COLORS_OPTIONS}
                    />
                </React.Fragment>
            )}
            <ComponentPreview />
            <ExportThemeSection />
        </Flex>
    );
};
