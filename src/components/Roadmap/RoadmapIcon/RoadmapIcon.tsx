import {CircleCheck, Clock} from '@gravity-ui/icons';
import {Icon, IconProps} from '@gravity-ui/uikit';
import React from 'react';

import RoadmapCicle from '../../../assets/icons/roadmap-circle.svg';
import {block} from '../../../utils';
import {RoadmapTaskStatus} from '../types';

import './RoadmapIcon.scss';

const b = block('roadmap-icon');

interface RoadmapIconProps {
    status: RoadmapTaskStatus;
}

const statusToIcon: Record<RoadmapTaskStatus, IconProps['data']> = {
    [RoadmapTaskStatus.Completed]: CircleCheck,
    [RoadmapTaskStatus.InProgress]: Clock,
    [RoadmapTaskStatus.Planned]: RoadmapCicle,
};

const ICON_HEIGHT = 28;

export const RoadmapIcon: React.FC<RoadmapIconProps> = ({status}) => (
    <div
        className={b({
            completed: status === RoadmapTaskStatus.Completed,
            progress: status === RoadmapTaskStatus.InProgress,
        })}
    >
        <Icon data={statusToIcon[status]} size={ICON_HEIGHT} className={b('icon')} />
    </div>
);
