# @gravity-ui/table &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/table)](https://www.npmjs.com/package/@gravity-ui/table) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/table/.github/workflows/ci.yml?label=CI&logo=github)](https://github.com/gravity-ui/table/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/table/)

## Installation

```shell
npm install --save @gravity-ui/table
```

## Verwendung

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
  {accessorKey: 'age', header: 'Alter', size: 100},
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

## Komponenten

Es gibt zwei Tabellenkomponenten, die Sie verwenden können:

- `BaseTable` - eine Komponente mit nur grundlegenden Stilen;
- `Table` - eine Komponente mit Gravity UI-basierten Stilen.

### Zeilenauswahl

```tsx
import {selectionColumn} from '@gravity-ui/table';
import type {RowSelectionState} from '@gravity-ui/table/tanstack';

const columns: ColumnDef<Person>[] = [
  selectionColumn as ColumnDef<Person>,
  // ...weitere Spalten
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

### Sortierung

Erfahren Sie mehr über die Spalteneigenschaften in der [Dokumentation](https://tanstack.com/table/v8/docs/guide/sorting) von react-table.

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

  // Ihre Spalte MUSS eine accessorFn haben, damit die Sortierung aktiviert wird.

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

Wenn Sie die Elemente manuell sortieren möchten, übergeben Sie die Eigenschaft `manualSorting`:

```tsx
const table = useTable({
  // ...
  manualSorting: true,
});
```

### Gruppierung

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
  {accessorKey: 'age', header: 'Alter', size: 100},
];

const data: Item[] = [
  {
    id: 'friends',
    name: 'Freunde',
    items: [
      {id: 'nick', name: 'Nick', age: 25},
      {id: 'tom', name: 'Tom', age: 21},
    ],
  },
  {
    id: 'relatives',
    name: 'Verwandte',
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

Um Verschachtelungsstile zu aktivieren, übergeben Sie `withNestingStyles = true` in der Spaltenkonfiguration.

Nesting-Indikatoren können durch Übergabe von `showTreeDepthIndicators = false` deaktiviert werden.

Um eine Steuerung zum Erweitern/Zusammenklappen von Zeilen hinzuzufügen, umschließen Sie den Zellinhalt mit der Komponente `TreeExpandableCell` oder einer ähnlichen benutzerdefinierten Komponente:

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
  // ...weitere Spalten
];
```

### Neuordnung

```tsx
import type {ReorderingProviderProps} from '@gravity-ui/table';
import {dragHandleColumn, ReorderingProvider} from '@gravity-ui/table';

const columns: ColumnDef<Person>[] = [
  dragHandleColumn,
  // ...weitere Spalten
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
<div class="language-selector">
  <a href="/en/docs/table/features/reordering" class="language-selector__link">English</a>
  <a href="/de/docs/table/features/reordering" class="language-selector__link language-selector__link--active">Deutsch</a>
</div>
```

```tsx
import { ReorderingProvider, useTable, Table, VisibilityState } from '@gravity-ui/table';
import React from 'react';

// ...

const ReorderingExample = () => {
  const table = useTable({
    columns,
    data,
    getRowId: (item) => item.id,
  });

  const handleReorder = (fromIndex: number, toIndex: number) => {
    // Handle reordering logic
  };

  return (
    <ReorderingProvider table={table} onReorder={handleReorder}>
      <Table table={table} />
    </ReorderingProvider>
  );
};
```

### Virtualisierung

Verwenden Sie dies, wenn Sie einen Grid-Container als Scroll-Element verwenden möchten (wenn Sie das Fenster verwenden möchten, siehe Abschnitt Fenster-Virtualisierung). Stellen Sie sicher, dass Sie dem Container eine feste Höhe zuweisen, da die Virtualisierung sonst nicht funktioniert.

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

Wenn Sie Virtualisierung mit der Reordering-Funktion verwenden, müssen Sie auch die Option `rangeExtractor` übergeben:

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

### Fenster-Virtualisierung

Verwenden Sie dies, wenn Sie das Fenster als Scroll-Element verwenden möchten.

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

### Größenänderung

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

### Spalteneinstellungen

```tsx
const columns: ColumnDef<Person>[] = [
  // ...andere Spalten
  {
    id: 'settings_column_id',
    header: ({table}) => <TableSettings table={table} />,
    meta: {
      hideInSettings: false, // Optional. Ermöglicht das Ausblenden dieser Spalte aus dem Einstellungen-Popover
      titleInSettings: 'ReactNode', // Optional. Überschreibt das Header-Feld für das Einstellungen-Popover (wenn Sie unterschiedliche Inhalte für Header und Einstellungen-Popover benötigen)
    },
  }, // oder Sie können die Funktion getSettingsColumn verwenden
];

const data: Person[] = [
  /* ... */
];

const TableSettingsDemo = () => {
  const [columnVisibility, onColumnVisibilityChange] = React.useState<VisibilityState>({
    // für externe Steuerung und Anfangszustand
    column_id: false, // zum standardmäßigen Ausblenden
  });
  const [columnOrder, onColumnOrderChange] = React.useState<string[]>([
    /* leaf columns ids */
  ]); // für externe Steuerung und Anfangszustand

  // Alternative Variante, um Zustand, Callbacks und Einstellungen beim Anwenden von Callbacks zu erhalten - Verwendung des useTableSettings Hooks:
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

Erfahren Sie mehr über die Eigenschaften von Tabellen- und Spaltengrößenänderungen in der [Dokumentation](https://tanstack.com/table/v8/docs/api/features/column-sizing) von react-table.