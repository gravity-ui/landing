ドロップダウンメニューコンポーネントは、アイテムのグループ化、サブメニュー、およびカスタマイズ可能なトグルを提供します。ドロップダウンメニューアイテムは `items` プロパティで設定されます。デフォルトでは、メニューのトグルは楕円アイコン（**⋯**）を持つボタンですが、これは `renderSwitcher` プロパティで上書きできます。

```tsx
import {DropdownMenu} from '@gravity-ui/uikit/legacy';
```

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

## グループ化されたアイテム

`DropdownMenu` のアイテムは、`items` 配列内にネストされたメニューアイテムの配列を導入することで、グループ化し、他のメニューアイテムから視覚的に分離できます。

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

## サブメニュー

個々のメニューアイテムの `items` プロパティは、そのようなアイテムにネストされたサブアイテムを追加します。

サブメニューを持つメニューアイテムには、追加のスタイリングを可能にするために、以下の追加クラス名が付与されます。

- `.g-dropdown-menu-legacy__menu-item_with-submenu`: 複数のネストされたアイテムを持つアイテムの場合。
- `.g-dropdown-menu-legacy__menu-item_active-parent`: サブメニューが現在開いているアイテムの場合。

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

## カスタムメニューのトグル

メニューのトグルを設定するには、`renderSwitcher` プロパティを使用します。これは、Reactコンポーネントを返す任意の関数（TypeScriptの用語では `(props: SwitcherProps) => React.ReactNode`）です。詳細は以下の [`SwitcherProps`](#switcherprops) を参照してください。デフォルトでは、メニューのトグルは楕円アイコン（**⋯**）を持つボタンです。

GRAVITY_TRANSLATION_BLOCK_6_END

GRAVITY_TRANSLATION_BLOCK_7_END

上記の例は、カスタムメニューのトグルのアイデアを示すために簡略化されています。実際のアプリケーションでは、クリック可能なメニューのトグルは、ボタンのように、キーボードやその他の支援技術でアクセス可能なコンポーネントであることが一般的に推奨されます。

## カスタムアイコン

`iconStart` または `iconEnd` プロパティを使用して、`DropdownMenu` アイテムにカスタムアイコンを追加できます。デフォルトでは、`DropdownMenu` アイテムにはアイコンがありません。

`DropdownMenu` の `renderSwitcher` プロパティを使用して、メニューのトグルのアイコンを変更できます。デフォルトでは、メニューのトグルは楕円アイコン（**⋯**）を持つボタンです。

GRAVITY_TRANSLATION_BLOCK_8_END

GRAVITY_TRANSLATION_BLOCK_9_END

## プロパティ

GRAVITY_TRANSLATION_BLOCK_10_END

| 名前                       | 説明                                                                                             |                        型                        |    デフォルト    |
| :------------------------- | :----------------------------------------------------------------------------------------------- | :------------------------------------------------: | :-----------: |
| `items`                    | アイテムの配列。ネストされたアイテムの配列は、視覚的に分離されたグループを表します。                                                               | `(DropdownMenuItem \| DropdownMenuItem[])[] \| []` |               |
| `data`                     | メニューから呼び出されるアクションに提供されるペイロード。(コンテキストメニューに便利です。)                                                              |                       `any`                        |               |
| `icon`                     | デフォルトの `switcher` のアイコン。                                                                   |                 `React.ReactNode`                  | 省略記号アイコン |
| `size`                     | デフォルトの `switcher` とメニューの両方に適用されます。                                                               |            `'s' \| 'm' \| 'l' \| 'xl'`             |     `'m'`     |
| `disabled`                 | このプロパティを `true` に設定すると、`switcher` ボタンが無効になり、メニューが開かなくなります。                                                              |                     `boolean`                      |               |
| `renderSwitcher`           | メニューのトグルコントロールのレンダリング関数。                                                                   |                 `React.ReactNode`                  |               |
| `switcherWrapperClassName` | `switcher` の親コンポーネントの `className` プロパティの値。                                                               |                      `string`                      |               |
| `defaultSwitcherProps`     | デフォルトの `switcher` プロパティ。                                                                   |                   `ButtonProps`                    |               |
| `defaultSwitcherClassName` | デフォルトの `switcher` の `className` プロパティの値。                                                               |                      `string`                      |               |
| `menuProps`                | デフォルトのドロップダウンメニューポップアッププロパティをオーバーライドします。                                                                   |                    `MenuProps`                     |               |
| `popupProps`               | デフォルトのポップアッププロパティをオーバーライドします。                                                                   |                    `PopupProps`                    |               |
| `open`                     | ドロップダウンメニューの表示を切り替えます。                                                                   |                     `boolean`                      |               |
| `onOpenToggle`             | メニューが開閉されたときに呼び出されます。                                                                   |                    `() => void`                    |               |
| `onSwitcherClick`          | `switcher` がクリックされたときに呼び出されます。                                                                   |       `React.MouseEventHandler<HTMLElement>`       |               |
| `hideOnScroll`             | 親要素がスクロールされたときにメニューを非表示にするかどうかを指定します。                                                                   |                     `boolean`                      |    `true`     |
| `children`                 | メニューポップアップ内のカスタムコンテンツ。                                                                   |                 `React.ReactNode`                  |               |

### DropdownMenuItem

この型は、個々のドロップダウンメニュー項目を表します。
GRAVITY_TRANSLATION_BLOCK_1_END
### DropdownMenu

This type describes a dropdown menu.
GRAVITY_TRANSLATION_BLOCK_2_END
### DropdownMenuProps

This type describes the props for a `DropdownMenu`.
GRAVITY_TRANSLATION_BLOCK_3_END
### DropdownMenuSection

This type describes a section within a dropdown menu.
GRAVITY_TRANSLATION_BLOCK_4_END
### DropdownMenuSectionProps

This type describes the props for a `DropdownMenuSection`.
GRAVITY_TRANSLATION_BLOCK_5_END
### DropdownMenuSeparator

This type describes a separator within a dropdown menu.
GRAVITY_TRANSLATION_BLOCK_6_END
### DropdownMenuSeparatorProps

This type describes the props for a `DropdownMenuSeparator`.
GRAVITY_TRANSLATION_BLOCK_7_END
### DropdownMenuSubmenu

This type describes a submenu within a dropdown menu.
GRAVITY_TRANSLATION_BLOCK_8_END
### DropdownMenuSubmenuProps

This type describes the props for a `DropdownMenuSubmenu`.
GRAVITY_TRANSLATION_BLOCK_9_END
### DropdownMenuSubmenuItem

This type describes an individual item within a submenu.
GRAVITY_TRANSLATION_BLOCK_10_END
### DropdownMenuSubmenuItemProps

This type describes the props for a `DropdownMenuSubmenuItem`.
GRAVITY_TRANSLATION_BLOCK_11_END
### DropdownMenuTrigger

This type describes the trigger for a dropdown menu.
GRAVITY_TRANSLATION_BLOCK_12_END
### DropdownMenuTriggerProps

This type describes the props for a `DropdownMenuTrigger`.
GRAVITY_TRANSLATION_BLOCK_13_END
### DropdownMenuContent

This type describes the content of a dropdown menu.
GRAVITY_TRANSLATION_BLOCK_14_END
### DropdownMenuContentProps

This type describes the props for a `DropdownMenuContent`.
GRAVITY_TRANSLATION_BLOCK_15_END
### DropdownMenuCheckboxItem

This type describes a checkbox item within a dropdown menu.
GRAVITY_TRANSLATION_BLOCK_16_END
### DropdownMenuCheckboxItemProps

This type describes the props for a `DropdownMenuCheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_17_END
### DropdownMenuRadioItem

This type describes a radio item within a dropdown menu.
GRAVITY_TRANSLATION_BLOCK_18_END
### DropdownMenuRadioItemProps

This type describes the props for a `DropdownMenuRadioItem`.
GRAVITY_TRANSLATION_BLOCK_19_END
### DropdownMenuLabel

This type describes a label within a dropdown menu.
GRAVITY_TRANSLATION_BLOCK_20_END
### DropdownMenuLabelProps

This type describes the props for a `DropdownMenuLabel`.
GRAVITY_TRANSLATION_BLOCK_21_END
### DropdownMenuGroup

This type describes a group of items within a dropdown menu.
GRAVITY_TRANSLATION_BLOCK_22_END
### DropdownMenuGroupProps

This type describes the props for a `DropdownMenuGroup`.
GRAVITY_TRANSLATION_BLOCK_23_END
### DropdownMenuShortcut

This type describes a shortcut within a dropdown menu.
GRAVITY_TRANSLATION_BLOCK_24_END
### DropdownMenuShortcutProps

This type describes the props for a `DropdownMenuShortcut`.
GRAVITY_TRANSLATION_BLOCK_25_END
### DropdownMenuPortal

This type describes a portal within a dropdown menu.
GRAVITY_TRANSLATION_BLOCK_26_END
### DropdownMenuPortalProps

This type describes the props for a `DropdownMenuPortal`.
GRAVITY_TRANSLATION_BLOCK_27_END
### DropdownMenuArrow

This type describes an arrow within a dropdown menu.
GRAVITY_TRANSLATION_BLOCK_28_END
### DropdownMenuArrowProps

This type describes the props for a `DropdownMenuArrow`.
GRAVITY_TRANSLATION_BLOCK_29_END
### DropdownMenuScrollArea

This type describes a scrollable area within a dropdown menu.
GRAVITY_TRANSLATION_BLOCK_30_END
### DropdownMenuScrollAreaProps

This type describes the props for a `DropdownMenuScrollArea`.
GRAVITY_TRANSLATION_BLOCK_31_END
### DropdownMenuViewport

This type describes the viewport of a dropdown menu.
GRAVITY_TRANSLATION_BLOCK_32_END
### DropdownMenuViewportProps

This type describes the props for a `DropdownMenuViewport`.
GRAVITY_TRANSLATION_BLOCK_33_END
### DropdownMenuSub

This type describes a submenu.
GRAVITY_TRANSLATION_BLOCK_34_END
### DropdownMenuSubProps

This type describes the props for a `DropdownMenuSub`.
GRAVITY_TRANSLATION_BLOCK_35_END
### DropdownMenuSubTrigger

This type describes the trigger for a submenu.
GRAVITY_TRANSLATION_BLOCK_36_END
### DropdownMenuSubTriggerProps

This type describes the props for a `DropdownMenuSubTrigger`.
GRAVITY_TRANSLATION_BLOCK_37_END
### DropdownMenuSubContent

This type describes the content of a submenu.
GRAVITY_TRANSLATION_BLOCK_38_END
### DropdownMenuSubContentProps

This type describes the props for a `DropdownMenuSubContent`.
GRAVITY_TRANSLATION_BLOCK_39_END
### DropdownMenuRoot

This type describes the root of a dropdown menu.
GRAVITY_TRANSLATION_BLOCK_40_END
### DropdownMenuRootProps

This type describes the props for a `DropdownMenuRoot`.
GRAVITY_TRANSLATION_BLOCK_41_END
### DropdownMenu

This component is a wrapper for the entire dropdown menu. It is responsible for managing the open/closed state of the menu and providing context to its children.

```tsx
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";

function MyDropdownMenu() {
  return (
    <DropdownMenu>
      {/* DropdownMenuTrigger, DropdownMenuContent, etc. */}
    </DropdownMenu>
  );
}
```
GRAVITY_TRANSLATION_BLOCK_42_END
### DropdownMenuTrigger

This component is used to trigger the opening of the dropdown menu. It can be any interactive element, such as a button or an icon.

```tsx
import { DropdownMenu, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";

function MyDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button>Open Menu</button>
      </DropdownMenuTrigger>
      {/* DropdownMenuContent */}
    </DropdownMenu>
  );
}
```
GRAVITY_TRANSLATION_BLOCK_43_END
### DropdownMenuContent

This component renders the dropdown menu itself. It is typically positioned absolutely relative to the `DropdownMenuTrigger`.

```tsx
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@radix-ui/react-dropdown-menu";

function MyDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button>Open Menu</button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {/* DropdownMenuItems */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
```
GRAVITY_TRANSLATION_BLOCK_44_END
### DropdownMenuItem

This component represents an individual item within the dropdown menu. It can contain text, icons, or other elements.

```tsx
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";

function MyDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button>Open Menu</button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Item 1</DropdownMenuItem>
        <DropdownMenuItem>Item 2</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
```
GRAVITY_TRANSLATION_BLOCK_45_END
### DropdownMenuCheckboxItem

This component represents a checkbox item within the dropdown menu. It allows users to toggle a boolean value.

```tsx
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
} from "@radix-ui/react-dropdown-menu";

function MyDropdownMenu() {
  const [isChecked, setIsChecked] = React.useState(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button>Open Menu</button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuCheckboxItem
          checked={isChecked}
          onCheckedChange={setIsChecked}
        >
          Enable feature
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
```
GRAVITY_TRANSLATION_BLOCK_46_END
### DropdownMenuRadioItem

This component represents a radio button item within the dropdown menu. It is used for selecting one option from a group.

```tsx
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuRadioItem,
  DropdownMenuRadioGroup,
} from "@radix-ui/react-dropdown-menu";

function MyDropdownMenu() {
  const [value, setValue] = React.useState("default");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button>Open Menu</button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuRadioGroup value={value} onValueChange={setValue}>
          <DropdownMenuRadioItem value="default">Default</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="option1">Option 1</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="option2">Option 2</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
```
GRAVITY_TRANSLATION_BLOCK_47_END
### DropdownMenuLabel

This component renders a label within the dropdown menu. It is typically used to group or categorize menu items.

```tsx
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
} from "@radix-ui/react-dropdown-menu";

function MyDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button>Open Menu</button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        {/* DropdownMenuItems */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
```
GRAVITY_TRANSLATION_BLOCK_48_END
### DropdownMenuSeparator

This component renders a separator line within the dropdown menu. It is used to visually separate groups of menu items.

```tsx
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSeparator,
} from "@radix-ui/react-dropdown-menu";

function MyDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button>Open Menu</button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Item 1</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Item 2</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
```
GRAVITY_TRANSLATION_BLOCK_49_END
### DropdownMenuGroup

This component is used to group related menu items together. It can be useful for organizing complex menus.

```tsx
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";

function MyDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button>Open Menu</button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuItem>Item 1.1</DropdownMenuItem>
          <DropdownMenuItem>Item 1.2</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuGroup>
          <DropdownMenuItem>Item 2.1</DropdownMenuItem>
          <DropdownMenuItem>Item 2.2</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
```
GRAVITY_TRANSLATION_BLOCK_50_END
### DropdownMenuSub

This component is used to create nested submenus. It wraps a `DropdownMenuSubTrigger` and `DropdownMenuSubContent`.

```tsx
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";

function MyDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button>Open Menu</button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>More Tools</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem>Tool 1</DropdownMenuItem>
            <DropdownMenuItem>Tool 2</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuItem>Settings</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
```
GRAVITY_TRANSLATION_BLOCK_51_END
### DropdownMenuSubTrigger

This component is the trigger for a submenu. When clicked, it opens the associated `DropdownMenuSubContent`.

```tsx
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";

function MyDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button>Open Menu</button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>More Tools</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem>Tool 1</DropdownMenuItem>
            <DropdownMenuItem>Tool 2</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuItem>Settings</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
```
GRAVITY_TRANSLATION_BLOCK_52_END
### DropdownMenuSubContent

This component renders the content of a submenu. It is displayed when the corresponding `DropdownMenuSubTrigger` is activated.

```tsx
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";

function MyDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button>Open Menu</button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>More Tools</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem>Tool 1</DropdownMenuItem>
            <DropdownMenuItem>Tool 2</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuItem>Settings</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
```
GRAVITY_TRANSLATION_BLOCK_53_END
### DropdownMenuPortal

This component allows you to render the dropdown menu content in a different part of the DOM, often useful for managing stacking contexts or avoiding overflow issues.

```tsx
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuPortal,
} from "@radix-ui/react-dropdown-menu";

function MyDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button>Open Menu</button>
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent>
          {/* DropdownMenuItems */}
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenu>
  );
}
```
GRAVITY_TRANSLATION_BLOCK_54_END
### DropdownMenuArrow

This component renders an arrow that can be used to visually connect the dropdown menu content to its trigger.

```tsx
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuArrow,
} from "@radix-ui/react-dropdown-menu";

function MyDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button>Open Menu</button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuArrow />
        {/* DropdownMenuItems */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
```
GRAVITY_TRANSLATION_BLOCK_55_END
### DropdownMenuScrollArea

This component provides a scrollable container for the dropdown menu content, useful when the menu has many items.

```tsx
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuScrollArea,
} from "@radix-ui/react-dropdown-menu";

function MyDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button>Open Menu</button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuScrollArea>
          {/* Many DropdownMenuItems */}
        </DropdownMenuScrollArea>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
```
GRAVITY_TRANSLATION_BLOCK_56_END
### DropdownMenuViewport

This component defines the visible area of the dropdown menu content. It's often used in conjunction with `DropdownMenuScrollArea`.

```tsx
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuViewport,
} from "@radix-ui/react-dropdown-menu";

function MyDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button>Open Menu</button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuViewport>
          {/* DropdownMenuItems */}
        </DropdownMenuViewport>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
