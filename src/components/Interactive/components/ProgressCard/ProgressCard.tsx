import {Flex, Progress} from '@gravity-ui/uikit';
import React from 'react';

import {InteractiveCard} from '../InteractiveCard';

export const ProgressCard = () => {
    return (
        <InteractiveCard>
            <Flex direction="column" space={6} width={220}>
                <Progress value={30} theme="warning" />
                <Progress value={60} theme="warning" />
                <Progress value={90} theme="warning" />
            </Flex>
        </InteractiveCard>
    );
};
