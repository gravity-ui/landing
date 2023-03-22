import React from 'react';

import {block} from '../../../utils';

import './Tags.scss';

const b = block('tags');

export type TagItem = {
    title: string;
    value: string;
};

type Props = {
    value: string;
    items: TagItem[];
    onChange: (newValue: string) => void;
};

export const Tags: React.FC<Props> = ({value, items, onChange}) => {
    return (
        <div className={b()}>
            {items.map((item) => {
                return (
                    <div
                        tabIndex={0}
                        onClick={() => {
                            onChange(item.value);
                        }}
                        className={b('tag', {active: item.value === value})}
                    >
                        {item.title}
                    </div>
                );
            })}
        </div>
    );
};
