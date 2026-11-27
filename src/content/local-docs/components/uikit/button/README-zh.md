按钮是触发某些操作的控件。虽然这是它们的主要用途，但在极少数情况下，它们也可以用作导航到其他页面的链接。

```tsx
import {Button} from '@gravity-ui/uikit';
```

## 外观

`Button` 在外观上有四种类型：基础、描边、扁平化和对比。
`Button` 的外观由 `view` 属性决定。

### 基础

`action`: 最具辨识度的 `Button` 类型。用于屏幕上需要最多关注的主要操作。
我们建议每页只使用一个此类按钮。

`normal`: 默认的 `Button` 类型，用于次要操作或在不引起过多关注的情况下保持操作的重要性。

`raised`: 放置在内容之上，作为浮动元素，通常具有固定位置。

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

### 描边

`outlined`: 用于需要较少关注的次要操作。可以单独使用，也可以与主按钮一起使用；后一种情况，必须是强调性的按钮。

`outlined-action`: 通常用作指向另一个页面或外部资源的链接。

此类型还具有语义变体，可在需要额外语义时使用：`outlined-info`、`outlined-success`、`outlined-warning` 和 `outlined-danger`。

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

### 扁平化

`flat`: 用于需要最少关注的辅助操作。通常在按钮列表或编辑器中的操作图标（无文本）中使用。

`flat-secondary`: 比 `flat` 按钮的强调性更弱。通常用作对话框和模态窗口中的次要按钮。

`flat-action`: 通常用作指向另一个页面或外部资源的链接。

它还具有语义变体，可在需要额外语义时使用：`outlined-info`、`outlined-success`、`outlined-warning` 和 `outlined-danger`。

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

### 对比

`contrast` 在浅色主题中为深色，在深色主题中为浅色。`contrast-inverted` 反转了这些颜色。`contrast-light` 在两个主题中都保持浅色，而 `contrast-dark` 保持深色。

GRAVITY_TRANSLATION_BLOCK_6_END

GRAVITY_TRANSLATION_BLOCK_7_END

## 图标

要向 `Button` 添加图标，请使用 [`Icon`](../Icon) 组件，这是一个特殊的 SVG 包装器。图标大小会根据 `Button` 的大小自动选择。显式设置 `Icon` 的 `size`、`width` 或 `height` 可以覆盖它。

要使自定义图标的大小与 `Button` 的大小匹配，请使用 `Button.Icon` 渲染函数：

```tsx
<Button size="l">
  <Button.Icon>{({size}) => <CustomIcon size={size} />}</Button.Icon>
  Action
</Button>
```

GRAVITY_TRANSLATION_BLOCK_8_END

GRAVITY_TRANSLATION_BLOCK_9_END

## 状态

`Button` 可以有不同的状态：

`disabled`: 当按钮因某种原因不可用时。

`loading`: 当后台正在运行某些异步进程时。

`selected`: 当用户可以**启用**和**禁用**按钮时。

GRAVITY_TRANSLATION_BLOCK_10_END

GRAVITY_TRANSLATION_BLOCK_11_END

### 菜单触发器

当传递相应的 aria 属性（`aria-haspopup`、`aria-expanded`）时，`Button` 会自动更改其外观：

GRAVITY_TRANSLATION_BLOCK_12_END

GRAVITY_TRANSLATION_BLOCK_13_END

## 大小

使用 `size` 属性来管理 `Button` 的大小。默认大小为 `m`。

GRAVITY_TRANSLATION_BLOCK_14_END

GRAVITY_TRANSLATION_BLOCK_15_END

## 宽度

使用 `width` 属性来管理 `Button` 在容器内的行为方式：

`auto`: 通过省略号隐藏溢出内容来限制 `Button` 的最大宽度。

`max`: 将 `Button` 的宽度匹配到父容器的宽度，同样通过省略号隐藏溢出内容。

GRAVITY_TRANSLATION_BLOCK_16_END

GRAVITY_TRANSLATION_BLOCK_17_END

## 边角样式

`pin` 属性允许您管理 _开始_ 和 _结束_ 边缘的形状，通常用于将多个按钮组合成一个单元。
`pin` 属性的值由 _开始_ 和 _结束_ 样式名称组成，用连字符分隔，例如 `round-brick`。
边缘样式为：`round`（默认）、`circle`、`brick` 和 `clear`。

GRAVITY_TRANSLATION_BLOCK_18_END

GRAVITY_TRANSLATION_BLOCK_19_END

## 属性

除了这些之外，`Button` 还接受任何有效的 `button` 或 `a` 元素属性：

| 名称      | 描述                                                              |              类型               |     默认值     |
| :-------- | :---------------------------------------------------------------- | :-----------------------------: | :------------: |
| children  | `Button` 的内容。您可以使用文本和 `<Icon/>` 组件。                   |        `React.ReactNode`        |                |
| component | 覆盖根组件                                                        |       `React.ElementType`       |                |
| disabled  | 切换 `disabled` 状态                                              |            `boolean`            |     `false`    |
| href      | 传递此属性可使根组件成为链接                                      |            `string`             |                |
| loading   | 切换 `loading` 状态                                               |            `boolean`            |     `false`    |
| pin       | 设置 `Button` 的边缘样式                                          |            `string`             | `"round-round"`|
| qa        | `data-qa` HTML 属性，用于测试                                     |            `string`             |                |
| selected  | 切换 `selected` 状态                                              |            `boolean`            |                |
| size      | 设置 `Button` 的大小                                              | `"xs"` `"s"` `"m"` `"l"` `"xl"` |      `"m"`     |
| view      | 设置 `Button` 的外观                                              |          `ButtonView`           |   `"normal"`   |
| width     | 控制 `Button` 如何使用父容器的空间                                 |        `"auto"` `"max"`         |                |

## CSS API

| 名称                                | 描述                  |
| :---------------------------------- | :-------------------- |
| `--g-button-text-color`             | 文本颜色              |
| `--g-button-text-color-hover`       | 悬停时的文本颜色      |
| `--g-button-background-color`       | 背景颜色              |
| `--g-button-background-color-hover` | 悬停时的背景颜色      |
| `--g-button-border-width`           | 边框宽度              |
| `--g-button-border-color`           | 边框颜色              |
| `--g-button-border-style`           | 边框样式              |
| `--g-button-focus-outline-width`    | 焦点轮廓宽度          |
| `--g-button-focus-outline-color`    | 焦点轮廓颜色          |
| `--g-button-focus-outline-style`    | 焦点轮廓样式          |
| `--g-button-focus-outline-offset`   | 焦点轮廓偏移量        |
| `--g-button-height`                 | 高度（行高）          |
| `--g-button-padding`                | 侧边内边距            |
| `--g-button-border-radius`          | 边框半径              |
| `--g-button-font-size`              | 文本字体大小          |
| `--g-button-icon-space`             | 图标可用空间          |
| `--g-button-icon-offset`            | 图标偏移量            |