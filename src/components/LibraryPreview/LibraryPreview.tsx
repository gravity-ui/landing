import {HTML} from '@gravity-ui/page-constructor';
import {Icon} from '@gravity-ui/uikit';
import React from 'react';

import calendarIcon from '../../assets/icons/calendar.svg';
import starIcon from '../../assets/icons/star.svg';
import versionIcon from '../../assets/icons/version.svg';
import {Lib, block} from '../../utils';

import './LibraryPreview.scss';

const b = block('library-preview-layout');

type LibraryPreviewProps = {
    lib: Lib;
};

/**
 * This components used only for og:image generation
 */
export const LibraryPreview = ({lib}: LibraryPreviewProps) => {
    return (
        <div className={b()}>
            <div className={b('container')}>
                <a className={b('card')}>
                    <div className={b('library-header')}>
                        <h5 className={b('library-title')}>
                            <HTML>{lib.config.title}</HTML>
                        </h5>
                        {lib.data.stars ? (
                            <div className={b('stars')}>
                                <Icon data={starIcon} size={19} />
                                <div className={b('stars-count')}>{lib.data.stars}</div>
                            </div>
                        ) : null}
                    </div>

                    <div className={b('description')}>{lib.config.description}</div>

                    {lib.config.npmId && lib.data.version ? (
                        <div className={b('release-info')}>
                            <div className={b('release-info-block')}>
                                <Icon data={versionIcon} size={16} />
                                <div className={b('release-version')}>v{lib.data.version}</div>
                            </div>
                            {lib.data.lastUpdate ? (
                                <div className={b('release-info-block')}>
                                    <Icon data={calendarIcon} size={16} />
                                    <div className={b('release-date')}>{lib.data.lastUpdate}</div>
                                </div>
                            ) : null}
                            <div className={b('logo')} />
                        </div>
                    ) : null}
                </a>
            </div>
        </div>
    );
};
