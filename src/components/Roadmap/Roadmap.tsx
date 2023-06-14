import React from 'react';

import {block} from '../../utils';

import './Roadmap.scss';
import {RoadmapItem} from './RoadmapItem/RoadmapItem';
import {RoadmapEvent} from './types';

const b = block('roadmap');

interface RoadmapProps {
    events: RoadmapEvent[];
}

export const Roadmap: React.FC<RoadmapProps> = ({events}) => (
    <ul className={b()}>
        {events.map((event, idx) => (
            <RoadmapItem key={idx} event={event} />
        ))}
    </ul>
);
