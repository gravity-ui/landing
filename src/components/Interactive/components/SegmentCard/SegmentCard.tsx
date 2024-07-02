import {RadioButton, RadioButtonOption} from 'landing-uikit';
import React from 'react';

import {InteractiveCard} from '../InteractiveCard';

export const SegmentCard = () => {
    const options: RadioButtonOption[] = [
        {value: 'Harder', content: 'Harder'},
        {value: 'Better', content: 'Better'},
        {value: 'Faster', content: 'Faster'},
        {value: 'Stronger', content: 'Stronger'},
    ];

    return (
        <InteractiveCard>
            <RadioButton defaultValue={options[0].value} options={options} />
        </InteractiveCard>
    );
};
