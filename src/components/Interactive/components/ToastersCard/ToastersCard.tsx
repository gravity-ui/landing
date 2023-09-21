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
            autoHiding: false,
            type: 'warning',
            isClosable: false,
        });

        setTimeout(() => {
            add({
                name: 'second',
                title: 'Do it faster',
                content: 'Makes us stronger',
                autoHiding: false,
                type: 'success',
                isClosable: false,
            });
        }, 2000);
    }, [add]);

    React.useEffect(() => {
        showToasters();
        intervalRef.current = setInterval(showToasters, 5000);

        return () => {
            clearInterval(intervalRef.current);
        };
    }, []);

    return null;
};

export const ToastersCard = () => {
    return (
        <InteractiveCard>
            <ToastersCardInner />
        </InteractiveCard>
    );
};
