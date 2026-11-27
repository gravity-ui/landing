GRAVITY_TRANSLATION_BLOCK_0_END

`ListHelloPangeaDnd` は、`@hello-pangea/dnd` という推奨されるドラッグ＆ドロップライブラリを使用して、[List](../List/README.md) を並べ替え可能にするためのエントリーポイントです。

```tsx
import {ListHelloPangeaDnd} from '@gravity-ui/uikit/hello-pangea-dnd';
```

このエントリーポイントには、`@hello-pangea/dnd` と React 18 以降が必要です。ライブラリを `@gravity-ui/uikit` と一緒にインストールしてください。コード内の `Draggable` と `DragDropContext` は、キットと同じコピーから取得する必要があります。

## Usage

リストをラップし、`role="grid"` を指定します。ドラッグハンドルはインタラクティブであり、グリッドロールモデル内では、行内のインタラクティブコンテンツは有効です。ラッパーは `DragDropContext` と `Droppable` を所有し、リストと同じ `items` を受け取り、並べ替えられた配列を返します。

```tsx
import {List} from '@gravity-ui/uikit';
import {ListHelloPangeaDnd} from '@gravity-ui/uikit/hello-pangea-dnd';

function Playlist() {
  const [tracks, setTracks] = React.useState(initialTracks);

  return (
    <ListHelloPangeaDnd items={tracks} onItemsUpdate={setTracks}>
      <List role="grid" aria-label="Playlist" items={tracks} getItemContent={(t) => t.title} />
    </ListHelloPangeaDnd>
  );
}
```

各行の最も外側の端にはハンドルがあります。マウスはハンドルで 1 行をドラッグします。キーボードは `←`/`→` でハンドルに到達し、`Space` で行を持ち上げ、`↑`/`↓` で移動し、`Space` でドロップします（`Escape` でキャンセル）。リストが無効にした行はドラッグできません。`getItemDragDisabled` はさらに多くの行を固定します。ハンドルの名前とライブラリがスクリーンリーダーに提供する指示は、`configure` で設定された言語に従います（独自の `DragDropContext` の下で、`dragHandleUsageInstructions` を自分で渡します）。

`Sheet`、`Dialog`、またはアニメーションポップアップ内のリストは同じようにドラッグされます。キットは変換された祖先を補償します。メモリ内の配列ではないデータの場合は、`onItemsUpdate` の代わりに `onDrop` を使用してください。

キットはフラットリストをカバーします。ライブラリは連続したインデックスを必要とし、それらは `items` を通じてカウントされます。セクションはドラッグできません。

ラッパーの子はリストのみであり、それ以外はありません。アダプターは下の最も近いリストに移動するため、リストの隣に配置された `Select` または `Menu` はそれを取得します。`getItemId` と `getItemDragDisabled` は安定している必要があります。インライン関数は、親の各レンダリングで各行を再レンダリングします。

### 行のスロット

デフォルトの行は `ListHelloPangeaDnd.Row` です。`renderItem` でこれをレンダリングして、行ビューのスロットを埋めます。

```tsx
<List
  role="grid"
  aria-label="Playlist"
  items={tracks}
  getItemContent={(t) => t.title}
  renderItem={(ctx, helpers) => (
    <ListHelloPangeaDnd.Row
      ctx={ctx}
      helpers={helpers}
      description={ctx.item.artist}
      endContent={<Label>{ctx.item.duration}</Label>}
      handlePlacement="end"
    />
  )}
/>
```

### カスタムマークアップ

行が `List.ItemView` でない場合、`Draggable` を自分で記述し、`getHelloPangeaRowProps` から配線を取得します。ハンドルとコンテンツはそれぞれセルを取得します。`Draggable` のインデックスは、`items` 内のアイテムの位置です。

```tsx
import {Draggable} from '@hello-pangea/dnd';
import {HelloPangeaDragHandle, getHelloPangeaRowProps} from '@gravity-ui/uikit/hello-pangea-dnd';

<List
  role="grid"
  aria-label="Speakers"
  items={people}
  renderItem={(ctx, helpers) => (
    <Draggable draggableId={ctx.id} index={people.indexOf(ctx.item)}>
      {(provided, snapshot) => {
        const {rowProps, handleProps, cellProps} = getHelloPangeaRowProps({
          ctx,
          helpers,
          provided,
          snapshot,
        });
        return (
          <article {...rowProps}>
            <span {...cellProps}>
              <HelloPangeaDragHandle {...handleProps} />
            </span>
            <span {...cellProps}>{ctx.item.name}</span>
          </article>
        );
      }}
    </Draggable>
  )}
/>;
```

