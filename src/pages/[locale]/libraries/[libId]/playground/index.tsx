import {GetStaticPaths, GetStaticPathsResult, GetStaticProps} from 'next';
import {useTranslation} from 'next-i18next';
import dynamic from 'next/dynamic';
import React from 'react';

import {Layout} from '../../../../../components/Layout/Layout';
import {getI18nPaths, getI18nProps, getLibsList} from '../../../../../utils';

const libs = getLibsList();

const MarkdownEditor = dynamic(
    () =>
        import('../../../../../components/MarkdownEditor/MarkdownEditor').then(
            (mod) => mod.MarkdownEditor,
        ),
    {
        ssr: false,
    },
);
const GraphPlayround = dynamic(
    () =>
        import('../../../../../components/GraphPlayground/GraphPlayground').then(
            (mod) => mod.GraphPlayround,
        ),
    {
        ssr: false,
    },
);

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
    const libId = Array.isArray(context.params?.libId)
        ? context.params?.libId[0]
        : context.params?.libId;

    return {
        props: {
            libId: libId || null,
            ...(await getI18nProps(context, ['library', 'libraries-info', libId ?? ''])),
        },
    };
};

export const availablePlaygrounds = ['markdown-editor', 'graph'];

export const PlaygroundPage = ({libId}: {libId: string}) => {
    const hasPlayground = availablePlaygrounds.includes(libId);

    const {t} = useTranslation();

    return (
        <>
            {hasPlayground && (
                <>
                    <Layout title={availablePlaygrounds.includes(libId) ? t(libId) : ''}>
                        {libId === 'markdown-editor' && <MarkdownEditor />}
                        {libId === 'graph' && <GraphPlayround />}
                    </Layout>
                </>
            )}
        </>
    );
};

export default PlaygroundPage;
