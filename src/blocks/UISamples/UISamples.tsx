import {Animatable, AnimateBlock, HTML} from '@gravity-ui/page-constructor';
import dynamic from 'next/dynamic';
import React from 'react';
import {useIsMobile} from 'src/hooks/useIsMobile';
import {block} from 'src/utils';

import {CustomBlock} from '../constants';

import './UISamples.scss';

const b = block('roadmap-block');

const UISamplesDesktop = dynamic(
    import('./components/UISamplesDesktop/UISamplesDesktop').then((mod) => mod.UISamplesDesktop),
    {
        ssr: false,
    },
);
const UISamplesMobile = dynamic(
    import('./components/UISamplesMobile/UISamplesMobile').then((mod) => mod.UISamplesMobile),
    {
        ssr: false,
    },
);

export type UISamplesProps = Animatable & {
    title: string;
};

export type UISamplesModel = UISamplesProps & {
    type: CustomBlock.UISamples;
};

export const UISamplesBlock: React.FC<UISamplesProps> = ({animated, title}) => {
    const isMobile = useIsMobile();
    const samples = isMobile ? <UISamplesMobile /> : <UISamplesDesktop />;

    return (
        <AnimateBlock className={b()} animate={animated}>
            <h2 className={b('title')} data-section="ui-samples">
                <HTML>{title}</HTML>
            </h2>
            {samples}
        </AnimateBlock>
    );
};
