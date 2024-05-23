import {PageConstructor, PageContent} from '@gravity-ui/page-constructor';
import {useTranslation} from 'next-i18next';
import {useRouter} from 'next/router';
import React from 'react';

import {CustomExtendedFeatures} from '../../blocks/CustomExtendedFeatures/CustomExtendedFeatures';
import {CustomHeader} from '../../blocks/CustomHeader/CustomHeader';
import {Examples} from '../../blocks/Examples/Examples';
import {GithubStarsBlock} from '../../blocks/GithubStarsBlock/GithubStarsBlock';
import {RoadmapBlock} from '../../blocks/RoadmapBlock/RoadmapBlock';
import TemplatesBlock from '../../blocks/TemplatesBlock/TemplatesBlock';
import {CustomBlock} from '../../blocks/constants';
import {getLanding} from '../../content/landing';
import {getRtlLanding} from '../../content/landing-rtl';
import {useSectionScroll} from '../../hooks/useSectionScroll';

export const Landing: React.FC = () => {
    const {t} = useTranslation();
    const {pathname} = useRouter();

    useSectionScroll();

    return (
        <>
            <GithubStarsBlock device="desktop" />
            <PageConstructor
                content={(pathname === '/rtl' ? getRtlLanding(t) : getLanding(t)) as PageContent}
                custom={{
                    blocks: {
                        [CustomBlock.GithubStars]: GithubStarsBlock,
                        [CustomBlock.CustomHeader]: CustomHeader,
                        [CustomBlock.CustomExtendedFeatures]: CustomExtendedFeatures,
                        [CustomBlock.Examples]: Examples,
                        [CustomBlock.Roadmap]: RoadmapBlock,
                        [CustomBlock.Templates]: TemplatesBlock,
                    },
                }}
            />
        </>
    );
};
