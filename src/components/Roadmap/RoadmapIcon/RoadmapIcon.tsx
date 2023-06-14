import {CircleCheck, Clock} from '@gravity-ui/icons';
import {Icon, IconProps} from '@gravity-ui/uikit';
import React from 'react';

import RoadmapCicle from '../../../assets/icons/roadmap-circle.svg';
import {block} from '../../../utils';
import {RoadmapEventStatus} from '../types';

import './RoadmapIcon.scss';

const b = block('roadmap-icon');

interface RoadmapIconProps {
    status: RoadmapEventStatus;
}

const statusToIcon: Record<RoadmapEventStatus, IconProps['data']> = {
    [RoadmapEventStatus.COMPLETED]: CircleCheck,
    [RoadmapEventStatus.IN_PROGRESS]: Clock,
    [RoadmapEventStatus.PLANNED]: RoadmapCicle,
};

const ICON_HEIGHT = 28;

export const RoadmapIcon: React.FC<RoadmapIconProps> = ({status}) => (
    <div
        className={b({
            completed: status === RoadmapEventStatus.COMPLETED,
            progress: status === RoadmapEventStatus.IN_PROGRESS,
        })}
    >
        <Icon data={statusToIcon[status]} size={ICON_HEIGHT} className={b('icon')} />
    </div>
);
