import type {GetServerSideProps} from 'next';
import React from 'react';

import {Layout} from '../components/Layout/Layout';
import {allThemes, loadThemePayload} from '../components/Themes/gallery';
import {ThemeCard} from '../components/Themes/ui/ThemeCard/ThemeCard';
import {getI18nProps} from '../utils/i18next';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    return {
        props: {
            ...(await getI18nProps(ctx)),
        },
    };
};

export const ThemeCardDevPage = () => {
    const [selectedId, setSelectedId] = React.useState<string | null>(null);
    const [lastApplied, setLastApplied] = React.useState<string | null>(null);
    const [payloadInfo, setPayloadInfo] = React.useState<string>('');

    const handleApply = async (id: string) => {
        setSelectedId(id);
        const start = performance.now();
        const payload = await loadThemePayload(id);
        const dt = Math.round(performance.now() - start);
        setLastApplied(id);
        setPayloadInfo(`${Object.keys(payload).length} CSS vars loaded in ${dt}ms`);
    };

    return (
        <Layout title="ThemeCard Dev" showOnlyContent>
            <div
                style={{
                    padding: '32px',
                    background: 'var(--g-color-base-background)',
                    minHeight: '100vh',
                }}
            >
                <h1 style={{marginBottom: '8px'}}>ThemeCard — dev preview</h1>
                <p style={{marginBottom: '24px', color: 'var(--g-color-text-secondary)'}}>
                    {allThemes.length} themes ·{' '}
                    {lastApplied
                        ? `Last applied: ${lastApplied} · ${payloadInfo}`
                        : 'Click Apply Theme to lazy-load a payload.'}
                </p>
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
                        gap: '24px',
                        maxWidth: '1400px',
                    }}
                >
                    {allThemes.map((m) => (
                        <ThemeCard
                            key={m.id}
                            metadata={m}
                            selected={selectedId === m.id}
                            onApply={handleApply}
                        />
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default ThemeCardDevPage;
