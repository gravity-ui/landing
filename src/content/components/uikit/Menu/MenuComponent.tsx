import {Menu, MenuItemProps, MenuProps} from '@gravity-ui/uikit-v8';

type MenuComponentProps = {
    size?: MenuProps['size'];
    groupLabel?: string;
    itemTheme?: MenuItemProps['theme'];
    itemChildren?: MenuItemProps['children'];
    itemHref?: MenuItemProps['href'];
    itemDisabled?: MenuItemProps['disabled'];
    itemSelected?: MenuItemProps['disabled'];
};

export const MenuComponent = ({
    size,
    groupLabel,
    itemTheme,
    itemDisabled,
    itemSelected,
    itemHref,
    itemChildren,
}: MenuComponentProps) => (
    <Menu size={size} inline>
        <Menu.Item
            href={itemHref}
            theme={itemTheme}
            disabled={itemDisabled}
            selected={itemSelected}
        >
            {itemChildren}
        </Menu.Item>
        <Menu.Divider />
        <div style={{padding: '4px 8px'}}>{groupLabel}</div>
        <Menu.Item>One</Menu.Item>
        <Menu.Item>Two</Menu.Item>
    </Menu>
);
