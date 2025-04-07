'use client';
import {
    ChartColumn,
    CirclePlay,
    Copy,
    Cpu,
    Cpus,
    Cubes3Overlap,
    Database,
    Fingerprint,
    Flag,
    Gear,
    Globe,
    HardDrive,
    Lock,
    Magnifier,
    Pulse,
    Rocket,
    SealCheck,
    SquareChartColumn,
    Terminal,
    TrashBin,
} from '@gravity-ui/icons';
import {ActionBar} from '@gravity-ui/navigation';
import {
    Alert,
    Breadcrumbs,
    Button,
    Card,
    ClipboardButton,
    Col,
    Flex,
    Icon,
    Label,
    Menu,
    Table,
    TableColumnConfig,
    Text,
} from '@gravity-ui/uikit';
import dynamic from 'next/dynamic';
import {DropdownMenuComponent} from 'src/content/components/uikit/DropdownMenu/DropdownMenuComponent';
import {block} from 'src/utils';

import {PreviewWrapper, PreviewWrapperProps} from '../PreviewWrapper/PreviewWrapper';

import './KubernetesPreview.scss';
import {barXData} from './barXData';
import {pieData} from './pieData';

const b = block('kubernetes-preview');

const Chart = dynamic(() => import('@gravity-ui/charts').then((mod) => mod.Chart), {ssr: false});

const breadCrumbItems = ['All services', 'Personal VM', 'Gravity-vm-sunset-1234'];

const environmentsData = [
    {name: 'ENV_PROCESS_GROUP', value: 'app'},
    {name: 'ENV_PROCESS_NAME', value: 'Value'},
    {name: 'PRIMARY_REGION', value: 'msk'},
];

const environmentColumns: TableColumnConfig<unknown>[] = [
    {name: 'Name', id: 'name', width: '25%'},
    {name: 'Value', id: 'value', align: 'center', width: '50%'},
    {
        name: '',
        id: 'actions',
        align: 'end',
        width: '24px',
        template: () => <DropdownMenuComponent initialOpen={false} />,
    },
];

const functionsData = [
    {
        handler: '/api/get-folders',
        node: 'Node.js 20.x',
        region: 'Moscow-1a',
        copy: true,
    },
    {
        handler: '/api/get-images',
        node: 'Node.js 20.x',
        region: 'Moscow-1a',
        copy: false,
    },
    {
        handler: '/api/update-images',
        node: 'Node.js 20.x',
        region: 'Moscow-1a',
        copy: false,
    },
];

const functionsColumns: TableColumnConfig<typeof functionsData[0]>[] = [
    {
        name: 'Handler',
        id: 'handler',
        width: '33%',
        template: (item) => (
            <Flex alignItems="center" gap="1">
                <Text>{item.handler}</Text>
                {item.copy && <ClipboardButton size="s" text={item.handler} />}
            </Flex>
        ),
    },
    {name: 'Node', id: 'node', align: 'start', width: '33%'},
    {name: 'Region', id: 'region', align: 'start', width: '33%'},
];

