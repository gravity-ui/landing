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
| `size`                     | 应用于默认 `switcher` 和菜单。                                                                       |            `'s' \| 'm' \| 'l' \| 'xl'`             |     `'m'`     |
| `disabled`                 | 将此属性设置为 `true` 会禁用 `switcher` 按钮并阻止菜单打开。                                                               |                     `boolean`                      |               |
| `renderSwitcher`           | 菜单切换控件的渲染函数。                                                                           |                 `React.ReactNode`                  |               |
| `switcherWrapperClassName` | `switcher` 的父组件的 `className` 属性的值。                                                               |                      `string`                      |               |
| `defaultSwitcherProps`     | 默认 `switcher` 属性。                                                                             |                   `ButtonProps`                    |               |
| `defaultSwitcherClassName` | 默认 `switcher` 的 `className` 属性的值。                                                               |                      `string`                      |               |
| `menuProps`                | 覆盖默认的下拉菜单弹出属性。                                                                       |                    `MenuProps`                     |               |
| `popupProps`               | 覆盖默认的弹出属性。                                                                               |                    `PopupProps`                    |               |
| `open`                     | 切换下拉菜单的可见性。                                                                             |                     `boolean`                      |               |
| `onOpenToggle`             | 在菜单打开或关闭时调用。                                                                           |                    `() => void`                    |               |
| `onSwitcherClick`          | 单击 `switcher` 时调用。                                                                           |       `React.MouseEventHandler<HTMLElement>`       |               |
| `hideOnScroll`             | 指定滚动父元素时是否隐藏菜单。                                                                       |                     `boolean`                      |    `true`     |
| `children`                 | 菜单弹出窗口内的自定义内容。                                                                         |                 `React.ReactNode`                  |               |

### DropdownMenuItem

此类型描述单个下拉菜单项。
GRAVITY_TRANSLATION_BLOCK_1_END
```typescript
interface DropdownMenuItem {
  label: string;
  value: string;
  disabled?: boolean;
  icon?: React.ReactNode;
}
```
GRAVITY_TRANSLATION_BLOCK_2_END
### DropdownMenu

This component renders a list of `DropdownMenuItem`s.

It is a controlled component, meaning you must manage its open/closed state and the selected value.

#### Props

| Prop | Type | Description | Default |
|---|---|---|---|
| `items` | `DropdownMenuItem[]` | The list of items to display in the dropdown. | `[]` |
| `value` | `string` | The currently selected value. | `undefined` |
| `onChange` | `(value: string) => void` | Callback function that is called when a new item is selected. | `undefined` |
| `open` | `boolean` | Controls whether the dropdown is open or closed. | `false` |
| `onClose` | `() => void` | Callback function that is called when the dropdown is closed. | `undefined` |
| `align` | `'left' | 'right'` | The alignment of the dropdown menu relative to the trigger. | `'left'` |
| `width` | `string` | The width of the dropdown menu. | `undefined` |
| `className` | `string` | Optional CSS class name for the dropdown menu. | `undefined` |
| `style` | `React.CSSProperties` | Optional inline styles for the dropdown menu. | `undefined` |
| `trigger` | `React.ReactNode` | The element that triggers the dropdown to open. | `undefined` |

GRAVITY_TRANSLATION_BLOCK_3_END
#### Example

```jsx
import React, { useState } from 'react';
import { DropdownMenu, DropdownMenuItem } from '@your-ui-library/components';

function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | undefined>(undefined);

  const menuItems: DropdownMenuItem[] = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2', disabled: true },
    { label: 'Option 3', value: 'option3' },
  ];

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    setIsOpen(false); // Close the dropdown after selection
  };

  return (
    <DropdownMenu
      items={menuItems}
      value={selectedValue}
      onChange={handleSelect}
      open={isOpen}
      onClose={() => setIsOpen(false)}
      trigger={
        <button onClick={() => setIsOpen(!isOpen)}>
          {selectedValue ? `Selected: ${selectedValue}` : 'Select an option'}
        </button>
      }
    />
  );
}
```
GRAVITY_TRANSLATION_BLOCK_4_END

| 名称         | 描述                                                                                                                            |                      类型                      | 默认值 |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------ | :--------------------------------------------: | :-----: |
| `text`       | 菜单项内容。                                                                                                                    |               `React.ReactNode`                |         |
| `action`     | 菜单项点击处理程序。它接收来自父下拉菜单组件的参数（`event` 和 `data`）。                                                          | `(event: React.MouseEvent, data: any) => void` |         |
| `iconStart`  | 菜单项内容之前的图标。                                                                                                          |               `React.ReactNode`                |         |
| `iconEnd`    | 菜单项内容之后的图标。如果该项有子菜单，则忽略此属性。                                                                            |               `React.ReactNode`                |         |
| `hidden`     | 确定菜单项是否隐藏。                                                                                                            |                   `boolean`                    |         |
| `disabled`   | 确定菜单项是否禁用。                                                                                                            |                   `boolean`                    |         |
| `href`       | 具有此属性的菜单项将成为指向指定位置的链接。                                                                                      |                    `string`                    |         |
| `target`     | 与 `<a>` 标签的 `target` 属性相同。                                                                                             |                    `string`                    |         |
| `rel`        | 与 `<a>` 标签的 `rel` 属性相同。                                                                                                |                    `string`                    |         |
| `extraProps` | 额外的菜单项属性。                                                                                                              |                    `object`                    |         |
| `title`      | 工具提示文本。                                                                                                                  |                    `string`                    |         |
| `className`  | `class` HTML 属性值。                                                                                                           |                    `string`                    |         |
| `items`      | 子菜单项。                                                                                                                      |  `(DropdownMenuItem \| DropdownMenuItem[])[]`  |         |
| `popupProps` | 子菜单弹出属性。                                                                                                                |                    `string`                    |         |
| `path`       | 从根目录到当前项的索引路径。                                                                                                    |                   `number[]`                   |         |
| `closeMenu`  | 自定义 `closeMenu` 回调。可以调用它来代替关闭主菜单，并用于在主菜单之前关闭子菜单。                                                  |                  `() => void`                  |         |

### SwitcherProps

| 名称        | 描述                                                     |     类型     |
| :---------- | :------------------------------------------------------- | :----------: |
| `onClick`   | 当切换器被点击时调用。                                     | `() => void` |
| `onKeyDown` | 当切换器获得焦点并按下操作键时调用。                       | `() => void` |