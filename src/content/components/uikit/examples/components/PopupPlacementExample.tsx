import {Popup, PopupAnchorRef, PopupPlacement} from '@gravity-ui/uikit';
import React from 'react';

function PopupInstance({
    placement,
    anchorRef,
    container,
    children,
}: {
    placement: PopupPlacement;
    anchorRef: PopupAnchorRef;
    container: HTMLElement | null;
    children: React.ReactNode;
}) {
    return (
        <Popup
            open
            anchorRef={anchorRef}
            placement={placement}
            container={container ?? undefined}
            disablePortal
            modifiers={[{name: 'preventOverflow', enabled: false}]}
        >
            <div style={{padding: 5}}>{children}</div>
        </Popup>
    );
}

export const PopupPlacementExample = () => {
    const containerRef = React.useRef(null);
    const boxRef = React.useRef(null);

    return (
        <div ref={containerRef} style={{position: 'relative'}}>
            <div
                ref={boxRef}
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
            <PopupInstance
                anchorRef={boxRef}
                container={containerRef.current}
                placement="top-start"
            >
                Top Start
            </PopupInstance>
            <PopupInstance anchorRef={boxRef} container={containerRef.current} placement="top">
                Top
            </PopupInstance>
            <PopupInstance anchorRef={boxRef} container={containerRef.current} placement="top-end">
                Top End
            </PopupInstance>
            <PopupInstance
                anchorRef={boxRef}
                container={containerRef.current}
                placement="right-start"
            >
                Right Start
            </PopupInstance>
            <PopupInstance anchorRef={boxRef} container={containerRef.current} placement="right">
                Right
            </PopupInstance>
            <PopupInstance
                anchorRef={boxRef}
                container={containerRef.current}
                placement="right-end"
            >
                Right End
            </PopupInstance>
            <PopupInstance
                anchorRef={boxRef}
                container={containerRef.current}
                placement="bottom-end"
            >
                Bottom End
            </PopupInstance>
            <PopupInstance anchorRef={boxRef} container={containerRef.current} placement="bottom">
                Bottom
            </PopupInstance>
            <PopupInstance
                anchorRef={boxRef}
                container={containerRef.current}
                placement="bottom-start"
            >
                Bottom Start
            </PopupInstance>
            <PopupInstance anchorRef={boxRef} container={containerRef.current} placement="left-end">
                Left End
            </PopupInstance>
            <PopupInstance anchorRef={boxRef} container={containerRef.current} placement="left">
                Left
            </PopupInstance>
            <PopupInstance
                anchorRef={boxRef}
                container={containerRef.current}
                placement="left-start"
            >
                Left Start
            </PopupInstance>
        </div>
    );
};
PopupPlacementExample.storyName = 'PopupPlacementExample';
