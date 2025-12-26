import {GetServerSideProps} from 'next';
import Head from 'next/head';

import type {LibWithMetadata} from '../api';
import {ServerApi} from '../api';
import backgroundAsset from '../assets/background.jpg';
import {Landing} from '../components/Landing/Landing';
import {Layout} from '../components/Layout/Layout';
import {getI18nProps} from '../utils/i18next';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const [libs, i18nProps] = await Promise.all([
        ServerApi.instance.fetchLandingLibs(),
        getI18nProps(ctx, ['home', 'libraries-info']),
    ]);

    return {
        props: {
            libs,
            ...i18nProps,
        },
    };
};

const Home = ({libs}: {libs: LibWithMetadata[]}) => {
    return (
        <>
            <Head>
                {/* Preload background image for improve LCP */}
                <link
                    rel="preload"
                    fetchPriority="high"
                    as="image"
                    href={backgroundAsset.src}
                    type="image/jpeg"
                />
            </Head>
            <Layout isPageConstructor>
                <Landing libs={libs} backgroundImageSrc={backgroundAsset.src} />
            </Layout>
        </>
    );
};

export default Home;
