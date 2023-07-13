import {PageConstructor} from '@gravity-ui/page-constructor';
import {useTranslation} from 'next-i18next';
import React from 'react';

import {CustomBanner} from '../../blocks/CustomBanner/CustomBanner';
import {CustomExtendedFeatures} from '../../blocks/CustomExtendedFeatures/CustomExtendedFeatures';
import {CustomHeader} from '../../blocks/CustomHeader/CustomHeader';
import {Examples} from '../../blocks/Examples/Examples';
import {RoadmapBlock} from '../../blocks/RoadmapBlock/RoadmapBlock';
import {CustomBlock} from '../../blocks/constants';
import {en, ru} from '../../content/landing';
import {useSectionScroll} from '../../hooks/useSectionScroll';
import {block} from '../../utils';

import './Landing.scss';

const b = block('landing');

export const Landing: React.FC = () => {
    useSectionScroll();

    const {i18n} = useTranslation();

    return (
        <div className={b()}>
            <PageConstructor
                content={i18n.language === 'ru' ? ru : en}
                custom={{
                    blocks: {
                        [CustomBlock.CustomHeader]: CustomHeader,
                        [CustomBlock.CustomExtendedFeatures]: CustomExtendedFeatures,
                        [CustomBlock.CustomBanner]: CustomBanner,
                        [CustomBlock.Examples]: Examples,
                        [CustomBlock.Roadmap]: RoadmapBlock,
                    },
                }}
            />
        </div>
    );
};
