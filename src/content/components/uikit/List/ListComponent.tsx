import {List, TextInput} from '@gravity-ui/uikit-v8';
import {ListHelloPangeaDnd} from '@gravity-ui/uikit-v8/hello-pangea-dnd';
import React from 'react';

const LIST_ITEMS = ['one', 'two', 'three', 'four', 'five', 'six', 'seven'];

type ListComponentProps = {
    filterable?: boolean;
    sortable?: boolean;
    filterPlaceholder?: string;
    emptyPlaceholder?: string;
};

export const ListComponent = ({
    filterable,
    sortable,
    filterPlaceholder,
    emptyPlaceholder,
}: ListComponentProps) => {
    const [items, setItems] = React.useState(LIST_ITEMS);
    const [filter, setFilter] = React.useState('');
    const query = filterable ? filter.trim().toLowerCase() : '';
    const visibleItems = items.filter((item) => item.includes(query));
    const list = <List items={visibleItems} role={sortable ? 'grid' : 'listbox'} />;

    return (
        <div style={{width: 240}}>
            {filterable && (
                <TextInput placeholder={filterPlaceholder} value={filter} onUpdate={setFilter} />
            )}
            <div style={{maxHeight: 160, overflowY: 'auto'}}>
                {visibleItems.length === 0 ? (
                    emptyPlaceholder
                ) : sortable && !query ? (
                    <ListHelloPangeaDnd items={visibleItems} onItemsUpdate={setItems}>
                        {list}
                    </ListHelloPangeaDnd>
                ) : (
                    list
                )}
            </div>
        </div>
    );
};
