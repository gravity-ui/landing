import {PageConstructor} from '@gravity-ui/page-constructor';
import React from 'react';

import {CustomBanner} from '../../blocks/CustomBanner/CustomBanner';
import {CustomExtendedFeatures} from '../../blocks/CustomExtendedFeatures/CustomExtendedFeatures';
import {CustomHeader} from '../../blocks/CustomHeader/CustomHeader';
import {Examples} from '../../blocks/Examples/Examples';
import {RoadmapBlock} from '../../blocks/RoadmapBlock/RoadmapBlock';
import {CustomBlock} from '../../blocks/constants';
import {landing} from '../../content/landing';
import {block} from '../../utils';

import './Landing.scss';

const b = block('landing');

export const Landing: React.FC = () => {
    return (
        <div className={b()}>
            <PageConstructor
                content={landing}
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
