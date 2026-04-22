import {ArrowToggle} from '@gravity-ui/uikit';
import React from 'react';

import {block} from '../../../../utils';
import {ThemeSection} from '../ThemeSection';

import './ExpandableThemeSection.scss';

const b = block('expandable-theme-section');

interface ExpandableThemeSectionProps {
    title: string;
    children?: React.ReactNode;
    className?: string;
    initialExpanded?: boolean;
}

export const ExpandableThemeSection: React.FC<ExpandableThemeSectionProps> = ({
    title,
    className,
    children,
    initialExpanded = false,
}) => {
    const [isExpanded, setIsExpanded] = React.useState(initialExpanded);
    const toggleExpanded = React.useCallback(() => setIsExpanded((s) => !s), []);

    return (
        <ThemeSection
            title={title}
            className={className}
            titleActions={<ArrowToggle size={24} direction={isExpanded ? 'top' : 'bottom'} />}
            headerClassName={b('header')}
            onHeaderClick={toggleExpanded}
        >
            <div className={b('content', {open: isExpanded})}>{children}</div>
        </ThemeSection>
    );
};
