import React from 'react';
import {Email} from 'src/components/Examples/pages/Email/Email';

import {useLocaleRedirect} from '../../../hooks/useLocaleRedirect';

export const EmailPage = () => {
    useLocaleRedirect();

    return <Email />;
};

export default EmailPage;
