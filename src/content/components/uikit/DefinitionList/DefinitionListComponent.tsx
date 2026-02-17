import {DefinitionList, DefinitionListProps} from '@gravity-ui/uikit';
import React from 'react';

export const DefinitionListComponent = (props: DefinitionListProps) => {
    return (
        <DefinitionList {...props}>
            <DefinitionList.Item name="Name" copyText="John">
                John
            </DefinitionList.Item>
            <DefinitionList.Item name="Position">Sales</DefinitionList.Item>
            <DefinitionList.Item name="Address" />
        </DefinitionList>
    );
};
