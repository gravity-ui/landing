import {Col, Grid, Row} from '@gravity-ui/page-constructor';
import * as UIKit from '@gravity-ui/uikit';
import {EvaluateOptions, evaluate} from '@mdx-js/mdx';
import * as provider from '@mdx-js/react';
import type {MDXComponents, MDXContent} from 'mdx/types';
import React, {memo} from 'react';
import * as runtime from 'react/jsx-runtime';
import remarkGfm from 'remark-gfm';

import {ExampleBlock} from './ExampleBlock/ExampleBlock';
import {SandboxBlock} from '../SandboxBlock';
import {getCustomImg} from './utils';

const componentsAvailableInMDX: MDXComponents = {
    Grid,
    Row,
    Col,
    ExampleBlock,
    SandboxBlock,
    UIKit: UIKit as unknown as Record<string, MDXComponents>,
};

type Props = {
    text: string;
    withComponents?: boolean;
    absoluteImgPath?: string;
};

export const MDXRenderer = memo<Props>(({text, withComponents = false, absoluteImgPath}) => {
    const [isEvaluated, setIsEvaluated] = React.useState(false);
    const resultRef = React.useRef<MDXContent | null>(null);

    React.useEffect(() => {
        resultRef.current = null;
        setIsEvaluated(false);

        evaluate(text, {
            ...provider,
            ...runtime,
            development: false,
            remarkPlugins: [remarkGfm],
        } as unknown as EvaluateOptions)
            .then(({default: Component}) => {
                resultRef.current = Component;
                setIsEvaluated(true);
            })
            .catch((err) => {
                // eslint-disable-next-line no-console
                console.error(err);
            });
    }, [text]);

    if (!isEvaluated || !resultRef.current) {
        return null;
    }

    const CustomImg = getCustomImg({absoluteImgPath});

    const Content = resultRef.current;

    return (
        <div className="markdown-body">
            <Content
                components={{
                    img: CustomImg, // markdown
                    Img: CustomImg, // html
                    ...(withComponents ? componentsAvailableInMDX : {}),
                }}
            />
        </div>
    );
});

MDXRenderer.displayName = 'MDXRenderer';
