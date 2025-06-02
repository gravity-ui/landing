import {Button, Divider, Flex} from '@gravity-ui/uikit';
import {useMemo} from 'react';

type ActionGroupProps = {
    actions: {icon: JSX.Element; action?: VoidFunction}[];
};
export const ActionGroup = ({actions}: ActionGroupProps) => {
    const actionList = useMemo(() => {
        const result: React.ReactNode[] = [];
        actions.forEach((action, i, actionsArr) => {
            if (i === actionsArr.length - 1) {
                result.push(<Divider orientation="vertical" key={'divider'} />);
            }
            result.push(
                <Button view="flat" size="m" onClick={action.action} key={'button' + i}>
                    <Button.Icon>{action.icon}</Button.Icon>
                </Button>,
            );
        });
        return result;
    }, [actions]);
    return <Flex gap={2}>{actionList}</Flex>;
};
