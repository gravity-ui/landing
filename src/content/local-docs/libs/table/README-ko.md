# @gravity-ui/table &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/table)](https://www.npmjs.com/package/@gravity-ui/table) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/table/.github/workflows/ci.yml?label=CI&logo=github)](https://github.com/gravity-ui/table/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/table/)

## 설치

```shell
npm install --save @gravity-ui/table
```

## 사용법

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
  {accessorKey: 'name', header: '이름', size: 100},
  {accessorKey: 'age', header: '나이', size: 100},
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

## 컴포넌트

두 가지 Table 컴포넌트를 사용할 수 있습니다.

- `BaseTable` - 기본적인 스타일만 적용된 컴포넌트입니다.
- `Table` - Gravity UI 기반 스타일이 적용된 컴포넌트입니다.

### 행 선택

```tsx
import {selectionColumn} from '@gravity-ui/table';
import type {RowSelectionState} from '@gravity-ui/table/tanstack';

const columns: ColumnDef<Person>[] = [
  selectionColumn as ColumnDef<Person>,
  // ...다른 컬럼들
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

### 정렬

react-table [문서](https://tanstack.com/table/v8/docs/guide/sorting)에서 컬럼 속성에 대해 알아보세요.

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

  // 정렬을 활성화하려면 컬럼에 accessorFn이 반드시 있어야 합니다.

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

요소를 수동으로 정렬하려면 `manualSorting` 속성을 전달하세요.

```tsx
const table = useTable({
  // ...
  manualSorting: true,
});
```

### 그룹화

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
  {accessorKey: 'name', header: '이름', size: 200},
  {accessorKey: 'age', header: '나이', size: 100},
];

const data: Item[] = [
  {
    id: 'friends',
    name: '친구들',
    items: [
      {id: 'nick', name: 'Nick', age: 25},
      {id: 'tom', name: 'Tom', age: 21},
    ],
  },
  {
    id: 'relatives',
    name: '친척들',
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

중첩 스타일을 활성화하려면 컬럼 설정에서 `withNestingStyles = true`를 전달하세요.

중첩 표시기는 `showTreeDepthIndicators = false`를 전달하여 비활성화할 수 있습니다.

행을 확장/축소하는 컨트롤을 추가하려면 셀 내용을 `TreeExpandableCell` 컴포넌트 또는 유사한 사용자 정의 컴포넌트로 감싸세요.

```tsx
import {TreeExpandableCell} from '@gravity-ui/table';

const columns: ColumnDef<Item>[] = [
  {
    accessorKey: 'name',
    header: '이름',
    size: 200,
    showTreeDepthIndicators: false,
    withNestingStyles: true,
    cell: ({row, info}) => (
      <TreeExpandableCell row={row}>{info.getValue<string>()}</TreeExpandableCell>
    ),
  },
  // ...다른 컬럼들
];
```

### 재정렬

```tsx
import type {ReorderingProviderProps} from '@gravity-ui/table';
import {dragHandleColumn, ReorderingProvider} from '@gravity-ui/table';

const columns: ColumnDef<Person>[] = [
  dragHandleColumn,
  // ...다른 컬럼들
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
```

```html
<p>
  <a href="/@gravity-ui/table/examples/virtualization">Virtualization</a>
  <a href="/@gravity-ui/table/examples/window-virtualization">Window virtualization</a>
  <a href="/@gravity-ui/table/examples/resizing">Resizing</a>
  <a href="/@gravity-ui/table/examples/column-settings">Column settings</a>
</p>
```

```tsx
import { ReorderingProvider, useTable } from '@gravity-ui/table';
import React from 'react';

// ... other imports

const TableWithReordering = ({ table, onReorder }) => {
  return (
    <ReorderingProvider table={table} onReorder={onReorder}>
      <Table table={table} />
    </ReorderingProvider>
  );
};
```

### 가상화 (Virtualization)

그리드 컨테이너를 스크롤 요소로 사용하고 싶을 때 사용합니다 (창을 스크롤 요소로 사용하려면 창 가상화 섹션을 참조하세요). 컨테이너에 고정된 높이를 설정해야 합니다. 그렇지 않으면 가상화가 작동하지 않습니다.

```tsx
import { useRowVirtualizer } from '@gravity-ui/table';

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
    <div ref={containerRef} style={{ height: '500px', overflow: 'auto' }}>
      <Table table={table} rowVirtualizer={rowVirtualizer} />
    </div>
  );
};
```

재정렬 기능과 함께 가상화를 사용하는 경우 `rangeExtractor` 옵션도 전달해야 합니다.

```tsx
import { getVirtualRowRangeExtractor } from '@gravity-ui/table';

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

### 창 가상화 (Window Virtualization)

창을 스크롤 요소로 사용하고 싶을 때 사용합니다.

```tsx
import { useWindowRowVirtualizer } from '@gravity-ui/table';

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

### 크기 조절 (Resizing)

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

### 열 설정 (Column Settings)

```tsx
const columns: ColumnDef<Person>[] = [
  // ...other columns
  {
    id: 'settings_column_id',
    header: ({ table }) => <TableSettings table={table} />,
    meta: {
      hideInSettings: false, // 선택 사항. 설정 팝오버에서 이 열을 숨길 수 있습니다.
      titleInSettings: 'ReactNode', // 선택 사항. 설정 팝오버의 헤더 필드를 재정의합니다 (헤더와 설정 팝오버에 다른 콘텐츠가 필요한 경우).
    },
  }, // 또는 getSettingsColumn 함수를 사용할 수 있습니다.
];

const data: Person[] = [
  /* ... */
];

const TableSettingsDemo = () => {
  const [columnVisibility, onColumnVisibilityChange] = React.useState<VisibilityState>({
    // 외부 제어 및 초기 상태용
    column_id: false, // 기본적으로 숨김 처리
  });
  const [columnOrder, onColumnOrderChange] = React.useState<string[]>([
    /* leaf columns ids */
  ]); // 외부 제어 및 초기 상태용

  // useTableSettings 훅을 사용하여 상태, 콜백을 가져오고 설정 적용 콜백을 설정하는 대안:
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

react-table [문서](https://tanstack.com/table/v8/docs/api/features/column-sizing)에서 테이블 및 열 크기 조절 속성에 대해 자세히 알아보세요.