import {GetStaticPaths, GetStaticProps} from 'next';
import {useTranslation} from 'next-i18next';
import React from 'react';

import {Layout} from '../../components/Layout/Layout';
import {MarkdownEditor} from '../../components/MarkdownEditor/MarkdownEditor';
import {useLocaleRedirect} from '../../hooks/useLocaleRedirect';
import {getI18nPaths, getI18nProps} from '../../utils/i18next';

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: getI18nPaths(),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
    const result = {
        props: {
            ...(await getI18nProps(ctx, ['markdown-editor'])),
        },
    };
    return result;
};

export const MarkdownEditorPage = () => {
    useLocaleRedirect();

    const {t} = useTranslation();

    return (
        <Layout title={t('markdown-editor:title')}>
            <MarkdownEditor />
        </Layout>
    );
};

export default MarkdownEditorPage;
