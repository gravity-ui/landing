import {Flex, Persona} from '@gravity-ui/uikit';
import React from 'react';

import avatar1Asset from '../../../../assets/avatar-1.png';
import avatar2Asset from '../../../../assets/avatar-2.png';
import avatar3Asset from '../../../../assets/avatar-3.png';
import {InteractiveCard} from '../InteractiveCard';

export const PersonaCard = () => {
    return (
        <InteractiveCard>
            <Flex direction="column" space={2}>
                <Persona text="Work Harder" image={avatar1Asset.src} />
                <Persona text="Make Better" image={avatar2Asset.src} />
                <Persona text="Do Faster" image={avatar3Asset.src} />
                <Persona text="Makes Stronger" image={avatar1Asset.src} />
            </Flex>
        </InteractiveCard>
    );
};
