`RangeCalendar` 是一个强大、灵活且用户友好的 UI 组件，用于选择日期范围。它基于 React 构建，结合了日历和日期范围选择器的功能，是需要用户输入开始日期和结束日期的应用程序的理想选择。如果设置了 `value` 属性，它可以被控制。或者，如果未设置任何值，它将不受控制，但在这种情况下，您可以使用可选的 `defaultValue` 属性来管理初始状态。组件默认不受控制。

### 有用的补充

要以正确的格式设置日期，您可能需要从 [Date Utils 库](https://gravity-ui.com/libraries/date-utils) 中包含其他辅助函数。

```tsx
import {dateTimeParse, dateTime} from '@gravity-ui/date-utils';
```

GRAVITY_TRANSLATION_BLOCK_0_END

```tsx
import {RangeCalendar} from '@gravity-ui/date-components';
```

GRAVITY_TRANSLATION_BLOCK_1_END

## Size

要控制 `RangeCalendar` 的大小，请使用 `size` 属性。默认大小为 `m`。

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

## Value

### Min and max value

`minValue` 属性允许您指定用户可以输入的最早日期和时间。反之，`maxValue` 属性指定用户可以输入的最新日期和时间。所有其他值都将对用户禁用。

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

## Mode

定义 `RangeCalendar` 应显示的事件间隔。使用 `mode`，您可以以受控方式选择它。对于不受控制的方式，您无需指定任何值。您还可以使用 `defaultMode` 属性以不受控制的方式设置初始模式。

`days` - `RangeCalendar` 的默认模式。它显示月份中的日期。

`months` - 显示一年中的月份。

`quarters` - 按年份显示季度（在 `defaultMode` 中不可用）。

`years` - 显示多个年份供选择。

您可以使用 `modes` 属性来限制启用的模式。

GRAVITY_TRANSLATION_BLOCK_6_END

GRAVITY_TRANSLATION_BLOCK_7_END

## States

### Disabled

`RangeCalendar` 的状态，您不希望用户能够与组件进行交互。

GRAVITY_TRANSLATION_BLOCK_8_END

GRAVITY_TRANSLATION_BLOCK_9_END

### Readonly

`readOnly` 是一个布尔属性，当设置为 true 时，使 `RangeCalendar` 组件对用户不可变。这意味着虽然输入将显示其当前值，但用户将无法更改它。

GRAVITY_TRANSLATION_BLOCK_10_END

GRAVITY_TRANSLATION_BLOCK_11_END

## Focused value

允许选择 `RangeCalendar` 视图聚焦的日期。如果您需要对其进行控制，则应使用 `focusedValue` 属性。您可以使用可选的 `defaultFocusedValue` 属性为不受控制的组件设置初始聚焦值。

GRAVITY_TRANSLATION_BLOCK_12_END

GRAVITY_TRANSLATION_BLOCK_13_END

## Time zone

`timeZone` 是设置输入值时区属性。[了解更多关于时区的信息](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List)

## Properties

| 名称                                  | 描述                                                                                                         | 类型                                              | 默认值                                        |
| :------------------------------------ | :----------------------------------------------------------------------------------------------------------- | :------------------------------------------------: | :-------------------------------------------: |
| aria-describedby                      | 控件的 `aria-describedby` 属性                                                                               | `string`                                           |                                               |
| aria-details                          | 控件的 `aria-details` 属性                                                                                   | `string`                                           |                                               |
| aria-label                            | 控件的 `aria-label` 属性                                                                                     | `string`                                           |                                               |
| aria-labelledby                       | 控件的 `aria-labelledby` 属性                                                                                | `string`                                           |                                               |
| autoFocus                             | 控件的 `autofocus` 属性                                                                                      | `boolean`                                          |                                               |
| className                             | 控件的包装器类名                                                                                             | `string`                                           |                                               |
| [defaultFocusedValue](#focused-value) | 日历首次挂载时聚焦的日期（非受控）                                                                           | `DateTime`                                         |                                               |
| [defaultMode](#mode)                  | 日历中显示的初始模式                                                                                         | `days` `months` `quarters` `years`                 |                                               |
| [defaultValue](#value)                | 为非受控组件设置初始值。                                                                                     | `RangeValue<DateTime>`                             |                                               |
| [disabled](#disabled)                 | 指示用户无法与控件交互                                                                                       | `boolean`                                          | `false`                                       |
| [focusedValue](#focused-value)        | 设置包含此值的非受控组件的默认视图                                                                           | `DateTime` `null`                                  |                                               |
| id                                    | 控件的 `id` 属性                                                                                             | `string`                                           |                                               |
| isDateUnavailable                     | 为日历中的每个日期调用的回调。如果返回 true，则该日期不可用。                                                | `((date: DateTime) => boolean)`                    |                                               |
| isWeekend                             | 为日历中的每个日期调用的回调。如果返回 true，则该日期是周末。                                                | `((date: DateTime) => boolean)`                    |                                               |
| [maxValue](#min-and-max-value)        | 用户可以选择的最大允许日期。                                                                                 | `DateTime`                                         |                                               |
| [minValue](#min-and-max-value)        | 用户可以选择的最小允许日期。                                                                                 | `DateTime`                                         |                                               |
| [mode](#mode)                         | 以受控方式定义 `RangeCalendar` 应显示的事件间隔。                                                            | `days` `months` `quarters` `years`                 |                                               |
| modes                                 | 用户可用的模式                                                                                               | `Partial<Record<RangeCalendarLayout, boolean>>`    | `{days: true, months: true, quarters: false, years: true }` |
| onBlur                                | 控件失去焦点时触发。将焦点事件作为回调参数提供                                                               | `((e: FocusEvent<Element, Element>) => void)`      |                                               |
| onFocus                               | 控件获得焦点时触发。将焦点事件作为回调参数提供                                                               | `((e: FocusEvent<Element, Element>) => void)`      |                                               |
| onFocusUpdate                         | 控件的聚焦日期更改时触发。                                                                                   | `((date: DateTime) => void)`                       |                                               |
| onUpdate                              | 值更改时触发。                                                                                               | `((value: DateTime) => void`                       |                                               |
| onUpdateMode                          | 模式更改时触发。                                                                                             | `((value: 'days' \| 'months' \| 'quarters' \| 'years' ) => void` |                                               |
| [readOnly](#readonly)                 | 日历值是否不可变。                                                                                           | `boolean`                                          | `false`                                       |
| [size](#size)                         | 控件的大小                                                                                                   | `"m"` `"l"` `"xl"`                                 | `"m"`                                         |
| style                                 | 为元素设置内联样式。                                                                                         | `CSSProperties`                                    |                                               |
| [timeZone](#time-zone)                | 设置时区。[了解更多关于时区的信息](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List) | `string`                                           |                                               |
| [value](#calendar)                    | 控件的值                                                                                                     | `RangeValue<DateTime>` `null`                      |                                               |