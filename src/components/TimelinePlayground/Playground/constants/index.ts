import {TimeLineConfig, TimelineEvent, TimelineMarker, TimelineSection} from '@gravity-ui/timeline';

export const LINE_HEIGHT = 20;

export const initialState: TimeLineConfig<TimelineEvent, TimelineMarker, TimelineSection> = {
    settings: {
        start: 1739537126347,
        end: 1739537186347,
        axes: [
            {
                id: 'main',
                tracksCount: 6,
                top: 0,
                height: LINE_HEIGHT,
            },
        ],
        events: [
            {
                id: 'test2',
                from: 1739537144007,
                to: 1739537166347,
                axisId: 'main',
                trackIndex: 1,
                color: 'rgb(161, 193, 129)',
            },
            {
                id: 'test3',
                from: 1739537126347,
                to: 1739537150000,
                axisId: 'main',
                trackIndex: 2,
                color: 'rgb(254, 127, 45)',
            },
            {
                id: 'test4',
                from: 1739537146347,
                to: 1739537160000,
                axisId: 'main',
                trackIndex: 2,
                color: 'rgb(45,181,254)',
            },
            {
                id: 'test5',
                from: 1739537150000,
                to: 1739537170000,
                axisId: 'main',
                trackIndex: 3,
                color: 'rgb(87, 156, 135)',
            },
            {
                id: 'test6',
                from: 1739537170000,
                to: 1739537186347,
                axisId: 'main',
                trackIndex: 4,
                color: 'rgb(11, 180, 193)',
            },
        ],
        sections: [
            {
                id: 'planning-phase',
                from: 1739537126347,
                to: 1739537145000,
                color: 'rgba(63, 81, 181, 0.2)', // Indigo - planning
                hoverColor: 'rgba(63, 81, 181, 0.3)',
            },
            {
                id: 'development-phase',
                from: 1739537145000,
                to: 1739537172000,
                color: 'rgba(33, 150, 243, 0.2)', // Blue - development
                hoverColor: 'rgba(33, 150, 243, 0.3)',
            },
            {
                id: 'testing-phase',
                from: 1739537172000,
                to: 1739537182000,
                color: 'rgba(255, 152, 0, 0.2)', // Orange - testing
                hoverColor: 'rgba(255, 152, 0, 0.3)',
            },
            {
                id: 'deployment-phase',
                from: 1739537182000,
                // Extends to end
                color: 'rgba(76, 175, 80, 0.2)', // Green - deployment
                hoverColor: 'rgba(76, 175, 80, 0.3)',
            },
        ],
        markers: [
            {
                time: 1739537145000,
                color: 'rgb(63, 81, 181)',
                activeColor: 'rgb(92, 107, 192)',
                hoverColor: 'rgb(57, 73, 171)',
                label: 'Dev Start',
            },
            {
                time: 1739537172000,
                color: 'rgb(255, 152, 0)',
                activeColor: 'rgb(255, 193, 7)',
                hoverColor: 'rgb(255, 87, 34)',
                label: 'Testing',
            },
            {
                time: 1739537182000,
                color: 'rgb(76, 175, 80)',
                activeColor: 'rgb(102, 187, 106)',
                hoverColor: 'rgb(67, 160, 71)',
                label: 'Deploy',
            },
        ],
    },
    viewConfiguration: {
        ruler: {
            color: {
                primaryLevel: 'white',
                secondaryLevel: 'white',
                textOutlineColor: 'transparent',
            },
        },
        hideRuler: false,
    },
};
