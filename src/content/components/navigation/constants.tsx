import {Bell, Flag, ListCheck, Plus} from '@gravity-ui/icons';
import {MenuItem} from '@gravity-ui/navigation';

function renderTag(tag: string) {
    return (
        <div style={{fontWeight: 500, color: 'var(--g-color-text-positive)'}}>
            {' '}
            {tag.toUpperCase()}
        </div>
    );
}

export const menuItems: MenuItem[] = [
    {
        id: 'overview',
        title: 'Overview',
        icon: Flag,
        current: true,
    },
    {
        id: 'operations',
        title: 'Operations',
        icon: ListCheck,
        rightAdornment: renderTag('New'),
    },
    {
        id: 'divider',
        title: '-',
        type: 'divider',
    },
    {
        id: 'notifications',
        title: 'Notifications',
        icon: Bell,
    },
    {
        id: 'action2',
        title: 'Create smth',
        type: 'action',
        icon: Plus,
        afterMoreButton: true,
        onItemClick({id, title, current}) {
            alert(JSON.stringify({id, title, current}));
        },
    },
];
