import {BlockType} from '@gravity-ui/page-constructor';
import {TFunction} from 'next-i18next';

import type {LibWithMetadata} from '../api';
import companiesDesktopAsset from '../assets/companies-desktop.svg';
import companiesMobileAsset from '../assets/companies-mobile.svg';
import companiesTabletAsset from '../assets/companies-tablet.svg';
import githubIcon from '../assets/icons/github.svg';
import rocketIcon from '../assets/icons/rocket.svg';
import {CustomBlock} from '../blocks/constants';
import {SCROLL_TO_TEMPLATES_EVENT} from '../constants';

// import {getRoadmapTasks} from './roadmap';
import {CustomPageContent} from './types';

export const getLanding = ({
    t,
    libs,
    backgroundImageSrc,
}: {
    t: TFunction;
    libs: LibWithMetadata[];
    backgroundImageSrc: string;
}): CustomPageContent => ({
    background: {
        image: {
            src: backgroundImageSrc,
            disableCompress: true,
        },
    },
    blocks: [
        {
            type: CustomBlock.GithubStars,
            device: 'mobile',
        },
        {
            type: CustomBlock.CustomHeader,
            title: t('home:header_title'),
            buttons: [
                {
                    text: t('home:header_actions_howToStart'),
                    view: 'action',
                    icon: rocketIcon,
                    onClick: () => {
                        const evt = new Event(SCROLL_TO_TEMPLATES_EVENT, {
                            bubbles: true,
                            cancelable: false,
                        });
                        document.dispatchEvent(evt);
                    },
                },
                {
                    text: t('actions_github'),
                    view: 'outlined',
                    icon: githubIcon,
                    href: 'https://github.com/gravity-ui',
                    target: '_blank',
                },
            ],
            badges: [
                {name: 'AI', status: 'Ready'},
                {name: 'A11Y', status: 'Ready'},
                {name: 'Touch', status: 'Ready'},
                {name: 'i18n', status: 'Ready'},
                {name: 'RTL', status: 'Ready'},
            ],
            news: {
                title: t('home:news_title'),
                items: [
                    {
                        date: '2026-08-10T12:00:00.000Z',
                        content: t('home:news_items_item1'),
                    },
                    {
                        date: '2026-05-27T12:00:00.000Z',
                        content: t('home:news_items_item2'),
                    },
                    {
                        date: '2026-04-03T12:00:00.000Z',
                        content: t('home:news_items_item3'),
                    },
                ],
            },
            // banner: {
            //     content: t('home:banner_content'),
            //     href: 'https://clck.ru/3LedZA',
            // },
        },
        // {
        //     type: CustomBlock.Iframe,
        //     width: 560,
        //     height: 315,
        //     src: 'https://runtime.strm.yandex.ru/player/video/vplvibavcepgpr3wkjew?autoplay=0&mute=1',
        //     allow: 'autoplay; fullscreen; accelerometer; gyroscope; picture-in-picture; encrypted-media',
        // },
        {
            type: CustomBlock.UISamples,
            title: t('home:examples_title'),
        },
        {
            type: CustomBlock.StartCreating,
            title: t('home:templates_title'),
            ai: {
                title: t('home:start_creating_ai_tab'),
                install: {
                    title: t('home:start_creating_install_title'),
                    description: t('home:start_creating_install_description'),
                    command: 'npx skills add gravity-ui/skills',
                },
                build: {
                    title: t('home:start_creating_build_title'),
                    examples: [
                        t('home:start_creating_example_dashboard'),
                        t('home:start_creating_example_landing'),
                        t('home:start_creating_example_admin'),
                    ],
                    label: t('home:start_creating_skill_activated'),
                },
            },
            manual: {
                title: t('home:start_creating_manual_tab'),
                description: t('home:start_creating_manual_description'),
                command: 'npm create @gravity-ui',
                link: {
                    title: t('home:start_creating_manual_link'),
                    href: 'https://github.com/gravity-ui/create',
                },
            },
        },
        {
            type: CustomBlock.Libraries,
            backgroundColor: 'rgba(37, 27, 37, 0.5)',
            title: t('home:libraries_title'),

            items: libs,
        },
        // {
        //     type: CustomBlock.Roadmap,
        //     title: t('home:roadmap_title'),
        //     tasks: getRoadmapTasks(t),
        // },
        {
            type: CustomBlock.Contributors,
            title: t('home:contributors_title'),
            link: {
                title: t('home:contributors_actions_telegram'),
                href: 'https://t.me/gravity_ui',
            },
        },
        {
            type: BlockType.CompaniesBlock,
            title: t('home:companies_title'),
            images: {
                desktop: companiesDesktopAsset,
                tablet: companiesTabletAsset,
                mobile: companiesMobileAsset,
                loading: 'lazy',
            },
        },
    ],
});
