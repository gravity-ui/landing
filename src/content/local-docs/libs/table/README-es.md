# @gravity-ui/table &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/table)](https://www.npmjs.com/package/@gravity-ui/table) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/table/.github/workflows/ci.yml?label=CI&logo=github)](https://github.com/gravity-ui/table/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/table/)

## Instalación

```shell
npm install --save @gravity-ui/table
```

## Uso

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

## Componentes

Hay dos componentes de Tabla que puedes usar:

- `BaseTable` - un componente con solo estilos básicos;
- `Table` - un componente con estilos basados en Gravity UI.

### Selección de filas

```tsx
import {selectionColumn} from '@gravity-ui/table';
import type {RowSelectionState} from '@gravity-ui/table/tanstack';

const columns: ColumnDef<Person>[] = [
  selectionColumn as ColumnDef<Person>,
  // ...otras columnas
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

### Ordenación

Aprende sobre las propiedades de columna en la [documentación](https://tanstack.com/table/v8/docs/guide/sorting) de react-table

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

Si quieres ordenar los elementos manualmente, pasa la propiedad `manualSorting`:

```tsx
const table = useTable({
  // ...
  manualSorting: true,
});
```

### Agrupación

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

### Reordenamiento

```tsx
import type {ReorderingProviderProps} from '@gravity-ui/table';
import {dragHandleColumn, ReorderingProvider} from '@gravity-ui/table';

const columns: ColumnDef<Person>[] = [
  dragHandleColumn,
  // ...otras columnas
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

### Virtualización

Úsalo si quieres usar el contenedor de cuadrícula como elemento de desplazamiento (si quieres usar la ventana, consulta la sección de virtualización de ventana).

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

Si usas virtualización con la función de reordenamiento, también necesitas pasar la opción `rangeExtractor`:

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

### Virtualización de ventana

Úsalo si quieres usar la ventana como elemento de desplazamiento

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

### Redimensionamiento

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

### Configuración de columnas

```tsx
const columns: ColumnDef<Person>[] = [
  // ...otras columnas
  {
    id: 'settings_column_id',
    header: ({table}) => <TableSettings table={table} />,
    meta: {
      hideInSettings: false, // Opcional. Permite ocultar esta columna en el popover de configuración
      titleInSettings: 'ReactNode', // Opcional. Anula el campo de encabezado para el popover de configuración (si necesitas contenido diferente para el encabezado y el popover de configuración)
    },
  }, // o puedes usar la función getSettingsColumn
];

const data: Person[] = [
  /* ... */
];

const TableSettingsDemo = () => {
  const [columnVisibility, onColumnVisibilityChange] = React.useState<VisibilityState>({
    // para control externo y estado inicial
    column_id: false, // para ocultar por defecto
  });
  const [columnOrder, onColumnOrderChange] = React.useState<string[]>([
    /* ids de columnas hoja */
  ]); // para control externo y estado inicial

  // Variante alternativa para obtener estado, callbacks y establecer callbacks al aplicar configuración - usando el hook useTableSettings:
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

Aprende más sobre las propiedades de la tabla y el redimensionamiento de columnas en la [documentación](https://tanstack.com/table/v8/docs/api/features/column-sizing) de react-table
