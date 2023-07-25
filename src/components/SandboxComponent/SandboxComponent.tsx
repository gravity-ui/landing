import dynamic from 'next/dynamic';
import {ElementType, FC, useEffect, useState} from 'react';

import {block} from '../../utils';

import './SandboxComponent.scss';

import {EventEmitter} from 'stream';

type ComponenDictType = {
    [key: string]: ElementType;
};

const componenDict: ComponenDictType = {
    button: dynamic(() => import('@gravity-ui/uikit').then((mod) => mod.Button)),
    label: dynamic(() => import('@gravity-ui/uikit').then((mod) => mod.Label)),
};

const b = block('component');

export type ComponentProps = {
    libId: string;
    componentId: unknown;
};

export const SandboxComponent: FC<ComponentProps> = ({componentId, ...restProps}) => {
    const [props, setProps] = useState(restProps);
    const DynamicComponent = componenDict[componentId as string];

    const handleListeningMessages = (e: MessageEvent) => {
        setProps({
            ...props,
            ...e.data,
        });
    };

    useEffect(() => {
        window.addEventListener('message', handleListeningMessages);

        return () => {
            window.removeEventListener('message', handleListeningMessages);
        };
    }, []);

    return (
        <div className={b()}>
            <div className={b('frameBackground')} />
            <div className={b('component')}>
                <DynamicComponent {...props}>Action</DynamicComponent>
            </div>
        </div>
    );
};
