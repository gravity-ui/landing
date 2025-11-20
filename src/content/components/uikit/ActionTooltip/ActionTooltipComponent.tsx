import {ActionTooltip, Button} from '@gravity-ui/uikit';
import type {ActionTooltipProps} from '@gravity-ui/uikit';
import React from 'react';

type ActionTooltipComponentProps = Pick<
    ActionTooltipProps,
    'title' | 'description' | 'hotkey' | 'disabled' | 'placement'
> & {
    trigger: ActionTooltipProps['trigger'] | 'hover';
};

export const ActionTooltipComponent = ({
    title,
    description,
    hotkey,
    disabled,
    trigger,
    placement,
}: ActionTooltipComponentProps) => {
    return (
        <ActionTooltip
            title={title}
            description={description}
            hotkey={hotkey}
            trigger={trigger === 'hover' ? undefined : trigger}
            placement={placement}
            disabled={disabled}
        >
            <Button>{trigger ?? 'hover'} me</Button>
        </ActionTooltip>
    );
};
