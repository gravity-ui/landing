import {HTML} from '@gravity-ui/page-constructor';
import {Icon} from '@gravity-ui/uikit';
import Link from 'next/link';
import React from 'react';
import {useTranslation} from 'react-i18next';

import type {Lib} from '../../../../api';
import starIcon from '../../../../assets/icons/star.svg';
import chartkitAssetMobile from '../../../../assets/libs/img-lib-chartkit-mobile.jpg';
import chartkitAsset from '../../../../assets/libs/img-lib-chartkit.jpg';
import dashkitAssetMobile from '../../../../assets/libs/img-lib-dashkit-mobile.jpg';
import dashkitAsset from '../../../../assets/libs/img-lib-dashkit.jpg';
import datecomponentsAssetMobile from '../../../../assets/libs/img-lib-datecomponents-mobile.jpg';
import datecomponentsAsset from '../../../../assets/libs/img-lib-datecomponents.jpg';
import navigationAssetMobile from '../../../../assets/libs/img-lib-navigation-mobile.jpg';
import navigationAsset from '../../../../assets/libs/img-lib-navigation.jpg';
import pageconstructorAssetMobile from '../../../../assets/libs/img-lib-pageconstructor-mobile.jpg';
import pageconstructorAsset from '../../../../assets/libs/img-lib-pageconstructor.jpg';
import uikitAssetMobile from '../../../../assets/libs/img-lib-uikit-mobile.jpg';
import uikitAsset from '../../../../assets/libs/img-lib-uikit.jpg';
import wysiwygAssetMobile from '../../../../assets/libs/img-lib-wysiwyg-mobile.jpg';
import wysiwygAsset from '../../../../assets/libs/img-lib-wysiwyg.jpg';
import {useIsMobile} from '../../../../hooks/useIsMobile';
import {block} from '../../../../utils';

import './LibraryPreview.scss';

const b = block('libraries-library-preview');

export type LibraryPreviewProps = {
    lib: Lib;
    contentStyle: Record<string, unknown>;
};

const libIdToAsset: Record<string, {src: string}> = {
    uikit: uikitAsset,
    'page-constructor': pageconstructorAsset,
    navigation: navigationAsset,
    'markdown-editor': wysiwygAsset,
    dashkit: dashkitAsset,
    chartkit: chartkitAsset,
    'date-components': datecomponentsAsset,
};

const libIdToAssetMobile: Record<string, {src: string}> = {
    uikit: uikitAssetMobile,
    'page-constructor': pageconstructorAssetMobile,
    navigation: navigationAssetMobile,
    'markdown-editor': wysiwygAssetMobile,
    dashkit: dashkitAssetMobile,
    chartkit: chartkitAssetMobile,
    'date-components': datecomponentsAssetMobile,
};

function getBackgroundImage(id: string, isMobile?: boolean) {
    const assetsMap = isMobile ? libIdToAssetMobile : libIdToAsset;
    const asset = assetsMap[id];
    if (asset) {
        return `url(${asset.src})`;
    }
    return undefined;
}

export const LibraryPreview: React.FC<LibraryPreviewProps> = ({lib, contentStyle}) => {
    const isMobile = useIsMobile();
    const {t} = useTranslation();

    const {id, title, primary} = lib.config;
    const {stars} = lib.data;

    return (
        <Link href={`/libraries/${id}`} className={b()}>
            <div
                className={b('content', {
                    primary,
                })}
                style={{
                    ...contentStyle,
                    backgroundImage: getBackgroundImage(id, isMobile),
                }}
            >
                <div className={b('description ')}>
                    <div className={b('header')}>
                        {title ? (
                            <h5 className={b('title')}>
                                <HTML>{title}</HTML>
                            </h5>
                        ) : null}
                        {stars ? (
                            <div className={b('stars')}>
                                <Icon data={starIcon} size={17} />
                                <div className={b('stars-count')}>{stars}</div>
                            </div>
                        ) : null}
                    </div>

                    <div className={b('text')}>{t(`libraries-info:description_${id}`)}</div>
                </div>
            </div>
        </Link>
    );
};
