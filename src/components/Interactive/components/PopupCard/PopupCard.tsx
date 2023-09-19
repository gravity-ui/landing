import {Popup} from '@gravity-ui/uikit';
import React from 'react';

import {InteractiveCard} from '../InteractiveCard';

export const PopupCard = () => {
    const anchorRef = React.useRef<HTMLDivElement>(null);
    const [open, setOpen] = React.useState(true);

    const handleFlip = React.useCallback(() => {
        setOpen(false);

        setTimeout(() => {
            setOpen(true);
        }, 600);
    }, []);

    // TODO: light theme dont apply
    return (
        <InteractiveCard onFlip={handleFlip}>
            <div ref={anchorRef} style={{width: 200, marginTop: 80}} />
            <Popup placement="top" open={open} hasArrow={true} anchorRef={anchorRef}>
                <div style={{padding: 16, width: 220}}>
                    Work it harder, make it better Do it faster, makes us stronger
                </div>
            </Popup>
        </InteractiveCard>
    );
};
