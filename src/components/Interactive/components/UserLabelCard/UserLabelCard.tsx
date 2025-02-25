import {Flex, UserLabel} from '@gravity-ui/uikit';
import React from 'react';

import avatar1Asset from '../../../../assets/avatar-1.png';
import avatar2Asset from '../../../../assets/avatar-2.png';
import avatar3Asset from '../../../../assets/avatar-3.png';
import {InteractiveCard} from '../InteractiveCard';

export const UserLabelCard = () => {
    return (
        <InteractiveCard>
            <Flex direction="column" space={2}>
                <UserLabel avatar={avatar1Asset.src} text="Work Harder" />
                <UserLabel avatar={avatar2Asset.src} text="Make Better" />
                <UserLabel avatar={avatar3Asset.src} text="Do Faster" />
                <UserLabel avatar={avatar1Asset.src} text="Makes Stronger" />
            </Flex>
        </InteractiveCard>
    );
};
