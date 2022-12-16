import React from 'react';
import {
    AnimateBlock,
    Animatable,
    ThemeSupporting,
    HTML,
    YFMWrapper,
} from '@gravity-ui/page-constructor';
import {useThemeValue} from '@gravity-ui/page-constructor/build/esm/context/theme/useThemeValue';
import {SVGIconData} from '@gravity-ui/uikit/build/esm/components/Icon/types';
import {Button, ButtonProps, Icon} from '@gravity-ui/uikit';
import {block, getThemedValue} from '../../utils';
import {CustomBlock} from '../constants';
import './CustomBanner.scss';

const b = block('custom-banner');

type CustomButton = ButtonProps & {
    text: string;
    icon?: SVGIconData;
};

export type CustomBannerProps = Animatable & {
    title: string;
    subtitle?: string;
    image?: ThemeSupporting<string>;
    color?: ThemeSupporting<string>;
    commands?: string[];
    buttons?: CustomButton[];
};

export type CustomBannerModel = CustomBannerProps & {
    type: CustomBlock.CustomBanner;
};

export const CustomBanner: React.FC<CustomBannerProps> = ({
    animated,
    title,
    subtitle,
    image,
    color,
    commands,
    buttons,
}) => {
    const theme = useThemeValue();

    const contentStyle: Record<string, string> = {};

    if (color) {
        contentStyle.backgroundColor = getThemedValue(color, theme);
    }

    if (image) {
        const themedImage = getThemedValue(image, theme);
        contentStyle.backgroundImage = `url(${themedImage})`;
        contentStyle.backgroundSize = 'cover';
        contentStyle.backgroundPosition = 'center';
    }

    return (
        <AnimateBlock className={b()} animate={animated}>
            <div className={b('content')} style={contentStyle}>
                <div className={b('info')}>
                    <h2 className={b('title')}>
                        <HTML>{title}</HTML>
                    </h2>
                    {subtitle && (
                        <YFMWrapper
                            className={b('subtitle')}
                            content={subtitle}
                            modifiers={{constructor: true}}
                        />
                    )}
                    {commands && commands.length > 0 ? (
                        <div className={b('commands')}>
                            {commands.map((item, index) => {
                                return (
                                    <div key={index} className={b('command')}>
                                        {item}
                                    </div>
                                );
                            })}
                        </div>
                    ) : null}
                    {buttons && buttons.length > 0 ? (
                        <div className={b('buttons')}>
                            {buttons.map((button, index) => {
                                const {icon, text, ...buttonProps} = button;
                                return (
                                    <div key={index} className={b('button')}>
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
            </div>
        </AnimateBlock>
    );
};

export default CustomBanner;
