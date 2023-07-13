import {Block, BlockType, PageContent} from '@gravity-ui/page-constructor';

import backgroundAsset from '../assets/background.jpg';
import bannerAsset from '../assets/banner.svg';
import companiesDesktopAsset from '../assets/companies-desktop.svg';
import companiesMobileAsset from '../assets/companies-mobile.svg';
import companiesTabletAsset from '../assets/companies-tablet.svg';
import featureShieldAsset from '../assets/feature-shield.svg';
import featureStarAsset from '../assets/feature-star.svg';
import featureUnionAsset from '../assets/feature-union.svg';
import githubIcon from '../assets/icons/github.svg';
import storybookIcon from '../assets/icons/storybook.svg';
import {CustomBlock} from '../blocks/constants';
import {CustomBlockModel} from '../blocks/types';
import {libs} from '../libs.mjs';

import {roadmapTasksEn, roadmapTasksRu} from './roadmap';

interface CustomPageContent {
    blocks: (Block | CustomBlockModel)[];
    menu?: PageContent['menu'];
    background?: PageContent['background'];
}

const background = {
    image: {
        src: backgroundAsset.src,
        disableCompress: true,
    },
};

const typedLandingEn: CustomPageContent = {
    background,
    blocks: [
        {
            type: CustomBlock.CustomHeader,
            title: 'Build modern interfaces with the Gravity design system and libraries',
            buttons: [
                {
                    text: 'GitHub',
                    view: 'action',
                    icon: githubIcon,
                    href: 'https://github.com/gravity-ui',
                    target: '_blank',
                },
                {
                    text: 'Storybook',
                    view: 'outlined',
                    icon: storybookIcon,
                    href: 'https://preview.gravity-ui.com/uikit/',
                    target: '_blank',
                },
            ],
            news: {
                title: 'Recent updates',
                items: [
                    {
                        date: '05.07.2023',
                        content:
                            'Meet the new <a href="/icons">Icons section</a>, where you can browse and download icons from our pack',
                    },
                    {
                        date: '20.06.2023',
                        content:
                            'Follow Gravity UI improvements with roadmap section on our <a href="/#roadmap">website</a>',
                    },
                    {
                        date: '14.06.2023',
                        content:
                            '<a href="https://preview.gravity-ui.com/uikit/?path=/docs/layout--docs">Layout components</a> are stable now',
                    },
                ],
            },
        },
        {
            type: CustomBlock.CustomExtendedFeatures,
            backgroundColor: 'rgba(37, 27, 37, 0.5)',
            backdropFilter: 'blur(60px)',
            colSizes: {
                all: 12,
                md: 12,
                lg: 4,
            },
            items: [
                {
                    title: 'Built on real-life experience',
                    description:
                        "Conceived as an in-house solution in response to real developers' needs, we released Gravity to the open-source community.",
                    icon: featureUnionAsset,
                },
                {
                    title: 'First class design',
                    description:
                        'Experienced designers curate the look of our libraries, ensuring that components are stylish and consistent, with support for dark mode and high-contrast themes.',
                    icon: featureStarAsset,
                },
                {
                    title: 'An evolving ecosystem',
                    description:
                        'Regular feedback from our community of developers allows us to continuously improve our libraries, and break compatibility only when necessary.',
                    icon: featureShieldAsset,
                },
            ],
        },
        {
            type: CustomBlock.Examples,
            title: 'Examples',
            colors: [
                {
                    title: 'Yellow',
                    value: 'yellow',
                },
                {
                    title: 'Red',
                    value: 'red',
                },
                {
                    title: 'Green',
                    value: 'green',
                },
                {
                    title: 'Blue',
                    value: 'blue',
                },
            ],
        },
        {
            type: CustomBlock.CustomExtendedFeatures,
            backgroundColor: 'rgba(37, 27, 37, 0.5)',
            title: 'Our libraries',
            button: {
                text: 'All libraries',
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
                    description: lib.description.en,
                })),
        },
        {
            type: CustomBlock.Roadmap,
            title: 'Roadmap',
            tasks: roadmapTasksEn,
        },
        {
            type: CustomBlock.CustomBanner,
            title: 'Start creating with Gravity&nbsp;UI',
            color: '#23151e',
            image: bannerAsset,
            commands: [
                'git clone git@github.com:gravity-ui/uikit-example-cra.git my-project && cd my-project',
                'npm i',
                'npm run start',
            ],
        },
        {
            type: BlockType.CompaniesBlock,
            title: 'Trusted by',
            images: {
                desktop: companiesDesktopAsset,
                tablet: companiesTabletAsset,
                mobile: companiesMobileAsset,
            },
        },
    ],
};

