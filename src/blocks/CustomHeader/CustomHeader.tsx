import {Animatable, AnimateBlock, HTML} from '@gravity-ui/page-constructor';
import {Button, ButtonProps, Icon} from '@gravity-ui/uikit';
import {SVGIconData} from '@gravity-ui/uikit/build/esm/components/Icon/types';
import React from 'react';

import {block} from '../../utils';
import {CustomBlock} from '../constants';

import './CustomHeader.scss';

const b = block('custom-header');

type CustomButton = ButtonProps & {
    text: string;
    icon?: SVGIconData;
};

export type CustomHeaderProps = Animatable & {
    title: string;
    buttons: CustomButton[];
};

export type CustomHeaderModel = CustomHeaderProps & {
    type: CustomBlock.CustomHeader;
};

export const CustomHeader: React.FC<CustomHeaderProps> = ({animated, title, buttons}) => {
    return (
        <AnimateBlock className={b()} animate={animated}>
            <div>
                <h1 className={b('title')}>
                    <HTML>{title}</HTML>
                </h1>
                {buttons?.length > 0 ? (
                    <div className={b('buttons')}>
                        {buttons.map((button) => {
                            const {icon, text, ...buttonProps} = button;
                            return (
                                <div key={text} className={b('button')}>
                                    <Button size="xl" {...buttonProps}>
                                        {icon ? (
                                            <Icon
                                                className={b('button-icon')}
                                                data={icon}
                                                size={16}
                                            />
                                        ) : null}
                                        {text}
                                    </Button>
                                </div>
                            );
                        })}
                    </div>
                ) : null}
            </div>
        </AnimateBlock>
    );
};

export default CustomHeader;
