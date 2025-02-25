import {Popup} from '@gravity-ui/uikit';
import React from 'react';

import {InteractiveCard} from '../InteractiveCard';

export const PopupCard = () => {
    const [anchorElement, setAnchorElement] = React.useState<HTMLDivElement | null>(null);

    return (
        <InteractiveCard>
            <div ref={setAnchorElement} style={{width: 220, marginTop: 80}} />
            <Popup
                placement="top"
                open={true}
                hasArrow={true}
                anchorElement={anchorElement}
                disablePortal
            >
                <div style={{padding: 16, maxWidth: 196}}>
                    Work it harder, make it better Do it faster, makes us stronger
                </div>
            </Popup>
        </InteractiveCard>
    );
};
