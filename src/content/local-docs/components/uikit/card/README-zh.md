<!--GITHUB_BLOCK-->

# Card

<!--/GITHUB_BLOCK-->

```tsx
import {Card} from '@gravity-ui/uikit';
```

## 描述

`Card` 是一个可重用的 React 组件，基本上是一个卡片式容器，具有可自定义的样式和功能。它用于以视觉吸引力强且组织良好的方式显示信息或内容。

## 外观

`Card` 可以使用多种样式组合显示：

- `theme`：`normal`、`info`、`success`、`warning`、`danger` 或 `utility`。
- `type`：`selection`、`action` 或 `container`。
- `view`：`outlined` 或 `clear`，或 `outlined`、`filled` 或 `raised`（取决于 `type` 参数）。

## 主题

此参数用于指定卡片的主题样式。它决定了卡片的配色方案和外观。

通过指定不同的主题值，您可以自定义 `Card` 的视觉外观，以匹配您的目的和所需的样式。

- `normal`：卡片的正常/默认主题。
- `info`：用于显示中性信息的主题。
- `success`：用于显示积极或肯定内容的主题。
- `warning`：用于显示警告的主题。
- `danger`：用于显示与关键问题或错误相关内容的主题。
- `utility`：用于显示有用提示的主题。

<!--GITHUB_BLOCK-->

```tsx
const style = {
    width: '120px',
    height: '120px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};

<Card style={style} theme="normal" size="l">Normal</Card>
<Card style={style} theme="info" size="l">Info</Card>
<Card style={style} theme="success" size="l">Success</Card>
<Card style={style} theme="warning" size="l">Warning</Card>
<Card style={style} theme="danger" size="l">Danger</Card>
<Card style={style} theme="utility" size="l">Utility</Card>
```

<!--/GITHUB_BLOCK-->

## 类型

此参数用于定义 `Card` 组件的类型。它允许您自定义卡片的外观和行为。

- `container`：作为其他元素容器的卡片。它为内容提供结构化布局。
- `action`：带有交互元素的卡片，例如按钮，点击时触发操作。
- `selection`：可以选择或点击以执行特定操作的卡片。

<!--GITHUB_BLOCK-->

```tsx
const style = {
    width: '120px',
    height: '120px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};

<Card style={style} view="outlined" type="container" size="l">Container</Card>
<Card style={style} view="outlined" type="action" size="l">action with onClick</Card>
<Card style={style} view="outlined" type="selection" size="l">Selection</Card>
```

<!--/GITHUB_BLOCK-->

## 视图

此参数用于指定 `Card` 的视图或布局样式。它允许您自定义卡片内容的外观和排列。

- `clear`：无样式。
- `outlined`：应用细边框以突出显示卡片内容。
- `filled`：填充卡片内容。
- `raised`：应用阴影以轻微提升容器。

<!--GITHUB_BLOCK-->

```tsx
const style = {
    width: '120px',
    height: '120px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};

<Card style={style} view="clear" type="container" size="l">Clear</Card>
<Card style={style} view="outlined" type="container" size="l">Outlined</Card>
<Card style={style} view="filled" type="container" size="l">Filled</Card>
<Card style={style} view="raised" type="container" size="l">Raised</Card>
```

<!--/GITHUB_BLOCK-->

## 属性

| 名称      | 描述                                                                |    类型     |    默认值     |
| :-------- | :------------------------------------------------------------------ | :---------: | :-----------: |
| children  | 卡片内容                                                            | `ReactNode` |               |
| type      | `Card` 类型决定了哪些属性可用。                                     |  `string`   | `"container"` |
| view      | 此属性仅适用于 `"container"` 和 `"selection"` 类型。                |  `string`   | `"outlined"`  |
| theme     | 卡片的基本颜色。此属性仅适用于 `"container"` 类型。                 |  `string`   |  `"normal"`   |
| size      | `Card` 大小决定了哪些属性可用。                                     |  `string`   |     `"m"`     |
| className | CSS 类                                                              |  `string`   |               |
| onClick   | 卡片点击处理程序。此属性仅适用于 `"selection"` 和 `"action"` 类型。 | `Function`  |               |
| selected  | 选中的卡片。此属性仅适用于 `"selection"` 类型。                     |  `Boolean`  |               |
| disabled  | 禁用的卡片。此属性仅适用于 `"selection"` 和 `"action"` 类型。       |  `Boolean`  |               |
| qa        | `data-qa` HTML 属性，用于测试                                       |  `string`   |               |

## CSS API

| 名称                        | 描述     |
| :-------------------------- | :------- |
| `--g-card-background-color` | 背景颜色 |
| `--g-card-border-width`     | 边框宽度 |
| `--g-card-border-color`     | 边框颜色 |
| `--g-card-border-radius`    | 边框半径 |
| `--g-card-box-shadow`       | 阴影     |
