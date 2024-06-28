import {CircleCheckFill} from '@gravity-ui/icons';
import {Card, type CardProps, DOMProps, Text, TextProps} from '@gravity-ui/uikit';
import React from 'react';

import {block} from '../../utils';

import './SelectableCard.scss';

const b = block('selectable-card');

export type SelecableCardProps = {
    /**
     * Text to display inside
     */
    text: string;
    /**
     * Flag to show only text without decoration
     */
    pureText?: boolean;
    /**
     * Props for inner Text component
     */
    textProps?: TextProps;
    /**
     * Style object to customize decorated text. Has an impact when pureText has falsie values
     */
    contentStyle?: React.CSSProperties;
} & Pick<CardProps, 'selected' | 'onClick'> &
    Pick<DOMProps, 'className'>;

const CardContent = ({
    text,
    pureText,
    textProps,
    contentStyle,
}: Pick<SelecableCardProps, 'text' | 'pureText' | 'textProps' | 'contentStyle'>) => {
    const props: Record<string, unknown> = pureText
        ? {variant: 'body-2'}
        : {color: 'inverted-primary', className: b('fake-button')};
    props.style = contentStyle;
    return (
        <Text {...props} {...textProps}>
            {text}
        </Text>
    );
};

export const SelectableCard = ({
    selected,
    pureText,
    text,
    onClick,
    className,
    textProps,
    contentStyle,
}: SelecableCardProps) => {
    return (
        <Card className={b(null, className)} type="selection" selected={selected} onClick={onClick}>
            <CardContent
                text={text}
                pureText={pureText}
                textProps={textProps}
                contentStyle={contentStyle}
            />
            {selected && <CircleCheckFill className={b('icon')} />}
        </Card>
    );
};
