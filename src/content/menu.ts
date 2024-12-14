export type MenuItem = {
    titleKey: string;
    url: string;
    isComingSoon?: boolean;
    isNew?: boolean;
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
    {
        titleKey: 'menu_themer',
        url: '/themer',
    },
    {
        titleKey: 'menu_examples',
        url: '/examples',
        isComingSoon: true,
    },
];
