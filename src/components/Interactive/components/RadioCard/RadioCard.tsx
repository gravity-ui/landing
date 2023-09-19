import {RadioGroup, RadioGroupOption} from '@gravity-ui/uikit';
import React from 'react';

import {InteractiveCard} from '../InteractiveCard';

const options: RadioGroupOption[] = [
    {value: 'Value 1', content: 'Work it harder', disabled: true},
    {value: 'Value 2', content: 'Make it better'},
    {value: 'Value 3', content: 'Do it faster'},
    {value: 'Value 4', content: 'Makes us stronger', disabled: true},
];

export const RadioCard = () => {
    return (
        <InteractiveCard>
            <RadioGroup
                size="l"
                options={options}
                defaultValue={options[2].value}
                direction="vertical"
            />
        </InteractiveCard>
    );
};
