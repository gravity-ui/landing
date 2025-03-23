<!--GITHUB_BLOCK-->

# DateField

<!--/GITHUB_BLOCK-->

```tsx
import {DateField} from '@gravity-ui/date-components';
```

`DateField` component is a versatile and convenient input field specifically designed for date entry in React applications. With an intuitive interface and easy integration, it's perfect for any form that requires date or time input, such as event schedulers, booking systems, or data-driven reports. It can be controlled if you set `value` property. Or it can be uncontrolled if you don't set any value, but in this case you can manage the initial state with optional property `defaultValue`. Component is uncontrolled by default.

### Useful addition

To set dates in the right format you may need to include additional helpers from [Date Utils library](https://gravity-ui.com/libraries/date-utils)

```tsx
import {dateTimeParse} from '@gravity-ui/date-utils';
```

## Appearance

The appearance of `DateField` is controlled by the `size`, `view` and `pin` properties.

### Size

To control the size of the `DateField` use the `size` property. Default size is `m`.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<DateField size="s" />
<DateField size="m" />
<DateField size="l" />
<DateField size="xl" />
`}
>
    <DateComponents.DateField size="s" />
    <DateComponents.DateField size="m" />
    <DateComponents.DateField size="l" />
    <DateComponents.DateField size="xl" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DateField size="s" />
<DateField size="m" />
<DateField size="l" />
<DateField size="xl" />
```

<!--/GITHUB_BLOCK-->

### View

`normal` - the main view of `DateField` (used by default).

<!--LANDING_BLOCK
<ExampleBlock code={`<DateField />`}>
    <DateComponents.DateField />
</ExampleBlock>
LANDING_BLOCK-->

`clear` - view of `DateField` without visible borders (can be used with a custom wrapper)

<!--LANDING_BLOCK
<ExampleBlock code={`<DateField view="clear" />`}>
    <DateComponents.DateField view="clear" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DateField view="normal" />
<DateField view="clear" />
```

<!--/GITHUB_BLOCK-->

### Pin

The `pin` property allows you to control the shape of the right and left edges and is usually used for combining multiple controls in a single unit.
The value of the `pin` property consists of left and edge style names divided by a dash, e.g. `"round-brick"`.
The edge styles are: `round` (default), `circle`, `brick` and `clear`.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<DateField pin="round-brick" />
<DateField pin="brick-brick" />
<DateField pin="brick-round" />
`}
>
    <DateComponents.DateField pin="round-brick" />
    <DateComponents.DateField pin="brick-brick" />
    <DateComponents.DateField pin="brick-round" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DateField pin="round-brick" />
<DateField pin="brick-brick" />
<DateField pin="brick-round" />
```

<!--/GITHUB_BLOCK-->

## Value

### Min and max value

The `minValue` property allows you to specify the earliest date and time that can be entered by the user. Conversely, the `maxValue` property specifies the latest date and time that can be entered. If you input the value out of this bounds component changes it's view like in case of invalid validation state.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<DateField minValue={dateTimeParse('01.01.2024')} placeholder={"minValue: '01.01.2024'"}/>
<DateField maxValue={dateTimeParse('01.01.2025')} placeholder={"maxValue: '01.01.2025'"}/>
`}
>
    <DateComponentsExamples.DateFieldExample minValue={'01.01.2024'} placeholder={"minValue: '01.01.2024'"} />
    <DateComponentsExamples.DateFieldExample maxValue={'01.01.2025'} placeholder={"maxValue: '01.01.2025'"} />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx

<DateField minValue={dateTimeParse('01.01.2024')} />
<DateField maxValue={dateTimeParse('01.01.2025')} />
```

<!--/GITHUB_BLOCK-->

## States

### Disabled

The state of the `DateField` where you don't want the user to be able to interact with the component.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<DateField disabled={true} defaultValue={dateTimeParse(new Date())} />
`}
>
    <DateComponentsExamples.DateFieldExample disabled={true} defaultValue={new Date()} />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DateField disabled defaultValue={dateTimeParse(new Date())} />
```

<!--/GITHUB_BLOCK-->

### Readonly

`readOnly` is a boolean attribute that, when set to true, makes the `DateField` component immutable to the user. This means that while the input will display its current value, users will not be able to change it.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<DateField readOnly defaultValue={dateTimeParse(new Date())} />
`}
>
    <DateComponentsExamples.DateFieldExample readOnly defaultValue={new Date()} />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DateField readOnly defaultValue={dateTimeParse(new Date())} />
```

<!--/GITHUB_BLOCK-->

### Error

The state of the `DateField` in which you want to indicate incorrect user input. To change `DateField` appearance, use the `validationState` property with the `"invalid"` value. An optional message text can be added via the `errorMessage` property. Message text will be rendered under the component.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<DateField errorMessage="Error message" validationState="invalid" />
<DateField validationState="invalid" />
`}
>
    <DateComponents.DateField errorMessage="Error message" validationState="invalid" />
    <DateComponents.DateField validationState="invalid" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DateField errorMessage="Error message" validationState="invalid" />
<DateField validationState="invalid" />
```

<!--/GITHUB_BLOCK-->

## Additional content

### Placeholder

This prop allows you to provide a short hint that describes the expected value of the input field. This hint is displayed within the input field before the user enters a value, and it disappears upon the entry of text.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<DateField placeholder='Placeholder' />
`}
>
    <DateComponents.DateField placeholder='Placeholder' />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DateField placeholder="Placeholder" />
```

<!--/GITHUB_BLOCK-->

### Label

Allows you to place the label in the left part of the field. Label can take up no more than half the width of the entire space of `DateField`.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<DateField label="Label" />
<DateField label="Very long label with huge amount of symbols" />
`}
>
    <DateComponents.DateField label="Label" />
    <DateComponents.DateField label="Very long label with huge amount of symbols" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DateField label="Label" />
