# @gravity-ui/table &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/table)](https://www.npmjs.com/package/@gravity-ui/table) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/table/.github/workflows/ci.yml?label=CI&logo=github)](https://github.com/gravity-ui/table/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/table/)

## インストール

```shell
npm install --save @gravity-ui/table
```

## 使用方法

```tsx
import React from 'react';
import {Table, useTable} from '@gravity-ui/table';
import type {ColumnDef} from '@gravity-ui/table/tanstack';

interface Person {
  id: string;
  name: string;
  age: number;
}

const columns: ColumnDef<Person>[] = [
  {accessorKey: 'name', header: 'Name', size: 100},
  {accessorKey: 'age', header: 'Age', size: 100},
];

const data: Person[] = [
  {id: 'name', name: 'John', age: 23},
  {id: 'age', name: 'Michael', age: 27},
];

const BasicExample = () => {
  const table = useTable({
    columns,
    data,
  });

  return <Table table={table} />;
};
```

### コンポーネント

使用できる `Table` コンポーネントは2つあります。

- `BaseTable` - 基本的なスタイルのみを持つコンポーネントです。
- `Table` - Gravity UI ベースのスタイルを持つコンポーネントです。

#### 行選択

```tsx
import {selectionColumn} from '@gravity-ui/table';
import type {RowSelectionState} from '@gravity-ui/table/tanstack';

const columns: ColumnDef<Person>[] = [
  selectionColumn as ColumnDef<Person>,
  // ...その他のカラム
];

const data: Person[] = [
  /* ... */
];

const RowSelectionExample = () => {
  const [rowSelection, setRowSelection] = React.useState<RowSelectionState>({});

  const table = useTable({
    columns,
    data,
    enableRowSelection: true,
    enableMultiRowSelection: true,
    onRowSelectionChange: setRowSelection,
    state: {
      rowSelection,
    },
  });

  return <Table table={table} />;
};
```

選択機能とグループ化を併用する場合、`useRowSelectionFixedHandler` フックを使用してください。これがないと、親行のチェックボックスの状態が正しく表示されません。https://github.com/TanStack/table/issues/4878

#### カスタム範囲選択カラム

`useToggleRangeSelectionHandler` フックは、Shift+クリックイベントをリッスンして範囲選択を実行する変更ハンドラーを返します。テーブルと行の内部状態にアクセスするには、`CellContext` インスタンスを渡す必要があります。

```tsx
import React, {type ChangeEvent, useCallback, useState} from 'react';

import {Table, useToggleRangeSelectionHandler, useTable} from '@gravity-ui/table';
import type {CellContext, ColumnDef, RowSelectionState} from '@gravity-ui/table/tanstack';
import {Checkbox, type CheckboxProps} from '@gravity-ui/uikit';

type CustomRangedSelectionCheckboxProps = Omit<CheckboxProps, 'onChange'> & {
  cellContext: CellContext<unknown, unknown>;
};

const CustomRangedSelectionCheckbox = ({
  className,
  cellContext,
  ...restProps
}: CustomRangedSelectionCheckboxProps) => {
  const rowToggleRangedSelectionHandler = useToggleRangeSelectionHandler(cellContext);

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>): void => {
      rowToggleRangedSelectionHandler(event);
    },
    [rowToggleRangedSelectionHandler],
  );

  return <Checkbox {...restProps} onChange={handleChange} />;
};

const customSelectionColumn: ColumnDef<unknown> = {
  id: '_select',
  header: ({table}) => (
    <Checkbox
      size="l"
      checked={table.getIsAllRowsSelected()}
      indeterminate={table.getIsSomeRowsSelected()}
      onChange={table.getToggleAllRowsSelectedHandler()}
    />
  ),
  cell: (cellContext) => (
    <CustomRangedSelectionCheckbox
      size="l"
      checked={cellContext.row.getIsSelected()}
      disabled={!cellContext.row.getCanSelect()}
      indeterminate={cellContext.row.getIsSomeSelected()}
      cellContext={cellContext}
    />
  ),
  size: 41,
  maxSize: 41,
  minSize: 41,
  enableResizing: false,
  enableSorting: false,
};

const columns: ColumnDef<Person>[] = [
  customSelectionColumn as ColumnDef<Person>,
  // ...その他のカラム
];

const data: Person[] = [
  /* ... */
];

const RowRangedSelectionExample = () => {
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});

  const table = useTable({
    columns,
    data,
    enableRowSelection: true,
    enableMultiRowSelection: true,
    onRowSelectionChange: setRowSelection,
    state: {
      rowSelection,
    },
  });

  return <Table table={table} />;
};
```

