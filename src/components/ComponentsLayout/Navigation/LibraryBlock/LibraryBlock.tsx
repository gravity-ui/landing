import {Icon} from '@gravity-ui/uikit';
import Link from 'next/link';
import React from 'react';

import arrowIcon from '../../../../assets/icons/arrow.svg';
import {block} from '../../../../utils';

import './LibraryBlock.scss';

const b = block('components-layout-navigation-library-block');

export type ComponentsLayoutProps = {
    data: any;
    isOpen: boolean;
    setIsOpen: (newValue: boolean) => void;
    libId: string;
    componentId?: string;
};

export const LibraryBlock: React.FC<ComponentsLayoutProps> = ({
    data,
    isOpen,
    setIsOpen,
    libId,
    componentId,
}) => {
    const overviewUrl = `/components/${data.id}`;

    return (
        <div className={b()}>
            <div
                className={b('header')}
                onClick={() => {
                    setIsOpen(!isOpen);
                }}
            >
                <div className={b('title')}>{data.title}</div>
                <div
                    className={b('arrow', {
                        open: isOpen,
                    })}
                >
                    <Icon data={arrowIcon} width={10} height={6} />
                </div>
            </div>
            <div className={b('components', {open: isOpen})}>
                <Link key="__overview" href={overviewUrl}>
                    <a
                        className={b('component', {
                            active: libId === data.id && componentId === undefined,
                        })}
                    >
                        Overview
                    </a>
                </Link>
                {data.components.map((component: any) => {
                    const componentUrl = `${overviewUrl}/${component.id}`;

                    return (
                        <Link key={component.id} href={componentUrl}>
                            <a
                                className={b('component', {
                                    active: libId === data.id && componentId === component.id,
                                })}
                            >
                                {component.title}
                            </a>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};
