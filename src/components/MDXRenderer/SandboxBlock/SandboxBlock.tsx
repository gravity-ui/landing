import {Col, Container, Row, Select, Switch, Text, TextInput} from '@gravity-ui/uikit';
import {FC, MutableRefObject, ReactNode, useEffect, useRef, useState} from 'react';

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
            state: ['children'],
        },
    },
};

const SandboxBlock: FC<SandboxBlockTypes> = ({component}) => {
    const [props, setProps] = useState({});
    const iframeRef = useRef() as MutableRefObject<HTMLIFrameElement | null>;

    useEffect(() => {
        iframeRef.current?.contentWindow?.postMessage(props, '*');
    }, [props]);

    console.log('propspso: ', props);

    const optionsNode = options[component];

    const renderSelects = (): ReactNode[] => {
        const select = optionsNode?.select;
        return Object.keys(select).map((option: string) => {
            return (
                <Row space="0">
                    <Select
                        key={option}
                        value={props[option as keyof typeof props]}
                        placeholder={option}
                        options={select[option] as OptionType[]}
                        onUpdate={(nextValue) =>
                            setProps({
                                ...props,
                                [option]: nextValue,
                            })
                        }
                    />
                </Row>
            );
        });
    };

    const renderSwitches = () => {
        const switchStates = optionsNode?.switch?.state as string[];

        return switchStates?.map((state: string) => {
            return (
                <Row space="0">
                    {state}{' '}
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
                </Row>
            );
        });
    };

    const renderInputs = () => {
        const inputs = optionsNode?.input?.state as string[];

        return inputs?.map((state: string) => {
            return (
                <Row space="5">
                    <Text>{state}</Text>
                    <TextInput
                        label={state}
                        onUpdate={(nextValue) => {
                            setProps({
                                ...props,
                                [state]: nextValue,
                            });
                        }}
                    />
                </Row>
            );
        });
    };

    return (
        <div className={`${b()}`}>
            <Container>
                <Row space="5">
                    <Col s="8" l="8" m="8">
                        <iframe
                            ref={iframeRef}
                            src={`${window.location.origin}/sandbox/uikit/${component}`}
                            frameBorder={0}
                            width="100%"
                        />
                    </Col>
                    <Col s="4" l="4" m="4">
                        <Container
                            spaceRow={{
                                m: '5',
                                l: '5',
                                s: '1',
                            }}
                        >
                            {renderSelects()}
                        </Container>
                        {renderSwitches()}
                        {renderInputs()}
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export {SandboxBlock};
