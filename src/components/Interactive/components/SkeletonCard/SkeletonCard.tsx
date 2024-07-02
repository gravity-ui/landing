import {Flex, Skeleton} from 'landing-uikit';
import React from 'react';

import {InteractiveCard} from '../InteractiveCard';

export const SkeletonCard = () => {
    return (
        <InteractiveCard>
            <Flex direction="column" space={3}>
                <Skeleton style={{height: 16, width: 150}} />
                <Skeleton style={{height: 16, width: 150}} />
                <Skeleton style={{height: 16, width: 150}} />
                <Skeleton style={{height: 16, width: 150}} />
                <Skeleton style={{height: 16, width: 66}} />
            </Flex>
        </InteractiveCard>
    );
};
