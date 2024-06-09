import {Col, Grid, Row} from '@gravity-ui/page-constructor';
import React from 'react';

import {BasicPalette} from './BasicPalette/BasicPalette';

export const ColorsTab = () => {
    return (
        <Grid>
            <Row>
                <Col sizes={12}>
                    <h1>Colors</h1>
                </Col>
            </Row>
            <BasicPalette />
        </Grid>
    );
};
