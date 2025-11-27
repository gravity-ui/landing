import {Animatable, AnimateBlock, YFMWrapper} from '@gravity-ui/page-constructor';
import React from 'react';
import {block} from 'src/utils';

import {CustomBlock} from '../constants';

import './UISamples.scss';
import {UISamplesDesktop} from './components/UISamplesDesktop/UISamplesDesktop';
import {UISamplesMobile} from './components/UISamplesMobile/UISamplesMobile';

const b = block('ui-samples-block');

export type UISamplesProps = Animatable & {
    title: string;
};

export type UISamplesModel = UISamplesProps & {
    type: CustomBlock.UISamples;
};

export const UISamplesBlock: React.FC<UISamplesProps> = ({title}) => {
    return (
        <AnimateBlock className={b()} animate={false}>
            <h2 className={b('title')} data-section="ui-samples">
                <YFMWrapper
                    content={title}
                    modifiers={{constructor: true}}
                    contentClassName={b('title-content')}
                />
            </h2>
            <UISamplesMobile />
            <UISamplesDesktop />
        </AnimateBlock>
    );
};
