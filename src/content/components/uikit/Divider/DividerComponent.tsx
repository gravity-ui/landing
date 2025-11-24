import {Container, Divider, Flex, Label} from '@gravity-ui/uikit';
import type {DividerProps} from '@gravity-ui/uikit';
import React from 'react';

type DividerComponentProps = Pick<DividerProps, 'orientation' | 'align' | 'children'>;

export const DividerComponent = ({orientation, align, children}: DividerComponentProps) => {
    const divider = (
        <Divider orientation={orientation} align={align}>
            {children}
        </Divider>
    );

    return (
        <Container>
            <Flex gap={3} direction={orientation === 'horizontal' ? 'column' : 'row'}>
                <Label>Label</Label>
                {divider}
                <Label>Label</Label>
                {divider}
                <Label>Label</Label>
                {divider}
                <Label>Label</Label>
            </Flex>
        </Container>
    );
};
