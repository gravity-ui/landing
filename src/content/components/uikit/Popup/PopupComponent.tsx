import {Popup, PopupPlacement} from '@gravity-ui/uikit';
import React from 'react';

type PopupComponentProps = {
    open?: boolean;
    placement?: PopupPlacement;
    hasArrow?: boolean;
};

export const PopupComponent = ({open, placement, hasArrow}: PopupComponentProps) => {
    const anchorRef = React.useRef(null);

    return (
        <React.Fragment>
            <div
                ref={anchorRef}
                style={{
                    width: 100,
                    height: 100,
                    border: '2px dashed',
                    color: 'var(--g-color-text-secondary)',
                }}
            />
            <Popup anchorRef={anchorRef} open={open} placement={placement} hasArrow={hasArrow}>
                <div style={{padding: 5}}>Content</div>
            </Popup>
        </React.Fragment>
    );
};
