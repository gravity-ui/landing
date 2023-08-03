import {Theme, ThemeProvider} from '@gravity-ui/uikit';
import React from 'react';

import type {Component} from '../../content/components';
import {block, getLibComponents} from '../../utils';

import './SandboxComponent.scss';

const b = block('sandbox-component');

export type ComponentProps = {
    componentId: string;
    libId: string;
};

export const SandboxComponent: React.FC<ComponentProps> = ({componentId, libId}) => {
    const [componentProps, setComponentProps] = React.useState<Record<string, unknown>>({});
    const [pageProps, setPageProps] = React.useState<{theme?: Theme}>({});

    const components = getLibComponents(libId) as Component[];

    const sandboxConfig = components?.find(
        (component: Component) => component.id === componentId,
    )?.sandbox;

    const DynamicComponent = sandboxConfig?.component ?? null;

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

    React.useEffect(() => {
        if (sandboxConfig) {
            const defaultProps: Record<string, unknown> = {};
            const propsKeys = Object.keys(sandboxConfig.props);
            propsKeys.forEach((propKey) => {
                if (typeof sandboxConfig.props[propKey].defaultValue !== 'undefined') {
                    defaultProps[propKey] = sandboxConfig.props[propKey].defaultValue;
                }
            });
            setComponentProps(defaultProps);
        }
    }, [sandboxConfig]);

    const theme = pageProps.theme || 'dark';

    if (!DynamicComponent) {
        return null;
    }

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
