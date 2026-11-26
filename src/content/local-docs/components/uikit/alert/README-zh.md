`Alert` 组件用于显示醒目的消息，以引起用户对重要信息的注意。

```tsx
import {Alert} from '@gravity-ui/uikit';
```

### 主题 (Theme)

`normal`: 主要主题（默认使用）。

`info`: 用于任何类型的常规信息。

`success`: 用于积极信息。

`warning`: 用于需要注意的信息。

`danger`: 用于严重错误。

`utility`: 用于有用的提示。

`clear`: 无样式，适用于在其他组件中使用（例如，作为 `Popover` 的 `content`）。

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

### 视图 (View)

`filled`: 用于调整警告框的背景颜色（默认使用）。

`outlined`: 用于调整警告框的边框颜色。

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

### 布局 (Layout)

`vertical`: 当存在带有按钮的 `actions` 属性时，用于将用户引导至内容。它允许按钮显示在文本下方（默认使用）。

`horizontal`: 当存在带有按钮的 `actions` 属性时，用于将用户引导至内容。它允许按钮显示在文本右侧。

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

### 圆角 (Corners)

`rounded`: 启用警告框的圆角（默认使用）。

`square`: 启用警告框的直角。

GRAVITY_TRANSLATION_BLOCK_6_END

GRAVITY_TRANSLATION_BLOCK_7_END

## 警告框标题 (Alert title)

`title`: 警告框标题。它的优先级低于 `Alert.Title`。

GRAVITY_TRANSLATION_BLOCK_8_END

GRAVITY_TRANSLATION_BLOCK_9_END

## 警告框消息 (Alert message)

`message`: 警告框消息。它应该足够有意义，能够完整地解释警告框的内容。

## `onClose`

`onClose`: 当用户点击警告框的关闭按钮时调用的回调函数。当定义此属性时，关闭按钮将可见。

GRAVITY_TRANSLATION_BLOCK_10_END

GRAVITY_TRANSLATION_BLOCK_11_END

### 对齐 (Align)

确定 `Alert` 组件内部内容的垂直对齐方式。

`baseline`: 默认对齐。

`center`: 内容在 `Alert` 组件内垂直居中。如果操作占用的空间比文本多，或者图标必须位于内容中间，这可能很有用。

GRAVITY_TRANSLATION_BLOCK_12_END

GRAVITY_TRANSLATION_BLOCK_13_END

## 属性 (Properties)

| 名称 | 描述 | 类型 | 默认值 |
| :---------- | :-------------------------------------------------------------------------- | :--------------------------------------------------------------------------: | :----------: |
| theme | 警报的外观 | `"normal"` `"info"` `"success"` `"warning"` `"danger"` `"utility"` `"clear"` | `"normal"` |
| size | 警报的大小 | `"s"` `"m"` `"l"` | `"m"` |
| view | 启用/禁用警报的背景颜色 | `"filled"` `"outlined"` | `"filled"` |
| layout | 当 `actions` 属性包含按钮时，用于将用户引导至内容 | `"vertical"` `"horizontal"` | `"vertical"` |
| actionsLayout | 用于控制操作按钮的方向 | `"vertical"` `"horizontal"` | `"vertical"` |
| corners | 用于警报窗口的圆角/方角 | `"rounded"` `"square"` | `"rounded"` |
| title | 警报的标题 | `string` | |
| message | 警报的消息 | `React.ReactNode` | |
| onClose | 用户点击警报关闭按钮时调用的回调函数 | `Function` | |
| actions | 按钮或完整自定义组件的数组 | `React.ReactNode` `"AlertAction"` | |
| align | 确定 Alert 组件内的内容如何垂直对齐 | `"center"` `"baseline"` | `"baseline"` |
| style | HTML style 属性 | `React.CSSProperties` | |
| className | 警报类的名称 | `string` | |
| icon | 覆盖默认图标 | `React.ReactNode` | |
| qa | HTML `data-qa` 属性，用于测试 | `string` | |

## CSS API

| 名称                               | 描述                                                                    |
| :--------------------------------- | :----------------------------------------------------------------------------- |
| `--g-alert-padding`                | 侧边内边距。                                                                 |
| `--g-alert-border-radius`          | 边框圆角。                                                                 |
| `--g-alert-icon-margin-inline-end` | 图标与内容部分（文本内容 + 操作）之间的缩进         |
| `--g-alert-close-btn-margin`       | 内容部分（文本内容 + 操作）与关闭按钮之间的缩进 |
| `--g-alert-actions-margin`         | 文本内容与操作之间的间隙。                                          |
| `--g-alert-message-title-indent`   | 标题与消息之间的间隙。                                                 |
| `--g-alert-actions-gap`            | 操作按钮之间的间隙。                                                    |
| `--g-alert-title-text-color`       | 标题颜色。                                                                   |
| `--g-alert-title-font-size`        | 标题字体大小。                                                               |
| `--g-alert-title-line-height`      | 标题行高。                                                             |
| `--g-alert-message-text-color`     | 消息颜色。                                                                   |
| `--g-alert-message-font-size`      | 消息字体大小。                                                             |
| `--g-alert-message-font-weight`    | 消息字体粗细。                                                           |
| `--g-alert-message-line-height`    | 消息行高。                                                           |