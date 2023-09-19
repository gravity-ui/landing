import {Button, Col, Container, Row} from '@gravity-ui/uikit';

import {InteractiveCard} from '../InteractiveCard';

export const ButtonsCard = () => {
    return (
        <InteractiveCard>
            <Container spaceRow={1} gutters={false}>
                <Row space={2}>
                    <Col>
                        <Button view={'outlined-info'}>{'Work it'}</Button>
                    </Col>
                    <Col>
                        <Button view={'normal'}>{'Make it'}</Button>
                    </Col>
                </Row>
                <Row space={2}>
                    <Col>
                        <Button view={'action'}>{'Do it'}</Button>
                    </Col>
                    <Col>
                        <Button view={'outlined-danger'}>{'Makes us'}</Button>
                    </Col>
                </Row>
                <Row space={2}>
                    <Col>
                        <Button view={'outlined-success'}>{'Work it'}</Button>
                    </Col>
                    <Col>
                        <Button view={'action'}>{'Make it'}</Button>
                    </Col>
                </Row>
                <Row space={2}>
                    <Col>
                        <Button view={'normal'}>{'Do it'}</Button>
                    </Col>
                    <Col>
                        <Button view={'normal'}>{'Makes us'}</Button>
                    </Col>
                </Row>
            </Container>
        </InteractiveCard>
    );
};
