import {Flex, Text} from '@gravity-ui/uikit';
import React from 'react';

interface ThemeSectionProps {
    title: string;
    children?: React.ReactNode;
    className?: string;
}

export const ThemeSection: React.FC<ThemeSectionProps> = ({title, className, children}) => {
    return (
        <Flex gap={8} direction="column" className={className}>
            <Flex>
                <Text variant="display-2">{title}</Text>
            </Flex>
            {children}
        </Flex>
    );
};
