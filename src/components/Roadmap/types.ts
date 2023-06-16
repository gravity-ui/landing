export enum RoadmapTaskStatus {
    InProgress = 'InProgress',
    Completed = 'Completed',
    Planned = 'Planned',
}

export type RoadmapTask = {
    title: string;
    status: RoadmapTaskStatus;
    url?: string;
    completedDate?: string;
};
