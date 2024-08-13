import {Icon} from 'landing-uikit';
import React from 'react';
import LibraryVersion from 'src/components/LibraryVersion/LibraryVersion';

import arrowIcon from '../../../assets/icons/arrow.svg';
import soonLabelIcon from '../../../assets/icons/soon-label.svg';
import {block} from '../../../utils';
import {Link} from '../../Link';
import {Section, SubSection} from '../types';

import './SectionBlock.scss';

const b = block('navigation-layout-section-block');

export type SectionBlockProps = {
    data: Section;
    isOpen: boolean;
    setIsOpen: (val: boolean) => void;
    curSectionId: string;
    curSubSectionId?: string;
    onClickOnLink: () => void;
};

export const SectionBlock: React.FC<SectionBlockProps> = ({
    data,
    isOpen,
    setIsOpen,
    curSectionId,
    curSubSectionId,
    onClickOnLink,
}) => {
    const renderUrlSection = () => {
        if (!data.url) {
            return null;
        }

        return (
            <Link
                href={data.url}
                className={b('header', {
                    active: curSectionId === data.id && !curSubSectionId,
                })}
            >
                <div className={b('title')}>{data.title}</div>
            </Link>
        );
    };

    const renderHeader = () => {
        return (
            <div
                className={b('header', {open: isOpen})}
                onClick={() => {
                    setIsOpen(!isOpen);
                }}
            >
                <div className={b('title')}>{data.title}</div>
                <div className={b('library-version')}>
                    <LibraryVersion id={data.id} />
                </div>
                <div
                    className={b('arrow', {
                        open: isOpen,
                    })}
                >
                    <Icon data={arrowIcon} width={10} height={6} />
                </div>
            </div>
        );
    };

    const renderSubSection = (subSection: SubSection) => {
        if (subSection.isComingSoon === true) {
            return (
                <div key={subSection.id}>
                    <div
                        className={b('sub-section', {
                            active: curSectionId === data.id && curSubSectionId === subSection.id,
                            disabled: subSection.isComingSoon === true,
                        })}
                    >
                        <span className={b('sub-section-text')}>{subSection.title}</span>
                        <span className={b('sub-section-icon')}>
                            <Icon data={soonLabelIcon} width={34} height={14} />
                        </span>
                    </div>
                </div>
            );
        }

        return (
            <Link
                key={subSection.id}
                href={subSection.url}
                className={b('sub-section', {
                    active: curSectionId === data.id && curSubSectionId === subSection.id,
                })}
                onClick={onClickOnLink}
            >
                <span className={b('sub-section-text')}>{subSection.title}</span>
            </Link>
        );
    };

    const renderSubSectionsContainer = () => {
        return (
            <div className={b('sub-sections', {open: isOpen})}>
                {data.url ? (
                    <Link
                        key="__overview"
                        href={data.url}
                        className={b('sub-section', {
                            active: curSectionId === data.id && curSubSectionId === undefined,
                        })}
                        onClick={onClickOnLink}
                    >
                        Overview
                    </Link>
                ) : null}
                {data.subSections?.map(renderSubSection)}
            </div>
        );
    };

    return (
        <div className={b()}>
            {data.url && !data.subSections?.length ? (
                renderUrlSection()
            ) : (
                <>
                    {renderHeader()}
                    {renderSubSectionsContainer()}
                </>
            )}
        </div>
    );
};
