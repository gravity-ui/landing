import {Spin} from 'landing-uikit';
import React from 'react';

import {InteractiveCard} from '../InteractiveCard';

export const SpinnerCard = () => {
    return (
        <InteractiveCard>
            <Spin size="l" />
        </InteractiveCard>
    );
};
