import {Button} from '@gravity-ui/uikit';
import {useTranslation} from 'next-i18next';
import React from 'react';

import {Contributor, Lib, block} from '../../utils';
import {BaseContributorList} from '../BaseContributorList/BaseContributorList';

import './ContributorList.scss';

const b = block('contributor-list');
const DISPLAY_CONTRIBUTORS_COUNT = 16;

export type ContributorListProps = {
    lib: Lib;
    contributors: Contributor[];
};

export const ContributorList: React.FC<ContributorListProps> = ({lib, contributors}) => {
    const {t} = useTranslation();
    const contributorsUrl = `https://github.com/${lib.config.githubId}/contributors`;
    const displayContributors = contributors.slice(0, DISPLAY_CONTRIBUTORS_COUNT);
    const moreContributorsCount = Math.max(contributors.length - DISPLAY_CONTRIBUTORS_COUNT, 0);

    return (
        <div className={b()}>
            <BaseContributorList contributors={displayContributors} />

            {Boolean(moreContributorsCount) && (
                <Button
                    className={b('more-btn')}
                    size="l"
                    view="flat"
                    pin="circle-circle"
                    width="max"
                    href={contributorsUrl}
                    target="_blank"
                >
                    {t(`+${moreContributorsCount} contributors`)}
                </Button>
            )}
        </div>
    );
};
