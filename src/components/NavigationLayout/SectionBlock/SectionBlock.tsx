import {Icon} from '@gravity-ui/uikit';
import Link from 'next/link';
import React from 'react';

import arrowIcon from '../../../assets/icons/arrow.svg';
import {block} from '../../../utils';
import {Section} from '../types';

import './SectionBlock.scss';

const b = block('navigation-layout-section-block');

export type SectionBlockProps = {
    data: Section;
    isOpen: boolean;
    setIsOpen: (val: boolean) => void;
    curSectionId: string;
    curSubSectionId?: string;
};

export const SectionBlock: React.FC<SectionBlockProps> = ({
    data,
    isOpen,
    setIsOpen,
    curSectionId,
    curSubSectionId,
}) => {
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
            <div className={b('sub-sections', {open: isOpen})}>
                {data.url ? (
                    <Link key="__overview" href={data.url}>
                        <a
                            className={b('sub-section', {
                                active: curSectionId === data.id && curSubSectionId === undefined,
                            })}
                        >
                            Overview
                        </a>
                    </Link>
                ) : null}

                {data.subSections.map((subSection) => {
                    return (
                        <Link key={subSection.id} href={subSection.url}>
                            <a
                                className={b('sub-section', {
                                    active:
                                        curSectionId === data.id &&
                                        curSubSectionId === subSection.id,
                                })}
                            >
                                {subSection.title}
                            </a>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};
