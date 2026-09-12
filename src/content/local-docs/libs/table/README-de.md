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

### Komponenten

Es gibt zwei Tabellenkomponenten, die Sie verwenden können:

- `BaseTable` - eine Komponente mit nur grundlegenden Stilen;
- `Table` - eine Komponente mit Stilen basierend auf Gravity UI.

#### Zeilenauswahl

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

Um Gruppierung mit Auswahl zu verwenden, nutzen Sie den Hook `useRowSelectionFixedHandler`. Ohne diesen Hook ist der Status der übergeordneten Zeilen-Checkboxes falsch. https://github.com/TanStack/table/issues/4878

#### Benutzerdefinierte Bereichsauswahlspalte

Der Hook `useToggleRangeSelectionHandler` gibt einen Änderungs-Handler zurück, der auf Shift+Klick-Ereignisse hört und eine Bereichsauswahl von Zeilen durchführt. Er benötigt eine `CellContext`-Instanz, um Zugriff auf die internen Zustände der Tabelle und der Zeile zu haben.

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
  // ...weitere Spalten
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

Es gibt auch die Komponente `RangedSelectionCheckbox`, die intern den Hook verwendet und eine `CellContext`-Instanz als Prop akzeptiert. Diese Komponente bietet eine Abkürzung, um die Funktionalität der Bereichsauswahl zu benutzerdefinierten Auswahlspalten hinzuzufügen.

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

Standardmäßig enthält die mit `selectionColumn` generierte Auswahlspalte die Funktionalität für die Bereichsauswahl.

```tsx
import {selectionColumn} from '@gravity-ui/table';
import type {ColumnDef} from '@gravity-ui/table/tanstack';

const columns: ColumnDef<Person>[] = [
  selectionColumn as ColumnDef<Person>,
  // ...weitere Spalten
];
```

**Hinweis**: Wenn die Tabelle verschachtelte Zeilen enthält, funktioniert die Bereichsauswahl nicht. Dies wird derzeit als undefiniertes Verhalten betrachtet.

#### Sortierung

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

  // Ihre Spalte MUSS accessorFn für aktivierte Sortierung haben

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

#### Gruppierung

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

Um die Gruppierung mit Auswahl zu verwenden, nutzen Sie den Hook `useRowSelectionFixedHandler`. Ohne diesen ist der Status der Kontrollkästchen der übergeordneten Zeilen falsch. https://github.com/TanStack/table/issues/4878

Um Verschachtelungsstile zu aktivieren, übergeben Sie `withNestingStyles = true` in der Spaltenkonfiguration.

Verschachtelungsindikatoren können durch Übergabe von `showTreeDepthIndicators = false` deaktiviert werden.

Um eine Steuerung zum Erweitern/Zusammenklappen von Zeilen hinzuzufügen, umschließen Sie den Zelleninhalt mit der Komponente `TreeExpandableCell` oder einer ähnlichen benutzerdefinierten Komponente:

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
  // ...andere Spalten
];
```

#### Neuordnung

```tsx
import type {ReorderingProviderProps} from '@gravity-ui/table';
import {dragHandleColumn, ReorderingProvider} from '@gravity-ui/table';

