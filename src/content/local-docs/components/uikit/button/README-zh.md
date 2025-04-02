<!--GITHUB_BLOCK-->

# Button

<!--/GITHUB_BLOCK-->

```tsx
import {Button} from '@gravity-ui/uikit';
```

按钮作为某些操作的触发器。虽然这是它们的主要目的，但在一些非常罕见的情况下，它们也可以用作链接导航到其他页面。

## 外观

按钮在外观上有四种类型：基本、轮廓、扁平和对比。
按钮的外观由 `view` 属性决定。

### 基本

`action`：最显著的按钮类型。它用于需要最多关注的屏幕上的主要操作。
我们建议每页只使用一个这样的按钮。

`normal`：默认的按钮类型，设计用于次要操作或保持操作的重要性而不引起太多注意。

`raised`：作为浮动元素放置在内容上方，通常位置固定。

<!--GITHUB_BLOCK-->

```tsx
<Button view="action" size="l">Action</Button>
<Button view="normal" size="l">Normal</Button>
<Button view="raised" size="l">Raised</Button>
```

<!--/GITHUB_BLOCK-->

### 轮廓

`outlined`：用于需要较少关注的次要操作。它可以与或不与主按钮一起使用；在前一种情况下，它必须是强调的。

`outlined-action`：通常用作到另一个页面或外部资源的链接。

此类型还有语义变体，可在需要额外语义时使用：`outlined-info`、`outlined-success`、`outlined-warning` 和 `outlined-danger`。

<!--GITHUB_BLOCK-->

```tsx
<Button view="outlined" size="l">Outlined</Button>
<Button view="outlined-action" size="l">Outlined Action</Button>
<Button view="outlined-info" size="l">Outlined Info</Button>
<Button view="outlined-success" size="l">Outlined Success</Button>
<Button view="outlined-warning" size="l">Outlined Warning</Button>
<Button view="outlined-danger" size="l">Outlined Danger</Button>
<Button view="outlined-utility" size="l">Outlined Utility</Button>
```

<!--/GITHUB_BLOCK-->

### 扁平

`flat`：用于需要最少关注的辅助操作。它通常用于按钮列表或编辑器中的操作图标（无文本）。

`flat-secondary`：比 `flat` 按钮强调更少。它通常用作对话框和模态窗口中的次要按钮。

`flat-action`：通常用作到另一个页面或外部资源的链接。

它还有语义变体，可在需要额外语义的地方使用：`outlined-info`、`outlined-success`、`outlined-warning` 和 `outlined-danger`。

<!--GITHUB_BLOCK-->

```tsx
<Button view="flat" size="l">Flat</Button>
<Button view="flat-secondary" size="l">Flat Secondary</Button>
<Button view="flat-action" size="l">Flat Action</Button>
<Button view="flat-info" size="l">Flat Info</Button>
<Button view="flat-success" size="l">Flat Success</Button>
<Button view="flat-warning" size="l">Flat Warning</Button>
<Button view="flat-danger" size="l">Flat Danger</Button>
<Button view="flat-utility" size="l">Flat Utility</Button>
```

<!--/GITHUB_BLOCK-->

### 对比

`normal-contrast`、`outline-contrast` 和 `flat-contrast` 按钮在复杂背景上突出显示操作，例如在横幅上或反向背景上。

<!--GITHUB_BLOCK-->

```tsx
<Button view="normal-contrast" size="l">Normal Contrast</Button>
<Button view="outlined-contrast" size="l">Outlined Contrast</Button>
<Button view="flat-contrast" size="l">Flat Contrast</Button>
```

<!--/GITHUB_BLOCK-->

## 图标

要向 `Button` 添加图标，请使用 [`Icon`](../Icon) 组件，这是 SVG 的特殊包装器。

<!--GITHUB_BLOCK-->

```tsx
<Button view="outlined" size="l">
    <Icon data={Gear} size={18} />
    Start
</Button>
<Button view="outlined" size="l">
    End
    <Icon data={Gear} size={18} />
</Button>
<Button view="outlined" size="l">
    <Icon data={Gear} size={18} />
    Both
    <Icon data={Gear} size={18} />
</Button>
<Button view="outlined" size="l">
    No text:
    <Icon data={Gear} size={18} />
</Button>
```

<!--/GITHUB_BLOCK-->

## 状态

`Button` 可以有不同的状态：

`disabled`：当按钮由于某种原因不可用时。

`loading`：当一些异步进程在后台运行时。

`selected`：当用户可以**启用**和**禁用**按钮时。

