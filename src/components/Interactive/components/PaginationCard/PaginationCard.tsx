import {Pagination} from '@gravity-ui/uikit';
import React from 'react';

import {InteractiveCard} from '../InteractiveCard';

export const PaginationCard = () => {
    return (
        <InteractiveCard>
            <Pagination
                onUpdate={() => {}}
                page={1}
                pageSize={10}
                pageSizeOptions={[20, 50, 100]}
                total={30}
            />
        </InteractiveCard>
    );
};
