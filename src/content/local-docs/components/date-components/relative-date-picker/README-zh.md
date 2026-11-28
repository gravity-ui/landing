<!--GITHUB_BLOCK-->

# RelativeDatePicker

<!--/GITHUB_BLOCK-->

```tsx
import {RelativeDatePicker} from '@gravity-ui/date-components';
```

`RelativeDatePicker` 组件与 `DatePicker` 组件几乎相同，但它能够使用相对日期。

## 与 `DatePicker` 的区别

`RelativeDatePicker` 可以工作在两种模式下：`absolute`（绝对）和 `relative`（相对）。你可以通过点击 `f(x)` 按钮进行交互式切换。或者，你可以在 `value` 或 `defaultValue` 对象中设置 `type` 字段。

### Absolute (绝对模式)

`RelativeDatePicker` 在 `absolute` 模式下的行为与简单的 `DatePicker` 非常相似。

<!--LANDING_BLOCK

[Learn more about DatePicker](/components/date-components/date-picker)

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

[Learn more about DatePicker](/src/components/DatePicker)

<!--/GITHUB_BLOCK-->

### Relative (相对模式)

在此模式下，`RelativeDatePicker` 以特殊的相对格式获取和返回日期值。

<!--LANDING_BLOCK

[Learn more about rules of relative formulas](/components/date-components/relative-date-field#relative-input)

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

[Learn more about rules of relative formulas](/src/components/RelativeDateField#relative-input)

<!--/GITHUB_BLOCK-->

## Properties

| 名称              | 描述                                                                                                                                   |                     类型                      |          默认值          |
| :---------------- | :----------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------: | :-----------------------: |
| aria-describedby  | 控件的 `aria-describedby`。标识描述对象的元素（或元素）。属性                                                                                             |                   `string`                    |                           |
| aria-details      | 控件的 `aria-details`。标识为对象提供详细、扩展描述的元素（或元素）。属性                                                                                             |                   `string`                    |                           |
| aria-label        | 控件的 `aria-label`。定义一个字符串值，用于标记当前元素。属性                                                                                               |                   `string`                    |                           |
| aria-labelledby   | 控件的 `aria-labelledby`。标识用于标记当前元素的元素（或元素）。属性                                                                                             |                   `string`                    |                           |
| autoFocus         | 控件的 `autofocus`。元素在渲染时是否应获得焦点。属性                                                                                                   |                   `boolean`                   |                           |
| className         | 控件的包装器类名                                                                                                                           |                   `string`                    |                           |
| defaultValue      | 设置非受控组件的初始值。                                                                                                                        |                    `Value`                    |                           |
| disabled          | 指示用户无法与控件交互                                                                                                                     |                   `boolean`                   |          `false`          |
| errorMessage      | 错误文本                                                                                                                                   |                  `ReactNode`                  |                           |
| format            | 在输入框中渲染日期时的格式。[可用格式](https://day.js.org/docs/en/display/format)                                                                                             |                   `string`                    |                           |
| hasClear          | 显示用于清除控件值的图标                                                                                                                   |                   `boolean`                   |          `false`          |
| id                | 控件的 `id` 属性                                                                                                                           |                   `string`                    |                           |
| isDateUnavailable | 为日历中的每个日期调用的回调。如果返回 true，则该日期不可用。                                                                                                   |        `((date: DateTime) => boolean)`        |                           |
| label             | 渲染在输入节点左侧的帮助文本                                                                                                               |                   `string`                    |                           |
| maxValue          | 用户可以选择的最大允许日期。                                                                                                                   |                  `DateTime`                   |                           |
| minValue          | 用户可以选择的最小允许日期。                                                                                                                   |                  `DateTime`                   |                           |
| onBlur            | 控件失去焦点时触发。将焦点事件作为回调的参数提供                                                                                                   | `((e: FocusEvent<Element, Element>) => void)` |                           |
| onFocus           | 控件获得焦点时触发。将焦点事件作为回调的参数提供                                                                                                   | `((e: FocusEvent<Element, Element>) => void)` |                           |
| onKeyDown         | 按下按键时触发。将键盘事件作为回调的参数提供                                                                                                   |    `((e: KeyboardEvent<Element>) => void)`    |                           |
| onKeyUp           | 释放按键时触发。将键盘事件作为回调的参数提供                                                                                                   |    `((e: KeyboardEvent<Element>) => void)`    |                           |
| onUpdate          | 用户更改值时触发。将新值作为回调的参数提供                                                                                                   |       `((value: Value \| null) => void`       |                           |
| pin               | 圆角                                                                                                                                       |                `TextInputPin`                 |      `'round-round'`      |
| placeholder       | 当控件没有设置值时显示的文本                                                                                                                 |                   `string`                    |                           |
| placeholderValue  | 用户首次与每个段进行交互时控制每个段默认值的占位符日期。                                                                                                   |                  `DateTime`                   | `today's date at midnigh` |
| readOnly          | 组件的值是否不可变。                                                                                                                       |                   `boolean`                   |          `false`          |
| size              | 控件的大小                                                                                                                                 |           `"s"` `"m"` `"l"` `"xl"`            |           `"m"`           |
| style             | 为元素设置内联样式。                                                                                                                       |                `CSSProperties`                |                           |
| timeZone          | 设置时区。[了解更多关于时区的信息](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List)                                                                                     |                   `string`                    |                           |
| validationState   | 验证状态                                                                                                                                   |                  `"invalid"`                  |                           |
| value             | 控件的值                                                                                                                                   |                `Value` `null`                 |                           |
| view              | 控件的视图                                                                                                                                 |             `"normal"` `"clear"`              |        `"normal"`         |
