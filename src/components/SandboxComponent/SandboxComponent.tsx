import {Theme, ThemeProvider} from '@gravity-ui/uikit';
import {FC, ReactNode, useEffect, useState} from 'react';
import type {ElementType} from 'react';

import {uikit} from '../../content/components';
import {block} from '../../utils';

import './SandboxComponent.scss';

const b = block('component');

export type ComponentProps = {
    text?: ReactNode;
    theme?: Theme;
    componentId: string;
};

export const SandboxComponent: FC<ComponentProps> = ({componentId, ...restProps}) => {
    const [componentProps, setComponentProps] = useState(restProps);
    const [pageProps, setPageProps] = useState(restProps);

    const DynamicComponent: ElementType | undefined = uikit.components.find(
        (component) => component.id === componentId,
    )?.sandbox?.component;

    const handleListeningMessages = (e: MessageEvent) => {
        setPageProps({...e.data.pageProps});
        setComponentProps({...e.data.componentProps});
    };

    useEffect(() => {
        window.addEventListener('message', handleListeningMessages);

        return () => {
            window.removeEventListener('message', handleListeningMessages);
        };
    }, []);

    const theme = pageProps.theme || 'dark';

    return (
        <div className={b()}>
            <ThemeProvider theme={theme} scoped rootClassName={`${b('theme-root')}`}>
                <div className={b('component', {theme})}>
                    {DynamicComponent && (
                        <DynamicComponent style={{maxWidth: '90%'}} {...componentProps}>
                            {componentProps.text || 'Text'}
                        </DynamicComponent>
                    )}
                </div>
            </ThemeProvider>
        </div>
    );
};
