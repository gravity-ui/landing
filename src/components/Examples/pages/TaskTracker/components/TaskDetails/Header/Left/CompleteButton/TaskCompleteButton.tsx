import {Check} from '@gravity-ui/icons';
import {Button, Icon} from '@gravity-ui/uikit';

export function TaskCompleteButton() {
    return (
        <Button view="outlined-action" size="m">
            <Icon data={Check} />
            Mark Complete
        </Button>
    );
}
