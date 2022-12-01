import React from 'react';
import {Grid, Row, Col} from '@gravity-ui/page-constructor';
import {block} from '../../utils';
import './Footer.scss';

const b = block('footer');

export type FooterProps = {
    text: string;
};

export const Footer: React.FC<FooterProps> = ({text}) => (
    <Grid>
        <Row>
            <Col sizes={{sm: 12}}>
                <footer className={b()}>
                    <div className={b('text')}>{text}</div>
                </footer>
            </Col>
        </Row>
    </Grid>
);
