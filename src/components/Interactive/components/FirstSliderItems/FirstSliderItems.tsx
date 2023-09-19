import {
    ChartDonut,
    CrownDiamond,
    FaceSmile,
    Fingerprint,
    FloppyDisk,
    Gear,
    Gift,
    Palette,
    Person,
    Star,
    StarFill,
    ThumbsUp,
    Volume,
} from '@gravity-ui/icons';
import {
    Button,
    Checkbox,
    Col,
    Container,
    Icon,
    Loader,
    Menu,
    Row,
    Table,
    TableColumnConfig,
    Tabs,
    Text,
} from '@gravity-ui/uikit';
import React from 'react';

import {block} from '../../../../utils';
import {InteractiveCard} from '../InteractiveCard/InteractiveCard';

import './FirstSliderItems.scss';

const b = block('slider-item');

const LoaderCard = () => {
    return (
        <InteractiveCard>
            <Loader />
        </InteractiveCard>
    );
};

const ButtonsCard = () => {
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

const TabsCard = () => {
    enum TABS {
        FIRST = 'Harder',
        SECOND = 'Better',
        THIRD = 'Faster',
        FOURTH = 'Stronger',
    }

    const tabItems = [
        {
            id: TABS.FIRST,
            hint: TABS.FIRST,
            title: TABS.FIRST,
        },
        {
            id: TABS.SECOND,
            hint: TABS.SECOND,
            title: TABS.SECOND,
        },
        {
            id: TABS.THIRD,
            hint: TABS.THIRD,
            title: TABS.THIRD,
        },
        {
            id: TABS.FOURTH,
            hint: TABS.FOURTH,
            title: TABS.FOURTH,
        },
    ];

    return (
        <InteractiveCard>
            <Tabs items={tabItems} />
        </InteractiveCard>
    );
};

const MenuCard = () => {
    return (
        <InteractiveCard>
            <Menu>
                <Menu.Item>{'Work it harder'}</Menu.Item>
                <Menu.Group>
                    <Menu.Item>{'Make it better'}</Menu.Item>
                    <Menu.Item>{'Do it faster'}</Menu.Item>
                    <Menu.Item>{'Makes us stronger'}</Menu.Item>
                </Menu.Group>
            </Menu>
        </InteractiveCard>
    );
};

const TableCard = () => {
    const AVATAR =
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1160.jpg';

    interface DataItem {
        first: JSX.Element;
        second: JSX.Element;
        third: string;
        fourth: JSX.Element;
    }

    const data: DataItem[] = [
        {
            first: <Checkbox>{'Harder'}</Checkbox>,
            second: (
                <div className={b('avatar')}>
                    <img alt={''} src={AVATAR} />
                </div>
            ),
            third: 'Faster',
            fourth: (
                <Button view="flat">
                    <Icon data={StarFill} size={16} />
                </Button>
            ),
        },
        {
            first: <Checkbox checked={true}>{'Better'}</Checkbox>,
            second: (
                <div className={b('avatar')}>
                    <img alt={''} src={AVATAR} />
                </div>
            ),
            third: 'Stronger',
            fourth: (
                <Button view="flat">
                    <Icon data={Star} size={16} />
                </Button>
            ),
        },
    ];

    const columns: TableColumnConfig<DataItem>[] = [
        {
            id: 'first',
            name: () => <Checkbox indeterminate={true}>{'Work it'}</Checkbox>,
        },
        {
            id: 'second',
            name: 'Make it',
        },
        {
            id: 'third',
            name: 'Do it',
        },
        {
            id: 'fourth',
            name: () => (
                <Button view="flat">
                    <Icon data={Gear} size={16} />
                </Button>
            ),
        },
    ];

    return (
        <InteractiveCard>
            <Table columns={columns} data={data} />
        </InteractiveCard>
    );
};

const IconsPromoCard = () => {
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

export const FirstSliderItems = [
    <LoaderCard />,
    <ButtonsCard />,
    <TabsCard />,
    <MenuCard />,
    <TableCard />,
    <IconsPromoCard />,
];
