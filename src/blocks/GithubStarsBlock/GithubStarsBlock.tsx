import {ChevronRight} from '@gravity-ui/icons';
import {Animatable, HTML} from '@gravity-ui/page-constructor';
import {Icon, Text} from '@gravity-ui/uikit';
import {useTranslation} from 'next-i18next';
import {useRouter} from 'next/router';
import React, {useEffect, useState} from 'react';
import {GITHUB_UI_KIT_URL} from 'src/constants';

import {block} from '../../utils';
import {CustomBlock} from '../constants';

import './GithubStarsBlock.scss';

const b = block('github-stars-promotion');
const LOCAL_STORAGE_KEY = 'gravity-landing-hide-stars-promotion';

type GithubStarsBlockProps = Animatable & {
    device: 'desktop' | 'mobile';
};

export type GithubStarsModel = GithubStarsBlockProps & {
    type: CustomBlock.GithubStars;
};

export const GithubStarsBlock: React.FC<GithubStarsBlockProps> = ({device}) => {
    const {t} = useTranslation();
    const {pathname} = useRouter();
    const [hide, setHide] = useState<boolean>(true);

    useEffect(() => {
        setHide(Boolean(localStorage.getItem(LOCAL_STORAGE_KEY)));
    }, []);

    const hideBlock = () => {
        localStorage.setItem(LOCAL_STORAGE_KEY, 'true');
    };

    if (pathname !== '/') {
        return null;
    }

    return (
        <div className={b('wrapper')} data-hide={hide} data-device={device}>
            <a className={b()} href={GITHUB_UI_KIT_URL} target="_blank" onClick={hideBlock}>
                <Text color="dark-primary" variant="body-2" className={b('text')}>
                    <HTML className={b('html')}>{t('home:github_stars-text')}</HTML>
                    <Icon data={ChevronRight} size="16" />
                </Text>
            </a>
        </div>
    );
};

export default GithubStarsBlock;
