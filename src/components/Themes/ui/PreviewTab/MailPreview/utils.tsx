import {dateTimeParse} from '@gravity-ui/date-utils';

const now = dateTimeParse(Date.now());

const getTime = (hoursAgo: number) => now?.subtract(hoursAgo, 'hours');

export const humanReadableDateFromNow = (hoursAgo: number) => {
    return getTime?.(hoursAgo)?.from(now, true) || '';
};

const DATE_TIME_FORMAT = 'MMM D, YYYY, H:mm';

export const humanReadableDate = (hoursAgo: number) => {
    return getTime?.(hoursAgo)?.format(DATE_TIME_FORMAT) || '';
};
