import {Star} from '@gravity-ui/icons';
import {HTML} from '@gravity-ui/page-constructor';
import {Button, Icon, Text} from '@gravity-ui/uikit';
import {useTranslation} from 'next-i18next';
import React, {useEffect, useState} from 'react';
import {GITHUB_UI_KIT_URL} from 'src/constants';

import {block} from '../../utils';

import './GithubStarsPromotion.scss';

const b = block('github-stars-promotion');
const LOCAL_STORAGE_KEY = 'gravity-landing-hide-stars-promotion';

interface GithubStarsPromotionProps {}

export const GithubStarsPromotion: React.FC<GithubStarsPromotionProps> = () => {
    const {t} = useTranslation();
    const [hide, setHide] = useState<boolean>(true);

    useEffect(() => {
        setHide(Boolean(localStorage.getItem(LOCAL_STORAGE_KEY)));
    }, []);

    const hideBlock = () => {
        setHide(true);
        localStorage.setItem(LOCAL_STORAGE_KEY, 'true');
    };

    if (hide) {
        return null;
    }

    return (
        <div className={b('wrapper')}>
            <a className={b()} href={GITHUB_UI_KIT_URL} target="_blank" onClick={hideBlock}>
                <Text color="dark-primary" variant="body-2">
                    <HTML>{t('home:github_stars-text')}</HTML>
                </Text>

                <Button view="normal-contrast" size="m" tabIndex={-1}>
                    <Icon data={Star} size={16} />
                    <Text variant="body-1">{t('home:github_stars-button')}</Text>
                </Button>
            </a>
        </div>
    );
};
