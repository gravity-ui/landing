import {Copy, Pencil, Plus, TrashBin} from '@gravity-ui/icons';
import {
    Button,
    Flex,
    Icon,
    Label,
    LabelProps,
    Pagination,
    PaginationProps,
    Select,
    Table,
    TableAction,
    TableColumnConfig,
    TableDataItem,
    Text,
    TextInput,
    User,
    withTableActions,
    withTableSelection,
    withTableSorting,
} from '@gravity-ui/uikit';
import React from 'react';

import avatar1Asset from '../../../../../assets/avatar-1.png';
import {block} from '../../../../../utils';
import {labels, projects, tableData} from '../constants';

import './TablePreview.scss';

type TableData = {
    user: string;
    project: string;
    status: {
        theme: LabelProps['theme'];
        title: string;
    };
    updated: string;
};

const tableColumns: TableColumnConfig<TableData>[] = [
    {
        id: 'user',
        name: 'User',
        template: ({user}) => {
            return <User avatar={{imgUrl: avatar1Asset.src, alt: user}} name={user} />;
        },
        meta: {
            sort: true,
        },
    },
    {
        id: 'project',
        name: 'Project',
        width: '100%',
        meta: {
            sort: true,
        },
    },
    {
        id: 'status',
        name: 'Status',
        template: ({status}) => {
            return <Label theme={status.theme}>{status.title}</Label>;
        },
    },
    {
        id: 'updated',
        name: 'Updated',
    },
];

const getRowActions = (): TableAction<Record<string, any>>[] => {
    return [
        {
            text: 'Edit',
            theme: 'normal',
            icon: <Pencil />,
            handler: () => {},
        },
        {
            text: 'Copy',
            handler: () => {},
            theme: 'normal',
            icon: <Copy />,
        },
        {
            text: 'Remove',
            handler: () => {},
            icon: <TrashBin />,
            theme: 'danger',
        },
    ];
};

const b = block('table-preview');

const SelectionTable = withTableSelection(withTableSorting(withTableActions(Table)));

export const TablePreview = ({justify}: {justify: string}) => {
    const [tableSelectedIds, setTableSelectedIds] = React.useState(['1']);
    const [state, setState] = React.useState({page: 1, pageSize: 10, total: 1000});

    const handleUpdate: PaginationProps['onUpdate'] = (page, pageSize) => {
        setState((prevState) => ({...prevState, page, pageSize}));
    };

    return (
        <Flex direction="column" alignItems={justify} gap={4} className={b('wrapper')}>
            <Text variant="header-1">Table</Text>
            <Flex justifyContent="space-between" width="100%" wrap="wrap" gap={2}>
                <Flex gap={2} wrap="wrap">
                    <TextInput placeholder="Search" style={{width: 'fit-content'}} />
                    <Select
                        placeholder="Choose from the list"
                        options={projects.map((pr) => ({
                            value: pr,
                            content: pr,
                        }))}
                        disablePortal={true}
                    />
                    <Select
                        placeholder="Choose from the list"
                        options={labels.map((label) => ({
                            value: label.title,
                            content: label.title,
                        }))}
                        disablePortal={true}
                    />
                </Flex>
                <Button size="m" view="action">
                    <Icon data={Plus} />
                    <Text variant="body-1">Add new user</Text>
                </Button>
            </Flex>
            <div className={b('table-wrapper')}>
                <SelectionTable
                    className={b()}
                    columns={tableColumns as TableColumnConfig<TableDataItem>[]}
                    data={tableData}
                    selectedIds={tableSelectedIds}
                    getRowActions={getRowActions}
                    onSelectionChange={setTableSelectedIds}
                />
            </div>
            <Pagination {...state} compact={false} onUpdate={handleUpdate} />
        </Flex>
    );
};