ライブラリの `dragHandleProps` ではなく `handleProps` をスプレッドします。グリッド契約に加えて、仮想化の下でタッチドラッグをアクティブに保ちます。

`HelloPangeaDragHandle` はアクセシブルな名前を持つグリップです。その子はそのアイコンを置き換えます。

### Virtualization

`ListVirtualizer` をラッパーの**外側**に配置します。ラッパーはリストの仮想化を読み取り、`Droppable` を仮想モードに切り替えます。`minItemsCount` の下では、リストが行をカウントする方法で `items` をカウントするため、しきい値を下回るリストは標準モードを維持します。

```tsx
import {ListVirtualizer} from '@gravity-ui/uikit/virtualizer';

<ListVirtualizer estimateItemSize={28}>
  <ListHelloPangeaDnd items={tracks} onItemsUpdate={setTracks}>
    <List
      role="grid"
      aria-label="Archive"
      style={{height: 480}}
      items={tracks}
      getItemContent={(t) => t.title}
    />
  </ListHelloPangeaDnd>
</ListVirtualizer>;
```

ドラッグされた行はクローン（`Row` のコピー）によって描画されるため、カスタム行には `renderClone` が必要です。これはクローンの `{item, provided, snapshot}` を受け取ります。行の高さはドラッグ中に変更されてはなりません。ライブラリはリフト時に高さを測定します。

### Several lists

独自の `DragDropContext`（複数のリスト、それらの間の移動）の下では、ラッパーはコンテキストをレンダリングしません。各リストに `useListHelloPangeaDnd` の状態と `droppableId` を与え、コンテキストから各状態のハンドラーを呼び出します。ラッパーの `onItemsUpdate` と `onDrop` は通常どおり機能します。状態は自身のリストのみを並べ替えます。あるリストから別のリストへの移動は、`onDragEnd` で処理する必要があります。

```tsx
import {DragDropContext} from '@hello-pangea/dnd';
import {List} from '@gravity-ui/uikit';
import {ListHelloPangeaDnd, useListHelloPangeaDnd} from '@gravity-ui/uikit/hello-pangea-dnd';

const todo = useListHelloPangeaDnd();
const done = useListHelloPangeaDnd();
```

<DragDropContext
  onDragStart={(start) => {
    todo.onDragStart(start);
    done.onDragStart(start);
  }}
  onDragEnd={(result) => {
    todo.onDragEnd(result);
    done.onDragEnd(result);
  }}
>
  <ListHelloPangeaDnd
    items={todoItems}
    onItemsUpdate={setTodoItems}
    state={todo}
    droppableId="todo"
  >
    <List role="grid" aria-label="To do" items={todoItems} getItemContent={(i) => i.title} />
  </ListHelloPangeaDnd>
  <ListHelloPangeaDnd
    items={doneItems}
    onItemsUpdate={setDoneItems}
    state={done}
    droppableId="done"
  >
    <List role="grid" aria-label="Done" items={doneItems} getItemContent={(i) => i.title} />
  </ListHelloPangeaDnd>
