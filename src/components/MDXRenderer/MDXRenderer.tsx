import {Col, Grid, Row} from '@gravity-ui/page-constructor';
import {Button, Icon, Tabs} from '@gravity-ui/uikit';
import MDX from '@mdx-js/runtime';
import React, {ImgHTMLAttributes} from 'react';
import remarkGfm from 'remark-gfm';

const componentsAvailableInMDX = {
    Grid,
    Row,
    Col,
    Button,
    Icon,
    Tabs,
};

type Props = {
    text: string;
    withComponents?: boolean;
    absoluteImgPath?: string;
};

export const MDXRenderer: React.FC<Props> = ({text, withComponents = false, absoluteImgPath}) => {
    return (
        <div className="markdown-body">
            <MDX
                remarkPlugins={[remarkGfm]}
                components={{
                    img: (props: ImgHTMLAttributes<HTMLImageElement>) => {
                        let correctedSrc = props.src;
                        if (absoluteImgPath && props.src) {
                            if (props.src.startsWith('./')) {
                                correctedSrc = props.src.replace('./', absoluteImgPath);
                            } else if (
                                !(
                                    props.src.startsWith('http://') ||
                                    props.src.startsWith('https://')
                                )
                            ) {
                                correctedSrc = `${absoluteImgPath}${props.src}`;
                            }
                        }
                        return <img {...props} src={correctedSrc} />;
                    },
                    ...(withComponents ? componentsAvailableInMDX : []),
                }}
            >
                {text}
            </MDX>
        </div>
    );
};