```

<!--/GITHUB_BLOCK-->

### Clear button

`hasClear` is a boolean prop that, provides users with the ability to quickly clear the content of the input field.

<!--LANDING_BLOCK
<ExampleBlock
    code={`<DateField hasClear />`}
>
    <DateComponents.DateField
        hasClear
    />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DateField hasClear />
```

<!--/GITHUB_BLOCK-->

### Start content

Allows you to add content to the start part of the field. It is placed before all other components.

<!--LANDING_BLOCK
<ExampleBlock
    code={`<DateField label="Label" startContent={<Label size="s">Start content</Label>} />`}
>
    <DateComponents.DateField
        label="Label"
        startContent={<UIKit.Label size="s">Start content</UIKit.Label>}
    />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DateField label="Label" startContent={<Label>Start content</Label>} />
```

<!--/GITHUB_BLOCK-->

### End content

Allows you to add content to the end part of the field. It is placed after all other components.

<!--LANDING_BLOCK
<ExampleBlock
    code={`<DateField endContent={<Label size="s">End content</Label>} hasClear/>`}
>
    <DateComponents.DateField
        hasClear
        endContent={<UIKit.Label size="s">End content</UIKit.Label>}
    />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DateField hasClear endContent={<Label>End content</Label>} />
```

<!--/GITHUB_BLOCK-->

## Format

The `format` prop is a string that defines the date and time format the `DateField` component will accept and display. This prop determines how the date and time are visually presented to the user and how the user's input is expected to be formatted. [Available formats](https://day.js.org/docs/en/display/format)

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<DateField format='LTS' />
`}
>
    <DateComponents.DateField format='LTS' />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DateField format="LTS" />
```

<!--/GITHUB_BLOCK-->

## Time zone

`timeZone` is the property to set the time zone of the value in the input. [Learn more about time zones](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List)

## Properties

| Name              | Description                                                                                                          |                     Type                      |          Default          |
| :---------------- | :------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------: | :-----------------------: |
| aria-describedby  | The control's `aria-describedby` attribute                                                                           |                   `string`                    |                           |
| aria-details      | The control's `aria-details` attribute                                                                               |                   `string`                    |                           |
| aria-label        | The control's `aria-label` attribute                                                                                 |                   `string`                    |                           |
| aria-labelledby   | The control's `aria-labelledby` attribute                                                                            |                   `string`                    |                           |
| autoFocus         | The control's `autofocus` attribute                                                                                  |                   `boolean`                   |                           |
| className         | The control's wrapper class name                                                                                     |                   `string`                    |                           |
| defaultValue      | Sets the initial value for uncontrolled component.                                                                   |                  `DateTime`                   |                           |
| disabled          | Indicates that the user cannot interact with the control                                                             |                   `boolean`                   |          `false`          |
| errorMessage      | Error text                                                                                                           |                  `ReactNode`                  |                           |
| format            | Format of the date when rendered in the input. [Available formats](https://day.js.org/docs/en/display/format)        |                   `string`                    |                           |
| hasClear          | Shows the icon for clearing control's value                                                                          |                   `boolean`                   |          `false`          |
| id                | The control's `id` attribute                                                                                         |                   `string`                    |                           |
| isDateUnavailable | Callback that is called for each date of the calendar. If it returns true, then the date is unavailable.             |        `((date: DateTime) => boolean)`        |                           |
| label             | Help text rendered to the left of the input node                                                                     |                   `string`                    |                           |
| startContent      | The user`s node rendered before label and input                                                                      |               `React.ReactNode`               |                           |
| maxValue          | The maximum allowed date that a user may select.                                                                     |                  `DateTime`                   |                           |
| minValue          | The minimum allowed date that a user may select.                                                                     |                  `DateTime`                   |                           |
| onBlur            | Fires when the control lost focus. Provides focus event as a callback's argument                                     | `((e: FocusEvent<Element, Element>) => void)` |                           |
| onFocus           | Fires when the control gets focus. Provides focus event as a callback's argument                                     | `((e: FocusEvent<Element, Element>) => void)` |                           |
| onKeyDown         | Fires when a key is pressed. Provides keyboard event as a callback's argument                                        |    `((e: KeyboardEvent<Element>) => void)`    |                           |
| onKeyUp           | Fires when a key is released. Provides keyboard event as a callback's argument                                       |    `((e: KeyboardEvent<Element>) => void)`    |                           |
| onUpdate          | Fires when the value is changed by the user. Provides new value as an callback's argument                            |     `((value: DateTime \| null) => void`      |                           |
| pin               | Corner rounding                                                                                                      |                   `string`                    |      `'round-round'`      |
| placeholder       | Text that appears in the control when it has no value set                                                            |                   `string`                    |                           |
| placeholderValue  | A placeholder date that controls the default values of each segment when the user first interacts with them.         |                  `DateTime`                   | `today's date at midnigh` |
| readOnly          | Whether the component's value is immutable.                                                                          |                   `boolean`                   |          `false`          |
| endContent        | User`s node rendered after the input node and clear button                                                           |               `React.ReactNode`               |                           |
| size              | The size of the control                                                                                              |           `"s"` `"m"` `"l"` `"xl"`            |           `"m"`           |
| style             | Sets inline style for the element.                                                                                   |                `CSSProperties`                |                           |
| timeZone          | Sets the time zone. [Learn more about time zones](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List) |                   `string`                    |                           |
| validationState   | Validation state                                                                                                     |                  `"invalid"`                  |                           |
| value             | The value of the control                                                                                             |               `DateTime` `null`               |                           |
| view              | The view of the control                                                                                              |             `"normal"` `"clear"`              |        `"normal"`         |
