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

### 组件

您可以使用两个 Table 组件：

- `BaseTable` - 仅包含基本样式的组件；
- `Table` - 包含基于 Gravity UI 样式的组件。

#### 行选择

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

要使用分组和选择功能，请使用 `useRowSelectionFixedHandler` hook。否则，父行复选框的状态将不正确。https://github.com/TanStack/table/issues/4878

#### 自定义范围选择列

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

还有一个 `RangedSelectionCheckbox` 组件，它内部使用 hook 并接受 `CellContext` 实例作为 prop。此组件为向自定义选择列添加范围选择功能提供了快捷方式。

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

#### 排序

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

  // 要启用排序，您的列必须具有 accessorFn

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

如果您想手动对元素进行排序，请传递 `manualSorting` 属性：

```tsx
const table = useTable({
  // ...
  manualSorting: true,
});
```

#### 分组

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

#### 重新排序

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

#### 无拖动句柄的重新排序

设置 `dragWithoutHandle` 以使用整行作为拖动激活器，并从列定义中省略 `dragHandleColumn`：

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

指针必须移动 8 像素后才能开始拖动，因此常规的行和控件点击仍然可以正常工作。要排除行中的自定义部分以开始拖动，请在其 `onPointerDown` 处理程序中调用 `preventDefault()`。

`ReorderingProvider` 默认启用 dnd-kit 的垂直自动滚动。当应用程序提供自己的拖动自动滚动实现时，请传递 `autoScroll={false}`；同时运行两者可能会导致冲突的滚动写入。

自定义拖动句柄应从 `DraggableRowContext` 读取 `attributes`、`listeners` 和 `setActivatorNodeRef`，并将它们附加到句柄元素。这会重用行的 DnD 注册。不要对同一行 ID 重复调用 `useSortable`：由虚拟化稍后挂载的句柄将替换行注册的 DOM 节点。

#### 键盘重新排序和可访问性

`ReorderingProvider` 支持键盘行拖动。
聚焦拖动句柄，按空格键或回车键拾取行，使用箭头键移动它，然后按空格键或回车键放下它。按 Escape 键取消移动。
键盘拖动仅适用于行；列标题的键盘交互保持不变。

使用 `accessibility` 来自定义 dnd-kit 的屏幕阅读器说明、公告、公告容器以及键盘和指针拖动的焦点恢复。
当行和列提供程序嵌套时，它们共享相同的 DnD 上下文和可访问性设置；提供程序的顺序无关紧要。

```tsx
<ReorderingProvider
  table={table}
  onReorder={handleReorder}
  accessibility={{
    screenReaderInstructions: {
      draggable:
        'Press Space to pick up a row, arrow keys to move, Enter to drop, or Escape to cancel.',
    },
  }}
>
  <Table table={table} />
</ReorderingProvider>
```

#### 列重新排序

用 `ColumnReorderingProvider` 包裹表格，以启用通过其标题进行列的拖放重新排序。

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

### 行和列的重新排序

将 `ColumnReorderingProvider` 和 `ReorderingProvider` 嵌套起来，即可同时启用两种拖拽轴。Provider 的顺序无关紧要——它们在内部共享一个 dnd-kit 上下文。

```tsx
import type {ColumnReorderingProviderProps, ReorderingProviderProps} from '@gravity-ui/table';
import {ColumnReorderingProvider, ReorderingProvider, dragHandleColumn} from '@gravity-ui/table';

const columns: ColumnDef<Person>[] = [
  dragHandleColumn,
  {accessorKey: 'name', header: 'Name'},
  {accessorKey: 'age', header: 'Age'},
];

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
    // 更新数据数组
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

如果您自己控制 `columnOrder`（例如，用于持久化），请传递 `onReorder` 并应用结果顺序：

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
| ---------------------------------------- | ----------------------------- | ------------------------- |
| `--gt-table-reordering-insertion-line-color` | `#4d8bff`                     | 插入线颜色                |
| `--gt-table-reordering-insertion-line-width` | `2px`                         | 插入线宽度                |
| `--gt-table-reordering-dragged-opacity`      | `0.4`                         | 被拖拽列的透明度          |
| `--gt-table-drag-overlay-background`         | `#fff`                        | 拖拽预览背景              |
| `--gt-table-drag-overlay-shadow`             | `0 3px 12px rgba(0,0,0,0.15)` | 拖拽预览阴影              |
| `--gt-table-drag-overlay-border-radius`      | `6px`                         | 拖拽预览圆角              |

