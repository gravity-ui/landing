import {Flex} from '@gravity-ui/uikit';
import React from 'react';

import {block} from '../../../../utils';
import {useThemeCreator, useThemeCreatorMethods} from '../../hooks';
import {BrandColors} from '../BrandColors/BrandColors';
import {ComponentPreview} from '../ComponentPreview/ComponentPreview';
import {ExportThemeSection} from '../ExportThemeSection/ExportThemeSection';

import {AdvancedSettings} from './AdvancedSettings/AdvancedSettings';
import {BasicSettings} from './BasicSettings/BasicSettings';
import './ColorsTab.scss';

const b = block('colors-tab');

export const ColorsTab = () => {
    const {colorsSettingsType} = useThemeCreator();
    const {setAdvancedMode, openMainSettings} = useThemeCreatorMethods();

    const handleSelectCustomColor = React.useCallback(() => {
        openMainSettings();
        setAdvancedMode(true);
    }, [openMainSettings, setAdvancedMode]);

    return (
        <Flex direction="column" className={b()}>
            <BrandColors onSelectCustomColor={handleSelectCustomColor} />
            {colorsSettingsType === 'basic' && <BasicSettings />}
            {colorsSettingsType === 'advanced' && <AdvancedSettings />}
            <ComponentPreview />
            <ExportThemeSection />
        </Flex>
    );
};
