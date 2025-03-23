<!--GITHUB_BLOCK-->

# RelativeDatePicker

<!--/GITHUB_BLOCK-->

```tsx
import {RelativeDatePicker} from '@gravity-ui/date-components';
```

`RelativeDatePicker` is almost the same component as `DatePicker` but it has ability to use relative dates.

## Difference from `DatePicker`

`RelativeDatePicker` can work in two modes: `absolute` and `relative`. You can switch it interactively by click on `f(x)` button. Or you can set field `type` in `value` or `defaultValue` object.

### Absolute

`RelativeDatePicker`'s behaviour in `absolute` mode is very similar to simple `DatePicker`.

<!--LANDING_BLOCK

[Learn more about DatePicker](/components/date-components/date-picker)

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

[Learn more about DatePicker](/src/components/DatePicker)

<!--/GITHUB_BLOCK-->

### Relative

In this mode `RelativeDatePicker` get and return values in special relative format.

<!--LANDING_BLOCK

[Learn more about rules of relative formulas](/components/date-components/relative-date-field#relative-input)

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

[Learn more about rules of relative formulas](/src/components/RelativeDateField#relative-input)

<!--/GITHUB_BLOCK-->

## Properties

| Name              | Description                                                                                                                                |                     Type                      |          Default          |
| :---------------- | :----------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------: | :-----------------------: |
| aria-describedby  | The control's `aria-describedby`. Identifies the element (or elements) that describes the object. attribute                                |                   `string`                    |                           |
| aria-details      | The control's `aria-details`. Identifies the element (or elements) that provide a detailed, extended description for the object. attribute |                   `string`                    |                           |
| aria-label        | The control's `aria-label`. Defines a string value that labels the current element. attribute                                              |                   `string`                    |                           |
| aria-labelledby   | The control's `aria-labelledby`. Identifies the element (or elements) that labels the current element. attribute                           |                   `string`                    |                           |
| autoFocus         | The control's `autofocus`. Whether the element should receive focus on render. attribute                                                   |                   `boolean`                   |                           |
| className         | The control's wrapper class name                                                                                                           |                   `string`                    |                           |
| defaultValue      | Sets the initial value for uncontrolled component.                                                                                         |                    `Value`                    |                           |
| disabled          | Indicates that the user cannot interact with the control                                                                                   |                   `boolean`                   |          `false`          |
| errorMessage      | Error text                                                                                                                                 |                  `ReactNode`                  |                           |
| format            | Format of the date when rendered in the input. [Available formats](https://day.js.org/docs/en/display/format)                              |                   `string`                    |                           |
| hasClear          | Shows the icon for clearing control's value                                                                                                |                   `boolean`                   |          `false`          |
| id                | The control's `id` attribute                                                                                                               |                   `string`                    |                           |
| isDateUnavailable | Callback that is called for each date of the calendar. If it returns true, then the date is unavailable.                                   |        `((date: DateTime) => boolean)`        |                           |
| label             | Help text rendered to the left of the input node                                                                                           |                   `string`                    |                           |
| maxValue          | The maximum allowed date that a user may select.                                                                                           |                  `DateTime`                   |                           |
| minValue          | The minimum allowed date that a user may select.                                                                                           |                  `DateTime`                   |                           |
| onBlur            | Fires when the control lost focus. Provides focus event as a callback's argument                                                           | `((e: FocusEvent<Element, Element>) => void)` |                           |
| onFocus           | Fires when the control gets focus. Provides focus event as a callback's argument                                                           | `((e: FocusEvent<Element, Element>) => void)` |                           |
| onKeyDown         | Fires when a key is pressed. Provides keyboard event as a callback's argument                                                              |    `((e: KeyboardEvent<Element>) => void)`    |                           |
| onKeyUp           | Fires when a key is released. Provides keyboard event as a callback's argument                                                             |    `((e: KeyboardEvent<Element>) => void)`    |                           |
| onUpdate          | Fires when the value is changed by the user. Provides new value as an callback's argument                                                  |       `((value: Value \| null) => void`       |                           |
| pin               | Corner rounding                                                                                                                            |                `TextInputPin`                 |      `'round-round'`      |
| placeholder       | Text that appears in the control when it has no value set                                                                                  |                   `string`                    |                           |
| placeholderValue  | A placeholder date that controls the default values of each segment when the user first interacts with them.                               |                  `DateTime`                   | `today's date at midnigh` |
| readOnly          | Whether the component's value is immutable.                                                                                                |                   `boolean`                   |          `false`          |
| size              | The size of the control                                                                                                                    |           `"s"` `"m"` `"l"` `"xl"`            |           `"m"`           |
| style             | Sets inline style for the element.                                                                                                         |                `CSSProperties`                |                           |
| timeZone          | Sets the time zone. [Learn more about time zones](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List)                       |                   `string`                    |                           |
| validationState   | Validation state                                                                                                                           |                  `"invalid"`                  |                           |
| value             | The value of the control                                                                                                                   |                `Value` `null`                 |                           |
| view              | The view of the control                                                                                                                    |             `"normal"` `"clear"`              |        `"normal"`         |
