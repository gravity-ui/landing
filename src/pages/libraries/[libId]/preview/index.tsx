import {PageConstructorProvider, Theme} from '@gravity-ui/page-constructor';
import {GetServerSideProps} from 'next';
import Head from 'next/head';
import React from 'react';

import {type LibWithMetadata, ServerApi} from '../../../../api';
import {LibraryPreview} from '../../../../components/LibraryPreview/LibraryPreview';
import {getI18nProps, isValidLibId} from '../../../../utils';

const theme = Theme.Dark;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const libId = ctx.params?.libId as string;

    if (!isValidLibId(libId)) {
        return {
            notFound: true,
        };
    }

    const [lib, i18nProps] = await Promise.all([
        ServerApi.instance.fetchLibByIdWithCache(libId),
        getI18nProps(ctx, ['library', 'libraries-info']),
    ]);

    return {
        props: {
            lib: {
                config: lib.config,
                metadata: lib.metadata,
            },
            ...i18nProps,
        },
    };
};

export const LibraryPreviewPage = ({lib}: {lib: LibWithMetadata}) => {
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
