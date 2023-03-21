import {HTML, Image, ThemedImage} from '@gravity-ui/page-constructor';
import {useThemeValue} from '@gravity-ui/page-constructor/build/esm/context/theme/useThemeValue';
import {Icon, Label, Skeleton} from '@gravity-ui/uikit';
import React from 'react';

import calendarIcon from '../../../../assets/icons/calendar.svg';
import starIcon from '../../../../assets/icons/star.svg';
import libsData from '../../../../libs-data.json';
import {block, getMediaImage, getThemedValue} from '../../../../utils';

import './FeatureItem.scss';

const b = block('custom-extended-features-feature-item');

const githubUrl = 'https://github.com/';

export type FeatureItemProps = {
    id?: string;
    title?: string;
    description?: string;
    icon?: ThemedImage;
    contentStyle: Record<string, unknown>;
    githubId?: string;
    npmId?: string;
    storybookUrl?: string;
};

// eslint-disable-next-line complexity
export const FeatureItem: React.FC<FeatureItemProps> = ({
    id,
    title,
    description,
    icon,
    contentStyle,
    githubId,
    npmId,
    storybookUrl,
}) => {
    const theme = useThemeValue();

    const iconThemed = icon && getThemedValue(icon, theme);
    const iconData = iconThemed && getMediaImage(iconThemed);

    let starsCount;
    let latestReleaseVersion;
    let latestReleaseDate;

    if (id) {
        const libData = (libsData as unknown as any)[id];

        if (libData) {
            starsCount = libData.stars ?? 0;
            latestReleaseVersion = libData?.version ?? '–';
            latestReleaseDate = libData.lastUpdate ?? '–';
        }
    }

    const Tag = githubId ? 'a' : 'div';
    const tagProps = githubId ? {href: `${githubUrl}${githubId}`, target: '_blank'} : {};

    return (
        <Tag
            {...tagProps}
            className={b({active: Boolean(githubId || storybookUrl)})}
            style={contentStyle}
        >
            {iconData && <Image {...iconData} className={b('icon')} />}

            <div className={b('header')}>
                {title ? (
                    <h5 className={b('title')}>
                        <HTML>{title}</HTML>
                    </h5>
                ) : null}
                {starsCount ? (
                    <div className={b('stars')}>
                        <Icon data={starIcon} size={19} />
                        <div className={b('stars-count')}>{starsCount}</div>
                    </div>
                ) : null}
            </div>

            <div className={b('text')}>{description}</div>

            {npmId ? (
                <div className={b('release-info')}>
                    {latestReleaseVersion ? (
                        <React.Fragment>
                            <Label className={b('release-label')}>v{latestReleaseVersion}</Label>
                            {latestReleaseDate ? (
                                <React.Fragment>
                                    <Icon data={calendarIcon} size={16} />
                                    <div className={b('release-date')}>{latestReleaseDate}</div>
                                </React.Fragment>
                            ) : null}
                        </React.Fragment>
                    ) : (
                        <Skeleton className={b('release-skeleton')} />
                    )}
                </div>
            ) : null}

            {githubId || storybookUrl ? (
                <div className={b('buttons')}>
                    {githubId ? (
                        <a
                            key="github"
                            className={b('button')}
                            href={`${githubUrl}${githubId}`}
                            target="_blank"
                            onClick={(e) => {
                                e.stopPropagation();
                            }}
                        >
                            Github
                        </a>
                    ) : null}
                    {storybookUrl ? (
                        <a
                            key="storybook"
                            className={b('button')}
                            href={storybookUrl}
                            target="_blank"
                            onClick={(e) => {
                                e.stopPropagation();
                            }}
                        >
                            Storybook
                        </a>
                    ) : null}
                </div>
            ) : null}
        </Tag>
    );
};
