import {ActionsPanel, ActionsPanelProps} from '@gravity-ui/uikit';
import React from 'react';

type Props = {
    withNote?: boolean;
    withClose?: boolean;
};

export const actions: ActionsPanelProps['actions'] = [
    {
        id: 'action_1',
        button: {
            props: {
                children: 'Action 1',
                onClick: () => console.log('click button action 1'),
            },
        },
        dropdown: {
            item: {
                action: () => console.log('click dropdown action 1'),
                text: 'Action 1',
            },
        },
    },
    {
        id: 'action_2',
        button: {
            props: {
                children: 'Action 2',
                onClick: () => console.log('click button action 2'),
            },
        },
        dropdown: {
            item: {
                action: () => console.log('click dropdown action 2'),
                text: 'Action 2',
            },
        },
    },
];
export function ActionsPanelComponent(props: Props) {
    const {withNote, withClose} = props;

    return (
        <ActionsPanel
            actions={actions}
            onClose={withClose ? () => console.log('click close handle') : undefined}
            renderNote={withNote ? () => '10 items' : undefined}
        />
    );
}
