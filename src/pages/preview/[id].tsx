import {PageConstructorProvider, Theme} from '@gravity-ui/page-constructor';
import {GetStaticPaths, GetStaticProps} from 'next';
import Head from 'next/head';
import React from 'react';

import {LibraryPreview} from '../../components/LibraryPreview/LibraryPreview';
import {getLibsList} from '../../utils';

const theme = Theme.Dark;

const libs = getLibsList();

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: libs.map((item) => ({params: {id: item.config.id}})),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async (context) => {
    if (process.env.CI || !process.env.IS_PRODUCTION) {
        return {
            props: {id: context.params?.id},
        };
    }

    // https://nextjs.org/docs/api-reference/data-fetching/get-static-props#notfound
    return {notFound: true};
};

/**
 * This page is used only for og:image generation
 */
export const LibraryPage = ({id}: {id: string}) => {
    const lib = libs.find((item) => item.config.id === id)!;

    return (
        <React.Fragment>
            <Head>
                <title>{lib?.config.title ?? ''} — og:image</title>
            </Head>
            <PageConstructorProvider theme={theme}>
                <LibraryPreview lib={lib} />
            </PageConstructorProvider>
        </React.Fragment>
    );
};

export default LibraryPage;
