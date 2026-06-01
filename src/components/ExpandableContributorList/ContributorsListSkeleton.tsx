import {Skeleton} from '@gravity-ui/uikit';
import React from 'react';

import {block} from '../../utils';

import './ExpandableContributorList.scss';
import {SkeletonAvatarGrid} from './SkeletonAvatarGrid';
import {
    COMMUNITY_AVATAR_ROWS,
    SKELETON_SECTION_TITLE_HEIGHT,
    SKELETON_SECTION_TITLE_WIDTH,
} from './contributorsSkeletonPlacements';

const b = block('expandable-contributor-list');

export const ContributorsListSkeleton: React.FC = () => {
    return (
        <div className={b('skeleton')}>
            <Skeleton
                className={b('skeleton-section-title')}
                style={{
                    width: SKELETON_SECTION_TITLE_WIDTH,
                    height: SKELETON_SECTION_TITLE_HEIGHT,
                }}
            />
            <div className={b('skeleton-grid-wrapper')}>
                <SkeletonAvatarGrid rows={COMMUNITY_AVATAR_ROWS} />
                <div className={b('inset-shadow')} />
            </div>
            <Skeleton className={b('skeleton-button')} />
        </div>
    );
};
