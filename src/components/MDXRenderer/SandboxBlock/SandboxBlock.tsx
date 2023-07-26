import {ChevronsExpandUpRight} from '@gravity-ui/icons';
import {Col, Icon, Row, Select, Switch, Text, TextInput, Theme} from '@gravity-ui/uikit';
import {FC, MutableRefObject, ReactNode, useEffect, useRef, useState} from 'react';

import themeIcon from '../../../assets/icons/theme.svg';
import {block} from '../../../utils';

import './SandboxBlock.scss';
import {SandboxBlockTypes} from './types';

const b = block('sandbox-block');

type OptionType = {
    value: string;
    content: string;
};

type OptionsType = {
    [key: string]: {
        [key: string]: {
            [key: string]: OptionType[] | string[];
        };
    };
};

const mappingOptions = (arr: string[]) =>
    arr.map((item) => ({
        value: item,
        content: item,
    }));

const options: OptionsType = {
    button: {
        select: {
            view: mappingOptions([
                'normal',
                'action',
                'raised',
                'outlined',
                'outlined-info',
                'outlined-danger',
                'flat',
                'flat-info',
                'flat-danger',
                'flat-secondary',
                'normal-contrast',
                'outlined-contrast',
                'flat-contrast',
            ]),

            size: mappingOptions(['xs', 's', 'm', 'l', 'xl']),

            width: mappingOptions(['auto', 'max']),
        },
        switch: {
            state: ['disabled', 'loading'],
        },
        input: {
            state: ['text'],
        },
    },
};

const SandboxBlock: FC<SandboxBlockTypes> = ({component}) => {
    const [props, setProps] = useState({});
    const [theme, setTheme] = useState<Theme>('dark');
    const iframeRef = useRef() as MutableRefObject<HTMLIFrameElement | null>;

    useEffect(() => {
        iframeRef.current?.contentWindow?.postMessage(
            {
                ...props,
                theme,
            },
            '*',
        );
    }, [props, theme]);

    const optionsNode = options[component];

    const renderSelects = (): ReactNode[] => {
        const select = optionsNode?.select;
        return Object.keys(select).map((option: string) => {
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
        });
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
        <div className={b()}>
            <Row space="0">
                <Col s="12" l="8" m="8">
                    <iframe
                        ref={iframeRef}
                        src={`${window.location.origin}/sandbox/uikit/${component}`}
                        frameBorder={0}
                        className={b('iframe')}
                    />
                </Col>
                <Col s="12" l="4" m="4" className={b('right-side')}>
                    <div className={b('top-actions')}>
                        <div
                            tabIndex={0}
                            role="button"
                            className={b('control-theme')}
                            onClick={() => {
                                setTheme(theme === 'dark' ? 'light' : 'dark');
                            }}
                        >
                            <Icon data={themeIcon} size={18} />
                        </div>
                        <div
                            tabIndex={0}
                            role="button"
                            className={b('control-theme')}
                            onClick={() => {
                                setTheme(theme === 'dark' ? 'light' : 'dark');
                            }}
                        >
                            <ChevronsExpandUpRight height={18} />
                        </div>
                    </div>
                    <div className={b('actions')}>
                        {renderSelects()}
                        {renderSwitches()}
                        {renderInputs()}
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export {SandboxBlock};
