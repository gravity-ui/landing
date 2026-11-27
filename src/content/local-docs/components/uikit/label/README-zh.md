<!--GITHUB_BLOCK-->

# Label

<!--/GITHUB_BLOCK-->

您可以使用 `Label` 来突出显示某些信息。带有 `Close` 或 `Copy` 按钮的 `Label` 可用于各种简单操作。

`Label` 最适合显示具有不同颜色代码的单行文本信息，这些颜色代码显示其重要性。

```tsx
import {Label} from '@gravity-ui/uikit';
```

## 外观

`Label` 可以显示多种样式。

### 主题

使用 `theme` 属性为各种状态应用不同的主题。您可以使用以下值：`normal`、`info`、`success`、`warning`、`danger`、`utility`、`unknown` 和 `clear`。
默认主题是 `normal`。

<!--SANDBOX
import {Label} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Label theme="normal">Normal</Label>
            <Label theme="info">Info</Label>
            <Label theme="success">Success</Label>
            <Label theme="warning">Warning</Label>
            <Label theme="danger">Danger</Label>
            <Label theme="utility">Utility</Label>
            <Label theme="unknown">Unknown</Label>
            <Label theme="clear">Clear</Label>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Label theme="normal">Normal</Label>
<Label theme="info">Info</Label>
<Label theme="success">Success</Label>
<Label theme="warning">Warning</Label>
<Label theme="danger">Danger</Label>
<Label theme="utility">Utility</Label>
<Label theme="unknown">Unknown</Label>
<Label theme="clear">Clear</Label>
```

<!--/GITHUB_BLOCK-->

### 类型

`type` 属性为 `Label` 添加了各种选项：

`copy`: 添加一个复制按钮；单击时，它会复制 `copyText` 属性的值。

`close`: 添加一个关闭按钮，用于管理标签列表。

`info`: 向标签添加一个信息图标。

<!--SANDBOX
import {Label} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Label type="default" onClick={() => alert('On click label')} size="s">
                Clickable
            </Label>
            <Label type="close" onCloseClick={() => alert('On click close')} size="s">
                Closable
            </Label>
            <Label type="copy" copyText="Copy" onCopy={() => alert('On copy')} size="s">
                Copy
            </Label>
            <Label type="info" size="s">Info</Label>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Label type="default" onClick={() => alert('On click label')} size="s">Clickable</Label>
<Label type="close" onCloseClick={() => alert('On click close')} size="s">Closable</Label>
<Label type="copy" copyText="Copy" onCopy={() => alert('On copy')} size="s">Copy</Label>
<Label type="info" size="s">Info</Label>
```

<!--/GITHUB_BLOCK-->

### 图标

您可以使用 `icon` 属性添加图标。为此，请使用 [`Icon`](../Icon) 组件，这是一个特殊的 SVG 包装器。

<!--SANDBOX
import {Icon, Label} from '@gravity-ui/uikit';
import {Gear} from '@gravity-ui/icons';

export default function () {
    return (
        <>
            <Label icon={<Icon size={16} data={Gear} />}>Icon</Label>
            <Label type="close" icon={<Icon size={16} data={Gear} />}>Icon and close</Label>
            <Label type="copy" icon={<Icon size={16} data={Gear} />}>Icon and copy</Label>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Label icon={<Icon size={16} data={GearIcon} />}>Icon</Label>
<Label type="close" icon={<Icon size={16} data={GearIcon} />}>Icon and close</Label>
<Label type="copy" icon={<Icon size={16} data={GearIcon} />}>Icon and copy</Label>
```

<!--/GITHUB_BLOCK-->

## 值

您可以使用 `Label` 来显示键值信息。为此，您需要将键提供给 `children` 属性，将值提供给 `value`：

<!--SANDBOX
import {Label} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Label theme="normal" value="Value">Key</Label>
            <Label theme="info" value="Value">Key</Label>
            <Label theme="success" value="Value">Key</Label>
            <Label theme="warning" value="Value">Key</Label>
            <Label theme="danger" value="Value">Key</Label>
            <Label theme="utility" value="Value">Key</Label>
            <Label theme="unknown" value="Value">Key</Label>
            <Label theme="clear" value="Value">Key</Label>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Label theme="normal" value="Value">Key</Label>
<Label theme="info" value="Value">Key</Label>
<Label theme="success" value="Value">Key</Label>
<Label theme="warning" value="Value">Key</Label>
<Label theme="danger" value="Value">Key</Label>
<Label theme="utility" value="Value">Key</Label>
<Label theme="unknown" value="Value">Key</Label>
<Label theme="clear" value="Value">Key</Label>
```

<!--/GITHUB_BLOCK-->

## 状态

`label` 可以有不同的状态：

- `disabled`: 不允许进行任何交互。
- `interactive`: 使标签可悬停。
- `loading`: 显示加载状态。

<!--SANDBOX
import {Label} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Label>Default</Label>
            <Label disabled>Disabled</Label>
            <Label interactive>Interactive</Label>
            <Label loading>Loading</Label>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Label>Default</Label>
<Label disabled>Disabled</Label>
<Label interactive>Interactive</Label>
<Label loading>Loading</Label>
```

<!--/GITHUB_BLOCK-->

## 大小

<!--SANDBOX
import {Label} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Label size="xxs">XXS size</Label>
            <Label size="xs">XS size</Label>
            <Label size="s">S size</Label>
            <Label size="m">M size</Label>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Label size="xxs">XXS size</Label>
<Label size="xs">XS size</Label>
<Label size="s">S size</Label>
<Label size="m">M size</Label>
```

<!--/GITHUB_BLOCK-->

## 属性

| 名称             | 描述                                     |                  类型                   |   默认值   |
| :--------------- | :---------------------------------------------- | :-------------------------------------: | :---------: |
| children         | 内容                                         |            `React.ReactNode`            |             |
| className        | `class` HTML 属性                          |                `string`                 |             |
| closeButtonLabel | 关闭按钮的 `aria-label`                |                `string`                 |             |
| copyButtonLabel  | 复制按钮的 `aria-label`                 |                `string`                 |             |
| copyText         | 要复制的文本                                    |                `string`                 |             |
| disabled         | 禁用状态                                  |                `boolean`                |             |
| icon             | 标签图标（在左侧）                        |            `React.ReactNode`            |             |
| interactive      | 启用悬停效果                            |                `boolean`                |             |
| loading          | 加载状态                                  |                `boolean`                |   `false`   |
| onClick          | `click` 事件处理程序                           |               `Function`                |             |
| onCloseClick     | 关闭按钮 `click` 事件处理程序              |               `Function`                |             |
| onCopy           | `copy` 事件处理程序                            |               `Function`                |             |
| qa               | `data-qa` HTML 属性，用于测试      |                `string`                 |             |
| size             | 标签大小                                      |       `"xxs"` `"xs"` `"s"` `"m"`        |   `"xs"`    |
| theme            | 标签主题                                      |                `string`                 | `"normal"`  |
| title            | `title` HTML 属性                          |                `string`                 |             |
| type             | 标签类型                                      | `"default"` `"copy"` `"close"` `"info"` | `"default"` |
| value            | 标签值（显示为 `"children : value"`） |            `React.ReactNode`            |             |
| width            | 控制 Label 如何使用父级的空间          |                `"auto"`                 |             |
