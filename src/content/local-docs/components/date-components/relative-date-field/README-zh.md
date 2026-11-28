<!--GITHUB_BLOCK-->

# RelativeDateField

<!--/GITHUB_BLOCK-->

```tsx
import {RelativeDateField} from '@gravity-ui/date-components';
```

`RelativeDateField` 组件仅用于输入相对日期。它不能用作“普通”的 `DateField`。

## 相对输入

该组件以特殊的相对格式获取值。您将值设置为公式，这些公式将帮助您计算确切的日期。我们可以称之为 `grafana-like format`，因为它与 Grafana 的相对时间字段格式非常相似。要了解更多关于 Grafana 中的相对时间值，请阅读[文档](https://grafana.com/docs/grafana/latest/panels-visualizations/query-transform-data/)。

使用此模式，您可以将数据从源传递到目标，并在必要的端点直接计算确切值，而不会出现不准确。

## 有效输入规则

- 值应以关键字 `now` 开头
- 相对日期表达式通常看起来像：`now${operand}${count}${unit}`
- `operand` 的可用值：
  - `-` - 减法
  - `+` - 加法
  - `/` - 归结到 `unit` 的开始
- `count` 的有效值 - 任何自然数
- `unit` 的有效值：
  - `d` - 天
  - `w` - 周
  - `M` - 月
  - `Q` - 季度
  - `y` - 年
  - `h` - 小时
  - `m` - 分钟

### 使用示例

> `now-1d`
>
> `now/w`
>
> `now+10d-5d/M`

## 属性

| 名称             | 描述                                                                                                         |                     类型                      |     默认值     |
| :--------------- | :----------------------------------------------------------------------------------------------------------- | :-------------------------------------------: | :------------: |
| aria-describedby |控件的 `aria-describedby` 属性                                                                               |                   `string`                    |                |
| aria-details     |控件的 `aria-details` 属性                                                                                   |                   `string`                    |                |
| aria-label       |控件的 `aria-label` 属性                                                                                     |                   `string`                    |                |
| aria-labelledby  |控件的 `aria-labelledby` 属性                                                                                |                   `string`                    |                |
| autoFocus        |控件的 `autofocus` 属性                                                                                      |                   `boolean`                   |                |
| className        |控件的包装器类名                                                                                             |                   `string`                    |                |
| defaultValue     |为非受控组件设置初始值。                                                                                     |                   `string`                    |                |
| disabled         |指示用户无法与控件交互                                                                                       |                   `boolean`                   |     `false`     |
| errorMessage     |错误文本                                                                                                      |                  `ReactNode`                  |                |
| hasClear         |显示用于清除控件值的图标                                                                                     |                   `boolean`                   |     `false`     |
| hasTime          |在弹出值中显示时间字段                                                                                       |                   `boolean`                   |     `false`     |
| id               |控件的 `id` 属性                                                                                             |                   `string`                    |                |
| label            |渲染在输入节点左侧的帮助文本                                                                                 |                   `string`                    |                |
| leftContent      |用户在标签和输入之前渲染的节点                                                                               |               `React.ReactNode`               |                |
| onBlur           |控件失去焦点时触发。将焦点事件作为回调的参数提供                                                             | `((e: FocusEvent<Element, Element>) => void)` |                |
| onFocus          |控件获得焦点时触发。将焦点事件作为回调的参数提供                                                             | `((e: FocusEvent<Element, Element>) => void)` |                |
| onKeyDown        |按下按键时触发。将键盘事件作为回调的参数提供                                                                 |    `((e: KeyboardEvent<Element>) => void)`    |                |
| onKeyUp          |释放按键时触发。将键盘事件作为回调的参数提供                                                                 |    `((e: KeyboardEvent<Element>) => void)`    |                |
| onUpdate         |用户更改值时触发。将新值作为回调的参数提供                                                                   |      `((value: string \| null) => void`       |                |
| pin              |圆角                                                                                                         |                   `string`                    | `'round-round'` |
| placeholder      |控件在没有设置值时显示的文本                                                                                 |                   `string`                    |                |
| readOnly         |组件的值是否不可变。                                                                                         |                   `boolean`                   |     `false`     |
| rightContent     |用户在输入节点和清除按钮之后渲染的节点                                                                       |               `React.ReactNode`               |                |
| size             |控件的大小                                                                                                   |           `"s"` `"m"` `"l"` `"xl"`            |      `"m"`      |
| style            |为元素设置内联样式。                                                                                         |                `CSSProperties`                |                |
| timeZone         |设置时区。[了解更多关于时区的信息](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List) |                   `string`                    |                |
| validationState  |验证状态                                                                                                     |                  `"invalid"`                  |                |
| value            |控件的值                                                                                                     |                `string` `null`                |                |
| view             |控件的视图                                                                                                   |             `"normal"` `"clear"`              |   `"normal"`    |
