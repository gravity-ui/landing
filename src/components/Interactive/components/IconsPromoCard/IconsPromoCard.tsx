import {
    ChartDonut,
    CrownDiamond,
    FaceSmile,
    Fingerprint,
    FloppyDisk,
    Gift,
    Palette,
    Person,
    ThumbsUp,
    Volume,
} from '@gravity-ui/icons';
import {Col, Container, Icon, Row, Text} from '@gravity-ui/uikit';

import {InteractiveCard} from '../InteractiveCard';

export const IconsPromoCard = () => {
    return (
        <InteractiveCard>
            <Container spaceRow={1} gutters={false}>
                <Row space={2}>
                    <Col>
                        <Icon data={FaceSmile} />
                    </Col>
                    <Col>
                        <Icon data={Fingerprint} />
                    </Col>
                    <Col>
                        <Icon data={FloppyDisk} />
                    </Col>
                    <Col>
                        <Icon data={ChartDonut} />
                    </Col>
                    <Col>
                        <Icon data={CrownDiamond} />
                    </Col>
                </Row>
                <Row space={2}>
                    <Col>
                        <Text>{'500+ icons'}</Text>
                    </Col>
                </Row>
                <Row space={2}>
                    <Col>
                        <Icon data={ThumbsUp} />
                    </Col>
                    <Col>
                        <Icon data={Palette} />
                    </Col>
                    <Col>
                        <Icon data={Volume} />
                    </Col>
                    <Col>
                        <Icon data={Person} />
                    </Col>
                    <Col>
                        <Icon data={Gift} />
                    </Col>
                </Row>
            </Container>
        </InteractiveCard>
    );
};
