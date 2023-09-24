import {SVGIconData} from '@gravity-ui/uikit/build/esm/components/Icon/types';

import figmaFillIcon from '../assets/icons/figma-fill.svg';
import githubIcon from '../assets/icons/github.svg';
import telegramIcon from '../assets/icons/telegram.svg';

export type SocialLinkItem = {
    title: string;
    url: string;
    icon: SVGIconData;
};

export const socialLinks: SocialLinkItem[] = [
    {
        title: 'Telegram',
        url: 'https://t.me/gravity_ui',
        icon: telegramIcon,
    },
    {
        title: 'Figma',
        url: 'https://www.figma.com/community/file/1271150067798118027/Gravity-UI-Design-System-(Beta)',
        icon: figmaFillIcon,
    },
    {
        title: 'GitHub',
        url: 'https://github.com/gravity-ui',
        icon: githubIcon,
    },
];
