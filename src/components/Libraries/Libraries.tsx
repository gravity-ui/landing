import {Col, Grid, Row} from '@gravity-ui/page-constructor';
import Link from 'next/link';
import React from 'react';

import libsData from '../../libs-data.json';
import {block} from '../../utils';

import './Libraries.scss';

const b = block('libraries');

export const Libraries = () => {
    return (
        <div className={b()}>
            <Grid>
                <Row>
                    <Col sizes={12}>
                        <h1 className={b('title')}>Our libraries</h1>
                    </Col>
                </Row>
                <Row>
                    {Object.keys(libsData).map((id) => {
                        return (
                            <Col sizes={4} key={id}>
                                <Link href={`/libraries/${id}`}>
                                    <a className={b('link')}>
                                        <div className={b('item')}>{id}</div>
                                    </a>
                                </Link>
                            </Col>
                        );
                    })}
                </Row>
            </Grid>
        </div>
    );
};

export default Libraries;
