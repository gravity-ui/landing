import {ArrowDown, ArrowLeft, ArrowRight, ArrowUp} from 'landing-icons';
import {Flex, Icon, Label} from 'landing-uikit';
import React from 'react';

import {InteractiveCard} from '../InteractiveCard';

export const LabelsCard = () => {
    return (
        <InteractiveCard>
            <Flex space={2} wrap={true} width={200} alignItems="center" justifyContent="center">
                <Label size="m" theme="info" icon={<Icon data={ArrowLeft} size={12} />}>
                    Harder
                </Label>
                <Label size="m" theme="success" icon={<Icon data={ArrowUp} size={12} />}>
                    Better
                </Label>
                <Label size="m" theme="warning" icon={<Icon data={ArrowRight} size={12} />}>
                    Faster
                </Label>
                <Label size="m" theme="danger" icon={<Icon data={ArrowDown} size={12} />}>
                    Stronger
                </Label>
                <Label size="m" icon={<Icon data={ArrowLeft} size={12} />}>
                    Harder
                </Label>
                <Label size="m" theme="info" icon={<Icon data={ArrowUp} size={12} />}>
                    Better
                </Label>
                <Label size="m" theme="clear" icon={<Icon data={ArrowRight} size={12} />}>
                    Faster
                </Label>
                <Label size="m" theme="warning" icon={<Icon data={ArrowDown} size={12} />}>
                    Stronger
                </Label>
            </Flex>
        </InteractiveCard>
    );
};
