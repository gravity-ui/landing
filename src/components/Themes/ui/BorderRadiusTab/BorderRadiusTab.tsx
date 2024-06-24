import {Flex} from '@gravity-ui/uikit';
import React from 'react';
// import {useTranslation} from 'react-i18next';

import {block} from '../../../../utils';
// import {useThemeCreator} from '../../hooks';
import {ExportThemeSection} from '../ExportThemeSection/ExportThemeSection';

import {BorderPresets} from './BorderPresets/BorderPresets';
import './BorderRadiusTab.scss';
import {ComponentPreview} from './ComponentPreview/ComponentPreview';
import {CustomRadius} from './CustomRadius/CustomRadius';

const b = block('border-radius-tab');

export const BorderRadiusTab = () => {
    // const {t} = useTransslation('themes');
    // const themeState = useThemeCreator();
    // const [selectedRadius, setSelectedRaduis] = useState();

    return (
        <Flex direction="column" className={b()}>
            <BorderPresets />
            <CustomRadius />
            <ComponentPreview />
            <ExportThemeSection />
        </Flex>
    );
};
