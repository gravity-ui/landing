import React from 'react';

import githubIcon from '../assets/icons/github.svg';
import storybookIcon from '../assets/icons/storybook.svg';
import telegramIcon from '../assets/icons/telegram.svg';

export type SocialLinkItem = {
    title: string;
    url: string;
    icon: React.ReactNode;
};

export const socialLinks: SocialLinkItem[] = [
    {
        title: 'Telegram',
        url: 'https://t.me/gravity_ui',
        icon: telegramIcon,
    },
    {
        title: 'Storybook',
        url: 'https://preview.gravity-ui.com/uikit/',
        icon: storybookIcon,
    },
    {
        title: 'GitHub',
        url: 'https://github.com/gravity-ui',
        icon: githubIcon,
    },
];
