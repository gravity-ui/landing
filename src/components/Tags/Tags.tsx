import {Button, Flex} from '@gravity-ui/uikit';
import React from 'react';

import {block} from '../../utils';

import './Tags.scss';

const b = block('tags');

export type TagItem = {
    title: string;
    value: string;
};

interface TagsProps {
    value: string;
    items: TagItem[];
    onChange: (newValue: string) => void;
    className?: string;
}

export const Tags = ({value, items, onChange, className}: TagsProps) => {
    return (
        <Flex wrap="wrap" gap={2} className={b(null, className)}>
            {items.map((item) => {
                return (
                    <Button
                        key={item.value}
                        tabIndex={0}
                        view={item.value === value ? 'action' : 'outlined'}
                        size="xl"
                        onClick={() => {
                            onChange(item.value);
                        }}
                    >
                        {item.title}
                    </Button>
                );
            })}
        </Flex>
    );
};