<!--GITHUB_BLOCK-->

```tsx
<Button size="l" disabled>Disabled</Button>
<Button size="l" loading>Loading</Button>
<Button size="l" selected>Selected</Button>
```

<!--/GITHUB_BLOCK-->

## 尺寸

使用 `size` 属性管理 `Button` 大小。默认大小是 `m`。

<!--GITHUB_BLOCK-->

```tsx
<Button size="xs">XS Size</Button>
<Button size="s">S Size</Button>
<Button size="m">M Size</Button>
<Button size="l">L Size</Button>
<Button size="xl">XL Size</Button>
```

<!--/GITHUB_BLOCK-->

## 宽度

使用 `width` 属性管理 `Button` 在容器内的行为方式：

`auto`：通过用省略号隐藏溢出内容来限制 `Button` 的最大宽度。

`max`：将 `Button` 宽度匹配到父容器的宽度，同样用省略号隐藏溢出内容。

## 边缘样式

`pin` 属性允许您管理*开始*和*结束*边缘的形状，通常用于将多个按钮组合成一个单元。
`pin` 属性值由*开始*和*结束*样式名称组成，用连字符分隔，例如 `round-brick`。
边缘样式有：`round`（默认）、`circle`、`brick` 和 `clear`。

<!--GITHUB_BLOCK-->

```tsx
<div>
    <Button view="action" size="l" pin="round-brick">Create</Button>
    <Button view="action" size="l" pin="brick-round">...</Button>
</div>
<div>
    <Button view="normal" size="l" pin="circle-clear">Start</Button>
    <Button view="normal" size="l" pin="brick-brick" selected>Center</Button>
    <Button view="normal" size="l" pin="clear-circle">End</Button>
</div>
<div>
    <Button view="outlined" pin="brick-clear">1</Button>
    <Button view="outlined" pin="clear-clear">2</Button>
    <Button view="outlined" pin="clear-clear">3</Button>
    <Button view="outlined" pin="clear-brick">4</Button>
</div>
```

<!--/GITHUB_BLOCK-->

## 属性

`Button` 接受任何有效的 `button` 或 `a` 元素属性，此外还有以下属性：

| 名称      | 描述                                             |              类型               |     默认值      |
| :-------- | :----------------------------------------------- | :-----------------------------: | :-------------: |
| children  | `Button` 内容。您可以使用文本和 `<Icon/>` 组件。 |        `React.ReactNode`        |                 |
| component | 覆盖根组件                                       |       `React.ElementType`       |                 |
| disabled  | 切换 `disabled` 状态                             |            `boolean`            |     `false`     |
| href      | 传递此参数使根组件成为链接                       |            `string`             |                 |
| loading   | 切换 `loading` 状态                              |            `boolean`            |     `false`     |
| pin       | 设置 `Button` 边缘样式                           |            `string`             | `"round-round"` |
| qa        | `data-qa` HTML 属性，用于测试                    |            `string`             |                 |
| selected  | 切换 `selected` 状态                             |            `boolean`            |                 |
| size      | 设置 `Button` 大小                               | `"xs"` `"s"` `"m"` `"l"` `"xl"` |      `"m"`      |
| view      | 设置 `Button` 外观                               |          `ButtonView`           |   `"normal"`    |
| width     | 控制 `Button` 如何使用父元素的空间               |        `"auto"` `"max"`         |                 |

## CSS API

| 名称                                | 描述             |
| :---------------------------------- | :--------------- |
| `--g-button-text-color`             | 文本颜色         |
| `--g-button-text-color-hover`       | 悬停时的文本颜色 |
| `--g-button-background-color`       | 背景颜色         |
| `--g-button-background-color-hover` | 悬停时的背景颜色 |
| `--g-button-border-width`           | 边框宽度         |
| `--g-button-border-color`           | 边框颜色         |
| `--g-button-border-style`           | 边框样式         |
| `--g-button-focus-outline-width`    | 焦点轮廓宽度     |
| `--g-button-focus-outline-color`    | 焦点轮廓颜色     |
| `--g-button-focus-outline-style`    | 焦点轮廓样式     |
| `--g-button-focus-outline-offset`   | 焦点轮廓偏移     |
| `--g-button-height`                 | 高度（行高）     |
| `--g-button-padding`                | 侧边填充         |
| `--g-button-border-radius`          | 边框半径         |
| `--g-button-font-size`              | 文本字体大小     |
| `--g-button-icon-space`             | 图标可用空间     |
| `--g-button-icon-offset`            | 图标偏移         |
