import {TasksListItem} from './Item';

const data: {
    id: string;
    title: string;
    isActive?: boolean;
    labels: {
        title: string;
        theme:
            | 'normal'
            | 'info'
            | 'danger'
            | 'warning'
            | 'success'
            | 'utility'
            | 'unknown'
            | 'clear';
    }[];
}[] = [
    {
        id: 'task-1',
        title: 'Consider updating your project progress',
        labels: [
            {
                title: 'Sales',
                theme: 'info',
            },
        ],
        isActive: true,
    },
    {
        id: 'task-2',
        title: "Consider delegating Gearóid's tasks",
        labels: [
            {
                title: 'H2 Mark',
                theme: 'warning',
            },
        ],
    },
    {
        id: 'task-3',
        title: 'Consider updating your project progress',
        labels: [
            {
                title: 'H2 Mark',
                theme: 'warning',
            },
        ],
    },
    {
        id: 'task-4',
        title: 'Progress on team goals and objectives',
        labels: [
            {
                title: 'H2 Mark',
                theme: 'warning',
            },
        ],
    },
    {
        id: 'task-5',
        title: 'Consider updating your project progress',
        labels: [
            {
                title: 'H2 Mark',
                theme: 'warning',
            },
        ],
    },
    {
        id: 'task-6',
        title: 'Progress on team goals and objectives',
        labels: [
            {
                title: 'Customer',
                theme: 'success',
            },
        ],
    },
    {
        id: 'task-7',
        title: 'Progress on team goals and objectives',
        labels: [
            {
                title: 'Customer',
                theme: 'success',
            },
        ],
    },
    {
        id: 'task-8',
        title: 'Consider updating your project progress',
        labels: [
            {
                title: 'Customer',
                theme: 'success',
            },
        ],
    },
    {
        id: 'task-9',
        title: 'New customer shout out',
        labels: [
            {
                title: 'Sales',
                theme: 'info',
            },
        ],
    },
    {
        id: 'task-10',
        title: 'Meet with stakeholders',
        labels: [
            {
                title: 'Sales',
                theme: 'info',
            },
        ],
    },
    {
        id: 'task-11',
        title: 'Meeting with sales department',
        labels: [
            {
                title: 'Sales',
                theme: 'info',
            },
        ],
    },
    {
        id: 'task-12',
        title: 'Consider updating your project progress',
        labels: [
            {
                title: 'Customer',
                theme: 'success',
            },
        ],
    },
    {
        id: 'task-13',
        title: 'Aracte camarian',
        labels: [
            {
                title: 'Customer',
                theme: 'success',
            },
        ],
    },
];

export function TasksListBody() {
    return (
        <div>
            {data.map((item, i) => (
                <TasksListItem
                    key={item.id}
                    title={item.title}
                    labels={item.labels}
                    isActive={item.isActive}
                    isLast={i === data.length - 1}
                />
            ))}
        </div>
    );
}
