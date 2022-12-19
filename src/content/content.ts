import {PageContent, Block, BlockType} from '@gravity-ui/page-constructor';
import backgroundAsset from '../assets/background.jpg';
import featureUnionAsset from '../assets/feature-union.svg';
import featureStarAsset from '../assets/feature-star.svg';
import featureShieldAsset from '../assets/feature-shield.svg';
import bannerAsset from '../assets/banner.svg';
import companiesDesktopAsset from '../assets/companies-desktop.svg';
import companiesTabletAsset from '../assets/companies-tablet.svg';
import companiesMobileAsset from '../assets/companies-mobile.svg';
import githubIcon from '../assets/icons/github.svg';
import storybookIcon from '../assets/icons/storybook.svg';
import {CustomBlockModel} from '../blocks/types';
import {CustomBlock} from '../blocks/constants';

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
                    href: 'https://preview.yandexcloud.dev/uikit/',
                    target: '_blank',
                },
            ],
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
                    title: 'Proven in real life',
                    text: "We use Gravity ourselves to build a diverse set of complex services. Our libraries are based on developers' real needs and usage cases.",
                    icon: featureUnionAsset,
                },
                {
                    title: 'First class design',
                    text: 'Experienced designers curate the look of our libraries, so our components are stylish, consistent, and support dark mode and high-contrast themes.',
                    icon: featureStarAsset,
                },
                {
                    title: 'An evolving ecosystem',
                    text: 'Our community of developers provide regular feedback that improves our libraries, and we break compatibility only when necessary.',
                    icon: featureShieldAsset,
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
            items: [
                {
                    title: 'UIKit',
                    text: 'A library with a wide range of easy-to-use components for creating interfaces of any complexity.',
                    githubId: 'gravity-ui/uikit',
                    npmId: '@gravity-ui/uikit',
                    storybookUrl: 'https://preview.yandexcloud.dev/uikit/',
                },
                {
                    title: 'Page&nbsp;constructor',
                    text: 'A set of stylish, functional blocks to quickly create promo and landing pages.',
                    githubId: 'gravity-ui/page-constructor',
                    npmId: '@gravity-ui/page-constructor',
                    storybookUrl: 'https://preview.yandexcloud.dev/page-constructor/',
                },
                {
                    title: 'ChartKit',
                    text: 'A library for data visualization, integrated with our design system.',
                    githubId: 'gravity-ui/chartkit',
                    npmId: '@gravity-ui/chartkit',
                },
                {
                    title: 'Navigation',
                    text: 'Compact and extensible navigation panel for complex services.',
                    githubId: 'gravity-ui/navigation',
                    npmId: '@gravity-ui/navigation',
                    storybookUrl: 'https://preview.yandexcloud.dev/navigation/',
                },
                {
                    title: 'i18n',
                    text: 'Lightweight internationalization helper.',
                    githubId: 'gravity-ui/i18n',
                    npmId: '@gravity-ui/i18n',
                },
                {
                    title: 'DashKit',
                    text: 'Grid component for building interactive dashboards.',
                    githubId: 'gravity-ui/dashkit',
                    npmId: '@gravity-ui/dashkit',
                },
            ],
        },
        {
            type: CustomBlock.CustomBanner,
            title: 'Start creating with Gravity&nbsp;UI',
            color: '#23151e',
            image: bannerAsset,
            commands: [
                'git clone git@github.com:gravity-ui/uikit-example-cra.git my-project',
                'npm i',
                'npm run start',
            ],
        },
        {
            type: BlockType.CompaniesBlock,
            title: 'Used by',
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
