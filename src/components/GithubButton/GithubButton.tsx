import {Button, Icon} from '@gravity-ui/uikit';
import {useTranslation} from 'next-i18next';
import React from 'react';
import {GITHUB_URL} from 'src/constants';

import githubIcon from '../../assets/icons/github.svg';
import {block} from '../../utils';

import './GithubButton.scss';

const b = block('github-button');

type GithubButtonProps = {
    githubId: string;
    stars: number | string;
};

export const GithubButton: React.FC<GithubButtonProps> = ({githubId, stars}) => {
    const {t} = useTranslation();

    return (
        <Button
            className={b()}
            view="normal-contrast"
            size="l"
            href={`${GITHUB_URL}${githubId}`}
            target="_blank"
        >
            <Icon data={githubIcon} size={20} />
            <div className={b('content')}>
                <span>{t('library:stars')}</span>
                <div className={b('divider')} />
                <span className={b('count')}>{stars || '0'}</span>
            </div>
        </Button>
    );
};
