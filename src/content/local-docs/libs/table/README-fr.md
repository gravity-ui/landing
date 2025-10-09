```html
<p>
  <a href="https://github.com/gravity-ui/table">@gravity-ui/table</a> &middot;
  <a href="https://www.npmjs.com/package/@gravity-ui/table">
    <img src="https://img.shields.io/npm/v/@gravity-ui/table.svg?style=flat" alt="npm package">
  </a>
  <a href="https://github.com/gravity-ui/table/actions/workflows/ci.yml">
    <img src="https://img.shields.io/github/actions/workflow/status/gravity-ui/table/.github/workflows/ci.yml?label=CI&logo=github&style=flat" alt="CI">
  </a>
  <a href="https://preview.gravity-ui.com/table/">
    <img src="https://img.shields.io/badge/Storybook-deployed-ff4685?style=flat" alt="storybook">
  </a>
</p>
```

## Installation

```shell
npm install --save @gravity-ui/table
```

## Utilisation

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
  {accessorKey: 'name', header: 'Nom', size: 100},
  {accessorKey: 'age', header: 'Âge', size: 100},
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

## Composants

Vous pouvez utiliser deux composants `Table` :

- `BaseTable` : un composant avec des styles de base uniquement ;
- `Table` : un composant avec des styles basés sur Gravity UI.

### Sélection de lignes

```tsx
import {selectionColumn} from '@gravity-ui/table';
import type {RowSelectionState} from '@gravity-ui/table/tanstack';

const columns: ColumnDef<Person>[] = [
  selectionColumn as ColumnDef<Person>,
  // ...autres colonnes
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

### Tri

Découvrez les propriétés des colonnes dans la documentation de react-table : [docs](https://tanstack.com/table/v8/docs/guide/sorting)

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

  // Votre colonne DOIT avoir un accessorFn pour que le tri soit activé

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

Si vous souhaitez trier les éléments manuellement, passez la propriété `manualSorting` :

```tsx
const table = useTable({
  // ...
  manualSorting: true,
});
```

### Groupement

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
  {accessorKey: 'name', header: 'Nom', size: 200},
  {accessorKey: 'age', header: 'Âge', size: 100},
];

const data: Item[] = [
  {
    id: 'friends',
    name: 'Amis',
    items: [
      {id: 'nick', name: 'Nick', age: 25},
      {id: 'tom', name: 'Tom', age: 21},
    ],
  },
  {
    id: 'relatives',
    name: 'Famille',
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

Pour activer les styles d'imbrication, passez `withNestingStyles = true` dans la configuration de la colonne.

Les indicateurs d'imbrication peuvent être désactivés en passant `showTreeDepthIndicators = false`.

Pour ajouter un contrôle pour développer/réduire les lignes, enveloppez le contenu de la cellule avec le composant `TreeExpandableCell` ou avec votre composant personnalisé similaire :

```tsx
import {TreeExpandableCell} from '@gravity-ui/table';

const columns: ColumnDef<Item>[] = [
  {
    accessorKey: 'name',
    header: 'Nom',
    size: 200,
    showTreeDepthIndicators: false,
    withNestingStyles: true,
    cell: ({row, info}) => (
      <TreeExpandableCell row={row}>{info.getValue<string>()}</TreeExpandableCell>
    ),
  },
  // ...autres colonnes
];
```

### Réorganisation

```tsx
import type {ReorderingProviderProps} from '@gravity-ui/table';
import {dragHandleColumn, ReorderingProvider} from '@gravity-ui/table';

const columns: ColumnDef<Person>[] = [
  dragHandleColumn,
  // ...autres colonnes
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
  <a href="/fr/docs/table/features/reordering" class="language-selector__link language-selector__link--active">Français</a>
</div>
```

```tsx
import { ReorderingProvider, useTable } from '@gravity-ui/table';
import React from 'react';

// ...

const TableWithReordering = ({ table, onReorder }) => {
  return (
    <ReorderingProvider table={table} onReorder={onReorder}>
      <Table table={table} />
    </ReorderingProvider>
  );
};
```

### Virtualisation

Utilisez cette option si vous souhaitez que le conteneur de la grille soit l'élément de défilement (si vous souhaitez utiliser la fenêtre, consultez la section Virtualisation de fenêtre). Assurez-vous de définir une hauteur fixe sur le conteneur ; sinon, la virtualisation ne fonctionnera pas.

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

Si vous utilisez la virtualisation avec la fonctionnalité de réorganisation, vous devez également passer l'option `rangeExtractor` :

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

### Virtualisation de fenêtre

Utilisez cette option si vous souhaitez que la fenêtre soit l'élément de défilement.

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

### Redimensionnement

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

### Paramètres des colonnes

```tsx
const columns: ColumnDef<Person>[] = [
  // ...autres colonnes
  {
    id: 'settings_column_id',
    header: ({ table }) => <TableSettings table={table} />,
    meta: {
      hideInSettings: false, // Optionnel. Permet de masquer cette colonne dans le popover des paramètres
      titleInSettings: 'ReactNode', // Optionnel. Remplace le champ d'en-tête pour le popover des paramètres (si vous avez besoin d'un contenu différent pour l'en-tête et le popover des paramètres)
    },
  }, // ou vous pouvez utiliser la fonction getSettingsColumn
];

const data: Person[] = [
  /* ... */
];

const TableSettingsDemo = () => {
  const [columnVisibility, onColumnVisibilityChange] = React.useState<VisibilityState>({
    // pour le contrôle externe et l'état initial
    column_id: false, // pour masquer par défaut
  });
  const [columnOrder, onColumnOrderChange] = React.useState<string[]>([
    /* ids des colonnes feuilles */
  ]); // pour le contrôle externe et l'état initial

  // Variante alternative pour obtenir l'état, les callbacks et définir les callbacks d'application des paramètres - en utilisant le hook useTableSettings :
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

Apprenez-en davantage sur le tableau et les propriétés de redimensionnement des colonnes dans la documentation de react-table [docs](https://tanstack.com/table/v8/docs/api/features/column-sizing).