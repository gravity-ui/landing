import {TextInput} from 'landing-uikit';
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

const groups = [
    getStringParts('Do it harder'),
    getStringParts('Make it better'),
    getStringParts('Do it faster'),
    getStringParts('Makes us stronger'),
];

export const InputCard = () => {
    const [inputValue, setInputValue] = React.useState('');
    const isRunningInput = React.useRef(false);

    const runInput = React.useCallback(async () => {
        isRunningInput.current = true;

        while (isRunningInput.current) {
            for (const group of groups) {
                for (const part of group) {
                    setInputValue(part);
                    await sleep(150);
                }

                await sleep(6000);
            }
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
