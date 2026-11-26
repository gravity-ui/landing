GRAVITY_TRANSLATION_BLOCK_0_END

```tsx
import {Calendar} from '@gravity-ui/date-components';
```

`Calendar` 是一个灵活、用户友好的 React 日历组件。它允许用户轻松地查看、选择和管理日期。非常适合用于事件安排、预订系统以及任何需要日期选择的应用程序。如果设置了 `value` 属性，它可以是受控的。或者，如果未设置任何值，它将是无状态的，但在这种情况下，您可以使用可选的 `defaultValue` 属性来管理初始状态。组件默认是无状态的。

## 有用的补充

要以正确的格式设置日期，您可能需要从 [Date Utils 库](https://gravity-ui.com/libraries/date-utils) 中包含额外的辅助函数。

```tsx
import {dateTimeParse} from '@gravity-ui/date-utils';
```

## Size

要控制 `Calendar` 的大小，请使用 `size` 属性。默认大小为 `m`。

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

## Value

### Min and max value

`minValue` 属性允许您指定用户可以输入的最早日期和时间。反之，`maxValue` 属性指定用户可以输入的最新日期和时间。所有其他值都将被禁用。

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

## Mode

定义 `Calendar` 应显示的日历视图模式。使用 `mode`，您可以以受控方式选择它。对于无状态方式，您无需指定任何值。您还可以使用 `defaultMode` 属性以无状态方式设置初始模式。

`days` - `Calendar` 的默认模式。显示月份中的日期。

`months` - 显示一年中的月份。

`quarters` - 按年份显示季度（在 `defaultMode` 中不可用）。

`years` - 显示可供选择的几年。

您可以使用 `modes` 属性来限制启用的模式。

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

## States

### Disabled

`Calendar` 的状态，您不希望用户能够与组件进行交互。

GRAVITY_TRANSLATION_BLOCK_7_END

GRAVITY_TRANSLATION_BLOCK_8_END

### Readonly

`readOnly` 是一个布尔属性，当设置为 `true` 时，使 `Calendar` 组件对用户来说是不可变的。这意味着虽然输入将显示其当前值，但用户将无法更改它。

GRAVITY_TRANSLATION_BLOCK_9_END

GRAVITY_TRANSLATION_BLOCK_10_END

## Focused value

允许选择 `Calendar` 视图聚焦的日期。如果您需要受控，则应使用 `focusedValue` 属性。您可以使用可选的 `defaultFocusedValue` 属性为无状态组件设置初始聚焦值。

GRAVITY_TRANSLATION_BLOCK_11_END

GRAVITY_TRANSLATION_BLOCK_12_END

## Time zone

`timeZone` 是设置输入值时区属性。[了解更多关于时区的信息](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List)

## Properties

| 名称                                  | 描述                                                                                                         | 类型                                | 默认值                                 |
| :------------------------------------ | :----------------------------------------------------------------------------------------------------------- | :---------------------------------- | :------------------------------------- |
| aria-describedby                      | 控件的 `aria-describedby` 属性                                                                               | `string`                            |                                        |
| aria-details                          | 控件的 `aria-details` 属性                                                                                   | `string`                            |                                        |
| aria-label                            | 控件的 `aria-label` 属性                                                                                     | `string`                            |                                        |
| aria-labelledby                       | 控件的 `aria-labelledby` 属性                                                                                | `string`                            |                                        |
| autoFocus                             | 控件的 `autofocus` 属性                                                                                      | `boolean`                           |                                        |
| className                             | 控件的包装器类名                                                                                             | `string`                            |                                        |
| [defaultFocusedValue](#focused-value) | 日历首次挂载时聚焦的日期（非受控）                                                                           | `DateTime`                          |                                        |
| [defaultMode](#mode)                  | 日历中显示的初始模式                                                                                         | `days` `months` `quarters` `years`  |                                        |
| [defaultValue](#value)                | 为非受控组件设置初始值。                                                                                     | `DateTime`                          |                                        |
| [disabled](#disabled)                 | 指示用户无法与控件交互                                                                                       | `boolean`                           | `false`                                |
| [focusedValue](#focused-value)        | 设置包含此值的非受控组件的默认视图                                                                           | `DateTime` `null`                   |                                        |
| id                                    | 控件的 `id` 属性                                                                                             | `string`                            |                                        |
| isDateUnavailable                     | 为日历中的每个日期调用的回调。如果返回 `true`，则该日期不可用。                                             | `((date: DateTime) => boolean)`     |                                        |
| isWeekend                             | 为日历中的每个日期调用的回调。如果返回 `true`，则该日期是周末。                                             | `((date: DateTime) => boolean)`     |                                        |
| [maxValue](#min-and-max-value)        | 用户可以选择的最大允许日期。                                                                                 | `DateTime`                          |                                        |
| [minValue](#min-and-max-value)        | 用户可以选择的最小允许日期。                                                                                 | `DateTime`                          |                                        |
| [mode](#mode)                         | 以受控方式定义 `Calendar` 应显示的事件间隔。                                                                 | `days` `months` `quarters` `years`  |                                        |
| modes                                 | 用户可用的模式                                                                                               | `Partial<Record<CalendarLayout, boolean>>` | `{days: true, months: true, quarters: false, years: true }` |
| onBlur                                | 控件失去焦点时触发。将焦点事件作为回调的参数提供                                                             | `((e: FocusEvent<Element, Element>) => void)` |                                        |
| onFocus                               | 控件获得焦点时触发。将焦点事件作为回调的参数提供                                                             | `((e: FocusEvent<Element, Element>) => void)` |                                        |
| onFocusUpdate                         | 控件的聚焦日期更改时触发。                                                                                   | `((date: DateTime) => void)`        |                                        |
| onUpdate                              | 值更改时触发。                                                                                               | `((value: DateTime) => void`       |                                        |
| onUpdateMode                          | 模式更改时触发。                                                                                             | `((value: 'days' \| 'months' \| 'quarters' \| 'years' ) => void` |                                        |
| [readOnly](#readonly)                 | 日历值是否不可变。                                                                                           | `boolean`                           | `false`                                |
| [size](#size)                         | 控件的大小                                                                                                   | `"m"` `"l"` `"xl"`                  | `"m"`                                  |
| style                                 | 为元素设置内联样式。                                                                                         | `CSSProperties`                     |                                        |
| [timeZone](#time-zone)                | 设置时区。[了解有关时区的更多信息](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List)           | `string`                            |                                        |
| [value](#calendar)                    | 控件的值                                                                                                     | `DateTime` `null`                   |                                        |