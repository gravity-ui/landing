import {Button, Popover} from '@gravity-ui/uikit';
import type {PopoverProps} from '@gravity-ui/uikit';
import React from 'react';

type PopupComponentProps = {
    open?: boolean;
    placement?: PopoverProps['placement'];
    hasArrow?: boolean;
    disabled?: boolean;
    trigger?: PopoverProps['trigger'];
};

export const PopoverComponent = ({disabled, trigger, placement, hasArrow}: PopupComponentProps) => {
    return (
        <Popover
            content="Content"
            disabled={disabled}
            trigger={trigger}
            placement={placement}
            hasArrow={hasArrow}
        >
            <Button>{trigger} me</Button>
        </Popover>
    );
};
