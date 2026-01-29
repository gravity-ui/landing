import {Timeline, TimelineEvent, TimelineMarker, TimelineSection} from '@gravity-ui/timeline';

export const getTimelineItemsRange = <
    Event extends TimelineEvent,
    Marker extends TimelineMarker,
    Section extends TimelineSection,
>(
    timeline: Timeline<Event, Marker, Section>,
) => {
    const {events, markers = [], sections = [], start, end} = timeline.settings;
    const items = [...events, ...markers, ...sections];

    if (!items.length) {
        return {min: start, max: end};
    }

    return items.reduce(
        (acc, item) => {
            if ('from' in item) {
                acc.min = Math.min(acc.min, item.from);
                acc.max = Math.max(acc.max, item.to || item.from);
            }

            if ('time' in item) {
                acc.min = Math.min(acc.min, item.time);
                acc.max = Math.max(acc.max, item.time);
            }

            return acc;
        },
        {min: Infinity, max: -Infinity},
    );
};
