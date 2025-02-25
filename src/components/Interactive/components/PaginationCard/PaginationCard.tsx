import {Pagination} from '@gravity-ui/uikit';
import React from 'react';

import {InteractiveCard} from '../InteractiveCard';

const PAGE_CHANGE_TIMEOUT = 3000;

export const PaginationCard = () => {
    const [currentPage, setCurrentPage] = React.useState(1);

    React.useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentPage((prev) => {
                if (prev === 3) {
                    return 1;
                } else {
                    return prev + 1;
                }
            });
        }, PAGE_CHANGE_TIMEOUT);

        return () => {
            clearInterval(intervalId);
        };
    }, [setCurrentPage]);

    return (
        <InteractiveCard>
            <Pagination
                onUpdate={() => {}}
                page={currentPage}
                pageSize={10}
                pageSizeOptions={[20, 50, 100]}
                total={30}
            />
        </InteractiveCard>
    );
};
