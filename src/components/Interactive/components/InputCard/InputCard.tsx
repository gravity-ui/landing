import {TextInput} from '@gravity-ui/uikit';
import React from 'react';

import {InteractiveCard} from '../InteractiveCard';

const sleep = (time: number) => new Promise((resolve) => setTimeout(resolve, time));

const getStringParts = (str: string) => {
    const result = [];

    for (let i = 0; i < str.length; i++) {
        result.push(str.substring(0, i + 1));
    }

    return result;
};

const parts = getStringParts('Do it harder');

export const InputCard = () => {
    const [inputValue, setInputValue] = React.useState('');
    const isRunningInput = React.useRef(false);

    const runInput = React.useCallback(async () => {
        isRunningInput.current = true;

        while (isRunningInput.current) {
            for (const part of parts) {
                setInputValue(part);
                await sleep(150);
            }

            await sleep(6000);
        }
    }, []);

    React.useEffect(() => {
        runInput();

        return () => {
            isRunningInput.current = false;
        };
    }, []);

    return (
        <InteractiveCard>
            <TextInput hasClear={true} value={inputValue} />
        </InteractiveCard>
    );
};
