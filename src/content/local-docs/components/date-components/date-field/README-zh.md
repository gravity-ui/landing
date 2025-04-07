<!--GITHUB_BLOCK-->

# DateField

<!--/GITHUB_BLOCK-->

```tsx
import {DateField} from '@gravity-ui/date-components';
```

`DateField` 组件是一个多功能且便捷的输入字段，专为 React 应用程序中的日期输入而设计。它具有直观的界面和易于集成，非常适合需要输入日期或时间的任何表单，例如活动计划程序、预订系统或数据驱动的报告。如果设置 `value` 属性，则可以对其进行控制。或者，如果你不设置任何值，它可能会不受控制，但在这种情况下，你可以使用可选属性 `defaultValue`管理初始状态。默认情况下，组件不受控制。

### 有用的补充

要以正确的格式设置日期，您可能需要包括 D [ate Util](https://gravity-ui.com/libraries/date-utils) s 库中的其他助手

```tsx
import {dateTimeParse} from '@gravity-ui/date-utils';
```

## 外观

的 `DateField` 外观由 `size` 、 `view` 和 `pin` 属性控制。

### 大小

要控制大小， `DateField` 请使用该 `size` 属性。默认大小为 `m`。

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

### 查看

`normal` -的主视图 `DateField` （默认使用）。

<!--LANDING_BLOCK
<ExampleBlock code={`<DateField />`}>
    <DateComponents.DateField />
</ExampleBlock>
LANDING_BLOCK-->

`clear` - `DateField` 无可见边框的视图（可与自定义包装一起使用）

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

### 别针

该 `pin` 属性允许您控制左右边缘的形状，通常用于将多个控件组合成一个单元。
该 `pin` 属性的值由左边的样式名称除以短划线组成，例如 `"round-brick"`。
边缘样式为： `round` （默认） `circle` 、 `brick` 和 `clear`。

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

## 价值

### 最小值和最大值

该 `minValue` 属性允许您指定用户可以输入的最早日期和时间。相反，该 `maxValue` 属性指定了可以输入的最新日期和时间。如果你输入的值超出这个边界组件，它的视图就会改变，就像在验证状态无效的情况下一样。

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

## 国家

### 已禁用

您不希望用户能够与组件交互的状态。 `DateField`

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

### 只读

`readOnly` 是一个布尔属性，当设置为 true 时，该 `DateField` 组件对用户来说是不可变的。这意味着，虽然输入将显示其当前值，但用户将无法对其进行更改。

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

### 错误

您要指明用户输入错误的状态。 `DateField`要更改 `DateField` 外观，请使用带有 `"invalid"` 值的 `validationState` 属性。可以通过该 `errorMessage` 属性添加可选的消息文本。消息文本将在组件下方呈现。

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

## 其他内容

### 占位符

这个道具允许你提供一个简短的提示来描述输入字段的预期值。此提示在用户输入值之前显示在输入字段中，并在输入文本时消失。

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

### 标签

允许您将标签放在字段的左侧。标签占用的宽度不能超过整个空间宽度的一半 `DateField`。

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

### “清除” 按钮

`hasClear` 是一个布尔道具，它使用户能够快速清除输入字段的内容。

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

### 开始内容

允许您向字段的起始部分添加内容。它位于所有其他组件之前。

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

### 结束内容

允许您向字段的末尾部分添加内容。它放置在所有其他组件之后。

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

## 格式

`format` prop 是一个字符串，用于定义 `DateField` 组件将接受和显示的日期和时间格式。这个属性决定了如何直观地向用户呈现日期和时间，以及如何格式化用户的输入。[可用格式](https://day.js.org/docs/en/display/format)

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

## 时区

`timeZone` 是设置输入中值的时区的属性。[了解有关时区的更多信息](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List)

## 属性

| 姓名              | 描述                                                                                                  |                    类型                     |           默认            |
| :---------------- | :---------------------------------------------------------------------------------------------------- | :-----------------------------------------: | :-----------------------: |
| 咏叹调描述者      | 控件的 `aria-describedby` 属性                                                                        |                  `string`                   |                           |
| aria-详细信息     | 控件的 `aria-details` 属性                                                                            |                  `string`                   |                           |
| aria-label        | 控件的 `aria-label` 属性                                                                              |                  `string`                   |                           |
| aria-labelledby   | 控件的 `aria-labelledby` 属性                                                                         |                  `string`                   |                           |
| autoFocus         | 控件的 `autofocus` 属性                                                                               |                  `boolean`                  |                           |
| className         | 控件的包装器类名                                                                                      |                  `string`                   |                           |
| defaultValue      | 设置非受控组件的初始值。                                                                              |                 `DateTime`                  |                           |
| 残疾的            | 表示用户无法与控件进行交互                                                                            |                  `boolean`                  |          `false`          |
| errorMessage      | 错误文本                                                                                              |                 `ReactNode`                 |                           |
| 格式              | 在输入中呈现时的日期格式。[可用格式](https://day.js.org/docs/en/display/format)                       |                  `string`                   |                           |
| hasClear          | 显示用于清除控件值的图标                                                                              |                  `boolean`                  |          `false`          |
| id                | 控件的 `id` 属性                                                                                      |                  `string`                   |                           |
| isDateUnavailable | 为日历的每个日期调用的回调。如果返回 true，则该日期不可用。                                           |       `((date: DateTime) => boolean)`       |                           |
| 标签              | 在输入节点左侧呈现的帮助文本                                                                          |                  `string`                   |                           |
| startContent      | 在标签和输入之前呈现的用户`节点                                                                       |              `React.ReactNode`              |                           |
| maxValue          | 用户可以选择的最大允许日期。                                                                          |                 `DateTime`                  |                           |
| minValue          | 用户可以选择的最小允许日期。                                                                          |                 `DateTime`                  |                           |
| onBlur            | 当控件失去对焦时触发。提供焦点事件作为回调的参数                                                      | `(e:FocusEvent<Element, Element>) => 无效)` |                           |
| onFocus           | 当控件获得焦点时触发。提供焦点事件作为回调的参数                                                      | `(e:FocusEvent<Element, Element>) => 无效)` |                           |
| onKeyDown         | 按下按键时触发。提供键盘事件作为回调的参数                                                            |    `(e:keyboardEvent<Element>) = void)>`    |                           |
| onKeyUp           | 释放密钥时触发。提供键盘事件作为回调的参数                                                            |    `(e:keyboardEvent<Element>) = void)>`    |                           |
| onUpdate          | 当用户更改该值时触发。提供新值作为回调的参数                                                          |      `（值：日期时间\| null) => 无效`       |                           |
| 大头针            | 拐角处的圆角                                                                                          |                  `string`                   |      `'round-round'`      |
| 占位符            | 未设置值时在控件中显示的文本                                                                          |                  `string`                   |                           |
| placeholderValue  | 一个占位符日期，用于控制用户首次与每个区段互动时的默认值。                                            |                 `DateTime`                  | `today's date at midnigh` |
| readOnly          | 组件的值是否不可变。                                                                                  |                  `boolean`                  |          `false`          |
| endContent        | 在输入节点和清除按钮之后呈现的用户`节点                                                               |              `React.ReactNode`              |                           |
| 尺寸              | 控件的大小                                                                                            |                `"s"` `"xl"`                 |           `"m"`           |
| 风格              | 为元素设置行内样式。                                                                                  |               `CSSProperties`               |                           |
| timeZone          | 设置时区。[了解有关时区的更多信息](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List) |                  `string`                   |                           |
| validationState   | 验证状态                                                                                              |                 `"invalid"`                 |                           |
| 价值              | 控件的价值                                                                                            |              `DateTime` `null`              |                           |
| 观点              | 控件视图                                                                                              |            `"normal"` `"clear"`             |        `"normal"`         |
