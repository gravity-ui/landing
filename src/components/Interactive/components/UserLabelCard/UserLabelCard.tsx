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
                <UserLabel avatar={avatar1Asset.src} children="Work Harder" />
                <UserLabel avatar={avatar2Asset.src} children="Make Better" />
                <UserLabel avatar={avatar3Asset.src} children="Do Faster" />
                <UserLabel avatar={avatar1Asset.src} children="Makes Stronger" />
            </Flex>
        </InteractiveCard>
    );
};
