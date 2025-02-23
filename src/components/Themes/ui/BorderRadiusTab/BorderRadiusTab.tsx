import {Flex} from '@gravity-ui/uikit';
import React from 'react';

import {block} from '../../../../utils';
import {useThemeCreator, useThemeCreatorMethods} from '../../hooks';
import {RadiusPresetName} from '../../lib/types';
import {ExportThemeSection} from '../ExportThemeSection/ExportThemeSection';

import {BorderPresets} from './BorderPresets/BorderPresets';
import './BorderRadiusTab.scss';
import {ComponentPreview} from './ComponentPreview/ComponentPreview';
import {CustomRadius} from './CustomRadius/CustomRadius';

const b = block('border-radius-tab');

export const BorderRadiusTab = () => {
    const themeState = useThemeCreator();

    const {changeRadiusPreset, updateCustomRadiusPreset} = useThemeCreatorMethods();

    const preset = themeState.borders.preset;
    const values = themeState.borders.values;

    return (
        <Flex direction="column" className={b()}>
            <BorderPresets selectedPreset={preset} onClick={changeRadiusPreset} />
            {preset === RadiusPresetName.Custom && (
                <CustomRadius values={values} onUpdate={updateCustomRadiusPreset} />
            )}
            <ComponentPreview />
            <ExportThemeSection />
        </Flex>
    );
};
