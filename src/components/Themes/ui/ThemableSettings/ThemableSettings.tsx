import {BREAKPOINTS, useWindowBreakpoint} from '@gravity-ui/page-constructor';
import {Col, Flex, Row} from '@gravity-ui/uikit';
import React from 'react';

import {block} from '../../../../utils';
import {ThemeVariant} from '../../lib/types';

import {ThemableCard} from './ThemableCard';
import './ThemableSettings.scss';
import {ThemableSettingsRows} from './ThemableSettingsRows';
import {ThemableRow} from './types';

const b = block('themable-settings');

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
        <Flex gap={9} className={b()}>
            <Row space={4} style={{width: '100%'}}>
                <Col l={4} className={b('columns')}>
                    <ThemableSettingsRows title={title} rows={rows} appendNode={addButton} />
                </Col>

                <Col l={4}>
                    <ThemableCard
                        rows={rows}
                        theme={isTabletOrMobile ? theme : 'light'}
                        onChangeTheme={isTabletOrMobile ? setTheme : undefined}
                        showTitle={!isTabletOrMobile}
                    />
                    {isMobile && addButton}
                </Col>
                <Col className={b('dark-card')} l={4}>
                    <ThemableCard rows={rows} theme="dark" />
                </Col>
            </Row>
        </Flex>
    );
};
