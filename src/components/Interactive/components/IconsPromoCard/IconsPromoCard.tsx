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
import {Col, Flex, Icon, Row, Text} from '@gravity-ui/uikit';

import {InteractiveCard} from '../InteractiveCard';

const firstRowIcons = [FaceSmile, Fingerprint, FloppyDisk, ChartDonut, CrownDiamond];
const secondRowIcons = [ThumbsUp, Palette, Volume, Person, Gift];

export const IconsPromoCard = () => {
    return (
        <InteractiveCard>
            <Flex direction="column">
                <Row space={5}>
                    {firstRowIcons.map((icon, index) => (
                        <Col key={index}>
                            <Icon data={icon} size={32} />
                        </Col>
                    ))}
                </Row>
                <Row space={2}>
                    <Col>
                        <Text variant="display-3">{'500+ icons'}</Text>
                    </Col>
                </Row>
                <Row space={5}>
                    {secondRowIcons.map((icon, index) => (
                        <Col key={index}>
                            <Icon data={icon} size={32} />
                        </Col>
                    ))}
                </Row>
            </Flex>
        </InteractiveCard>
    );
};
