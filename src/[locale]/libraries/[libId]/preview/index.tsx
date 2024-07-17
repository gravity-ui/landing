import {PageConstructorProvider, Theme} from '@gravity-ui/page-constructor';
import {GetStaticPaths, GetStaticPathsResult, GetStaticProps} from 'next';
import Head from 'next/head';
import React from 'react';
import {useLocaleRedirect} from 'src/hooks/useLocaleRedirect';

import {LibraryPreview} from '../../../../components/LibraryPreview/LibraryPreview';
import {getI18nPaths, getI18nProps, getLibsList} from '../../../../utils';

const theme = Theme.Dark;

const libs = getLibsList();

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getI18nPaths().reduce<GetStaticPathsResult['paths']>((acc, localeItem) => {
        acc.push(
            ...libs.map((libItem) => ({
                params: {locale: localeItem.params.locale, libId: libItem.config.id},
            })),
        );
        return acc;
    }, []);

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: {
            id: context.params?.libId,
            ...(await getI18nProps(context, ['library', 'libraries-info'])),
        },
    };
};

export const LibraryPreviewPage = ({id}: {id: string}) => {
    const lib = libs.find((item) => item.config.id === id)!;
    useLocaleRedirect();

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
