import {SegmentedRadioGroup, SegmentedRadioGroupOptionProps} from '@gravity-ui/uikit';
import React from 'react';

import {InteractiveCard} from '../InteractiveCard';

export const SegmentCard = () => {
    const options: SegmentedRadioGroupOptionProps[] = [
        {value: 'Harder', content: 'Harder'},
        {value: 'Better', content: 'Better'},
        {value: 'Faster', content: 'Faster'},
        {value: 'Stronger', content: 'Stronger'},
    ];

    return (
        <InteractiveCard>
            <SegmentedRadioGroup defaultValue={options[0].value} options={options} />
        </InteractiveCard>
    );
};
