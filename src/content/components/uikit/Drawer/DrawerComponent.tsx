import {Button, Drawer} from '@gravity-ui/uikit';
import type {DialogFooterProps, DrawerProps} from '@gravity-ui/uikit';
import React from 'react';

const MOCK_TEXT =
    'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one';

type DialogComponentProps = Pick<
    DrawerProps,
    | 'resizable'
    | 'disableBodyScrollLock'
    | 'disableEscapeKeyDown'
    | 'disableOutsideClick'
    | 'placement'
    | 'hideVeil'
> &
    Pick<DialogFooterProps, 'showError'>;

export const DrawerComponent = ({
    resizable,
    disableEscapeKeyDown,
    disableOutsideClick,
    hideVeil,
    placement,
}: DialogComponentProps) => {
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <Button onClick={() => setOpen(true)}>Open drawer</Button>
            <Drawer
                open={open}
                onOpenChange={setOpen}
                resizable={resizable}
                disableEscapeKeyDown={disableEscapeKeyDown}
                disableOutsideClick={disableOutsideClick}
                placement={placement}
                hideVeil={hideVeil}
            >
                <div style={{padding: '20px'}}>{MOCK_TEXT}</div>
            </Drawer>
        </React.Fragment>
    );
};
