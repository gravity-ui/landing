import {TextInput} from '@gravity-ui/uikit';
import React from 'react';

import {InteractiveCard} from '../InteractiveCard';

export const InputCard = () => {
    const [inputValue, setInputValue] = React.useState('Do it harder');

    return (
        <InteractiveCard>
            <TextInput hasClear={true} value={inputValue} onUpdate={setInputValue} />
        </InteractiveCard>
    );
};
