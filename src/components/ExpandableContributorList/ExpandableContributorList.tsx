import {Button} from '@gravity-ui/uikit';
import {useTranslation} from 'next-i18next';
import React, {useState} from 'react';

import {Contributor, block} from '../../utils';
import {BaseContributorList} from '../BaseContributorList/BaseContributorList';

import './ExpandableContributorList.scss';

const b = block('expandable-contributor-list');
const AVATAR_HEIGHT = 44;
const EXPANDABLE_ROW_GAP = 12;
const EXPANDABLE_THRESHOLD = 250;
const EXPANDABLE_MIN_ROWS = 4;
const EXPANDABLE_MIN_HEIGHT =
    EXPANDABLE_MIN_ROWS * AVATAR_HEIGHT + (EXPANDABLE_MIN_ROWS - 1) * EXPANDABLE_ROW_GAP;

export type ExpandableContributorListProps = {
    contributors: Contributor[];
};

export const ExpandableContributorList: React.FC<ExpandableContributorListProps> = ({
    contributors,
}) => {
    const {t} = useTranslation();
    const [isExpanded, setIsExpanded] = useState(false);
    const isExpandable = contributors.length >= EXPANDABLE_THRESHOLD;

    const handleShowMoreClick = () => setIsExpanded(!isExpanded);

    return (
        <div
            className={b({
                notExpandable: !isExpandable,
                expanded: isExpanded,
            })}
        >
            <BaseContributorList
                style={{minHeight: isExpandable ? EXPANDABLE_MIN_HEIGHT : 'auto'}}
                contributors={contributors}
                footer={
                    isExpandable && <div className={b('inset-shadow', {expanded: isExpanded})} />
                }
            />

            {isExpandable && (
                <Button size="xl" width="max" onClick={handleShowMoreClick}>
                    {t(isExpanded ? 'common:show_less' : 'common:show_more')}
                </Button>
            )}
        </div>
    );
};
