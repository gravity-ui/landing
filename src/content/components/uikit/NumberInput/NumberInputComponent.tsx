import {NumberInput, NumberInputProps} from '@gravity-ui/uikit';
import React from 'react';

export const NumberInputComponent = (props: NumberInputProps) => {
    return (
        <div style={{width: '100%', maxWidth: 300, lineHeight: 0}}>
            <NumberInput {...props} />
        </div>
    );
};
