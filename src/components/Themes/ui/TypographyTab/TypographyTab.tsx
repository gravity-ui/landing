import {Sliders} from '@gravity-ui/icons';
import {Button, Flex, Icon} from '@gravity-ui/uikit';
import React from 'react';

import {block} from '../../../../utils';
import {useThemeCreator, useThemeCreatorMethods} from '../../hooks';
import {ExportThemeSection} from '../ExportThemeSection/ExportThemeSection';

import {AdvanceTypographySettings} from './AdvanceTypographySettings';
import {FontFamilyPicker} from './FontFamilyPicker';
import {Preview} from './Preview';
import './TypographyTab.scss';

const b = block('typography-tab');

export const TypographyTab = () => {
    const {
        typography: {isAdvancedActive},
    } = useThemeCreator();

    const {updateAdvancedTypography} = useThemeCreatorMethods();

    return (
        <Flex direction="column" alignItems="flex-start" gap={10} className={b()}>
            <FontFamilyPicker />
            <Preview />
            <Button size="xl" view="outlined-action" onClick={() => updateAdvancedTypography()}>
                <Icon data={Sliders} />
                {isAdvancedActive ? 'Hide Advanced Settings' : 'Advanced Settings'}
            </Button>
            {isAdvancedActive && <AdvanceTypographySettings />}
            <ExportThemeSection />
        </Flex>
    );
};
