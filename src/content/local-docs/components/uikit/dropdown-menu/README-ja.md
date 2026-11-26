ドロップダウンメニューコンポーネントは、アイテムのグループ化、サブメニュー、およびカスタマイズ可能なトグルを提供します。ドロップダウンメニューアイテムは `items` プロパティで設定されます。デフォルトでは、メニューのトグルは楕円形のアイコン（**⋯**）を持つボタンですが、これは `renderSwitcher` プロパティで上書きできます。

```tsx
import {DropdownMenu} from '@gravity-ui/uikit';
```

GRAVITY_TRANSLATION_BLOCK_0_END

## グループ化されたアイテム

`DropdownMenu` のアイテムは、`items` 配列内にネストされたメニューアイテムの配列を導入することで、グループ化し、他のメニューアイテムから視覚的に分離できます。

GRAVITY_TRANSLATION_BLOCK_1_END

## サブメニュー

個々のメニューアイテムの `items` プロパティは、そのようなアイテムにネストされたサブアイテムを追加します。

サブメニューを持つメニューアイテムには、追加のスタイリングを可能にするために、以下の追加クラス名が付与されます。

- `.g-dropdown-menu__menu-item_with-submenu`: 複数のネストされたアイテムを持つアイテムの場合。
- `.g-dropdown-menu__menu-item_active-parent`: サブメニューが現在開いているアイテムの場合。

GRAVITY_TRANSLATION_BLOCK_2_END

## カスタムメニューのトグル

