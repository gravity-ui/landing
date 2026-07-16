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

### 컴포넌트

두 가지 Table 컴포넌트를 사용할 수 있습니다.

- `BaseTable` - 기본적인 스타일만 적용된 컴포넌트입니다.
- `Table` - Gravity UI 기반 스타일이 적용된 컴포넌트입니다.

#### 행 선택

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

선택 기능과 함께 그룹화를 사용하려면 `useRowSelectionFixedHandler` 훅을 사용하세요. 이 훅 없이는 부모 행의 체크박스 상태가 올바르게 표시되지 않습니다. https://github.com/TanStack/table/issues/4878

#### 사용자 정의 범위 선택 컬럼

`useToggleRangeSelectionHandler` 훅은 Shift+클릭 이벤트를 감지하고 범위 행 선택을 수행하는 변경 핸들러를 반환합니다. 테이블 및 행의 내부 상태에 접근하려면 `CellContext` 인스턴스를 전달해야 합니다.

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
  // ...다른 컬럼들
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

내부적으로 훅을 사용하고 `CellContext` 인스턴스를 prop으로 받는 `RangedSelectionCheckbox` 컴포넌트도 있습니다. 이 컴포넌트는 사용자 정의 선택 컬럼에 범위 선택 기능을 추가하는 바로 가기를 제공합니다.

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

기본적으로 `selectionColumn`으로 생성된 선택 컬럼에는 범위 선택 기능이 포함됩니다.

```tsx
import {selectionColumn} from '@gravity-ui/table';
import type {ColumnDef} from '@gravity-ui/table/tanstack';

const columns: ColumnDef<Person>[] = [
  selectionColumn as ColumnDef<Person>,
  // ...다른 컬럼들
];
```

**참고**: 테이블에 중첩된 행이 포함된 경우 범위 선택이 작동하지 않습니다. 현재 이 동작은 정의되지 않은 것으로 간주됩니다.

#### 정렬

react-table의 컬럼 속성에 대해 알아보세요. [문서](https://tanstack.com/table/v8/docs/guide/sorting)

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

#### 그룹화

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

선택 기능과 함께 그룹화를 사용하려면 `useRowSelectionFixedHandler` 훅을 사용하세요. 이 훅 없이는 상위 행 체크박스의 상태가 올바르지 않게 됩니다. https://github.com/TanStack/table/issues/4878

중첩 스타일을 활성화하려면 컬럼 구성에서 `withNestingStyles = true`를 전달하세요.

트리 깊이 표시기는 `showTreeDepthIndicators = false`를 전달하여 비활성화할 수 있습니다.

행을 확장/축소하는 컨트롤을 추가하려면 셀 내용을 `TreeExpandableCell` 컴포넌트 또는 유사한 사용자 정의 컴포넌트로 감싸세요.

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
  // ...다른 컬럼
];
```

#### 재정렬

```tsx
import type {ReorderingProviderProps} from '@gravity-ui/table';
import {dragHandleColumn, ReorderingProvider} from '@gravity-ui/table';

