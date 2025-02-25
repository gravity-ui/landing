import {Button, Popup} from '@gravity-ui/uikit';
import React from 'react';

export const PopupAnchorExample = () => {
    const [anchorElement, setAnchorElement] = React.useState<HTMLButtonElement | null>(null);
    const [open, setOpen] = React.useState(false);

    return (
        <div style={{position: 'relative'}}>
            <Button ref={setAnchorElement} onClick={() => setOpen((prevOpen) => !prevOpen)}>
                Toggle Popup
            </Button>
            <Popup anchorElement={anchorElement} open={open} placement={['bottom']}>
                <div style={{padding: 5}}>Content</div>
            </Popup>
        </div>
    );
};
