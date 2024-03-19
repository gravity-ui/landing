import {
    Table,
    TableAction,
    TableColumnConfig,
    TableProps,
    WithTableActionsProps,
    withTableActions,
    withTableCopy,
    withTableSelection,
    withTableSorting,
} from '@gravity-ui/uikit';
import React from 'react';

export interface DataItem {
    name: string;
    city?: string;
    phone: string;
    count: number;
    date: string;
    disabled?: boolean;
}

const TABLE_COLUMNS: TableColumnConfig<DataItem>[] = [
    {
        id: 'name',
        name: 'Name',
    },
    {
        id: 'city',
        name: 'City',
    },
    {
        id: 'phone',
        name: 'Phone',
    },
    {
        id: 'count',
        name: 'Count',
        align: 'right',
        meta: {
            sort: true,
        },
    },
    {
        id: 'date',
        name: 'Date created',
    },
];

export const TABLE_ITEMS: DataItem[] = [
    {
        name: 'Nomlanga Compton',
        city: 'Erli',
        phone: '+7 (923) 737-89-72',
        count: 82,
        date: '2019-03-15',
    },
    {
        name: 'Paul Hatfield',
        city: 'Campitello di Fassa',
        phone: '+7 (900) 333-82-02',
        count: 51,
        date: '2019-11-23',
    },
    {
        name: 'Phelan Daniel',
        city: 'Meugliano',
        phone: '+7 (925) 549-50-23',
        count: 10,
        date: '2019-05-14',
    },
    {
        name: 'Hiram Mayer',
        city: '',
        phone: '+7 (950) 372-56-84',
        count: 54,
        date: '2019-03-29',
    },
    {
        name: 'Madeline Puckett',
        phone: '+7 (908) 582-05-91',
        count: 75,
        date: '2019-02-01',
        disabled: true,
    },
];

const getRowActions = (): TableAction<DataItem>[] => {
    return [
        {
            text: 'Print',
            handler: () => {},
        },
        {
            text: 'Remove',
            handler: () => {},
            theme: 'danger',
        },
    ];
};

const CustomTable = withTableActions(
    withTableCopy(withTableSorting(withTableSelection<DataItem>(Table))),
);

export const TableComponent = ({
    verticalAlign,
    edgePadding,
    rowActionsSize,
}: TableProps<DataItem> & WithTableActionsProps<DataItem>) => {
    const [selectedIds, setSelectedIds] = React.useState<string[]>([]);

    return (
        <CustomTable
            getRowActions={getRowActions}
            onSelectionChange={setSelectedIds}
            selectedIds={selectedIds}
            columns={TABLE_COLUMNS}
            data={TABLE_ITEMS}
            verticalAlign={verticalAlign}
            edgePadding={edgePadding}
            rowActionsSize={rowActionsSize}
        />
    );
};
