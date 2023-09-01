import {Card, CardProps} from '@gravity-ui/uikit';
import React from 'react';

const style = {
    width: '120px',
    height: '120px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};

export const CardComponent = (props: CardProps) => {
    return (
        <Card style={style} {...props}>
            Some text
        </Card>
    );
};