```
GRAVITY_TRANSLATION_BLOCK_57_END
### DropdownMenuShortcut

This component is used to display keyboard shortcuts associated with menu items.

```tsx
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
} from "@radix-ui/react-dropdown-menu";

function MyDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button>Open Menu</button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          Save
          <DropdownMenuShortcut>⌘ S</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          Print
          <DropdownMenuShortcut>⌘ P</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
```
GRAVITY_TRANSLATION_BLOCK_58_END
### DropdownMenuRadioGroup

This component is used to group `DropdownMenuRadioItem` components, ensuring that only one radio item can be selected at a time within the group.

```tsx
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuRadioItem,
  DropdownMenuRadioGroup,
} from "@radix-ui/react-dropdown-menu";

function MyDropdownMenu() {
  const [value, setValue] = React.useState("default");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button>Open Menu</button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuRadioGroup value={value} onValueChange={setValue}>
          <DropdownMenuRadioItem value="default">Default</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="option1">Option 1</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="option2">Option 2</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
```
GRAVITY_TRANSLATION_BLOCK_59_END
### DropdownMenuCheckboxItem

This component represents a checkbox item within the dropdown menu. It allows users to toggle a boolean value.

```tsx
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
} from "@radix-ui/react-dropdown-menu";

function MyDropdownMenu() {
  const [isChecked, setIsChecked] = React.useState(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button>Open Menu</button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuCheckboxItem
          checked={isChecked}
          onCheckedChange={setIsChecked}
        >
          Enable feature
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
```
GRAVITY_TRANSLATION_BLOCK_60_END
### DropdownMenuSubmenuItem

This component represents an individual item within a submenu. It functions similarly to `DropdownMenuItem` but is specifically for use within submenus.

```tsx
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuSubmenuItem,
} from "@radix-ui/react-dropdown-menu";

function MyDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button>Open Menu</button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>More Tools</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuSubmenuItem>Tool 1</DropdownMenuSubmenuItem>
            <DropdownMenuSubmenuItem>Tool 2</DropdownMenuSubmenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSubmenuItem>Settings</DropdownMenuSubmenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
```
GRAVITY_TRANSLATION_BLOCK_61_END
### DropdownMenuSubmenu

This component is used to create nested submenus. It wraps a `DropdownMenuSubmenuTrigger` and `DropdownMenuSubmenuContent`.

```tsx
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSubmenu,
  DropdownMenuSubmenuTrigger,
  DropdownMenuSubmenuContent,
  DropdownMenuSubmenuItem,
} from "@radix-ui/react-dropdown-menu";

function MyDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button>Open Menu</button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuSubmenu>
          <DropdownMenuSubmenuTrigger>More Tools</DropdownMenuSubmenuTrigger>
          <DropdownMenuSubmenuContent>
            <DropdownMenuSubmenuItem>Tool 1</DropdownMenuSubmenuItem>
            <DropdownMenuSubmenuItem>Tool 2</DropdownMenuSubmenuItem>
          </DropdownMenuSubmenuContent>
        </DropdownMenuSubmenu>
        <DropdownMenuSubmenuItem>Settings</DropdownMenuSubmenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
```
GRAVITY_TRANSLATION_BLOCK_62_END
### DropdownMenuSubmenuTrigger

This component is the trigger for a submenu. When clicked, it opens the associated `DropdownMenuSubmenuContent`.

```tsx
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSubmenu,
  DropdownMenuSubmenuTrigger,
  DropdownMenuSubmenuContent,
  DropdownMenuSubmenuItem,
} from "@radix-ui/react-dropdown-menu";

function MyDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button>Open Menu</button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuSubmenu>
          <DropdownMenuSubmenuTrigger>More Tools</DropdownMenuSubmenuTrigger>
          <DropdownMenuSubmenuContent>
            <DropdownMenuSubmenuItem>Tool 1</DropdownMenuSubmenuItem>
            <DropdownMenuSubmenuItem>Tool 2</DropdownMenuSubmenuItem>
          </DropdownMenuSubmenuContent>
        </DropdownMenuSubmenu>
        <DropdownMenuSubmenuItem>Settings</DropdownMenuSubmenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
