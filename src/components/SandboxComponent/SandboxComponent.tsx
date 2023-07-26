import {Theme, ThemeProvider} from '@gravity-ui/uikit';
import dynamic from 'next/dynamic';
import {ElementType, FC, ReactNode, useEffect, useState} from 'react';

import {block} from '../../utils';

import './SandboxComponent.scss';

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
    text?: ReactNode;
    theme?: Theme;
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

    const theme = props.theme || 'dark';

    console.log('theme: ', theme);

    return (
        <div className={b()}>
            <ThemeProvider theme={theme} scoped rootClassName={`${b('theme-root')}`}>
                <div className={b('component', {theme})}>
                    <DynamicComponent {...props}>{props.text || 'Action'}</DynamicComponent>
                </div>
            </ThemeProvider>
        </div>
    );
};
