import {Button, Popover} from '@gravity-ui/uikit-v8';
import type {PopoverProps} from '@gravity-ui/uikit-v8';
import React from 'react';

type PopupComponentProps = Pick<PopoverProps, 'placement' | 'hasArrow' | 'disabled' | 'trigger'>;

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
