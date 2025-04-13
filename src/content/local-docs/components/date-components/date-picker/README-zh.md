<!--GITHUB_BLOCK-->

# DatePicker

<!--/GITHUB_BLOCK-->

```tsx
import {DatePicker} from '@gravity-ui/date-components';
```

`DatePicker` 是一个复杂、轻量级且完全可自定义的组件，旨在在 React 应用程序中提供直观的日期选择功能。它在构建时考虑了用户体验和易于集成，可无缝地融入表单、模态或任何需要输入日期的用户界面元素。如果设置 `value` 属性，则可以对其进行控制。或者，如果你不设置任何值，它可能会不受控制，但在这种情况下，你可以使用可选属性 `defaultValue`管理初始状态。默认情况下，组件不受控制。

### 有用的补充

要以正确的格式设置日期，您可能需要包括 D [ate Util](https://gravity-ui.com/libraries/date-utils) s 库中的其他助手

```tsx
import {dateTimeParse, dateTime} from '@gravity-ui/date-utils';
```

## 外观

的 `DatePicker` 外观由 `size` 、 `view` 和 `pin` 属性控制。

### 大小

要控制大小， `DatePicker` 请使用该 `size` 属性。默认大小为 `m`。

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

### 查看

`normal` -的主视图 `DatePicker` （默认使用）。

<!--LANDING_BLOCK
<ExampleBlock code={`<DatePicker />`}>
    <DateComponents.DatePicker />
</ExampleBlock>
LANDING_BLOCK-->

`clear` - `DatePicker` 无可见边框的视图（可与自定义包装一起使用）

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

### 别针

该 `pin` 属性允许您控制左右边缘的形状，通常用于将多个控件组合成一个单元。
该 `pin` 属性的值由左边的样式名称除以短划线组成，例如 `"round-brick"`。
边缘样式为： `round` （默认） `circle` 、 `brick` 和 `clear`。

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

## 价值

### 最小值和最大值

该 `minValue` 属性允许您指定用户可以输入的最早日期和时间。相反，该 `maxValue` 属性指定了可以输入的最新日期和时间。如果你输入的值超出这个边界组件，它的视图就会改变，就像在验证状态无效的情况下一样。

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

## 国家

### 已禁用

您不希望用户能够与组件交互的状态。 `DatePicker`

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

### 只读

`readOnly` 是一个布尔属性，当设置为 true 时，该 `DatePicker` 组件对用户来说是不可变的。这意味着，虽然输入将显示其当前值，但用户将无法对其进行更改。

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

### 错误

您要指明用户输入错误的状态。 `DatePicker`要更改 `DatePicker` 外观，请使用带有 `"invalid"` 值的 `validationState` 属性。可以通过该 `errorMessage` 属性添加可选的消息文本。消息文本将在组件下方呈现。

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

## 其他内容

### 占位符

这个道具允许你提供一个简短的提示来描述输入字段的预期值。此提示在用户输入值之前显示在输入字段中，并在输入文本时消失。

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

### 标签

允许您将标签放在字段的左侧。标签占用的宽度不能超过整个空间宽度的一半 `DatePicker`。

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

### “清除” 按钮

`hasClear` 是一个布尔道具，它使用户能够快速清除输入字段的内容。

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

## 格式

`format` prop 是一个字符串，用于定义 `DatePicker` 组件将接受和显示的日期和时间格式。这个属性决定了如何直观地向用户呈现日期和时间，以及如何格式化用户的输入。[可用格式](https://day.js.org/docs/en/display/format)

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

## 时区

`timeZone` 是设置输入中值的时区的属性。[了解有关时区的更多信息](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List)

## 定制

如果你想在里面使用自定义日历组件， `DatePicker` 你可以把它和日历类似 props 一样传递。 `children`

<!--LANDING_BLOCK
[Learn more about calendar](https://gravity-ui.com/components/date-components/calendar)
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

[了解有关日历的更多信息](https://github.com/gravity-ui/date-components/blob/main/src/components/Calendar/README.md)

<!--/GITHUB_BLOCK-->

## 属性

| 姓名                           | 描述                                                                                                  |                    类型                     |           默认            |
| :----------------------------- | :---------------------------------------------------------------------------------------------------- | :-----------------------------------------: | :-----------------------: |
| 咏叹调描述者                   | 控件的 `aria-describedby`。标识描述对象的一个或多个元素。属性                                         |                  `string`                   |                           |
| aria-详细信息                  | 控件的 `aria-details`。标识为对象提供详细扩展描述的一个或多个元素。属性                               |                  `string`                   |                           |
| aria-label                     | 控件的 `aria-label`。定义标记当前元素的字符串值。属性                                                 |                  `string`                   |                           |
| aria-labelledby                | 控件的 `aria-labelledby`。标识标记当前元素的一个或多个元素。属性                                      |                  `string`                   |                           |
| autoFocus                      | 控件的 `autofocus`。元素是否应该在 render. 属性上获得焦点                                             |                  `boolean`                  |                           |
| className                      | 控件的包装器类名                                                                                      |                  `string`                   |                           |
| [defaultValue](#datepicker)    | 设置非受控组件的初始值。                                                                              |                 `DateTime`                  |                           |
| [已禁用](#disabled)            | 表示用户无法与控件进行交互                                                                            |                  `boolean`                  |          `false`          |
| [errorMessage](#error)         | 错误文本                                                                                              |                 `ReactNode`                 |                           |
| [格式](#format)                | 在输入中呈现时的日期格式。[可用格式](https://day.js.org/docs/en/display/format)                       |                  `string`                   |                           |
| [hasClear](#clear-button)      | 显示用于清除控件值的图标                                                                              |                  `boolean`                  |          `false`          |
| id                             | 控件的 `id` 属性                                                                                      |                  `string`                   |                           |
| isDateUnavailable              | 为日历的每个日期调用的回调。如果返回 true，则该日期不可用。                                           |       `((date: DateTime) => boolean)`       |                           |
| [标签](#label)                 | 在输入节点左侧呈现的帮助文本                                                                          |                  `string`                   |                           |
| [maxValue](#min-and-max-value) | 用户可以选择的最大允许日期。                                                                          |                 `DateTime`                  |                           |
| [minValue](#min-and-max-value) | 用户可以选择的最小允许日期。                                                                          |                 `DateTime`                  |                           |
| onBlur                         | 当控件失去对焦时触发。提供焦点事件作为回调的参数                                                      | `(e:FocusEvent<Element, Element>) => 无效)` |                           |
| onFocus                        | 当控件获得焦点时触发。提供焦点事件作为回调的参数                                                      | `(e:FocusEvent<Element, Element>) => 无效)` |                           |
| onKeyDown                      | 按下按键时触发。提供键盘事件作为回调的参数                                                            |    `(e:keyboardEvent<Element>) = void)>`    |                           |
| onKeyUp                        | 释放密钥时触发。提供键盘事件作为回调的参数                                                            |    `(e:keyboardEvent<Element>) = void)>`    |                           |
| onUpdate                       | 当用户更改该值时触发。提供新值作为回调的参数                                                          |      `（值：日期时间\| null) => 无效`       |                           |
| [别针](#pin)                   | 拐角处的圆角                                                                                          |               `TextInputPin`                |      `'round-round'`      |
| [占位符](#placeholder)         | 未设置值时在控件中显示的文本                                                                          |                  `string`                   |                           |
| placeholderValue               | 一个占位符日期，用于控制用户首次与每个区段互动时的默认值。                                            |                 `DateTime`                  | `today's date at midnigh` |
| [readOnly](#readonly)          | 组件的值是否不可变。                                                                                  |                  `boolean`                  |          `false`          |
| [大小](#size)                  | 控件的大小                                                                                            |                `"s"` `"xl"`                 |           `"m"`           |
| 风格                           | 为元素设置行内样式。                                                                                  |               `CSSProperties`               |                           |
| [timeZone](#time-zone)         | 设置时区。[了解有关时区的更多信息](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List) |                  `string`                   |                           |
| [validationState](#error)      | 验证状态                                                                                              |                 `"invalid"`                 |                           |
| [价值](#datepicker)            | 控件的价值                                                                                            |              `DateTime` `null`              |                           |
| [观点](#view)                  | 控件视图                                                                                              |            `"normal"` `"clear"`             |        `"normal"`         |
