import React from 'react';
import {HTML, Image, ThemedImage} from '@gravity-ui/page-constructor';
import {Icon, Label, Skeleton} from '@gravity-ui/uikit';
import {useThemeValue} from '@gravity-ui/page-constructor/build/esm/context/theme/useThemeValue';
import starIcon from '../../../../assets/icons/star.svg';
import calendarIcon from '../../../../assets/icons/calendar.svg';
import {block, getThemedValue, getMediaImage} from '../../../../utils';
import './FeatureItem.scss';

const b = block('custom-extended-features-feature-item');

const githubUrl = 'https://github.com/';
const githubApiUrl = 'https://api.github.com/repos/';
const npmApiUrl = 'https://registry.npmjs.org/';

const LOCAL_STORAGE_PREFIX = 'githubStars_';
const LOCAL_STORAGE_CACHE_LIVE_TIME = 60 * 60 * 1000;

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

    const [starsCount, setStarsCount] = React.useState<number | null>(null);
    const [latestReleaseVersion, setLatestReleaseVersion] = React.useState<string | null>(null);
    const [latestReleaseDate, setLatestReleaseDate] = React.useState<string | null>(null);

    React.useEffect(() => {
        if (githubId) {
            const githubStarsKey = `${LOCAL_STORAGE_PREFIX}${githubId}`;
            const localStorageValue = localStorage.getItem(githubStarsKey);

            let cachedValue: number | null = null;

            if (localStorageValue) {
                try {
                    const parsedLocalStorageValue = JSON.parse(localStorageValue);
                    if (
                        new Date().valueOf() - parsedLocalStorageValue.time <
                        LOCAL_STORAGE_CACHE_LIVE_TIME
                    ) {
                        cachedValue = parsedLocalStorageValue.value as number;
                    }
                } catch {}
            }

            if (cachedValue) {
                setStarsCount(cachedValue);
            } else {
                fetch(`${githubApiUrl}${githubId}`)
                    .then((response) => response.json())
                    .then((response) => {
                        const value = response?.stargazers_count;
                        if (value) {
                            setStarsCount(value);
                            localStorage.setItem(
                                githubStarsKey,
                                JSON.stringify({
                                    time: new Date().valueOf(),
                                    value,
                                }),
                            );
                        }
                    })
                    .catch((err) => {
                        // eslint-disable-next-line no-console
                        console.error(err);
                    });
            }
        }

        if (npmId) {
            fetch(`${npmApiUrl}${npmId}`)
                .then((response) => response.json())
                .then((response) => {
                    const latestVersion = response?.['dist-tags']?.latest;
                    if (latestVersion) {
                        setLatestReleaseVersion(latestVersion);
                        if (response?.time?.[latestVersion]) {
                            try {
                                const date = new Date(response?.time?.[latestVersion]);
                                const day = date.getUTCDate();
                                const month = date.getUTCMonth() + 1;
                                setLatestReleaseDate(
                                    `${day < 10 ? `0${day}` : day}.${
                                        month < 10 ? `0${month}` : month
                                    }.${date.getUTCFullYear()}`,
                                );
                            } catch {}
                        }
                    }
                })
                .catch((err) => {
                    // eslint-disable-next-line no-console
                    console.error(err);
                });
        }
    }, []);

    return (
        <div className={b({active: Boolean(githubId || storybookUrl)})} style={contentStyle}>
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
                        >
                            Storybook
                        </a>
                    ) : null}
                </div>
            ) : null}
        </div>
    );
};
