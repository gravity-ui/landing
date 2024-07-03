import {Gear, Star, StarFill} from 'landing-icons';
import {Button, Checkbox, Icon, Table, TableColumnConfig} from 'landing-uikit';
import React from 'react';

import avatar1Asset from '../../../../assets/avatar-1.png';
import avatar2Asset from '../../../../assets/avatar-2.png';
import {block} from '../../../../utils';
import {InteractiveCard} from '../InteractiveCard';

import './TableCard.scss';

const b = block('slider-item');

export const TableCard = () => {
    interface DataItem {
        first: JSX.Element;
        second: JSX.Element;
        third: string;
        fourth: JSX.Element;
    }

    const data: DataItem[] = [
        {
            first: <Checkbox>{'Harder'}</Checkbox>,
            second: (
                <div className={b('avatar')}>
                    <img alt={''} src={avatar1Asset.src} />
                </div>
            ),
            third: 'Faster',
            fourth: (
                <Button view="flat">
                    <Icon data={StarFill} size={16} />
                </Button>
            ),
        },
        {
            first: <Checkbox checked={true}>{'Better'}</Checkbox>,
            second: (
                <div className={b('avatar')}>
                    <img alt={''} src={avatar2Asset.src} />
                </div>
            ),
            third: 'Stronger',
            fourth: (
                <Button view="flat">
                    <Icon data={Star} size={16} />
                </Button>
            ),
        },
    ];

    const columns: TableColumnConfig<DataItem>[] = [
        {
            id: 'first',
            name: () => (
                <Checkbox indeterminate={true}>
                    <b>Work it</b>
                </Checkbox>
            ),
        },
        {
            id: 'second',
            name: 'Make it',
        },
        {
            id: 'third',
            name: 'Do it',
        },
        {
            id: 'fourth',
            name: () => (
                <Button view="flat">
                    <Icon data={Gear} size={16} />
                </Button>
            ),
        },
    ];

    return (
        <InteractiveCard>
            <Table
                columns={columns}
                data={data}
                getRowDescriptor={(_item, index) =>
                    index === 1 ? {classNames: ['g-table__row_selected']} : undefined
                }
            />
        </InteractiveCard>
    );
};
