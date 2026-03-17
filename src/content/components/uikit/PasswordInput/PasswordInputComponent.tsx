import {PasswordInput, PasswordInputProps} from '@gravity-ui/uikit';
import React from 'react';

export const PasswordInputComponent = (props: PasswordInputProps) => {
    return (
        <div style={{width: '100%', maxWidth: 300, lineHeight: 0}}>
            <PasswordInput {...props} />
        </div>
    );
};
