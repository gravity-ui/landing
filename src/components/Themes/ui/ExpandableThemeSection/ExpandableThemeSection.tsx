import {ArrowToggle, Flex, Text} from '@gravity-ui/uikit';
import React, {useEffect, useMemo, useRef, useState} from 'react';

import {block} from '../../../../utils';

import './ExpandableThemeSection.scss';

const b = block('expandable-theme-section');

type ExpandableThemeSectionStyle = React.CSSProperties & {
    '--theme-section-height': string;
};

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

    const [contentMaxHeight, setContentMaxHeight] = useState<number>();
    const contentRef = useRef<HTMLDivElement | null>(null);

    const contentWrapperStyle: ExpandableThemeSectionStyle = useMemo(
        () => ({'--theme-section-height': contentMaxHeight ? `${contentMaxHeight}px` : 'auto'}),
        [contentMaxHeight],
    );

    useEffect(() => {
        const element = contentRef.current;
        if (!element || typeof ResizeObserver === 'undefined') {
            return undefined;
        }

        const observer = new ResizeObserver((entries) => {
            for (const entry of entries) {
                setContentMaxHeight(entry.target.clientHeight);
            }
        });
        observer.observe(element);
        return () => observer.disconnect();
    }, []);

    return (
        <div className={b(null, className)}>
            <Flex justifyContent="space-between" className={b('header')} onClick={toggleExpanded}>
                <Text className={b('title')}>{title}</Text>
                <ArrowToggle size={24} direction={isExpanded ? 'top' : 'bottom'} />
            </Flex>
            <div className={b('content-wrapper', {open: isExpanded})} style={contentWrapperStyle}>
                <div ref={contentRef} className={b('content')}>
                    {children}
                </div>
            </div>
        </div>
    );
};
