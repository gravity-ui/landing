import {Avatar, AvatarSize, Link} from 'landing-uikit';
import React from 'react';

import {Contributor, block} from '../../utils';

import './BaseContributorList.scss';

const b = block('base-contributor-list');

export type BaseContributorListProps = {
    className?: string;
    style?: React.CSSProperties;
    avatarSize?: AvatarSize;
    footer?: React.ReactNode;
    contributors: Contributor[];
};

export const BaseContributorList: React.FC<BaseContributorListProps> = ({
    className,
    style,
    footer,
    contributors,
}) => {
    return (
        <div className={`${className || ''} ${b()}`} style={style}>
            {contributors.map(({login, avatarUrl, url}) => (
                <Link
                    key={login}
                    className={b('link')}
                    href={url}
                    target="_blank"
                    title={`@${login}`}
                >
                    <Avatar className={b('avatar')} text={login} imgUrl={avatarUrl} />
                </Link>
            ))}

            {footer}
        </div>
    );
};
