import {List, ListItemData, ListProps} from '@gravity-ui/uikit';

const LIST_ITEMS = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
] as ListItemData<unknown>[];

const ITEMS_HEIGHT = 160;

export const ListComponent = ({
    itemsHeight,
    filterable,
    sortable,
    filter,
    filterPlaceholder,
    emptyPlaceholder,
}: ListProps) => (
    <List
        items={LIST_ITEMS}
        itemsHeight={itemsHeight || ITEMS_HEIGHT}
        filterable={filterable}
        sortable={sortable}
        filter={filter}
        filterPlaceholder={filterPlaceholder}
        emptyPlaceholder={emptyPlaceholder}
    ></List>
);
