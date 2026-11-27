import type {Direction, Theme} from '@gravity-ui/uikit-v8';
import React from 'react';
import {createPortal} from 'react-dom';

import {UIKitDemoContent} from './UIKitDemoContent';

type UIKitDemoFrameProps = React.PropsWithChildren<{
    theme: Theme;
    direction?: Direction;
    title: string;
    background?: string;
}>;

const frameDocument = '<!doctype html><html><head></head><body style="margin:0"></body></html>';

export function UIKitDemoFrame({
    theme,
    direction,
    title,
    background,
    children,
}: UIKitDemoFrameProps) {
    const [body, setBody] = React.useState<HTMLElement | null>(null);
    const [height, setHeight] = React.useState(0);
    const content = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        if (!body || !content.current) {
            return undefined;
        }

        const element = content.current;
        const observer = new ResizeObserver(() => setHeight(element.offsetHeight));
        observer.observe(element);
        return () => observer.disconnect();
    }, [body]);

    return (
        <>
            <iframe
                title={title}
                srcDoc={frameDocument}
                onLoad={(event) => setBody(event.currentTarget.contentDocument?.body ?? null)}
                style={{
                    display: 'block',
                    width: '100%',
                    height,
                    border: 0,
                }}
            />
            {body &&
                createPortal(
                    <UIKitDemoContent
                        body={body}
                        theme={theme}
                        direction={direction}
                        background={background}
                        contentRef={content}
                    >
                        {children}
                    </UIKitDemoContent>,
                    body,
                )}
        </>
    );
}
