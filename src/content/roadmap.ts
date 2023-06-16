import {RoadmapEvent, RoadmapEventStatus} from '../components/Roadmap';

export const roadmapEvents: RoadmapEvent[] = [
    {
        title: 'А library for rendering neat and functional forms described by JSON schema',
        status: RoadmapEventStatus.COMPLETED,
    },
    {
        title: 'A library with a wide range of easy-to-use components for creating interfaces of any complexity',
        status: RoadmapEventStatus.COMPLETED,
    },
    {
        title: '<b>Icons:</b> new section of Gravity site with search and preview',
        status: RoadmapEventStatus.IN_PROGRESS,
    },
    {
        title: '<b>Date-components:</b> new library for working with date and time',
        status: RoadmapEventStatus.IN_PROGRESS,
    },
    {
        title: '<b>UIKit:</b> Extended style customization options and themes support',
        status: RoadmapEventStatus.PLANNED,
    },
    {
        title: '<b>Docs:</b> Improved components documentation',
        status: RoadmapEventStatus.PLANNED,
    },
    {
        title: '<b>Design:</b> Public Figma templates and guidelines',
        status: RoadmapEventStatus.PLANNED,
    },
];
