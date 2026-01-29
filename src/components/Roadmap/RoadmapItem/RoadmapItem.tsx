import {dateTime} from '@gravity-ui/date-utils';
import {ChevronRight} from '@gravity-ui/icons';
import {YFMWrapper} from '@gravity-ui/page-constructor';
import {Icon, Link} from '@gravity-ui/uikit';
import {useTranslation} from 'next-i18next';
import React from 'react';

import {useLocale} from '../../../hooks/useLocale';
import {block} from '../../../utils';
import {RoadmapIcon} from '../RoadmapIcon/RoadmapIcon';
import {RoadmapTask, RoadmapTaskStatus} from '../types';

import './RoadmapItem.scss';

const b = block('roadmap-item');

interface RoadmapItemProps {
    task: RoadmapTask;
}

export const RoadmapItem: React.FC<RoadmapItemProps> = ({task}) => {
    const {title, url, status, completedDate} = task;
    const {t} = useTranslation();
    const locale = useLocale();

    const inProgress = status === RoadmapTaskStatus.InProgress;
    const completed = status === RoadmapTaskStatus.Completed;

    const showStatus = inProgress || (completed && completedDate);

    const taskContent = (
        <div className={b('wrapper')}>
            <div className={b('content')}>
                <YFMWrapper content={title} modifiers={{constructor: true}} />
                {showStatus && (
                    <span className={b('status')}>
                        {inProgress && t('roadmap_inProgress')}
                        {completed &&
                            completedDate &&
                            dateTime({
                                input: new Date(completedDate),
                                lang: locale,
                            }).fromNow()}
                    </span>
                )}
            </div>
            {url && <Icon className={b('arrow')} data={ChevronRight} size={16} />}
        </div>
    );

    return (
        <li
            className={b({
                completed,
                progress: inProgress,
                planned: status === RoadmapTaskStatus.Planned,
            })}
        >
            <div className={b('separator')}>
                <RoadmapIcon status={status} />
            </div>
            {url ? (
                <Link href={url} className={b('link')} target="_blank">
                    {taskContent}
                </Link>
            ) : (
                taskContent
            )}
        </li>
    );
};
