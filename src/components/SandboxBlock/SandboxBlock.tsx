import {ChevronsCollapseUpRight, ChevronsExpandUpRight} from '@gravity-ui/icons';
import {
    Col,
    Icon,
    RadioButton,
    Row,
    Select,
    Switch,
    Text,
    TextInput,
    Theme,
} from '@gravity-ui/uikit';
import React from 'react';

import themeIcon from '../../assets/icons/theme.svg';
import {uikit} from '../../content/components';
import {block} from '../../utils';

import './SandboxBlock.scss';
import type {OptionType, SandboxBlockTypes} from './types';

const b = block('sandbox-block');

const SandboxBlock: React.FC<SandboxBlockTypes> = ({componentId}) => {
    const [props, setProps] = React.useState({});
    const [isFullScreen, setIsFullScreen] = React.useState(false);
    const [globalTheme, setTheme] = React.useState<Theme>('dark');
    const iframeRef = React.useRef() as React.MutableRefObject<HTMLIFrameElement | null>;

    const sandboxConfig = uikit.components.find((component) => component.id === componentId)
        ?.sandbox?.props;

    const renderOptions = () => {
        if (!sandboxConfig) return [];
        const propsKeys = Object.keys(sandboxConfig);

        return propsKeys?.map((prop) => {
            const option = sandboxConfig[prop];

            switch (option.type) {
                case 'select':
                    return (
                        <Row space="0">
                            <div className={b('content')}>
                                <Text>{prop}</Text>
                                <Select
                                    key={prop}
                                    value={props[prop as keyof typeof props]}
                                    placeholder={prop}
                                    options={option.values as OptionType[]}
                                    width="max"
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

                case 'radioButton':
                    return (
                        <Row space="0">
                            <div className={b('content')}>
                                <Text>{prop}</Text>
                                <RadioButton
                                    key={prop}
                                    value={props[prop as keyof typeof props]}
                                    options={option.values as OptionType[]}
                                    width="max"
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
                        <Row space="0">
                            <div className={b('content')}>
                                <div className={b('content-switch')}>
                                    <Text variant="body-2">{prop}</Text>
                                    <Switch
                                        key={prop}
                                        size="m"
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
                        <Row space="0">
                            <div className={b('content')}>
                                <Text>{prop}</Text>
                                <TextInput
                                    placeholder={prop}
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

    React.useEffect(() => {
        iframeRef.current?.contentWindow?.postMessage(
            {
                pageProps: {theme: globalTheme},
                componentProps: props,
            },
            '*',
        );
    }, [props, globalTheme]);

    return (
        <div className={`${b()} ${isFullScreen && b('full-screen')}`}>
            <Row space="0">
                <Col s="12" l="8" m="8" className={b('wrapper-iframe')}>
                    <iframe
                        ref={iframeRef}
                        src={window && `${window?.location.origin}/sandbox/uikit/${componentId}`}
                        frameBorder={0}
                        className={b('iframe')}
                    />
                </Col>
                <Col s="12" l="4" m="4">
                    <div className={b('top-actions')}>
                        <div
                            tabIndex={0}
                            role="button"
                            className={b('control-theme')}
                            onClick={() => {
                                setTheme(globalTheme === 'dark' ? 'light' : 'dark');
                            }}
                        >
                            <Icon data={themeIcon} size={18} />
                        </div>
                        <div
                            tabIndex={0}
                            role="button"
                            className={b('control-theme')}
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
