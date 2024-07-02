import {Popup} from 'landing-uikit';
import React from 'react';

import {InteractiveCard} from '../InteractiveCard';

export const PopupCard = () => {
    const anchorRef = React.useRef<HTMLDivElement>(null);

    return (
        <InteractiveCard>
            <div ref={anchorRef} style={{width: 220, marginTop: 80}} />
            <Popup
                placement="top"
                open={true}
                hasArrow={true}
                anchorRef={anchorRef}
                disablePortal
                modifiers={[{name: 'preventOverflow', enabled: false}]}
            >
                <div style={{padding: 16, maxWidth: 196}}>
                    Work it harder, make it better Do it faster, makes us stronger
                </div>
            </Popup>
        </InteractiveCard>
    );
};
