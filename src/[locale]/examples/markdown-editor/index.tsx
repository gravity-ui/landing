import {GetStaticProps} from 'next';
import React from 'react';
import {MarkdownEditor} from 'src/components/Examples/pages/MarkdownEditor/MarkdownEditor';

import {useLocaleRedirect} from '../../../hooks/useLocaleRedirect';
import {getI18nProps} from '../../../utils';

export const MarkdownEditorPage = () => {
    useLocaleRedirect();

    return <MarkdownEditor />;
};

export const getStaticProps: GetStaticProps = async (ctx) => {
    const result = {
        props: {
            ...(await getI18nProps(ctx, ['examples'])),
        },
    };
    return result;
};

export default MarkdownEditorPage;
