import {RadioGroup, RadioGroupOption} from 'landing-uikit';
import React from 'react';

import {InteractiveCard} from '../InteractiveCard';

const options: RadioGroupOption[] = [
    {value: 'Value 1', content: 'Work it harder', disabled: true},
    {value: 'Value 2', content: 'Make it better'},
    {value: 'Value 3', content: 'Do it faster'},
];

const selectedDisabledOptions: RadioGroupOption[] = [
    {value: 'Value 4', content: 'Makes us stronger', disabled: true},
];

export const RadioCard = () => {
    return (
        <InteractiveCard>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <RadioGroup
                    size="l"
                    options={options}
                    defaultValue={options[2].value}
                    direction="vertical"
                />
                <RadioGroup
                    size="l"
                    options={selectedDisabledOptions}
                    defaultValue={selectedDisabledOptions[0].value}
                    direction="vertical"
                    style={{marginTop: '12px'}}
                />
            </div>
        </InteractiveCard>
    );
};
