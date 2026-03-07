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
const GraphPlayground = dynamic(
    () =>
        import('../../../../components/GraphPlayground/GraphPlayground').then(
            (mod) => mod.GraphPlayground,
        ),
    {
        ssr: false,
    },
);

const TimelinePlayground = dynamic(
    () => import('../../../../components/TimelinePlayground').then((mod) => mod.TimelinePlayground),
    {
        ssr: false,
    },
);

const AikitPlayground = dynamic(
    () => import('../../../../components/AikitPlayground').then((mod) => mod.AikitPlayground),
    {
        ssr: false,
    },
);

const ChartsPlayground = dynamic(
    () => import('../../../../components/ChartsPlayground').then((mod) => mod.ChartsPlayground),
    {
        ssr: false,
    },
);

export const availablePlaygrounds = ['markdown-editor', 'graph', 'timeline', 'aikit', 'charts'];

export const getServerSideProps: GetServerSideProps = async (context) => {
    const libId = Array.isArray(context.params?.libId)
        ? context.params?.libId[0]
        : context.params?.libId;

    if (!libId || !availablePlaygrounds.includes(libId)) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            libId: libId || null,
            ...(await getI18nProps(context, ['library', 'libraries-info', libId ?? ''])),
        },
    };
};

export const PlaygroundPage = ({libId}: {libId: string}) => {
    const {t} = useTranslation();

    return (
        <Layout title={availablePlaygrounds.includes(libId) ? t(libId) : ''}>
            {libId === 'markdown-editor' && <MarkdownEditor />}
            {libId === 'graph' && <GraphPlayground />}
            {libId === 'timeline' && <TimelinePlayground />}
            {libId === 'aikit' && <AikitPlayground />}
            {libId === 'charts' && <ChartsPlayground />}
        </Layout>
    );
};

export default PlaygroundPage;
