import Head from 'next/head';

import {Landing} from '../components/Landing/Landing';
import {Layout} from '../components/Layout/Layout';

const Home = () => {
    return (
        <>
            <Head>
                <title>Gravity&nbsp;UI</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#160d1b" />

                <link rel="icon" href="/favicon.ico" sizes="any" />
                <link type="image/x-icon" rel="shortcut icon" href="/favicon.ico" />
                <link type="image/png" sizes="192x192" rel="icon" href="/favicon-192x192.png" />
                <link type="image/png" sizes="512x512" rel="icon" href="/favicon-512x512.png" />

                <link rel="apple-touch-icon" href="/favicon-192x192.png" />

                <meta
                    name="description"
                    content="Build modern interfaces with the Gravity design system and libraries "
                />

                <link data-react-helmet="true" rel="canonical" href="https://gravity-ui.com/" />

                <meta itemProp="name" content="Gravity&nbsp;UI" />
                <meta
                    itemProp="description"
                    content="Build modern interfaces with the Gravity design system and libraries"
                />
                <meta itemProp="image" content="https://gravity-ui.com/index-social.png" />

                <meta property="og:title" content="Gravity&nbsp;UI" />
                <meta
                    property="og:description"
                    content="Build modern interfaces with the Gravity design system and libraries"
                />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Gravity&nbsp;UI" />
                <meta property="og:url" content="https://gravity-ui.com/" />
                <meta property="og:image" content="https://gravity-ui.com/index-social.png" />
                <meta property="og:locale" content="en" />

                <meta name="twitter:title" content="Gravity&nbsp;UI" />
                <meta
                    name="twitter:description"
                    content="Build modern interfaces with the Gravity design system and libraries"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:image" content="https://gravity-ui.com/index-social.png" />

                <meta property="share:title" content="Gravity&nbsp;UI" />
                <meta property="share:sharing_schema" content="default" />
                <link rel="manifest" href="/manifest.json" />
            </Head>

            <Layout>
                <Landing />
            </Layout>
        </>
    );
};

export default Home;
