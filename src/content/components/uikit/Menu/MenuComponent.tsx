import {Menu, MenuGroupProps, MenuItemProps, MenuProps} from '@gravity-ui/uikit';

type MenuComponentProps = {
    size?: MenuProps['size'];
    groupLabel?: MenuGroupProps['label'];
    itemTheme?: MenuItemProps['theme'];
    itemChildren?: MenuItemProps['children'];
    itemHref?: MenuItemProps['href'];
    itemDisabled?: MenuItemProps['disabled'];
    itemActive?: MenuItemProps['disabled'];
    itemSelected?: MenuItemProps['disabled'];
};

export const MenuComponent = ({
    size,
    groupLabel,
    itemTheme,
    itemDisabled,
    itemSelected,
    itemActive,
    itemHref,
    itemChildren,
}: MenuComponentProps) => (
    <Menu size={size}>
        <Menu.Item
            href={itemHref}
            theme={itemTheme}
            disabled={itemDisabled}
            selected={itemSelected}
            active={itemActive}
        >
            {itemChildren}
        </Menu.Item>
        <Menu.Group label={groupLabel}>
            <Menu.Item>One</Menu.Item>
            <Menu.Item>Two</Menu.Item>
        </Menu.Group>
    </Menu>
);
