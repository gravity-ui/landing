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
  {accessorKey: 'name', header: 'Nombre', size: 100},
  {accessorKey: 'age', header: 'Edad', size: 100},
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

### Componentes

Hay dos componentes `Table` que puedes usar:

- `BaseTable` - un componente con estilos básicos únicamente;
- `Table` - un componente con estilos basados en Gravity UI.

#### Selección de filas

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

Para usar agrupamiento con selección, utiliza el hook `useRowSelectionFixedHandler`. Sin él, el estado de la casilla de verificación de la fila principal será incorrecto. https://github.com/TanStack/table/issues/4878

#### Columna de selección de rango personalizada

El hook `useToggleRangeSelectionHandler` devuelve un manejador de cambios que escucha los eventos Shift+click y realiza la selección de filas por rango. Necesita que se le pase una instancia de `CellContext` para tener acceso a los estados internos de la tabla y de la fila.

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
  // ...otras columnas
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

También existe el componente `RangedSelectionCheckbox`, que utiliza el hook internamente y acepta una instancia de `CellContext` como prop. Este componente proporciona una forma abreviada de añadir funcionalidad de selección por rango a las columnas de selección personalizadas.

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

Por defecto, la columna de selección generada con `selectionColumn` incluye la funcionalidad de selección por rango.

```tsx
import {selectionColumn} from '@gravity-ui/table';
import type {ColumnDef} from '@gravity-ui/table/tanstack';

const columns: ColumnDef<Person>[] = [
  selectionColumn as ColumnDef<Person>,
  // ...otras columnas
];
```

**Nota**: Si la tabla contiene filas anidadas, la selección por rango no funcionará. En este momento, se considera un comportamiento indefinido.

#### Ordenación

Aprende sobre las propiedades de las columnas en la documentación de react-table [aquí](https://tanstack.com/table/v8/docs/guide/sorting).

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

  // Tu columna DEBE tener accessorFn para que la ordenación esté habilitada

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

#### Agrupación

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
  {accessorKey: 'name', header: 'Nombre', size: 200},
  {accessorKey: 'age', header: 'Edad', size: 100},
];

