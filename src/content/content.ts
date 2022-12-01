import {PageContent, Block} from '@gravity-ui/page-constructor';
import backgroundAsset from '../assets/background.svg';
import featureAsset from '../assets/feature.svg';
import bannerAsset from '../assets/banner.svg';
import githubIcon from '../assets/icons/github.svg';
import storybookIcon from '../assets/icons/storybook.svg';
import telegramIcon from '../assets/icons/telegram.svg';
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
                    view: 'outlined',
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
            backgroundColor: 'rgba(255, 255, 255, 0.12)',
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
                    icon: featureAsset,
                },
                {
                    title: 'First class design',
                    text: 'Experienced designers curate the look of our libraries, so our components are stylish, consistent, and support dark mode and high-contrast themes.',
                    icon: featureAsset,
                },
                {
                    title: 'An evolving ecosystem',
                    text: 'Our community of developers provide regular feedback that improves our libraries, and we break compatibility only when necessary.',
                    icon: featureAsset,
                },
            ],
        },
        {
            type: CustomBlock.CustomExtendedFeatures,
            backgroundColor: '#241C64',
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
                    text: 'A library with a wide range of easy-to-use components for creating interfaces of any complexity.',
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
                    text: 'A library with a wide range of easy-to-use components for creating interfaces of any complexity.',
                    githubId: 'gravity-ui/navigation',
                    npmId: '@gravity-ui/navigation',
                    storybookUrl: 'https://preview.yandexcloud.dev/navigation/',
                },
                {
                    title: '18n',
                    text: 'A library with a wide range of easy-to-use components for creating interfaces of any complexity.',
                    githubId: 'gravity-ui/i18n',
                    npmId: '@gravity-ui/i18n',
                },
                {
                    title: 'Dashkit',
                    text: 'A library for data visualization, integrated with our design system.',
                    githubId: 'gravity-ui/dashkit',
                    npmId: '@gravity-ui/dashkit',
                },
            ],
        },
        {
            type: CustomBlock.CustomBanner,
            title: 'Start creating with Gravity&nbsp;UI',
            subtitle:
                'Build it Find the reusable components and instructions you need to get going.',
            color: '#241C64',
            image: bannerAsset,
            buttons: [
                {
                    text: 'GitHub',
                    view: 'outlined',
                    icon: githubIcon,
                    href: 'https://github.com/gravity-ui',
                    target: '_blank',
                },
                {
                    text: 'Telegram',
                    view: 'outlined',
                    icon: telegramIcon,
                    href: '#',
                    target: '_blank',
                },
            ],
        },
    ],
};

const content = typedContent as PageContent;

export {content};
