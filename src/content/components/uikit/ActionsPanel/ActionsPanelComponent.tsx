import {ActionsPanel, ActionsPanelProps} from '@gravity-ui/uikit-v8';
import React from 'react';

type ActionsPanelComponentProps = {
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
        menu: {
            item: {
                onClick: () => console.log('click dropdown action 1'),
                children: 'Action 1',
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
        menu: {
            item: {
                onClick: () => console.log('click dropdown action 2'),
                children: 'Action 2',
            },
        },
    },
];
export function ActionsPanelComponent(props: ActionsPanelComponentProps) {
    const {withNote, withClose} = props;

    return (
        <ActionsPanel
            actions={actions}
            onClose={withClose ? () => console.log('click close handle') : undefined}
            renderNote={withNote ? () => '10 items' : undefined}
        />
    );
}
