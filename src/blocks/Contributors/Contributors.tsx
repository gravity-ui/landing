import {AnimateBlock, YFMWrapper} from '@gravity-ui/page-constructor';
import {Avatar, Button, Link, Skeleton} from '@gravity-ui/uikit';
import {useTranslation} from 'next-i18next';
import React from 'react';
import {
    ContributorsNewcomersSkeleton,
    LazyExpandableContributorsList,
} from 'src/components/ExpandableContributorList';
import {
    SKELETON_HEADER_COUNT_HEIGHT,
    SKELETON_HEADER_COUNT_WIDTH,
    SKELETON_HEADER_TITLE_HEIGHT,
    SKELETON_HEADER_TITLE_WIDTH,
} from 'src/components/ExpandableContributorList/contributorsSkeletonPlacements';

import {Contributor} from '../../api';
import {block} from '../../utils';

import './Contributors.scss';
import {ContributorsProps} from './types';

const b = block('contributors');

export const ContributorsBlock: React.FC<ContributorsProps> = ({animated, title, link}) => {
    const {t} = useTranslation();
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [contributorsCount, setContributorsCount] = React.useState('');
    const [newcomers, setNewcomers] = React.useState<Contributor[]>([]);

    return (
        <AnimateBlock className={b()} animate={animated}>
            <div className={b('header-wrapper')}>
                <h2 className={b('header-title')}>
                    {isLoaded ? (
                        <YFMWrapper
                            content={title}
                            modifiers={{constructor: true}}
                            contentClassName={b('header-title-content')}
                        />
                    ) : (
                        <Skeleton
                            className={b('header-skeleton')}
                            style={{
                                width: SKELETON_HEADER_TITLE_WIDTH,
                                height: SKELETON_HEADER_TITLE_HEIGHT,
                            }}
                        />
                    )}
                </h2>
                <div className={b('header-count')}>
                    {isLoaded ? (
                        contributorsCount
                    ) : (
                        <Skeleton
                            className={b('header-skeleton')}
                            style={{
                                width: SKELETON_HEADER_COUNT_WIDTH,
                                height: SKELETON_HEADER_COUNT_HEIGHT,
                            }}
                        />
                    )}
                </div>
                <div>
                    <Button
                        size="xl"
                        pin="circle-circle"
                        view="outlined"
                        href={link.href}
                        target="_blank"
                    >
                        {link.title}
                    </Button>
                </div>
            </div>

            {!isLoaded && <ContributorsNewcomersSkeleton />}

            {isLoaded && newcomers.length > 0 && (
                <section className={b('section', {newcomers: true})}>
                    <span className={b('section-title')}>{t('common:recently_joined')}</span>
                    <div className={b('newcomers-avatars')}>
                        {newcomers.map(({login, avatarUrl, url}) => (
                            <Link key={login} href={url} target="_blank" title={`@${login}`}>
                                <Avatar text={login} imgUrl={avatarUrl} loading="lazy" size="l" />
                            </Link>
                        ))}
                    </div>
                </section>
            )}

            <section className={b('section')}>
                {isLoaded && newcomers.length > 0 && (
                    <span className={b('section-title')}>{t('common:community')}</span>
                )}
                <LazyExpandableContributorsList
                    onLoad={(_, props) => {
                        setIsLoaded(true);
                        setContributorsCount(String(props.contributors.length) || '0');
                        setNewcomers((props.newcomers ?? []).slice(0, 10));
                    }}
                />
            </section>
        </AnimateBlock>
    );
};
