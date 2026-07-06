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

## コンポーネント

使用できる Table コンポーネントは2つあります。

- `BaseTable` - 基本的なスタイルのみを持つコンポーネントです。
- `Table` - Gravity UI ベースのスタイルを持つコンポーネントです。

### 行選択

```tsx
import {selectionColumn} from '@gravity-ui/table';
import type {RowSelectionState} from '@gravity-ui/table/tanstack';

const columns: ColumnDef<Person>[] = [
  selectionColumn as ColumnDef<Person>,
  // ...他のカラム
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

### カスタム範囲選択カラム

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
  // ...他のカラム
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
  // ...他のカラム
];
```

**注意**: テーブルにネストされた行が含まれている場合、範囲選択は機能しません。現時点では、これは未定義の動作と見なされます。

### ソート

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

要素をマニュアルでソートしたい場合は、`manualSorting` プロパティを渡してください。

```tsx
const table = useTable({
  // ...
  manualSorting: true,
});
```

### グルーピング

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

選択機能付きのグルーピングを使用するには、`useRowSelectionFixedHandler` フックを使用してください。これがないと、親行のチェックボックスの状態が正しく表示されません。https://github.com/TanStack/table/issues/4878

ネストスタイルを有効にするには、列設定で `withNestingStyles = true` を渡してください。

ネストインジケーターは、`showTreeDepthIndicators = false` を渡すことで無効にできます。

行の展開/折りたたみを制御するコントロールを追加するには、セルコンテンツを `TreeExpandableCell` コンポーネントまたは同様のカスタムコンポーネントでラップしてください。

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

### 並べ替え

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

### 列の並べ替え

テーブルを `ColumnReorderingProvider` でラップすると、ヘッダーによる列のドラッグアンドドロップ並べ替えが有効になります。

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

`columnOrder` を自分で制御する場合（例: 保存するため）、`onReorder` を渡し、結果の順序を適用してください。

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
| `--gt-table-reordering-insertion-line-color` | `#4d8bff`                     | ドロップ挿入ラインの色 |
| `--gt-table-reordering-insertion-line-width` | `2px`                         | ドロップ挿入ラインの幅 |
| `--gt-table-reordering-dragged-opacity`      | `0.4`                         | ドラッグ中の列の不透明度    |
| `--gt-table-drag-overlay-background`         | `#fff`                        | ドラッグプレビューの背景          |
| `--gt-table-drag-overlay-shadow`             | `0 3px 12px rgba(0,0,0,0.15)` | ドラッグプレビューのbox-shadow          |
| `--gt-table-drag-overlay-border-radius`      | `6px`                         | ドラッグプレビューの角丸        |

特定の列の並べ替えを禁止するには、その列の定義で `enableColumnReordering: false` を設定します。プレースホルダー（グループ化された）列はドラッグできません。`activationDistance`（デフォルトは `8`）を使用して、ドラッグが開始されるまでにポインターが移動する必要がある距離を調整します。これにより、ヘッダーのクリック（ソートなど）が引き続き機能します。

固定された列も並べ替え可能ですが、それらの間でのみ可能です。列は左固定グループ、右固定グループ、または中央（固定なし）グループ内で移動できます。ドラッグによってピンの境界を越えることはありません。

```tsx
<ColumnReorderingProvider
  table={table}
  onReorder={({columnOrder, columnPinning, pinned}) => {

```tsx
import React from 'react';
import {Table, useTable} from '@gravity-ui/table';
import type {ColumnDef} from '@gravity-ui/table/tanstack';

function MyTable() {
  const [data, setData] = React.useState<Person[]>([]);
  const [columnVisibility, setColumnVisibility] = React.useState<Record<string, boolean>>({});
  const [columnOrder, setColumnOrder] = React.useState<string[]>([]);

  const columns: ColumnDef<Person>[] = [
    // ... your column definitions
  ];

  const onColumnVisibilityChange = (visibility: Record<string, boolean>) => {
    setColumnVisibility(visibility);
  };

  const onColumnOrderChange = (order: string[]) => {
    setColumnOrder(order);
  };

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

react-table のテーブルと列のリサイズ機能については、[ドキュメント](https://tanstack.com/table/v8/docs/api/features/column-sizing)で詳細をご確認ください。

## 既知の問題と互換性

### React 19 + React Compiler の互換性

**⚠️ 既知の問題:** `@gravity-ui/table` (TanStack Table を基盤としています) を使用している場合、React 19 および React Compiler との間に互換性の問題が確認されています。データが変更されてもテーブルが再レンダリングされない場合があります。詳細は [TanStack Table issue #5567](https://github.com/TanStack/table/issues/5567) を参照してください。

**回避策:**

React 19 と React Compiler を使用していて、テーブルの再レンダリングに関する問題が発生している場合は、コンポーネントコードで `'use no memo'` ディレクティブを使用できます。

```tsx
import React from 'react';
import {Table, useTable} from '@gravity-ui/table';
import type {ColumnDef} from '@gravity-ui/table/tanstack';

function MyTable() {
  'use no memo'; // このコンポーネントの React Compiler によるメモ化を無効にする

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

**注意:** この問題は基盤となる TanStack Table ライブラリに存在し、そちらで修正される必要があります。上記の回避策は、修正が利用可能になるまで役立つはずです。