import {
    Timeline as GravityTimeline,
    TimelineEvent,
    TimelineMarker,
    TimelineSection,
} from '@gravity-ui/timeline';
import {TimelineCanvas} from '@gravity-ui/timeline/react';
import React, {FC} from 'react';

import {block} from '../../../utils';

import './Timeline.scss';

const b = block('timeline-canvas-wrap');

type Props = {
    timeline: GravityTimeline<TimelineEvent, TimelineMarker, TimelineSection>;
};

export const Timeline: FC<Props> = ({timeline}) => {
    return (
        <div className={b()}>
            <TimelineCanvas timeline={timeline} />
        </div>
    );
};
