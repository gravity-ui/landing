import {GetStaticPaths, GetStaticPathsResult, GetStaticProps} from 'next';
import {useTranslation} from 'next-i18next';
import React from 'react';
import {useLocaleRedirect} from 'src/hooks/useLocaleRedirect';

import {Layout} from '../../../../components/Layout/Layout';
import {MarkdownEditor} from '../../../../components/MarkdownEditor/MarkdownEditor';
import {getI18nPaths, getI18nProps, getLibsList} from '../../../../utils';

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

// TODO: open with article
// export const availablePlaygrounds = ['markdown-editor'];
export const availablePlaygrounds = [] as string[];

export const PlaygroundPage = ({libId}: {libId: string}) => {
    const hasPlayground = availablePlaygrounds.includes(libId);

    useLocaleRedirect();
    const {t} = useTranslation();

    return (
        <>
            {hasPlayground && (
                <>
                    <Layout title={availablePlaygrounds.includes(libId) ? t(libId) : ''}>
                        {libId === 'markdown-editor' && <MarkdownEditor />}
                    </Layout>
                </>
            )}
        </>
    );
};

export default PlaygroundPage;