要禁止重新排序特定列，请在其列定义中设置 `enableColumnReordering: false`。占位符（分组）列不可拖拽。使用 `activationDistance`（默认值为 `8`）来调整指针在开始拖拽前必须移动的距离，这可以确保表头点击（如排序）功能正常工作。

固定列也可以重新排序，但仅限于它们各自的组内：列可以在左固定组、右固定组或中心（未固定）组内移动——拖拽时它永远不会跨越固定边界。

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

拖拽时：

- 列的浮动预览（其表头加上前几行）会跟随指针在一个拖拽预览框中显示；
- 被拖拽的列会变得半透明；
- 会绘制一条蓝色的插入线，指示列将要被放置的位置；

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

#### 虚拟化

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

对于必须在连续双向滚动期间保持覆盖的表格，请启用自适应
直接 DOM 模式并使用稳定的语义键。相同的键必须在不可变的重新排序或树重父化之前和之后标识同一行：

```tsx
import {getColumnAwareRowOverscan} from '@gravity-ui/table';

const rows = table.getRowModel().rows;
const columnCount = table.getVisibleLeafColumns().length;

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
  overscan: getColumnAwareRowOverscan(columnCount),
});
```

`adaptiveFlushSync` 会保持一个预热的挂载范围，并仅同步填充未覆盖的可见范围。`directDomUpdates` 允许虚拟化器在每次滚动通知时更新行位置和主体大小，而无需进行 React 渲染。对于表格行，请使用 `position`，除非周围的布局需要 `transform`。保持 `getRowId` 和 `getItemKey` 稳定，并在展开、折叠、重新排序或重新父化行后，从当前扁平化的行模型设置 `count`。任意自定义的 `rangeExtractor` 仍然是权威的，并会禁用自适应窗口规划。

`getColumnAwareRowOverscan(columnCount, options?)` 会随着列数的增加而减少基础行的 overscan。默认情况下，它将 240 个单元格的预算除以列数，向下取整，并将结果限制在 4-24 行之间。使用 `table.getVisibleLeafColumns().length` 来排除隐藏列并包含固定列。该辅助函数同时适用于 `useRowVirtualizer` 和 `useWindowRowVirtualizer`；您仍然可以传递一个显式的数字 `overscan` 作为替代。

根据您的单元格渲染成本调整预算和边界。如果您的应用程序对列进行虚拟化，请将 `renderedColumnLimit` 设置为每行渲染的最大列数，包括固定列；该辅助函数会将提供的列数限制在此值：

```tsx
const overscan = getColumnAwareRowOverscan(table.getVisibleLeafColumns().length, {
  renderedColumnLimit: 16,
  cellBudget: 320,
  minOverscan: 4,
  maxOverscan: 20,
});
```

结果是基础行的 overscan，而不是挂载行或单元格的严格限制。可见行会额外渲染，并且自适应滚动可以扩展挂载范围。所有辅助函数的输入都必须是安全的非负整数，并且 `maxOverscan` 必须至少等于 `minOverscan`；无效值会抛出 `RangeError`。零列在计算中被视为一列。

`BaseTable.canDeferOffscreenCellContent` 是针对非常宽的自适应表格的额外可选功能。仅对被动单元格内容返回 `true`，这些内容延迟挂载不会改变几何形状、焦点、可访问性或应用程序状态。自定义行、分组行、固定单元格以及交互式或有副作用的内容应保持即时挂载。

使用默认的自适应范围提取器时，`BaseTable` 会自动固定活动的拖动行。自定义范围提取器负责保留该行本身。如果您使用非自适应虚拟化器进行重新排序，请保持相同的语义 `getItemKey` 合约，并传递 `rangeExtractor` 选项：

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

#### 窗口虚拟化

如果您想使用窗口作为滚动元素，请使用此功能。

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

#### 调整大小

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

#### 列设置

```tsx
const columns: ColumnDef<Person>[] = [
  // ...other columns
  {
    id: 'settings_column_id',
    header: ({table}) => <TableSettings table={table} />,
    meta: {
      hideInSettings: false, // 可选。允许在设置弹出窗口中隐藏此列
      titleInSettings: 'ReactNode', // 可选。覆盖设置弹出窗口的 header 字段（如果您需要与 header 不同的内容用于设置弹出窗口）
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
    /* leaf columns ids */
  ]); // 用于外部控制和初始状态

  // 另一种获取状态、回调和在设置应用回调上设置的方法 - 使用 useTableSettings hook：
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

在 [react-table 文档](https://tanstack.com/table/v8/docs/api/features/column-sizing) 中了解更多关于表格和列调整大小的属性。

## 已知问题和兼容性

### React 19 + React Compiler 兼容性

**⚠️ 已知问题：** 在使用 `@gravity-ui/table`（基于 TanStack Table 构建）时，存在与 React 19 和 React Compiler 的已知兼容性问题。当数据更改时，表格可能不会重新渲染。有关详细信息，请参阅 [TanStack Table issue #5567](https://github.com/TanStack/table/issues/5567)。

**解决方法：**

如果您正在使用 React 19 和 React Compiler，并且遇到表格重新渲染问题，可以在您的组件代码中使用 `'use no memo'` 指令：

```tsx
import React from 'react';
import {Table, useTable} from '@gravity-ui/table';
import type {ColumnDef} from '@gravity-ui/table/tanstack';

