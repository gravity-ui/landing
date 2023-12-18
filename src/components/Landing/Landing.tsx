import {PageConstructor} from '@gravity-ui/page-constructor';
import React from 'react';

import {CustomExtendedFeatures} from '../../blocks/CustomExtendedFeatures/CustomExtendedFeatures';
import {CustomHeader} from '../../blocks/CustomHeader/CustomHeader';
import {Examples} from '../../blocks/Examples/Examples';
import {RoadmapBlock} from '../../blocks/RoadmapBlock/RoadmapBlock';
import TemplatesBlock from '../../blocks/TemplatesBlock/TemplatesBlock';
import {CustomBlock} from '../../blocks/constants';
import {landing} from '../../content/landing';
import {useSectionScroll} from '../../hooks/useSectionScroll';

export const Landing: React.FC = () => {
    useSectionScroll();

    return (
        <PageConstructor
            content={landing}
            custom={{
                blocks: {
                    [CustomBlock.CustomHeader]: CustomHeader,
                    [CustomBlock.CustomExtendedFeatures]: CustomExtendedFeatures,
                    [CustomBlock.Examples]: Examples,
                    [CustomBlock.Roadmap]: RoadmapBlock,
                    [CustomBlock.Templates]: TemplatesBlock,
                },
            }}
        />
    );
};
