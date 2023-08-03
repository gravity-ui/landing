import {Theme, ThemeProvider} from '@gravity-ui/uikit';
import React from 'react';
import type {ElementType} from 'react';

import type {Component} from '../../content/components';
import {block, getLibComponents} from '../../utils';

import './SandboxComponent.scss';

const b = block('sandbox-component');

export type ComponentProps = {
    componentId: string;
    libId: string;
};

export const SandboxComponent: React.FC<ComponentProps> = ({componentId, libId}) => {
    const [componentProps, setComponentProps] = React.useState({});
    const [pageProps, setPageProps] = React.useState<{theme?: Theme}>({});

    const components = getLibComponents(libId) as Component[];

    const DynamicComponent: ElementType | undefined = components?.find(
        (component: Component) => component.id === componentId,
    )?.sandbox?.component;

    const handleListeningMessages = React.useCallback((e: MessageEvent) => {
        setPageProps({...e.data.pageProps});
        setComponentProps({...e.data.componentProps});
    }, []);

    React.useEffect(() => {
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
                    {DynamicComponent && <DynamicComponent {...componentProps} />}
                </div>
            </ThemeProvider>
        </div>
    );
};
