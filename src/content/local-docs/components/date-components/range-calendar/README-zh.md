<!--GITHUB_BLOCK-->

# RangeCalendar

<!--/GITHUB_BLOCK-->

```tsx
import {RangeCalendar} from '@gravity-ui/date-components';
```

`RangeCalendar` 是一个强大、灵活且用户友好的用户界面组件，专为选择一系列日期而设计。它使用 React 构建，结合了日历和日期范围选择器的功能，使其成为需要用户输入开始和结束日期的应用程序的理想选择。如果设置 `value` 属性，则可以对其进行控制。或者，如果你不设置任何值，它可能会不受控制，但在这种情况下，你可以使用可选属性 `defaultValue`管理初始状态。默认情况下，组件不受控制。

### 有用的补充

要以正确的格式设置日期，您可能需要包括 D [ate Util](https://gravity-ui.com/libraries/date-utils) s 库中的其他助手

```tsx
import {dateTimeParse, dateTime} from '@gravity-ui/date-utils';
```

<!--LANDING_BLOCK

> [!NOTE]
> Row with "Selected range: ..." is not a part of the component. It was added to examples only for clarity.

LANDING_BLOCK-->

## 大小

要控制大小， `RangeCalendar` 请使用该 `size` 属性。默认大小为 `m`。

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

## 价值

### 最小值和最大值

该 `minValue` 属性允许您指定用户可以输入的最早日期和时间。相反，该 `maxValue` 属性指定了可以输入的最新日期和时间。用户的所有其他值都将被禁用。

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

## 模式

定义 `RangeCalendar` 应显示的时间间隔。有了它， `mode` 你可以以可控的方式进行选择。对于不受控制的方式，您无需指定任何值。你也可以使用 `defaultMode` 道具以不受控制的方式设置初始模式。

`days` -的默认模式 `RangeCalendar`。它显示一个月中的天数。

`months` -显示一年中的月份

`quarters` -按年显示季度（不可作为数值提供 `defaultMode`）

`years` -显示几年的选择时间

你可以使用 prop 来限制已启用的模式 `modes`。

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

## 国家

### 已禁用

您不希望用户能够与组件交互的状态。 `RangeCalendar`

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

### 只读

`readOnly` 是一个布尔属性，当设置为 true 时，该 `RangeCalendar` 组件对用户来说是不可变的。这意味着，虽然输入将显示其当前值，但用户将无法对其进行更改。

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

## 聚焦价值

允许选择 `RangeCalendar` 视图聚焦的日期。如果你需要对其进行控制，你应该使用 `focusedValue` 道具。您可以使用可选 prop `defaultFocusedValue` 为不受控制的组件设置初始焦点值。

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

## 时区

`timeZone` 是设置输入中值的时区的属性。[了解有关时区的更多信息](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List)

## 属性

| 姓名                                  | 描述                                                                                                  |                         类型                         |                            默认                             |
| :------------------------------------ | :---------------------------------------------------------------------------------------------------- | :--------------------------------------------------: | :---------------------------------------------------------: |
| 咏叹调描述者                          | 控件的 `aria-describedby` 属性                                                                        |                       `string`                       |                                                             |
| aria-详细信息                         | 控件的 `aria-details` 属性                                                                            |                       `string`                       |                                                             |
| aria-label                            | 控件的 `aria-label` 属性                                                                              |                       `string`                       |                                                             |
| aria-labelledby                       | 控件的 `aria-labelledby` 属性                                                                         |                       `string`                       |                                                             |
| autoFocus                             | 控件的 `autofocus` 属性                                                                               |                      `boolean`                       |                                                             |
| className                             | 控件的包装器类名                                                                                      |                       `string`                       |                                                             |
| [defaultFocusedValue](#focused-value) | 日历首次挂载时聚焦的日期（不受控制）                                                                  |                      `DateTime`                      |                                                             |
| [defaultMode](#mode)                  | 在日历中显示的初始模式                                                                                |                    `days` `years`                    |                                                             |
| [defaultValue](#value)                | 设置非受控组件的初始值。                                                                              |                `RangeValue<DateTime>`                |                                                             |
| [已禁用](#disabled)                   | 表示用户无法与控件进行交互                                                                            |                      `boolean`                       |                           `false`                           |
| [focusedValue](#focused-value)        | 设置包含此值的非受控组件的默认视图                                                                    |                  `DateTime` `null`                   |                                                             |
| id                                    | 控件的 `id` 属性                                                                                      |                       `string`                       |                                                             |
| isDateUnavailable                     | 为日历的每个日期调用的回调。如果返回 true，则该日期不可用。                                           |           `((date: DateTime) => boolean)`            |                                                             |
| isWeekend                             | 为日历的每个日期调用的回调。如果返回 true，则日期为周末。                                             |           `((date: DateTime) => boolean)`            |                                                             |
| [maxValue](#min-and-max-value)        | 用户可以选择的最大允许日期。                                                                          |                      `DateTime`                      |                                                             |
| [minValue](#min-and-max-value)        | 用户可以选择的最小允许日期。                                                                          |                      `DateTime`                      |                                                             |
| [模式](#mode)                         | 定义 `RangeCalendar` 应以 coltrolled 方式显示的时间间隔。                                             |                    `days` `years`                    |                                                             |
| 模式                                  | 可供用户使用的模式                                                                                    |    `局部的<Record<RangeCalendarLayout, boolean>>`    | `{days: true, months: true, quarters: false, years: true }` |
| onBlur                                | 当控件失去对焦时触发。提供焦点事件作为回调的参数                                                      |     `(e:FocusEvent<Element, Element>) => 无效)`      |                                                             |
| onFocus                               | 当控件获得焦点时触发。提供焦点事件作为回调的参数                                                      |     `(e:FocusEvent<Element, Element>) => 无效)`      |                                                             |
| onFocusUpdate                         | 当控件的聚焦日期发生变化时触发。                                                                      |             `((date: DateTime) => void)`             |                                                             |
| onUpdate                              | 当值发生变化时触发。                                                                                  |             `((value: DateTime) => void`             |                                                             |
| onUpdateMode                          | 模式更改时触发。                                                                                      | `（值：'天数'\| '月'\| '四分之一'\| 'years) = 空白>` |                                                             |
| [readOnly](#readonly)                 | 日历值是否不可变。                                                                                    |                      `boolean`                       |                           `false`                           |
| [大小](#size)                         | 控件的大小                                                                                            |                     `"m"` `"xl"`                     |                            `"m"`                            |
| 风格                                  | 为元素设置行内样式。                                                                                  |                   `CSSProperties`                    |                                                             |
| [timeZone](#time-zone)                | 设置时区。[了解有关时区的更多信息](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List) |                       `string`                       |                                                             |
| [价值](#calendar)                     | 控件的价值                                                                                            |                   `RangeValuenull`                   |                                                             |
