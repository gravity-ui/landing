import {Skeleton} from '@gravity-ui/uikit';
import React from 'react';

import {block} from '../../utils';

import './ExpandableContributorList.scss';

const b = block('expandable-contributor-list');

type SkeletonAvatarGridProps = {
    count: number;
    className?: string;
};

export const SkeletonAvatarGrid: React.FC<SkeletonAvatarGridProps> = ({count, className}) => {
    return (
        <div className={`${b('skeleton-avatar-grid')} ${className ?? ''}`}>
            {Array.from({length: count}, (_, index) => (
                <div key={index} className={b('skeleton-avatar-cell')}>
                    <Skeleton className={b('skeleton-avatar')} />
                </div>
            ))}
        </div>
    );
};
