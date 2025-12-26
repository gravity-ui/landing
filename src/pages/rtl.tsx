import {GetServerSideProps} from 'next';
import {useTranslation} from 'next-i18next';
import Head from 'next/head';
import React from 'react';

import nextI18nextConfig from '../../next-i18next.config';
import {LibWithMetadata, ServerApi} from '../api';
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

export const RTLPage = ({libs}: {libs: LibWithMetadata[]}) => {
    const {i18n} = useTranslation();
    i18n.changeLanguage(nextI18nextConfig.i18n.defaultLocale);

    return (
        <>
            <Head>
                {/* Preload background image for improve LCP */}
                <link rel="preload" as="image" href={backgroundAsset.src} type="image/jpeg" />
            </Head>
            <Layout isPageConstructor isRtl hideLocalePicker>
                <Landing libs={libs} backgroundImageSrc={backgroundAsset.src} />
            </Layout>
        </>
    );
};

export default RTLPage;
