import React from 'react';

import {MDXRenderer} from '../../components/MDXRenderer/MDXRenderer';
import {libComponents} from '../../content/components';
import {block} from '../../utils';

import './Component.scss';

const b = block('component');

export type ComponentProps = {
    libId: string;
    componentId?: string;
};

export const Component: React.FC<ComponentProps> = ({libId, componentId}) => {
    const lib = libComponents.find((item) => item.id === libId);
    const component = lib?.components.find((item) => item.id === componentId);

    if (!lib || !component) {
        return null;
    }

    return (
        <div className={b()}>
            <h1 className={b('title')}>{component.title}</h1>
            <div className={b('content')}>
                <MDXRenderer text={component.content} withComponents />
            </div>
        </div>
    );
};
