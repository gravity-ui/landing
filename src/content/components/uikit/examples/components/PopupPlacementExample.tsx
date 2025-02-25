import {Popup, PopupAnchorElement, PopupPlacement} from '@gravity-ui/uikit';
import React from 'react';

function PopupInstance({
    placement,
    anchorElement,
    children,
}: {
    placement: PopupPlacement;
    anchorElement: PopupAnchorElement | null;
    children: React.ReactNode;
}) {
    return (
        <Popup open anchorElement={anchorElement} placement={placement} disablePortal>
            <div style={{padding: 5}}>{children}</div>
        </Popup>
    );
}

export const PopupPlacementExample = () => {
    const [anchorElement, setAnchorElement] = React.useState<HTMLDivElement | null>(null);

    return (
        <div style={{position: 'relative'}}>
            <div
                ref={setAnchorElement}
                style={{
                    margin: '40px 100px',
                    width: 320,
                    height: 140,
                    border: '2px dashed',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5em',
                }}
            >
                Anchor
            </div>
            <PopupInstance anchorElement={anchorElement} placement="top-start">
                Top Start
            </PopupInstance>
            <PopupInstance anchorElement={anchorElement} placement="top">
                Top
            </PopupInstance>
            <PopupInstance anchorElement={anchorElement} placement="top-end">
                Top End
            </PopupInstance>
            <PopupInstance anchorElement={anchorElement} placement="right-start">
                Right Start
            </PopupInstance>
            <PopupInstance anchorElement={anchorElement} placement="right">
                Right
            </PopupInstance>
            <PopupInstance anchorElement={anchorElement} placement="right-end">
                Right End
            </PopupInstance>
            <PopupInstance anchorElement={anchorElement} placement="bottom-end">
                Bottom End
            </PopupInstance>
            <PopupInstance anchorElement={anchorElement} placement="bottom">
                Bottom
            </PopupInstance>
            <PopupInstance anchorElement={anchorElement} placement="bottom-start">
                Bottom Start
            </PopupInstance>
            <PopupInstance anchorElement={anchorElement} placement="left-end">
                Left End
            </PopupInstance>
            <PopupInstance anchorElement={anchorElement} placement="left">
                Left
            </PopupInstance>
            <PopupInstance anchorElement={anchorElement} placement="left-start">
                Left Start
            </PopupInstance>
        </div>
    );
};
