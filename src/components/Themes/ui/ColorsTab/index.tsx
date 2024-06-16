import {Grid} from '@gravity-ui/page-constructor';
import {Flex} from '@gravity-ui/uikit';
import React from 'react';

import {BasicPalette} from '../BasicPalette/BasicPalette';
import {MainSettings} from '../MainSettings/MainSettings';
import {EditableColorOption, PrivateColorsSettings} from '../PrivateColorsSettings';

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
    const [advancedModeEnabled, toggleAdvancedMode] = React.useReducer(
        (enabled) => !enabled,
        false,
    );

    return (
        <Grid>
            <Flex direction="column" gap={10}>
                <MainSettings
                    advancedModeEnabled={advancedModeEnabled}
                    toggleAdvancedMode={toggleAdvancedMode}
                />
                {advancedModeEnabled && (
                    <React.Fragment>
                        <BasicPalette />
                        <PrivateColorsSettings
                            title="Advanced Brand Palette"
                            options={ADVANCED_COLORS_OPTIONS}
                        />
                        <PrivateColorsSettings
                            title="Additional Colors"
                            options={ADDITIONAL_COLORS_OPTIONS}
                        />
                    </React.Fragment>
                )}
            </Flex>
        </Grid>
    );
};
