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
    type: ToastProps['type'] | 'undefined';
}

type Props = Omit<ToastProps, 'type'> & SandboxProps;

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
    type,
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
                    type={type === 'undefined' ? undefined : type}
                />
                <ToasterComponent />
            </ToasterProvider>
        </MobileProvider>
    );
};

ToasterProxy.displayName = 'ToasterProxy';
