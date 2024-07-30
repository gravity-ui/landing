import {Flex, Text, sp} from '@gravity-ui/uikit';
import React from 'react';

import {block} from '../../../../utils';

import './ThemableSettingsRows.scss';
import {ThemableRow} from './types';

const b = block('themable-settings-rows');

interface ThemableSettingsRowsProps {
    rows: ThemableRow[];
    title: React.ReactNode;
    appendNode?: React.ReactNode;
}

export const ThemableSettingsRows: React.FC<ThemableSettingsRowsProps> = ({
    rows,
    title,
    appendNode,
}) => {
    return (
        <Flex direction="column" className={b()} grow={true}>
            <Text variant="subheader-3" className={b('title')}>
                {title}
            </Text>
            <Flex direction="column" gap={4}>
                {rows.map((row) => (
                    <React.Fragment key={row.id}>
                        {row.renderTitle ? (
                            row.renderTitle()
                        ) : (
                            <div className={sp({py: 2})}>
                                <Text variant="body-2">{row.title}</Text>
                            </div>
                        )}
                    </React.Fragment>
                ))}
                {appendNode}
            </Flex>
        </Flex>
    );
};
