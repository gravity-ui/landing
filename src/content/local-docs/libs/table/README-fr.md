# @gravity-ui/table &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/table)](https://www.npmjs.com/package/@gravity-ui/table) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/table/.github/workflows/ci.yml?label=CI&logo=github)](https://github.com/gravity-ui/table/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/table/)

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

Deux composants `Table` sont disponibles :

- `BaseTable` : un composant avec uniquement les styles de base ;
- `Table` : un composant avec les styles basés sur Gravity UI.

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

Pour utiliser le regroupement avec la sélection, utilisez le hook `useRowSelectionFixedHandler`. Sans lui, l'état de la case à cocher de la ligne parente sera incorrect. https://github.com/TanStack/table/issues/4878

### Colonne de sélection personnalisée par plage

Le hook `useToggleRangeSelectionHandler` renvoie un gestionnaire de changement qui écoute les événements Shift+clic et effectue une sélection de lignes par plage. Il doit recevoir une instance de `CellContext` pour avoir accès aux états internes de la table et de la ligne.

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
  // ...autres colonnes
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

Il existe également un composant `RangedSelectionCheckbox` qui utilise le hook en interne et accepte une instance de `CellContext` comme prop. Ce composant offre un raccourci pour ajouter la fonctionnalité de sélection par plage aux colonnes de sélection personnalisées.

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

Par défaut, la colonne de sélection générée avec `selectionColumn` inclut la fonctionnalité de sélection par plage.

```tsx
import {selectionColumn} from '@gravity-ui/table';
import type {ColumnDef} from '@gravity-ui/table/tanstack';

const columns: ColumnDef<Person>[] = [
  selectionColumn as ColumnDef<Person>,
  // ...autres colonnes
];
```

**Remarque** : Si la table contient des lignes imbriquées, la sélection par plage ne fonctionnera pas. À l'heure actuelle, cela est considéré comme un comportement indéfini.

### Tri

Apprenez-en davantage sur les propriétés des colonnes dans la documentation de react-table [ici](https://tanstack.com/table/v8/docs/guide/sorting).

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

  // Votre colonne DOIT avoir accessorFn pour que le tri soit activé

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

Pour utiliser le groupement avec la sélection, utilisez le hook `useRowSelectionFixedHandler`. Sans cela, l'état de la case à cocher de la ligne parente sera incorrect. https://github.com/TanStack/table/issues/4878

Pour activer les styles d'imbrication, passez `withNestingStyles = true` dans la configuration de la colonne.

Les indicateurs d'imbrication peuvent être désactivés en passant `showTreeDepthIndicators = false`.

Pour ajouter un contrôle permettant d'étendre/réduire les lignes, enveloppez le contenu de la cellule avec le composant `TreeExpandableCell` ou avec votre composant personnalisé similaire :

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

  return (
    <ReorderingProvider table={table} onReorder={handleReorder}>
      <Table table={table} />
    </ReorderingProvider>
  );
};
```

### Réorganisation des colonnes

Enveloppez le tableau avec `ColumnReorderingProvider` pour activer la réorganisation des colonnes par glisser-déposer de leurs en-têtes.

```tsx
import {ColumnReorderingProvider} from '@gravity-ui/table';