const data: Item[] = [
  {
    id: 'friends',
    name: 'Amigos',
    items: [
      {id: 'nick', name: 'Nick', age: 25},
      {id: 'tom', name: 'Tom', age: 21},
    ],
  },
  {
    id: 'relatives',
    name: 'Familiares',
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

Para usar la agrupación con selección, utiliza el hook `useRowSelectionFixedHandler`. Sin él, el estado de la casilla de verificación de la fila principal será incorrecto. https://github.com/TanStack/table/issues/4878

Para habilitar los estilos de anidamiento, pasa `withNestingStyles = true` en la configuración de la columna.

Los indicadores de anidamiento se pueden deshabilitar pasando `showTreeDepthIndicators = false`.

Para añadir un control para expandir/colapsar filas, envuelve el contenido de la celda con el componente `TreeExpandableCell` o con tu propio componente similar:

```tsx
import {TreeExpandableCell} from '@gravity-ui/table';

const columns: ColumnDef<Item>[] = [
  {
    accessorKey: 'name',
    header: 'Nombre',
    size: 200,
    showTreeDepthIndicators: false,
    withNestingStyles: true,
    cell: ({row, info}) => (
      <TreeExpandableCell row={row}>{info.getValue<string>()}</TreeExpandableCell>
    ),
  },
  // ...otras columnas
];
```

#### Reordenación

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

#### Reordenación sin manejador de arrastre

Establece `dragWithoutHandle` para usar toda la fila como activador de arrastre y omite `dragHandleColumn` de las definiciones de columna:

```tsx
const columns: ColumnDef<Person>[] = [
  {accessorKey: 'name', header: 'Nombre'},
  {accessorKey: 'age', header: 'Edad'},
];

return (
  <ReorderingProvider table={table} dragWithoutHandle onReorder={handleReorder}>
    <Table table={table} />
  </ReorderingProvider>
);
```

El puntero debe moverse 8 píxeles antes de que comience el arrastre, para que los clics normales en filas y controles sigan funcionando. Para excluir una parte personalizada de una fila de iniciar un arrastre, llama a `preventDefault()` en su manejador `onPointerDown`.

`ReorderingProvider` habilita el desplazamiento automático vertical de dnd-kit por defecto. Pasa `autoScroll={false}` cuando la aplicación proporcione su propia implementación de desplazamiento automático de arrastre; ejecutar ambos a la vez puede producir escrituras de desplazamiento en conflicto.

#### Reordenación de columnas

Envuelve la tabla con `ColumnReorderingProvider` para habilitar la reordenación de columnas mediante arrastrar y soltar en sus encabezados.

```tsx
import {ColumnReorderingProvider} from '@gravity-ui/table';

const columns: ColumnDef<Person>[] = [
  {accessorKey: 'name', header: 'Nombre', size: 100},
  {accessorKey: 'age', header: 'Edad', size: 100},
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

### Reordenación de filas y columnas juntas

Anida `ColumnReorderingProvider` y `ReorderingProvider` para habilitar ambos ejes de arrastre a la vez. El orden de los proveedores no importa; comparten un único contexto dnd-kit internamente.

```tsx
import type {ColumnReorderingProviderProps, ReorderingProviderProps} from '@gravity-ui/table';
import {ColumnReorderingProvider, ReorderingProvider, dragHandleColumn} from '@gravity-ui/table';

const columns: ColumnDef<Person>[] = [
  dragHandleColumn,
  {accessorKey: 'name', header: 'Nombre'},
  {accessorKey: 'age', header: 'Edad'},
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

Si controlas `columnOrder` tú mismo (por ejemplo, para persistirlo), pasa `onReorder` y aplica el orden resultante:

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

API de CSS:

| Variable CSS                                 | Valor predeterminado              | Descripción                      |
| -------------------------------------------- | --------------------------------- | -------------------------------- |
| `--gt-table-reordering-insertion-line-color` | `#4d8bff`                         | Color de la línea de inserción de arrastre |
| `--gt-table-reordering-insertion-line-width` | `2px`                             | Ancho de la línea de inserción de arrastre |
| `--gt-table-reordering-dragged-opacity`      | `0.4`                             | Opacidad de la columna arrastrada |
| `--gt-table-drag-overlay-background`         | `#fff`                            | Fondo de la vista previa de arrastre |
| `--gt-table-drag-overlay-shadow`             | `0 3px 12px rgba(0,0,0,0.15)`     | Sombra del cuadro de vista previa de arrastre |
| `--gt-table-drag-overlay-border-radius`      | `6px`                             | Radio del borde de la vista previa de arrastre |

Para prohibir la reordenación de una columna específica, establece `enableColumnReordering: false` en su definición de columna. Las columnas de marcador de posición (agrupadas) no se pueden arrastrar. Usa `activationDistance` (predeterminado `8`) para ajustar cuánto debe moverse el puntero antes de que comience un arrastre, lo que mantiene funcionando los clics en las cabeceras (como la ordenación).

Las columnas fijadas también se pueden reordenar, pero solo entre sí: una columna se puede mover dentro del grupo fijado a la izquierda, el grupo fijado a la derecha o el grupo central (no fijado); nunca cruza un límite de fijación al arrastrar.

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

Mientras arrastras:

- una vista previa flotante de la columna (su cabecera más las primeras filas) sigue al puntero en una superposición de arrastre;
- la columna arrastrada se vuelve semitransparente;
- se dibuja una línea de inserción azul donde se soltará la columna;

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

#### Virtualización

Úsalo si quieres usar el contenedor de la cuadrícula como elemento de desplazamiento (si quieres usar la ventana, consulta la sección de virtualización de ventana). Asegúrate de establecer una altura fija en el contenedor; de lo contrario, la virtualización no funcionará.

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

Para tablas que deben permanecer cubiertas durante el desplazamiento bidireccional continuo, habilita el modo adaptativo
directo DOM y usa claves semánticas estables. La misma clave debe identificar una fila antes y después de una reordenación inmutable o una reparentalización de árbol:

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

`adaptiveFlushSync` mantiene un rango montado activo y llena de forma sincrónica solo un rango visible no cubierto. `directDomUpdates` permite al virtualizador actualizar las posiciones de las filas y el tamaño del cuerpo sin renderizar React en cada notificación de desplazamiento. Usa `position` para las filas de la tabla, a menos que las transformaciones sean requeridas por el diseño circundante. Mantén `getRowId` y `getItemKey` estables, y establece `count` a partir del modelo de fila aplanado actual después de expandir, colapsar, reordenar o reparentalizar filas. Un `rangeExtractor` personalizado arbitrario sigue siendo autoritativo y deshabilita la planificación adaptativa de ventanas.

`BaseTable.canDeferOffscreenCellContent` es una opción adicional para tablas adaptativas muy anchas.
Devuelve `true` solo para contenido de celda pasivo cuyo montaje retrasado no pueda cambiar la geometría, el foco, la accesibilidad o el estado de la aplicación. Las filas personalizadas, las filas de grupo, las celdas fijadas y el contenido interactivo o con efectos secundarios deben permanecer activos.

Con el extractor de rango adaptativo predeterminado, `BaseTable` fija automáticamente la fila activa arrastrada.
Un extractor de rango personalizado es responsable de retener esa fila en sí. Si utiliza la reordenación con
un virtualizador no adaptativo, mantenga el mismo contrato semántico `getItemKey` y pase la
opción `rangeExtractor`:

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

#### Virtualización de ventana

Úselo si desea utilizar la ventana como elemento de desplazamiento

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

#### Redimensionamiento

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

#### Configuración de columnas

```tsx
const columns: ColumnDef<Person>[] = [
  // ...otras columnas
  {
    id: 'settings_column_id',
    header: ({table}) => <TableSettings table={table} />,
    meta: {
      hideInSettings: false, // Opcional. Permite ocultar esta columna del popover de configuración
      titleInSettings: 'ReactNode', // Opcional. Sobrescribe el campo de encabezado para el popover de configuración (si necesita contenido diferente para el encabezado y el popover de configuración)
    },
  }, // o puede usar la función getSettingsColumn
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

  // Variante alternativa para obtener el estado, las devoluciones de llamada y establecer las devoluciones de llamada al aplicar la configuración - usando el hook useTableSettings:
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

Obtenga más información sobre las propiedades de la tabla y el redimensionamiento de columnas en la documentación de react-table [docs](https://tanstack.com/table/v8/docs/api/features/column-sizing)

## Problemas conocidos y compatibilidad

### Compatibilidad con React 19 + React Compiler

**⚠️ Problema conocido:** Existe un problema de compatibilidad conocido con React 19 y React Compiler al usar `@gravity-ui/table` (que se basa en TanStack Table). La tabla puede no volver a renderizarse cuando los datos cambian. Consulte el [problema #5567 de TanStack Table](https://github.com/TanStack/table/issues/5567) para obtener más detalles.

**Solución:**

Si está utilizando React 19 con React Compiler y experimenta problemas con la re-renderización de la tabla, puede usar la directiva `'use no memo'` en el código de su componente:

```tsx
import React from 'react';
import {Table, useTable} from '@gravity-ui/table';
import type {ColumnDef} from '@gravity-ui/table/tanstack';

function MyTable() {
  'use no memo'; // Deshabilita la memoización de React Compiler para este componente

  const [data, setData] = React.useState<Person[]>([]);

  const table = useTable({
    data,
    columns,
  });

  return <Table table={table} />;
}
```

**Solución alternativa:**

También puede memoizar explícitamente la instancia de la tabla o los datos para garantizar re-renderizaciones adecuadas:

```tsx
import React from 'react';
import {Table, useTable} from '@gravity-ui/table';
import type {ColumnDef} from '@gravity-ui/table/tanstack';

function MyTable() {
  const [data, setData] = React.useState<Person[]>([]);

  // Memoiza explícitamente los datos para garantizar re-renderizaciones
  const memoizedData = React.useMemo(() => data, [data]);

  const table = useTable({
    data: memoizedData,
    columns,
  });

  return <Table table={table} />;
}
```

**Nota:** Este problema está en la biblioteca subyacente TanStack Table y deberá corregirse allí. Las soluciones alternativas anteriores deberían ayudar hasta que haya una corrección disponible.

## Licencia

Distribuido bajo la Licencia MIT. Consulte [LICENSE](LICENSE) para obtener más detalles.

## Para agentes de IA

Una cuadrícula de datos sin cabeza, impulsada por TanStack-Table, para aplicaciones Gravity UI: utilícela para tablas ordenables, seleccionables, agrupables, reordenables y virtualizadas en lugar de componer marcado sin procesar sobre la tabla básica de uikit.

### Cuándo usar

- Grandes conjuntos de datos que necesitan virtualización de filas o ventanas (`useRowVirtualizer`, `useWindowRowVirtualizer`).
- Ordenación de columnas, redimensionamiento, reordenación (`ColumnReorderingProvider`), fijación y configuración de columnas por usuario (`TableSettings`).
- Selección de filas (individual/múltiple, por rango) y filas de árbol/agrupadas con celdas expandibles.

### Cuándo no usar

- Una tabla simple y estática con un puñado de filas y sin funciones avanzadas: la tabla integrada de uikit de [`@gravity-ui/uikit`](https://github.com/gravity-ui/uikit) es más ligera.
- Una lista no tabular: use `List` de [`@gravity-ui/uikit`](https://github.com/gravity-ui/uikit).
- Edición de celdas en línea estilo hoja de cálculo: esta cuadrícula está enfocada en lectura/visualización, no en una hoja de cálculo editable.

### Errores comunes

- **Construyes la tabla con `useTable` y luego renderizas `<Table table={table} />`.** La prop principal es `table` (la instancia), no `data`/`columns` directamente en `<Table>`; pasa `data` y `columns` a `useTable`.
- **Los tipos provienen de la subruta `@gravity-ui/table/tanstack`.** Importa `ColumnDef`, `RowSelectionState`, `SortingState`, etc. desde `@gravity-ui/table/tanstack`, no desde la raíz del paquete.
- **La ordenación necesita un acceso.** Una columna debe tener `accessorKey`/`accessorFn` para que la ordenación funcione; establece `enableSorting` y proporciona `getRowId`.
- **React 19 + React Compiler puede omitir re-renderizados.** Este es un problema de TanStack Table de upstream: añade la directiva `'use no memo'` al componente o memoiza `data`.
- **La selección de rango falla con filas anidadas.** La selección de rango es un comportamiento indefinido cuando la tabla tiene filas agrupadas/anidadas; usa `useRowSelectionFixedHandler` para el estado correcto de la casilla de verificación principal con la agrupación.

## Documentación para agentes de IA

La documentación legible por agentes para la versión instalada se encuentra en `node_modules/@gravity-ui/table/build/docs/INDEX.md`.