import {Sliders} from '@gravity-ui/icons';
import {Button, Flex, Icon} from '@gravity-ui/uikit';
import React, {useState} from 'react';

import {block} from '../../../../utils';
import {ExportThemeSection} from '../ExportThemeSection/ExportThemeSection';

import {AdvanceTypographySettings} from './AdvanceTypographySettings';
import {FontFamilyPicker} from './FontFamilyPicker';
import {Preview} from './Preview';
import './TypographyTab.scss';

const b = block('typography-tab');

export const TypographyTab = () => {
    const [withAdvancedSettings, toggleAdvancedSettings] = useState<boolean>(false);

    return (
        <Flex direction="column" alignItems="flex-start" gap={10} className={b()}>
            <FontFamilyPicker />
            <Preview />
            <Button
                size="xl"
                view="outlined-action"
                onClick={() => toggleAdvancedSettings((prevState) => !prevState)}
            >
                <Icon data={Sliders} />
                {withAdvancedSettings ? 'Hide Advanced Settings' : 'Advanced Settings'}
            </Button>
            {withAdvancedSettings && <AdvanceTypographySettings />}
            <ExportThemeSection />
        </Flex>
    );
};
