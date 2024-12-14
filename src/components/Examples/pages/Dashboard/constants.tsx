import {
    ArrowsOppositeToDots,
    ChartMixed,
    ChartPie,
    Comment,
    Comments,
    Cubes3Overlap,
    Envelope,
    Gear,
    LayoutHeaderCells,
    Person,
    PersonMagnifier,
    Persons,
    ShoppingCart
} from '@gravity-ui/icons';
import {MenuItem} from '@gravity-ui/navigation';

export const menuItems: MenuItem[] = [
    {
        id: 'dashboard',
        title: 'Dashboard',
        icon: LayoutHeaderCells,
        current: true
    },
    {
        id: 'products',
        title: 'Products',
        icon: Cubes3Overlap
    },
    {
        id: 'order',
        title: 'Order',
        icon: ShoppingCart
    },
    {
        id: 'customers',
        title: 'Customers',
        icon: PersonMagnifier
    },
    {
        id: 'chat',
        title: 'Chat',
        icon: Comments,
    },
    {
        id: 'divider',
        title: '-',
        type: 'divider',
    },
    {
        id: 'email',
        title: 'Email',
        icon: Envelope,
    },
    {
        id: 'analytics',
        title: 'Analytics',
        icon: ChartPie,
    },
    {
        id: 'integration',
        title: 'Integration',
        icon: ArrowsOppositeToDots,
    },
    {
        id: 'performance',
        title: 'Performance',
        icon: ChartMixed,
    },
    {
        id: 'divider',
        title: '-',
        type: 'divider',
    },
    {
        id: 'account',
        title: 'Account',
        icon: Person,
    },
    {
        id: 'members',
        title: 'Members',
        icon: Persons,
    },
];

export const footerMenuItems: MenuItem[] = [
    {
        id: 'feedback',
        title: 'Feedback',
        icon: Comment
    },
    {
        id: 'settings',
        title: 'Settings',
        icon: Gear
    },
];
