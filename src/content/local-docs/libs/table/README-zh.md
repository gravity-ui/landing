# @gravity-ui/table &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/table)](https://www.npmjs.com/package/@gravity-ui/table) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/table/.github/workflows/ci.yml?label=CI&logo=github)](https://github.com/gravity-ui/table/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/table/)

## 安装

```shell
npm install --save @gravity-ui/table
```

## 用法

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

## 组件

您可以使用两个 Table 组件：

- `BaseTable` - 仅包含基本样式的组件；
- `Table` - 包含 Gravity UI 样式的组件。

### 行选择

```tsx
import {selectionColumn} from '@gravity-ui/table';
import type {RowSelectionState} from '@gravity-ui/table/tanstack';

const columns: ColumnDef<Person>[] = [
  selectionColumn as ColumnDef<Person>,
  // ...其他列
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

要使用带选择功能的组，请使用 `useRowSelectionFixedHandler` hook。没有它，父行复选框的状态将不正确。https://github.com/TanStack/table/issues/4878

### 自定义范围选择列

`useToggleRangeSelectionHandler` hook 返回一个更改处理程序，该处理程序监听 Shift+click 事件并执行范围行选择。它需要一个 `CellContext` 实例才能访问表格和行的内部状态。

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
  // ...其他列
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

还有一个 `RangedSelectionCheckbox` 组件，它在内部使用 hook 并接受 `CellContext` 实例作为 prop。此组件为向自定义选择列添加范围选择功能提供了快捷方式。

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

默认情况下，使用 `selectionColumn` 生成的选择列包含范围选择功能。

```tsx
import {selectionColumn} from '@gravity-ui/table';
import type {ColumnDef} from '@gravity-ui/table/tanstack';

const columns: ColumnDef<Person>[] = [
  selectionColumn as ColumnDef<Person>,
  // ...其他列
];
```

**注意**: 如果表格包含嵌套行，范围选择将不起作用。目前，这被认为是未定义行为。

### 排序

了解 `react-table` 的列属性，请参阅 [文档](https://tanstack.com/table/v8/docs/guide/sorting)。

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

  // 必须为您的列设置 accessorFn 才能启用排序

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

如果您想手动排序元素，请传递 `manualSorting` 属性：

```tsx
const table = useTable({
  // ...
  manualSorting: true,
});
```

### 分组

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

要将分组与选择结合使用，请使用 `useRowSelectionFixedHandler` hook。否则，父行复选框的状态将不正确。https://github.com/TanStack/table/issues/4878

要启用嵌套样式，请在列配置中传递 `withNestingStyles = true`。

可以通过传递 `showTreeDepthIndicators = false` 来禁用嵌套指示器。

要添加用于展开/折叠行的控件，请将单元格内容包装在 `TreeExpandableCell` 组件或您类似的自定义组件中：

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
  // ...其他列
];
```

### 行重排

```tsx
import type {ReorderingProviderProps} from '@gravity-ui/table';
import {dragHandleColumn, ReorderingProvider} from '@gravity-ui/table';

const columns: ColumnDef<Person>[] = [
  dragHandleColumn,
  // ...其他列
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

### 列重排

将表格包装在 `ColumnReorderingProvider` 中，以启用通过表头进行列的拖放重排。

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

如果您自己控制 `columnOrder`（例如，为了持久化它），请传递 `onReorder` 并应用结果顺序：

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

CSS API：

| CSS 变量                                 | 默认值                       | 描述                      |
| -------------------------------------------- | ----------------------------- | -------------------------------- |
| `--gt-table-reordering-insertion-line-color` | `#4d8bff`                     | 插入线颜色 |
| `--gt-table-reordering-insertion-line-width` | `2px`                         | 插入线宽度 |
| `--gt-table-reordering-dragged-opacity`      | `0.4`                         | 拖拽列的透明度    |
| `--gt-table-drag-overlay-background`         | `#fff`                        | 拖拽预览背景          |
| `--gt-table-drag-overlay-shadow`             | `0 3px 12px rgba(0,0,0,0.15)` | 拖拽预览阴影          |
| `--gt-table-drag-overlay-border-radius`      | `6px`                         | 拖拽预览圆角       |

要禁止重新排序特定列，请在其列定义中设置 `enableColumnReordering: false`。占位符（分组）列不可拖动。使用 `activationDistance`（默认值为 `8`）来调整指针移动多远才能开始拖动，这可以确保表头点击（如排序）功能正常工作。

固定列也可以重新排序，但只能在它们之间进行：列可以在左固定组、右固定组或中心（未固定）组内移动 — 拖动时它永远不会跨越固定边界。

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

拖动时：

- 列的浮动预览（其表头加上前几行）会跟随指针显示在拖拽覆盖层中；
- 被拖动的列会变得半透明；
- 在列将要被放置的位置会绘制一条蓝色的插入线；

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

### 虚拟化

如果您想将网格容器用作滚动元素（如果您想使用窗口，请参阅窗口虚拟化部分）。请确保为容器设置固定的高度；否则，虚拟化将无法工作。

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

如果您将虚拟化与重新排序功能一起使用，还需要传递 `rangeExtractor` 选项：

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

### 窗口虚拟化

如果您想使用窗口作为滚动元素

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

### 列宽度调整

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

