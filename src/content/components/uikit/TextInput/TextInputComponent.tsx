import {TextInput, TextInputProps} from '@gravity-ui/uikit-v8';
import React from 'react';

export const TextInputComponent = (props: TextInputProps) => {
    return (
        <div style={{width: '100%', maxWidth: 300, lineHeight: 0}}>
            <TextInput {...props} />
        </div>
    );
};
