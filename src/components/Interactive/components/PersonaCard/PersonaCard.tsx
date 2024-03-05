import {Avatar, Flex} from '@gravity-ui/uikit';
import React from 'react';

import avatar1Asset from '../../../../assets/avatar-1.png';
import avatar2Asset from '../../../../assets/avatar-2.png';
import avatar3Asset from '../../../../assets/avatar-3.png';
import {InteractiveCard} from '../InteractiveCard';

export const PersonaCard = () => {
    return (
        <InteractiveCard>
            <Flex direction="column" space={2}>
                <Avatar text="Work Harder" imgUrl={avatar1Asset.src} />
                <Avatar text="Make Better" imgUrl={avatar2Asset.src} />
                <Avatar text="Do Faster" imgUrl={avatar3Asset.src} />
                <Avatar text="Makes Stronger" imgUrl={avatar1Asset.src} />
            </Flex>
        </InteractiveCard>
    );
};
