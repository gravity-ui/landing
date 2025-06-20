import {BlockType} from '@gravity-ui/page-constructor';
import {TFunction} from 'next-i18next';

import backgroundAsset from '../assets/background.jpg';
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
import {Contributor, Lib} from '../services/lib';

import {getRoadmapTasks} from './roadmap';
import {CustomPageContent} from './types';

export const getRtlLanding = ({
    t,
    libs,
    contributors,
}: {
    t: TFunction;
    libs: Lib[];
    contributors: Contributor[];
}): CustomPageContent => ({
    background: {
        image: {
            src: backgroundAsset.src,
            disableCompress: true,
        },
    },
    blocks: [
        {
            type: CustomBlock.CustomHeader,
            title: 'بناء واجهات حديثة باستخدام نظام التصميم Gravity والمكتبات',
            buttons: [
                {
                    text: 'كيف تبدأ',
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
        },
        {
            type: CustomBlock.Libraries,
            backgroundColor: 'rgba(37, 27, 37, 0.5)',
            title: 'مكتباتنا',
            items: libs,
        },
        {
            type: CustomBlock.Examples,
            title: 'أمثلة',
            colors: [
                {
                    title: 'أصفر',
                    value: 'yellow',
                },
                {
                    title: 'أحمر',
                    value: 'red',
                },
                {
                    title: 'أخضر',
                    value: 'green',
                },
                {
                    title: 'أزرق',
                    value: 'blue',
                },
            ],
        },
        {
            type: CustomBlock.Roadmap,
            title: 'خارطة الطريق',
            tasks: getRoadmapTasks(t),
        },
        {
            type: CustomBlock.Templates,
            title: 'بدء المزامنة مع واجهة استخدام Gravity&nbsp;',
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
                        title: 'فتح CRA Playground',
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
                        title: 'فتح Next.js Playground',
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
                        title: 'فتح Vite Playground',
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
                        title: 'فتح Remix Playground',
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
            title: 'حائز على ثقة',
            images: {
                desktop: companiesDesktopAsset,
                tablet: companiesTabletAsset,
                mobile: companiesMobileAsset,
            },
        },
    ],
});
