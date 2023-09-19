import {Flex, Switch} from '@gravity-ui/uikit';
import React from 'react';

import {InteractiveCard} from '../InteractiveCard';

export const SwitchCard = () => {
    return (
        <InteractiveCard>
            <Flex direction="column" space={3}>
                <Switch checked={false} />
                <Switch checked={true} />
            </Flex>
        </InteractiveCard>
    );
};
