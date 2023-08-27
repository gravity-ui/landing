import {Button, Popup} from '@gravity-ui/uikit';
import React from 'react';

export const PopupAnchorExample = () => {
    const containerRef = React.useRef(null);
    const buttonRef = React.useRef(null);
    const [open, setOpen] = React.useState(false);

    return (
        <div ref={containerRef} style={{position: 'relative'}}>
            <Button ref={buttonRef} onClick={() => setOpen((prevOpen) => !prevOpen)}>
                Toggle Popup
            </Button>
            <Popup
                anchorRef={buttonRef}
                open={open}
                placement={['bottom']}
                container={containerRef.current ?? undefined}
                modifiers={[{name: 'preventOverflow', enabled: false}]}
            >
                <div style={{padding: 5}}>Content</div>
            </Popup>
        </div>
    );
};
PopupAnchorExample.storyName = 'PopupAnchorExample';
