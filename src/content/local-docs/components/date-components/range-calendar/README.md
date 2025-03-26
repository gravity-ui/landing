<!--GITHUB_BLOCK-->

# RangeCalendar

<!--/GITHUB_BLOCK-->

```tsx
import {RangeCalendar} from '@gravity-ui/date-components';
```

`RangeCalendar` is a powerful, flexible, and user-friendly UI component designed for selecting a range of dates. Built with React, it combines the functionality of a calendar and a date range picker, making it an ideal choice for applications that require users to input a start and end date. It can be controlled if you set `value` property. Or it can be uncontrolled if you don't set any value, but in this case you can manage the initial state with optional property `defaultValue`. Component is uncontrolled by default.

### Useful addition

To set dates in the right format you may need to include additional helpers from [Date Utils library](https://gravity-ui.com/libraries/date-utils)

```tsx
import {dateTimeParse, dateTime} from '@gravity-ui/date-utils';
```

<!--LANDING_BLOCK

> [!NOTE]
> Row with "Selected range: ..." is not a part of the component. It was added to examples only for clarity.

LANDING_BLOCK-->

## Size

To control the size of the `RangeCalendar` use the `size` property. Default size is `m`.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<RangeCalendar size="m" />
<RangeCalendar size="l" />
<RangeCalendar size="xl" />
`}
>
    <DateComponentsExamples.RangeCalendarExample size="m" />
    <DateComponentsExamples.RangeCalendarExample size="l" />
    <DateComponentsExamples.RangeCalendarExample size="xl" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<RangeCalendar size="m" />
<RangeCalendar size="l" />
<RangeCalendar size="xl" />
```

<!--/GITHUB_BLOCK-->

## Value

### Min and max value

The `minValue` property allows you to specify the earliest date and time that can be entered by the user. Conversely, the `maxValue` property specifies the latest date and time that can be entered. All other values will be disabled for user.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<RangeCalendar minValue={dateTimeParse('01.01.2024')} maxValue={dateTimeParse('01.01.2025')} />
`}
>
    <DateComponentsExamples.RangeCalendarExample minValue={'01.01.2024'} maxValue={'01.01.2025'}/>
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<RangeCalendar minValue={dateTimeParse('01.01.2024')} maxValue={dateTimeParse('01.01.2025')} />
```

<!--/GITHUB_BLOCK-->

## Mode

Defines the time interval that `RangeCalendar` should display. With `mode` you can choose it in controlled way. For uncontrolled way you don't need to specify any value. Also you can set the initial mode in uncontrolled way with `defaultMode` prop.

`days` - default mode for `RangeCalendar`. It shows days in month.

`months` - shows months in year

`quarters` - shows quarters by years (not available as value in `defaultMode`)

`years` - shows several years for select

You can limit enabled modes by using prop `modes`.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<RangeCalendar defaultMode="months"/>
`}
>
    <DateComponentsExamples.RangeCalendarExample defaultMode="months" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<RangeCalendar defaultMode="months" />
```

<!--/GITHUB_BLOCK-->

## States

### Disabled

The state of the `RangeCalendar` where you don't want the user to be able to interact with the component.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<RangeCalendar
  disabled={true}
  defaultValue={{start: dateTime().add({days: 2}), end: dateTime().subtract({days: 2})}}
/>
`}
>
    <DateComponentsExamples.RangeCalendarWithDefaultValueExample disabled={true} />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<RangeCalendar
  disabled={true}
  defaultValue={{start: dateTime().add({days: 2}), end: dateTime().subtract({days: 2})}}
/>
```

<!--/GITHUB_BLOCK-->

### Readonly

`readOnly` is a boolean attribute that, when set to true, makes the `RangeCalendar` component immutable to the user. This means that while the input will display its current value, users will not be able to change it.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<RangeCalendar
  readOnly={true}
  defaultValue={{start: dateTime().add({days: 2}), end: dateTime().subtract({days: 2})}}
/>
`}
>
    <DateComponentsExamples.RangeCalendarWithDefaultValueExample readOnly={true} />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<RangeCalendar
  readOnly={true}
  defaultValue={{start: dateTime().add({days: 2}), end: dateTime().subtract({days: 2})}}
/>
```

<!--/GITHUB_BLOCK-->

## Focused value

Allows to select the date that `RangeCalendar` view is focused on. If you need it to be controlled you shoud use `focusedValue` prop. You can set the initial focused value for uncontrolled component with optional prop `defaultFocusedValue`.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<RangeCalendar
  defaultFocusedValue={dateTimeParse('01.01.2020')} defaultValue={{start: dateTime().add({days: 2}), end: dateTime().subtract({days: 2})}}
/>
`}
>
    <DateComponentsExamples.RangeCalendarWithDefaultValueExample defaultFocusedValue={'01.01.2020'} />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<RangeCalendar
  defaultFocusedValue={dateTimeParse('01.01.2020')}
  defaultValue={{start: dateTime().add({days: 2}), end: dateTime().subtract({days: 2})}}
/>
```

<!--/GITHUB_BLOCK-->

## Time zone

`timeZone` is the property to set the time zone of the value in the input. [Learn more about time zones](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List)

## Properties

| Name                                  | Description                                                                                                          |                               Type                               |                           Default                           |
| :------------------------------------ | :------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------: | :---------------------------------------------------------: |
| aria-describedby                      | The control's `aria-describedby` attribute                                                                           |                             `string`                             |                                                             |
| aria-details                          | The control's `aria-details` attribute                                                                               |                             `string`                             |                                                             |
| aria-label                            | The control's `aria-label` attribute                                                                                 |                             `string`                             |                                                             |
| aria-labelledby                       | The control's `aria-labelledby` attribute                                                                            |                             `string`                             |                                                             |
| autoFocus                             | The control's `autofocus` attribute                                                                                  |                            `boolean`                             |                                                             |
| className                             | The control's wrapper class name                                                                                     |                             `string`                             |                                                             |
| [defaultFocusedValue](#focused-value) | The date that is focused when the calendar first mounts (uncontrolled)                                               |                            `DateTime`                            |                                                             |
| [defaultMode](#mode)                  | Initial mode to show in calendar                                                                                     |                `days` `months` `quarters` `years`                |                                                             |
| [defaultValue](#value)                | Sets the initial value for uncontrolled component.                                                                   |                      `RangeValue<DateTime>`                      |                                                             |
| [disabled](#disabled)                 | Indicates that the user cannot interact with the control                                                             |                            `boolean`                             |                           `false`                           |
| [focusedValue](#focused-value)        | Set the default view of uncontrolled component which includes this value                                             |                        `DateTime` `null`                         |                                                             |
| id                                    | The control's `id` attribute                                                                                         |                             `string`                             |                                                             |
| isDateUnavailable                     | Callback that is called for each date of the calendar. If it returns true, then the date is unavailable.             |                 `((date: DateTime) => boolean)`                  |                                                             |
| isWeekend                             | Callback that is called for each date of the calendar. If it returns true, then the date is weekend.                 |                 `((date: DateTime) => boolean)`                  |                                                             |
| [maxValue](#min-and-max-value)        | The maximum allowed date that a user may select.                                                                     |                            `DateTime`                            |                                                             |
| [minValue](#min-and-max-value)        | The minimum allowed date that a user may select.                                                                     |                            `DateTime`                            |                                                             |
| [mode](#mode)                         | Defines the time interval that `RangeCalendar` should display in colttrolled way.                                    |                `days` `months` `quarters` `years`                |                                                             |
| modes                                 | Modes available to user                                                                                              |         `Partial<Record<RangeCalendarLayout, boolean>>`          | `{days: true, months: true, quarters: false, years: true }` |
| onBlur                                | Fires when the control lost focus. Provides focus event as a callback's argument                                     |          `((e: FocusEvent<Element, Element>) => void)`           |                                                             |
| onFocus                               | Fires when the control gets focus. Provides focus event as a callback's argument                                     |          `((e: FocusEvent<Element, Element>) => void)`           |                                                             |
| onFocusUpdate                         | Fires when the control's focused date changes.                                                                       |                   `((date: DateTime) => void)`                   |                                                             |
| onUpdate                              | Fires when the value is changed.                                                                                     |                   `((value: DateTime) => void`                   |                                                             |
| onUpdateMode                          | Fires when the mode is changed.                                                                                      | `((value: 'days' \| 'months' \| 'quarters' \| 'years' ) => void` |                                                             |
| [readOnly](#readonly)                 | Whether the calendar value is immutable.                                                                             |                            `boolean`                             |                           `false`                           |
| [size](#size)                         | The size of the control                                                                                              |                        `"m"` `"l"` `"xl"`                        |                            `"m"`                            |
| style                                 | Sets inline style for the element.                                                                                   |                         `CSSProperties`                          |                                                             |
| [timeZone](#time-zone)                | Sets the time zone. [Learn more about time zones](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List) |                             `string`                             |                                                             |
| [value](#calendar)                    | The value of the control                                                                                             |                  `RangeValue<DateTime>` `null`                   |                                                             |
