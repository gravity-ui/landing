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

Um Gruppierung mit Auswahl zu verwenden, nutzen Sie den Hook `useRowSelectionFixedHandler`. Ohne diesen ist der Status der übergeordneten Zeilen-Checkboxes falsch. https://github.com/TanStack/table/issues/4878

#### Benutzerdefinierte Bereichsauswahl-Spalte

Der Hook `useToggleRangeSelectionHandler` gibt einen Änderungs-Handler zurück, der auf Shift+Klick-Ereignisse reagiert und eine Bereichsauswahl von Zeilen durchführt. Er benötigt eine `CellContext`-Instanz, um Zugriff auf die internen Zustände der Tabelle und der Zeile zu haben.

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

Erfahren Sie mehr über die Spalteneigenschaften in der react-table [Dokumentation](https://tanstack.com/table/v8/docs/guide/sorting)

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

Um die Gruppierung mit Auswahl zu verwenden, nutzen Sie den Hook `useRowSelectionFixedHandler`. Ohne ihn ist der Kontrollkästchenstatus der übergeordneten Zeile falsch. https://github.com/TanStack/table/issues/4878

Um Verschachtelungsstile zu aktivieren, übergeben Sie `withNestingStyles = true` in der Spaltenkonfiguration.

Verschachtelungsindikatoren können deaktiviert werden, indem `showTreeDepthIndicators = false` übergeben wird.

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

Setzen Sie `dragWithoutHandle`, um die gesamte Zeile als Ziehaktivator zu verwenden und `dragHandleColumn` aus den Spaltendefinitionen wegzulassen:

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

Der Zeiger muss sich um 8 Pixel bewegen, bevor das Ziehen beginnt, sodass normale Zeilen- und Klickaktionen weiterhin funktionieren. Um einen benutzerdefinierten Teil einer Zeile vom Starten eines Ziehvorgangs auszuschließen, rufen Sie `preventDefault()` in seinem `onPointerDown`-Handler auf.

`ReorderingProvider` aktiviert standardmäßig das vertikale automatische Scrollen von dnd-kit. Übergeben Sie `autoScroll={false}`, wenn die Anwendung ihre eigene automatische Scroll-Implementierung für das Ziehen bereitstellt; das gleichzeitige Ausführen beider kann zu konkurrierenden Scroll-Schreibvorgängen führen.

Benutzerdefinierte Ziehpunkte sollten `attributes`, `listeners` und `setActivatorNodeRef` aus dem `DraggableRowContext` lesen und sie dem Ziehpunkt-Element zuweisen. Dies nutzt die DnD-Registrierung der Zeile wieder. Rufen Sie `useSortable` nicht erneut mit derselben Zeilen-ID auf: Ein später von der Virtualisierung montierter Ziehpunkt würde den registrierten DOM-Knoten der Zeile ersetzen.

#### Tastatur-Neuordnung und Barrierefreiheit

`ReorderingProvider` unterstützt das Ziehen von Zeilen per Tastatur.
Fokussieren Sie einen Ziehpunkt, drücken Sie Leertaste oder Eingabetaste, um die Zeile aufzunehmen, verwenden Sie die Pfeiltasten, um sie zu verschieben, und drücken Sie Leertaste oder Eingabetaste, um sie abzulegen. Escape bricht die Verschiebung ab.
Das Ziehen per Tastatur gilt nur für Zeilen; Tastaturinteraktionen mit Spaltenüberschriften bleiben unverändert.

Verwenden Sie `accessibility`, um die Bildschirmsprachausgabe-Anweisungen, Ankündigungen, den Ankündigungscontainer und die Fokuswiederherstellung von dnd-kit für Tastatur- und Zeigerziehen anzupassen.
Wenn Zeilen- und Spaltenanbieter verschachtelt sind, teilen sie sich denselben DnD-Kontext und dieselben Barrierefreiheitseinstellungen; die Reihenfolge der Anbieter spielt keine Rolle.

```tsx
<ReorderingProvider
  table={table}
  onReorder={handleReorder}
  accessibility={{
    screenReaderInstructions: {
      draggable:
        'Drücken Sie Leertaste, um eine Zeile aufzunehmen, Pfeiltasten zum Verschieben, Eingabetaste zum Ablegen oder Escape zum Abbrechen.',
    },
  }}
>
  <Table table={table} />
</ReorderingProvider>
```

#### Spalten-Neuordnung

Umschließen Sie die Tabelle mit `ColumnReorderingProvider`, um die Drag-and-Drop-Neuordnung von Spalten über ihre Header zu aktivieren.

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

### Zeilen- und Spaltenneuanordnung kombiniert

Verschachteln Sie `ColumnReorderingProvider` und `ReorderingProvider`, um beide Drag-Achsen gleichzeitig zu aktivieren. Die Reihenfolge der Provider spielt keine Rolle – sie teilen sich intern einen einzigen dnd-kit-Kontext.

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

Wenn Sie `columnOrder` selbst steuern (z. B. um ihn zu speichern), übergeben Sie `onReorder` und wenden Sie die resultierende Reihenfolge an:

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

Um die Neuanordnung einer bestimmten Spalte zu verbieten, setzen Sie `enableColumnReordering: false` in ihrer Spaltendefinition. Platzhalter- (gruppierte) Spalten sind nicht ziehbar. Verwenden Sie `activationDistance` (Standardwert `8`), um einzustellen, wie weit sich der Zeiger bewegen muss, bevor ein Ziehvorgang beginnt. Dies stellt sicher, dass Header-Klicks (wie Sortierung) weiterhin funktionieren.

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

Verwenden Sie dies, wenn Sie den Grid-Container als Scroll-Element verwenden möchten (wenn Sie das Fenster verwenden möchten, siehe Abschnitt Fenster-Virtualisierung). Stellen Sie sicher, dass Sie dem Container eine feste Höhe zuweisen, andernfalls funktioniert die Virtualisierung nicht.

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

Für Tabellen, die während des kontinuierlichen bidirektionalen Scrollens abgedeckt bleiben müssen, aktivieren Sie den adaptiven
Direct-DOM-Modus und verwenden Sie stabile semantische Schlüssel. Derselbe Schlüssel muss eine Zeile vor und nach einer unveränderlichen Neuanordnung oder einer Baum-Reparentierung identifizieren:

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

`adaptiveFlushSync` hält einen warmen, gemounteten Bereich vor und füllt synchron nur einen nicht abgedeckten sichtbaren Bereich. `directDomUpdates` ermöglicht es dem Virtualizer, Zeilenpositionen und die Körpergröße ohne ein React-Rendering bei jeder Scroll-Benachrichtigung zu aktualisieren. Verwenden Sie `position` für Tabellenzeilen, es sei denn, Transformationen sind durch das umgebende Layout erforderlich. Halten Sie `getRowId` und `getItemKey` stabil und setzen Sie `count` aus dem aktuellen abgeflachten Zeilenmodell nach dem Erweitern, Zusammenklappen, Neuordnen oder Umordnen von Zeilen. Ein beliebiger benutzerdefinierter `rangeExtractor` bleibt maßgeblich und deaktiviert die adaptive Fensterplanung.

`getColumnAwareRowOverscan(columnCount, options?)` reduziert den Basis-Zeilen-Overscan, wenn die Anzahl der Spalten wächst. Standardmäßig teilt er ein Budget von 240 Zellen durch die Spaltenanzahl, rundet ab und begrenzt das Ergebnis auf 4–24 Zeilen. Verwenden Sie `table.getVisibleLeafColumns().length`, um ausgeblendete Spalten auszuschließen und angeheftete Spalten einzuschließen. Der Helfer funktioniert sowohl mit `useRowVirtualizer` als auch mit `useWindowRowVirtualizer`; Sie können stattdessen immer noch einen expliziten numerischen `overscan` übergeben.

Passen Sie das Budget und die Grenzen für Ihre Zellrendering-Kosten an. Wenn Ihre Anwendung Spalten virtualisiert, setzen Sie `renderedColumnLimit` auf die maximale Anzahl von Spalten, die pro Zeile gerendert werden, einschließlich angehefteter Spalten; der Helfer begrenzt die bereitgestellte Spaltenanzahl auf diesen Wert:

```tsx
const overscan = getColumnAwareRowOverscan(table.getVisibleLeafColumns().length, {
  renderedColumnLimit: 16,
  cellBudget: 320,
  minOverscan: 4,
  maxOverscan: 20,
});
```

Das Ergebnis ist ein Basis-Zeilen-Overscan, keine strikte Grenze für gemountete Zeilen oder Zellen. Sichtbare Zeilen werden zusätzlich zum Overscan gerendert, und adaptives Scrollen kann den gemounteten Bereich erweitern. Alle Eingaben des Helfers müssen nicht-negative sichere Ganzzahlen sein, und `maxOverscan` muss mindestens `minOverscan` sein; ungültige Werte lösen einen `RangeError` aus. Null Spalten werden für die Berechnung als eins behandelt.

`BaseTable.canDeferOffscreenCellContent` ist eine zusätzliche Opt-in-Funktion für sehr breite adaptive Tabellen. Geben Sie nur für passive Zellinhalte `true` zurück, deren verzögertes Mounten Geometrie, Fokus, Barrierefreiheit oder Anwendungszustand nicht ändern kann. Benutzerdefinierte Zeilen, Gruppierungszeilen, angeheftete Zellen sowie interaktive oder seitenwirksame Inhalte sollten weiterhin sofort geladen werden.

Mit dem standardmäßigen adaptiven Range-Extractor heftet `BaseTable` die aktive gezogene Zeile automatisch an. Ein benutzerdefinierter Range-Extractor ist dafür verantwortlich, diese Zeile selbst beizubehalten. Wenn Sie das Neuordnen mit einem nicht-adaptiven Virtualizer verwenden, behalten Sie denselben semantischen `getItemKey`-Vertrag bei und übergeben Sie die `rangeExtractor`-Option:

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
      titleInSettings: 'ReactNode', // Optional. Überschreibt das Header-Feld für das Einstellungs-Popover (wenn Sie unterschiedliche Inhalte für Header und Einstellungs-Popover benötigen)
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

  // Alternative Variante, um Zustand, Rückrufe und Setzen von Rückrufen bei Anwenden von Einstellungen zu erhalten - Verwendung des Hooks useTableSettings:
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

Erfahren Sie mehr über die Tabellen- und Spaltengrößenänderungseigenschaften in der [Dokumentation](https://tanstack.com/table/v8/docs/api/features/column-sizing) von react-table.

## Bekannte Probleme und Kompatibilität

### Kompatibilität mit React 19 + React Compiler

**⚠️ Bekanntes Problem:** Es gibt ein bekanntes Kompatibilitätsproblem mit React 19 und React Compiler bei der Verwendung von `@gravity-ui/table` (das auf TanStack Table aufbaut). Die Tabelle wird möglicherweise nicht neu gerendert, wenn sich Daten ändern. Weitere Details finden Sie in [TanStack Table Issue #5567](https://github.com/TanStack/table/issues/5567).

**Workaround:**

Wenn Sie React 19 mit React Compiler verwenden und Probleme mit dem erneuten Rendern der Tabelle haben, können Sie die Direktive `'use no memo'` in Ihrem Komponentencode verwenden:

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
```

```tsx
import React from 'react';
import {Table, useTable} from '@gravity-ui/table';
import type {ColumnDef} from '@gravity-ui/table/tanstack';

function MyTable() {
  const [data, setData] = React.useState<Person[]>([]);

  // Explizites Memoizing der Daten, um Re-Renders sicherzustellen
  const memoizedData = React.useMemo(() => data, [data]);

  const table = useTable({
    data: memoizedData,
    columns,
  });

  return <Table table={table} />;
}
```

**Alternative Lösung:**

Sie können die Tabelleninstanz oder die Daten auch explizit memoizen, um korrekte Re-Renders sicherzustellen:

```tsx
import React from 'react';
import {Table, useTable} from '@gravity-ui/table';
import type {ColumnDef} from '@gravity-ui/table/tanstack';

function MyTable() {
  const [data, setData] = React.useState<Person[]>([]);

  // Explizites Memoizing der Daten, um Re-Renders sicherzustellen
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

Ein Headless-Datengrid für Gravity UI-Anwendungen, das auf TanStack Table basiert. Verwenden Sie es für sortierbare, auswählbare, gruppierbare, neu anordnungsfähige und virtualisierte Tabellen, anstatt rohes Markup über die grundlegende `Table` von uikit zu komponieren.

### Wann verwenden

- Große Datensätze, die Zeilen- oder Fenster-Virtualisierung benötigen (`useRowVirtualizer`, `useWindowRowVirtualizer`).
- Spaltensortierung, -größenänderung, -neuanordnung (`ColumnReorderingProvider`), -fixierung und benutzerspezifische Spalteneinstellungen (`TableSettings`).
- Zeilenauswahl (einzeln/mehrfach, Bereich) und Baum-/Gruppierungszeilen mit erweiterbaren Zellen.

### Wann nicht verwenden

- Eine einfache, statische Tabelle mit wenigen Zeilen und ohne erweiterte Funktionen – die integrierte `Table` von uikit aus [`@gravity-ui/uikit`](https://github.com/gravity-ui/uikit) ist schlanker.
- Eine nicht-tabellarische Liste – verwenden Sie `List` aus [`@gravity-ui/uikit`](https://github.com/gravity-ui/uikit).
- Tabellenkalkulationsähnliche Inline-Zellbearbeitung – dieses Grid ist auf Lesen/Anzeigen fokussiert, keine bearbeitbare Tabellenkalkulation.

### Häufige Fallstricke

- **Sie erstellen die Tabelle mit `useTable` und rendern dann `<Table table={table} />`.** Die Haupt-Prop ist `table` (die Instanz), nicht `data`/`columns` direkt auf `<Table>`; übergeben Sie `data` und `columns` an `useTable`.
- **Typen stammen aus dem Unterpfad `@gravity-ui/table/tanstack`.** Importieren Sie `ColumnDef`, `RowSelectionState`, `SortingState` usw. aus `@gravity-ui/table/tanstack`, nicht aus dem Paket-Root.
- **Sortierung benötigt einen Accessor.** Eine Spalte muss `accessorKey`/`accessorFn` haben, damit die Sortierung funktioniert; setzen Sie `enableSorting` und stellen Sie `getRowId` bereit.
- **React 19 + React Compiler können Re-Renders überspringen.** Dies ist ein Problem in der vorgelagerten TanStack Table-Bibliothek – fügen Sie die Direktive `'use no memo'` zur Komponente hinzu oder memoizen Sie `data`.
- **Bereichsauswahl funktioniert bei verschachtelten Zeilen nicht.** Die Bereichsauswahl ist ein undefiniertes Verhalten, wenn die Tabelle gruppierte/verschachtelte Zeilen hat; verwenden Sie `useRowSelectionFixedHandler` für den korrekten Eltern-Checkbox-Status bei Gruppierung.

## Dokumentation für KI-Agenten

Agentenlesbare Dokumentation für die installierte Version befindet sich in `node_modules/@gravity-ui/table/build/docs/INDEX.md`.