import {Checkbox, Flex} from '@gravity-ui/uikit';
import React from 'react';

import {InteractiveCard} from '../InteractiveCard';

export const CheckboxCard = () => {
    return (
        <InteractiveCard>
            <Flex direction="column" space={3}>
                <Checkbox size="l" content="Work it harder" disabled />
                <Checkbox size="l" content="Make it better" />
                <Checkbox size="l" content="Do it faster" indeterminate />
                <Checkbox size="l" content="Makes us stronger" checked />
            </Flex>
        </InteractiveCard>
    );
};
