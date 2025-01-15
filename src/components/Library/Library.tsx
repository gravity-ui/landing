import {Col, Grid, HTML, Row} from '@gravity-ui/page-constructor';
import {Button, Icon, Tabs} from 'landing-uikit';
import {useTranslation} from 'next-i18next';
import React from 'react';

// import issuesIcon from '../../assets/icons/issues.svg';
import arrowIcon from '../../assets/icons/arrow.svg';
import githubIcon from '../../assets/icons/github.svg';
import lastUpdateIcon from '../../assets/icons/last-update.svg';
import licenseIcon from '../../assets/icons/license.svg';
import linkIcon from '../../assets/icons/link.svg';
import starIcon from '../../assets/icons/star.svg';
import storybookIcon from '../../assets/icons/storybook.svg';
import versionIcon from '../../assets/icons/version.svg';
import {ContributorList} from '../../components/ContributorList';
import {Link} from '../../components/Link';
import {availablePlaygrounds} from '../../pages/[locale]/libraries/[libId]/playground';
import {Lib, block, getAnchor, getLocale, getLocaleLink, getMaintainers} from '../../utils';
import {MDXRenderer} from '../MDXRenderer/MDXRenderer';

import './Library.scss';

const b = block('library');

enum Tab {
    Readme = 'readme',
    Changelog = 'changelog',
}

const GITHUB_URL = 'https://github.com/';

type Props = {
    lib: Lib;
};

const ABSOLUTE_LINK_REG_EXP = /^http/;
const HASH_REG_EXP = /^#/;

