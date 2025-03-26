<!--GITHUB_BLOCK-->

# DatePicker

<!--/GITHUB_BLOCK-->

```tsx
import {DatePicker} from '@gravity-ui/date-components';
```

`DatePicker` is a sophisticated, lightweight, and fully customizable component designed to provide intuitive date picking functionality in your React applications. Built with user experience and ease of integration in mind, it fits seamlessly within forms, modals, or any UI element requiring date input. It can be controlled if you set `value` property. Or it can be uncontrolled if you don't set any value, but in this case you can manage the initial state with optional property `defaultValue`. Component is uncontrolled by default.

### Useful addition

To set dates in the right format you may need to include additional helpers from [Date Utils library](https://gravity-ui.com/libraries/date-utils)

```tsx
import {dateTimeParse, dateTime} from '@gravity-ui/date-utils';
```

## Appearance

The appearance of `DatePicker` is controlled by the `size`, `view` and `pin` properties.

### Size

To control the size of the `DatePicker` use the `size` property. Default size is `m`.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<DatePicker size="s" />
<DatePicker size="m" />
<DatePicker size="l" />
<DatePicker size="xl" />
`}
>
    <DateComponents.DatePicker size="s" />
    <DateComponents.DatePicker size="m" />
    <DateComponents.DatePicker size="l" />
    <DateComponents.DatePicker size="xl" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DatePicker size="s" />
<DatePicker size="m" />
<DatePicker size="l" />
<DatePicker size="xl" />
```

<!--/GITHUB_BLOCK-->

### View

`normal` - the main view of `DatePicker` (used by default).

<!--LANDING_BLOCK
<ExampleBlock code={`<DatePicker />`}>
    <DateComponents.DatePicker />
</ExampleBlock>
LANDING_BLOCK-->

`clear` - view of `DatePicker` without visible borders (can be used with a custom wrapper)

<!--LANDING_BLOCK
<ExampleBlock code={`<DatePicker view="clear" />`}>
    <DateComponents.DatePicker view="clear" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DatePicker view="normal" />
<DatePicker view="clear" />
```

<!--/GITHUB_BLOCK-->

### Pin

The `pin` property allows you to control the shape of the right and left edges and is usually used for combining multiple controls in a single unit.
The value of the `pin` property consists of left and edge style names divided by a dash, e.g. `"round-brick"`.
The edge styles are: `round` (default), `circle`, `brick` and `clear`.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<DatePicker pin="round-brick" />
<DatePicker pin="brick-brick" />
<DatePicker pin="brick-round" />
`}
>
    <DateComponents.DatePicker pin="round-brick" />
    <DateComponents.DatePicker pin="brick-brick" />
    <DateComponents.DatePicker pin="brick-round" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DatePicker pin="round-brick" />
<DatePicker pin="brick-brick" />
<DatePicker pin="brick-round" />
```

<!--/GITHUB_BLOCK-->

## Value

### Min and max value

The `minValue` property allows you to specify the earliest date and time that can be entered by the user. Conversely, the `maxValue` property specifies the latest date and time that can be entered. If you input the value out of this bounds component changes it's view like in case of invalid validation state.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<DatePicker minValue={dateTimeParse('01.01.2024')} placeholder={"minValue: '01.01.2024'"}/>
<DatePicker maxValue={dateTimeParse('01.01.2025')} placeholder={"maxValue: '01.01.2025'"}/>
`}
>
    <DateComponentsExamples.DatePickerExample minValue={'01.01.2024'} placeholder={"minValue: '01.01.2024'"} />
    <DateComponentsExamples.DatePickerExample maxValue={'01.01.2025'} placeholder={"maxValue: '01.01.2025'"} />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx

