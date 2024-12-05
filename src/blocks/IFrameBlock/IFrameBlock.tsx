import {Animatable, AnimateBlock} from '@gravity-ui/page-constructor';
import React from 'react';

import {block} from '../../utils';
import {CustomBlock} from '../constants';

import './IFrameBlock.scss';

const b = block('iframe-block');

export type IframeProps = Animatable & {
    src: string;
    width: number;
    height: number;
    allow?: string;
    frameBorder?: number;
    scrolling?: string;
};

export type IframeModel = IframeProps & {
    type: CustomBlock.Iframe;
};

export const IFrameBlock: React.FC<IframeProps> = ({
    animated,
    src,
    width,
    height,
    allow,
    frameBorder = 0,
    scrolling = 'no',
}) => {
    return (
        <AnimateBlock className={b()} animate={animated}>
            <div className={b('wrapper')} style={{paddingBottom: `${(height * 100) / width}%`}}>
                <iframe
                    className={b('iframe')}
                    src={src}
                    allow={allow}
                    frameBorder={frameBorder}
                    scrolling={scrolling}
                ></iframe>
            </div>
        </AnimateBlock>
    );
};

export default IFrameBlock;
