import {Flex, Text} from 'landing-uikit';
import React from 'react';

import {block} from '../../../utils';

import './ThemeSection.scss';

const b = block('theme-section');

interface ThemeSectionProps {
    title: string;
    children?: React.ReactNode;
    className?: string;
}

export const ThemeSection: React.FC<ThemeSectionProps> = ({title, className, children}) => {
    return (
        <div className={b(null, className)}>
            <Flex>
                <Text className={b('title')}>{title}</Text>
            </Flex>
            {children}
        </div>
    );
};
