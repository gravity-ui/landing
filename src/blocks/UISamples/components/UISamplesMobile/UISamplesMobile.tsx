import {Flex} from '@gravity-ui/uikit';
import React from 'react';
import {block} from 'src/utils';

import dashboardImage from '../../../../assets/ui-samples/card-dashboard.jpg';
import hotelBookingImage from '../../../../assets/ui-samples/card-hotel-booking.jpg';
import kubernetesImage from '../../../../assets/ui-samples/card-kubernetes.jpg';
import listingImage from '../../../../assets/ui-samples/card-listing.jpg';
import mailImage from '../../../../assets/ui-samples/card-mail.jpg';
import osnImage from '../../../../assets/ui-samples/card-osn.jpg';
import taskTrackerImage from '../../../../assets/ui-samples/card-task-tracker.jpg';

import './UISamplesMobile.scss';

const b = block('ui-samples-mobile');

type UISampleCardProps = {
    imageSrc: string;
};

const UISampleCard: React.FC<UISampleCardProps> = ({imageSrc}) => {
    return <img className={b('card')} src={imageSrc} />;
};

const CARDS = [
    {
        type: 'dashboard',
        src: dashboardImage.src,
    },
    {
        type: 'hotel-booking',
        src: hotelBookingImage.src,
    },
    {
        type: 'listing',
        src: listingImage.src,
    },
    {
        type: 'task-tracker',
        src: taskTrackerImage.src,
    },
    {
        type: 'kubernetes',
        src: kubernetesImage.src,
    },
    {
        type: 'osn',
        src: osnImage.src,
    },
    {
        type: 'mail',
        src: mailImage.src,
    },
];

export const UISamplesMobile: React.FC = () => {
    return (
        <Flex direction="column" gap={4}>
            {CARDS.map(({type, src}) => (
                <UISampleCard key={type} imageSrc={src} />
            ))}
        </Flex>
    );
};
