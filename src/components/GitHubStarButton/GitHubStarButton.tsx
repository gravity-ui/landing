import {Icon, Text} from '@gravity-ui/uikit';
import React from 'react';

import githubIcon from '../../assets/icons/github.svg';

import './GitHubStarButton.scss';

const block = (name: string) => `gravity-ui-landing-github-star-button${name ? `__${name}` : ''}`;
const b = block;

interface GitHubStarButtonProps {
    githubId: string;
    starCount: number;
}

export const GitHubStarButton: React.FC<GitHubStarButtonProps> = ({githubId, starCount}) => {
    const githubUrl = `https://github.com/${githubId}`;

    const formatStarCount = (count: number): string => {
        if (count >= 1000) {
            return `${(count / 1000).toFixed(1)}k`;
        }
        return count.toString();
    };

    return (
        <a href={githubUrl} target="_blank" rel="noopener noreferrer" className={b('')}>
            <div className={b('button')}>
                <Icon data={githubIcon} size={20} className={b('icon')} />
                <Text variant="body-1" className={b('text')}>
                    Stars
                </Text>
            </div>
            <div className={b('divider')} />
            <Text variant="body-1" className={b('count')}>
                {formatStarCount(starCount)}
            </Text>
        </a>
    );
};
