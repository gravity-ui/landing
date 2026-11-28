import {Button, Dialog} from '@gravity-ui/uikit-v8';
import type {DialogFooterProps, DialogProps} from '@gravity-ui/uikit-v8';
import React from 'react';

type DialogComponentProps = Pick<
    DialogProps,
    'maxWidth' | 'hasCloseButton' | 'disableOutsideClick' | 'disableEscapeKeyDown' | 'children'
> &
    Pick<DialogFooterProps, 'showError'>;

export const DialogComponent = ({
    maxWidth,
    hasCloseButton,
    disableOutsideClick,
    disableEscapeKeyDown,
    children,
    showError,
}: DialogComponentProps) => {
    const [open, setOpen] = React.useState(false);

    const dialog = (
        <Dialog
            open={open}
            maxWidth={maxWidth}
            hasCloseButton={hasCloseButton}
            disableOutsideClick={disableOutsideClick}
            disableEscapeKeyDown={disableEscapeKeyDown}
            onOpenChange={setOpen}
        >
            <Dialog.Header caption="Header" />
            <Dialog.Body>
                <div
                    style={{
                        background: 'var(--g-color-base-generic)',
                        border: '1px var(--g-color-line-generic) dashed',
                        borderRadius: 5,
                        padding: 10,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minHeight: 60,
                        overflow: 'hidden',
                    }}
                >
                    {children}
                </div>
            </Dialog.Body>
            <Dialog.Footer
                onClickButtonCancel={() => setOpen(false)}
                onClickButtonApply={() => alert('onApply')}
                textButtonApply="Apply"
                textButtonCancel="Cancel"
                showError={showError}
                errorText="Error text"
            />
        </Dialog>
    );

    return (
        <React.Fragment>
            <Button onClick={() => setOpen(true)}>Open dialog</Button>
            {dialog}
        </React.Fragment>
    );
};
