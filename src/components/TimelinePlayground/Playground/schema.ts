import {Monaco} from '@monaco-editor/react';

export function defineTimelineConfigSchema(monaco: Monaco) {
    monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
        validate: true,
        schemaValidation: 'error',
        schemas: [
            {
                uri: 'http://gravity/timeline-playground/schema.json',
                fileMatch: ['*'],
                schema: {
                    type: 'object',
                    properties: {
                        settings: {
                            $ref: '#/definitions/TimelineSettings',
                            description: 'Timeline settings configuration',
                        },
                    },
                    required: ['settings'],
                    definitions: {
                        TimelineSettings: {
                            type: 'object',
                            properties: {
                                start: {
                                    type: 'number',
                                    description:
                                        'Start timestamp of the visible range (Unix timestamp in ms)',
                                },
                                end: {
                                    type: 'number',
                                    description:
                                        'End timestamp of the visible range (Unix timestamp in ms)',
                                },
                                axes: {
                                    type: 'array',
                                    items: {
                                        $ref: '#/definitions/TimelineAxis',
                                    },
                                    description: 'List of timeline axes',
                                },
                                events: {
                                    type: 'array',
                                    items: {
                                        $ref: '#/definitions/TimelineEvent',
                                    },
                                    description: 'List of timeline events',
                                },
                                markers: {
                                    type: 'array',
                                    items: {
                                        $ref: '#/definitions/TimelineMarker',
                                    },
                                    description: 'List of timeline markers (optional)',
                                },
                                sections: {
                                    type: 'array',
                                    items: {
                                        $ref: '#/definitions/TimelineSection',
                                    },
                                    description: 'List of timeline sections (optional)',
                                },
                            },
                            required: ['start', 'end', 'axes', 'events'],
                        },
                        TimelineAxis: {
                            type: 'object',
                            properties: {
                                id: {
                                    type: 'string',
                                    description: 'Unique identifier for the axis',
                                },
                                tracksCount: {
                                    type: 'number',
                                    description: 'Number of tracks in this axis',
                                },
                                top: {
                                    type: 'number',
                                    description: 'Top position offset',
                                },
                                height: {
                                    type: 'number',
                                    description: 'Height of each track in the axis',
                                },
                            },
                            required: ['id'],
                        },
                        TimelineEvent: {
                            type: 'object',
                            properties: {
                                id: {
                                    type: 'string',
                                    description: 'Unique identifier for the event',
                                },
                                from: {
                                    type: 'number',
                                    description:
                                        'Start timestamp of the event (Unix timestamp in ms)',
                                },
                                to: {
                                    type: 'number',
                                    description:
                                        'End timestamp of the event (Unix timestamp in ms)',
                                },
                                axisId: {
                                    type: 'string',
                                    description: 'ID of the axis this event belongs to',
                                },
                                trackIndex: {
                                    type: 'number',
                                    description: 'Index of the track within the axis',
                                },
                                color: {
                                    type: 'string',
                                    description: 'Color of the event (CSS color value)',
                                },
                                name: {
                                    type: 'string',
                                    description: 'Display name of the event (optional)',
                                },
                                selected: {
                                    type: 'boolean',
                                    description: 'Whether the event is selected (optional)',
                                },
                            },
                            required: ['id', 'from', 'axisId'],
                        },
                        TimelineMarker: {
                            type: 'object',
                            properties: {
                                time: {
                                    type: 'number',
                                    description:
                                        'Timestamp position of the marker (Unix timestamp in ms)',
                                },
                                color: {
                                    type: 'string',
                                    description: 'Default color of the marker (CSS color value)',
                                },
                                activeColor: {
                                    type: 'string',
                                    description:
                                        'Color when the marker is active (CSS color value)',
                                },
                                hoverColor: {
                                    type: 'string',
                                    description:
                                        'Color when hovering over the marker (CSS color value)',
                                },
                                label: {
                                    type: 'string',
                                    description: 'Label text displayed on the marker',
                                },
                            },
                            required: ['time'],
                        },
                        TimelineSection: {
                            type: 'object',
                            properties: {
                                id: {
                                    type: 'string',
                                    description: 'Unique identifier for the section',
                                },
                                from: {
                                    type: 'number',
                                    description:
                                        'Start timestamp of the section (Unix timestamp in ms)',
                                },
                                to: {
                                    type: 'number',
                                    description:
                                        'End timestamp of the section (Unix timestamp in ms, optional - extends to end if not set)',
                                },
                                color: {
                                    type: 'string',
                                    description:
                                        'Background color of the section (CSS color value)',
                                },
                                hoverColor: {
                                    type: 'string',
                                    description: 'Background color when hovering (CSS color value)',
                                },
                            },
                            required: ['id', 'from'],
                        },
                    },
                },
            },
        ],
    });
}
