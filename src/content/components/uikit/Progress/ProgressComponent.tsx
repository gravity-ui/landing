import {Progress, ProgressProps} from '@gravity-ui/uikit-v8';
import React from 'react';

export const ProgressComponent = (props: ProgressProps) => {
    return (
        <div style={{width: '30%'}}>
            <Progress {...props} value={Number(props.value)} />
        </div>
    );
};
