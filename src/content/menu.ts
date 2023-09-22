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
        url: '/components/uikit/button',
    },
    {
        title: 'Design',
        url: '/design',
        // isComingSoon: true,
    },
    {
        title: 'Icons',
        url: '/icons',
    },
];
