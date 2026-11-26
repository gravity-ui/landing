下拉菜单组件提供项目分组、子菜单和可自定义的切换器。下拉菜单项通过 `items` 属性进行配置。默认情况下，菜单切换器是一个带有省略号图标（**⋯**）的按钮，可以通过 `renderSwitcher` 属性进行覆盖。

```tsx
import {DropdownMenu} from '@gravity-ui/uikit';
```

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

## 分组项目

`DropdownMenu` 项目可以通过在 `items` 数组中嵌套菜单项数组来分组，并与其他菜单项在视觉上分开。

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

## 子菜单

单个菜单项上的 `items` 属性会为该项添加嵌套的子项。

带有子菜单的菜单项会获得以下附加类名，以便进行额外的样式设置：

- `.g-dropdown-menu__menu-item_with-submenu`: 用于包含多个嵌套项的项。
- `.g-dropdown-menu__menu-item_active-parent`: 用于其子菜单当前打开的项。

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

## 自定义菜单切换器

要配置菜单切换器，请使用 `renderSwitcher` 属性。它可以是任何返回 React 组件的函数（在 TypeScript 中，是任何 `(props: SwitcherProps) => React.ReactNode`，请参阅下面的 [`SwitcherProps`](#switcherprops)）。默认情况下，菜单切换器是一个带有省略号图标（**⋯**）的按钮。

GRAVITY_TRANSLATION_BLOCK_7_END

GRAVITY_TRANSLATION_BLOCK_8_END

上面的示例为了演示可自定义菜单切换器的概念而过于简化。在实际应用中，通常建议可点击的菜单切换器应是一个可以通过键盘和其他辅助技术（如按钮）访问的组件。

## 自定义图标

您可以使用 `iconStart` 或 `iconEnd` 属性为 `DropdownMenu` 项添加自定义图标。默认情况下，`DropdownMenu` 项不带图标。

您可以使用 `DropdownMenu` 的 `renderSwitcher` 属性更改菜单切换器的图标。默认情况下，菜单切换器是一个带有省略号图标（**⋯**）的按钮。

GRAVITY_TRANSLATION_BLOCK_9_END

GRAVITY_TRANSLATION_BLOCK_10_END

## 属性

| 名称                       | 描述                                                                                             |                        类型                        |    默认值    |
| :------------------------- | :----------------------------------------------------------------------------------------------- | :------------------------------------------------: | :-----------: |
| `items`                    | 项目数组。嵌套的项目数组代表视觉上分隔的组。                                                               | `(DropdownMenuItem \| DropdownMenuItem[])[] \| []` |               |
| `data`                     | 提供给从菜单调用的操作的载荷。（这对于上下文菜单可能很有用。）                                                              |                       `any`                        |               |
| `icon`                     | 默认 `switcher` 的图标。                                                                         |                 `React.ReactNode`                  | 省略号图标 |
| `size`                     | 应用于默认 `switcher` 和菜单。                                                                   |            `'s' \| 'm' \| 'l' \| 'xl'`             |     `'m'`     |
| `disabled`                 | 将此属性设置为 `true` 会禁用 `switcher` 按钮并阻止菜单打开。                                                               |                     `boolean`                      |               |
| `renderSwitcher`           | 菜单切换控件的渲染函数。                                                                         |                 `React.ReactNode`                  |               |
| `switcherWrapperClassName` | `switcher` 父组件的 `className` 属性的值。                                                               |                      `string`                      |               |
| `defaultSwitcherProps`     | 默认 `switcher` 属性。                                                                           |                   `ButtonProps`                    |               |
| `defaultSwitcherClassName` | 默认 `switcher` 的 `className` 属性的值。                                                               |                      `string`                      |               |
| `menuProps`                | 覆盖默认的下拉菜单弹出属性。                                                                     |                    `MenuProps`                     |               |
| `popupProps`               | 覆盖默认的弹出属性。                                                                             |                    `PopupProps`                    |               |
| `open`                     | 切换下拉菜单的可见性。                                                                           |                     `boolean`                      |               |
| `onOpenToggle`             | 在菜单打开或关闭时调用。                                                                         |                    `() => void`                    |               |
| `onSwitcherClick`          | 单击 `switcher` 时调用。                                                                         |       `React.MouseEventHandler<HTMLElement>`       |               |
| `hideOnScroll`             | 指定滚动父元素时是否隐藏菜单。                                                                   |                     `boolean`                      |    `true`     |
| `children`                 | 菜单弹出窗口内的自定义内容。                                                                     |                 `React.ReactNode`                  |               |

### DropdownMenuItem

此类型描述单个下拉菜单项。
GRAVITY_TRANSLATION_BLOCK_1_END
### DropdownMenu

This component renders a menu of `DropdownMenuItem` components.

```jsx
<DropdownMenu
  trigger={<Button>Open Menu</Button>}
  items={[
    {
      label: 'Item 1',
      onSelect: () => console.log('Selected Item 1'),
    },
    {
      label: 'Item 2',
      onSelect: () => console.log('Selected Item 2'),
    },
  ]}
/>
```

#### Props

| Prop | Type | Description | Default |
|---|---|---|---|
| `items` | `DropdownMenuItem[]` | An array of `DropdownMenuItem` objects to render in the menu. | `[]` |
| `trigger` | `React.ReactNode` | The element that will trigger the dropdown menu to open. | `null` |
| `align` | `'left' | 'right'` | The alignment of the dropdown menu relative to the trigger. | `'left'` |
| `open` | `boolean` | Controls whether the dropdown menu is open or closed. | `false` |
| `onOpenChange` | `(open: boolean) => void` | Callback fired when the open state of the dropdown menu changes. | `() => {}` |
| `closeOnSelect` | `boolean` | Whether to close the dropdown menu when an item is selected. | `true` |
| `offset` | `number` | The offset in pixels between the trigger and the dropdown menu. | `0` |
| `className` | `string` | Optional additional CSS class name for the dropdown menu. | `''` |
| `overlayClassName` | `string` | Optional additional CSS class name for the dropdown menu overlay. | `''` |
| `arrowClassName` | `string` | Optional additional CSS class name for the dropdown menu arrow. | `''` |
| `arrowStyle` | `React.CSSProperties` | Optional inline styles for the dropdown menu arrow. | `{}` |
| `disabled` | `boolean` | Whether the dropdown menu is disabled. | `false` |
| `id` | `string` | The ID of the dropdown menu. | `null` |
| `ariaLabel` | `string` | The ARIA label for the dropdown menu. | `null` |
| `arialabelledby` | `string` | The ID of the element that labels the dropdown menu. | `null` |
| `ariadescribedby` | `string` | The ID of the element that describes the dropdown menu. | `null` |
| `role` | `string` | The ARIA role for the dropdown menu. | `'menu'` |
| `tabIndex` | `number` | The tab index for the dropdown menu. | `0` |
| `onKeyDown` | `(event: React.KeyboardEvent) => void` | Callback fired when a key is pressed while the dropdown menu is focused. | `() => {}` |
| `onKeyUp` | `(event: React.KeyboardEvent) => void` | Callback fired when a key is released while the dropdown menu is focused. | `() => {}` |
| `onKeyPress` | `(event: React.KeyboardEvent) => void` | Callback fired when a key is pressed and released while the dropdown menu is focused. | `() => {}` |
| `onFocus` | `(event: React.FocusEvent) => void` | Callback fired when the dropdown menu receives focus. | `() => {}` |
| `onBlur` | `(event: React.FocusEvent) => void` | Callback fired when the dropdown menu loses focus. | `() => {}` |
| `onMouseEnter` | `(event: React.MouseEvent) => void` | Callback fired when the mouse pointer enters the dropdown menu. | `() => {}` |
| `onMouseLeave` | `(event: React.MouseEvent) => void` | Callback fired when the mouse pointer leaves the dropdown menu. | `() => {}` |
| `onMouseDown` | `(event: React.MouseEvent) => void` | Callback fired when the mouse button is pressed down on the dropdown menu. | `() => {}` |
| `onMouseUp` | `(event: React.MouseEvent) => void` | Callback fired when the mouse button is released on the dropdown menu. | `() => {}` |
| `onClick` | `(event: React.MouseEvent) => void` | Callback fired when the dropdown menu is clicked. | `() => {}` |
| `onTouchCancel` | `(event: React.TouchEvent) => void` | Callback fired when a touch event is canceled. | `() => {}` |
| `onTouchEnd` | `(event: React.TouchEvent) => void` | Callback fired when a touch event ends. | `() => {}` |
| `onTouchMove` | `(event: React.TouchEvent) => void` | Callback fired when a touch event moves. | `() => {}` |
| `onTouchStart` | `(event: React.TouchEvent) => void` | Callback fired when a touch event starts. | `() => {}` |
| `style` | `React.CSSProperties` | Optional inline styles for the dropdown menu. | `{}` |
| `testId` | `string` | A unique identifier for testing purposes. | `null` |
| `testIdPrefix` | `string` | A prefix for all test IDs within the dropdown menu. | `''` |
| `testIdSuffix` | `string` | A suffix for all test IDs within the dropdown menu. | `''` |
| `testIdSeparator` | `string` | The separator used between the prefix, component name, and suffix for test IDs. | `'-'` |
| `testIdAttribute` | `string` | The attribute used for testing (e.g., 'data-testid'). | `'data-testid'` |
| `testIdEnabled` | `boolean` | Whether to generate test IDs. | `true` |
| `testIdGenerator` | `(id: string) => string` | A custom function to generate test IDs. | `null` |
| `testIdBlacklist` | `string[]` | An array of component names to exclude from test ID generation. | `[]` |
| `testIdWhitelist` | `string[]` | An array of component names to include in test ID generation. | `[]` |
| `testIdExclude` | `string[]` | An array of component names to exclude from test ID generation. | `[]` |
| `testIdInclude` | `string[]` | An array of component names to include in test ID generation. | `[]` |
| `testIdPrefixEnabled` | `boolean` | Whether to include the prefix in test IDs. | `true` |
| `testIdSuffixEnabled` | `boolean` | Whether to include the suffix in test IDs. | `true` |
| `testIdComponentEnabled` | `boolean` | Whether to include the component name in test IDs. | `true` |
| `testIdSeparatorEnabled` | `boolean` | Whether to include the separator in test IDs. | `true` |
| `testIdAttributeEnabled` | `boolean` | Whether to include the attribute in test IDs. | `true` |
| `testIdGeneratorEnabled` | `boolean` | Whether to use the custom test ID generator. | `true` |
| `testIdBlacklistEnabled` | `boolean` | Whether to use the test ID blacklist. | `true` |
| `testIdWhitelistEnabled` | `boolean` | Whether to use the test ID whitelist. | `true` |
| `testIdExcludeEnabled` | `boolean` | Whether to use the test ID exclude list. | `true` |
| `testIdIncludeEnabled` | `boolean` | Whether to use the test ID include list. | `true` |
| `testIdPrefixValue` | `string` | The value of the prefix for test IDs. | `''` |
| `testIdSuffixValue` | `string` | The value of the suffix for test IDs. | `''` |
| `testIdSeparatorValue` | `string` | The value of the separator for test IDs. | `'-'` |
| `testIdAttributeValue` | `string` | The value of the attribute for test IDs. | `'data-testid'` |
| `testIdGeneratorValue` | `(id: string) => string` | The custom function to generate test IDs. | `null` |
| `testIdBlacklistValue` | `string[]` | The array of component names to exclude from test ID generation. | `[]` |
| `testIdWhitelistValue` | `string[]` | The array of component names to include in test ID generation. | `[]` |
| `testIdExcludeValue` | `string[]` | The array of component names to exclude from test ID generation. | `[]` |
| `testIdIncludeValue` | `string[]` | The array of component names to include in test ID generation. | `[]` |
GRAVITY_TRANSLATION_BLOCK_2_END
### DropdownMenuItem

This type describes individual dropdown menu items.

```jsx
<DropdownMenuItem
  label="My Item"
  onSelect={() => console.log('Selected')}
  icon={<Icon name="star" />}
  disabled={false}
  href="https://example.com"
  target="_blank"
  rel="noopener noreferrer"
/>
```

#### Props

| Prop | Type | Description | Default |
|---|---|---|---|
| `label` | `string` | The text to display for the menu item. | `''` |
| `onSelect` | `() => void` | Callback fired when the menu item is selected. | `() => {}` |
| `icon` | `React.ReactNode` | An optional icon to display next to the menu item label. | `null` |
| `disabled` | `boolean` | Whether the menu item is disabled. | `false` |
| `href` | `string` | If provided, the menu item will render as a link. | `null` |
| `target` | `string` | The target attribute for the link. | `null` |
| `rel` | `string` | The rel attribute for the link. | `null` |
| `className` | `string` | Optional additional CSS class name for the menu item. | `''` |
| `overlayClassName` | `string` | Optional additional CSS class name for the menu item overlay. | `''` |
| `arrowClassName` | `string` | Optional additional CSS class name for the menu item arrow. | `''` |
| `arrowStyle` | `React.CSSProperties` | Optional inline styles for the menu item arrow. | `{}` |
| `id` | `string` | The ID of the menu item. | `null` |
| `ariaLabel` | `string` | The ARIA label for the menu item. | `null` |
| `arialabelledby` | `string` | The ID of the element that labels the menu item. | `null` |
| `ariadescribedby` | `string` | The ID of the element that describes the menu item. | `null` |
| `role` | `string` | The ARIA role for the menu item. | `'menuitem'` |
| `tabIndex` | `number` | The tab index for the menu item. | `0` |
| `onKeyDown` | `(event: React.KeyboardEvent) => void` | Callback fired when a key is pressed while the menu item is focused. | `() => {}` |
| `onKeyUp` | `(event: React.KeyboardEvent) => void` | Callback fired when a key is released while the menu item is focused. | `() => {}` |
| `onKeyPress` | `(event: React.KeyboardEvent) => void` | Callback fired when a key is pressed and released while the menu item is focused. | `() => {}` |
| `onFocus` | `(event: React.FocusEvent) => void` | Callback fired when the menu item receives focus. | `() => {}` |
| `onBlur` | `(event: React.FocusEvent) => void` | Callback fired when the menu item loses focus. | `() => {}` |
| `onMouseEnter` | `(event: React.MouseEvent) => void` | Callback fired when the mouse pointer enters the menu item. | `() => {}` |
| `onMouseLeave` | `(event: React.MouseEvent) => void` | Callback fired when the mouse pointer leaves the menu item. | `() => {}` |
| `onMouseDown` | `(event: React.MouseEvent) => void` | Callback fired when the mouse button is pressed down on the menu item. | `() => {}` |
| `onMouseUp` | `(event: React.MouseEvent) => void` | Callback fired when the mouse button is released on the menu item. | `() => {}` |
| `onClick` | `(event: React.MouseEvent) => void` | Callback fired when the menu item is clicked. | `() => {}` |
| `onTouchCancel` | `(event: React.TouchEvent) => void` | Callback fired when a touch event is canceled. | `() => {}` |
| `onTouchEnd` | `(event: React.TouchEvent) => void` | Callback fired when a touch event ends. | `() => {}` |
| `onTouchMove` | `(event: React.TouchEvent) => void` | Callback fired when a touch event moves. | `() => {}` |
| `onTouchStart` | `(event: React.TouchEvent) => void` | Callback fired when a touch event starts. | `() => {}` |
| `style` | `React.CSSProperties` | Optional inline styles for the menu item. | `{}` |
| `testId` | `string` | A unique identifier for testing purposes. | `null` |
| `testIdPrefix` | `string` | A prefix for all test IDs within the menu item. | `''` |
| `testIdSuffix` | `string` | A suffix for all test IDs within the menu item. | `''` |
| `testIdSeparator` | `string` | The separator used between the prefix, component name, and suffix for test IDs. | `'-'` |
| `testIdAttribute` | `string` | The attribute used for testing (e.g., 'data-testid'). | `'data-testid'` |
| `testIdEnabled` | `boolean` | Whether to generate test IDs. | `true` |
| `testIdGenerator` | `(id: string) => string` | A custom function to generate test IDs. | `null` |
| `testIdBlacklist` | `string[]` | An array of component names to exclude from test ID generation. | `[]` |
| `testIdWhitelist` | `string[]` | An array of component names to include in test ID generation. | `[]` |
| `testIdExclude` | `string[]` | An array of component names to exclude from test ID generation. | `[]` |
| `testIdInclude` | `string[]` | An array of component names to include in test ID generation. | `[]` |
| `testIdPrefixEnabled` | `boolean` | Whether to include the prefix in test IDs. | `true` |
| `testIdSuffixEnabled` | `boolean` | Whether to include the suffix in test IDs. | `true` |
| `testIdComponentEnabled` | `boolean` | Whether to include the component name in test IDs. | `true` |
| `testIdSeparatorEnabled` | `boolean` | Whether to include the separator in test IDs. | `true` |
| `testIdAttributeEnabled` | `boolean` | Whether to include the attribute in test IDs. | `true` |
| `testIdGeneratorEnabled` | `boolean` | Whether to use the custom test ID generator. | `true` |
| `testIdBlacklistEnabled` | `boolean` | Whether to use the test ID blacklist. | `true` |
| `testIdWhitelistEnabled` | `boolean` | Whether to use the test ID whitelist. | `true` |
| `testIdExcludeEnabled` | `boolean` | Whether to use the test ID exclude list. | `true` |
| `testIdIncludeEnabled` | `boolean` | Whether to use the test ID include list. | `true` |
| `testIdPrefixValue` | `string` | The value of the prefix for test IDs. | `''` |
| `testIdSuffixValue` | `string` | The value of the suffix for test IDs. | `''` |
| `testIdSeparatorValue` | `string` | The value of the separator for test IDs. | `'-'` |
| `testIdAttributeValue` | `string` | The value of the attribute for test IDs. | `'data-testid'` |
| `testIdGeneratorValue` | `(id: string) => string` | The custom function to generate test IDs. | `null` |
| `testIdBlacklistValue` | `string[]` | The array of component names to exclude from test ID generation. | `[]` |
| `testIdWhitelistValue` | `string[]` | The array of component names to include in test ID generation. | `[]` |
| `testIdExcludeValue` | `string[]` | The array of component names to exclude from test ID generation. | `[]` |
| `testIdIncludeValue` | `string[]` | The array of component names to include in test ID generation. | `[]` |
GRAVITY_TRANSLATION_BLOCK_3_END

| 名称         | 描述                                                                                                                            |                      类型                      | 默认值 |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------ | :--------------------------------------------: | :-----: |
| `text`       | 菜单项内容。                                                                                                                    |               `React.ReactNode`                |         |
| `action`     | 菜单项点击处理程序。它接收来自父下拉菜单组件的参数（`event` 和 `data`）。                                                              | `(event: React.MouseEvent, data: any) => void` |         |
| `iconStart`  | 菜单项内容之前的图标。                                                                                                          |               `React.ReactNode`                |         |
| `iconEnd`    | 菜单项内容之后的图标。如果该项有子菜单，则忽略此项。                                                                                |               `React.ReactNode`                |         |
| `hidden`     | 确定菜单项是否隐藏。                                                                                                            |                   `boolean`                    |         |
| `disabled`   | 确定菜单项是否禁用。                                                                                                            |                   `boolean`                    |         |
| `href`       | 具有此属性的菜单项将成为指向指定位置的链接。                                                                                        |                    `string`                    |         |
| `target`     | 与 `<a>` 标签的 `target` 属性相同。                                                                                             |                    `string`                    |         |
| `rel`        | 与 `<a>` 标签的 `rel` 属性相同。                                                                                                |                    `string`                    |         |
| `extraProps` | 其他菜单项属性。                                                                                                                |                    `object`                    |         |
| `title`      | 工具提示文本。                                                                                                                  |                    `string`                    |         |
| `className`  | `class` HTML 属性值。                                                                                                           |                    `string`                    |         |
| `items`      | 子菜单项。                                                                                                                      |  `(DropdownMenuItem \| DropdownMenuItem[])[]`  |         |
| `popupProps` | 子菜单弹出属性。                                                                                                                |                    `string`                    |         |
| `path`       | 从根目录到当前项的索引路径。                                                                                                    |                   `number[]`                   |         |
| `closeMenu`  | 自定义 `closeMenu` 回调。可以调用它来代替关闭主菜单，并用于在主菜单之前关闭子菜单。                                                              |                  `() => void`                  |         |

### SwitcherProps

| 名称        | 描述                                                 |     类型     |
| :---------- | :--------------------------------------------------- | :----------: |
| `onClick`   | 当切换器被点击时调用。                               | `() => void` |
| `onKeyDown` | 当切换器获得焦点并按下操作键时调用。                 | `() => void` |