`RangedSelectionCheckbox` コンポーネントもあり、内部でフックを使用し、`CellContext` インスタンスをプロップとして受け取ります。このコンポーネントは、カスタム選択カラムに範囲選択機能を簡単に追加するためのショートカットを提供します。

```tsx
import type {ColumnDef} from '@gravity-ui/table/tanstack';
import {RangedSelectionCheckbox, SelectionCheckbox} from '@gravity-ui/table';

export const selectionColumn: ColumnDef<unknown> = {
  id: '_select',
  header: ({table}) => (
    <SelectionCheckbox
      checked={table.getIsAllRowsSelected()}
      disabled={!table.options.enableRowSelection}
      indeterminate={table.getIsSomeRowsSelected()}
      onChange={table.getToggleAllRowsSelectedHandler()}
    />
  ),
  cell: (cellContext) => (
    <RangedSelectionCheckbox
      checked={cellContext.row.getIsSelected()}
      disabled={!cellContext.row.getCanSelect()}
      indeterminate={cellContext.row.getIsSomeSelected()}
      cellContext={cellContext}
    />
  ),
  meta: {
    hideInSettings: true,
  },
  size: 32,
  minSize: 32,
};
```

デフォルトでは、`selectionColumn` で生成される選択カラムには範囲選択機能が含まれています。

```tsx
import {selectionColumn} from '@gravity-ui/table';
import type {ColumnDef} from '@gravity-ui/table/tanstack';

const columns: ColumnDef<Person>[] = [
  selectionColumn as ColumnDef<Person>,
  // ...その他のカラム
];
```

**注意**: テーブルにネストされた行が含まれている場合、範囲選択は機能しません。現時点では、これは未定義の動作と見なされます。

#### ソート

