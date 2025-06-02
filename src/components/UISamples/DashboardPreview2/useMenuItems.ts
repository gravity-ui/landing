import {
    ArrowsOppositeToDots,
    ChartMixed,
    ChartPie,
    Cubes3Overlap,
    Envelope,
    LayoutHeaderCells,
    Comments as Messages,
    Person,
    PersonMagnifier,
    Persons,
    ShoppingCart,
} from '@gravity-ui/icons';
import {AsideHeaderProps} from '@gravity-ui/navigation';
import {useMemo} from 'react';

export const useMenuItems = () => {
    return useMemo<AsideHeaderProps['menuItems']>(() => {
        const mainMenuItems = [
            {id: 'dashboard', title: 'Dashboard', icon: LayoutHeaderCells},
            {id: 'products', title: 'Products', icon: Cubes3Overlap},
            {id: 'order', title: 'Order', icon: ShoppingCart},
            {id: 'customers', title: 'Customers', icon: PersonMagnifier},
            {id: 'chat', title: 'Chat', icon: Messages},
        ];

        const dividerItem: Exclude<AsideHeaderProps['menuItems'], undefined>[0] = {
            id: 'divider1',
            type: 'divider',
            title: '',
        };

        const secondaryMenuItems = [
            {id: 'email', title: 'Email', icon: Envelope},
            {id: 'analytics', title: 'Analytics', icon: ChartPie},
            {id: 'integration', title: 'Integration', icon: ArrowsOppositeToDots},
            {id: 'performance', title: 'Performance', icon: ChartMixed},
            {id: 'account', title: 'Account', icon: Person},
            {id: 'members', title: 'Members', icon: Persons},
        ];

        return [...mainMenuItems, dividerItem, ...secondaryMenuItems];
    }, []);
};
