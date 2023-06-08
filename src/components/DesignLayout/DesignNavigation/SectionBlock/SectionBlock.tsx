import {Icon} from '@gravity-ui/uikit';
import Link from 'next/link';
import React from 'react';

import arrowIcon from '../../../../assets/icons/arrow.svg';
import {block} from '../../../../utils';

import './SectionBlock.scss';

const b = block('components-layout-navigation-section-block');

export type SectionBlockProps = {
    data: any;
    isOpen: boolean;
    setIsOpen: (newValue: boolean) => void;
    sectionId: string;
    articleId?: string;
};

export const SectionBlock: React.FC<SectionBlockProps> = ({
    data,
    isOpen,
    setIsOpen,
    sectionId,
    articleId,
}) => {
    const overviewUrl = `/design/${data.id}`;

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
                {data.id === '__components' ? null : (
                    <Link key="__overview" href={overviewUrl}>
                        <a
                            className={b('component', {
                                active: sectionId === data.id && articleId === undefined,
                            })}
                        >
                            Overview
                        </a>
                    </Link>
                )}
                {data.articles.map((article: any) => {
                    const componentUrl = `${overviewUrl}/${article.id}`;

                    return (
                        <Link key={article.id} href={article.link ? article.link : componentUrl}>
                            <a
                                className={b('component', {
                                    active: sectionId === data.id && articleId === article.id,
                                })}
                            >
                                {article.title}
                            </a>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};
