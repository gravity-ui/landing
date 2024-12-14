import {Clock, Folder, LayoutTabs, TrashBin} from '@gravity-ui/icons';
import {Button, Col, Container, Icon, Link, Row} from '@gravity-ui/uikit';

import figmaIcon from '../../../../assets/icons/figma-fill.svg';
import {block} from '../../../../utils';

import './Email.scss';

const b = block('examples-email');

type EmailProps = {};

// @todo-opensourcenight Make email page
// https://www.figma.com/design/MnKaEyxPs9Zeyhg6pmf4uX/OS-Night-Design-(Published)?node-id=1-20225&t=cBOGiZgT0jwhnCOY-4
export const Email: React.FC<EmailProps> = () => {
    return (
        <div className={b('what')}>
            <main className={b('main')}>
                <Container>
                    <Row space={0} className={b('container')}>
                        <Col s="3" className={b('navigation')}>
                            what
                        </Col>
                        <Col s="4" className={b('mail-list')}>
                            the
                        </Col>
                        <Col s="5" className={b('mail-content')}>
                            <Container space={0}>
                                <Row space={3} className={b('left-icons')}>
                                    <Col>
                                        <Folder />
                                    </Col>
                                    <Col>
                                        <LayoutTabs />
                                    </Col>
                                    <Col>
                                        <TrashBin />
                                    </Col>
                                    <Col>
                                        <Clock />
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
                <Container className={b('navigation')}>
                    <Row space="5">
                        <Col s="6" l="6">
                            <Container space={0}>
                                <Row space={3} className={b('left-icons')}>
                                    <Col>
                                        <Folder />
                                    </Col>
                                    <Col>
                                        <LayoutTabs />
                                    </Col>
                                    <Col>
                                        <TrashBin />
                                    </Col>
                                    <Col>
                                        <Clock />
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                        <Col s="6" l="8">
                            ...
                        </Col>
                    </Row>
                </Container>
            </main>

            <footer className={b('footer')}>
                <Link href={'/examples'}>Open in Examples page</Link>
                <Link href={'/examples/email'}>Open in Separate page</Link>
                <Button
                    key="figma"
                    className={b('button')}
                    view="action"
                    size="xl"
                    href={
                        'https://www.figma.com/design/MnKaEyxPs9Zeyhg6pmf4uX/OS-Night-Design-(Published)?node-id=1-20225&t=cBOGiZgT0jwhnCOY-4'
                    }
                    target="_blank"
                >
                    <Icon className={b('button-icon')} data={figmaIcon} size={16} />
                    <span>Open Figma</span>
                </Button>
            </footer>
        </div>
    );
};
