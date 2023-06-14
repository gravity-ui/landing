import {ChevronRight} from '@gravity-ui/icons';
import {HTML} from '@gravity-ui/page-constructor';
import {Icon, Link} from '@gravity-ui/uikit';
import React from 'react';
import TimeAgo from 'react-timeago';

import {block} from '../../../utils';
import {RoadmapIcon} from '../RoadmapIcon/RoadmapIcon';
import {RoadmapEvent, RoadmapEventStatus} from '../types';

import './RoadmapItem.scss';

const b = block('roadmap-item');

interface RoadmapItemProps {
    event: RoadmapEvent;
}

export const RoadmapItem: React.FC<RoadmapItemProps> = ({event}) => {
    const inProgress = event.status === RoadmapEventStatus.IN_PROGRESS;
    const completed = event.status === RoadmapEventStatus.COMPLETED;

    const showStatus = inProgress || (completed && event.completedDate);

    const eventContent = (
        <div className={b('wrapper')}>
            <div className={b('content')}>
                <HTML>{event.title}</HTML>
                {showStatus && (
                    <span className={b('status')}>
                        {inProgress && 'In progress'}
                        {completed && event.completedDate && <TimeAgo date={event.completedDate} />}
                    </span>
                )}
            </div>
            {event.url && <Icon className={b('arrow')} data={ChevronRight} size={16} />}
        </div>
    );

    return (
        <li
            className={b({
                completed,
                progress: inProgress,
                planned: event.status === RoadmapEventStatus.PLANNED,
            })}
        >
            <div className={b('separator')}>
                <RoadmapIcon status={event.status} />
            </div>
            {event.url ? (
                <Link href={event.url} className={b('link')} target="_blank">
                    {eventContent}
                </Link>
            ) : (
                eventContent
            )}
        </li>
    );
};
