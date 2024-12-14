import React from 'react';
import {MarkdownEditor} from 'src/components/Examples/pages/MarkdownEditor/MarkdownEditor';

import {useLocaleRedirect} from '../../../hooks/useLocaleRedirect';

export const MarkdownEditorPage = () => {
    useLocaleRedirect();

    return <MarkdownEditor />;
};

export default MarkdownEditorPage;
