# Menu

`Menu` 组件在与触发器（通常是按钮）交互时，会在 `Popup` 中显示选项列表。

有一系列相关的组件：

- `Menu` - 菜单的容器
- `MenuItem` - 菜单中的一个选项
- `MenuDivider` - 用于分组选项的分隔线
- `MenuTrigger` - 内置的默认触发器，一个带有省略号图标的 `Button`

## 基本用法

```jsx
import {Menu, MenuItem, MenuDivider, MenuTrigger} from '@gravity-ui/uikit';

function BasicMenu() {
  return (
    <Menu trigger={<MenuTrigger />}>
      <MenuItem>Copy</MenuItem>
      <MenuItem>Move</MenuItem>
      <MenuDivider />
      <MenuItem theme="danger">Delete</MenuItem>
    </Menu>
  );
}
```

## 自定义触发器

您可以将任何接受基本 `HTMLAttributes` 作为 props 和 `HTMLElement` 的 ref 的组件渲染为触发器。
对于更复杂的组件，您可以使用 `trigger` prop 的函数变体，该变体将 `triggerProps` 作为第一个参数，将 `triggerRef` 作为第二个参数，您应该将它们传递给您的组件。

## 上下文菜单

要实现上下文菜单模式，您应该使用“虚拟元素”作为触发器：

```jsx
import {Menu, MenuItem, MenuDivider, MenuTrigger} from '@gravity-ui/uikit';

function ContextMenu() {
  const [trigger, setTrigger] = React.useState(null);

  React.useEffect(() => {
    const handleContextMenu = (event) => {
      event.preventDefault();
      setTrigger({
        getBoundingClientRect() {
          return {
            width: 0,
            height: 0,
            x: event.clientX,
            y: event.clientY,
            top: event.clientY,
            right: event.clientX,
            bottom: event.clientY,
            left: event.clientX,
          };
        },
      });
    };
    document.addEventListener('contextmenu', handleContextMenu);
    return () => document.removeEventListener('contextmenu', handleContextMenu);
  }, []);

  return (
    <Menu trigger={trigger}>
      <MenuItem>Copy</MenuItem>
      <MenuItem>Move</MenuItem>
      <MenuDivider />
      <MenuItem theme="danger">Delete</MenuItem>
    </Menu>
  );
}
```

## 内联模式

默认情况下，`Menu` 渲染在 `Popup` 中。但是，您可以使用 `inline` prop 在自己的容器中将其内联渲染。

## 属性

| 名称            | 描述                                     |                                              类型                                               |     默认值      |
| :-------------- | :---------------------------------------------- | :---------------------------------------------------------------------------------------------: | :--------------: |
| className       | HTML `class` 属性                          |                                            `string`                                             |                  |
| style           | HTML `style` 属性                          |                                      `React.CSSProperties`                                      |                  |
| aria-label      | 菜单的可访问名称                    |                                            `string`                                             |                  |
| aria-labelledby | 用于命名菜单的元素的 ID            |                                            `string`                                             |                  |
| qa              | 测试 ID (`data-qa` 属性)                   |                                            `string`                                             |                  |
| open            | `open` 的受控状态                     |                                            `boolean`                                            |                  |
| defaultOpen     | `open` 的非受控状态                   |                                            `boolean`                                            |                  |
| children        | 与菜单相关的组件（项目、分隔符等） |                                        `React.ReactNode`                                        |                  |
| disabled        | 禁用状态                                  |                                            `boolean`                                            |     `false`      |
| inline          | 内联渲染菜单                         |                                            `boolean`                                            |     `false`      |
| trigger         | 打开菜单的触发器元素            | `React.ReactElement` `(triggerProps, triggerRef) => React.ReactElement` `VirtualElement` `null` |                  |
| placement       | 弹出窗口的放置位置                                 |                                        `PopupPlacement`                                         | `"bottom-start"` |
| onOpenChange    | `open` 状态更改的回调函数                |                `(open: boolean, event: Event, reason: OpenChangeReason) => void`                |                  |
| size            | `Menu` 的大小                                 |                                    `"s"` `"m"` `"l"` `"xl"`                                     |      `"m"`       |

### MenuItem

当传递给 `icon` 属性的 `Icon` 没有显式设置大小时，其大小会根据 `Menu` 的大小自动选择。显式设置 `Icon` 的 `size`、`width` 或 `height` 来覆盖它。

`MenuItem` 除了以下属性外，还接受任何有效的 `button` 或 `a` 元素属性：

| 名称      | 描述                         |                                类型                                |  默认值   |
| :-------- | :--------------------------- | :----------------------------------------------------------------: | :--------: |
| qa        | 测试 ID (`data-qa` 属性)       |                              `string`                              |            |
| theme     | `MenuItem` 的主题                | `"normal"` `"info"` `"success"` `"warning"` `"danger"` `"utility"` | `"normal"` |
| selected  | 选中状态 (`menuitemcheckbox`) |                             `boolean`                              |            |
| disabled  | 禁用状态                      |                             `boolean`                              |  `false`   |
| icon      | 用于渲染图标的插槽             |                        `React.ReactElement`                        |            |
| arrow     | 用于渲染嵌套菜单箭头的插槽       |                        `React.ReactElement`                        |            |
| children  | 内容                           |                         `React.ReactNode`                          |            |
| component | 自定义根组件                   |                        `React.ElementType`                         |            |

### MenuTrigger

`MenuTrigger` 除了以下属性外，还接受任何 `Button` 组件的属性：

| 名称 | 描述             |            类型             |    默认值     |
| :--- | :--------------- | :-------------------------: | :-----------: |
| icon | 要显示的图标类型 | `"horizontal"` `"vertical"` | `"horizontal"` |