import {Button, Flex, Icon, Link, Text} from '@gravity-ui/uikit';

import figmaIcon from '../../../../assets/icons/figma-fill.svg';
import {block} from '../../../../utils';

const b = block('examples-task-tracker');
import './TaskTracker.scss';

type TaskTrackerProps = {};

// @todo-opensourcenight Make task-tracker page
// https://www.figma.com/design/MnKaEyxPs9Zeyhg6pmf4uX/OS-Night-Design-(Published)?node-id=1-20359&t=cBOGiZgT0jwhnCOY-4
export const TaskTracker: React.FC<TaskTrackerProps> = () => {
    return (
        <div className={b()}>
            <main className={b('main')}>
                <Text variant="code-3">
                    <Flex direction="row" justifyContent="space-between">
                        <span>@todo-opensourcenight make task-tracker page</span>
                        <Button
                            key="figma"
                            className={b('button')}
                            view="action"
                            size="xl"
                            href={
                                'https://www.figma.com/design/MnKaEyxPs9Zeyhg6pmf4uX/OS-Night-Design-(Published)?node-id=1-20359&t=cBOGiZgT0jwhnCOY-4'
                            }
                            target="_blank"
                        >
                            <Icon className={b('button-icon')} data={figmaIcon} size={16} />
                            <span>Open Figma</span>
                        </Button>
                    </Flex>
                </Text>
            </main>
            <footer className={b('footer')}>
                <Link href={'/examples'}>Open in Examples page</Link>
                <Link href={'/examples/task-tracker'}>Open in Separate page</Link>
            </footer>
        </div>
    );
};
