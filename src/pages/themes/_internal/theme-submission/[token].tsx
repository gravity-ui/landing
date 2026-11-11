import {type GravityTheme, parseJSON} from '@gravity-ui/uikit-themer';
import type {GetServerSideProps} from 'next';
import Head from 'next/head';
import {useRouter} from 'next/router';
import React from 'react';

import {getSubmissionPreview} from '../../../../api/themes/preview-store';
import type {ThemePayload} from '../../../../components/Themes/gallery';
import {normalizeImportedTheme} from '../../../../components/Themes/lib/normalizeImportedTheme';
import {ThemeCardPreviewStage} from '../../../../components/Themes/ui/ThemeCardPreviewStage';
import {ThemeCreatorContextProvider} from '../../../../components/Themes/ui/ThemeCreatorContextProvider';

// Hidden capture page for a theme submitted from the Themer. The submit API
// stores the theme under a random one-time token and opens this page in
// headless Chromium on the same server; unknown tokens are 404.

interface ThemeSubmissionPreviewProps {
    payload: ThemePayload;
}

export const getServerSideProps: GetServerSideProps<ThemeSubmissionPreviewProps> = async ({
    params,
    res,
}) => {
    const token = typeof params?.token === 'string' ? params.token : '';
    const payload = token ? getSubmissionPreview(token) : null;
    if (!payload) {
        return {notFound: true};
    }
    res.setHeader('Cache-Control', 'no-store');
    return {props: {payload}};
};

const ThemeSubmissionPreviewPage: React.FC<ThemeSubmissionPreviewProps> = ({payload}) => {
    const router = useRouter();
    const mode: 'light' | 'dark' = router.query.mode === 'dark' ? 'dark' : 'light';

    // Like the gallery capture route, the UI samples are rendered on the client only.
    const [theme, setTheme] = React.useState<GravityTheme | null>(null);
    React.useEffect(() => {
        setTheme(normalizeImportedTheme(parseJSON(payload)));
    }, [payload]);

    if (!theme) {
        return null;
    }

    return (
        <>
            <Head>
                <meta name="robots" content="noindex" />
            </Head>
            <ThemeCreatorContextProvider initialTheme={theme}>
                <ThemeCardPreviewStage mode={mode} />
            </ThemeCreatorContextProvider>
        </>
    );
};

export default ThemeSubmissionPreviewPage;
