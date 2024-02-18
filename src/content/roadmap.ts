import {TFunction} from 'i18next';

import {RoadmapTask, RoadmapTaskStatus} from '../components/Roadmap';

export const getRoadmapTasks = (t: TFunction): RoadmapTask[] => [
    {
        title: t('roadmap.items.item1'),
        status: RoadmapTaskStatus.Completed,
    },
    {
        title: t('roadmap.items.item2'),
        status: RoadmapTaskStatus.InProgress,
    },
    {
        title: t('roadmap.items.item3'),
        status: RoadmapTaskStatus.InProgress,
    },
    {
        title: t('roadmap.items.item4'),
        status: RoadmapTaskStatus.InProgress,
    },
    {
        title: t('roadmap.items.item5'),
        status: RoadmapTaskStatus.InProgress,
    },
    {
        title: t('roadmap.items.item6'),
        status: RoadmapTaskStatus.InProgress,
    },
    {
        title: t('roadmap.items.item7'),
        status: RoadmapTaskStatus.InProgress,
    },
    {
        title: t('roadmap.items.item8'),
        status: RoadmapTaskStatus.Planned,
    },
    {
        title: t('roadmap.items.item9'),
        status: RoadmapTaskStatus.Planned,
    },
    {
        title: t('roadmap.items.item10'),
        status: RoadmapTaskStatus.Planned,
    },
    {
        title: t('roadmap.items.item11'),
        status: RoadmapTaskStatus.Planned,
    },
];
