import {
    ChevronsCollapseUpRight,
    ChevronsExpandUpRight,
    TextAlignLeft,
    TextAlignRight,
} from '@gravity-ui/icons';
import {
    Col,
    Direction,
    Icon,
    RadioButton,
    Row,
    Select,
    Spin,
    Switch,
    Text,
    TextInput,
    Theme,
    Tooltip,
} from '@gravity-ui/uikit';
import {useTranslation} from 'next-i18next';
import React from 'react';

import themeIcon from '../../assets/icons/theme.svg';
import {block} from '../../utils';

import './SandboxBlock.scss';
import type {OptionType, SandboxBlockTypes} from './types';

const b = block('sandbox-block');

const SandboxBlock: React.FC<SandboxBlockTypes> = ({
    libId,
    componentId,
    sandboxConfig,
    isSupportRTL,
}) => {
    const {t} = useTranslation('component');

    const [props, setProps] = React.useState({});

    const [isIframeLoaded, setIsIframeLoaded] = React.useState(false);
    const [isFullScreen, setIsFullScreen] = React.useState(false);
    const [iframeTheme, setIframeTheme] = React.useState<Theme>('dark');
    const [iframeDirection, setIframeDirection] = React.useState<Direction>('ltr');

    const iframeRef = React.useRef() as React.MutableRefObject<HTMLIFrameElement | null>;

    const renderOptions = () => {
        if (!sandboxConfig) return [];
        const propsKeys = Object.keys(sandboxConfig);

        return propsKeys.map((prop) => {
            const option = sandboxConfig[prop];

            switch (option.type) {
                case 'select':
                    return (
                        <Row key={prop} space="0">
                            <div className={b('prop')}>
                                <Text className={b('prop-title')}>{prop}</Text>
                                <Select
                                    key={prop}
                                    value={[props[prop as keyof typeof props]]}
                                    placeholder={prop}
                                    options={option.values as OptionType[]}
                                    width="max"
                                    disabled={!isIframeLoaded}
                                    onUpdate={([nextValue]) =>
                                        setProps({
                                            ...props,
                                            [prop]: nextValue,
                                        })
                                    }
                                />
                            </div>
                        </Row>
                    );

                case 'radioButton':
                    return (
                        <Row key={prop} space="0">
                            <div className={b('prop')}>
                                <Text className={b('prop-title')}>{prop}</Text>
                                <RadioButton
                                    key={prop}
                                    value={props[prop as keyof typeof props]}
                                    options={option.values as OptionType[]}
                                    width="max"
                                    disabled={!isIframeLoaded}
                                    onUpdate={(nextValue) =>
                                        setProps({
                                            ...props,
                                            [prop]: nextValue,
                                        })
                                    }
                                />
                            </div>
                        </Row>
                    );

                case 'switch':
                    return (
                        <Row key={prop} space="0">
                            <div className={b('prop')}>
                                <div className={b('prop-switch')}>
                                    <Text variant="body-1">{prop}</Text>
                                    <Switch
                                        key={prop}
                                        title={prop}
                                        size="m"
                                        disabled={!isIframeLoaded}
                                        checked={props[prop as keyof typeof props]}
                                        onUpdate={(checked) => {
                                            setProps({
                                                ...props,
                                                [prop as keyof typeof props]: checked,
                                            });
                                        }}
                                    />
                                </div>
                            </div>
                        </Row>
                    );

                case 'input':
                    return (
                        <Row key={prop} space="0">
                            <div className={b('prop')}>
                                <Text className={b('prop-title')}>{prop}</Text>
                                <TextInput
                                    placeholder={prop}
                                    disabled={!isIframeLoaded}
                                    value={props[prop as keyof typeof props]}
                                    onUpdate={(nextValue) => {
                                        setProps({
                                            ...props,
                                            [prop]: nextValue,
                                        });
                                    }}
                                />
                            </div>
                        </Row>
                    );

                default:
                    return [];
            }
        });
    };

    const iframeLoadingHandler = React.useCallback(() => setIsIframeLoaded(true), []);

    React.useEffect(() => {
        iframeRef.current?.addEventListener('load', iframeLoadingHandler);

        return () => {
            iframeRef.current?.removeEventListener('load', iframeLoadingHandler);
        };
    }, [iframeRef.current]);

    React.useEffect(() => {
        if (sandboxConfig) {
            const defaultProps: Record<string, unknown> = {};
            const propsKeys = Object.keys(sandboxConfig);

            propsKeys.forEach((propKey) => {
                if (typeof sandboxConfig[propKey].defaultValue !== 'undefined') {
                    defaultProps[propKey] = sandboxConfig[propKey].defaultValue;
                }
            });

            setProps(defaultProps);
        }
    }, [sandboxConfig]);

    React.useEffect(() => {
        if (isIframeLoaded) {
            iframeRef.current?.contentWindow?.postMessage(
                {
                    pageProps: {theme: iframeTheme, direction: iframeDirection},
                    componentProps: props,
                },
                window.origin,
            );
        }
    }, [isIframeLoaded, props, iframeTheme, iframeDirection]);

    const rtlIcon = iframeDirection === 'ltr' ? TextAlignLeft : TextAlignRight;

    return (
        <div className={b({'full-screen': isFullScreen})}>
            <Row space="0">
                <Col s="12" l="8" m="8" className={b('wrapper-iframe')}>
                    <Spin size="s" />
                    <iframe
                        ref={iframeRef}
                        src={window && `${window?.location.origin}/sandbox/${libId}/${componentId}`}
                        frameBorder={0}
                        className={b('iframe')}
                    />
                </Col>
                <Col s="12" l="4" m="4">
                    <div className={b('top-actions')}>
                        <div className={b('top-actions-wrapper')}>
                            <div
                                tabIndex={0}
                                role="button"
                                className={b('control-icon')}
                                onClick={() => {
                                    setIframeTheme(iframeTheme === 'dark' ? 'light' : 'dark');
                                }}
                            >
                                <Tooltip content={t('theme')}>
                                    <Icon data={themeIcon} size={18} />
                                </Tooltip>
                            </div>
                            <div
                                tabIndex={0}
                                role="button"
                                className={
                                    isSupportRTL ? b('control-icon') : b('control-icon-disabled')
                                }
                                onClick={() => {
                                    if (isSupportRTL) {
                                        setIframeDirection(
                                            iframeDirection === 'ltr' ? 'rtl' : 'ltr',
                                        );
                                    }
                                }}
                            >
                                {isSupportRTL && (
                                    <Tooltip content={t('rtl')}>
                                        <Icon className={b('icon')} data={rtlIcon} size={18} />
                                    </Tooltip>
                                )}
                                {!isSupportRTL && (
                                    <Tooltip content={t('rtlNotSupported')}>
                                        <Icon data={rtlIcon} size={18} />
                                    </Tooltip>
                                )}
                            </div>
                        </div>
                        <div
                            tabIndex={0}
                            role="button"
                            className={b('control-icon')}
                            onClick={() => {
                                setIsFullScreen(!isFullScreen);
                            }}
                        >
                            {isFullScreen ? (
                                <ChevronsCollapseUpRight height={18} />
                            ) : (
                                <ChevronsExpandUpRight height={18} />
                            )}
                        </div>
                    </div>
                    <div className={b('actions')}>{renderOptions()}</div>
                </Col>
            </Row>
        </div>
    );
};

export {SandboxBlock};