const columns: ColumnDef<Person>[] = [
  dragHandleColumn,
  // ...andere Spalten
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

#### Neuordnung ohne Ziehpunkt

Setzen Sie `dragWithoutHandle`, um die gesamte Zeile als Zieh-Aktivator zu verwenden und `dragHandleColumn` aus den Spaltendefinitionen wegzulassen:

```tsx
const columns: ColumnDef<Person>[] = [
  {accessorKey: 'name', header: 'Name'},
  {accessorKey: 'age', header: 'Alter'},
];

return (
  <ReorderingProvider table={table} dragWithoutHandle onReorder={handleReorder}>
    <Table table={table} />
  </ReorderingProvider>
);
```

Der Zeiger muss sich um 8 Pixel bewegen, bevor das Ziehen beginnt, damit normale Zeilen- und Klickaktionen weiterhin funktionieren. Um einen benutzerdefinierten Teil einer Zeile vom Starten eines Ziehvorgangs auszuschließen, rufen Sie `preventDefault()` in seinem `onPointerDown`-Handler auf.

`ReorderingProvider` aktiviert standardmäßig das vertikale automatische Scrollen von dnd-kit. Übergeben Sie `autoScroll={false}`, wenn die Anwendung ihre eigene Implementierung für das automatische Scrollen beim Ziehen bereitstellt; das gleichzeitige Ausführen beider kann zu konkurrierenden Scroll-Schreibvorgängen führen.

#### Spaltenneuordnung

Umschließen Sie die Tabelle mit `ColumnReorderingProvider`, um die Drag-and-Drop-Neuordnung von Spalten anhand ihrer Header zu aktivieren.

```tsx
import {ColumnReorderingProvider} from '@gravity-ui/table';

const columns: ColumnDef<Person>[] = [
  {accessorKey: 'name', header: 'Name', size: 100},
  {accessorKey: 'age', header: 'Alter', size: 100},
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

### Zeilen- und Spaltenneuordnung zusammen

Verschachteln Sie `ColumnReorderingProvider` und `ReorderingProvider`, um beide Ziehachsen gleichzeitig zu aktivieren. Die Reihenfolge der Provider spielt keine Rolle – sie teilen sich intern einen einzigen dnd-kit-Kontext.

```tsx
import type {ColumnReorderingProviderProps, ReorderingProviderProps} from '@gravity-ui/table';
import {ColumnReorderingProvider, ReorderingProvider, dragHandleColumn} from '@gravity-ui/table';

const columns: ColumnDef<Person>[] = [
  dragHandleColumn,
  {accessorKey: 'name', header: 'Name'},
  {accessorKey: 'age', header: 'Alter'},
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

Wenn Sie die `columnOrder` selbst verwalten (z. B. um sie zu speichern), übergeben Sie `onReorder` und wenden Sie die resultierende Reihenfolge an:

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

| CSS-Variable                                 | Standardwert                  | Beschreibung                      |
| -------------------------------------------- | ----------------------------- | --------------------------------- |
| `--gt-table-reordering-insertion-line-color` | `#4d8bff`                     | Farbe der Einfügungslinie         |
| `--gt-table-reordering-insertion-line-width` | `2px`                         | Breite der Einfügungslinie        |
| `--gt-table-reordering-dragged-opacity`      | `0.4`                         | Deckkraft der gezogenen Spalte    |
| `--gt-table-drag-overlay-background`         | `#fff`                        | Hintergrund der Drag-Vorschau     |
| `--gt-table-drag-overlay-shadow`             | `0 3px 12px rgba(0,0,0,0.15)` | Box-Shadow der Drag-Vorschau      |
| `--gt-table-drag-overlay-border-radius`      | `6px`                         | Radius der Drag-Vorschau          |

Um das Neuanordnen einer bestimmten Spalte zu verbieten, setzen Sie `enableColumnReordering: false` in ihrer Spaltendefinition. Platzhalter- (gruppierte) Spalten sind nicht ziehbar. Verwenden Sie `activationDistance` (Standard `8`), um einzustellen, wie weit sich der Zeiger bewegen muss, bevor ein Ziehvorgang beginnt. Dies stellt sicher, dass Header-Klicks (wie z. B. zum Sortieren) weiterhin funktionieren.

Angepinnte Spalten können ebenfalls neu angeordnet werden, aber nur untereinander: Eine Spalte kann innerhalb der links angepinnten Gruppe, der rechts angepinnten Gruppe oder der mittleren (nicht angepinnten) Gruppe verschoben werden – sie überschreitet beim Ziehen niemals eine Pin-Grenze.

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

Während des Ziehens:

- eine schwebende Vorschau der Spalte (ihr Header plus die ersten Zeilen) folgt dem Zeiger in einer Drag-Vorschau;
- die gezogene Spalte wird halbtransparent;
- eine blaue Einfügungslinie wird dort gezeichnet, wo die Spalte abgelegt wird;

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

#### Virtualisierung

Verwenden Sie dies, wenn Sie den Grid-Container als Scroll-Element verwenden möchten (wenn Sie das Fenster verwenden möchten, siehe Abschnitt Fenster-Virtualisierung). Stellen Sie sicher, dass Sie dem Container eine feste Höhe zuweisen, da die Virtualisierung sonst nicht funktioniert.

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

Für Tabellen, die während kontinuierlichen bidirektionalen Scrollens abgedeckt bleiben müssen, aktivieren Sie den adaptiven
Direct-DOM-Modus und verwenden Sie stabile semantische Schlüssel. Derselbe Schlüssel muss eine Zeile vor und nach einer
unveränderlichen Neuanordnung oder einer Baum-Umordnung identifizieren:

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

`adaptiveFlushSync` hält einen warmen, gemounteten Bereich und füllt synchron nur einen nicht abgedeckten sichtbaren
Bereich. `directDomUpdates` ermöglicht es dem Virtualizer, Zeilenpositionen und die Körpergröße ohne ein React-Rendering
bei jeder Scroll-Benachrichtigung zu aktualisieren. Verwenden Sie `position` für Tabellenzeilen, es sei denn, Transformationen
werden durch das umgebende Layout benötigt. Halten Sie `getRowId` und `getItemKey` stabil und setzen Sie `count` aus dem
aktuellen abgeflachten Zeilenmodell nach dem Erweitern, Zusammenklappen, Neuanordnen oder Umordnen von Zeilen.
Ein beliebiger benutzerdefinierter `rangeExtractor` bleibt maßgebend und deaktiviert die adaptive Fensterplanung.

`BaseTable.canDeferOffscreenCellContent` ist eine zusätzliche Opt-in-Funktion für sehr breite adaptive Tabellen.
Geben Sie `true` nur für passive Zelleninhalte zurück, deren verzögerte Montage Geometrie, Fokus,
Barrierefreiheit oder Anwendungszustand nicht ändern kann. Benutzerdefinierte Zeilen, Gruppenzeilen, angepinnte Zellen
und interaktive oder seitenwirksame Inhalte sollten weiterhin sofort geladen werden.

Mit dem standardmäßigen adaptiven Range Extractor pinnt `BaseTable` die aktive gezogene Zeile automatisch.
Ein benutzerdefinierter Range Extractor ist dafür verantwortlich, diese Zeile selbst beizubehalten. Wenn Sie Reordering mit einem nicht-adaptiven Virtualizer verwenden, behalten Sie dasselbe semantische `getItemKey`-Vertrags bei und übergeben Sie die `rangeExtractor`-Option:

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

#### Fenster-Virtualisierung

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

#### Größenänderung

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

#### Spalteneinstellungen

```tsx
const columns: ColumnDef<Person>[] = [
  // ...andere Spalten
  {
    id: 'settings_column_id',
    header: ({table}) => <TableSettings table={table} />,
    meta: {
      hideInSettings: false, // Optional. Ermöglicht das Ausblenden dieser Spalte aus dem Einstellungs-Popover
      titleInSettings: 'ReactNode', // Optional. Überschreibt das Header-Feld für das Einstellungs-Popover (falls Sie unterschiedliche Inhalte für Header und Einstellungs-Popover benötigen)
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

  // Alternative Variante, um Zustand, Callbacks und Set-Callbacks beim Anwenden von Einstellungen zu erhalten - Verwendung des useTableSettings Hooks:
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

## Bekannte Probleme und Kompatibilität

### Kompatibilität mit React 19 + React Compiler

**⚠️ Bekanntes Problem:** Es gibt ein bekanntes Kompatibilitätsproblem mit React 19 und React Compiler bei der Verwendung von `@gravity-ui/table` (das auf TanStack Table aufbaut). Die Tabelle wird möglicherweise nicht neu gerendert, wenn sich Daten ändern. Weitere Details finden Sie in [TanStack Table Issue #5567](https://github.com/TanStack/table/issues/5567).

**Workaround:**

Wenn Sie React 19 mit React Compiler verwenden und Probleme mit dem Neu-Rendern der Tabelle haben, können Sie die Direktive `'use no memo'` in Ihrem Komponentencode verwenden:

```tsx
import React from 'react';
import {Table, useTable} from '@gravity-ui/table';
import type {ColumnDef} from '@gravity-ui/table/tanstack';

function MyTable() {
  'use no memo'; // Deaktiviert die Memoization des React Compilers für diese Komponente

  const [data, setData] = React.useState<Person[]>([]);

  const table = useTable({
    data,
    columns,
  });

  return <Table table={table} />;
}
```

**Alternative Lösung:**

Sie können auch die Tabelleninstanz oder die Daten explizit memoen, um ordnungsgemäße Neu-Renderings sicherzustellen:

```tsx
import React from 'react';
import {Table, useTable} from '@gravity-ui/table';
import type {ColumnDef} from '@gravity-ui/table/tanstack';

function MyTable() {
  const [data, setData] = React.useState<Person[]>([]);

  // Memoisiert Daten explizit, um Neu-Renderings sicherzustellen
  const memoizedData = React.useMemo(() => data, [data]);

  const table = useTable({
    data: memoizedData,
    columns,
  });

  return <Table table={table} />;
}
```

**Hinweis:** Dieses Problem liegt in der zugrunde liegenden TanStack Table-Bibliothek und muss dort behoben werden. Die oben genannten Workarounds sollten helfen, bis eine Lösung verfügbar ist.

## Lizenz

Verteilt unter der MIT-Lizenz. Details finden Sie in [LICENSE](LICENSE).

## Für KI-Agenten

Ein Headless Data Grid, das auf TanStack Table basiert und für Gravity UI Apps entwickelt wurde – greifen Sie darauf zurück für sortierbare, auswählbare, gruppierbare, neu anordnungsfähige und virtualisierte Tabellen, anstatt rohen Markup über die grundlegende `Table` von uikit zu komponieren.

### Wann verwenden

- Große Datensätze, die Zeilen- oder Fenster-Virtualisierung benötigen (`useRowVirtualizer`, `useWindowRowVirtualizer`).
- Spaltensortierung, Größenänderung, Neuanordnung (`ColumnReorderingProvider`), Fixierung und benutzerspezifische Spalteneinstellungen (`TableSettings`).
- Zeilenauswahl (einzeln/mehrfach, Bereich) und Baum-/Gruppierungszeilen mit erweiterbaren Zellen.

### Wann nicht verwenden

- Eine einfache, statische Tabelle mit wenigen Zeilen und ohne erweiterte Funktionen – die integrierte `Table` von uikit aus [`@gravity-ui/uikit`](https://github.com/gravity-ui/uikit) ist leichter.
- Eine nicht-tabellarische Liste – verwenden Sie `List` aus [`@gravity-ui/uikit`](https://github.com/gravity-ui/uikit).
- Inline-Zellbearbeitung im Tabellenkalkulationsstil – dieses Grid ist auf Lesen/Anzeigen fokussiert, keine bearbeitbare Tabellenkalkulation.

### Häufige Fallstricke

- **Du erstellst die Tabelle mit `useTable` und renderst dann `<Table table={table} />`.** Das Haupt-Prop ist `table` (die Instanz), nicht `data`/`columns` direkt auf `<Table>`; übergib `data` und `columns` an `useTable`.
- **Typen kommen vom `@gravity-ui/table/tanstack` Subpfad.** Importiere `ColumnDef`, `RowSelectionState`, `SortingState` usw. von `@gravity-ui/table/tanstack`, nicht vom Paket-Root.
- **Sortierung benötigt einen Accessor.** Eine Spalte muss `accessorKey`/`accessorFn` haben, damit die Sortierung funktioniert; setze `enableSorting` und gib `getRowId` an.
- **React 19 + React Compiler können Re-Renders überspringen.** Dies ist ein Upstream-Problem von TanStack Table – füge die Direktive `'use no memo'` zur Komponente hinzu oder memoisiere `data`.
- **Bereichsauswahl funktioniert nicht mit verschachtelten Zeilen.** Die Bereichsauswahl ist undefiniertes Verhalten, wenn die Tabelle gruppierte/verschachtelte Zeilen hat; verwende `useRowSelectionFixedHandler` für den korrekten Eltern-Checkbox-Status bei Gruppierung.

## Dokumentation für KI-Agenten

Agentenlesbare Dokumentation für die installierte Version befindet sich in `node_modules/@gravity-ui/table/build/docs/INDEX.md`.