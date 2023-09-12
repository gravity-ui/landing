import {TextArea, TextAreaProps} from '@gravity-ui/uikit';
import React from 'react';

export const TextAreaComponent = (props: TextAreaProps) => {
    return (
        <div style={{width: '100%', maxWidth: 300}}>
            <TextArea {...props} />
        </div>
    );
};
