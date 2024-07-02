import {Alert, AlertProps, Button} from 'landing-uikit';
import React from 'react';

import {InteractiveCard} from '../InteractiveCard';

export const AlertCard = () => {
    const alertProps: AlertProps = {
        title: 'Work is never over',
        message: 'Work it harder, make it better\nDo it faster, makes us stronger',
        theme: 'info',
        view: 'filled',
        style: {width: 280, whiteSpace: 'pre-wrap'},
        actions: (
            <Alert.Actions>
                <Button>{'Make it'}</Button>
                <Button>{'Work it'}</Button>
            </Alert.Actions>
        ),
    };

    return (
        <InteractiveCard>
            <Alert {...alertProps} />
        </InteractiveCard>
    );
};
