import {Theme, ThemeProvider} from '@gravity-ui/uikit';
import {FC, ReactNode, useEffect, useState} from 'react';

import {block} from '../../utils';

import './SandboxComponent.scss';
import componenDict from './imports';

const b = block('component');

export type ComponentProps = {
    libId: string;
    componentId: unknown;
    text?: ReactNode;
    globalTheme?: Theme;
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

    const theme = props.globalTheme || 'dark';

    return (
        <div className={b()}>
            <ThemeProvider theme={theme} scoped rootClassName={`${b('theme-root')}`}>
                <div className={b('component', {theme})}>
                    <DynamicComponent style={{maxWidth: '90%'}} {...props}>
                        {props.text || 'Text'}
                    </DynamicComponent>
                </div>
            </ThemeProvider>
        </div>
    );
};