const columns: ColumnDef<Person>[] = [
  dragHandleColumn,
  // ...다른 컬럼
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

#### 컬럼 재정렬

테이블을 `ColumnReorderingProvider`로 감싸면 헤더를 드래그 앤 드롭하여 컬럼 순서를 재정렬할 수 있습니다.

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

`columnOrder`를 직접 제어하는 경우(예: 영구 저장) `onReorder`를 전달하고 결과 순서를 적용하세요.

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

| CSS 변수                                 | 기본값                       | 설명                      |
| -------------------------------------------- | ----------------------------- | -------------------------------- |
| `--gt-table-reordering-insertion-line-color` | `#4d8bff`                     | 드롭 삽입선의 색상 |
| `--gt-table-reordering-insertion-line-width` | `2px`                         | 드롭 삽입선의 너비 |
| `--gt-table-reordering-dragged-opacity`      | `0.4`                         | 드래그된 열의 투명도    |
| `--gt-table-drag-overlay-background`         | `#fff`                        | 드래그 미리보기 배경          |
| `--gt-table-drag-overlay-shadow`             | `0 3px 12px rgba(0,0,0,0.15)` | 드래그 미리보기 박스 그림자          |
| `--gt-table-drag-overlay-border-radius`      | `6px`                         | 드래그 미리보기 테두리 반경       |

특정 열의 재정렬을 금지하려면 해당 열 정의에서 `enableColumnReordering: false`를 설정하세요. 플레이스홀더(그룹화된) 열은 드래그할 수 없습니다. `activationDistance`(기본값 `8`)를 사용하여 포인터가 드래그가 시작되기 전에 이동해야 하는 거리를 조정하면 헤더 클릭(정렬 등)이 계속 작동합니다.

고정된 열도 재정렬할 수 있지만, 자신들끼리만 가능합니다. 열은 왼쪽 고정 그룹, 오른쪽 고정 그룹 또는 중앙(고정되지 않은) 그룹 내에서 이동할 수 있으며, 드래그 시 고정 경계를 넘지 않습니다.

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

드래그하는 동안:

- 열의 플로팅 미리보기(헤더와 첫 번째 행 포함)가 드래그 오버레이에서 포인터를 따라갑니다.
- 드래그된 열은 반투명해집니다.
- 열이 드롭될 위치에 파란색 삽입선이 그려집니다.

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

#### 가상화

그리드 컨테이너를 스크롤 요소로 사용하고 싶을 때 사용합니다(창을 사용하려면 창 가상화 섹션을 참조하세요). 컨테이너에 고정된 높이를 설정해야 합니다. 그렇지 않으면 가상화가 작동하지 않습니다.

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

재정렬 기능과 함께 가상화를 사용하는 경우 `rangeExtractor` 옵션도 전달해야 합니다.

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

#### 창 가상화

창을 스크롤 요소로 사용하고 싶을 때 사용합니다.

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

#### 크기 조정

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

#### 열 설정

```tsx
const columns: ColumnDef<Person>[] = [
  // ...다른 열
  {
    id: 'settings_column_id',
    header: ({table}) => <TableSettings table={table} />,
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
    /* 리프 열 ID */
  ]); // 외부 제어 및 초기 상태용

  // useTableSettings 훅을 사용하여 상태, 콜백 및 설정 적용 콜백을 가져오는 대안 변형:
  // const {state, callbacks} = useTableSettings({initialVisibility: {}, initialOrder: []})
```

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

react-table의 테이블 및 컬럼 크기 조절 속성에 대해 자세히 알아보세요. [문서](https://tanstack.com/table/v8/docs/api/features/column-sizing)

## 알려진 문제점 및 호환성

### React 19 + React Compiler 호환성

**⚠️ 알려진 문제점:** `@gravity-ui/table`(TanStack Table 기반)을 사용할 때 React 19 및 React Compiler와 호환성 문제가 있습니다. 데이터가 변경되어도 테이블이 다시 렌더링되지 않을 수 있습니다. 자세한 내용은 [TanStack Table 이슈 #5567](https://github.com/TanStack/table/issues/5567)을 참조하세요.

**해결 방법:**

React 19와 React Compiler를 사용 중이며 테이블 다시 렌더링에 문제가 발생하는 경우, 컴포넌트 코드에 `'use no memo'` 지시문을 사용할 수 있습니다.

```tsx
import React from 'react';
import {Table, useTable} from '@gravity-ui/table';
import type {ColumnDef} from '@gravity-ui/table/tanstack';

function MyTable() {
  'use no memo'; // 이 컴포넌트에 대한 React Compiler 메모이제이션 비활성화

  const [data, setData] = React.useState<Person[]>([]);

  const table = useTable({
    data,
    columns,
  });

  return <Table table={table} />;
}
```

**대안 솔루션:**

테이블 인스턴스 또는 데이터를 명시적으로 메모이제이션하여 올바른 다시 렌더링을 보장할 수도 있습니다.

```tsx
import React from 'react';
import {Table, useTable} from '@gravity-ui/table';
import type {ColumnDef} from '@gravity-ui/table/tanstack';

function MyTable() {
  const [data, setData] = React.useState<Person[]>([]);

  // 다시 렌더링을 보장하기 위해 데이터를 명시적으로 메모이제이션
  const memoizedData = React.useMemo(() => data, [data]);

  const table = useTable({
    data: memoizedData,
    columns,
  });

  return <Table table={table} />;
}
```

**참고:** 이 문제는 기본 TanStack Table 라이브러리에 있으며 해당 라이브러리에서 수정되어야 합니다. 위의 해결 방법은 수정이 제공될 때까지 도움이 될 것입니다.

## 라이선스

MIT 라이선스에 따라 배포됩니다. 자세한 내용은 [LICENSE](LICENSE)를 참조하세요.

## AI 에이전트용

Gravity UI 앱을 위한 헤드리스 TanStack-Table 기반 데이터 그리드입니다. uikit의 기본 `Table` 위에 원시 마크업을 구성하는 대신 정렬 가능하고, 선택 가능하며, 그룹화 가능하고, 재정렬 가능하며, 가상화된 테이블이 필요한 경우 이 기능을 사용하세요.

### 언제 사용해야 할까요?

- 행 또는 창 가상화가 필요한 대규모 데이터셋 (`useRowVirtualizer`, `useWindowRowVirtualizer`).
- 컬럼 정렬, 크기 조절, 재정렬 (`ColumnReorderingProvider`), 고정 및 사용자별 컬럼 설정 (`TableSettings`).
- 행 선택(단일/다중, 범위) 및 확장 가능한 셀이 있는 트리/그룹화된 행.

### 언제 사용하지 않아야 할까요?

- 몇 개의 행과 고급 기능이 없는 간단한 정적 테이블 — [`@gravity-ui/uikit`](https://github.com/gravity-ui/uikit)의 uikit 내장 `Table`이 더 가볍습니다.
- 비표 형식 목록 — [`@gravity-ui/uikit`](https://github.com/gravity-ui/uikit)의 `List`를 사용하세요.
- 스프레드시트 스타일의 인라인 셀 편집 — 이 그리드는 편집 가능한 스프레드시트가 아닌 읽기/표시 중심입니다.

### 일반적인 함정

- **`useTable`로 테이블을 빌드한 다음 `<Table table={table} />`를 렌더링합니다.** 주요 prop은 `<Table>`의 `data`/`columns`가 아니라 `table`(인스턴스)입니다. `data`와 `columns`는 `useTable`에 전달하세요.
- **타입은 `@gravity-ui/table/tanstack` 하위 경로에서 가져옵니다.** `ColumnDef`, `RowSelectionState`, `SortingState` 등은 패키지 루트가 아닌 `@gravity-ui/table/tanstack`에서 가져옵니다.
- **정렬에는 accessor가 필요합니다.** 정렬이 작동하려면 컬럼에 `accessorKey`/`accessorFn`이 있어야 합니다. `enableSorting`을 설정하고 `getRowId`를 제공하세요.
- **React 19 + React Compiler는 다시 렌더링을 건너뛸 수 있습니다.** 이는 상위 TanStack Table 문제이므로 컴포넌트에 `'use no memo'` 지시문을 추가하거나 `data`를 메모이제이션하세요.
- **범위 선택이 중첩된 행에서 깨집니다.** 테이블에 그룹화/중첩된 행이 있을 때 범위 선택은 정의되지 않은 동작입니다. 그룹화된 경우 올바른 부모 체크박스 상태를 위해 `useRowSelectionFixedHandler`를 사용하세요.

## AI 에이전트용 문서

설치된 버전에 대한 에이전트 읽기 가능 문서는 `node_modules/@gravity-ui/table/build/docs/INDEX.md`에 있습니다.