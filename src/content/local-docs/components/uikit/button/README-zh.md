<!--GITHUB_BLOCK-->

# Button

<!--/GITHUB_BLOCK-->

按钮用作某些操作的触发器。虽然这是它们的主要用途，但在极少数情况下，它们也可以用作导航到其他页面的链接。

```tsx
import {Button} from '@gravity-ui/uikit';
```

## 外观

`Button` 在外观上有四种类型：基础、描边、扁平化和对比。
`Button` 的外观由 `view` 属性决定。

### 基础

`action`: 最具辨识度的 `Button` 类型。它用于屏幕上需要最多注意力的主要操作。
我们建议每页只使用一个此类按钮。

`normal`: 默认的 `Button` 类型，用于次要操作或在不引起过多关注的情况下保持操作的重要性。

`raised`: 放置在内容之上，作为浮动元素，通常具有固定位置。

<!--SANDBOX
import {Button} from '@gravity-ui/uikit'

export default function () {
    return (
        <>
            <Button view="action" size="l">Action</Button>
            <Button view="normal" size="l">Normal</Button>
            <Button view="raised" size="l">Raised</Button>
        </>
    )
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Button view="action" size="l">Action</Button>
<Button view="normal" size="l">Normal</Button>
<Button view="raised" size="l">Raised</Button>
```

<!--/GITHUB_BLOCK-->

### 描边

`outlined`: 用于需要较少关注的次要操作。它可以单独使用，也可以与主按钮一起使用；在后一种情况下，它必须是强调性的。

`outlined-action`: 通常用作指向另一个页面或外部资源的链接。

此类型还具有语义变体，可在需要额外语义时使用：`outlined-info`、`outlined-success`、`outlined-warning` 和 `outlined-danger`。

<!--SANDBOX
import {Button} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Button view="outlined" size="l">Outlined</Button>
            <Button view="outlined-action" size="l">Outlined Action</Button>
            <Button view="outlined-info" size="l">Outlined Info</Button>
            <Button view="outlined-success" size="l">Outlined Success</Button>
            <Button view="outlined-warning" size="l">Outlined Warning</Button>
            <Button view="outlined-danger" size="l">Outlined Danger</Button>
            <Button view="outlined-utility" size="l">Outlined Utility</Button>
        </>
    );
}
SANDBOX-->

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

### 扁平化

`flat`: 用于需要最少关注的辅助操作。它经常用于按钮列表或编辑器中的操作图标（无文本）。

`flat-secondary`: 比 `flat` 按钮的强调性更弱。它经常用作对话框和模态窗口中的次要按钮。

`flat-action`: 通常用作指向另一个页面或外部资源的链接。

它还具有语义变体，可在需要额外语义时使用：`outlined-info`、`outlined-success`、`outlined-warning` 和 `outlined-danger`。

<!--SANDBOX
import {Button} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Button view="flat" size="l">Flat</Button>
            <Button view="flat-action" size="l">Flat Action</Button>
            <Button view="flat-info" size="l">Flat Info</Button>
            <Button view="flat-success" size="l">Flat Success</Button>
            <Button view="flat-warning" size="l">Flat Warning</Button>
            <Button view="flat-danger" size="l">Flat Danger</Button>
            <Button view="flat-utility" size="l">Flat Utility</Button>
        </>
    );
}
SANDBOX-->

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

`normal-contrast`、`outline-contrast` 和 `flat-contrast` 按钮在复杂背景（例如，在横幅中）或反向背景上突出显示操作。

<!--SANDBOX
import {Button} from '@gravity-ui/uikit'
import {type CSSProperties} from 'react';

const containerStyle: CSSProperties = {
    display: 'flex',
    gap: 16,
    backgroundColor: 'rgb(68, 38, 204)',
    padding: '20px',
    borderRadius: '8px'
}

export default function () {
    return (
        <div style={containerStyle}>
            <Button view="normal-contrast" size="l">Normal Contrast</Button>
            <Button view="outlined-contrast" size="l">Outlined Contrast</Button>
            <Button view="flat-contrast" size="l">Flat Contrast</Button>
        </div>
    )
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Button view="normal-contrast" size="l">Normal Contrast</Button>
<Button view="outlined-contrast" size="l">Outlined Contrast</Button>
<Button view="flat-contrast" size="l">Flat Contrast</Button>
```

<!--/GITHUB_BLOCK-->

## 图标

要向 `Button` 添加图标，请使用 [`Icon`](../Icon) 组件，这是一个特殊的 SVG 包装器。

<!--SANDBOX
import {Gear} from '@gravity-ui/icons';
import {Button, Icon} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
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
                <Icon data={Gear} size={18} />
            </Button>
        </>
    );
}
SANDBOX-->

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

