import {Col, Grid, Row} from '@gravity-ui/page-constructor';
import React from 'react';

import {DEFAULT_THEME} from './lib/constants';
import {ColorsTab} from './ui/ColorsTab';
import {ThemeCreatorContextProvider} from './ui/ThemeCreatorContextProvider';

export const Theme = () => {
    return (
        <ThemeCreatorContextProvider initialTheme={DEFAULT_THEME}>
            <Grid>
                <Row>
                    <Col sizes={12}>
                        <ColorsTab />
                    </Col>
                </Row>
            </Grid>
        </ThemeCreatorContextProvider>
    );
};
