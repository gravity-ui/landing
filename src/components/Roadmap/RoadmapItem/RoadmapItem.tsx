import {dateTime} from '@gravity-ui/date-utils';
import {HTML} from '@gravity-ui/page-constructor';
import {ChevronRight} from 'landing-icons';
import {Icon, Link} from 'landing-uikit';
import {useTranslation} from 'next-i18next';
import React from 'react';

import {block} from '../../../utils';
import {RoadmapIcon} from '../RoadmapIcon/RoadmapIcon';
import {RoadmapTask, RoadmapTaskStatus} from '../types';

import './RoadmapItem.scss';

const b = block('roadmap-item');

interface RoadmapItemProps {
    task: RoadmapTask;
}

export const RoadmapItem: React.FC<RoadmapItemProps> = ({task}) => {
    const {t, i18n} = useTranslation();

    const inProgress = task.status === RoadmapTaskStatus.InProgress;
    const completed = task.status === RoadmapTaskStatus.Completed;

    const showStatus = inProgress || (completed && task.completedDate);

    const taskContent = (
        <div className={b('wrapper')}>
            <div className={b('content')}>
                <HTML>{task.title}</HTML>
                {showStatus && (
                    <span className={b('status')}>
                        {inProgress && t('roadmap_inProgress')}
                        {completed &&
                            task.completedDate &&
                            dateTime({
                                input: new Date(task.completedDate),
                                lang: i18n.language,
                            }).fromNow()}
                    </span>
                )}
            </div>
            {task.url && <Icon className={b('arrow')} data={ChevronRight} size={16} />}
        </div>
    );

    return (
        <li
            className={b({
                completed,
                progress: inProgress,
                planned: task.status === RoadmapTaskStatus.Planned,
            })}
        >
            <div className={b('separator')}>
                <RoadmapIcon status={task.status} />
            </div>
            {task.url ? (
                <Link href={task.url} className={b('link')} target="_blank">
                    {taskContent}
                </Link>
            ) : (
                taskContent
            )}
        </li>
    );
};
