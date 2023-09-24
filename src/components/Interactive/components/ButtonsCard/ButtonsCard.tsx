import {Button, Col, Flex, Row} from '@gravity-ui/uikit';

import {InteractiveCard} from '../InteractiveCard';

export const ButtonsCard = () => {
    return (
        <InteractiveCard>
            <Flex gapRow={1} direction="column">
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
                        <Button view={'raised'}>{'Do it'}</Button>
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
            </Flex>
        </InteractiveCard>
    );
};
