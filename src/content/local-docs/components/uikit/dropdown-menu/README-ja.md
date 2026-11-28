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

メニューのトグルを設定するには、`renderSwitcher` プロパティを使用します。これは、Reactコンポーネントを返す任意の関数（TypeScriptの用語では `(props: SwitcherProps) => React.ReactNode`）にすることができます。詳細は以下の [`SwitcherProps`](#switcherprops) を参照してください。デフォルトでは、メニューのトグルは楕円アイコン（**⋯**）を持つボタンです。

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
| `data`                     | メニューから呼び出されるアクションに提供されるペイロード。(コンテキストメニューに便利です。)                                                               |                       `any`                        |               |
| `icon`                     | デフォルトの `switcher` のアイコン。                                                                 |                 `React.ReactNode`                  | 省略記号アイコン |
| `size`                     | デフォルトの `switcher` とメニューの両方に適用されます。                                                               |            `'s' \| 'm' \| 'l' \| 'xl'`             |     `'m'`     |
| `disabled`                 | このプロパティを `true` に設定すると、`switcher` ボタンが無効になり、メニューが開かなくなります。                                                               |                     `boolean`                      |               |
| `renderSwitcher`           | メニューのトグルコントロールのレンダリング関数。                                                               |                 `React.ReactNode`                  |               |
| `switcherWrapperClassName` | `switcher` の親コンポーネントの `className` プロパティの値。                                                               |                      `string`                      |               |
| `defaultSwitcherProps`     | デフォルトの `switcher` プロパティ。                                                                 |                   `ButtonProps`                    |               |
| `defaultSwitcherClassName` | デフォルトの `switcher` の `className` プロパティの値。                                                               |                      `string`                      |               |
| `menuProps`                | デフォルトのドロップダウンメニューポップアッププロパティをオーバーライドします。                                                               |                    `MenuProps`                     |               |
| `popupProps`               | デフォルトのポップアッププロパティをオーバーライドします。                                                               |                    `PopupProps`                    |               |
| `open`                     | ドロップダウンメニューの表示を切り替えます。                                                               |                     `boolean`                      |               |
| `onOpenToggle`             | メニューが開閉されたときに呼び出されます。                                                               |                    `() => void`                    |               |
| `onSwitcherClick`          | `switcher` がクリックされたときに呼び出されます。                                                               |       `React.MouseEventHandler<HTMLElement>`       |               |
| `hideOnScroll`             | 親要素がスクロールされたときにメニューを非表示にするかどうかを指定します。                                                               |                     `boolean`                      |    `true`     |
| `children`                 | メニューポップアップ内のカスタムコンテンツ。                                                               |                 `React.ReactNode`                  |               |

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

```jsx
<DropdownMenu
  items={[
    { label: 'Item 1', onClick: () => console.log('Item 1 clicked') },
    { label: 'Item 2', onClick: () => console.log('Item 2 clicked') },
  ]}
  trigger={<Button>Open Menu</Button>}
/>
```
GRAVITY_TRANSLATION_BLOCK_4_END
### `DropdownMenuItem`

A component for individual dropdown menu items.

```jsx
<DropdownMenuItem
  label="My Item"
  onClick={() => console.log('Clicked!')}
  icon={<Icon />}
  disabled={false}
/>
```
GRAVITY_TRANSLATION_BLOCK_5_END
### `DropdownMenuProps`

Props for the `DropdownMenu` component.

| Name | Type | Description | Default | Required |
|---|---|---|---|---|
| `items` | `DropdownMenuItemProps[]` | An array of items to display in the dropdown menu. | `[]` | Yes |
| `trigger` | `React.ReactNode` | The element that will trigger the dropdown menu to open. | `null` | Yes |
| `align` | `'left' | 'right'` | The alignment of the dropdown menu relative to the trigger. | `'left'` | No |
| `open` | `boolean` | Controls whether the dropdown menu is open. | `false` | No |
| `onOpenChange` | `(open: boolean) => void` | Callback fired when the open state of the dropdown menu changes. | `() => {}` | No |
| `closeOnSelect` | `boolean` | Whether to close the dropdown menu when an item is selected. | `true` | No |
| `className` | `string` | Additional CSS class name for the dropdown menu. | `''` | No |
| `style` | `React.CSSProperties` | Inline styles for the dropdown menu. | `{}` | No |
GRAVITY_TRANSLATION_BLOCK_6_END
### `DropdownMenuItemProps`

Props for the `DropdownMenuItem` component.

| Name | Type | Description | Default | Required |
|---|---|---|---|---|
| `label` | `string` | The text to display for the menu item. | `''` | Yes |
| `onClick` | `() => void` | The function to call when the menu item is clicked. | `() => {}` | Yes |
| `icon` | `React.ReactNode` | An optional icon to display next to the menu item. | `null` | No |
| `disabled` | `boolean` | Whether the menu item is disabled. | `false` | No |
| `className` | `string` | Additional CSS class name for the menu item. | `''` | No |
| `style` | `React.CSSProperties` | Inline styles for the menu item. | `{}` | No |
GRAVITY_TRANSLATION_BLOCK_7_END

| 名前         | 説明                                                                                                                            |                      タイプ                      | デフォルト |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------ | :--------------------------------------------: | :-----: |
| `text`       | メニュー項目の内容。                                                                                                            |               `React.ReactNode`                |         |
| `action`     | メニュー項目クリックハンドラ。親のドロップダウンメニューコンポーネント（`event`と`data`の両方）からパラメータを受け取ります。              | `(event: React.MouseEvent, data: any) => void` |         |
| `iconStart`  | アイテムコンテンツの前のメニューアイコン。                                                                                        |               `React.ReactNode`                |         |
| `iconEnd`    | アイテムコンテンツの後のメニューアイコン。サブメニューがある場合は無視されます。                                                      |               `React.ReactNode`                |         |
| `hidden`     | アイテムが非表示かどうかを決定します。                                                                                          |                   `boolean`                    |         |
| `disabled`   | アイテムが無効かどうかを決定します。                                                                                            |                   `boolean`                    |         |
| `href`       | このプロパティを持つメニュー項目は、指定された場所へのリンクになります。                                                          |                    `string`                    |         |
| `target`     | `<a>` タグの `target` 属性と同じです。                                                                                          |                    `string`                    |         |
| `rel`        | `<a>` タグの `rel` 属性と同じです。                                                                                             |                    `string`                    |         |
| `extraProps` | 追加のメニュー項目プロパティ。                                                                                                  |                    `object`                    |         |
| `title`      | ツールチップテキスト。                                                                                                          |                    `string`                    |         |
| `className`  | `class` HTML属性の値。                                                                                                          |                    `string`                    |         |
| `items`      | サブメニュー項目。                                                                                                              |  `(DropdownMenuItem \| DropdownMenuItem[])[]`  |         |
| `popupProps` | サブメニューポップアッププロパティ。                                                                                            |                    `string`                    |         |
| `path`       | ルートから現在の項目までのインデックスのパス。                                                                                  |                   `number[]`                   |         |
| `closeMenu`  | カスタム `closeMenu` コールバック。メインメニューを閉じる代わりに呼び出すことができ、メインメニューより前のサブメニューを閉じるために使用できます。 |                  `() => void`                  |         |

### SwitcherProps

| 名前        | 説明                                                               |     型     |
| :---------- | :----------------------------------------------------------------- | :----------: |
| `onClick`   | スイッチャーがクリックされたときに呼び出されます。                               | `() => void` |
| `onKeyDown` | スイッチャーにフォーカスがあり、アクションキーが押されたときに呼び出されます。 | `() => void` |