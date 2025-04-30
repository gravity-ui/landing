import {Flame, House, Rocket} from '@gravity-ui/icons';
import {Breadcrumbs, Flex, Text} from '@gravity-ui/uikit';

export const BreadcrumbsCustomIconExample = () => {
    return (
        <Breadcrumbs>
            <Breadcrumbs.Item>
                <Flex alignItems="center" gap={1}>
                    <House /> uikit
                </Flex>
            </Breadcrumbs.Item>
            <Breadcrumbs.Item>
                <Flex alignItems="center" gap={1}>
                    <Flame /> components
                </Flex>
            </Breadcrumbs.Item>
            <Breadcrumbs.Item>
                <Flex alignItems="center" gap={1}>
                    <Rocket style={{minWidth: 16}} />
                    <Text ellipsis variant="inherit">
                        Breadcrumbs
                    </Text>
                </Flex>
            </Breadcrumbs.Item>
        </Breadcrumbs>
    );
};