export const Library: React.FC<Props> = ({lib}) => {
    const {t, i18n} = useTranslation();

    const locale = getLocale(i18n.language);

    const contentTabs = [
        {
            id: Tab.Readme,
            title: t('library:readme'),
        },
    ];

    if (lib.data.changelog) {
        contentTabs.push({
            id: Tab.Changelog,
            title: t('library:changelog'),
        });
    }

    const infoList = [
        {
            id: 'stars',
            title: t('library:stars'),
            value: lib.data.stars,
            icon: starIcon,
        },
        {
            id: 'version',
            title: t('library:version'),
            value: lib.data.version || '–',
            icon: versionIcon,
        },
        {
            id: 'lastUpdate',
            title: t('library:lastUpdate'),
            value: lib.data.lastUpdate || '–',
            icon: lastUpdateIcon,
        },
        {
            id: 'repository',
            title: t('library:repository'),
            link: `https://github.com/${lib.config.githubId}`,
            value: `github.com/${lib.config.githubId}`,
            icon: linkIcon,
        },
        {
            id: 'license',
            title: t('library:license'),
            value: lib.data.license || '–',
            icon: licenseIcon,
        },
        // {
        //     id: 'issues',
        //     title: t('library:issues'),
        //     value: lib.data.issues,
        //     icon: issuesIcon,
        // },
    ];

    const [activeTab, setActiveTab] = React.useState(contentTabs[0].id);
    const [isVisibleInfoListMobile, setIsVisibleInfoListMobile] = React.useState(false);
    const [isVisibleMaintainersMobile, setIsVisibleMaintainersMobile] = React.useState(false);
    const [isVisibleContributorsMobile, setIsVisibleContributorsMobile] = React.useState(false);

    const isPrimary = lib.config.primary;
    const maintainers = React.useMemo(() => getMaintainers(lib), []);

    const rewriteLinks = React.useCallback(
        (link: string) => {
            if (HASH_REG_EXP.test(link)) {
                return `#${getAnchor(link)}`;
            }

            if (ABSOLUTE_LINK_REG_EXP.test(link)) {
                return link;
            }

            const githubId = lib.config?.githubId || null;
            if (!githubId) {
                return link;
            }

            const githubRepoUrl = `${GITHUB_URL}${githubId}/blob/main/`;
            const absoluteUrl = new URL(link, githubRepoUrl);
            return absoluteUrl.toString();
        },
        [lib.config?.githubId],
    );

    const readmeContent = lib.data.readme[locale] || lib.data.readme.en;

    return (
        <div className={b()}>
            <Grid className={b('header-grid')}>
                <Row>
                    <Col sizes={12}>
                        <div className={b('header', {primary: isPrimary})}>
                            <div className={b('breadcrumbs')}>
                                <Link href="/libraries" className={b('breadcrumbs-link')}>
                                    {t('library:libraries')}
                                </Link>{' '}
                                / <HTML className={b('breadcrumbs-item')}>{lib.config.title}</HTML>
                            </div>

                            <h1 className={b('title')}>
                                <HTML>{lib.config.title}</HTML>
                            </h1>

                            <div className={b('description')}>
                                {t(`libraries-info:description_${lib.config.id}`)}
                            </div>

                            {lib.config.githubId || lib.config.storybookUrl ? (
                                <div className={b('buttons')}>
                                    {lib.config.id === 'icons' && (
                                        <Button
                                            key="icons"
                                            className={b('button')}
                                            view="action"
                                            size="xl"
                                            href={getLocaleLink('/icons', i18n)}
                                            target="_blank"
                                        >
                                            {t('library:actions_goToIcons')}
                                        </Button>
                                    )}
                                    {lib.config.githubId ? (
                                        <Button
                                            key="github"
                                            className={b('button')}
                                            view={lib.config.id === 'icons' ? 'outlined' : 'action'}
                                            size="xl"
                                            href={`${GITHUB_URL}${lib.config.githubId}`}
                                            target="_blank"
                                        >
                                            <Icon
                                                className={b('button-icon')}
                                                data={githubIcon}
                                                size={16}
                                            />
                                            <span>{t('actions_github')}</span>
                                        </Button>
                                    ) : null}
                                    {lib.config.id !== 'icons' && lib.config.storybookUrl ? (
                                        <Button
                                            key="storybook"
                                            className={b('button')}
                                            view="outlined"
                                            size="xl"
                                            href={lib.config.storybookUrl}
                                            target="_blank"
                                        >
                                            <Icon
                                                className={b('button-icon')}
                                                data={storybookIcon}
                                                size={16}
                                            />
                                            <span>{t('actions_storybook')}</span>
                                        </Button>
                                    ) : null}
                                    {availablePlaygrounds.includes(lib.config.id) ? (
                                        <Button
                                            key="playground"
                                            className={b('button')}
                                            view="outlined"
                                            size="xl"
                                            href={getLocaleLink(
                                                `/libraries/${lib.config.id}/playground`,
                                                i18n,
                                            )}
                                        >
                                            <span>{t('actions_playground')}</span>
                                        </Button>
                                    ) : null}
                                </div>
                            ) : null}
                        </div>
                    </Col>
                </Row>
            </Grid>
            <Grid>
                <Row>
                    <Col sizes={{all: 12, lg: 8}} orders={{all: 2, lg: 1}}>
                        <div className={b('block')}>
                            <Tabs
                                size="xl"
                                items={contentTabs}
                                activeTab={activeTab}
                                onSelectTab={(selectedTab) => {
                                    setActiveTab(selectedTab as Tab);
                                }}
                            />
                            <div className={b('content')}>
                                <MDXRenderer
                                    key={`${lib.config.id}-${i18n.language}-${activeTab}`}
                                    text={
                                        activeTab === Tab.Readme
                                            ? readmeContent
                                            : lib.data.changelog
                                    }
                                    absoluteImgPath={`https://raw.githubusercontent.com/${lib.config.githubId}/${lib.config.mainBranch}/`}
                                    rewriteLinks={rewriteLinks}
                                />
                            </div>
                        </div>
                    </Col>
                    <Col sizes={{all: 12, lg: 4}} orders={{all: 1, lg: 2}}>
                        <div className={b('block', {about: true})}>
                            <div className={b('info')}>
                                <div
                                    className={b('info-title')}
                                    tabIndex={0}
                                    role="button"
                                    onClick={() => {
                                        setIsVisibleInfoListMobile(!isVisibleInfoListMobile);
                                    }}
                                >
                                    <div className={b('info-title-text')}>{t('library:about')}</div>
                                    <div
                                        className={b('info-title-icon', {
                                            'mobile-visible': isVisibleInfoListMobile,
                                        })}
                                    >
                                        <Icon data={arrowIcon} width={10} height={6} />
                                    </div>
                                </div>
                                <div
                                    className={b('info-list', {
                                        'mobile-visible': isVisibleInfoListMobile,
                                    })}
                                >
                                    {infoList.map((item) => {
                                        const content = (
                                            <React.Fragment>
                                                <div className={b('info-item-icon')}>
                                                    <Icon data={item.icon} size={20} />
                                                </div>
                                                <div className={b('info-item-content')}>
                                                    <div className={b('info-item-title')}>
                                                        {item.title}
                                                    </div>
                                                    <div className={b('info-item-value')}>
                                                        {item.value}
                                                    </div>
                                                </div>
                                            </React.Fragment>
                                        );

                                        if (item.link) {
                                            return (
                                                <a
                                                    key={item.id}
                                                    className={b('info-item', {link: true})}
                                                    target="_blank"
                                                    href={item.link}
                                                >
                                                    {content}
                                                    <div className={b('info-item-arrow-wrapper')}>
                                                        <div className={b('info-item-arrow')}>
                                                            <Icon
                                                                data={arrowIcon}
                                                                width={10}
                                                                height={6}
                                                            />
                                                        </div>
                                                    </div>
                                                </a>
                                            );
                                        }

                                        return (
                                            <div key={item.id} className={b('info-item')}>
                                                {content}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        {Boolean(maintainers.length) && (
                            <div className={b('block', {about: true})}>
                                <div className={b('info')}>
                                    <div
                                        className={b('info-title')}
                                        tabIndex={0}
                                        role="button"
                                        onClick={() => {
                                            setIsVisibleMaintainersMobile(
                                                !isVisibleMaintainersMobile,
                                            );
                                        }}
                                    >
                                        <div className={b('info-title-text')}>
                                            {t('library:maintainers')}
                                        </div>
                                        <div
                                            className={b('info-title-icon', {
                                                'mobile-visible': isVisibleMaintainersMobile,
                                            })}
                                        >
                                            <Icon data={arrowIcon} width={10} height={6} />
                                        </div>
                                    </div>
                                    <div
                                        className={b('contributors-content', {
                                            'mobile-visible': isVisibleMaintainersMobile,
                                        })}
                                    >
                                        <ContributorList lib={lib} contributors={maintainers} />
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className={b('block', {about: true})}>
                            <div className={b('info')}>
                                <div
                                    className={b('info-title')}
                                    tabIndex={0}
                                    role="button"
                                    onClick={() => {
                                        setIsVisibleContributorsMobile(
                                            !isVisibleContributorsMobile,
                                        );
                                    }}
                                >
                                    <div className={b('info-title-text')}>
                                        {t('library:contributors')}
                                    </div>
                                    <div
                                        className={b('info-title-icon', {
                                            'mobile-visible': isVisibleContributorsMobile,
                                        })}
                                    >
                                        <Icon data={arrowIcon} width={10} height={6} />
                                    </div>
                                </div>
                                <div
                                    className={b('contributors-content', {
                                        'mobile-visible': isVisibleContributorsMobile,
                                    })}
                                >
                                    <ContributorList
                                        lib={lib}
                                        contributors={lib.data.contributors}
                                    />
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Grid>
        </div>
    );
};
