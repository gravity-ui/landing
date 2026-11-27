<!--GITHUB_BLOCK-->

# Menu

<!--/GITHUB_BLOCK-->

`Menu` 组件可轻松创建操作列表视图。

```tsx
import {Menu} from '@gravity-ui/uikit';
```

它有专门用于项目 (`Menu.Item`) 和组 (`Menu.Group`) 的组件。您可以将它们组合起来创建更复杂的菜单。

<!--SANDBOX
import {Menu} from '@gravity-ui/uikit';

export default function () {
    return (
        <Menu>
            <Menu.Item>First</Menu.Item>
            <Menu.Item>Second</Menu.Item>
            <Menu.Group label="Group">
                <Menu.Item>One</Menu.Item>
                <Menu.Item>Two</Menu.Item>
            </Menu.Group>
        </Menu>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Menu>
  <Menu.Item>First</Menu.Item>
  <Menu.Item>Second</Menu.Item>
  <Menu.Group label="Group">
    <Menu.Item>One</Menu.Item>
    <Menu.Item>Two</Menu.Item>
  </Menu.Group>
</Menu>
```

<!--/GITHUB_BLOCK-->

### Size

此属性用于选择菜单大小。默认值为 `m`。

<!--SANDBOX
import {Menu} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Menu size="s">
                <Menu.Item>First</Menu.Item>
                <Menu.Item>Second</Menu.Item>
            </Menu>
            <Menu size="m">
                <Menu.Item>First</Menu.Item>
                <Menu.Item>Second</Menu.Item>
            </Menu>
            <Menu size="l">
                <Menu.Item>First</Menu.Item>
                <Menu.Item>Second</Menu.Item>
            </Menu>
            <Menu size="xl">
                <Menu.Item>First</Menu.Item>
                <Menu.Item>Second</Menu.Item>
            </Menu>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Menu size="s">
    <Menu.Item>First</Menu.Item>
    <Menu.Item>Second</Menu.Item>
</Menu>

<Menu size="m">
    <Menu.Item>First</Menu.Item>
    <Menu.Item>Second</Menu.Item>
</Menu>

<Menu size="l">
    <Menu.Item>First</Menu.Item>
    <Menu.Item>Second</Menu.Item>
</Menu>

<Menu size="xl">
    <Menu.Item>First</Menu.Item>
    <Menu.Item>Second</Menu.Item>
</Menu>
```

<!--/GITHUB_BLOCK-->

## Properties

| Name      | Description                                |           Type           | Default |
| :-------- | :----------------------------------------- | :----------------------: | :-----: |
| size      | Menu size                                  | `"s"` `"m"` `"l"` `"xl"` |  `"m"`  |
| children  | Child element                              |    `React.ReactNode`     |         |
| className | `class` HTML attribute                     |         `string`         |         |
| style     | `style` HTML attribute                     |  `React.CSSProperties`   |         |
| qa        | `data-qa` HTML attribute, used for testing |         `string`         |         |

## Menu.Item

此属性用于渲染菜单项。

### Icon

使用 `iconStart` 或 `iconEnd` 属性在菜单项的开头或结尾显示图标：

<!--SANDBOX
import {Gear, TriangleExclamation} from '@gravity-ui/icons';
import {Icon, Menu} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Menu>
                <Menu.Item iconStart={<Icon size={16} data={Gear} />}>Item with icon</Menu.Item>
                <Menu.Item>Item without icon</Menu.Item>
            </Menu>
            <Menu>
                <Menu.Item iconEnd={<Icon size={16} data={TriangleExclamation} />}>
                    Item with icon
                </Menu.Item>
                <Menu.Item>Item without icon</Menu.Item>
            </Menu>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Menu>
  <Menu.Item iconStart={<Icon size={16} data={GearIcon} />}>Item with icon</Menu.Item>
  <Menu.Item>Item without icon</Menu.Item>
</Menu>
```

```tsx
<Menu>
  <Menu.Item iconEnd={<Icon size={16} data={TriangleExclamation} />}>Item with icon</Menu.Item>
  <Menu.Item>Item without icon</Menu.Item>
</Menu>
```

<!--/GITHUB_BLOCK-->

### States

使用此属性，您可以启用或禁用（灰色显示）特定的菜单项：

<!--SANDBOX
import {Menu} from '@gravity-ui/uikit';

export default function () {
    return (
        <Menu>
            <Menu.Item disabled>First</Menu.Item>
            <Menu.Item>Second</Menu.Item>
            <Menu.Item selected>Third</Menu.Item>
        </Menu>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Menu>
  <Menu.Item disabled>First</Menu.Item>
  <Menu.Item>Second</Menu.Item>
  <Menu.Item selected>Third</Menu.Item>
</Menu>
```

<!--/GITHUB_BLOCK-->

### Theme

这允许您更改菜单项主题。默认主题为 `normal`。

<!--SANDBOX
import {Menu} from '@gravity-ui/uikit';

export default function () {
    return (
        <Menu>
            <Menu.Item theme="danger">First</Menu.Item>
            <Menu.Item theme="normal">Second</Menu.Item>
            <Menu.Item>Third</Menu.Item>
        </Menu>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Menu>
  <Menu.Item theme="danger">First</Menu.Item>
  <Menu.Item theme="normal">Second</Menu.Item>
  <Menu.Item>Third</Menu.Item>
</Menu>
```

<!--/GITHUB_BLOCK-->

### Properties

| 名称             | 描述                                   |           类型            |  默认值   |
| :--------------- | :------------------------------------- | :-----------------------: | :--------: |
| iconStart        | 菜单项文本之前的图标                   |        `ReactNode`        |            |
| iconEnd          | 菜单项文本之后的图标                   |        `ReactNode`        |            |
| selected         | 菜单项选中状态标志                     |         `boolean`         |  `false`   |
| disabled         | 菜单项禁用状态标志                     |         `boolean`         |  `false`   |
| active           | 菜单项激活状态标志                     |         `boolean`         |  `false`   |
| href             | URL                                    |         `string`          |            |
| title            | Title 属性                             |         `string`          |            |
| target           | Target 属性                            |         `string`          |            |
| rel              | Rel 属性                               |         `string`          |            |
| onClick          | 点击事件处理函数                       | `React.MouseEventHandler` |            |
| theme            | 菜单项主题                             |   `"normal"` `"danger"`   | `"normal"` |
| children         | 子元素                                 |     `React.ReactNode`     |            |
| className        | 根元素的 `class` HTML 属性             |         `string`          |            |
| contentClassName | 内容元素的 `class` HTML 属性           |         `string`          |            |
| style            | `style` HTML 属性                      |   `React.CSSProperties`   |            |
| qa               | `data-qa` HTML 属性，用于测试          |         `string`          |            |
| extraProps       | 额外的 HTML 属性                       |         `Record`          |            |

## Menu.Group

您可以在单个菜单中按主题对项目进行分组：

<!--SANDBOX
import {Menu} from '@gravity-ui/uikit';

export default function () {
    return (
        <Menu>
            <Menu.Item>First</Menu.Item>
            <Menu.Group label="Group One">
                <Menu.Item>One</Menu.Item>
                <Menu.Item>Two</Menu.Item>
            </Menu.Group>
            <Menu.Group label="Group Two">
                <Menu.Item>One</Menu.Item>
                <Menu.Item>Two</Menu.Item>
            </Menu.Group>
            <Menu.Item>Middle</Menu.Item>
            <Menu.Group label="Group Three">
                <Menu.Item>One</Menu.Item>
                <Menu.Item>Two</Menu.Item>
            </Menu.Group>
            <Menu.Item>Last</Menu.Item>
        </Menu>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Menu>
  <Menu.Item>First</Menu.Item>
  <Menu.Group label="Group One">
    <Menu.Item>One</Menu.Item>
    <Menu.Item>Two</Menu.Item>
  </Menu.Group>
  <Menu.Group label="Group Two">
    <Menu.Item>One</Menu.Item>
    <Menu.Item>Two</Menu.Item>
  </Menu.Group>
  <Menu.Item>Middle</Menu.Item>
  <Menu.Group label="Group Three">
    <Menu.Item>One</Menu.Item>
    <Menu.Item>Two</Menu.Item>
  </Menu.Group>
  <Menu.Item>Last</Menu.Item>
</Menu>
```

<!--/GITHUB_BLOCK-->

### 属性

| 名称      | 描述                     |         类型          | 默认值 |
| :-------- | :----------------------- | :-------------------: | :----: |
| label     | 菜单组标签               |       `string`        |        |
| children  | 子元素                   |   `React.ReactNode`   |        |
| className | `class` HTML 属性        |       `string`        |        |
| style     | `style` HTML 属性        | `React.CSSProperties` |        |
| qa        | `data-qa` HTML 属性，用于测试 |       `string`        |        |
