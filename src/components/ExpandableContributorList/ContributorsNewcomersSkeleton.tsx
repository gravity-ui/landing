import {Skeleton} from '@gravity-ui/uikit';
import React from 'react';

import {block} from '../../utils';

import {
    NEWCOMERS_AVATAR_COUNT,
    SKELETON_NEWCOMERS_AVATAR_SIZE,
    SKELETON_SECTION_TITLE_HEIGHT,
    SKELETON_SECTION_TITLE_WIDTH,
} from './contributorsSkeletonPlacements';

const b = block('contributors');

export const ContributorsNewcomersSkeleton: React.FC = () => {
    return (
        <section className={b('section', {newcomers: true})}>
            <Skeleton
                className={b('skeleton-title')}
                style={{
                    width: SKELETON_SECTION_TITLE_WIDTH,
                    height: SKELETON_SECTION_TITLE_HEIGHT,
                }}
            />
            <div className={b('newcomers-skeleton-avatars')}>
                {Array.from({length: NEWCOMERS_AVATAR_COUNT}, (_, index) => (
                    <div key={index} className={b('newcomers-skeleton-avatar-cell')}>
                        <Skeleton
                            className={b('newcomers-skeleton-avatar')}
                            style={{
                                width: SKELETON_NEWCOMERS_AVATAR_SIZE,
                                height: SKELETON_NEWCOMERS_AVATAR_SIZE,
                            }}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};
