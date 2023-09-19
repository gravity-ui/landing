import {Gear, Star, StarFill} from '@gravity-ui/icons';
import {Button, Checkbox, Icon, Table, TableColumnConfig} from '@gravity-ui/uikit';
import React from 'react';

import {block} from '../../../../utils';
import {InteractiveCard} from '../InteractiveCard';

import './TableCard.scss';

const b = block('slider-item');

export const TableCard = () => {
    const AVATAR =
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1160.jpg';

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
                    <img alt={''} src={AVATAR} />
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
                    <img alt={''} src={AVATAR} />
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
            name: () => <Checkbox indeterminate={true}>{'Work it'}</Checkbox>,
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
            <Table columns={columns} data={data} />
        </InteractiveCard>
    );
};
