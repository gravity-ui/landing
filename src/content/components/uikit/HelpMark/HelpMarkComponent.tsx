import {HelpMark} from '@gravity-ui/uikit';
import type {HelpMarkProps} from '@gravity-ui/uikit';
import React from 'react';

type HelpMarkComponentProps = Pick<HelpMarkProps, 'iconSize'>;

export const HelpMarkComponent = ({iconSize}: HelpMarkComponentProps) => {
    return <HelpMark iconSize={iconSize}>Some content</HelpMark>;
};
