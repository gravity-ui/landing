import {Plus} from '@gravity-ui/icons';
import {Button, Flex, Icon, Label, Text, User} from '@gravity-ui/uikit';
import {Switch} from 'landing-uikit';

import avatar from '../../../assets/avatar.png';

import {TaskInfo, TaskInfoItem} from './Info';
import './TaskDetailsBody.scss';

export function TaskDetailsBody() {
    return (
        <Flex direction="column" gap="4" className="task-details-body">
            <Text variant="subheader-2">Consider updating your project progress</Text>
            <TaskInfo>
                <TaskInfoItem title="Assignee">
                    <User
                        name="Blake"
                        avatar={{
                            imgUrl: avatar.src,
                        }}
                    />
                </TaskInfoItem>
                <TaskInfoItem title="Due date"></TaskInfoItem>
                <TaskInfoItem title="Projects">
                    <Button view="flat-secondary" size="s">
                        <Icon data={Plus} />
                        Add project
                    </Button>
                </TaskInfoItem>
                <TaskInfoItem title="Label">
                    <Label size="s" theme="info" onCloseClick={() => {}}>
                        Sales
                    </Label>
                    <Button view="flat-secondary" size="s">
                        <Icon data={Plus} />
                    </Button>
                </TaskInfoItem>
                <TaskInfoItem title="Private task">
                    <Switch size="m" />
                </TaskInfoItem>
                <TaskInfoItem title="Description">
                    <Text variant="body-1">
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has
                        roots in a piece of classical Latin literature from 45 BC, making it over
                        2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
                        College in Virginia, looked up one of the more obscure Latin words,
                        consectetur, from a Lorem Ipsum passage, and going through the cites of the
                        word in classical literature, discovered the undoubtable source. Lorem Ipsum
                        comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
                        (The Extremes of Good and Evil) by Cicero, written in 45 BC.
                    </Text>
                </TaskInfoItem>
            </TaskInfo>
        </Flex>
    );
}
