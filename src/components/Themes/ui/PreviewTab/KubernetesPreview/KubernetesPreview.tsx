import {CirclePlay, Cpu, Globe, HardDrive} from '@gravity-ui/icons';
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
    Text,
} from '@gravity-ui/uikit';
import {DropdownMenuComponent} from 'src/content/components/uikit/DropdownMenu/DropdownMenuComponent';
import {block} from 'src/utils';

import './KubernetesPreview.scss';

const b = block('kubernetes-preview');

const breadCrumbItems = ['All services', 'Personal VM', 'Gravity-vm-sunset-1234'];

export const KubernetesPreview = () => {
    return (
        <Flex direction="column" grow gap="10">
            <ActionBar>
                <ActionBar.Section type="primary">
                    <ActionBar.Group>
                        <ActionBar.Item className={b('grow')}>
                            <Breadcrumbs showRoot>
                                {breadCrumbItems.map((item) => (
                                    <Breadcrumbs.Item key={item}>{item}</Breadcrumbs.Item>
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
                    </ActionBar.Group>
                </ActionBar.Section>
            </ActionBar>
            <Flex gap="5">
                <Menu />
                <Flex direction="column" gap="4">
                    <Alert
                        theme="info"
                        title={
                            <Text as="span">
                                Your app is running in one machine. You can scale and run your app
                                on more Machines to ensure high availability with just one command:{' '}
                                <strong>gravity scale count 2</strong>
                            </Text>
                        }
                    />
                    <Flex gap="5">
                        <Card className={b('widget-card')}>
                            <Flex direction="column" gap="4">
                                <Flex grow="1" alignItems="center" justifyContent="space-between">
                                    <Breadcrumbs style={{flexGrow: 1}}>
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
                                </Flex>
                            </Flex>
                        </Card>
                        <Card className={b('widget-card')}>
                            <Flex direction="column" gap="4">
                                <Flex grow="1" alignItems="center" justifyContent="space-between">
                                    <Breadcrumbs style={{flexGrow: 1}}>
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
                                </Flex>
                            </Flex>
                        </Card>
                    </Flex>
                    <Card className={b('widget-card')}>
                        <Flex direction="column" gap="5">
                            <Flex
                                direction="column"
                                style={{
                                    borderBottom: '1px solid var(--g-color-line-generic-solid)',
                                    paddingBlockEnd: '20px',
                                }}
                            >
                                <Text variant="subheader-3">Gravity-vm-sunset-1234</Text>
                                <Text>
                                    Description and general information about the application
                                </Text>
                            </Flex>
                            <Flex justifyContent="space-between">
                                <Col s="3">
                                    <Flex direction="column" gap="1" width="fit-content">
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
                </Flex>
            </Flex>
        </Flex>
    );
};
