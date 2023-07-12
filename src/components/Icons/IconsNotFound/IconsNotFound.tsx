import {useTranslation} from 'next-i18next';
import React from 'react';

import {block} from '../../../utils';

import './IconsNotFound.scss';

const b = block('icons-not-found');

export const IconsNotFound = () => {
    const {t} = useTranslation();

    return (
        <div className={b()}>
            <div className={b('title')}>{t('icons.empty.title')}</div>
            <div className={b('subtitle')}>{t('icons.empty.subTitle')}</div>
        </div>
    );
};
