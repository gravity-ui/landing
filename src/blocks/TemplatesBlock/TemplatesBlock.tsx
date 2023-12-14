import {Animatable, AnimateBlock, HTML} from '@gravity-ui/page-constructor';
import React from 'react';

import {Templates} from '../../components/Templates';
import type {Tab} from '../../components/Templates';
import {SCROLL_TO_TEMPLATES_EVENT} from '../../constants';
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
    const blockRef = React.useRef<HTMLDivElement>(null);
    React.useEffect(() => {
        const scrollTo = () => {
            blockRef.current?.scrollIntoView({behavior: 'smooth'});
        };
        window.addEventListener(SCROLL_TO_TEMPLATES_EVENT, scrollTo);
        return () => {
            window.removeEventListener(SCROLL_TO_TEMPLATES_EVENT, scrollTo);
        };
    }, []);
    return (
        <React.Fragment>
            <div className={b('background')}>
                <div className={b('circle', {large: true})}></div>
                <div className={b('circle', {medium: true})}></div>
                <div className={b('circle', {small: true})}></div>
            </div>
            <div ref={blockRef} />
            <AnimateBlock className={b()} animate={animated}>
                <h2 className={b('title')} data-section="templates">
                    <HTML>{title}</HTML>
                </h2>
                <Templates tabs={tabs} />
            </AnimateBlock>
        </React.Fragment>
    );
};

export default TemplatesBlock;
