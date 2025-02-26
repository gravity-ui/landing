import {Popup, PopupPlacement} from '@gravity-ui/uikit';
import React from 'react';

type PopupComponentProps = {
    open?: boolean;
    placement?: PopupPlacement;
    hasArrow?: boolean;
};

export const PopupComponent = ({open, placement, hasArrow}: PopupComponentProps) => {
    const [anchorElement, setAnchorElement] = React.useState<HTMLDivElement | null>(null);

    return (
        <React.Fragment>
            <div
                ref={setAnchorElement}
                style={{
                    width: 100,
                    height: 100,
                    border: '2px dashed',
                    color: 'var(--g-color-text-secondary)',
                }}
            />
            <Popup
                anchorElement={anchorElement}
                open={open}
                placement={placement}
                hasArrow={hasArrow}
            >
                <div style={{padding: 5}}>Content</div>
            </Popup>
        </React.Fragment>
    );
};
