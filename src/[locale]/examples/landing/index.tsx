import React from 'react';
import {Landing} from 'src/components/Examples/pages/Landing/Landing';

import {useLocaleRedirect} from '../../../hooks/useLocaleRedirect';

export const LandingPage = () => {
    useLocaleRedirect();

    return <Landing />;
};

export default LandingPage;
