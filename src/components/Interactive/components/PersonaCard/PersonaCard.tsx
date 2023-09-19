import {Flex, Persona} from '@gravity-ui/uikit';
import React from 'react';

import {InteractiveCard} from '../InteractiveCard';

export const PersonaCard = () => {
    return (
        <InteractiveCard>
            <Flex direction="column" space={2}>
                <Persona text="Work Harder" image="/static/interactive/telepuz1.png" />
                <Persona text="Make Better" image="/static/interactive/telepuz2.png" />
                <Persona text="Do Faster" image="/static/interactive/telepuz3.png" />
                <Persona text="Makes Stronger" image="/static/interactive/telepuz4.png" />
            </Flex>
        </InteractiveCard>
    );
};
