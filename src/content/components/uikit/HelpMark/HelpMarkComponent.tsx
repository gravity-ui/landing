import {HelpMark} from '@gravity-ui/uikit-v8';
import type {HelpMarkProps} from '@gravity-ui/uikit-v8';
import React from 'react';

type HelpMarkComponentProps = Pick<HelpMarkProps, 'size'>;

export const HelpMarkComponent = ({size}: HelpMarkComponentProps) => {
    return <HelpMark size={size}>Some content</HelpMark>;
};
