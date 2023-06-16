import React from 'react';

import {block} from '../../utils';

import './Roadmap.scss';
import {RoadmapItem} from './RoadmapItem/RoadmapItem';
import {RoadmapTask} from './types';

const b = block('roadmap');

interface RoadmapProps {
    tasks: RoadmapTask[];
}

export const Roadmap: React.FC<RoadmapProps> = ({tasks}) => (
    <ul className={b()}>
        {tasks.map((task, idx) => (
            <RoadmapItem key={idx} task={task} />
        ))}
    </ul>
);
