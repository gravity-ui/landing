import {
    MobileProvider,
    ToastProps,
    ToasterComponent,
    ToasterProvider,
    useToaster,
} from '@gravity-ui/uikit';
import {toaster} from '@gravity-ui/uikit/toaster-singleton';
import React, {FC} from 'react';

export interface SandboxProps {
    isMobile: boolean;
    action: string;
    theme: ToastProps['theme'] | 'undefined';
}

type Props = Omit<ToastProps, 'theme'> & SandboxProps;

const ToasterComponentAPI: FC<ToastProps> = (props) => {
    const toasterInstance = useToaster();

    React.useEffect(() => {
        if (toasterInstance.has(props.name)) {
            toasterInstance.update(props.name, props);
        } else {
            toasterInstance.add(props);
        }
    }, [props]);

    return null;
};

export const ToasterProxy: FC<Props> = ({
    name = 'demo-toast',
    isMobile,
    action,
    autoHiding,
    theme,
    ...props
}) => {
    return (
        <MobileProvider mobile={isMobile} key={String(isMobile)}>
            <ToasterProvider toaster={toaster}>
                <ToasterComponentAPI
                    {...props}
                    name={name}
                    autoHiding={autoHiding === false ? autoHiding : 5000}
                    actions={[{label: action, removeAfterClick: false, onClick() {}}]}
                    theme={theme === 'undefined' ? undefined : theme}
                />
                <ToasterComponent />
            </ToasterProvider>
        </MobileProvider>
    );
};

ToasterProxy.displayName = 'ToasterProxy';
