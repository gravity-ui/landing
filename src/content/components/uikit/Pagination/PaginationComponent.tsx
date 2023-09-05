import {Pagination, PaginationProps} from '@gravity-ui/uikit';
import React from 'react';

const setDefaultState = (props: PaginationProps) => ({
    page: Number(props.page) || 1,
    pageSize: Number(props.pageSize) || 10,
    total: Number(props.total),
    compact: props.compact,
    showInput: props.showInput,
    showPages: props.showPages,
});

export const PaginationComponent = (props: PaginationProps) => {
    const [state, setState] = React.useState(() => setDefaultState(props));

    React.useEffect(() => {
        setState((prevState) => ({...prevState, ...setDefaultState(props)}));
    }, [props]);

    const handleUpdate: PaginationProps['onUpdate'] = (nextPage, nextPageSize) =>
        setState((prevState) => ({...prevState, page: nextPage, pageSize: nextPageSize}));

    return <Pagination {...state} onUpdate={handleUpdate} pageSizeOptions={[1, 5, 10]} />;
};