<DatePicker minValue={dateTimeParse('01.01.2024')} />
<DatePicker maxValue={dateTimeParse('01.01.2025')} />
```

<!--/GITHUB_BLOCK-->

## States

### Disabled

The state of the `DatePicker` where you don't want the user to be able to interact with the component.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<DatePicker disabled={true} defaultValue={dateTime()} />
`}
>
    <DateComponentsExamples.DatePickerExample disabled={true} defaultValue={new Date()} />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DatePicker disabled defaultValue={dateTime()} />
```

<!--/GITHUB_BLOCK-->

### Readonly

`readOnly` is a boolean attribute that, when set to true, makes the `DatePicker` component immutable to the user. This means that while the input will display its current value, users will not be able to change it.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<DatePicker readOnly defaultValue={dateTimeParse(new Date())} />
`}
>
    <DateComponentsExamples.DatePickerExample readOnly defaultValue={new Date()} />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DatePicker readOnly defaultValue={dateTime()} />
```

<!--/GITHUB_BLOCK-->

### Error

The state of the `DatePicker` in which you want to indicate incorrect user input. To change `DatePicker` appearance, use the `validationState` property with the `"invalid"` value. An optional message text can be added via the `errorMessage` property. Message text will be rendered under the component.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<DatePicker errorMessage="Error message" validationState="invalid" />
<DatePicker validationState="invalid" />
`}
>
    <DateComponents.DatePicker errorMessage="Error message" validationState="invalid" />
    <DateComponents.DatePicker validationState="invalid" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DatePicker errorMessage="Error message" validationState="invalid" />
<DatePicker validationState="invalid" />
```

<!--/GITHUB_BLOCK-->

## Additional content

### Placeholder

This prop allows you to provide a short hint that describes the expected value of the input field. This hint is displayed within the input field before the user enters a value, and it disappears upon the entry of text.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<DatePicker placeholder="Placeholder" />
`}
>
    <DateComponents.DatePicker placeholder='Placeholder' />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DatePicker placeholder="Placeholder" />
```

<!--/GITHUB_BLOCK-->

### Label

Allows you to place the label in the left part of the field. Label can take up no more than half the width of the entire space of `DatePicker`.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<DatePicker label="Label" />
<DatePicker label="Very long label with huge amount of symbols" />
`}
>
    <DateComponents.DatePicker label="Label" />
    <DateComponents.DatePicker label="Very long label with huge amount of symbols" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DatePicker label="Label" />
```

<!--/GITHUB_BLOCK-->

### Clear button

`hasClear` is a boolean prop that, provides users with the ability to quickly clear the content of the input field.

<!--LANDING_BLOCK
<ExampleBlock
    code={`<DatePicker hasClear />`}
>
    <DateComponents.DatePicker
        hasClear
    />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DatePicker hasClear />
```

<!--/GITHUB_BLOCK-->

## Format

The `format` prop is a string that defines the date and time format the `DatePicker` component will accept and display. This prop determines how the date and time are visually presented to the user and how the user's input is expected to be formatted. [Available formats](https://day.js.org/docs/en/display/format)

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<DatePicker format='LL' />
`}
>
    <DateComponents.DatePicker format='LL' />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DatePicker format="LL" />
```

<!--/GITHUB_BLOCK-->

## Time zone

`timeZone` is the property to set the time zone of the value in the input. [Learn more about time zones](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List)

## Customisation

If you want to use custom calendar component inside `DatePicker` you can pass it as `children` with calendar like props.

