import {Animatable, AnimateBlock, HTML} from '@gravity-ui/page-constructor';
import React from 'react';

import {Templates} from '../../components/Templates';
import type {Tab} from '../../components/Templates';
import {block} from '../../utils';
import {CustomBlock} from '../constants';

import './TemplatesBlock.scss';

const b = block('templates-block');

export type TemplatesProps = Animatable & {
    title: string;
    tabs: Tab[];
};

export type TemplatesModel = TemplatesProps & {
    type: CustomBlock.Templates;
};

export const TemplatesBlock: React.FC<TemplatesProps> = ({animated, title, tabs}) => {
    return (
        <AnimateBlock className={b()} animate={animated}>
            <h2 className={b('title')} data-section="templates">
                <HTML>{title}</HTML>
            </h2>
            <Templates tabs={tabs} />
        </AnimateBlock>
    );
};

export default TemplatesBlock;
