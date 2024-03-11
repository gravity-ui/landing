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
    const [isMounted, setIsMounted] = React.useState(false);

    const [componentProps, setComponentProps] = React.useState<Record<string, unknown>>({});
    const [pageProps, setPageProps] = React.useState<{theme?: Theme}>({});

    const components = getLibComponents(libId) as Component[];

    const sandboxConfig = components?.find(
        (component: Component) => component.id === componentId,
    )?.sandbox;

    const DynamicComponent = sandboxConfig?.component ?? null;

    const handleListeningMessages = React.useCallback((e: MessageEvent) => {
        if (e.data.pageProps) {
            setPageProps({...e.data.pageProps});
        }
        if (e.data.componentProps) {
            setComponentProps({...e.data.componentProps});
        }
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

    React.useEffect(() => {
        setIsMounted(true);
    }, []);

    const theme = pageProps.theme || 'dark';

    if (!DynamicComponent || !isMounted) {
        return null;
    }

    return (
        <ThemeProvider theme={theme} rootClassName={b('wrapper', null, 'sandbox')}>
            <div className={b()}>
                <div className={b('component', {theme})}>
                    {DynamicComponent && <DynamicComponent {...componentProps} />}
                </div>
            </div>
        </ThemeProvider>
    );
};
