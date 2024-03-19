import {TFunction} from 'i18next';

import {RoadmapTask, RoadmapTaskStatus} from '../components/Roadmap';

export const getRoadmapTasks = (t: TFunction): RoadmapTask[] => [
    {
        title: t('home:roadmap_items_item1'),
        status: RoadmapTaskStatus.Completed,
    },
    {
        title: t('home:roadmap_items_item2'),
        status: RoadmapTaskStatus.Completed,
    },
    {
        title: t('home:roadmap_items_item3'),
        status: RoadmapTaskStatus.InProgress,
    },
    {
        title: t('home:roadmap_items_item4'),
        status: RoadmapTaskStatus.InProgress,
    },
    {
        title: t('home:roadmap_items_item5'),
        status: RoadmapTaskStatus.InProgress,
    },
    {
        title: t('home:roadmap_items_item6'),
        status: RoadmapTaskStatus.Completed,
    },
    {
        title: t('home:roadmap_items_item7'),
        status: RoadmapTaskStatus.InProgress,
    },
    {
        title: t('home:roadmap_items_item8'),
        status: RoadmapTaskStatus.Planned,
    },
    {
        title: t('home:roadmap_items_item9'),
        status: RoadmapTaskStatus.Planned,
    },
    {
        title: t('home:roadmap_items_item10'),
        status: RoadmapTaskStatus.Planned,
    },
    {
        title: t('home:roadmap_items_item11'),
        status: RoadmapTaskStatus.Planned,
    },
];