function MyTable() {
  'use no memo'; // 禁用此组件的 React Compiler 记忆化

  const [data, setData] = React.useState<Person[]>([]);

  const table = useTable({
    data,
    columns,
  });
```

```tsx
import React from 'react';
import {Table, useTable} from '@gravity-ui/table';
import type {ColumnDef} from '@gravity-ui/table/tanstack';

function MyTable() {
  const [data, setData] = React.useState<Person[]>([]);

  // Explicitly memoize data to ensure re-renders
  const memoizedData = React.useMemo(() => data, [data]);

  const table = useTable({
    data: memoizedData,
    columns,
  });

  return <Table table={table} />;
}
```

**备选方案：**

您也可以显式地对表格实例或数据进行记忆化，以确保正确的重新渲染：

```tsx
import React from 'react';
import {Table, useTable} from '@gravity-ui/table';
import type {ColumnDef} from '@gravity-ui/table/tanstack';

function MyTable() {
  const [data, setData] = React.useState<Person[]>([]);

  // 显式记忆化数据以确保重新渲染
  const memoizedData = React.useMemo(() => data, [data]);

  const table = useTable({
    data: memoizedData,
    columns,
  });

  return <Table table={table} />;
}
```

**注意：** 此问题存在于底层的 TanStack Table 库中，需要在该库中进行修复。在修复可用之前，上述解决方法应该有所帮助。

## 许可证

MIT 许可证分发。详情请参阅 [LICENSE](LICENSE)。

## 致 AI 代理

为 Gravity UI 应用设计的无头、基于 TanStack Table 的数据网格 — 当您需要可排序、可选择、可分组、可重排和虚拟化的表格时，请使用它，而不是在 uikit 的基本 `Table` 上组合原始标记。

### 何时使用

- 需要行或窗口虚拟化的大型数据集（`useRowVirtualizer`、`useWindowRowVirtualizer`）。
- 列排序、调整大小、重排（`ColumnReorderingProvider`）、固定以及每个用户的列设置（`TableSettings`）。
- 行选择（单选/多选、范围选择）以及带有可展开单元格的树形/分组行。

### 何时避免使用

- 只有少量行且没有高级功能的简单静态表格 — uikit 中内置的 `Table`（来自 [`@gravity-ui/uikit`](https://github.com/gravity-ui/uikit)）更轻量。
- 非表格列表 — 使用 uikit 中的 `List`（来自 [`@gravity-ui/uikit`](https://github.com/gravity-ui/uikit)）。
- 电子表格风格的内联单元格编辑 — 此网格侧重于读取/显示，而不是可编辑的电子表格。

### 常见陷阱

- **您使用 `useTable` 构建表格，然后渲染 `<Table table={table} />`。** 主要 prop 是 `table`（实例），而不是直接在 `<Table>` 上的 `data`/`columns`；将 `data` 和 `columns` 传递给 `useTable`。
- **类型来自 `@gravity-ui/table/tanstack` 子路径。** 从 `@gravity-ui/table/tanstack` 导入 `ColumnDef`、`RowSelectionState`、`SortingState` 等，而不是从包的根目录导入。
- **排序需要一个访问器。** 列必须具有 `accessorKey`/`accessorFn` 才能使排序生效；设置 `enableSorting` 并提供 `getRowId`。
- **React 19 + React Compiler 可能会跳过重新渲染。** 这是上游 TanStack Table 的一个问题 — 向组件添加 `'use no memo'` 指令或记忆化 `data`。
- **范围选择在嵌套行中会中断。** 当表格具有分组/嵌套行时，范围选择是未定义行为；使用 `useRowSelectionFixedHandler` 来正确处理分组情况下的父复选框状态。

## 致 AI 代理的文档

已安装版本的代理可读文档位于 `node_modules/@gravity-ui/table/build/docs/INDEX.md`。