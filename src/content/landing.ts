import {Block, BlockType, PageContent} from '@gravity-ui/page-constructor';

import backgroundAsset from '../assets/background.jpg';
import bannerAsset from '../assets/banner.svg';
import companiesDesktopAsset from '../assets/companies-desktop.svg';
import companiesMobileAsset from '../assets/companies-mobile.svg';
import companiesTabletAsset from '../assets/companies-tablet.svg';
import featureShieldAsset from '../assets/feature-shield.svg';
import featureStarAsset from '../assets/feature-star.svg';
import featureUnionAsset from '../assets/feature-union.svg';
import figmaFillIcon from '../assets/icons/figma-fill.svg';
import githubIcon from '../assets/icons/github.svg';
import {CustomBlock} from '../blocks/constants';
import {CustomBlockModel} from '../blocks/types';
import {libs} from '../libs.mjs';

import {roadmapTasks} from './roadmap';

interface CustomPageContent {
    blocks: (Block | CustomBlockModel)[];
    menu?: PageContent['menu'];
    background?: PageContent['background'];
}

const typedLanding: CustomPageContent = {
    background: {
        image: {
            src: backgroundAsset.src,
            disableCompress: true,
        },
    },
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
                    text: 'Figma',
                    view: 'outlined',
                    icon: figmaFillIcon,
                    href: 'https://www.figma.com/community/file/1271150067798118027/Gravity-UI-Design-System-(Beta)',
                    target: '_blank',
                },
            ],
            news: {
                title: 'Recent updates',
                items: [
                    {
                        date: '2023-08-28T14:00:00.000Z',
                        content:
                            'Our Figma library is finally released and available <a href="https://www.figma.com/community/file/1271150067798118027/Gravity-UI-Design-System-(Beta)">here</a>. Currently it\'s in Beta so we\'d love for you to test it out and share your feedback with us.',
                    },
                    {
                        date: '2023-08-07T14:00:00.000Z',
                        content:
                            'New major version of <a href="https://github.com/gravity-ui/uikit/releases">UIKit is here</a>. Introducing new default color theme, updated Button component, some fixes and features.',
                    },
                    {
                        date: '2023-07-05T10:00:00.000Z',
                        content:
                            'Meet the new <a href="/icons">Icons section</a>, where you can browse and download icons from our pack',
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
                    description: lib.description,
                })),
        },
        {
            type: CustomBlock.Roadmap,
            title: 'Roadmap',
            tasks: roadmapTasks,
        },
        {
            type: CustomBlock.CustomBanner,
            title: 'Start creating with Gravity&nbsp;UI',
            color: '#23151e',
            image: bannerAsset,
            commands: [
                'npx create-react-app ./my-project --template gravity-ui && cd my-project',
                'npm run dev',
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

const landing = typedLanding as PageContent;

export {landing};
