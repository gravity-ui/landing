import {Col, Grid, Row} from '@gravity-ui/page-constructor';
import React from 'react';

import {ColorsTab} from './ColorsTab';
import {ThemeCreator} from './ThemeCreator';
import {DEFAULT_THEME} from './constants';

export const Theme = () => {
    return (
        <ThemeCreator theme={DEFAULT_THEME}>
            <Grid>
                <Row>
                    <Col sizes={12}>
                        <ColorsTab />
                    </Col>
                </Row>
            </Grid>
        </ThemeCreator>
    );
};
