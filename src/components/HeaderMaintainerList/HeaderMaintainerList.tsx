import {Avatar, Link} from '@gravity-ui/uikit';
import {useTranslation} from 'next-i18next';

import {Contributor} from '../../services/lib';
import {block} from '../../utils';

import './HeaderMaintainerList.scss';

const b = block('header-maintainer-list');
const MAX_MAINTAINERS = 3;

type HeaderMaintainerListProps = {
    maintainers: Contributor[];
};

export const HeaderMaintainerList: React.FC<HeaderMaintainerListProps> = ({maintainers}) => {
    const {t} = useTranslation();
    const limitedMaintainers = maintainers.slice(0, MAX_MAINTAINERS);

    return (
        <div className={b()}>
            <span className={b('title')}>
                {t('component:maintainers', {count: limitedMaintainers.length})}
            </span>
            {limitedMaintainers.map(({login, avatarUrl, url}) => (
                <Link
                    className={b('maintainer')}
                    key={login}
                    href={url}
                    target="_blank"
                    title={`@${login}`}
                >
                    <Avatar className={b('avatar')} size="m" imgUrl={avatarUrl} />
                    {limitedMaintainers.length === 1 && (
                        <div className={b('name')}>{limitedMaintainers[0].login}</div>
                    )}
                </Link>
            ))}
        </div>
    );
};
