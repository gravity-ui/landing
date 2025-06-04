import {GetServerSideProps} from 'next';
import {useTranslation} from 'next-i18next';
import dynamic from 'next/dynamic';
import React from 'react';

import {Layout} from '../../../../components/Layout/Layout';
import {getI18nProps} from '../../../../utils';

const MarkdownEditor = dynamic(
    () =>
        import('../../../../components/MarkdownEditor/MarkdownEditor').then(
            (mod) => mod.MarkdownEditor,
        ),
    {
        ssr: false,
    },
);
const GraphPlayround = dynamic(
    () =>
        import('../../../../components/GraphPlayground/GraphPlayground').then(
            (mod) => mod.GraphPlayround,
        ),
    {
        ssr: false,
    },
);

export const getServerSideProps: GetServerSideProps = async (context) => {
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
