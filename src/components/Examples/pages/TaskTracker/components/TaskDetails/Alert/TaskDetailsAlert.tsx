import {Lock} from '@gravity-ui/icons';
import {Alert, Icon} from '@gravity-ui/uikit';

export function TaskDetailsAlert() {
    return (
        <Alert
            icon={<Icon data={Lock} />}
            theme="normal"
            view="filled"
            corners="square"
            message="This task is private to you, please take care"
        />
    );
}