メニューのトグルを設定するには、`renderSwitcher` プロパティを使用します。これは、Reactコンポーネントを返す任意の関数（TypeScriptの用語では `(props: SwitcherProps) => React.ReactNode`）にすることができます。詳細は以下の [`SwitcherProps`](#switcherprops) を参照してください。デフォルトでは、メニューのトグルは楕円形のアイコン（**⋯**）を持つボタンです。

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

上記の例は、カスタムメニューのトグルのアイデアを示すために簡略化されています。実際のアプリケーションでは、クリック可能なメニューのトグルは、ボタンのように、キーボードやその他の支援技術でアクセス可能なコンポーネントであることが一般的に推奨されます。

## カスタムアイコン

`iconStart` または `iconEnd` プロパティを使用して、`DropdownMenu` アイテムにカスタムアイコンを追加できます。デフォルトでは、`DropdownMenu` アイテムにはアイコンがありません。

`DropdownMenu` の `renderSwitcher` プロパティを使用して、メニューのトグルのアイコンを変更できます。デフォルトでは、メニューのトグルは楕円形のアイコン（**⋯**）を持つボタンです。

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

## プロパティ

| 名前                       | 説明                                                                                             |                        型                        |    デフォルト    |
| :------------------------- | :----------------------------------------------------------------------------------------------- | :------------------------------------------------: | :-----------: |
| `items`                    | アイテムの配列。ネストされたアイテムの配列は、視覚的に分離されたグループを表します。                                                               | `(DropdownMenuItem \| DropdownMenuItem[])[] \| []` |               |
| `data`                     | メニューから呼び出されるアクションに提供されるペイロード。(コンテキストメニューに便利です。)                                                               |                       `any`                        |               |
| `icon`                     | デフォルトの `switcher` のアイコン。                                                                   |                 `React.ReactNode`                  | 省略記号アイコン |
| `size`                     | デフォルトの `switcher` とメニューの両方に適用されます。                                                               |            `'s' \| 'm' \| 'l' \| 'xl'`             |     `'m'`     |
| `disabled`                 | このプロパティを `true` に設定すると、`switcher` ボタンが無効になり、メニューが開かなくなります。                                                               |                     `boolean`                      |               |
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

Props for the `DropdownMenu` component.
GRAVITY_TRANSLATION_BLOCK_3_END
### `DropdownMenu`

A dropdown menu component.

```tsx
<DropdownMenu
  trigger={<Button>Open Menu</Button>}
  items={[
    { label: 'Item 1', onClick: () => console.log('Item 1 clicked') },
    { label: 'Item 2', onClick: () => console.log('Item 2 clicked') },
    { label: 'Item 3', onClick: () => console.log('Item 3 clicked') },
  ]}
/>
```
GRAVITY_TRANSLATION_BLOCK_4_END
### `DropdownMenuItem`

A component for individual dropdown menu items.

```tsx
<DropdownMenu
  trigger={<Button>Open Menu</Button>}
  items={[
    { label: 'Item 1', onClick: () => console.log('Item 1 clicked') },
    { label: 'Item 2', onClick: () => console.log('Item 2 clicked') },
    { label: 'Item 3', onClick: () => console.log('Item 3 clicked') },
  ]}
/>
```
GRAVITY_TRANSLATION_BLOCK_5_END
### `DropdownMenuProps`

Props for the `DropdownMenu` component.

```tsx
interface DropdownMenuProps {
  /**
   * The content to display when the dropdown is closed.
   */
  trigger: React.ReactNode;
  /**
   * An array of `DropdownMenuItem` objects to display in the dropdown.
   */
  items: DropdownMenuItem[];
  /**
   * Whether the dropdown is open or closed.
   * @default false
   */
  isOpen?: boolean;
  /**
   * Callback fired when the dropdown is closed.
   */
  onClose?: () => void;
  /**
   * Callback fired when the dropdown is opened.
   */
  onOpen?: () => void;
  /**
   * The placement of the dropdown menu relative to the trigger.
   * @default 'bottom-start'
   */
  placement?: 'top' | 'bottom' | 'left' | 'right' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end' | 'left-start' | 'left-end' | 'right-start' | 'right-end';
  /**
   * Whether to close the dropdown when an item is clicked.
   * @default true
   */
  closeOnClick?: boolean;
  /**
   * Custom styling for the dropdown menu.
   */
  menuStyle?: React.CSSProperties;
  /**
   * Custom styling for the dropdown items.
   */
  itemStyle?: React.CSSProperties;
  /**
   * Custom styling for the trigger element.
   */
  triggerStyle?: React.CSSProperties;
  /**
   * Whether to disable the dropdown.
   * @default false
   */
  disabled?: boolean;
  /**
   * The ARIA role for the dropdown menu.
   * @default 'menu'
   */
  role?: string;
  /**
   * The ARIA label for the dropdown menu.
   */
  ariaLabel?: string;
  /**
   * Whether to use the portal to render the dropdown menu.
   * @default true
   */
  usePortal?: boolean;
  /**
   * The ID of the portal container.
   * @default 'dropdown-portal'
   */
  portalId?: string;
}
```
GRAVITY_TRANSLATION_BLOCK_6_END
### `DropdownMenuItem`

Props for the `DropdownMenuItem` component.

```tsx
interface DropdownMenuItem {
  /**
   * The label to display for the menu item.
   */
  label: string;
  /**
   * The callback function to execute when the menu item is clicked.
   */
  onClick: () => void;
  /**
   * Whether the menu item is disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * Custom styling for the menu item.
   */
  style?: React.CSSProperties;
  /**
   * The ARIA role for the menu item.
   * @default 'menuitem'
   */
  role?: string;
  /**
   * The ARIA label for the menu item.
   */
  ariaLabel?: string;
  /**
   * Whether to close the dropdown when this item is clicked.
   * @default true
   */
  closeOnClick?: boolean;
}
```
GRAVITY_TRANSLATION_BLOCK_7_END

| 名前         | 説明                                                                                                                                                            |                      タイプ                      | デフォルト |
| :----------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------: | :-----: |
| `text`       | メニュー項目の内容。                                                                                                                                            |               `React.ReactNode`                |         |
| `action`     | メニュー項目クリックハンドラ。親のドロップダウンメニューコンポーネント（`event` と `data` の両方）からパラメータを受け取ります。                                             | `(event: React.MouseEvent, data: any) => void` |         |
| `iconStart`  | アイテムコンテンツの前のメニュー項目のアイコン。                                                                                                                |               `React.ReactNode`                |         |
| `iconEnd`    | アイテムコンテンツの後のメニュー項目のアイコン。サブメニューがある場合は無視されます。                                                                                    |               `React.ReactNode`                |         |
| `hidden`     | アイテムが非表示かどうかを決定します。                                                                                                                            |                   `boolean`                    |         |
| `disabled`   | アイテムが無効かどうかを決定します。                                                                                                                              |                   `boolean`                    |         |
| `href`       | このプロパティを持つメニュー項目は、指定された場所へのリンクになります。                                                                                              |                    `string`                    |         |
| `target`     | `<a>` タグの `target` 属性と同じです。                                                                                                                            |                    `string`                    |         |
| `rel`        | `<a>` タグの `rel` 属性と同じです。                                                                                                                               |                    `string`                    |         |
| `extraProps` | 追加のメニュー項目プロパティ。                                                                                                                                    |                    `object`                    |         |
| `title`      | ツールチップテキスト。                                                                                                                                            |                    `string`                    |         |
| `className`  | `class` HTML 属性の値。                                                                                                                                           |                    `string`                    |         |
| `items`      | サブメニュー項目。                                                                                                                                              |  `(DropdownMenuItem \| DropdownMenuItem[])[]`  |         |
| `popupProps` | サブメニューポップアップのプロパティ。                                                                                                                            |                    `string`                    |         |
| `path`       | ルートから現在の項目までのインデックスのパス。                                                                                                                  |                   `number[]`                   |         |
| `closeMenu`  | カスタム `closeMenu` コールバック。メインメニューを閉じる代わりに呼び出すことができ、メインメニューより前のサブメニューを閉じるために使用できます。                               |                  `() => void`                  |         |

### SwitcherProps

| 名前        | 説明                                                               |     型     |
| :---------- | :----------------------------------------------------------------- | :----------: |
| `onClick`   | スイッチャーがクリックされたときに呼び出されます。                               | `() => void` |
| `onKeyDown` | スイッチャーにフォーカスがあり、アクションキーが押されたときに呼び出されます。 | `() => void` |