`disabled`: 当按钮因某种原因不可用时。

`loading`: 当后台正在运行某些异步进程时。

`selected`: 当用户可以**启用**和**禁用**按钮时。

<!--SANDBOX
import {Button} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Button size="l" disabled>Disabled</Button>
            <Button size="l" loading>Loading</Button>
            <Button size="l" selected>Selected</Button>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Button size="l" disabled>Disabled</Button>
<Button size="l" loading>Loading</Button>
<Button size="l" selected>Selected</Button>
```

<!--/GITHUB_BLOCK-->

### 菜单触发器

当传递相应的 aria 属性（`aria-haspopup`、`aria-expanded`）时，`Button` 会自动更改其外观：

<!--SANDBOX
import {Button} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Button aria-haspopup="menu" aria-expanded="true">Menu</Button>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Button aria-haspopup="menu" aria-expanded="true">
  Menu
</Button>
```

<!--/GITHUB_BLOCK-->

## 大小

使用 `size` 属性来管理 `Button` 的大小。默认大小为 `m`。

<!--SANDBOX
import {Button} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Button size="xs">XS Size</Button>
            <Button size="s">S Size</Button>
            <Button size="m">M Size</Button>
            <Button size="l">L Size</Button>
            <Button size="xl">XL Size</Button>
        </>
    );
}
SANDBOX-->

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

使用 `width` 属性来管理 `Button` 在容器内的行为方式：

`auto`: 通过隐藏溢出内容并显示省略号来限制 `Button` 的最大宽度。

`max`: 将 `Button` 的宽度匹配到父容器的宽度，同样通过隐藏溢出内容并显示省略号。

<!--SANDBOX
import {Button} from '@gravity-ui/uikit';
import {type CSSProperties} from 'react';

const containerStyle: CSSProperties = {
    width: 100,
    border: '2px dashed gray',
};

const titleStyle: CSSProperties = {
    textAlign: 'center',
};

export default function () {
    return (
        <>
            <div style={containerStyle}>
                <h4 style={titleStyle}>Default</h4>
                <p>
                    <Button>Text</Button>
                </p>
                <p>
                    <Button>Very Long Text</Button>
                </p>
            </div>
            <div style={containerStyle}>
                <h4 style={titleStyle}>Auto</h4>
                <p>
                    <Button width="auto">Text</Button>
                </p>
                <p>
                    <Button width="auto">Very Long Text</Button>
                </p>
            </div>
            <div style={containerStyle}>
                <h4 style={titleStyle}>Max</h4>
                <p>
                    <Button width="max">Text</Button>
                </p>
                <p>
                    <Button width="max">Very Long Text</Button>
                </p>
            </div>
        </>
    );
}
SANDBOX-->

## 边角

`pin` 属性允许您管理 _开始_ 和 _结束_ 边缘的形状，通常用于将多个按钮组合成一个单元。
`pin` 属性的值由 _开始_ 和 _结束_ 样式名称组成，用连字符分隔，例如 `round-brick`。
边缘样式为：`round`（默认）、`circle`、`brick` 和 `clear`。

<!--SANDBOX
import {Button} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <div>
                <Button view="action" size="l" pin="round-clear">Create</Button>
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
        </>
    );
}
SANDBOX-->

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

除了这些之外，`Button` 还接受任何有效的 `button` 或 `a` 元素属性：

| 名称      | 描述                                                              |              类型               |     默认值     |
| :-------- | :---------------------------------------------------------------- | :-----------------------------: | :------------: |
| children  | `Button` 的内容。您可以使用文本和 `<Icon/>` 组件。                  |        `React.ReactNode`        |                |
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
