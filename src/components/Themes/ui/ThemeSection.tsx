import {Flex, Text} from '@gravity-ui/uikit';
import React from 'react';

import {block} from '../../../utils';

import './ThemeSection.scss';

const b = block('theme-section');

interface ThemeSectionProps {
    title: string;
    children?: React.ReactNode;
    className?: string;
    titleActions?: React.ReactNode;
}

export const ThemeSection: React.FC<ThemeSectionProps> = ({
    title,
    className,
    children,
    titleActions,
}) => {
    return (
        <div className={b(null, className)}>
            <Flex justifyContent="space-between">
                <Text className={b('title')}>{title}</Text>
                {titleActions}
            </Flex>
            {children}
        </div>
    );
};