<!--LANDING_BLOCK
[Learn more about calendar](https://gravity-ui.com/components/date-components/calendar)
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

[Learn more about calendar](https://github.com/gravity-ui/date-components/blob/main/src/components/Calendar/README.md)

<!--/GITHUB_BLOCK-->

## Properties

| Name                           | Description                                                                                                                                |                     Type                      |          Default          |
| :----------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------: | :-----------------------: |
| aria-describedby               | The control's `aria-describedby`. Identifies the element (or elements) that describes the object. attribute                                |                   `string`                    |                           |
| aria-details                   | The control's `aria-details`. Identifies the element (or elements) that provide a detailed, extended description for the object. attribute |                   `string`                    |                           |
| aria-label                     | The control's `aria-label`. Defines a string value that labels the current element. attribute                                              |                   `string`                    |                           |
| aria-labelledby                | The control's `aria-labelledby`. Identifies the element (or elements) that labels the current element. attribute                           |                   `string`                    |                           |
| autoFocus                      | The control's `autofocus`. Whether the element should receive focus on render. attribute                                                   |                   `boolean`                   |                           |
| className                      | The control's wrapper class name                                                                                                           |                   `string`                    |                           |
| [defaultValue](#datepicker)    | Sets the initial value for uncontrolled component.                                                                                         |                  `DateTime`                   |                           |
| [disabled](#disabled)          | Indicates that the user cannot interact with the control                                                                                   |                   `boolean`                   |          `false`          |
| [errorMessage](#error)         | Error text                                                                                                                                 |                  `ReactNode`                  |                           |
| [format](#format)              | Format of the date when rendered in the input. [Available formats](https://day.js.org/docs/en/display/format)                              |                   `string`                    |                           |
| [hasClear](#clear-button)      | Shows the icon for clearing control's value                                                                                                |                   `boolean`                   |          `false`          |
| id                             | The control's `id` attribute                                                                                                               |                   `string`                    |                           |
| isDateUnavailable              | Callback that is called for each date of the calendar. If it returns true, then the date is unavailable.                                   |        `((date: DateTime) => boolean)`        |                           |
| [label](#label)                | Help text rendered to the left of the input node                                                                                           |                   `string`                    |                           |
| [maxValue](#min-and-max-value) | The maximum allowed date that a user may select.                                                                                           |                  `DateTime`                   |                           |
| [minValue](#min-and-max-value) | The minimum allowed date that a user may select.                                                                                           |                  `DateTime`                   |                           |
| onBlur                         | Fires when the control lost focus. Provides focus event as a callback's argument                                                           | `((e: FocusEvent<Element, Element>) => void)` |                           |
| onFocus                        | Fires when the control gets focus. Provides focus event as a callback's argument                                                           | `((e: FocusEvent<Element, Element>) => void)` |                           |
| onKeyDown                      | Fires when a key is pressed. Provides keyboard event as a callback's argument                                                              |    `((e: KeyboardEvent<Element>) => void)`    |                           |
| onKeyUp                        | Fires when a key is released. Provides keyboard event as a callback's argument                                                             |    `((e: KeyboardEvent<Element>) => void)`    |                           |
| onUpdate                       | Fires when the value is changed by the user. Provides new value as an callback's argument                                                  |     `((value: DateTime \| null) => void`      |                           |
| [pin](#pin)                    | Corner rounding                                                                                                                            |                `TextInputPin`                 |      `'round-round'`      |
| [placeholder](#placeholder)    | Text that appears in the control when it has no value set                                                                                  |                   `string`                    |                           |
| placeholderValue               | A placeholder date that controls the default values of each segment when the user first interacts with them.                               |                  `DateTime`                   | `today's date at midnigh` |
| [readOnly](#readonly)          | Whether the component's value is immutable.                                                                                                |                   `boolean`                   |          `false`          |
| [size](#size)                  | The size of the control                                                                                                                    |           `"s"` `"m"` `"l"` `"xl"`            |           `"m"`           |
| style                          | Sets inline style for the element.                                                                                                         |                `CSSProperties`                |                           |
| [timeZone](#time-zone)         | Sets the time zone. [Learn more about time zones](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List)                       |                   `string`                    |                           |
| [validationState](#error)      | Validation state                                                                                                                           |                  `"invalid"`                  |                           |
| [value](#datepicker)           | The value of the control                                                                                                                   |               `DateTime` `null`               |                           |
| [view](#view)                  | The view of the control                                                                                                                    |             `"normal"` `"clear"`              |        `"normal"`         |
