import {PageConstructor, PageContent} from '@gravity-ui/page-constructor';
import {useTranslation} from 'next-i18next';
import {useRouter} from 'next/router';
import React from 'react';
import {UISamplesBlock} from 'src/blocks/UISamples/UISamples';
import {CustomPageContent} from 'src/content/types';

import {ContributorsBlock} from '../../blocks/Contributors/Contributors';
import {CustomExtendedFeatures} from '../../blocks/CustomExtendedFeatures/CustomExtendedFeatures';
import {CustomHeader} from '../../blocks/CustomHeader/CustomHeader';
import {GithubStarsBlock} from '../../blocks/GithubStarsBlock/GithubStarsBlock';
import {IFrameBlock} from '../../blocks/IFrameBlock/IFrameBlock';
import {Libraries} from '../../blocks/Libraries/Libraries';
import {RoadmapBlock} from '../../blocks/RoadmapBlock/RoadmapBlock';
import TemplatesBlock from '../../blocks/TemplatesBlock/TemplatesBlock';
import {CustomBlock} from '../../blocks/constants';
import {getLanding} from '../../content/landing';
import {getRtlLanding} from '../../content/landing-rtl';
import {useSectionScroll} from '../../hooks/useSectionScroll';

const filterBlocks = ({blocks, ...rest}: CustomPageContent): CustomPageContent => {
    const hasCustomHeaderWithBanner = Boolean(
        blocks.find((block) => block.type === CustomBlock.CustomHeader && block.banner),
    );

    return {
        blocks: blocks.filter((block) => {
            switch (true) {
                case hasCustomHeaderWithBanner &&
                    block.type === CustomBlock.GithubStars &&
                    block.device === 'mobile':
                    return false;
                default:
                    return true;
            }
        }),
        ...rest,
    };
};

export const Landing: React.FC = () => {
    const {t} = useTranslation();
    const {pathname} = useRouter();

    useSectionScroll();

    return (
        <>
            <GithubStarsBlock device="desktop" />
            <PageConstructor
                content={
                    filterBlocks(
                        pathname === '/rtl' ? getRtlLanding(t) : getLanding(t),
                    ) as PageContent
                }
                custom={{
                    blocks: {
                        [CustomBlock.GithubStars]: GithubStarsBlock,
                        [CustomBlock.CustomHeader]: CustomHeader,
                        [CustomBlock.CustomExtendedFeatures]: CustomExtendedFeatures,
                        [CustomBlock.Libraries]: Libraries,
                        [CustomBlock.UISamples]: UISamplesBlock,
                        [CustomBlock.Roadmap]: RoadmapBlock,
                        [CustomBlock.Templates]: TemplatesBlock,
                        [CustomBlock.Contributors]: ContributorsBlock,
                        [CustomBlock.Iframe]: IFrameBlock,
                    },
                }}
            />
        </>
    );
};
