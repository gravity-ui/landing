import {
    Animatable,
    AnimateBlock,
    HTML,
    ThemeSupporting,
    YFMWrapper,
    useTheme,
} from '@gravity-ui/page-constructor';
import {Button, ButtonProps, ClipboardIcon, CopyToClipboard, Icon} from '@gravity-ui/uikit';
import {SVGIconData} from '@gravity-ui/uikit/build/esm/components/Icon/types';
import React from 'react';

import {block, getThemedValue} from '../../utils';
import {CustomBlock} from '../constants';

import './CustomBanner.scss';

const TIMEOUT = 1000;

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
    const [theme] = useTheme();

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

    const textCommands = commands?.join(' && ') || '';

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
                        <>
                            <div className={b('commands-wrapper')}>
                                <div className={b('commands')}>
                                    {commands.map((item, index) => {
                                        return (
                                            <div key={index} className={b('command')}>
                                                {item}
                                            </div>
                                        );
                                    })}
                                </div>
                                <div className={b('copy-button')}>
                                    <CopyToClipboard text={textCommands} timeout={TIMEOUT}>
                                        {(status) => {
                                            return (
                                                <div>
                                                    <ClipboardIcon
                                                        size={16}
                                                        status={status}
                                                        className={b('copy-icon')}
                                                    />
                                                </div>
                                            );
                                        }}
                                    </CopyToClipboard>
                                </div>
                            </div>
                        </>
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
