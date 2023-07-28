import {Theme, ThemeProvider} from '@gravity-ui/uikit';
import {FC, ReactNode, useEffect, useState} from 'react';

import {block} from '../../utils';

import './SandboxComponent.scss';
import componenDict from './imports';

const b = block('component');

export type ComponentProps = {
    componentId: unknown;
    text?: ReactNode;
    theme?: Theme;
};

export const SandboxComponent: FC<ComponentProps> = ({componentId, ...restProps}) => {
    const [componentProps, setComponentProps] = useState(restProps);
    const [pageProps, setPageProps] = useState(restProps);
    const DynamicComponent = componenDict[componentId as string];

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
                    <DynamicComponent style={{maxWidth: '90%'}} {...componentProps}>
                        {componentProps.text || 'Text'}
                    </DynamicComponent>
                </div>
            </ThemeProvider>
        </div>
    );
};
