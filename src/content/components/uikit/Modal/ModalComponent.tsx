import {Button, Link, Modal} from '@gravity-ui/uikit';
import React from 'react';

type ModalComponentProps = {
    autoFocus?: boolean;
    focusTrap?: boolean;
    disableBodyScrollLock?: boolean;
};

export const ModalComponent = ({
    disableBodyScrollLock,
    autoFocus,
    focusTrap,
}: ModalComponentProps) => {
    const [open, setOpen] = React.useState(false);
    const handleClose = React.useCallback(() => {
        setOpen(false);
    }, []);

    return (
        <React.Fragment>
            <Button onClick={() => setOpen(true)}>Open Modal</Button>
            <Modal
                open={open}
                onClose={handleClose}
                autoFocus={autoFocus}
                focusTrap={focusTrap}
                disableBodyScrollLock={disableBodyScrollLock}
            >
                <div style={{padding: '20px 30px'}}>
                    Content with <Link href="#">Link</Link> and <Button>Button</Button>
                </div>
            </Modal>
            <div style={{position: 'absolute', top: 0, left: 0, height: '120vh', width: 1}}></div>
        </React.Fragment>
    );
};