react-table の列プロパティについては、[ドキュメント](https://tanstack.com/table/v8/docs/guide/sorting) を参照してください。

```tsx
import type {SortingState} from '@gravity-ui/table/tanstack';

const columns: ColumnDef<Person>[] = [
  /* ... */
];

const data: Person[] = [
  /* ... */
];

const SortingExample = () => {
  const [sorting, setSorting] = React.useState<SortingState>([]);

  // ソートを有効にするには、列に accessorFn が必須です

  const table = useTable({
    columns,
    data,
    enableSorting: true,
    getRowId: (item) => item.id,
    onSortingChange: setSorting,
    state: {
      sorting,
    },
  });

  return <Table table={table} />;
};
```

要素を手動でソートしたい場合は、`manualSorting` プロパティを渡します。

```tsx
const table = useTable({
  // ...
  manualSorting: true,
});
```

#### グルーピング

```tsx
import type {ExpandedState, Row} from '@gravity-ui/table/tanstack';

interface Person {
  id: string;
  name: string;
  age: number;
}

interface PersonGroup {
  id: string;
  name: string;
  items: Person[];
}

type Item = PersonGroup | Person;

const columns: ColumnDef<Item>[] = [
  {accessorKey: 'name', header: 'Name', size: 200},
  {accessorKey: 'age', header: 'Age', size: 100},
];

const data: Item[] = [
  {
    id: 'friends',
    name: 'Friends',
    items: [
      {id: 'nick', name: 'Nick', age: 25},
      {id: 'tom', name: 'Tom', age: 21},
    ],
  },
  {
    id: 'relatives',
    name: 'Relatives',
    items: [
      {id: 'john', name: 'John', age: 23},
      {id: 'michael', name: 'Michael', age: 27},
    ],
  },
];

const getGroupTitle = (row: Row<Item>) => row.getValue<string>('name');

const GroupingExample = () => {
  const [expanded, setExpanded] = React.useState<ExpandedState>({});

  const table = useTable({
    columns,
    data,
    enableExpanding: true,
    getSubRows: (item) => ('items' in item ? item.items : undefined),
    onExpandedChange: setExpanded,
    state: {
      expanded,
    },
  });

  return <Table table={table} getGroupTitle={getGroupTitle} />;
};
```

選択機能付きのグルーピングを使用するには、`useRowSelectionFixedHandler` フックを使用します。これがないと、親行のチェックボックスの状態が正しく表示されません。https://github.com/TanStack/table/issues/4878

ネストスタイルを有効にするには、列の設定で `withNestingStyles = true` を渡します。

ネストインジケーターは、`showTreeDepthIndicators = false` を渡すことで無効にできます。

行の展開/折りたたみのコントロールを追加するには、セルのコンテンツを `TreeExpandableCell` コンポーネントまたは同様のカスタムコンポーネントでラップします。

```tsx
import {TreeExpandableCell} from '@gravity-ui/table';

const columns: ColumnDef<Item>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
    size: 200,
    showTreeDepthIndicators: false,
    withNestingStyles: true,
    cell: ({row, info}) => (
      <TreeExpandableCell row={row}>{info.getValue<string>()}</TreeExpandableCell>
    ),
  },
  // ...他の列
];
```

#### 並べ替え

```tsx
import type {ReorderingProviderProps} from '@gravity-ui/table';
import {dragHandleColumn, ReorderingProvider} from '@gravity-ui/table';

const columns: ColumnDef<Person>[] = [
  dragHandleColumn,
  // ...他の列
];

const data: Person[] = [
  /* ... */
];

const ReorderingExample = () => {
  const table = useTable({
    columns,
    data,
    getRowId: (item) => item.id,
  });

  const handleReorder = React.useCallback<
    NonNullable<ReorderingProviderProps<Person>['onReorder']>
  >(
    ({
      draggedItemKey,
      targetItemKey,
      baseItemKey,
      baseNextItemKey,
      enableNesting,
      nextChild,
      pullFromParent,
    }) => {
      // ...
    },
    [],
  );

  return (
    <ReorderingProvider table={table} onReorder={handleReorder}>
      <Table table={table} />
    </ReorderingProvider>
  );
};
```

#### ドラッグハンドルなしの並べ替え

行全体をドラッグアクティベーターとして使用し、列定義から `dragHandleColumn` を省略するには、`dragWithoutHandle` を設定します。

```tsx
const columns: ColumnDef<Person>[] = [
  {accessorKey: 'name', header: 'Name'},
  {accessorKey: 'age', header: 'Age'},
];

return (
  <ReorderingProvider table={table} dragWithoutHandle onReorder={handleReorder}>
    <Table table={table} />
  </ReorderingProvider>
);
```

ポインターはドラッグ開始前に 8 ピクセル移動する必要があります。これにより、通常の行クリックやコントロールクリックが引き続き機能します。カスタム部分の行がドラッグを開始しないようにするには、その `onPointerDown` ハンドラーで `preventDefault()` を呼び出します。

`ReorderingProvider` はデフォルトで dnd-kit の垂直自動スクロールを有効にします。アプリケーションが独自のドラッグ自動スクロール実装を提供している場合は、`autoScroll={false}` を渡します。両方を同時に実行すると、スクロールの競合が発生する可能性があります。

#### 列の並べ替え

ヘッダーによる列のドラッグアンドドロップ並べ替えを有効にするには、テーブルを `ColumnReorderingProvider` でラップします。

```tsx
import {ColumnReorderingProvider} from '@gravity-ui/table';

const columns: ColumnDef<Person>[] = [
  {accessorKey: 'name', header: 'Name', size: 100},
  {accessorKey: 'age', header: 'Age', size: 100},
];

const ColumnReorderingExample = () => {
  const table = useTable({
    columns,
    data,
    getRowId: (item) => item.id,
  });

  return (
    <ColumnReorderingProvider table={table}>
      <Table table={table} />
    </ColumnReorderingProvider>
  );
};
```

### 行と列の並べ替えを同時に行う

`ColumnReorderingProvider` と `ReorderingProvider` をネストして、両方のドラッグ軸を同時に有効にします。プロバイダーの順序は関係ありません。内部で単一の dnd-kit コンテキストを共有します。

```tsx
import type {ColumnReorderingProviderProps, ReorderingProviderProps} from '@gravity-ui/table';
import {ColumnReorderingProvider, ReorderingProvider, dragHandleColumn} from '@gravity-ui/table';

const columns: ColumnDef<Person>[] = [
  dragHandleColumn,
  {accessorKey: 'name', header: 'Name'},
  {accessorKey: 'age', header: 'Age'},
];
```

```tsx
const CombinedReorderingExample = () => {
  const [data, setData] = React.useState(initialData);
  const [columnOrder, setColumnOrder] = React.useState<string[]>([]);

  const table = useTable({
    columns,
    data,
    getRowId: (item) => item.id,
    state: {columnOrder},
    onColumnOrderChange: setColumnOrder,
  });

  const handleRowReorder = React.useCallback<
    NonNullable<ReorderingProviderProps<Person>['onReorder']>
  >(({draggedItemKey, baseItemKey}) => {
    // update data array
  }, []);

  const handleColumnReorder = React.useCallback<
    NonNullable<ColumnReorderingProviderProps<Person>['onReorder']>
  >(({columnOrder}) => {
    setColumnOrder(columnOrder);
  }, []);

  return (
    <ColumnReorderingProvider table={table} onReorder={handleColumnReorder}>
      <ReorderingProvider table={table} onReorder={handleRowReorder}>
        <Table table={table} />
      </ReorderingProvider>
    </ColumnReorderingProvider>
  );
};
```

`columnOrder` を自分で制御する場合（例: 保存する場合）は、`onReorder` を渡して結果の順序を適用してください。

```tsx
const [columnOrder, setColumnOrder] = React.useState<string[]>([]);

const table = useTable({
  columns,
  data,
  state: {columnOrder},
  onColumnOrderChange: setColumnOrder,
});

return (
  <ColumnReorderingProvider
    table={table}
    onReorder={({columnOrder}) => setColumnOrder(columnOrder)}
  >
    <Table table={table} />
  </ColumnReorderingProvider>
);
```

CSS API:

| CSS 変数                                 | デフォルト                       | 説明                      |
| -------------------------------------------- | ----------------------------- | -------------------------------- |
| `--gt-table-reordering-insertion-line-color` | `#4d8bff`                     | ドロップ挿入線の色 |
| `--gt-table-reordering-insertion-line-width` | `2px`                         | ドロップ挿入線の幅 |
| `--gt-table-reordering-dragged-opacity`      | `0.4`                         | ドラッグされた列の不透明度    |
| `--gt-table-drag-overlay-background`         | `#fff`                        | ドラッグプレビューの背景          |
| `--gt-table-drag-overlay-shadow`             | `0 3px 12px rgba(0,0,0,0.15)` | ドラッグプレビューの box-shadow          |
| `--gt-table-drag-overlay-border-radius`      | `6px`                         | ドラッグプレビューの border-radius       |

特定の列の並べ替えを禁止するには、その列定義で `enableColumnReordering: false` を設定します。プレースホルダー（グループ化された）列はドラッグできません。`activationDistance`（デフォルトは `8`）を使用して、ドラッグが開始されるまでにポインターが移動する必要がある距離を調整します。これにより、ヘッダーのクリック（ソートなど）が機能し続けます。

固定された列も並べ替え可能ですが、それらの中でのみ可能です。列は左固定グループ、右固定グループ、または中央（固定なし）グループ内で移動できます。ドラッグによってピンの境界を越えることはありません。

```tsx
<ColumnReorderingProvider
  table={table}
  onReorder={({columnOrder, columnPinning, pinned}) => {
    if (pinned) {
      setColumnPinning(columnPinning);
    } else {
      setColumnOrder(columnOrder);
    }
  }}
>
  <Table table={table} />
</ColumnReorderingProvider>
```

ドラッグ中:

- 列の浮遊プレビュー（ヘッダーと最初の数行）がドラッグオーバーレイ内でポインターを追従します。
- ドラッグされた列は半透明になります。
- 列がドロップされる場所に青い挿入線が表示されます。

```tsx
<ColumnReorderingProvider
  table={table}
  autoScroll
  dragOverlayRowCount={10}
  renderDragOverlay={({columnId}) => <CustomColumnPreview columnId={columnId} />}
>
  <Table table={table} />
</ColumnReorderingProvider>
```

#### Virtualization

グリッドコンテナをスクロール要素として使用したい場合（ウィンドウを使用したい場合はウィンドウ仮想化セクションを参照）に使用します。コンテナに固定の高さを設定してください。そうしないと、仮想化は機能しません。

```tsx
import {useRowVirtualizer} from '@gravity-ui/table';

const columns: ColumnDef<Person>[] = [
  /* ... */
];

const data: Person[] = [
  /* ... */
];

const VirtualizationExample = () => {
  const table = useTable({
    columns,
    data,
    getRowId: (item) => item.id,
  });

  const containerRef = React.useRef<HTMLDivElement>(null);

  const rowVirtualizer = useRowVirtualizer({
    count: table.getRowModel().rows.length,
    estimateSize: () => 20,
    overscan: 5,
    getScrollElement: () => containerRef.current,
  });

  return (
    <div ref={containerRef} style={{height: '500px', overflow: 'auto'}}>
      <Table table={table} rowVirtualizer={rowVirtualizer} />
    </div>
  );
};
```

連続した双方向スクロール中に常に表示される必要があるテーブルでは、アダプティブ
Direct-DOM モードを有効にし、安定したセマンティックキーを使用します。同じキーは、不変の並べ替えやツリーの再親化の前後に、行を一意に識別する必要があります。

```tsx
const rows = table.getRowModel().rows;

const getItemKey = React.useCallback(
  (index: number) => rows[index]?.id ?? `missing:${index}`,
  [rows],
);

const rowVirtualizer = useRowVirtualizer({
  adaptiveFlushSync: true,
  count: rows.length,
  directDomUpdates: true,
  directDomUpdatesMode: 'position',
  estimateSize: () => 40,
  getItemKey,
  getScrollElement: () => containerRef.current,
  overscan: 12,
});
```

`adaptiveFlushSync` は、ウォームマウントされた範囲を維持し、カバーされていない表示範囲のみを同期的に埋めます。`directDomUpdates` は、仮想化コンポーネントが React のレンダリングなしで、スクロール通知ごとにセルの位置とボディのサイズを更新できるようにします。テーブルの行には `position` を使用してください。ただし、周囲のレイアウトでトランスフォームが必要な場合は除きます。`getRowId` と `getItemKey` を安定させ、行の展開、折りたたみ、並べ替え、または再親化の後に、現在のフラット化された行モデルから `count` を設定します。任意のカスタム `rangeExtractor` は引き続き権威があり、アダプティブウィンドウ計画を無効にします。

`BaseTable.canDeferOffscreenCellContent` は、非常に幅の広いアダプティブテーブル向けの追加のオプトイン機能です。遅延マウントがジオメトリ、フォーカス、アクセシビリティ、またはアプリケーションの状態を変更できないパッシブなセルコンテンツに対してのみ `true` を返してください。カスタム行、グループ行、固定セル、およびインタラクティブまたは副作用のあるコンテンツは、引き続き即時マウントされるべきです。

デフォルトのアダプティブレンジエクストラクタを使用すると、`BaseTable` はアクティブなドラッグ行を自動的にピン留めします。
カスタムレンジエクストラクタは、その行自体を保持する責任があります。アダプティブではないバーチャライザーで並べ替えを使用する場合は、同じセマンティックな `getItemKey` 契約を維持し、`rangeExtractor` オプションを渡してください。

```tsx
import {getVirtualRowRangeExtractor} from '@gravity-ui/table';

// ...

const tableRef = React.useRef<HTMLTableElement>(null);

const rowVirtualizer = useRowVirtualizer({
  // ...
  rangeExtractor: getVirtualRowRangeExtractor(tableRef.current),
});

return (
  <TableWithReordering
    ref={tableRef}
    table={table}
    rowVirtualizer={rowVirtualizer}
    onReorder={handleReorder}
  />
);
```

#### ウィンドウ仮想化

スクロール要素としてウィンドウを使用したい場合に使用します。

```tsx
import {useWindowRowVirtualizer} from '@gravity-ui/table';

const columns: ColumnDef<Person>[] = [
  /* ... */
];

const data: Person[] = [
  /* ... */
];

const WindowVirtualizationExample = () => {
  const table = useTable({
    columns,
    data,
    getRowId: (item) => item.id,
  });

  const bodyRef = React.useRef<HTMLTableSectionElement>(null);

  const rowVirtualizer = useWindowRowVirtualizer({
    count: table.getRowModel().rows.length,
    estimateSize: () => 20,
    overscan: 5,
    scrollMargin: bodyRef.current?.offsetTop ?? 0,
  });

  return <Table table={table} rowVirtualizer={rowVirtualizer} bodyRef={bodyRef} />;
};
```

#### リサイジング

```tsx
const columns: ColumnDef<Person>[] = [
  /* ... */
];

const data: Person[] = [
  /* ... */
];

const ResizingDemo = () => {
  const table = useTable({
    columns,
    data,
    enableColumnResizing: true,
    columnResizeMode: 'onChange',
  });

  return <Table table={table} />;
};
```

#### 列設定

```tsx
const columns: ColumnDef<Person>[] = [
  // ...他の列
  {
    id: 'settings_column_id',
    header: ({table}) => <TableSettings table={table} />,
    meta: {
      hideInSettings: false, // オプション。設定ポップオーバーからこの列を非表示にできます
      titleInSettings: 'ReactNode', // オプション。設定ポップオーバーのヘッダーフィールドをオーバーライドします（ヘッダーと設定ポップオーバーで異なるコンテンツが必要な場合）
    },
  }, // または getSettingsColumn 関数を使用することもできます
];

const data: Person[] = [
  /* ... */
];

const TableSettingsDemo = () => {
  const [columnVisibility, onColumnVisibilityChange] = React.useState<VisibilityState>({
    // 外部制御と初期状態用
    column_id: false, // デフォルトで非表示にするため
  });
  const [columnOrder, onColumnOrderChange] = React.useState<string[]>([
    /* リーフ列のID */
  ]); // 外部制御と初期状態用

  // state、コールバック、および設定適用コールバックでの設定を取得する代替バリアント - useTableSettings フックを使用:
  // const {state, callbacks} = useTableSettings({initialVisibility: {}, initialOrder: []})

  const table = useTable({
    columns,
    data,
    state: {
      columnVisibility,
      columnOrder,
    },
    onColumnVisibilityChange,
    onColumnOrderChange,
  });

  return <Table table={table} />;
};
```

テーブルと列のリサイジングプロパティの詳細については、react-table の [ドキュメント](https://tanstack.com/table/v8/docs/api/features/column-sizing) を参照してください。

## 既知の問題と互換性

### React 19 + React Compiler の互換性

**⚠️ 既知の問題:** `@gravity-ui/table`（TanStack Table をベースに構築されています）を使用している場合、React 19 および React Compiler との間に既知の互換性の問題があります。データが変更されてもテーブルが再レンダリングされない場合があります。詳細については、[TanStack Table issue #5567](https://github.com/TanStack/table/issues/5567) を参照してください。

**回避策:**

React 19 を React Compiler と共に使用していて、テーブルの再レンダリングに問題が発生している場合は、コンポーネントコードで `'use no memo'` ディレクティブを使用できます。

```tsx
import React from 'react';
import {Table, useTable} from '@gravity-ui/table';
import type {ColumnDef} from '@gravity-ui/table/tanstack';

function MyTable() {
  'use no memo'; // このコンポーネントの React Compiler メモ化を無効にする

  const [data, setData] = React.useState<Person[]>([]);

  const table = useTable({
    data,
    columns,
  });

  return <Table table={table} />;
}
```

**代替ソリューション:**

テーブルインスタンスまたはデータを明示的にメモ化して、適切な再レンダリングを保証することもできます。

```tsx
import React from 'react';
import {Table, useTable} from '@gravity-ui/table';
import type {ColumnDef} from '@gravity-ui/table/tanstack';

function MyTable() {
  const [data, setData] = React.useState<Person[]>([]);

  // 再レンダリングを保証するためにデータを明示的にメモ化する
  const memoizedData = React.useMemo(() => data, [data]);

  const table = useTable({
    data: memoizedData,
    columns,
  });

  return <Table table={table} />;
}
```

**注意:** この問題は基盤となる TanStack Table ライブラリに存在し、そこで修正される必要があります。上記の回避策は、修正が利用可能になるまで役立つはずです。

## ライセンス

MIT ライセンスの下で配布されています。詳細については [LICENSE](LICENSE) を参照してください。

## AI エージェント向け

Gravity UI アプリケーション向けのヘッドレス、TanStack-Table 搭載データグリッド — ソート可能、選択可能、グループ化可能、並べ替え可能、および仮想化されたテーブルのために、uikit の基本的な `Table` の上に生のマークアップを合成するのではなく、これを使用してください。

### 使用する場合

- 行またはウィンドウ仮想化が必要な大規模データセット（`useRowVirtualizer`、`useWindowRowVirtualizer`）。
- 列のソート、リサイジング、並べ替え（`ColumnReorderingProvider`）、ピン留め、およびユーザーごとの列設定（`TableSettings`）。
- 行の選択（単一/複数、範囲）および展開可能なセルを持つツリー/グループ化された行。

### 使用しない場合

- 数行のシンプルな静的テーブルで高度な機能がない場合 — uikit の組み込み `Table`（[`@gravity-ui/uikit`](https://github.com/gravity-ui/uikit) から）の方が軽量です。
- 非表形式のリスト — uikit の `List`（[`@gravity-ui/uikit`](https://github.com/gravity-ui/uikit) から）を使用してください。
- スプレッドシートスタイルのインラインセル編集 — このグリッドは読み取り/表示に焦点を当てており、編集可能なスプレッドシートではありません。

### 一般的な落とし穴

- **テーブルは `useTable` で構築し、`<Table table={table} />` でレンダリングします。** メインのプロパティは `<Table>` 自体の `data`/`columns` ではなく `table` (インスタンス) です。`data` と `columns` は `useTable` に渡してください。
- **型は `@gravity-ui/table/tanstack` サブパスから取得します。** `ColumnDef`, `RowSelectionState`, `SortingState` などは、パッケージのルートからではなく `@gravity-ui/table/tanstack` からインポートしてください。
- **ソートにはアクセサーが必要です。** ソートを機能させるには、カラムに `accessorKey`/`accessorFn` が必要です。`enableSorting` を設定し、`getRowId` を提供してください。
- **React 19 + React Compiler は再レンダリングをスキップできます。** これは TanStack Table のアップストリームの問題です。コンポーネントに `'use no memo'` ディレクティブを追加するか、`data` をメモ化してください。
- **ネストされた行では範囲選択が壊れます。** テーブルにグループ化された/ネストされた行がある場合、範囲選択は未定義の動作となります。グループ化された状態での親チェックボックスの状態を正しく保つには、`useRowSelectionFixedHandler` を使用してください。

## AI エージェント向けドキュメント

インストールされているバージョンのエージェント可読ドキュメントは、`node_modules/@gravity-ui/table/build/docs/INDEX.md` にあります。