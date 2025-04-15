import {dateTimeParse} from '@gravity-ui/date-utils';

const now = dateTimeParse(Date.now());

export const humanReadableDateFromNow = (hoursAgo: number) => {
    return now?.subtract(hoursAgo, 'hours').from(now, true) || '';
};
