import {Theme, ThemeProvider} from '@gravity-ui/uikit';
import {FC, ReactNode, useEffect, useState} from 'react';
import type {ElementType} from 'react';

import type {Component} from '../../content/components';
import {block, getLibComponents} from '../../utils';

import './SandboxComponent.scss';

const b = block('component');

export type ComponentProps = {
    text?: ReactNode;
    theme?: Theme;
    componentId: string;
    libId: string;
};

export const SandboxComponent: FC<ComponentProps> = ({componentId, libId, ...restProps}) => {
    const [componentProps, setComponentProps] = useState(restProps);
    const [pageProps, setPageProps] = useState(restProps);

    const components = getLibComponents(libId) as Component[];

    const DynamicComponent: ElementType | undefined = components?.find(
        (component: Component) => component.id === componentId,
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
