<!--GITHUB_BLOCK-->

# Calendar

<!--/GITHUB_BLOCK-->

```tsx
import {Calendar} from '@gravity-ui/date-components';
```

`Calendar` is a flexible, user-friendly calendar component for React applications. It allows users to view, select, and manage dates with ease. Ideal for event scheduling, booking systems, and any application where date selection is essential. It can be controlled if you set `value` property. Or it can be uncontrolled if you don't set any value, but in this case you can manage the initial state with optional property `defaultValue`. Component is uncontrolled by default.

### Useful addition

To set dates in the right format you may need to include additional helpers from [Date Utils library](https://gravity-ui.com/libraries/date-utils)

```tsx
import {dateTimeParse} from '@gravity-ui/date-utils';
```

## Size

To control the size of the `Calendar` use the `size` property. Default size is `m`.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<Calendar size="m" />
<Calendar size="l" />
<Calendar size="xl" />
`}
>
    <DateComponents.Calendar size="m" />
    <DateComponents.Calendar size="l" />
    <DateComponents.Calendar size="xl" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Calendar size="m" />
<Calendar size="l" />
<Calendar size="xl" />
```

<!--/GITHUB_BLOCK-->

## Value

### Min and max value

The `minValue` property allows you to specify the earliest date and time that can be entered by the user. Conversely, the `maxValue` property specifies the latest date and time that can be entered. All other values will be disabled for user.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<Calendar minValue={dateTimeParse('01.01.2024')} maxValue={dateTimeParse('01.01.2025')} />
`}
>
    <DateComponentsExamples.CalendarExample minValue={'01.01.2024'} maxValue={'01.01.2025'}/>
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Calendar minValue={dateTimeParse('01.01.2024')} maxValue={dateTimeParse('01.01.2025')} />
```

<!--/GITHUB_BLOCK-->

## Mode

Defines the time interval that `Calendar` should display. With `mode` you can choose it in controlled way. For uncontrolled way you don't need to specify any value. Also you can set the initial mode in uncontrolled way with `defaultMode` prop.

`days` - default mode for `Calendar`. It shows days in month.

`months` - shows months in year

`quarters` - shows quarters by years (not available as value in `defaultMode`)

`years` - shows several years for select

You can limit enabled modes by using prop `modes`.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<Calendar defaultMode="months"/>
`}
>
    <DateComponents.Calendar defaultMode="months" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Calendar defaultMode="months" />
```

<!--/GITHUB_BLOCK-->

## States

### Disabled

The state of the `Calendar` where you don't want the user to be able to interact with the component.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<Calendar disabled={true} />
`}
>
    <DateComponents.Calendar disabled={true} />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Calendar disabled={true} />
```

<!--/GITHUB_BLOCK-->

### Readonly

`readOnly` is a boolean attribute that, when set to true, makes the `Calendar` component immutable to the user. This means that while the input will display its current value, users will not be able to change it.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<Calendar readOnly={true} />
`}
>
    <DateComponents.Calendar readOnly={true} />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Calendar readOnly={true} />
```

<!--/GITHUB_BLOCK-->

## Focused value

Allows to select the date that `Calendar` view is focused on. If you need it to be controlled you shoud use `focusedValue` prop. You can set the initial focused value for uncontrolled component with optional prop `defaultFocusedValue`.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<Calendar defaultFocusedValue={dateTimeParse('01.01.2020')} />
`}
>
    <DateComponentsExamples.CalendarExample defaultFocusedValue={'01.01.2020'} />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Calendar defaultFocusedValue={dateTimeParse('01.01.2020')} />
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
| [defaultValue](#value)                | Sets the initial value for uncontrolled component.                                                                   |                            `DateTime`                            |                                                             |
| [disabled](#disabled)                 | Indicates that the user cannot interact with the control                                                             |                            `boolean`                             |                           `false`                           |
| [focusedValue](#focused-value)        | Set the default view of uncontrolled component which includes this value                                             |                        `DateTime` `null`                         |                                                             |
| id                                    | The control's `id` attribute                                                                                         |                             `string`                             |                                                             |
| isDateUnavailable                     | Callback that is called for each date of the calendar. If it returns true, then the date is unavailable.             |                 `((date: DateTime) => boolean)`                  |                                                             |
| isWeekend                             | Callback that is called for each date of the calendar. If it returns true, then the date is weekend.                 |                 `((date: DateTime) => boolean)`                  |                                                             |
| [maxValue](#min-and-max-value)        | The maximum allowed date that a user may select.                                                                     |                            `DateTime`                            |                                                             |
| [minValue](#min-and-max-value)        | The minimum allowed date that a user may select.                                                                     |                            `DateTime`                            |                                                             |
| [mode](#mode)                         | Defines the time interval that `Calendar` should display in colttrolled way.                                         |                `days` `months` `quarters` `years`                |                                                             |
| modes                                 | Modes available to user                                                                                              |            `Partial<Record<CalendarLayout, boolean>>`            | `{days: true, months: true, quarters: false, years: true }` |
| onBlur                                | Fires when the control lost focus. Provides focus event as a callback's argument                                     |          `((e: FocusEvent<Element, Element>) => void)`           |                                                             |
| onFocus                               | Fires when the control gets focus. Provides focus event as a callback's argument                                     |          `((e: FocusEvent<Element, Element>) => void)`           |                                                             |
| onFocusUpdate                         | Fires when the control's focused date changes.                                                                       |                   `((date: DateTime) => void)`                   |                                                             |
| onUpdate                              | Fires when the value is changed.                                                                                     |                   `((value: DateTime) => void`                   |                                                             |
| onUpdateMode                          | Fires when the mode is changed.                                                                                      | `((value: 'days' \| 'months' \| 'quarters' \| 'years' ) => void` |                                                             |
| [readOnly](#readonly)                 | Whether the calendar value is immutable.                                                                             |                            `boolean`                             |                           `false`                           |
| [size](#size)                         | The size of the control                                                                                              |                        `"m"` `"l"` `"xl"`                        |                            `"m"`                            |
| style                                 | Sets inline style for the element.                                                                                   |                         `CSSProperties`                          |                                                             |
| [timeZone](#time-zone)                | Sets the time zone. [Learn more about time zones](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List) |                             `string`                             |                                                             |
| [value](#calendar)                    | The value of the control                                                                                             |                        `DateTime` `null`                         |                                                             |
