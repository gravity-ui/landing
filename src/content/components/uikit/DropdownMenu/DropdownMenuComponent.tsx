import {DropdownMenu, DropdownMenuProps} from '@gravity-ui/uikit-v8/legacy';

export const dropdownMenuItems: DropdownMenuProps<unknown>['items'] = [
    {
        action: () => {},
        text: 'Rename',
    },
    {
        action: () => {},
        text: 'Delete',
        theme: 'danger',
    },
    {
        text: 'More',
        items: [
            {
                action: () => {},
                text: 'Mark as',
            },
            {
                action: () => {},
                text: 'Copy',
            },
            {
                action: () => {},
                text: 'Move to',
            },
        ],
    },
];

type DropdownMenuMenuComponentProps = {
    size?: DropdownMenuProps<unknown>['size'];
    disabled?: DropdownMenuProps<unknown>['disabled'];
    initialOpen?: boolean;
};

export const DropdownMenuComponent = ({
    size,
    disabled,
    initialOpen = true,
}: DropdownMenuMenuComponentProps) => (
    <DropdownMenu open={initialOpen} size={size} disabled={disabled} items={dropdownMenuItems} />
);
