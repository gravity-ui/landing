import {GetStaticProps} from 'next';
import React from 'react';
import {Email} from 'src/components/Examples/pages/Email/Email';

import {useLocaleRedirect} from '../../../hooks/useLocaleRedirect';
import {getI18nProps} from '../../../utils';

export const EmailPage = () => {
    useLocaleRedirect();

    return <Email />;
};

export const getStaticProps: GetStaticProps = async (ctx) => {
    const result = {
        props: {
            ...(await getI18nProps(ctx, ['examples'])),
        },
    };
    return result;
};

export default EmailPage;
