import {EvaluateOptions, evaluateSync} from '@mdx-js/mdx';
import * as provider from '@mdx-js/react';
import type {MDXContent} from 'mdx/types';
import Prism from 'prismjs';
import 'prismjs/components/prism-bash.js';
import 'prismjs/components/prism-jsx.js';
import 'prismjs/components/prism-tsx.js';
import 'prismjs/components/prism-typescript.js';
import React from 'react';
import * as runtime from 'react/jsx-runtime';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

import {CONTENT_WRAPPER_ID} from '../../constants';

import {componentsAvailableInMDX, uikit8ComponentsAvailableInMDX} from './constants';
import RemarkLinkRewriteSync from './remark-plugins/remark-link-rewrite-sync';
import {prepareUIKitReadme} from './uikit-readme-examples';
import {getCustomImg} from './utils';

type Props = {
    text: string;
    withComponents?: boolean;
    uikit8?: boolean;
    absoluteImgPath?: string;
    rewriteLinks?: (link: string) => string;
};

export const MDXRenderer = React.memo<Props>(
    ({text, withComponents = false, uikit8 = false, absoluteImgPath, rewriteLinks}) => {
        const [isMounted, setIsMounted] = React.useState(false);

        React.useEffect(() => {
            setIsMounted(true);
        }, []);

        const Content = React.useMemo<MDXContent | null>(() => {
            const markdown = text
                .trim()
                .replace(/<!--GITHUB_BLOCK-->[\s\S]*?(?:<!--\/GITHUB_BLOCK-->|$)/g, '')
                .replace(/<!--SANDBOX(.*?)SANDBOX-->/gms, (_, code) => {
                    return `<Sandbox code={${JSON.stringify(code.trim())}} />`;
                })
                .replace(/<!--LANDING_BLOCK(.*?)LANDING_BLOCK-->/gms, '$1');
            const preparedText = uikit8 ? prepareUIKitReadme(markdown) : markdown;

            const remarkPlugins: EvaluateOptions['remarkPlugins'] = [remarkGfm];
            if (rewriteLinks) {
                remarkPlugins.push([RemarkLinkRewriteSync, {replacer: rewriteLinks}]);
            }

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

            try {
                const {default: ContentLocal} = evaluateSync(preparedText, {
                    ...provider,
                    ...runtime,
                    remarkPlugins,
                    rehypePlugins,
                    development: false,
                } as unknown as EvaluateOptions);
                return ContentLocal;
            } catch (err) {
                console.error(err);
            }
            return null;
        }, [text, uikit8, rewriteLinks]);

        const contentComponents = React.useMemo(() => {
            const CustomImg = getCustomImg({absoluteImgPath});
            const examples = uikit8 ? uikit8ComponentsAvailableInMDX : componentsAvailableInMDX;
            return {
                img: CustomImg,
                Img: CustomImg,
                ...(withComponents && examples),
            };
        }, [withComponents, uikit8, absoluteImgPath]);

        React.useEffect(() => {
            Prism.highlightAll();
        }, []);

        React.useEffect(() => {
            if (isMounted) {
                const content = document.getElementById(CONTENT_WRAPPER_ID);
                try {
                    const sectionId = decodeURI(window.location.hash).split('#')[1];
                    const section = document.querySelector<HTMLElement>('#' + sectionId);

                    if (content && section) {
                        content.scrollTo({
                            top: section.offsetTop,
                            behavior: 'smooth',
                        });
                    }
                } catch (err) {
                    console.error(err);
                }
            }
        }, [isMounted]);

        if (!Content) {
            return null;
        }

        return (
            <div className="markdown-body">
                <Content components={contentComponents} />
            </div>
        );
    },
);

MDXRenderer.displayName = 'MDXRenderer';
