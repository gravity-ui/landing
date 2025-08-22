import {HTML} from '@gravity-ui/page-constructor';
import {Icon} from '@gravity-ui/uikit';
import React from 'react';

import {LibWithMetadata} from '../../api';
import calendarIcon from '../../assets/icons/preview-calendar.svg';
import starIcon from '../../assets/icons/preview-star.svg';
import versionIcon from '../../assets/icons/preview-version.svg';
import {block} from '../../utils';

import './LibraryPreview.scss';

const b = block('library-preview-layout');

type LibraryPreviewProps = {
    lib: LibWithMetadata;
};

export const LibraryPreview = ({lib}: LibraryPreviewProps) => {
    return (
        <div className={b()}>
            <div className={b('container')}>
                <a className={b('card')}>
                    <div className={b('library-header')}>
                        <h2 className={b('library-subtitle')}>GravityUI</h2>
                        <h1 className={b('library-title')}>
                            <HTML>{lib.config.title}</HTML>
                        </h1>
                    </div>

                    <div className={b('meta')}>
                        {lib.config.npmId && lib.metadata.version ? (
                            <div className={b('info')}>
                                {lib.metadata.stars ? (
                                    <div className={b('info-block')}>
                                        <Icon data={starIcon} size={52} fill="#ffffff" />
                                        <div className={b('info-block-meta')}>
                                            <div className={b('info-block-title')}>
                                                {lib.metadata.stars}
                                            </div>
                                            <div className={b('info-block-subtitle')}>Stars</div>
                                        </div>
                                    </div>
                                ) : null}
                                {lib.metadata.version ? (
                                    <div className={b('info-block')}>
                                        <Icon data={versionIcon} size={52} fill="#ffffff" />
                                        <div className={b('info-block-meta')}>
                                            <div className={b('info-block-title')}>
                                                {lib.metadata.version}
                                            </div>
                                            <div className={b('info-block-subtitle')}>Version</div>
                                        </div>
                                    </div>
                                ) : null}
                                {lib.metadata.lastUpdate ? (
                                    <div className={b('info-block')}>
                                        <Icon data={calendarIcon} size={52} fill="#ffffff" />
                                        <div className={b('info-block-meta')}>
                                            <div className={b('info-block-title')}>
                                                {lib.metadata.lastUpdate}
                                            </div>
                                            <div className={b('info-block-subtitle')}>
                                                Last update
                                            </div>
                                        </div>
                                    </div>
                                ) : null}
                            </div>
                        ) : null}
                    </div>
                    <div className={b('logo')} />
                </a>
            </div>
        </div>
    );
};
