import {Button, Icon, IconData, Tooltip} from '@gravity-ui/uikit';

export interface TaskActionButtonProps {
    title: string;
    icon: IconData;
}

export function TaskActionButton({icon, title}: TaskActionButtonProps) {
    return (
        <Tooltip content={title}>
            <Button title={title} view="flat-secondary" size="m">
                <Icon data={icon} />
            </Button>
        </Tooltip>
    );
}
