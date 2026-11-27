import React from 'react';

type UIKitReadmeIframeProps = {
    code: string;
    theme: 'dark' | 'light';
    onError: (error: string | null) => void;
};

export function UIKitReadmeIframe({code, theme, onError}: UIKitReadmeIframeProps) {
    const frame = React.useRef<HTMLIFrameElement>(null);
    const [height, setHeight] = React.useState(120);

    const sendExample = React.useCallback(() => {
        frame.current?.contentWindow?.postMessage(
            {type: 'uikit-readme-example', code, theme},
            window.location.origin,
        );
    }, [code, theme]);

    React.useEffect(sendExample, [sendExample]);
    React.useEffect(() => {
        const receive = ({source, origin, data}: MessageEvent) => {
            if (source !== frame.current?.contentWindow || origin !== window.location.origin) {
                return;
            }
            if (data?.type === 'uikit-readme-ready') {
                sendExample();
            }
            if (data?.type === 'uikit-readme-size' && Number.isFinite(data.height)) {
                setHeight(data.height);
            }
            if (data?.type === 'uikit-readme-error') {
                onError(typeof data.error === 'string' ? data.error : null);
            }
        };

        window.addEventListener('message', receive);
        return () => window.removeEventListener('message', receive);
    }, [onError, sendExample]);

    return (
        <iframe
            ref={frame}
            src="/sandbox/uikit/readme"
            title="UIKit sandbox"
            onLoad={sendExample}
            style={{display: 'block', width: '100%', height, border: 0}}
        />
    );
}
