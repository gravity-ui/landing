import {Animatable, AnimateBlock, YFMWrapper} from '@gravity-ui/page-constructor';
import React from 'react';

import {Roadmap, RoadmapTask} from '../../components/Roadmap';
import {block} from '../../utils';
import {CustomBlock} from '../constants';

import './RoadmapBlock.scss';

const b = block('roadmap-block');

export type RoadmapProps = Animatable & {
    title: string;
    tasks: RoadmapTask[];
};

export type RoadmapModel = RoadmapProps & {
    type: CustomBlock.Roadmap;
};

export const RoadmapBlock: React.FC<RoadmapProps> = ({animated, title, tasks}) => {
    return (
        <AnimateBlock className={b()} animate={animated}>
            <h2 className={b('title')} data-section="roadmap">
                <YFMWrapper
                    content={title}
                    modifiers={{constructor: true}}
                    contentClassName={b('title-content')}
                />
            </h2>
            <Roadmap tasks={tasks} />
        </AnimateBlock>
    );
};

export default RoadmapBlock;
