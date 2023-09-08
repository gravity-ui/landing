import {DropdownMenu, DropdownMenuProps} from '@gravity-ui/uikit';

type DropdownMenuMenuComponentProps = {
    size?: DropdownMenuProps<unknown>['size'];
    disabled?: DropdownMenuProps<unknown>['disabled'];
};

export const DropdownMenuComponent = ({size, disabled}: DropdownMenuMenuComponentProps) => (
    <DropdownMenu
        open
        size={size}
        disabled={disabled}
        items={[
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
        ]}
    />
);
