export type MenuItem = {
    titleKey: string;
    url: string;
    isComingSoon?: boolean;
};

export const menu: MenuItem[] = [
    {
        titleKey: 'menu_libraries',
        url: '/libraries',
    },
    {
        titleKey: 'menu_components',
        // url: '/components',
        url: '/components/uikit',
    },
    {
        titleKey: 'menu_design',
        url: '/design',
    },
    {
        titleKey: 'menu_icons',
        url: '/icons',
    },
];
