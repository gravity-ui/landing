<!--GITHUB_BLOCK-->

# Card

<!--/GITHUB_BLOCK-->

`Card` 是一个可复用的 React 组件，它基本上是一个具有可自定义样式和功能的卡片式容器。它用于以视觉吸引力强且组织良好的方式显示信息或内容。

```tsx
import {Card} from '@gravity-ui/uikit';
```

## 外观

`Card` 可以显示多种样式组合：

- `theme`: `normal`, `info`, `success`, `warning`, `danger`, 或 `utility`。
- `type`: `selection`, `action`, 或 `container`。
- `view`:`outlined` 或 `clear`，或 `outlined`, `filled`, 或 `raised`（取决于 `type` 参数）。

## 主题 (Theme)

此参数用于指定卡片的主题样式。它决定了卡片的配色方案和外观。

通过指定不同的主题值，您可以自定义 `Card` 的视觉外观，以匹配您的目的和所需的样式。

- `normal`: 卡片的正常/默认主题。
- `info`: 用于显示中性信息的 `theme`。
- `success`: 用于显示正面或肯定内容的 `theme`。
- `warning`: 用于显示警告的 `theme`。
- `danger`: 用于显示与关键问题或错误相关内容的 `theme`。
- `utility`: 用于显示有用提示的 `theme`。

<!--SANDBOX
import {Card} from '@gravity-ui/uikit';
import {type CSSProperties} from 'react';

const cardStyle: CSSProperties = {
    width: '120px',
    height: '120px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};

const gridStyle: CSSProperties = {
    display: 'grid',
    gridAutoFlow: 'column',
    gap: '10px',
};

export default function () {
    return (
        <div style={gridStyle}>
            <Card style={cardStyle} theme="normal" size="l">
                Normal
            </Card>
            <Card style={cardStyle} theme="info" size="l">
                Info
            </Card>
            <Card style={cardStyle} theme="success" size="l">
                Success
            </Card>
            <Card style={cardStyle} theme="warning" size="l">
                Warning
            </Card>
            <Card style={cardStyle} theme="danger" size="l">
                Danger
            </Card>
            <Card style={cardStyle} theme="utility" size="l">
                Utility
            </Card>
        </div>
    );
}
SANDBOX-->

## 类型 (Type)

此参数用于定义 `Card` 组件的类型。它允许您自定义卡片的外观和行为。

- `container`: 作为其他元素容器的卡片。它为内容提供结构化布局。
- `action`: 带有交互元素（如按钮）的卡片，点击时会触发一个操作。
- `selection`: 可以被选中或点击以执行特定操作的卡片。

<!--SANDBOX
import {Card} from '@gravity-ui/uikit';
import {type CSSProperties} from 'react';

const cardStyle: CSSProperties = {
    width: '120px',
    height: '120px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};

const gridStyle: CSSProperties = {
    display: 'grid',
    gridAutoFlow: 'column',
    gap: '10px',
};

export default function () {
    return (
        <div style={gridStyle}>
            <Card style={cardStyle} view="outlined" type="container" size="l">
                Container
            </Card>
            <Card
                style={cardStyle}
                view="outlined"
                type="action"
                onClick={() => alert(':wave: hey')}
                size="l"
            >
                action with onClick
            </Card>
            <Card style={cardStyle} view="outlined" type="selection" size="l">
                Selection
            </Card>
        </div>
    );
}
SANDBOX-->

## 视图 (View)

此参数用于指定 `Card` 的视图或布局样式。它允许您自定义卡片内容的出现和排列方式。

- `clear`: 无样式。
- `outlined`: 应用一个细边框来突出卡片内容。
- `filled`: 填充卡片内容。
- `raised`: 应用阴影以稍微抬高容器。

<!--SANDBOX
import {Card} from '@gravity-ui/uikit';
import {type CSSProperties} from 'react';

const cardStyle: CSSProperties = {
    width: '120px',
    height: '120px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};

const gridStyle: CSSProperties = {
    display: 'grid',
    gridAutoFlow: 'column',
    gap: '10px',
};

export default function () {
    return (
        <div style={gridStyle}>
            <Card style={cardStyle} view="clear" type="container" size="l">
                Clear
            </Card>
            <Card style={cardStyle} view="outlined" type="container" size="l">
                Outlined
            </Card>
            <Card style={cardStyle} view="filled" type="container" size="l">
                Filled
            </Card>
            <Card style={cardStyle} view="raised" type="container" size="l">
                Raised
            </Card>
        </div>
    );
}
SANDBOX-->

## 属性 (Properties)

| 名称      | 描述                                                                                       |    类型     |    默认值    |
| :-------- | :------------------------------------------------------------------------------------------------ | :---------: | :-----------: |
| children  | 卡片内容                                                                                      | `ReactNode` |               |
| type      | `Card` 的类型决定了哪些属性可用。                                                                       |  `string`   | `"container"` |
| view      | 此属性仅适用于 `"container"` 和 `"selection"` 类型。                                                 |  `string`   | `"outlined"`  |
| theme     | 卡片的基础颜色。此属性仅适用于 `"container"` 类型。                                                 |  `string`   |  `"normal"`   |
| size      | `Card` 的大小决定了哪些属性可用。                                                                       |  `string`   |     `"m"`     |
| className | CSS 类名                                                                                         |  `string`   |               |
| onClick   | 卡片点击处理程序。此属性仅适用于 `"selection"` 和 `"action"` 类型。                                | `Function`  |               |
| selected  | 选中的卡片。此属性仅适用于 `"selection"` 类型。                                                     |  `Boolean`  |               |
| disabled  | 禁用的卡片。此属性仅适用于 `"selection"` 和 `"action"` 类型。                                     |  `Boolean`  |               |
| qa        | `data-qa` HTML 属性，用于测试                                                                       |  `string`   |               |

## CSS API

| 名称                        | 描述      |
| :-------------------------- | :--------------- |
| `--g-card-background-color` | 背景颜色 |
| `--g-card-border-width`     | 边框宽度     |
| `--g-card-border-color`     | 边框颜色     |
| `--g-card-border-radius`    | 边框圆角    |
| `--g-card-box-shadow`       | 阴影           |
