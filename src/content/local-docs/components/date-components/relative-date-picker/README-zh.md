<!--GITHUB_BLOCK-->

# RelativeDatePicker

<!--/GITHUB_BLOCK-->

```tsx
import {RelativeDatePicker} from '@gravity-ui/date-components';
```

`RelativeDatePicker` 与组件几乎相同， `DatePicker` 但它能够使用相对日期。

## 区别于 `DatePicker`

`RelativeDatePicker` 可以在两种模式下工作： `absolute` 和 `relative`。您可以通过点击 `f(x)` 按钮进行交互式切换。或者你可以在 `value` 或 `defaultValue` 对象 `type` 中设置字段。

### 绝对

`RelativeDatePicker` `absolute` 模式下的行为与简单非常相似 `DatePicker`。

<!--LANDING_BLOCK

[Learn more about DatePicker](/components/date-components/date-picker)

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

[了解有关 DatePicker 的更多信息](/src/components/DatePicker)

<!--/GITHUB_BLOCK-->

### 相对的

在此模式下，以特殊相对格式 `RelativeDatePicker` 获取和返回值。

<!--LANDING_BLOCK

[Learn more about rules of relative formulas](/components/date-components/relative-date-field#relative-input)

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

[了解有关相对公式规则的更多信息](/src/components/RelativeDateField#relative-input)

<!--/GITHUB_BLOCK-->

## 属性

| 姓名              | 描述                                                                                                  |                    类型                     |           默认            |
| :---------------- | :---------------------------------------------------------------------------------------------------- | :-----------------------------------------: | :-----------------------: |
| 咏叹调描述者      | 控件的 `aria-describedby`。标识描述对象的一个或多个元素。属性                                         |                  `string`                   |                           |
| aria-详细信息     | 控件的 `aria-details`。标识为对象提供详细扩展描述的一个或多个元素。属性                               |                  `string`                   |                           |
| aria-label        | 控件的 `aria-label`。定义标记当前元素的字符串值。属性                                                 |                  `string`                   |                           |
| aria-labelledby   | 控件的 `aria-labelledby`。标识标记当前元素的一个或多个元素。属性                                      |                  `string`                   |                           |
| autoFocus         | 控件的 `autofocus`。元素是否应该在 render. 属性上获得焦点                                             |                  `boolean`                  |                           |
| className         | 控件的包装器类名                                                                                      |                  `string`                   |                           |
| defaultValue      | 设置非受控组件的初始值。                                                                              |                   `Value`                   |                           |
| 残疾的            | 表示用户无法与控件进行交互                                                                            |                  `boolean`                  |          `false`          |
| errorMessage      | 错误文本                                                                                              |                 `ReactNode`                 |                           |
| 格式              | 在输入中呈现时的日期格式。[可用格式](https://day.js.org/docs/en/display/format)                       |                  `string`                   |                           |
| hasClear          | 显示用于清除控件值的图标                                                                              |                  `boolean`                  |          `false`          |
| id                | 控件的 `id` 属性                                                                                      |                  `string`                   |                           |
| isDateUnavailable | 为日历的每个日期调用的回调。如果返回 true，则该日期不可用。                                           |       `((date: DateTime) => boolean)`       |                           |
| 标签              | 在输入节点左侧呈现的帮助文本                                                                          |                  `string`                   |                           |
| maxValue          | 用户可以选择的最大允许日期。                                                                          |                 `DateTime`                  |                           |
| minValue          | 用户可以选择的最小允许日期。                                                                          |                 `DateTime`                  |                           |
| onBlur            | 当控件失去对焦时触发。提供焦点事件作为回调的参数                                                      | `(e:FocusEvent<Element, Element>) => 无效)` |                           |
| onFocus           | 当控件获得焦点时触发。提供焦点事件作为回调的参数                                                      | `(e:FocusEvent<Element, Element>) => 无效)` |                           |
| onKeyDown         | 按下按键时触发。提供键盘事件作为回调的参数                                                            |    `(e:keyboardEvent<Element>) = void)>`    |                           |
| onKeyUp           | 释放密钥时触发。提供键盘事件作为回调的参数                                                            |    `(e:keyboardEvent<Element>) = void)>`    |                           |
| onUpdate          | 当用户更改该值时触发。提供新值作为回调的参数                                                          |        `（值：价值\| null) => 无效`         |                           |
| 大头针            | 拐角处的圆角                                                                                          |               `TextInputPin`                |      `'round-round'`      |
| 占位符            | 未设置值时在控件中显示的文本                                                                          |                  `string`                   |                           |
| placeholderValue  | 一个占位符日期，用于控制用户首次与每个区段互动时的默认值。                                            |                 `DateTime`                  | `today's date at midnigh` |
| readOnly          | 组件的值是否不可变。                                                                                  |                  `boolean`                  |          `false`          |
| 尺寸              | 控件的大小                                                                                            |                `"s"` `"xl"`                 |           `"m"`           |
| 风格              | 为元素设置行内样式。                                                                                  |               `CSSProperties`               |                           |
| timeZone          | 设置时区。[了解有关时区的更多信息](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List) |                  `string`                   |                           |
| validationState   | 验证状态                                                                                              |                 `"invalid"`                 |                           |
| 价值              | 控件的价值                                                                                            |               `Value` `null`                |                           |
| 观点              | 控件视图                                                                                              |            `"normal"` `"clear"`             |        `"normal"`         |
