import {PopupPlacement, Tooltip} from '@gravity-ui/uikit';
import React from 'react';

type TooltipComponentProps = {
    placement: PopupPlacement;
};

export const TooltipComponent = ({placement}: TooltipComponentProps) => {
    return (
        <Tooltip content="Content" placement={placement}>
            <div tabIndex={0}>Hover or focus me</div>
        </Tooltip>
    );
};