```
GRAVITY_TRANSLATION_BLOCK_63_END
### DropdownMenuSubmenuContent

This component renders the content of a submenu. It is displayed when the corresponding `DropdownMenuSubmenuTrigger` is activated.

```tsx
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSubmenu,
  DropdownMenuSubmenuTrigger,
  DropdownMenuSubmenuContent,
  DropdownMenuSubmenuItem,
} from "@radix-ui/react-dropdown-menu";

function MyDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button>Open Menu</button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuSubmenu>
          <DropdownMenuSubmenuTrigger>More Tools</DropdownMenuSubmenuTrigger>
          <DropdownMenuSubmenuContent>
            <DropdownMenuSubmenuItem>Tool 1</DropdownMenuSubmenuItem>
            <DropdownMenuSubmenuItem>Tool 2</DropdownMenuSubmenuItem>
          </DropdownMenuSubmenuContent>
        </DropdownMenuSubmenu>
        <DropdownMenuSubmenuItem>Settings</DropdownMenuSubmenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
```
GRAVITY_TRANSLATION_BLOCK_64_END
### DropdownMenuRoot

This component is the root of the dropdown menu. It is responsible for managing the open/closed state of the menu and providing context to its children. It is equivalent to the `DropdownMenu` component.

```tsx
import { DropdownMenuRoot } from "@radix-ui/react-dropdown-menu";

function MyDropdownMenu() {
  return (
    <DropdownMenuRoot>
      {/* DropdownMenuTrigger, DropdownMenuContent, etc. */}
    </DropdownMenuRoot>
  );
}
```
GRAVITY_TRANSLATION_BLOCK_65_END

| 名前         | 説明                                                                                                                            |                      タイプ                      | デフォルト |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------ | :--------------------------------------------: | :-----: |
| `text`       | メニュー項目の内容。                                                                                                            |               `React.ReactNode`                |         |
| `action`     | メニュー項目クリックハンドラ。親のドロップダウンメニューコンポーネント（`event`と`data`の両方）からパラメータを受け取ります。              | `(event: React.MouseEvent, data: any) => void` |         |
| `iconStart`  | アイテムコンテンツの前のメニューアイコン。                                                                                        |               `React.ReactNode`                |         |
| `iconEnd`    | アイテムコンテンツの後のメニューアイコン。サブメニューがある場合は無視されます。                                                        |               `React.ReactNode`                |         |
| `hidden`     | アイテムが非表示かどうかを決定します。                                                                                            |                   `boolean`                    |         |
| `disabled`   | アイテムが無効かどうかを決定します。                                                                                              |                   `boolean`                    |         |
| `href`       | このプロパティを持つメニュー項目は、指定された場所へのリンクになります。                                                              |                    `string`                    |         |
| `target`     | `<a>` タグの `target` 属性と同じです。                                                                                            |                    `string`                    |         |
| `rel`        | `<a>` タグの `rel` 属性と同じです。                                                                                               |                    `string`                    |         |
| `extraProps` | 追加のメニュー項目プロパティ。                                                                                                  |                    `object`                    |         |
| `title`      | ツールチップテキスト。                                                                                                            |                    `string`                    |         |
| `className`  | `class` HTML属性の値。                                                                                                            |                    `string`                    |         |
| `items`      | サブメニュー項目。                                                                                                              |  `(DropdownMenuItem \| DropdownMenuItem[])[]`  |         |
| `popupProps` | サブメニューポップアッププロパティ。                                                                                            |                    `string`                    |         |
| `path`       | ルートから現在の項目までのインデックスのパス。                                                                                    |                   `number[]`                   |         |
| `closeMenu`  | カスタム `closeMenu` コールバック。メインメニューを閉じる代わりに呼び出すことができ、メインメニューより前のサブメニューを閉じるために使用できます。 |                  `() => void`                  |         |

### SwitcherProps

| 名前        | 説明                                                               |     型     |
| :---------- | :----------------------------------------------------------------- | :----------: |
| `onClick`   | スイッチャーがクリックされたときに呼び出されます。                               | `() => void` |
| `onKeyDown` | スイッチャーにフォーカスがあり、アクションキーが押されたときに呼び出されます。 | `() => void` |