export const KubernetesPreview = (props: Pick<PreviewWrapperProps, 'styles'>) => {
    return (
        <PreviewWrapper {...props}>
            {({themeSwitcher}) => {
                return (
                    <Flex direction="column" grow gap="4" className={b()}>
                        <ActionBar className={b('header')}>
                            <ActionBar.Section type="primary">
                                <ActionBar.Group className={b('grow')}>
                                    <ActionBar.Item className={b('grow')}>
                                        <Breadcrumbs showRoot style={{alignItems: 'center'}}>
                                            {breadCrumbItems.map((item) => (
                                                <Breadcrumbs.Item key={item}>
                                                    {item}
                                                </Breadcrumbs.Item>
                                            ))}
                                        </Breadcrumbs>
                                    </ActionBar.Item>
                                </ActionBar.Group>
                                <ActionBar.Group className={b('header-group')}>
                                    <ActionBar.Item>
                                        <DropdownMenuComponent initialOpen={false} />
                                    </ActionBar.Item>
                                    <ActionBar.Item>
                                        <Button view="action">
                                            <Icon size={16} data={CirclePlay} />
                                            Run
                                        </Button>
                                    </ActionBar.Item>
                                    <ActionBar.Item>{themeSwitcher}</ActionBar.Item>
                                </ActionBar.Group>
                            </ActionBar.Section>
                        </ActionBar>
                        <Flex grow style={{padding: '16px'}} gap="5">
                            <Menu size="xl">
                                <Menu.Group>
                                    <Menu.Item
                                        iconStart={<Icon data={Flag} />}
                                        title="Overview"
                                        selected
                                    >
                                        Overview
                                    </Menu.Item>
                                    <Menu.Item
                                        iconStart={<Icon data={Gear} />}
                                        title="Configuration"
                                    >
                                        Configuration
                                    </Menu.Item>
                                    <Menu.Item iconStart={<Icon data={Cpus} />} title="Machines">
                                        Machines
                                    </Menu.Item>
                                    <Menu.Item iconStart={<Icon data={Database} />} title="Volumes">
                                        Volumes
                                    </Menu.Item>
                                </Menu.Group>
                                <Menu.Group>
                                    <Menu.Item
                                        iconStart={<Icon data={SquareChartColumn} />}
                                        title="Activity"
                                    >
                                        Activity
                                    </Menu.Item>
                                    <Menu.Item
                                        iconStart={<Icon data={ChartColumn} />}
                                        title="Metrics"
                                    >
                                        Metrics
                                    </Menu.Item>
                                    <Menu.Item iconStart={<Icon data={Pulse} />} title="Live Logs">
                                        Live Logs
                                    </Menu.Item>
                                    <Menu.Item
                                        iconStart={<Icon data={Magnifier} />}
                                        title="Log Search"
                                    >
                                        Log Search
                                    </Menu.Item>
                                    <Menu.Item
                                        iconStart={<Icon data={Rocket} />}
                                        title="Deployments"
                                    >
                                        Deployments
                                    </Menu.Item>
                                </Menu.Group>
                                <Menu.Group>
                                    <Menu.Item
                                        iconStart={<Icon data={SealCheck} />}
                                        title="Certificates"
                                    >
                                        Certificates
                                    </Menu.Item>
                                    <Menu.Item
                                        iconStart={<Icon data={Cubes3Overlap} />}
                                        title="Registry"
                                    >
                                        Registry
                                    </Menu.Item>
                                    <Menu.Item iconStart={<Icon data={Lock} />} title="Secrets">
                                        Secrets
                                    </Menu.Item>
                                </Menu.Group>
                                <Menu.Group>
                                    <Menu.Item
                                        iconStart={<Icon data={Fingerprint} />}
                                        title="Tokens"
                                    >
                                        Tokens
                                    </Menu.Item>
                                    <Menu.Item iconStart={<Icon data={Gear} />} title="Settings">
                                        Settings
                                    </Menu.Item>
                                </Menu.Group>
                            </Menu>

                            <Flex direction="column" gap="4">
                                <Alert
                                    theme="info"
                                    title={
                                        <Text as="span">
                                            Your app is running in one machine. You can scale and
                                            run your app on more Machines to ensure high
                                            availability with just one command:{' '}
                                            <strong>gravity scale count 2</strong>
                                        </Text>
                                    }
                                />
                                <Flex gap="5">
                                    <Card className={b('widget-card')}>
                                        <Flex direction="column" gap="4">
                                            <Flex
                                                grow="1"
                                                alignItems="center"
                                                justifyContent="space-between"
                                            >
                                                <Breadcrumbs
                                                    style={{flexGrow: 1, alignItems: 'center'}}
                                                >
                                                    <Breadcrumbs.Item>Machines</Breadcrumbs.Item>
                                                    <Breadcrumbs.Item>Autoscaling</Breadcrumbs.Item>
                                                </Breadcrumbs>
                                                <DropdownMenuComponent initialOpen={false} />
                                            </Flex>
                                            <Flex>
                                                <Flex direction="column">
                                                    <Text variant="header-2">0.921 Cores</Text>
                                                    <Text>24 of 74 pods upscale</Text>
                                                </Flex>
                                                <div
                                                    style={{
                                                        position: 'absolute',
                                                        width: '120px',
                                                        height: '70px',
                                                        bottom: '20px',
                                                        right: '-50px',
                                                    }}
                                                >
                                                    <Chart data={barXData} />
                                                </div>
                                            </Flex>
                                        </Flex>
                                    </Card>
                                    <Card className={b('widget-card')} style={{maxWidth: '265px'}}>
                                        <Flex direction="column" gap="4">
                                            <Flex
                                                grow="1"
                                                alignItems="center"
                                                justifyContent="space-between"
                                            >
                                                <Breadcrumbs
                                                    style={{flexGrow: 1, alignItems: 'center'}}
                                                >
                                                    <Breadcrumbs.Item>Volumes</Breadcrumbs.Item>
                                                    <Breadcrumbs.Item>Total</Breadcrumbs.Item>
                                                </Breadcrumbs>
                                                <DropdownMenuComponent initialOpen={false} />
                                            </Flex>
                                            <Flex>
                                                <Flex direction="column">
                                                    <Text variant="header-2">32.4% used</Text>
                                                    <Text>24 of 74 pods dead</Text>
                                                </Flex>
                                                <div
                                                    style={{
                                                        position: 'absolute',
                                                        width: '120px',
                                                        height: '70px',
                                                        bottom: '8px',
                                                        right: '20px',
                                                    }}
                                                >
                                                    <Chart data={pieData} />
                                                </div>
                                            </Flex>
                                        </Flex>
                                    </Card>
                                </Flex>
                                <Card className={b('widget-card')}>
                                    <Flex direction="column" gap="5">
                                        <Flex
                                            justifyContent="space-between"
                                            alignItems="center"
                                            style={{
                                                borderBottom:
                                                    '1px solid var(--g-color-line-generic-solid)',
                                                paddingBlockEnd: '20px',
                                            }}
                                        >
                                            <Flex direction="column">
                                                <Text variant="subheader-3">
                                                    Gravity-vm-sunset-1234
                                                </Text>
                                                <Text>
                                                    Description and general information about the
                                                    application
                                                </Text>
                                            </Flex>
                                            <Flex gap="2" justifyContent="flex-end">
                                                <Button iconOnly>
                                                    <Icon data={TrashBin} size={16} />
                                                </Button>
                                                <Button>
                                                    <Icon data={Copy} size={16} />
                                                </Button>
                                                <Button>
                                                    <Icon data={ChartColumn} size={16} />
                                                </Button>
                                                <Button>
                                                    <Icon data={Terminal} size={16} />
                                                </Button>
                                                <Button view="action">
                                                    <Icon data={CirclePlay} size={16} />
                                                    Run
                                                </Button>
                                            </Flex>
                                        </Flex>
                                        <Flex justifyContent="space-between">
                                            <Col s="3">
                                                <Flex
                                                    direction="column"
                                                    gap="1"
                                                    width="fit-content"
                                                >
                                                    <Text>State</Text>
                                                    <Label theme="danger">Stopped</Label>
                                                </Flex>
                                            </Col>
                                            <Col s="3">
                                                <Flex direction="column" gap="1">
                                                    <Text>Region</Text>
                                                    <Text>Moscow-1a</Text>
                                                </Flex>
                                            </Col>
                                            <Col s="4">
                                                <Flex direction="column" gap="1">
                                                    <Text>Hostname</Text>
                                                    <Text color="warning">
                                                        gravity-vm-sunset-1234.gravity.dev
                                                    </Text>
                                                </Flex>
                                            </Col>
                                        </Flex>
                                        <Flex direction="column">
                                            <Text>Image</Text>
                                            <Flex gap="1" alignItems="center">
                                                <Text>
                                                    registry.gravity.dev/gravity-vm-sunset-1234:deployment-01JBM398WEFHSDCG7H4KYFA4GN
                                                </Text>
                                                <ClipboardButton
                                                    size="s"
                                                    text="registry.gravity.dev/gravity-vm-sunset-1234:deployment-01JBM398WEFHSDCG7H4KYFA4GN"
                                                />
                                            </Flex>
                                        </Flex>
                                        <Flex justifyContent="space-between">
                                            <Col s="3">
                                                <Flex direction="column" gap="1">
                                                    <Text>Created</Text>
                                                    <Text>10 days ago</Text>
                                                </Flex>
                                            </Col>
                                            <Col s="3">
                                                <Flex direction="column" gap="1">
                                                    <Text>Updated</Text>
                                                    <Text>5 days ago</Text>
                                                </Flex>
                                            </Col>
                                            <Col s="4">
                                                <Flex direction="column">
                                                    <Text>Version</Text>
                                                    <Flex gap="1" alignItems="center">
                                                        <Text ellipsis>
                                                            01JBM3AZYNNCR250M8XWR1AWTT01JBM3AZYNNCR250M8XWR1AWTT
                                                        </Text>
                                                        <ClipboardButton
                                                            size="s"
                                                            text="01JBM3AZYNNCR250M8XWR1AWTT01JBM3AZYNNCR250M8XWR1AWTT"
                                                        />
                                                    </Flex>
                                                </Flex>
                                            </Col>
                                        </Flex>
                                        <Flex justifyContent="space-between">
                                            <Col s="3">
                                                <Flex direction="column">
                                                    <Flex gap="1">
                                                        <Icon data={Globe} size={14} />
                                                        IP address
                                                    </Flex>
                                                    <Flex gap="1" alignItems="center">
                                                        <Text>fdaa:a:f987:a7b:2d5:a9fb:67c7:2</Text>
                                                        <ClipboardButton
                                                            size="s"
                                                            text="fdaa:a:f987:a7b:2d5:a9fb:67c7:2"
                                                        />
                                                    </Flex>
                                                </Flex>
                                            </Col>
                                            <Col s="3">
                                                <Flex direction="column" gap="1">
                                                    <Flex gap="1">
                                                        <Icon data={Cpu} size={14} />
                                                        CPU
                                                    </Flex>
                                                    <Text>shared-cpu-1x@1024MB</Text>
                                                </Flex>
                                            </Col>
                                            <Col s="4">
                                                <Flex direction="column">
                                                    <Flex gap="1">
                                                        <Icon data={HardDrive} size={14} />
                                                        Disk size
                                                    </Flex>
                                                    <Text>12 GB</Text>
                                                </Flex>
                                            </Col>
                                        </Flex>
                                    </Flex>
                                </Card>
                                <Card className={b('widget-card')}>
                                    <Flex
                                        justifyContent="space-between"
                                        alignItems="center"
                                        style={{
                                            borderBottom:
                                                '1px solid var(--g-color-line-generic-solid)',
                                            paddingBlockEnd: '20px',
                                        }}
                                    >
                                        <Flex direction="column">
                                            <Text variant="subheader-3">Environments</Text>
                                            <Text>Environment variables fro this machine</Text>
                                        </Flex>
                                        <Button view="action">Create new</Button>
                                    </Flex>

                                    <Table
                                        width="max"
                                        data={environmentsData}
                                        columns={environmentColumns}
                                    />
                                </Card>

                                <Card className={b('widget-card')}>
                                    <Flex
                                        direction="column"
                                        style={{
                                            borderBottom:
                                                '1px solid var(--g-color-line-generic-solid)',
                                            paddingBlockEnd: '20px',
                                        }}
                                    >
                                        <Text variant="subheader-3">Functions</Text>
                                        <Text>Functions used for this machine</Text>
                                    </Flex>
                                    <Table
                                        width="max"
                                        data={functionsData}
                                        columns={functionsColumns}
                                    />
                                </Card>
                            </Flex>
                        </Flex>
                    </Flex>
                );
            }}
        </PreviewWrapper>
    );
};
