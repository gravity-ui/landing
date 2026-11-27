下拉菜单组件提供项目分组、子菜单和可自定义的切换器。下拉菜单项通过 `items` 属性进行配置。默认情况下，菜单切换器是一个带有省略号图标（**⋯**）的按钮，可以通过 `renderSwitcher` 属性进行覆盖。

```tsx
import {DropdownMenu} from '@gravity-ui/uikit/legacy';
```

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

## 分组项目

`DropdownMenu` 项目可以通过在 `items` 数组中嵌套菜单项数组来分组，并在视觉上与其他菜单项区分开。

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

## 子菜单

单个菜单项上的 `items` 属性会为该项添加嵌套的子项。

带有子菜单的菜单项会获得以下附加类名，以便进行额外的样式设置：

- `.g-dropdown-menu-legacy__menu-item_with-submenu`: 用于包含多个嵌套项的项。
- `.g-dropdown-menu-legacy__menu-item_active-parent`: 用于其子菜单当前打开的项。

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

## 自定义菜单切换器

要配置菜单切换器，请使用 `renderSwitcher` 属性。它可以是任何返回 React 组件的函数（在 TypeScript 中，是 `(props: SwitcherProps) => React.ReactNode`，请参阅下面的 [`SwitcherProps`](#switcherprops)）。默认情况下，菜单切换器是一个带有省略号图标（**⋯**）的按钮。

GRAVITY_TRANSLATION_BLOCK_7_END

GRAVITY_TRANSLATION_BLOCK_8_END

上面的示例为了演示自定义菜单切换器的概念而过于简化。在实际应用中，通常建议可点击的菜单切换器应使用按钮等组件，以便通过键盘和其他辅助技术进行访问。

## 自定义图标

您可以使用 `iconStart` 或 `iconEnd` 属性为 `DropdownMenu` 项目添加自定义图标。默认情况下，`DropdownMenu` 项目不带图标。

您可以使用 `DropdownMenu` 的 `renderSwitcher` 属性更改菜单切换器的图标。默认情况下，菜单切换器是一个带有省略号图标（**⋯**）的按钮。

GRAVITY_TRANSLATION_BLOCK_9_END

GRAVITY_TRANSLATION_BLOCK_10_END

## 属性

| 名称                       | 描述                                                                                             |                        类型                        |    默认值    |
| :------------------------- | :----------------------------------------------------------------------------------------------- | :------------------------------------------------: | :-----------: |
| `items`                    | 项目数组。嵌套的项目数组代表视觉上分隔的组。                                                               | `(DropdownMenuItem \| DropdownMenuItem[])[] \| []` |               |
| `data`                     | 提供给从菜单调用的操作的载荷。（这对于上下文菜单可能很有用。）                                                               |                       `any`                        |               |
| `icon`                     | 默认 `switcher` 的图标。                                                                           |                 `React.ReactNode`                  | 省略号图标 |
| `size`                     | 应用于默认 `switcher` 和菜单。                                                                     |            `'s' \| 'm' \| 'l' \| 'xl'`             |     `'m'`     |
| `disabled`                 | 将此属性设置为 `true` 会禁用 `switcher` 按钮并阻止菜单打开。                                                               |                     `boolean`                      |               |
| `renderSwitcher`           | 菜单切换控件的渲染函数。                                                                           |                 `React.ReactNode`                  |               |
| `switcherWrapperClassName` | `switcher` 的父组件的 `className` 属性的值。                                                               |                      `string`                      |               |
| `defaultSwitcherProps`     | 默认的 `switcher` 属性。                                                                           |                   `ButtonProps`                    |               |
| `defaultSwitcherClassName` | 默认 `switcher` 的 `className` 属性的值。                                                               |                      `string`                      |               |
| `menuProps`                | 覆盖默认的下拉菜单弹出属性。                                                                       |                    `MenuProps`                     |               |
| `popupProps`               | 覆盖默认的弹出属性。                                                                             |                    `PopupProps`                    |               |
| `open`                     | 切换下拉菜单的可见性。                                                                           |                     `boolean`                      |               |
| `onOpenToggle`             | 在菜单打开或关闭时调用。                                                                           |                    `() => void`                    |               |
| `onSwitcherClick`          | 单击 `switcher` 时调用。                                                                           |       `React.MouseEventHandler<HTMLElement>`       |               |
| `hideOnScroll`             | 指定滚动父元素时是否隐藏菜单。                                                                     |                     `boolean`                      |    `true`     |
| `children`                 | 菜单弹出窗口内的自定义内容。                                                                       |                 `React.ReactNode`                  |               |

### DropdownMenuItem

此类型描述单个下拉菜单项。
GRAVITY_TRANSLATION_BLOCK_1_END
### DropdownMenu

This component renders a dropdown menu. It accepts an array of `DropdownMenuItem` objects as its `items` prop.

```jsx
<DropdownMenu
  items={[
    { label: 'Item 1', onClick: () => console.log('Item 1 clicked') },
    { label: 'Item 2', onClick: () => console.log('Item 2 clicked') },
    { label: 'Item 3', onClick: () => console.log('Item 3 clicked') },
  ]}
/>
```
GRAVITY_TRANSLATION_BLOCK_2_END
### Props

| Name | Type | Description | Default | Required |
|---|---|---|---|---|
| `items` | `DropdownMenuItem[]` | An array of objects, where each object represents a dropdown menu item. See the [DropdownMenuItem](#dropdownmenuitem) type for more details. | `[]` | Yes |
| `align` | `'left' | 'right'` | The alignment of the dropdown menu relative to its trigger. | `'left'` | No |
| `width` | `string` | The width of the dropdown menu. Can be a CSS valid string (e.g., '200px', '50%'). | `undefined` | No |
| `maxHeight` | `string` | The maximum height of the dropdown menu. Can be a CSS valid string (e.g., '300px'). | `undefined` | No |
| `className` | `string` | Additional CSS class names to apply to the dropdown menu. | `undefined` | No |
| `style` | `React.CSSProperties` | Inline styles to apply to the dropdown menu. | `undefined` | No |
| `onOpen` | `() => void` | Callback function that is called when the dropdown menu opens. | `undefined` | No |
| `onClose` | `() => void` | Callback function that is called when the dropdown menu closes. | `undefined` | No |
| `open` | `boolean` | Controls whether the dropdown menu is open or closed. | `undefined` | No |
| `trigger` | `React.ReactNode` | The element that triggers the dropdown menu to open. | `undefined` | Yes |
GRAVITY_TRANSLATION_BLOCK_3_END
### DropdownMenuItem

This type describes individual dropdown menu items.

| Name | Type | Description | Default | Required |
|---|---|---|---|---|
| `label` | `string` | The text to display for the menu item. | `undefined` | Yes |
| `onClick` | `() => void` | The callback function to execute when the menu item is clicked. | `undefined` | Yes |
| `disabled` | `boolean` | Whether the menu item is disabled. Disabled items are not clickable. | `false` | No |
| `icon` | `React.ReactNode` | An optional icon to display next to the menu item label. | `undefined` | No |
| `className` | `string` | Additional CSS class names to apply to the menu item. | `undefined` | No |
| `style` | `React.CSSProperties` | Inline styles to apply to the menu item. | `undefined` | No |
GRAVITY_TRANSLATION_BLOCK_4_END
### Examples

#### Basic Usage

```jsx
import { DropdownMenu, DropdownMenuItem } from '@your-ui-library/dropdown-menu';

function MyComponent() {
  const menuItems = [
    { label: 'Profile', onClick: () => alert('Go to profile') },
    { label: 'Settings', onClick: () => alert('Go to settings') },
    { label: 'Logout', onClick: () => alert('Logout') },
  ];

  return (
    <DropdownMenu
      trigger={<button>Open Menu</button>}
      items={menuItems}
    />
  );
}
```
GRAVITY_TRANSLATION_BLOCK_5_END
#### With Icons and Disabled Item

```jsx
import { DropdownMenu, DropdownMenuItem } from '@your-ui-library/dropdown-menu';
import { IconUser, IconSettings, IconLogout } from '@your-ui-library/icons'; // Assuming you have an icon library

function MyComponent() {
  const menuItems = [
    { label: 'Profile', onClick: () => alert('Go to profile'), icon: <IconUser /> },
    { label: 'Settings', onClick: () => alert('Go to settings'), icon: <IconSettings /> },
    { label: 'Separator', onClick: () => {}, disabled: true }, // Disabled item
    { label: 'Logout', onClick: () => alert('Logout'), icon: <IconLogout /> },
  ];

  return (
    <DropdownMenu
      trigger={<button>Menu with Icons</button>}
      items={menuItems}
    />
  );
}
```
GRAVITY_TRANSLATION_BLOCK_6_END
#### Custom Width and Max Height

```jsx
import { DropdownMenu, DropdownMenuItem } from '@your-ui-library/dropdown-menu';

function MyComponent() {
  const menuItems = [
    { label: 'Item 1', onClick: () => {} },
    { label: 'Item 2', onClick: () => {} },
    { label: 'Item 3', onClick: () => {} },
    { label: 'Item 4', onClick: () => {} },
    { label: 'Item 5', onClick: () => {} },
    { label: 'Item 6', onClick: () => {} },
  ];

  return (
    <DropdownMenu
      trigger={<button>Wide Menu</button>}
      items={menuItems}
      width="300px"
      maxHeight="200px"
    />
  );
}
```
GRAVITY_TRANSLATION_BLOCK_7_END
#### Controlled Open State

```jsx
import { DropdownMenu, DropdownMenuItem } from '@your-ui-library/dropdown-menu';
import React, { useState } from 'react';

function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Option A', onClick: () => alert('Option A selected') },
    { label: 'Option B', onClick: () => alert('Option B selected') },
  ];

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Close Menu' : 'Open Menu'}
      </button>
      <DropdownMenu
        trigger={<button>Controlled Menu</button>}
        items={menuItems}
        open={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
}
```
GRAVITY_TRANSLATION_BLOCK_8_END
### Styling

You can customize the appearance of the `DropdownMenu` and `DropdownMenuItem` components using the `className` and `style` props.

For example, to add a border to the dropdown menu:

```jsx
<DropdownMenu
  trigger={<button>Styled Menu</button>}
  items={[
    { label: 'Item 1', onClick: () => {} },
    { label: 'Item 2', onClick: () => {} },
  ]}
  style={{ border: '1px solid #ccc', borderRadius: '4px' }}
/>
```
GRAVITY_TRANSLATION_BLOCK_9_END
You can also target specific elements within the dropdown using CSS selectors. The component's structure is generally:

```
.dropdown-menu-container
  .dropdown-menu-trigger
  .dropdown-menu-list
    .dropdown-menu-item
      .dropdown-menu-item-icon
      .dropdown-menu-item-label
```
GRAVITY_TRANSLATION_BLOCK_10_END
### Accessibility

The `DropdownMenu` component is designed with accessibility in mind. It uses ARIA attributes to ensure proper interaction with screen readers.

*   The `trigger` element should be focusable and have appropriate ARIA roles and attributes (e.g., `aria-haspopup="true"`, `aria-expanded`).
*   The dropdown list itself should have `role="menu"` and each item should have `role="menuitem"`.
*   Keyboard navigation is supported:
    *   `ArrowDown` and `ArrowUp` keys to navigate between items.
    *   `Enter` or `Space` key to select an item.
    *   `Escape` key to close the menu.

Ensure your `trigger` element is implemented correctly to leverage these accessibility features.
GRAVITY_TRANSLATION_BLOCK_11_END

| 名称         | 描述                                                                                                                            |                      类型                      | 默认值 |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------ | :--------------------------------------------: | :-----: |
| `text`       | 菜单项内容。                                                                                                                    |               `React.ReactNode`                |         |
| `action`     | 菜单项点击处理程序。它接收来自父下拉菜单组件的参数（`event` 和 `data`）。                                                        | `(event: React.MouseEvent, data: any) => void` |         |
| `iconStart`  | 菜单项内容之前的图标。                                                                                                          |               `React.ReactNode`                |         |
| `iconEnd`    | 菜单项内容之后的图标。如果该项有子菜单，则忽略此属性。                                                                          |               `React.ReactNode`                |         |
| `hidden`     | 确定菜单项是否隐藏。                                                                                                            |                   `boolean`                    |         |
| `disabled`   | 确定菜单项是否禁用。                                                                                                            |                   `boolean`                    |         |
| `href`       | 具有此属性的菜单项将成为指向指定位置的链接。                                                                                    |                    `string`                    |         |
| `target`     | 与 `<a>` 标签的 `target` 属性相同。                                                                                             |                    `string`                    |         |
| `rel`        | 与 `<a>` 标签的 `rel` 属性相同。                                                                                                |                    `string`                    |         |
| `extraProps` | 其他菜单项属性。                                                                                                                |                    `object`                    |         |
| `title`      | 工具提示文本。                                                                                                                  |                    `string`                    |         |
| `className`  | `class` HTML 属性值。                                                                                                           |                    `string`                    |         |
| `items`      | 子菜单项。                                                                                                                      |  `(DropdownMenuItem \| DropdownMenuItem[])[]`  |         |
| `popupProps` | 子菜单弹出属性。                                                                                                                |                    `string`                    |         |
| `path`       | 从根到当前项的索引路径。                                                                                                        |                   `number[]`                   |         |
| `closeMenu`  | 自定义 `closeMenu` 回调。可以调用它来代替关闭主菜单，并用于在主菜单之前关闭子菜单。                                                |                  `() => void`                  |         |

### SwitcherProps

| 名称        | 描述                                                     |     类型     |
| :---------- | :------------------------------------------------------- | :----------: |
| `onClick`   | 当切换器被点击时调用。                                       | `() => void` |
| `onKeyDown` | 当切换器获得焦点并按下操作键时调用。                         | `() => void` |