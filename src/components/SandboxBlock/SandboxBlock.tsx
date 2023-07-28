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
import {block} from '../../utils';

import './SandboxBlock.scss';
import {configOptions} from './config';
import type {OptionType, SandboxBlockTypes} from './types';

const b = block('sandbox-block');

const SandboxBlock: React.FC<SandboxBlockTypes> = ({component}) => {
    const [props, setProps] = React.useState({});
    const [isFullScreen, setIsFullScreen] = React.useState(false);
    const [globalTheme, setTheme] = React.useState<Theme>('dark');
    const iframeRef = React.useRef() as React.MutableRefObject<HTMLIFrameElement | null>;

    React.useEffect(() => {
        iframeRef.current?.contentWindow?.postMessage(
            {
                pageProps: {theme: globalTheme},
                componentProps: props,
            },
            '*',
        );
    }, [props, globalTheme]);

    const optionsNode = configOptions[component];

    const renderSelects = (): React.ReactNode[] => {
        const select = optionsNode?.select;
        return (
            select &&
            Object.keys(select).map((option: string) => {
                return (
                    <Row space="0">
                        <div className={b('content')}>
                            <Text>{option}</Text>
                            <Select
                                key={option}
                                value={props[option as keyof typeof props]}
                                placeholder={option}
                                options={select[option] as OptionType[]}
                                width="max"
                                onUpdate={(nextValue) =>
                                    setProps({
                                        ...props,
                                        [option]: nextValue,
                                    })
                                }
                            />
                        </div>
                    </Row>
                );
            })
        );
    };

    const renderRadioButtons = (): React.ReactNode[] => {
        const radioButton = optionsNode?.radioButton;
        return (
            radioButton &&
            Object.keys(radioButton).map((option: string) => {
                return (
                    <Row space="0">
                        <div className={b('content')}>
                            <Text>{option}</Text>
                            <RadioButton
                                key={option}
                                value={props[option as keyof typeof props]}
                                options={radioButton[option] as OptionType[]}
                                width="max"
                                onUpdate={(nextValue) =>
                                    setProps({
                                        ...props,
                                        [option]: nextValue,
                                    })
                                }
                            />
                        </div>
                    </Row>
                );
            })
        );
    };

    const renderSwitches = () => {
        const switchStates = optionsNode?.switch?.state as string[];

        return switchStates?.map((state: string) => {
            return (
                <Row space="0">
                    <div className={b('content')}>
                        <div className={b('content-switch')}>
                            <Text variant="body-2">{state}</Text>
                            <Switch
                                key={state}
                                size="m"
                                onUpdate={(checked) => {
                                    setProps({
                                        ...props,
                                        [state as keyof typeof props]: checked,
                                    });
                                }}
                            />
                        </div>
                    </div>
                </Row>
            );
        });
    };

    const renderInputs = () => {
        const inputs = optionsNode?.input?.state as string[];

        return inputs?.map((state: string) => {
            return (
                <Row space="0">
                    <div className={b('content')}>
                        <Text>{state}</Text>
                        <TextInput
                            placeholder={state}
                            onUpdate={(nextValue) => {
                                setProps({
                                    ...props,
                                    [state]: nextValue,
                                });
                            }}
                        />
                    </div>
                </Row>
            );
        });
    };

    return (
        optionsNode && (
            <div className={`${b()} ${isFullScreen && b('full-screen')}`}>
                <Row space="0">
                    <Col s="12" l="8" m="8">
                        <iframe
                            ref={iframeRef}
                            src={window && `${window?.location.origin}/sandbox/uikit/${component}`}
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
                        <div className={b('actions')}>
                            {renderSelects()}
                            {renderRadioButtons()}
                            {renderSwitches()}
                            {renderInputs()}
                        </div>
                    </Col>
                </Row>
            </div>
        )
    );
};

export {SandboxBlock};
