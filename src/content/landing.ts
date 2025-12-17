import {BlockType} from '@gravity-ui/page-constructor';
import {TFunction} from 'next-i18next';

import type {Contributor, LibWithMetadata} from '../api';
import companiesDesktopAsset from '../assets/companies-desktop.svg';
import companiesMobileAsset from '../assets/companies-mobile.svg';
import companiesTabletAsset from '../assets/companies-tablet.svg';
import craLogo from '../assets/icons/cra-logo.svg';
import githubIcon from '../assets/icons/github.svg';
import nextLogo from '../assets/icons/next-logo.svg';
import remixLogo from '../assets/icons/remix-logo.svg';
import rocketIcon from '../assets/icons/rocket.svg';
import viteLogo from '../assets/icons/vite-logo.svg';
import {CustomBlock} from '../blocks/constants';
import {SCROLL_TO_TEMPLATES_EVENT} from '../constants';

import {getRoadmapTasks} from './roadmap';
import {CustomPageContent} from './types';

export const getLanding = ({
    t,
    libs,
    contributors,
    backgroundImageSrc,
}: {
    t: TFunction;
    libs: LibWithMetadata[];
    contributors: Contributor[];
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
                        date: '2025-12-17T12:00:00.000Z',
                        content: t('home:news_items_item1'),
                    },
                    {
                        date: '2025-12-16T12:00:00.000Z',
                        content: t('home:news_items_item2'),
                    },
                    {
                        date: '2025-09-12T07:00:00.000Z',
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
            type: CustomBlock.Libraries,
            backgroundColor: 'rgba(37, 27, 37, 0.5)',
            title: t('home:libraries_title'),

            items: libs,
        },
        {
            type: CustomBlock.Roadmap,
            title: t('home:roadmap_title'),
            tasks: getRoadmapTasks(t),
        },
        {
            type: CustomBlock.Templates,
            title: t('home:templates_title'),
            tabs: [
                {
                    title: 'Next.js',
                    icon: nextLogo,
                    commands: [
                        'npx create-next-app@latest my-app --example "https://github.com/gravity-ui/gravity-ui-nextjs-example"',
                        'cd my-app',
                        'npm run dev',
                    ],
                    button: {
                        href: 'https://codesandbox.io/p/devbox/gravityui-next-js-vvq8lf',
                        target: '_blank',
                        title: `${t('common:actions_open')} Next.js Playground`,
                    },
                },
                {
                    title: 'Vite',
                    icon: viteLogo,
                    commands: [
                        'npx degit gravity-ui/gravity-ui-vite-example#main my-app && cd my-app',
                        'npm install',
                        'npm run dev',
                    ],
                    button: {
                        href: 'https://codesandbox.io/p/devbox/gravityui-vite-36dq3r',
                        target: '_blank',
                        title: `${t('common:actions_open')} Vite Playground`,
                    },
                },
                {
                    title: 'Remix',
                    icon: remixLogo,
                    commands: [
                        'npx create-remix my-app --template gravity-ui/gravity-ui-remix-example',
                        'cd my-app',
                        'npm run dev',
                    ],
                    button: {
                        href: 'https://codesandbox.io/p/devbox/gravityui-remix-template-2y5ykj',
                        target: '_blank',
                        title: `${t('common:actions_open')} Remix Playground`,
                    },
                },
                {
                    title: 'CRA',
                    icon: craLogo,
                    commands: [
                        '# probably you do not need it, since CRA is deprecated https://github.com/facebook/create-react-app?tab=readme-ov-file#deprecated',
                        'npx create-react-app my-app --template gravity-ui-pure',
                        'cd my-app',
                        'npm start',
                    ],
                    button: {
                        href: 'https://codesandbox.io/p/devbox/gravityui-cra-mpg4q3',
                        target: '_blank',
                        title: `${t('common:actions_open')} CRA Playground`,
                    },
                },
            ],
        },
        {
            type: CustomBlock.Contributors,
            title: t('home:contributors_title'),
            link: {
                title: t('home:contributors_actions_telegram'),
                href: 'https://t.me/gravity_ui',
            },
            contributors,
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
