import * as Components from '@gravity-ui/components';
import * as DateComponents from '@gravity-ui/date-components';
import {Col, Grid, Row} from '@gravity-ui/page-constructor';
import * as UIKit from '@gravity-ui/uikit';
import {EvaluateOptions, evaluate} from '@mdx-js/mdx';
import * as provider from '@mdx-js/react';
import type {MDXComponents, MDXContent} from 'mdx/types';
import Prism from 'prismjs';
import 'prismjs/components/prism-bash.js';
import 'prismjs/components/prism-jsx.js';
import 'prismjs/components/prism-tsx.js';
import 'prismjs/components/prism-typescript.js';
import React, {memo} from 'react';
import * as runtime from 'react/jsx-runtime';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
// @ts-ignore
import remarkLinkRewrite from 'remark-link-rewrite';

import {CONTENT_WRAPPER_ID} from '../../constants';
import * as DateComponentsExamples from '../../content/components/date-components/examples/components';
import * as UIKitExamples from '../../content/components/uikit/examples/components';

import {ExampleBlock} from './ExampleBlock/ExampleBlock';
import {getCustomImg} from './utils';

const componentsAvailableInMDX: MDXComponents = {
    Grid,
    Row,
    Col,
    ExampleBlock,
    UIKitExamples,
    DateComponentsExamples,
    React: React as unknown as Record<string, MDXComponents>,
    UIKit: UIKit as unknown as Record<string, MDXComponents>,
    Components: Components as unknown as Record<string, MDXComponents>,
    DateComponents: DateComponents as unknown as Record<string, MDXComponents>,
};

type Props = {
    text: string;
    withComponents?: boolean;
    absoluteImgPath?: string;
    rewriteLinks?: (link: string) => string;
};

export const MDXRenderer = memo<Props>(
    ({text, withComponents = false, absoluteImgPath, rewriteLinks}) => {
        const [isEvaluated, setIsEvaluated] = React.useState(false);
        const resultRef = React.useRef<MDXContent | null>(null);

        const preparedText = text
            .trim()
            .replace(/<!--LANDING_BLOCK(.*?)LANDING_BLOCK-->/gms, '$1')
            .replace(/<!--GITHUB_BLOCK(.*?)\/GITHUB_BLOCK-->/gms, '');

        React.useEffect(() => {
            resultRef.current = null;
            setIsEvaluated(false);

            const remarkPlugins: EvaluateOptions['remarkPlugins'] = [remarkGfm];
            const rehypePlugins: EvaluateOptions['rehypePlugins'] = [
                rehypeSlug,
                [
                    rehypeAutolinkHeadings,
                    {
                        properties: {ariaHidden: true, tabIndex: -1, className: 'anchor-link'},
                        content: {
                            type: 'text',
                            value: '§',
                        },
                    },
                ],
            ];

            if (rewriteLinks) {
                remarkPlugins.push([remarkLinkRewrite, {replacer: rewriteLinks}]);
            }

            evaluate(preparedText, {
                ...provider,
                ...runtime,
                remarkPlugins,
                rehypePlugins,
                development: false,
            } as unknown as EvaluateOptions)
                .then(({default: Component}) => {
                    resultRef.current = Component;
                    setIsEvaluated(true);
                })
                .catch((err) => {
                    // eslint-disable-next-line no-console
                    console.error(err);
                });
        }, [preparedText, rewriteLinks]);

        React.useEffect(() => {
            if (isEvaluated) {
                Prism.highlightAll();
            }
        }, [isEvaluated]);

        React.useEffect(() => {
            if (isEvaluated) {
                const content = document.getElementById(CONTENT_WRAPPER_ID);
                const sectionId = window.location.hash.split('#')[1];
                const section = document.querySelector<HTMLElement>('#' + sectionId);

                if (content && section) {
                    content.scrollTo({
                        top: section.offsetTop,
                        behavior: 'smooth',
                    });
                }
            }
        }, [isEvaluated]);

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
    },
);

MDXRenderer.displayName = 'MDXRenderer';
