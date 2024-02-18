import {Block, BlockType, PageContent} from '@gravity-ui/page-constructor';
import {TFunction} from 'next-i18next';

import backgroundAsset from '../assets/background.jpg';
import companiesDesktopAsset from '../assets/companies-desktop.svg';
import companiesMobileAsset from '../assets/companies-mobile.svg';
import companiesTabletAsset from '../assets/companies-tablet.svg';
import featureShieldAsset from '../assets/feature-shield.svg';
import featureStarAsset from '../assets/feature-star.svg';
import featureUnionAsset from '../assets/feature-union.svg';
import craLogo from '../assets/icons/cra-logo.svg';
import githubIcon from '../assets/icons/github.svg';
import nextLogo from '../assets/icons/next-logo.svg';
import remixLogo from '../assets/icons/remix-logo.svg';
import rocketIcon from '../assets/icons/rocket.svg';
import viteLogo from '../assets/icons/vite-logo.svg';
import {CustomBlock} from '../blocks/constants';
import {CustomBlockModel} from '../blocks/types';
import {SCROLL_TO_TEMPLATES_EVENT} from '../constants';
import {libs} from '../libs.mjs';

import {getRoadmapTasks} from './roadmap';

interface CustomPageContent {
    blocks: (Block | CustomBlockModel)[];
    menu?: PageContent['menu'];
    background?: PageContent['background'];
}

export const getLanding = (t: TFunction): CustomPageContent => ({
    background: {
        image: {
            src: backgroundAsset.src,
            disableCompress: true,
        },
    },
    blocks: [
        {
            type: CustomBlock.CustomHeader,
            title: t('header.title'),
            buttons: [
                {
                    text: t('header.actions.howToStart'),
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
                    text: 'GitHub',
                    view: 'outlined',
                    icon: githubIcon,
                    href: 'https://github.com/gravity-ui',
                    target: '_blank',
                },
            ],
            news: {
                title: t('news.title'),
                items: [
                    {
                        date: '2024-02-01T10:00:00.000Z',
                        content: t('news.items.item1'),
                    },
                    {
                        date: '2024-01-23T12:00:00.000Z',
                        content: t('news.items.item2'),
                    },
                    {
                        date: '2023-12-22T14:00:00.000Z',
                        content: t('news.items.item3'),
                    },
                ],
            },
        },
        {
            type: CustomBlock.CustomExtendedFeatures,
            animated: false,
            backgroundColor: 'rgba(37, 27, 37, 0.5)',
            backdropFilter: 'blur(60px)',
            colSizes: {
                all: 12,
                md: 12,
                lg: 4,
            },
            items: [
                {
                    title: t('features.feature1.title'),
                    description: t('features.feature1.description'),
                    icon: featureUnionAsset,
                },
                {
                    title: t('features.feature2.title'),
                    description: t('features.feature2.description'),
                    icon: featureStarAsset,
                },
                {
                    title: t('features.feature3.title'),
                    description: t('features.feature3.description'),
                    icon: featureShieldAsset,
                },
            ],
        },
        {
            type: CustomBlock.Examples,
            title: t('examples.title'),
            colors: [
                {
                    title: t('examples.colors.yellow'),
                    value: 'yellow',
                },
                {
                    title: t('examples.colors.red'),
                    value: 'red',
                },
                {
                    title: t('examples.colors.green'),
                    value: 'green',
                },
                {
                    title: t('examples.colors.blue'),
                    value: 'blue',
                },
            ],
        },
        {
            type: CustomBlock.CustomExtendedFeatures,
            backgroundColor: 'rgba(37, 27, 37, 0.5)',
            title: t('ourLibraries.title'),
            button: {
                text: t('ourLibraries.allLibraries'),
                href: '/libraries',
            },
            colSizes: {
                all: 12,
                md: 6,
                lg: 4,
            },
            items: libs
                .filter((lib) => lib.landing)
                .map((lib) => ({
                    id: lib.id,
                    title: lib.title,
                    description: lib.description,
                })),
        },
        {
            type: CustomBlock.Roadmap,
            title: t('roadmap.title'),
            tasks: getRoadmapTasks(t),
        },
        {
            type: CustomBlock.Templates,
            title: t('templates.title'),
            tabs: [
                {
                    title: 'CRA',
                    icon: craLogo,
                    commands: [
                        'npx create-react-app my-app --template gravity-ui-pure',
                        'cd my-app',
                        'npm start',
                    ],
                    button: {
                        href: 'https://codesandbox.io/p/devbox/gravityui-cra-mpg4q3',
                        target: '_blank',
                        title: 'Open CRA Playground',
                    },
                },
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
                        title: 'Open Next.js Playground',
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
                        title: 'Open Vite Playground',
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
                        title: 'Open Remix Playground',
                    },
                },
            ],
        },
        {
            type: BlockType.CompaniesBlock,
            title: t('companies.title'),
            images: {
                desktop: companiesDesktopAsset,
                tablet: companiesTabletAsset,
                mobile: companiesMobileAsset,
            },
        },
    ],
});
