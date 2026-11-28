<!--GITHUB_BLOCK-->

# RelativeDateField

<!--/GITHUB_BLOCK-->

```tsx
import {RelativeDateField} from '@gravity-ui/date-components';
```

`RelativeDateField` component is used only for entering relative dates. It can't be used as "normal" `DateField`.

## Relative input

The component get values in special relative format. You set values as formulas which will help you to compute the exact date. We can call it `grafana-like format` because it is very similar to format of Grafana's relative time fields. To know more about relative time values in Grafana read [the docs](https://grafana.com/docs/grafana/latest/panels-visualizations/query-transform-data/).

Using this mode you can deliver your data from source to destination and compute the exact value straight on the necessary endpoit without inaccuracy.

## Valid input rules

- a value should starts from keyword `now`
- relative date expression in common looks like: `now${operand}${count}${unit}`
- available values for `operand`:
  - `-` - subtraction
  - `+` - addition
  - `/` - bringing to the start of the `unit`
- valid values of `count` - any natural number
- valid values of `unit`:
  - `d` - day
  - `w` - week
  - `M` - month
  - `Q` - quarter
  - `y` - year
  - `h` - hour
  - `m` - minute

### Examples of usage

> `now-1d`
>
> `now/w`
>
> `now+10d-5d/M`

## Properties

| Name             | Description                                                                                                          |                     Type                      |     Default     |
| :--------------- | :------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------: | :-------------: |
| aria-describedby | The control's `aria-describedby` attribute                                                                           |                   `string`                    |                 |
| aria-details     | The control's `aria-details` attribute                                                                               |                   `string`                    |                 |
| aria-label       | The control's `aria-label` attribute                                                                                 |                   `string`                    |                 |
| aria-labelledby  | The control's `aria-labelledby` attribute                                                                            |                   `string`                    |                 |
| autoFocus        | The control's `autofocus` attribute                                                                                  |                   `boolean`                   |                 |
| className        | The control's wrapper class name                                                                                     |                   `string`                    |                 |
| defaultValue     | Sets the initial value for uncontrolled component.                                                                   |                   `string`                    |                 |
| disabled         | Indicates that the user cannot interact with the control                                                             |                   `boolean`                   |     `false`     |
| errorMessage     | Error text                                                                                                           |                  `ReactNode`                  |                 |
| hasClear         | Shows the icon for clearing control's value                                                                          |                   `boolean`                   |     `false`     |
| hasTime          | Show time field in popupvalue                                                                                        |                   `boolean`                   |     `false`     |
| id               | The control's `id` attribute                                                                                         |                   `string`                    |                 |
| label            | Help text rendered to the left of the input node                                                                     |                   `string`                    |                 |
| leftContent      | The user`s node rendered before label and input                                                                      |               `React.ReactNode`               |                 |
| onBlur           | Fires when the control lost focus. Provides focus event as a callback's argument                                     | `((e: FocusEvent<Element, Element>) => void)` |                 |
| onFocus          | Fires when the control gets focus. Provides focus event as a callback's argument                                     | `((e: FocusEvent<Element, Element>) => void)` |                 |
| onKeyDown        | Fires when a key is pressed. Provides keyboard event as a callback's argument                                        |    `((e: KeyboardEvent<Element>) => void)`    |                 |
| onKeyUp          | Fires when a key is released. Provides keyboard event as a callback's argument                                       |    `((e: KeyboardEvent<Element>) => void)`    |                 |
| onUpdate         | Fires when the value is changed by the user. Provides new value as an callback's argument                            |      `((value: string \| null) => void`       |                 |
| pin              | Corner rounding                                                                                                      |                   `string`                    | `'round-round'` |
| placeholder      | Text that appears in the control when it has no value set                                                            |                   `string`                    |                 |
| readOnly         | Whether the component's value is immutable.                                                                          |                   `boolean`                   |     `false`     |
| rightContent     | User`s node rendered after the input node and clear button                                                           |               `React.ReactNode`               |                 |
| size             | The size of the control                                                                                              |           `"s"` `"m"` `"l"` `"xl"`            |      `"m"`      |
| style            | Sets inline style for the element.                                                                                   |                `CSSProperties`                |                 |
| timeZone         | Sets the time zone. [Learn more about time zones](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List) |                   `string`                    |                 |
| validationState  | Validation state                                                                                                     |                  `"invalid"`                  |                 |
| value            | The value of the control                                                                                             |                `string` `null`                |                 |
| view             | The view of the control                                                                                              |             `"normal"` `"clear"`              |   `"normal"`    |
