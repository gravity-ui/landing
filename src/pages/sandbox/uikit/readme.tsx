import React from 'react';
import {useRunner} from 'react-live-runner';

import {uikit8Scope} from '../../../components/MDXRenderer/Sandbox/constants';
import {UIKitDemoContent} from '../../../components/UIKitDemoFrame/UIKitDemoContent';

type Example = {
    code: string;
    theme: 'dark' | 'light';
};

export default function UIKitReadmePreview() {
    const [example, setExample] = React.useState<Example>();
    const content = React.useRef<HTMLDivElement>(null);
    const hasExample = example !== undefined;
    const {element, error} = useRunner({code: example?.code ?? '', scope: uikit8Scope});

    React.useEffect(() => {
        const receive = ({source, origin, data}: MessageEvent) => {
            if (
                source === window.parent &&
                origin === window.location.origin &&
                data?.type === 'uikit-readme-example' &&
                typeof data.code === 'string' &&
                (data.theme === 'dark' || data.theme === 'light')
            ) {
                setExample({code: data.code, theme: data.theme});
            }
        };

        window.addEventListener('message', receive);
        window.parent.postMessage({type: 'uikit-readme-ready'}, window.location.origin);
        return () => window.removeEventListener('message', receive);
    }, []);

    React.useEffect(() => {
        const container = content.current;
        if (!container) {
            return undefined;
        }
        const observer = new ResizeObserver(() => {
            window.parent.postMessage(
                {type: 'uikit-readme-size', height: container.offsetHeight},
                window.location.origin,
            );
        });
        observer.observe(container);
        return () => observer.disconnect();
    }, [hasExample]);

    React.useEffect(() => {
        window.parent.postMessage({type: 'uikit-readme-error', error}, window.location.origin);
    }, [error]);

    if (!example) {
        return null;
    }

    return (
        <UIKitDemoContent body={document.body} theme={example.theme} contentRef={content}>
            {element}
        </UIKitDemoContent>
    );
}
