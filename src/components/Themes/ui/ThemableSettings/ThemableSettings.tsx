import {BREAKPOINTS, useWindowBreakpoint} from '@gravity-ui/page-constructor';
import {Col, Flex} from '@gravity-ui/uikit';
import React from 'react';

import {ThemeVariant} from '../../lib/types';

import {ThemableCard} from './ThemableCard';
import {ThemableSettingsRows} from './ThemableSettingsRows';
import {ThemableRow} from './types';

interface ThemableSettingsProps {
    title: React.ReactNode;
    rows: ThemableRow[];
    addButton?: React.ReactNode;
}

export const ThemableSettings: React.FC<ThemableSettingsProps> = ({title, rows, addButton}) => {
    const [theme, setTheme] = React.useState<ThemeVariant>('light');

    const breakpoint = useWindowBreakpoint();
    const isTabletOrMobile = breakpoint < BREAKPOINTS.lg;
    const isMobile = breakpoint < BREAKPOINTS.md;

    return (
        <Flex gap={9}>
            {!isMobile && (
                <Flex width={isTabletOrMobile ? 328 : 380}>
                    <ThemableSettingsRows title={title} rows={rows} appendNode={addButton} />
                </Flex>
            )}
            <Flex gap={4} grow={true}>
                <Col l={6}>
                    <ThemableCard
                        rows={rows}
                        theme={isTabletOrMobile ? theme : 'light'}
                        onChangeTheme={isTabletOrMobile ? setTheme : undefined}
                        showTitle={!isTabletOrMobile}
                    />
                    {isMobile && addButton}
                </Col>
                {!isTabletOrMobile && (
                    <Col l={6}>
                        <ThemableCard rows={rows} theme="dark" />
                    </Col>
                )}
            </Flex>
        </Flex>
    );
};
