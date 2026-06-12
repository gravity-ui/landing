import Head from 'next/head';
import React from 'react';

import {OklchPalette} from '../../components/OklchPalette';

export const OklchPage = () => (
    <React.Fragment>
        <Head>
            <title>OKLCH palette generator</title>
            <meta name="robots" content="noindex" />
        </Head>
        <OklchPalette />
    </React.Fragment>
);

export default OklchPage;