</DragDropContext>;
```

`state` を指定しない場合、各ラッパーは独自の `DragDropContext` をレンダリングし、ネストされたコンテキストはライブラリのセンサーを重複させます。

## プロパティ

### ListHelloPangeaDnd

| 名前                | 説明                                                                                        |                                      型                                       |        デフォルト        |
| :------------------ | :------------------------------------------------------------------------------------------ | :-----------------------------------------------------------------------------: | :-------------------: |
| items               | リスト内のアイテム。同じ順序で指定します。                                                    |                                 `readonly T[]`                                  |                       |
| getItemId           | アイテムのID。`List` の `getItemId` と同じ値を保持してください。                                    |                              `(item: T) => string`                              | `List` のものと同じ |
| onItemsUpdate       | 再配置された配列。`moveItem` が既に適用されています。                                                    |                             `(items: T[]) => void`                              |                       |
| onDrop              | ドロップ操作。ID とエッジ情報が含まれます。                                                                        |     `(fromId: string, toId: string, position: 'before' \| 'after') => void`     |                       |
| droppableId         | `Droppable` の ID。                                                                          |                                    `string`                                     |      自動生成されたID       |
| getItemDragDisabled | ドラッグできない行。無効な行に追加されます。                                                                     |                             `(item: T) => boolean`                              |                       |
| renderClone         | 仮想モード: ドラッグ中の行のコピー。カスタム行には必須です。                                                               |                `({item, provided, snapshot}) => React.ReactNode`                |  `Row` のコピー  |
| state               | 独自の `DragDropContext` 用の `useListHelloPangeaDnd` の状態。 [複数のリスト](#several-lists) を参照してください。 |                          `UseListHelloPangeaDndResult`                          |                       |
| droppableProps      | `Droppable` に渡されます。                                                                          | `Pick<DroppableProps, 'isDropDisabled' \| 'ignoreContainerClipping' \| 'type'>` |                       |
| children            | `List` コンポーネント。`role="grid"` が設定されています。                                                                     |                                   `ReactNode`                                   |                       |

### ListHelloPangeaDnd.Row

| 名前            | 説明                                                              |         タイプ          |      デフォルト      |
| :-------------- | :---------------------------------------------------------------- | :-------------------: | :---------------: |
| ctx             | `renderItem` の最初の引数                                         |   `ListItemContext`   |                   |
| helpers         | `renderItem` の 2 番目の引数                                      |   `ListItemHelpers`   |                   |
| children        | 行のコンテンツ                                                    |      `ReactNode`      |   `ctx.content`   |
| startContent    | ビューの開始スロット                                              |      `ReactNode`      |                   |
| description     | ビューの 2 行目                                                   |      `ReactNode`      |                   |
| endContent      | ビューの終了スロット                                              |      `ReactNode`      |                   |
| handleLabel     | ハンドルのアクセシブル名                                          |       `string`        | "Drag to reorder" |
| handlePlacement | ハンドルのエッジ: 最外側のスロットまたは `endContent` の後         |  `'start' \| 'end'`   |     `'start'`     |
| className       | 行の CSS クラス                                                   |       `string`        |                   |
| style           | 行のインラインスタイル                                            | `React.CSSProperties` |                   |
| qa              | 行の `data-qa` 属性                                               |       `string`        |                   |

### getHelloPangeaRowProps

`{ctx, helpers, provided, snapshot, handleLabel?}` — `renderItem` の引数と `Draggable` のレンダリング関数の引数 — を受け取り、以下を返します。

| 名前        | 説明                                                                                             |            タイプ             |
| :---------- | :----------------------------------------------------------------------------------------------- | :-------------------------: |
| rowProps    | 行のプロパティ: ドラッグ可能なプロパティとライブラリの ref を持つリストのプロパティ                 |     `ListItemDOMProps`      |
| handleProps | ハンドルのプロパティ: `dragHandleProps`, `tabIndex={-1}` および名前。無効な場合は装飾的です。 | `HelloPangeaHandleDOMProps` |
| cellProps   | セルのプロパティ                                                                                 |     `ListCellDOMProps`      |

### HelloPangeaDragHandle

`span` のプロパティ（`tabIndex` を除く）と以下を受け取ります。

| 名前       | 説明                     |    タイプ     |      デフォルト      |
| :--------- | :----------------------- | :---------: | :---------------: |
| aria-label |ハンドルのアクセシブル名 |  `string`   | "Drag to reorder" |
| qa         | `data-qa` 属性           |  `string`   |                   |
| children   | グリップの代わりに表示されるコンテンツ | `ReactNode` |   グリップアイコン   |

### useListHelloPangeaDnd

独自の `DragDropContext` のドラッグ状態 — ラッパーの `state`（プロパティは不要）、または手動で配線されたリストの `dnd` プロパティ。すべてのプロパティはオプションです。

| 名前   | 説明                                                                                                                            |                                  型                                   |
| :----- | :------------------------------------------------------------------------------------------------------------------------------ | :---------------------------------------------------------------------: |
| ids    | リストの順序での行のID。デフォルトは、状態が与えられた `ListHelloPangeaDnd` のIDです。                                                              |                           `readonly string[]`                           |
| onDrop | ドロップ — `moveItem(items, fromId, toId, position)` とペアにします。`ListHelloPangeaDnd` の下ではオプションです。                                                              | `(fromId: string, toId: string, position: 'before' \| 'after') => void` |

返り値:

| 名前        | 説明                                                              |              型              |
| :---------- | :---------------------------------------------------------------- | :----------------------------: |
| draggingId  | ドラッグされているもの — リストのアダプターに入ります。                                                                                              |        `string \| null`        |
| onDragStart | `DragDropContext` のためのものです。                                                                                                                             |  `(start: DragStart) => void`  |
| onDragEnd   | `DragDropContext` のためのものです。実際の移動時に `onDrop` を呼び出します。                                                                                                                            | `(result: DropResult) => void` |