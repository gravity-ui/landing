export type MenuItem = {
    titleKey: string;
    url: string;
    isComingSoon?: boolean;
};

export const menu: MenuItem[] = [
    {
        titleKey: 'menu.libraries',
        url: '/libraries',
    },
    {
        titleKey: 'menu.components',
        // url: '/components',
        url: '/components/uikit',
    },
    {
        titleKey: 'menu.design',
        url: '/design',
    },
    {
        titleKey: 'menu.icons',
        url: '/icons',
    },
];
