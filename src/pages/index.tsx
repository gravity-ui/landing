import {GetServerSideProps} from 'next';
import Head from 'next/head';

import type {Contributor, LibWithMetadata} from '../api';
import {Api} from '../api';
import backgroundAsset from '../assets/background.jpg';
import {Landing} from '../components/Landing/Landing';
import {Layout} from '../components/Layout/Layout';
import {getI18nProps} from '../utils/i18next';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const [contributors, libs, i18nProps] = await Promise.all([
        Api.instance.fetchAllContributorsWithCache(),
        Api.instance.fetchLandingLibs(),
        getI18nProps(ctx, ['home', 'libraries-info']),
    ]);

    return {
        props: {
            contributors,
            libs,
            ...i18nProps,
        },
    };
};

const Home = ({libs, contributors}: {libs: LibWithMetadata[]; contributors: Contributor[]}) => {
    return (
        <>
            <Head>
                {/* Preload background image for improve LCP */}
                <link rel="preload" as="image" href={backgroundAsset.src} type="image/jpeg" />
            </Head>
            <Layout isPageConstructor>
                <Landing
                    libs={libs}
                    contributors={contributors}
                    backgroundImageSrc={backgroundAsset.src}
                />
            </Layout>
        </>
    );
};

export default Home;
