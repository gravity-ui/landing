import {useToaster} from '@gravity-ui/uikit';
import React from 'react';

import {InteractiveCard} from '../InteractiveCard';

const ToastersCardInner = () => {
    const {add} = useToaster();
    const intervalRef = React.useRef<NodeJS.Timer>();

    const showToasters = React.useCallback(() => {
        add({
            name: 'first',
            title: 'Work it harder',
            content: 'Make it better',
            autoHiding: 3700,
            type: 'warning',
            isClosable: false,
        });

        setTimeout(() => {
            add({
                name: 'second',
                title: 'Do it faster',
                content: 'Makes us stronger',
                autoHiding: 3700,
                type: 'success',
                isClosable: false,
            });
        }, 2000);

        setTimeout(() => {
            add({
                name: 'third',
                title: 'Work it harder',
                content: 'Make it better',
                autoHiding: 3700,
                type: 'info',
                isClosable: false,
            });
        }, 4000);

        setTimeout(() => {
            add({
                name: 'fourth',
                title: 'Do it faster',
                content: 'Makes us stronger',
                autoHiding: 3700,
                type: 'error',
                isClosable: false,
            });
        }, 6000);
    }, [add]);

    React.useEffect(() => {
        showToasters();
        intervalRef.current = setInterval(showToasters, 7000);

        return () => {
            clearInterval(intervalRef.current);
        };
    }, []);

    return null;
};

export const ToastersCard = () => {
    return (
        <InteractiveCard style={{width: 300, alignItems: 'flex-end'}}>
            <ToastersCardInner />
        </InteractiveCard>
    );
};
