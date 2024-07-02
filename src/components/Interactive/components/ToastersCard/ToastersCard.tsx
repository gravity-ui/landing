import {useToaster} from 'landing-uikit';
import React from 'react';

import {block} from '../../../../utils';
import {InteractiveCard} from '../InteractiveCard';

import './ToastersCard.scss';

const b = block('toasters-card');

const ToastersCardInner = () => {
    const {add} = useToaster();
    const intervalRef = React.useRef<NodeJS.Timer>();

    const showToasters = React.useCallback(() => {
        add({
            name: 'first',
            title: 'Work it harder',
            content: 'Make it better',
            autoHiding: 3500,
            theme: 'warning',
            isClosable: false,
        });

        setTimeout(() => {
            add({
                name: 'second',
                title: 'Do it faster',
                content: 'Makes us stronger',
                autoHiding: 3500,
                theme: 'success',
                isClosable: false,
            });
        }, 2000);

        setTimeout(() => {
            add({
                name: 'third',
                title: 'Work it harder',
                content: 'Make it better',
                autoHiding: 3500,
                theme: 'info',
                isClosable: false,
            });
        }, 4000);

        setTimeout(() => {
            add({
                name: 'fourth',
                title: 'Do it faster',
                content: 'Makes us stronger',
                autoHiding: 3500,
                theme: 'danger',
                isClosable: false,
            });
        }, 6000);
    }, [add]);

    React.useEffect(() => {
        showToasters();
        intervalRef.current = setInterval(showToasters, 8000);

        return () => {
            clearInterval(intervalRef.current);
        };
    }, []);

    return null;
};

export const ToastersCard = () => {
    return (
        <InteractiveCard className={b()}>
            <ToastersCardInner />
        </InteractiveCard>
    );
};
