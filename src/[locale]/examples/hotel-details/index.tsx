import React from 'react';
import {HotelDetails} from 'src/components/Examples/pages/HotelDetails/HotelDetails';

import {useLocaleRedirect} from '../../../hooks/useLocaleRedirect';

export const HotelDetailsPage = () => {
    useLocaleRedirect();
    return <HotelDetails />;
};

export default HotelDetailsPage;
