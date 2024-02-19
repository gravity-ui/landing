import {PageConstructor, PageContent} from '@gravity-ui/page-constructor';
import {useTranslation} from 'next-i18next';
import React from 'react';

import {CustomExtendedFeatures} from '../../blocks/CustomExtendedFeatures/CustomExtendedFeatures';
import {CustomHeader} from '../../blocks/CustomHeader/CustomHeader';
import {Examples} from '../../blocks/Examples/Examples';
import {RoadmapBlock} from '../../blocks/RoadmapBlock/RoadmapBlock';
import TemplatesBlock from '../../blocks/TemplatesBlock/TemplatesBlock';
import {CustomBlock} from '../../blocks/constants';
import {getLanding} from '../../content/landing';
import {useSectionScroll} from '../../hooks/useSectionScroll';

export const Landing: React.FC = () => {
    const {t} = useTranslation();
    useSectionScroll();

    return (
        <PageConstructor
            content={getLanding(t) as PageContent}
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
