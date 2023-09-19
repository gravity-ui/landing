import {Flex, Switch} from '@gravity-ui/uikit';
import React, {useEffect, useRef, useState} from 'react';

import {InteractiveCard} from '../InteractiveCard';

const AUTO_SWITCH_TIMEOUT = 1000 * 3;

export const SwitchCard = () => {
    const [checked, setChecked] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout>();

    useEffect(() => {
        const id = setInterval(() => {
            setChecked((prev) => !prev);
        }, AUTO_SWITCH_TIMEOUT);

        intervalRef.current = id;

        return () => {
            clearInterval(intervalRef.current);
        };
    }, []);

    return (
        <InteractiveCard>
            <Flex direction="column" space={3}>
                <Switch checked={checked} />
                <Switch checked={!checked} />
            </Flex>
        </InteractiveCard>
    );
};