const columns: ColumnDef<Person>[] = [
  {accessorKey: 'name', header: 'Nom', size: 100},
  {accessorKey: 'age', header: 'Âge', size: 100},
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

Si vous contrôlez vous-même `columnOrder` (par exemple, pour le rendre persistant), passez `onReorder` et appliquez l'ordre résultant :

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

API CSS :

| Variable CSS                                 | Défaut                        | Description                      |
| -------------------------------------------- | ----------------------------- | -------------------------------- |
| `--gt-table-reordering-insertion-line-color` | `#4d8bff`                     | Couleur de la ligne d'insertion |
| `--gt-table-reordering-insertion-line-width` | `2px`                         | Largeur de la ligne d'insertion |
| `--gt-table-reordering-dragged-opacity`      | `0.4`                         | Opacité de la colonne déplacée   |
| `--gt-table-drag-overlay-background`         | `#fff`                        | Arrière-plan de l'aperçu de glisser |
| `--gt-table-drag-overlay-shadow`             | `0 3px 12px rgba(0,0,0,0.15)` | Ombre de l'aperçu de glisser     |
| `--gt-table-drag-overlay-border-radius`      | `6px`                         | Rayon des coins de l'aperçu de glisser |

Pour interdire le réordonnancement d'une colonne spécifique, définissez `enableColumnReordering: false` dans sa définition de colonne. Les colonnes de type "placeholder" (regroupées) ne sont pas déplaçables. Utilisez `activationDistance` (par défaut `8`) pour ajuster la distance que le pointeur doit parcourir avant qu'un glisser-déposer ne commence, ce qui permet aux clics sur les en-têtes (comme le tri) de fonctionner.

Les colonnes épinglées peuvent également être réordonnées, mais uniquement entre elles : une colonne peut être déplacée au sein du groupe épinglé à gauche, du groupe épinglé à droite, ou du groupe central (non épinglé) — elle ne franchit jamais une limite d'épinglage lors du glisser-déposer.

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

Pendant le glisser-déposer :

- un aperçu flottant de la colonne (son en-tête plus les premières lignes) suit le pointeur dans une superposition de glisser-déposer ;
- la colonne déplacée devient semi-transparente ;
- une ligne d'insertion bleue est dessinée à l'endroit où la colonne sera déposée ;

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

### Virtualisation

Utilisez cette option si vous souhaitez utiliser le conteneur de la grille comme élément de défilement (si vous souhaitez utiliser la fenêtre, consultez la section de virtualisation de fenêtre). Assurez-vous de définir une hauteur fixe sur le conteneur, sinon la virtualisation ne fonctionnera pas.

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

Si vous utilisez la virtualisation avec la fonctionnalité de réordonnancement, vous devez également passer l'option `rangeExtractor` :

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

### Virtualisation de fenêtre

Utilisez cette option si vous souhaitez utiliser la fenêtre comme élément de défilement

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
    header: ({table}) => <TableSettings table={table} />,
    meta: {
      hideInSettings: false, // Optionnel. Permet de masquer cette colonne dans le popover des paramètres
      titleInSettings: 'ReactNode', // Optionnel. Remplace le champ header pour le popover des paramètres (si vous avez besoin d'un contenu différent pour l'en-tête et le popover des paramètres)
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

Apprenez-en davantage sur les propriétés de redimensionnement des colonnes et du tableau dans la [documentation](https://tanstack.com/table/v8/docs/api/features/column-sizing) de react-table.

## Problèmes connus et compatibilité

### Compatibilité React 19 + React Compiler

**⚠️ Problème connu :** Il existe un problème de compatibilité connu avec React 19 et React Compiler lors de l'utilisation de `@gravity-ui/table` (qui est basé sur TanStack Table). Le tableau peut ne pas se réafficher lorsque les données changent. Voir le [problème #5567 de TanStack Table](https://github.com/TanStack/table/issues/5567) pour plus de détails.

**Solution de contournement :**

Si vous utilisez React 19 avec React Compiler et rencontrez des problèmes de réaffichage du tableau, vous pouvez utiliser la directive `'use no memo'` dans le code de votre composant :

```tsx
import React from 'react';
import {Table, useTable} from '@gravity-ui/table';
import type {ColumnDef} from '@gravity-ui/table/tanstack';

function MyTable() {
  'use no memo'; // Désactive la mémoïsation de React Compiler pour ce composant

  const [data, setData] = React.useState<Person[]>([]);

  const table = useTable({
    data,
    columns,
  });

  return <Table table={table} />;
}
```

**Solution alternative :**

Vous pouvez également mémoïser explicitement l'instance du tableau ou les données pour garantir des réaffichages corrects :

```tsx
import React from 'react';
import {Table, useTable} from '@gravity-ui/table';
import type {ColumnDef} from '@gravity-ui/table/tanstack';

function MyTable() {
  const [data, setData] = React.useState<Person[]>([]);

  // Mémoïse explicitement les données pour garantir les réaffichages
  const memoizedData = React.useMemo(() => data, [data]);

  const table = useTable({
    data: memoizedData,
    columns,
  });

  return <Table table={table} />;
}
```

**Remarque :** Ce problème concerne la bibliothèque sous-jacente TanStack Table et devra y être corrigé. Les solutions de contournement ci-dessus devraient aider en attendant qu'un correctif soit disponible.

## Licence

Distribué sous la licence MIT. Voir [LICENSE](LICENSE) pour les détails.

## Pour les agents IA

Une grille de données sans tête, alimentée par TanStack-Table, pour les applications Gravity UI — utilisez-la pour des tableaux triables, sélectionnables, groupables, réorganisables et virtualisés au lieu de composer du balisage brut par-dessus le `Table` de base d'uikit.

### Quand l'utiliser

- Grands ensembles de données nécessitant une virtualisation de ligne ou de fenêtre (`useRowVirtualizer`, `useWindowRowVirtualizer`).
- Tri, redimensionnement, réorganisation des colonnes (`ColumnReorderingProvider`), épinglage et paramètres de colonnes par utilisateur (`TableSettings`).
- Sélection de lignes (simple/multiple, étendue) et lignes arborescentes/groupées avec des cellules extensibles.

### Quand ne pas l'utiliser

- Un tableau simple et statique avec une poignée de lignes et aucune fonctionnalité avancée — le `Table` intégré d'uikit de [`@gravity-ui/uikit`](https://github.com/gravity-ui/uikit) est plus léger.
- Une liste non tabulaire — utilisez `List` de [`@gravity-ui/uikit`](https://github.com/gravity-ui/uikit).
- Édition de cellules en ligne de style tableur — cette grille est axée sur la lecture/l'affichage, pas sur un tableur modifiable.

### Pièges courants

- **Vous construisez le tableau avec `useTable`, puis vous affichez `<Table table={table} />`.** La prop principale est `table` (l'instance), pas `data`/`columns` directement sur `<Table>`; passez `data` et `columns` à `useTable`.
- **Les types proviennent du sous-chemin `@gravity-ui/table/tanstack`.** Importez `ColumnDef`, `RowSelectionState`, `SortingState`, etc. depuis `@gravity-ui/table/tanstack`, pas depuis la racine du package.
- **Le tri nécessite un accesseur.** Une colonne doit avoir `accessorKey`/`accessorFn` pour que le tri fonctionne ; définissez `enableSorting` et fournissez `getRowId`.
- **React 19 + React Compiler peut ignorer les réaffichages.** Il s'agit d'un problème en amont de TanStack Table — ajoutez la directive `'use no memo'` au composant ou mémoïsez `data`.
- **La sélection d'étendue échoue avec les lignes imbriquées.** Le comportement de la sélection d'étendue est indéfini lorsque le tableau a des lignes groupées/imbriquées ; utilisez `useRowSelectionFixedHandler` pour un état de case à cocher parent correct avec le regroupement.