import {Plus} from '@gravity-ui/icons';
import {Button, Icon} from '@gravity-ui/uikit';

export function AddTaskCollaboratorButton() {
    return (
        <Button view="flat-secondary" size="m">
            Collaborators
            <Icon data={Plus} />
        </Button>
    );
}
