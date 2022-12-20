import React from 'react';
import {HTML, Image, ThemedImage} from '@gravity-ui/page-constructor';
import {Icon, Label, Skeleton} from '@gravity-ui/uikit';
import {useThemeValue} from '@gravity-ui/page-constructor/build/esm/context/theme/useThemeValue';
import starIcon from '../../../../assets/icons/star.svg';
import calendarIcon from '../../../../assets/icons/calendar.svg';
import {block, getThemedValue, getMediaImage} from '../../../../utils';
import './FeatureItem.scss';
import versions from '../../../../versions.json';
import stars from '../../../../stars.json';

const b = block('custom-extended-features-feature-item');

const githubUrl = 'https://github.com/';

export type FeatureItemProps = {
    title?: string;
    text: string;
    icon?: ThemedImage;
    contentStyle: Record<string, unknown>;
    githubId?: string;
    npmId?: string;
    storybookUrl?: string;
};

export const FeatureItem: React.FC<FeatureItemProps> = ({
    title,
    text,
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

    if (githubId) {
        const libStars = stars.find((elem) => elem.title === githubId);
        if (libStars) {
            starsCount = libStars.stars;
        }
    }
    if (npmId) {
        const version = versions.find((elem) => elem.title === npmId);
        if (version) {
            latestReleaseVersion = version.version;
            latestReleaseDate = version.date;
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

            <div className={b('text')}>{text}</div>

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
