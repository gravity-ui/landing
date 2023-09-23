export type MenuItem = {
    title: string;
    url: string;
    isComingSoon?: boolean;
};

export const menu: MenuItem[] = [
    {
        title: 'Libraries',
        url: '/libraries',
    },
    {
        title: 'Components',
        // url: '/components',
        url: '/components/uikit',
    },
    {
        title: 'Design',
        url: '/design',
    },
    {
        title: 'Icons',
        url: '/icons',
    },
];
