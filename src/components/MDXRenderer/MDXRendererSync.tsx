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

import {componentsAvailableInMDX} from './constants';
import RemarkLinkRewriteSync from './remark-link-rewrite-sync/remark-link-rewrite-sync';
import {getCustomImg} from './utils';

type Props = {
    text: string;
    withComponents?: boolean;
    absoluteImgPath?: string;
    rewriteLinks?: (link: string) => string;
};

export const MDXRendererSync = React.memo<Props>(
    ({text, withComponents = false, absoluteImgPath, rewriteLinks}) => {
        const Content = React.useMemo<MDXContent | null>(() => {
            const preparedText = text
                .trim()
                .replace(/<!--LANDING_BLOCK(.*?)LANDING_BLOCK-->/gms, '$1')
                .replace(/<!--GITHUB_BLOCK(.*?)\/GITHUB_BLOCK-->/gms, '');

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
        }, [text, withComponents, absoluteImgPath, rewriteLinks]);

        const contentComponents = React.useMemo(() => {
            const CustomImg = getCustomImg({absoluteImgPath});
            return {
                img: CustomImg,
                Img: CustomImg,
                ...(withComponents ? componentsAvailableInMDX : {}),
            };
        }, [withComponents, absoluteImgPath]);

        React.useEffect(() => {
            Prism.highlightAll();
        }, []);

        React.useEffect(() => {
            const content = document.getElementById(CONTENT_WRAPPER_ID);
            const sectionId = window.location.hash.split('#')[1];
            const section = document.querySelector<HTMLElement>('#' + sectionId);

            if (content && section) {
                content.scrollTo({
                    top: section.offsetTop,
                    behavior: 'smooth',
                });
            }
        }, []);

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

MDXRendererSync.displayName = 'MDXRendererSync';
