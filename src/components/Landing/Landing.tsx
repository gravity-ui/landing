import {PageConstructor} from '@gravity-ui/page-constructor';
import {useRouter} from 'next/router';
import React from 'react';

import {CustomExtendedFeatures} from '../../blocks/CustomExtendedFeatures/CustomExtendedFeatures';
import {CustomHeader} from '../../blocks/CustomHeader/CustomHeader';
import {Examples} from '../../blocks/Examples/Examples';
import {RoadmapBlock} from '../../blocks/RoadmapBlock/RoadmapBlock';
import TemplatesBlock from '../../blocks/TemplatesBlock/TemplatesBlock';
import {CustomBlock} from '../../blocks/constants';
import {landing} from '../../content/landing';
import {landingRTL} from '../../content/landing-rtl';
import {useSectionScroll} from '../../hooks/useSectionScroll';

const contentByRoute = {
    '/': landing,
    '/rtl': landingRTL,
};

export const Landing: React.FC = () => {
    const {pathname} = useRouter();

    useSectionScroll();

    return (
        <PageConstructor
            content={contentByRoute[pathname as keyof typeof contentByRoute]}
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
