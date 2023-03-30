import {HTML, Image, ThemedImage} from '@gravity-ui/page-constructor';
import {useThemeValue} from '@gravity-ui/page-constructor/build/esm/context/theme/useThemeValue';
import {Icon} from '@gravity-ui/uikit';
import Link from 'next/link';
import React from 'react';

import calendarIcon from '../../../../assets/icons/calendar.svg';
import starIcon from '../../../../assets/icons/star.svg';
import versionIcon from '../../../../assets/icons/version.svg';
import {block, getLibById, getMediaImage, getThemedValue} from '../../../../utils';

import './FeatureItem.scss';

const b = block('custom-extended-features-feature-item');

export type FeatureItemProps = {
    id?: string;
    title: string;
    description?: string;
    icon?: ThemedImage;
    contentStyle: Record<string, unknown>;
};

// eslint-disable-next-line complexity
export const FeatureItem: React.FC<FeatureItemProps> = ({
    id,
    title,
    description,
    icon,
    contentStyle,
}) => {
    const theme = useThemeValue();

    const iconThemed = icon && getThemedValue(icon, theme);
    const iconData = iconThemed && getMediaImage(iconThemed);

    let starsCount;
    let latestReleaseVersion;
    let latestReleaseDate;

    if (id) {
        const {data: libData} = getLibById(id);

        if (libData) {
            starsCount = libData.stars ?? 0;
            latestReleaseVersion = libData?.version ?? '';
            latestReleaseDate = libData.lastUpdate ?? '';
        }
    }

    const Tag = id ? (Link as any) : React.Fragment;
    const InnerTag = id ? 'a' : 'div';
    const tagProps = id ? {href: `/libraries/${id}`} : {};

    return (
        <Tag {...tagProps}>
            <InnerTag className={b({active: Boolean(id)})} style={contentStyle}>
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

                {id && latestReleaseVersion ? (
                    <div className={b('release-info')}>
                        <div className={b('release-info-block')}>
                            <Icon data={versionIcon} size={16} />
                            <div className={b('release-version')}>v{latestReleaseVersion}</div>
                        </div>
                        {latestReleaseDate ? (
                            <div className={b('release-info-block')}>
                                <Icon data={calendarIcon} size={16} />
                                <div className={b('release-date')}>{latestReleaseDate}</div>
                            </div>
                        ) : null}
                    </div>
                ) : null}
            </InnerTag>
        </Tag>
    );
};
