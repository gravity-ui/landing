import {
    MobileProvider,
    ToastProps,
    ToasterComponent,
    ToasterProvider,
    useToaster,
} from '@gravity-ui/uikit';
import {FC, useEffect} from 'react';

export interface SandboxProps {
    isMobile: boolean;
    action: string;
    theme: ToastProps['theme'] | 'undefined';
}

type Props = Omit<ToastProps, 'theme'> & SandboxProps;

const ToasterComponentAPI: FC<ToastProps> = (props) => {
    const toaster = useToaster();

    useEffect(() => {
        if (toaster.has(props.name)) {
            toaster.update(props.name, props);
        } else {
            toaster.add(props);
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
            <ToasterProvider>
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
