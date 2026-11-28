`ListItemView` はリストの行のビューです。行の内容（アイコン、説明、末尾のコンテンツ）を配置し、所有者が渡した状態を描画します。

```tsx
import {ListItemView} from '@gravity-ui/uikit';
```

[List](../List/README.md) はこのビューでその行を描画し、レイアウトのプロパティのみを持つ `List.ItemView` として公開します。リストの外側で独自のメニューの行、ツリーの項目を作成する場合、またはリストが渡さないネストや折りたたみプロパティが必要な行を作成する場合は、`ListItemView` 自体を使用してください。

- [基本的な使い方](#basic-usage)
- [サイズ](#sizes)
- [スロット](#slots)
- [状態](#states)
- [選択](#selection)
- [ネストと折りたたみ](#nesting-and-collapsing)
- [ドラッグハンドル](#drag-handle)
- [別の要素](#another-element)
- [CSS API](#css-api)
- [プロパティ](#properties)

## 基本的な使い方

このビューはブロック要素で、コンテナと同じ幅になります。行の幅は、周囲のリストの幅と同じです。

```tsx
import {Envelope} from '@gravity-ui/icons';
import {Icon, ListItemView} from '@gravity-ui/uikit';

function Mailbox() {
  return (
    <ListItemView startContent={<Icon data={Envelope} size={16} />} onClick={openMailbox}>
      Inbox
    </ListItemView>
  );
}
```

<ListItemViewExample />

このビューは独自の ARIA ロールを持ちません。行は、それが属するリスト（リストボックスの場合は `option`、グリッドの場合は `row`）からロールを取得します。`role` は、他の DOM プロパティとともに、渡されたとおりにルート要素に到達します。`<List>` の内部では、プロパティは `getItemProps()` から準備された状態で渡されます。

## サイズ

`size` プロパティは、行の密度を設定します。`s`、`m`、`l`、または `xl` です。これは最小の高​​さ、パディング、角の半径、および行のコントロールのサイズを決定します。`xl` はテキストを `body-2` に切り替えます。高​​さはコントロールの高​​さ（24、28、36、44px）であり、コントロールと同様に、ブロックのパディングは高​​さから取得されます。単一行は行を正確に埋め、次の各行は行の高​​さを追加します。インラインパディングはサイズとともに増加します（8、12、16、16px）。`size` のない行は、`m` の高​​さ、パディング、半径を持ち、ベースビューのコントロールを使用します。`<List>` の内部では、各行はリストのサイズを取得します。

<ListItemViewSizes />

## スロット

行の内容は子要素であり、残りはプロパティにあります。`startContent` は先頭のアイコンやアバター用、`description` は 2 行目用、`endContent` は行を閉じるもの（ラベル、ショートカット、アクション）用です。

<ListItemViewSlots />

```tsx
<ListItemView
  startContent={<Icon data={Star} size={16} />}
  description="Flagged by you"
  endContent={<Label>3</Label>}
>
  Starred
</ListItemView>
```

## 状態

行は 4 つの状態を示し、それぞれがプロパティです。ビューは独自のステートを持ちません。

- `active` — キーボードカーソル：リストは矢印キーで移動します。
- `hovered` — プロパティによって強制されるホバーハイライト。プロパティがない場合、行は `:hover` で自身をハイライトします。`hovered={false}` はそれを抑制します。これは、ドラッグ中にリストが行うことです。
- `disabled` — 行は暗くなり、ポインターへの反応を停止します。独自の `onClick` も含まれます。
- `selected` — [選択](#selection) を参照してください。

<ListItemViewStates />

## 選択

`selectionStyle` は、選択された行がどのように表示されるかを示します。`highlight` は行を色付けし、`check` はコンテンツの前にチェックマーク用のスロットを保持し、`none` は何も表示しません。これは、行自体がコンテンツで選択を示している場合に使用します。このプロパティにはデフォルト値はありません。`selected` 行でプロパティがない場合、他の行と同じように見えます。`<List>` の内部では、リストはスタイルを自分で選択します。複数選択の場合は `check`、単一選択の場合は `highlight` です。

<ListItemViewSelection />

チェックマークのスロットは、選択されているかどうかにかかわらず、リストのすべての行に対して保持されるため、選択が変更されても行のコンテンツがジャンプしません。

## ネストと折りたたみ

`nestedLevel` は、ツリーの深さに応じて行をインデントし、`collapsible` は行にブランチのトグルを提供します。`collapsed` はその状態であり、`onCollapseChange` はそのハンドラーです。行自体をクリックすると、行に独自の `onClick` がない限り、ブランチもトグルされます。

トグルは装飾です。`aria-hidden` を持ち、タブオーダーから外れているため、行自体がブランチへの唯一の方法です。行の `aria-expanded` はあなたが設定します。

<ListItemViewNesting />

## ドラッグハンドル

`dragHandle` は行の最も外側のスロットを埋め、インデント、折りたたみトグル、チェックマークの前に配置されます。これにより、並べ替え可能なリストのハンドルは、行が他に何を表示していても、行の端に留まります。このビューはドラッグアンドドロップについて何も知りません。ライブラリのプロパティは、渡された要素にあります。

<ListItemViewDragHandle />

```tsx
<ListItemView
  dragHandle={
    <span {...dragHandleProps} aria-label="Drag to reorder">
      <Icon data={Grip} size={12} />
    </span>
  }
>
  {track.title}
</ListItemView>
```

## 別の要素

`component` は行をリンクやボタンなどの別の要素としてレンダリングし、`componentProps` はその要素のプロパティ（`href`、`type`、ハンドラー）です。`isContainer` を使用すると、ビューは何もレイアウトせず、行のマークアップをあなたに任せ、状態と要素を保持します。

<ListItemViewCustomElement />

## CSS API

| 名前                                        | 説明                          |
| :------------------------------------------ | :----------------------------------- |
| `--g-list-item-view-min-height`             | 行の最小高さ          |
| `--g-list-item-view-border-radius`          | 角の半径                    |
| `--g-list-item-view-padding-inline`         | インラインパディング                   |
| `--g-list-item-view-padding-block`          | ブロックパディング                    |
| `--g-list-item-view-line-height`            | コンテンツの行の高さ       |
| `--g-list-item-view-controls-gap`           | スロット間のギャップ            |
| `--g-list-item-view-controls-size`          | 行のコントロールのサイズ    |
| `--g-list-item-view-controls-border-radius` | コントロールの角の半径    |
| `--g-list-item-view-controls-icon-size`     | コントロールのアイコンのサイズ |
| `--g-list-item-view-spacer-size`            | ネストレベルのインデント      |
| `--g-list-item-view-background-color`       | 行の背景              |
| `--g-list-item-view-background-color-hover` | ホバー時の行の背景      |
| `--g-list-item-view-text-color`             | コンテンツの色            |
| `--g-list-item-view-description-color`      | 説明の色        |

これらの変数は、あらゆるサイズの行に適用されます。`size` は、設定されていない変数のデフォルトのジオメトリ（最小高さ、半径、パディング、コントロール）を提供するだけです。デフォルトのブロックパディングは、最小高さと行の高さに従います。`--g-list-item-view-padding-block` で固定されます。リストのセクションヘッダー (`List.SectionHeader`) は、同じ最小高さとインラインパディング、および含まれる変数に従うため、リストの行とヘッダーは 1 つの端を維持します。

## プロパティ

| 名前             | 説明                                                                                 |                  タイプ                  | デフォルト |
| :--------------- | :----------------------------------------------------------------------------------- | :------------------------------------: | :-----: |
| children         | 行の内容                                                                             |           `React.ReactNode`            |         |
| size             | 行の密度                                                                             |        `'s'` `'m'` `'l'` `'xl'`        |         |
| startContent     | 先頭のコンテンツ：アイコン、アバター                                                 |           `React.ReactNode`            |         |
| description      | 行の2行目                                                                            |           `React.ReactNode`            |         |
| endContent       | 末尾のコンテンツ：ラベル、ショートカット、アクション                               |           `React.ReactNode`            |         |
| dragHandle       | 最外側のスロットのコンテンツ：並べ替え可能な行のドラッグハンドル                     |           `React.ReactNode`            |         |
| active           | 行上のキーボードカーソル                                                             |               `boolean`                |         |
| hovered          | ホバーハイライト、プロップによって強制される（`false`は行の`:hover`を抑制します）     |               `boolean`                |         |
| disabled         | 行が無効かどうか                                                                     |               `boolean`                |         |
| selected         | 行が選択されているかどうか                                                           |               `boolean`                |         |
| selectionStyle   | 選択された行の表示方法                                                               |    `'highlight'` `'check'` `'none'`    |         |
| collapsible      | 行がブランチのトグルを持っているかどうか                                             |               `boolean`                |         |
| collapsed        | 行のブランチが折りたたまれているかどうか                                             |               `boolean`                |         |
| onCollapseChange | トグルのハンドラー（`onClick`のない行をクリックすると、ブランチも切り替わります）     |     `(collapsed: boolean) => void`     |         |
| nestedLevel      | ツリー内の行の深さ：その前のインデント                                               |                `number`                |   `0`   |
| onClick          | 行のクリックハンドラー（フォーカス可能な子孫のクリックは含まれません）               | `React.MouseEventHandler<HTMLElement>` |         |
| component        | 行がレンダリングされる要素                                                           |          `React.ElementType`           | `'div'` |
| componentProps   | その要素のプロップ                                                                   |   `React.ComponentProps<component>`    |         |
| isContainer      | 子要素をスロットのレイアウトなしでそのままレンダリングします                         |               `boolean`                | `false` |
| className        | 行のCSSクラス                                                                        |                `string`                |         |
| style            | 行のインラインスタイル                                                               |         `React.CSSProperties`          |         |

行のルート要素には、`role`、`id`、`tabIndex`、`aria-*`、`data-*`、ポインターおよびキーボードハンドラーなどのその他のプロップが渡されます。

GRAVITY_TRANSLATION_BLOCK_1_END

The `Row` component accepts the following props:

`Row` コンポーネントは以下のプロップを受け入れます。

GRAVITY_TRANSLATION_BLOCK_2_END

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | The content of the row. |
| `className` | `string` | - | Custom class name for the row. |
| `style` | `React.CSSProperties` | - | Custom styles for the row. |
| `density` | `'compact' | 'standard' | 'comfortable'` | `'standard'` | The density of the row. Affects padding and spacing. |
| `stickyHeader` | `boolean` | `false` | If `true`, the row will be sticky at the top of the table when scrolling. |
| `disableHover` | `boolean` | `false` | If `true`, the hover effect on the row will be disabled. |
| `disableSelection` | `boolean` | `false` | If `true`, the row selection will be disabled. |
| `selected` | `boolean` | `false` | If `true`, the row will be visually marked as selected. |
| `onRowClick` | `(event: React.MouseEvent<HTMLDivElement>, rowId: string | number) => void` | - | Callback fired when the row is clicked. |
| `onRowDoubleClick` | `(event: React.MouseEvent<HTMLDivElement>, rowId: string | number) => void` | - | Callback fired when the row is double-clicked. |
| `onRowContextMenu` | `(event: React.MouseEvent<HTMLDivElement>, rowId: string | number) => void` | - | Callback fired when the row context menu is triggered. |
| `onRowHover` | `(event: React.MouseEvent<HTMLDivElement>, rowId: string | number, isHovered: boolean) => void` | - | Callback fired when the row hover state changes. |
| `rowId` | `string | number` | - | A unique identifier for the row. Used for selection and event callbacks. |

| プロップ | タイプ | デフォルト | 説明 |
|---|---|---|---|
| `children` | `React.ReactNode` | - | 行の内容。 |
| `className` | `string` | - | 行のカスタムクラス名。 |
| `style` | `React.CSSProperties` | - | 行のカスタムスタイル。 |
| `density` | `'compact' | 'standard' | 'comfortable'` | `'standard'` | 行の密度。パディングとスペーシングに影響します。 |
| `stickyHeader` | `boolean` | `false` | `true` の場合、スクロール時に行はテーブルの上部に固定されます。 |
| `disableHover` | `boolean` | `false` | `true` の場合、行のホバー効果は無効になります。 |
| `disableSelection` | `boolean` | `false` | `true` の場合、行の選択は無効になります。 |
| `selected` | `boolean` | `false` | `true` の場合、行は選択されたとして視覚的にマークされます。 |
| `onRowClick` | `(event: React.MouseEvent<HTMLDivElement>, rowId: string | number) => void` | - | 行がクリックされたときに呼び出されるコールバック。 |
| `onRowDoubleClick` | `(event: React.MouseEvent<HTMLDivElement>, rowId: string | number) => void` | - | 行がダブルクリックされたときに呼び出されるコールバック。 |
| `onRowContextMenu` | `(event: React.MouseEvent<HTMLDivElement>, rowId: string | number) => void` | - | 行のコンテキストメニューがトリガーされたときに呼び出されるコールバック。 |
| `onRowHover` | `(event: React.MouseEvent<HTMLDivElement>, rowId: string | number, isHovered: boolean) => void` | - | 行のホバー状態が変更されたときに呼び出されるコールバック。 |
| `rowId` | `string | number` | - | 行の一意の識別子。選択およびイベントコールバックに使用されます。 |

GRAVITY_TRANSLATION_BLOCK_3_END

The rest of the props reach the root element of the row: `role`, `id`, `tabIndex`, `aria-*`, `data-*`, the handlers of the pointer and the keyboard.

その他のプロップは行のルート要素に渡されます: `role`、`id`、`tabIndex`、`aria-*`、`data-*`、ポインターおよびキーボードハンドラー。

GRAVITY_TRANSLATION_BLOCK_4_END