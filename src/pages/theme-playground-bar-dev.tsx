import type {GetServerSideProps} from 'next';
import React from 'react';

import {Layout} from '../components/Layout/Layout';
import {ThemePlaygroundBar} from '../components/Themes/ui/ThemePlaygroundBar/ThemePlaygroundBar';
import {getI18nProps} from '../utils/i18next';

// Developer-only scratch page; 404s in production unless the preview-routes
// flag is set (same gate as the card-preview capture route).
export const getServerSideProps: GetServerSideProps = async (ctx) => {
    if (process.env.NEXT_PUBLIC_ENABLE_PREVIEW_ROUTES !== '1') {
        return {notFound: true};
    }
    return {
        props: {
            ...(await getI18nProps(ctx, ['themes'])),
        },
    };
};

export const ThemePlaygroundBarDevPage = () => {
    const [activeIndex, setActiveIndex] = React.useState<number | null>(0);

    return (
        <Layout title="ThemePlaygroundBar Dev" showOnlyContent>
            <div
                style={{
                    padding: '24px',
                    background: 'var(--g-color-base-background)',
                    minHeight: '100vh',
                }}
            >
                <h1 style={{marginBottom: '24px'}}>ThemePlaygroundBar — dev preview</h1>

                <h2 style={{marginTop: '24px', marginBottom: '12px', fontSize: 16}}>
                    Active swatch index: {activeIndex ?? 'none'}
                </h2>
                <ThemePlaygroundBar
                    activePresetIndex={activeIndex}
                    onSelectPreset={(_, i) => setActiveIndex(i)}
                    onOpenGallery={() => alert('open gallery (Stage 4)')}
                />

                <h2 style={{marginTop: '32px', marginBottom: '12px', fontSize: 16}}>
                    No active (gallery theme applied)
                </h2>
                <ThemePlaygroundBar activePresetIndex={null} />
            </div>
        </Layout>
    );
};

export default ThemePlaygroundBarDevPage;
