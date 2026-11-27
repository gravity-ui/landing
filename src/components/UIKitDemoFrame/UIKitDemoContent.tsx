import {Direction, PortalProvider, Provider, Theme} from '@gravity-ui/uikit-v8';
import uikitStyles from '@gravity-ui/uikit-v8/styles/styles.css?uikit-demo';
import React from 'react';

type UIKitDemoContentProps = React.PropsWithChildren<{
    body: HTMLElement;
    theme: Theme;
    direction?: Direction;
    background?: string;
    fill?: boolean;
    contentRef?: React.Ref<HTMLDivElement>;
}>;

export function UIKitDemoContent({
    body,
    theme,
    direction,
    background,
    fill,
    contentRef,
    children,
}: UIKitDemoContentProps) {
    const landingColors: React.CSSProperties & {'--g-color-base-background': string} = {
        '--g-color-base-background': theme === 'dark' ? (fill ? '#160d1b' : '#251b25') : '#fff',
    };
    const portalContainer = React.useMemo(() => ({current: body}), [body]);

    return (
        <>
            <link rel="stylesheet" href={uikitStyles} />
            <Provider theme={theme} direction={direction} scoped>
                <PortalProvider container={portalContainer}>
                    <div
                        ref={contentRef}
                        style={{
                            ...landingColors,
                            display: fill ? 'flow-root' : 'flex',
                            ...(!fill && {
                                flexWrap: 'wrap',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '20px 16px',
                                boxSizing: 'border-box',
                                padding: 40,
                            }),
                            background: background ?? 'var(--g-color-base-background)',
                            color: 'var(--g-color-text-primary)',
                            ...(fill && {height: '100vh'}),
                        }}
                    >
                        {children}
                    </div>
                </PortalProvider>
            </Provider>
        </>
    );
}
