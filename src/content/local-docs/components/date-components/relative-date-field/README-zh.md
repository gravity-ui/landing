<!--GITHUB_BLOCK-->

# RelativeDateField

<!--/GITHUB_BLOCK-->

```tsx
import {RelativeDateField} from '@gravity-ui/date-components';
```

`RelativeDateField` 组件仅用于输入相对日期。它不能用作 “普通” `DateField`。

## 相对输入

该组件以特殊的相对格式获取值。您可以将值设置为公式，这将有助于您计算确切的日期。我们可以称之为它， `grafana-like format` 因为它与 Grafana 相对时间字段的格式非常相似。要了解有关 Grafana 中的相对时间值的更多信息 [，请阅读文档](https://grafana.com/docs/grafana/latest/panels-visualizations/query-transform-data/)。

使用此模式，您可以将数据从源传输到目标，并直接在必要的端点上计算出确切的值，而不会出现不准确的情况。

## 有效的输入规则

- 值应该从关键字开始 `now`
- 常见的相对日期表达式如下所示： `now${operand}${count}${unit}`
- 以下各项的可用值 `operand`：
  - `-` -减法
  - `+` -加法
  - `/` -把它带到一开始 `unit`
- 有效值 `count` -任意自然数
- `unit`以下的有效值：
  - `d` -天
  - `w` -周
  - `M` -月
  - `Q` -四分之一
  - `y` -年
  - `h` -小时
  - `m` -分钟

### 用法示例

> `now-1d`
>
> `now/w`
>
> `now+10d-5d/M`

## 属性

| 姓名            | 描述                                                                                                  |                    类型                     |      默认       |
| :-------------- | :---------------------------------------------------------------------------------------------------- | :-----------------------------------------: | :-------------: |
| 咏叹调描述者    | 控件的 `aria-describedby` 属性                                                                        |                  `string`                   |                 |
| aria-详细信息   | 控件的 `aria-details` 属性                                                                            |                  `string`                   |                 |
| aria-label      | 控件的 `aria-label` 属性                                                                              |                  `string`                   |                 |
| aria-labelledby | 控件的 `aria-labelledby` 属性                                                                         |                  `string`                   |                 |
| autoFocus       | 控件的 `autofocus` 属性                                                                               |                  `boolean`                  |                 |
| className       | 控件的包装器类名                                                                                      |                  `string`                   |                 |
| defaultValue    | 设置非受控组件的初始值。                                                                              |                  `string`                   |                 |
| 残疾的          | 表示用户无法与控件进行交互                                                                            |                  `boolean`                  |     `false`     |
| errorMessage    | 错误文本                                                                                              |                 `ReactNode`                 |                 |
| hasClear        | 显示用于清除控件值的图标                                                                              |                  `boolean`                  |     `false`     |
| hasTime         | 在弹出值中显示时间字段                                                                                |                  `boolean`                  |     `false`     |
| id              | 控件的 `id` 属性                                                                                      |                  `string`                   |                 |
| 标签            | 在输入节点左侧呈现的帮助文本                                                                          |                  `string`                   |                 |
| leftContent     | 在标签和输入之前呈现的用户`节点                                                                       |              `React.ReactNode`              |                 |
| onBlur          | 当控件失去对焦时触发。提供焦点事件作为回调的参数                                                      | `(e:FocusEvent<Element, Element>) => 无效)` |                 |
| onFocus         | 当控件获得焦点时触发。提供焦点事件作为回调的参数                                                      | `(e:FocusEvent<Element, Element>) => 无效)` |                 |
| onKeyDown       | 按下按键时触发。提供键盘事件作为回调的参数                                                            |    `(e:keyboardEvent<Element>) = void)>`    |                 |
| onKeyUp         | 释放密钥时触发。提供键盘事件作为回调的参数                                                            |    `(e:keyboardEvent<Element>) = void)>`    |                 |
| onUpdate        | 当用户更改该值时触发。提供新值作为回调的参数                                                          |       `（值：字符串\| null) => 无效`        |                 |
| 大头针          | 拐角处的圆角                                                                                          |                  `string`                   | `'round-round'` |
| 占位符          | 未设置值时在控件中显示的文本                                                                          |                  `string`                   |                 |
| readOnly        | 组件的值是否不可变。                                                                                  |                  `boolean`                  |     `false`     |
| rightContent    | 在输入节点和清除按钮之后呈现的用户`节点                                                               |              `React.ReactNode`              |                 |
| 尺寸            | 控件的大小                                                                                            |                `"s"` `"xl"`                 |      `"m"`      |
| 风格            | 为元素设置行内样式。                                                                                  |               `CSSProperties`               |                 |
| timeZone        | 设置时区。[了解有关时区的更多信息](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List) |                  `string`                   |                 |
| validationState | 验证状态                                                                                              |                 `"invalid"`                 |                 |
| 价值            | 控件的价值                                                                                            |               `string` `null`               |                 |
| 观点            | 控件视图                                                                                              |            `"normal"` `"clear"`             |   `"normal"`    |
