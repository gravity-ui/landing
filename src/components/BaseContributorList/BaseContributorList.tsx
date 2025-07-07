import {Avatar, AvatarSize, Link} from '@gravity-ui/uikit';
import React from 'react';

import type {Contributor} from '../../api';
import {block} from '../../utils';

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
                    <Avatar
                        className={b('avatar')}
                        text={login}
                        imgUrl={avatarUrl}
                        loading="lazy"
                    />
                </Link>
            ))}

            {footer}
        </div>
    );
};
