import {Col, Grid, Row} from '@gravity-ui/page-constructor';

import {roadmapTasks} from '../../content/roadmap';
import {block} from '../../utils';
import {Roadmap} from '../Roadmap';

import './RoadmapContainer.scss';

const b = block('roadmap-container');

export const RoadmapContainer = () => (
    <Grid className={b()}>
        <Row>
            <Col sizes={12}>
                <h1 className={b('title')}>Roadmap</h1>
            </Col>
        </Row>
        <Row>
            <Col sizes={12}>
                <Roadmap tasks={roadmapTasks} />
            </Col>
        </Row>
    </Grid>
);
