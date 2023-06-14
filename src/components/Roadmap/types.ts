export enum RoadmapEventStatus {
    IN_PROGRESS = 'IN_PROGRESS',
    COMPLETED = 'COMPLETED',
    PLANNED = 'PLANNED',
}

export type RoadmapEvent = {
    title: string;
    status: RoadmapEventStatus;
    url?: string;
    completedDate?: string;
};
