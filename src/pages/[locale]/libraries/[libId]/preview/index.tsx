import {PageConstructorProvider, Theme} from '@gravity-ui/page-constructor';
import {GetServerSideProps} from 'next';
import Head from 'next/head';
import React from 'react';

import {LibraryPreview} from '../../../../../components/LibraryPreview/LibraryPreview';
import {getI18nProps, getLibsList} from '../../../../../utils';

const theme = Theme.Dark;

const libs = getLibsList();

export const getServerSideProps: GetServerSideProps = async (context) => {
    return {
        props: {
            id: context.params?.libId,
            ...(await getI18nProps(context, ['library', 'libraries-info'])),
        },
    };
};

export const LibraryPreviewPage = ({id}: {id: string}) => {
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

export default LibraryPreviewPage;
