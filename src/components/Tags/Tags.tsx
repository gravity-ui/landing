import {Button, Flex} from '@gravity-ui/uikit';
import React from 'react';

import {block} from '../../utils';

import './Tags.scss';

const b = block('tags');

export type TagItem<T extends string = string> = {
    title: string;
    value: T;
};

interface TagsProps<T extends string = string> {
    value: T;
    items: TagItem<T>[];
    onChange: (newValue: T) => void;
    className?: string;
}

export function Tags<T extends string = string>({value, items, onChange, className}: TagsProps<T>) {
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
}
