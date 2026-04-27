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
    headerClassName?: string;
    onHeaderClick?: () => void;
}

export const ThemeSection: React.FC<ThemeSectionProps> = ({
    title,
    className,
    children,
    titleActions,
    headerClassName,
    onHeaderClick,
}) => {
    return (
        <div className={b(null, className)}>
            <Flex
                justifyContent="space-between"
                className={b('header', headerClassName)}
                onClick={onHeaderClick}
            >
                <Text className={b('title')}>{title}</Text>
                {titleActions}
            </Flex>
            {children}
        </div>
    );
};
