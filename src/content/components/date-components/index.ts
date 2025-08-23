import sortBy from 'lodash/sortBy';

import {getLibConfigById} from '../../../libs/config';
import {Component, Lib} from '../types';

import {calendarConfig} from './Calendar';
import {dateFieldConfig} from './DateField';
import {datePickerConfig} from './DatePicker';
import {rangeCalendarConfig} from './RangeCalendar';
import {relativeDateFieldConfig} from './RelativeDateField';
import {relativeDatePickerConfig} from './RelativeDatePicker';

const config = getLibConfigById('date-components');

const components: Component[] = [
    calendarConfig,
    dateFieldConfig,
    datePickerConfig,
    rangeCalendarConfig,
    relativeDateFieldConfig,
    relativeDatePickerConfig,
];

export const dateComponents: Lib = {
    id: config.id,
    title: config.title,
    primary: config.primary,
    components: sortBy(components, 'title'),
};
