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

interface CustomPageContent {
    blocks: (Block | CustomBlockModel)[];
    menu?: PageContent['menu'];
    background?: PageContent['background'];
    footnotes?: PageContent['footnotes'];
}

const typedContent: CustomPageContent = {
    background: {
        image: {
            src: backgroundAsset,
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
                        date: '2023-01-26T15:00:00.000Z',
                        content:
                            'New <a href="https://github.com/gravity-ui/uikit/releases/tag/v4.0.0" target="_blank" rel="noopener">UIKit v4</a> features support for React 18',
                    },
                    {
                        date: '2023-01-25T00:00:00.000Z',
                        content:
                            'New set of SVG icons now available for your project: <a href="https://github.com/gravity-ui/icons" target="_blank" rel="noopener">Gravity Icons</a>',
                    },
                    {
                        date: '2022-12-20T00:00:00.000Z',
                        content:
                            '<a href="https://github.com/gravity-ui" target="_blank" rel="noopener">Gravity ecosystem</a> now open to the public',
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
                    text: "Conceived as an in-house solution in response to real developers' needs, we released Gravity to the open-source community.",
                    icon: featureUnionAsset,
                },
                {
                    title: 'First class design',
                    text: 'Experienced designers curate the look of our libraries, ensuring that components are stylish and consistent, with support for dark mode and high-contrast themes.',
                    icon: featureStarAsset,
                },
                {
                    title: 'An evolving ecosystem',
                    text: 'Regular feedback from our community of developers allows us to continuously improve our libraries, and break compatibility only when necessary.',
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
            colSizes: {
                all: 12,
                md: 6,
                lg: 4,
            },
            items: libs,
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

const content = typedContent as PageContent;

export {content};
