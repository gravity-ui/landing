<!--GITHUB_BLOCK-->

# DatePicker

<!--/GITHUB_BLOCK-->

```tsx
import {DatePicker} from '@gravity-ui/date-components';
```

`DatePicker` 是一个复杂、轻量级且完全可定制的组件，旨在为您的 React 应用程序提供直观的日期选择功能。它在设计时充分考虑了用户体验和易于集成性，可以无缝地集成到表单、模态框或任何需要日期输入的 UI 元素中。如果您设置了 `value` 属性，它可以是受控组件。或者，如果您不设置任何值，它也可以是无状态组件，但在这种情况下，您可以使用可选的 `defaultValue` 属性来管理初始状态。默认情况下，该组件是无状态的。

### 有用的附加功能

要以正确的格式设置日期，您可能需要从 [Date Utils 库](https://gravity-ui.com/libraries/date-utils) 中包含其他辅助函数。

```tsx
import {dateTimeParse, dateTime} from '@gravity-ui/date-utils';
```

## 外观

`DatePicker` 的外观由 `size`、`view` 和 `pin` 属性控制。

### 尺寸

要控制 `DatePicker` 的尺寸，请使用 `size` 属性。默认尺寸为 `m`。

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

### 视图

`normal` - `DatePicker` 的主视图（默认使用）。

<!--LANDING_BLOCK
<ExampleBlock code={`<DatePicker />`}>
    <DateComponents.DatePicker />
</ExampleBlock>
LANDING_BLOCK-->

`clear` - 没有可见边框的 `DatePicker` 视图（可与自定义包装器一起使用）。

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

### 边距

`pin` 属性允许您控制左右边缘的形状，通常用于将多个控件组合成一个单元。
`pin` 属性的值由左边缘和右边缘的样式名称组成，用连字符分隔，例如 `"round-brick"`。
边缘样式包括：`round`（默认）、`circle`、`brick` 和 `clear`。

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

## 值

### 最小值和最大值

`minValue` 属性允许您指定用户可以输入的earliest日期和时间。反之，`maxValue` 属性指定用户可以输入的 latest日期和时间。如果您输入的值超出此范围，组件将更改其视图，就像无效验证状态一样。

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

## 状态

### 禁用

`DatePicker` 的状态，您不希望用户能够与该组件进行交互。

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

`readOnly` 是一个布尔属性，当设置为 `true` 时，将使 `DatePicker` 组件对用户不可变。这意味着虽然输入将显示其当前值，但用户无法更改它。

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

`DatePicker` 的状态，您想在此指示用户输入不正确。要更改 `DatePicker` 的外观，请使用值为 `"invalid"` 的 `validationState` 属性。可以通过 `errorMessage` 属性添加可选的消息文本。消息文本将渲染在组件下方。

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

## 附加内容

### 占位符

此 prop 允许您提供一个简短的提示，描述输入字段的预期值。此提示显示在输入字段中，在用户输入值之前，并在输入文本后消失。

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

允许您将标签放置在字段的左侧。标签最多可以占据 `DatePicker` 整个空间的宽度的一半。

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

### 清除按钮

`hasClear` 是一个布尔 prop，它使用户能够快速清除输入字段的内容。

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

`format` prop 是一个字符串，用于定义 `DatePicker` 组件将接受和显示的日期和时间格式。此 prop 决定了日期和时间如何以视觉方式呈现给用户，以及如何期望用户的输入格式。 [可用格式](https://day.js.org/docs/en/display/format)

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

### 自定义日期解析器

您可以通过 `parseDateFromString` prop 提供自定义解析器函数来处理粘贴的日期字符串。当您需要支持特定日期格式或与默认行为不同的自定义解析逻辑时，这非常有用。

<!--GITHUB_BLOCK-->

```tsx
import {dateTime} from '@gravity-ui/date-utils';

const customParser = (dateStr: string, format: string, timeZone?: string) => {
  // Custom parsing logic
  // For example, handle DD/MM/YYYY format specifically
  if (dateStr.match(/^\d{2}\/\d{2}\/\d{4}$/)) {
    const [day, month, year] = dateStr.split('/');
    return dateTime({input: `${year}-${month}-${day}`, timeZone});
  }
  // Fallback to default parsing
  return dateTime({input: dateStr, format, timeZone});
};

<DatePicker parseDateFromString={customParser} />;
```

<!--/GITHUB_BLOCK-->

## 时区

`timeZone` 是设置输入值时区属性。 [了解更多关于时区的信息](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List)

## 定制

如果您想在 `DatePicker` 中使用自定义日历组件，可以通过 `children` 并传递类似日历的 props 来实现。

<!--LANDING_BLOCK
[Learn more about calendar](https://gravity-ui.com/components/date-components/calendar)
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

[Learn more about calendar](https://github.com/gravity-ui/date-components/blob/main/src/components/Calendar/README.md)

<!--/GITHUB_BLOCK-->

## 属性

| 名称                           | 描述                                                                                                                                |                               类型                                 |          默认值          |
| :----------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------: | :-----------------------: |
| aria-describedby               |控件的 `aria-describedby`。标识描述对象的元素（或元素）。属性
