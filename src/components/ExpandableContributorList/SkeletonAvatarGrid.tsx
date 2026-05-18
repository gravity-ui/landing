import {Skeleton} from '@gravity-ui/uikit';
import React from 'react';

import {block} from '../../utils';

import './ExpandableContributorList.scss';

const b = block('expandable-contributor-list');

type RowConfig = {
    offset: number;
    count: number;
};

type SkeletonAvatarGridProps = {
    rows: readonly RowConfig[];
    className?: string;
};

export const SkeletonAvatarGrid: React.FC<SkeletonAvatarGridProps> = ({rows, className}) => {
    return (
        <div className={`${b('skeleton-avatar-grid')} ${className ?? ''}`}>
            {rows.map((row, rowIndex) => (
                <div
                    key={rowIndex}
                    className={b('skeleton-avatar-row')}
                    style={{'--skeleton-row-offset': `${row.offset}px`} as React.CSSProperties}
                >
                    {Array.from({length: row.count}, (_, avatarIndex) => (
                        <div key={avatarIndex} className={b('skeleton-avatar-cell')}>
                            <Skeleton className={b('skeleton-avatar')} />
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};
