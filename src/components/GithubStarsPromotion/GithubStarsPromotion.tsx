import {Star} from '@gravity-ui/icons';
import {HTML} from '@gravity-ui/page-constructor';
import {Button, Icon, Text} from '@gravity-ui/uikit';
import {useTranslation} from 'next-i18next';
import React from 'react';

import {block} from '../../utils';

import './GithubStarsPromotion.scss';

const b = block('github-stars-promotion');

interface GithubStarsPromotionProps {}

export const GithubStarsPromotion: React.FC<GithubStarsPromotionProps> = () => {
    const {t} = useTranslation();

    return (
        <div className={b('wrapper')}>
            <a className={b()} href="https://github.com/gravity-ui/uikit" target="_blank">
                <Text color="dark-primary" variant="body-2">
                    <HTML className={b('text')}>{t('home:github_stars-text')}</HTML>
                </Text>

                <Button view="normal-contrast" size="m" className={b('button')}>
                    <Icon data={Star} size={16} />
                    <Text variant="body-1">{t('home:github_stars-button')}</Text>
                </Button>
            </a>
        </div>
    );
};