### 列设置

```tsx
const columns: ColumnDef<Person>[] = [
  // ...其他列
  {
    id: 'settings_column_id',
    header: ({table}) => <TableSettings table={table} />,
    meta: {
      hideInSettings: false, // 可选。允许在设置弹出窗口中隐藏此列
      titleInSettings: 'ReactNode', // 可选。覆盖设置弹出窗口的表头字段（如果您需要表头和设置弹出窗口之间不同的内容）
    },
  }, // 或者您可以使用 getSettingsColumn 函数
];

const data: Person[] = [
  /* ... */
];

const TableSettingsDemo = () => {
  const [columnVisibility, onColumnVisibilityChange] = React.useState<VisibilityState>({
    // 用于外部控制和初始状态
    column_id: false, // 默认隐藏
  });
  const [columnOrder, onColumnOrderChange] = React.useState<string[]>([
    /* 叶子列 ID */
  ]); // 用于外部控制和初始状态

  // 使用 useTableSettings hook 获取状态、回调和在设置应用时设置回调的替代方案：
  // const {state, callbacks} = useTableSettings({initialVisibility: {}, initialOrder: []})

```tsx
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

在 [react-table 文档](https://tanstack.com/table/v8/docs/api/features/column-sizing) 中了解更多关于表格和列调整大小的属性

## 已知问题和兼容性

### React 19 + React Compiler 兼容性

**⚠️ 已知问题：** 在使用 `@gravity-ui/table`（基于 TanStack Table 构建）时，存在一个与 React 19 和 React Compiler 的已知兼容性问题。当数据更改时，表格可能不会重新渲染。详情请参阅 [TanStack Table issue #5567](https://github.com/TanStack/table/issues/5567)。

**解决方法：**

如果您正在使用 React 19 和 React Compiler，并且遇到表格重新渲染问题，可以在组件代码中使用 `'use no memo'` 指令：

```tsx
import React from 'react';
import {Table, useTable} from '@gravity-ui/table';
import type {ColumnDef} from '@gravity-ui/table/tanstack';

function MyTable() {
  'use no memo'; // 为此组件禁用 React Compiler 的 memoization

  const [data, setData] = React.useState<Person[]>([]);

  const table = useTable({
    data,
    columns,
  });

  return <Table table={table} />;
}
```

**替代方案：**

您也可以显式地 memoize 表格实例或数据，以确保正确重新渲染：

```tsx
import React from 'react';
import {Table, useTable} from '@gravity-ui/table';
import type {ColumnDef} from '@gravity-ui/table/tanstack';

function MyTable() {
  const [data, setData] = React.useState<Person[]>([]);

  // 显式 memoize 数据以确保重新渲染
  const memoizedData = React.useMemo(() => data, [data]);

  const table = useTable({
    data: memoizedData,
    columns,
  });

  return <Table table={table} />;
}
```

**注意：** 此问题存在于底层的 TanStack Table 库中，需要在此处修复。在修复可用之前，上述解决方法应该有所帮助。

## 许可证

MIT 许可证。详情请参阅 [LICENSE](LICENSE)。

## 致 AI 代理

为 Gravity UI 应用打造的无头、基于 TanStack Table 的数据网格 — 当您需要在 uikit 的基础 `Table` 上组合原始标记时，请使用它来实现可排序、可选择、可分组、可重排和虚拟化的表格。

### 何时使用

- 需要行或窗口虚拟化的大型数据集（`useRowVirtualizer`、`useWindowRowVirtualizer`）。
- 列排序、调整大小、重排（`ColumnReorderingProvider`）、固定以及用户自定义列设置（`TableSettings`）。
- 行选择（单选/多选、范围选择）以及带有可展开单元格的树形/分组行。

### 何时避免使用

- 具有少量行且没有高级功能的简单静态表格 — 来自 [`@gravity-ui/uikit`](https://github.com/gravity-ui/uikit) 的 uikit 内置 `Table` 更轻量。
- 非表格列表 — 使用来自 [`@gravity-ui/uikit`](https://github.com/gravity-ui/uikit) 的 `List`。
- 电子表格风格的内联单元格编辑 — 此网格侧重于读取/显示，而非可编辑的电子表格。

### 常见陷阱

- **您使用 `useTable` 构建表格，然后渲染 `<Table table={table} />`。** 主要 prop 是 `table`（实例），而不是直接在 `<Table>` 上的 `data`/`columns`；将 `data` 和 `columns` 传递给 `useTable`。
- **类型来自 `@gravity-ui/table/tanstack` 子路径。** 从 `@gravity-ui/table/tanstack` 导入 `ColumnDef`、`RowSelectionState`、`SortingState` 等，而不是从包的根目录导入。
- **排序需要一个访问器。** 列必须具有 `accessorKey`/`accessorFn` 才能使排序生效；设置 `enableSorting` 并提供 `getRowId`。
- **React 19 + React Compiler 可能会跳过重新渲染。** 这是上游 TanStack Table 的问题 — 在组件中添加 `'use no memo'` 指令或 memoize `data`。
- **范围选择在嵌套行中会中断。** 当表格具有分组/嵌套行时，范围选择是未定义行为；使用 `useRowSelectionFixedHandler` 来正确处理分组情况下的父复选框状态。