const typedLandingRu: CustomPageContent = {
    background,
    blocks: [
        {
            type: CustomBlock.CustomHeader,
            title: 'Создавайте современные интерфейсы с дизайн системой Gravity',
            buttons: [
                {
                    text: 'GitHub',
                    view: 'action',
                    icon: githubIcon,
                    href: 'https://github.com/gravity-ui',
                    target: '_blank',
                },
                {
                    text: 'Storybook',
                    view: 'outlined',
                    icon: storybookIcon,
                    href: 'https://preview.gravity-ui.com/uikit/',
                    target: '_blank',
                },
            ],
            news: {
                title: 'Последние новости',
                items: [
                    {
                        date: '05.07.2023',
                        content:
                            'Мы запустили новый раздел <a href="/ru/icons">Иконки</a>, где вы можете посмотреть и загрузить иконки из нашей коллекции',
                    },
                    {
                        date: '20.06.2023',
                        content:
                            'Следите за развитием Gravity UI в разделе Roadmap на нашем <a href="/ru/#roadmap">сайте</a>',
                    },
                    {
                        date: '14.06.2023',
                        content:
                            'Выпущена стабильная версия <a href="https://preview.gravity-ui.com/uikit/?path=/docs/layout--docs">Layout components</a>',
                    },
                ],
            },
        },
        {
            type: CustomBlock.CustomExtendedFeatures,
            backgroundColor: 'rgba(37, 27, 37, 0.5)',
            backdropFilter: 'blur(60px)',
            colSizes: {
                all: 12,
                md: 12,
                lg: 4,
            },
            items: [
                {
                    title: 'Основано на реальном опыте использования',
                    description:
                        'Внутреннее решение в ответ на реальные потребности разработчиков, мы выпустили Gravity для open-source сообщества.',
                    icon: featureUnionAsset,
                },
                {
                    title: 'Отличный дизайн',
                    description:
                        'Опытные дизайнеры следят за внешним видом наших библиотек, следя за тем, чтобы компоненты были стильными и согласованными, с поддержкой темного режима и высококонтрастных тем.',
                    icon: featureStarAsset,
                },
                {
                    title: 'Развивающаяся экосистема',
                    description:
                        'Регулярная обратная связь от нашего сообщества разработчиков позволяет нам постоянно улучшать наши библиотеки и нарушать совместимость только при необходимости.',
                    icon: featureShieldAsset,
                },
            ],
        },
        {
            type: CustomBlock.Examples,
            title: 'Примеры',
            colors: [
                {
                    title: 'Жёлтый',
                    value: 'yellow',
                },
                {
                    title: 'Красный',
                    value: 'red',
                },
                {
                    title: 'Зелёный',
                    value: 'green',
                },
                {
                    title: 'Синий',
                    value: 'blue',
                },
            ],
        },
        {
            type: CustomBlock.CustomExtendedFeatures,
            backgroundColor: 'rgba(37, 27, 37, 0.5)',
            title: 'Наши библиотеки',
            button: {
                text: 'Все библиотеки',
                href: '/ru/libraries',
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
                    description: lib.description.ru,
                })),
        },
        {
            type: CustomBlock.Roadmap,
            title: 'Roadmap',
            tasks: roadmapTasksRu,
        },
        {
            type: CustomBlock.CustomBanner,
            title: 'Начните создавать с Gravity&nbsp;UI',
            color: '#23151e',
            image: bannerAsset,
            commands: [
                'git clone git@github.com:gravity-ui/uikit-example-cra.git my-project && cd my-project',
                'npm i',
                'npm run start',
            ],
        },
        {
            type: BlockType.CompaniesBlock,
            title: 'Нам доверяют',
            images: {
                desktop: companiesDesktopAsset,
                tablet: companiesTabletAsset,
                mobile: companiesMobileAsset,
            },
        },
    ],
};

const en = typedLandingEn as PageContent;
const ru = typedLandingRu as PageContent;

export {en, ru};
