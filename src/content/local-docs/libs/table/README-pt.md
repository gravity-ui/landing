# @gravity-ui/table &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/table)](https://www.npmjs.com/package/@gravity-ui/table) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/table/.github/workflows/ci.yml?label=CI&logo=github)](https://github.com/gravity-ui/table/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/table/)

## Instalar

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
  {accessorKey: 'name', header: 'Nome', size: 100},
  {accessorKey: 'age', header: 'Idade', size: 100},
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

Existem dois componentes `Table` que você pode usar:

- `BaseTable` - um componente com estilos básicos apenas;
- `Table` - um componente com estilos baseados no Gravity UI.

### Seleção de Linhas

```tsx
import {selectionColumn} from '@gravity-ui/table';
import type {RowSelectionState} from '@gravity-ui/table/tanstack';

const columns: ColumnDef<Person>[] = [
  selectionColumn as ColumnDef<Person>,
  // ...outras colunas
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

  return

### Ordenação

Saiba mais sobre as propriedades de coluna na documentação do [react-table](https://tanstack.com/table/v8/docs/guide/sorting).

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

  // Sua coluna DEVE ter accessorFn para que a ordenação seja ativada

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

Se você quiser ordenar os elementos manualmente, passe a propriedade `manualSorting`:

```tsx
const table = useTable({
  // ...
  manualSorting: true,
});
```

### Agrupamento

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
  {accessorKey: 'name', header: 'Nome', size: 200},
  {accessorKey: 'age', header: 'Idade', size: 100},
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
    name: 'Parentes',
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

Para usar agrupamento com seleção, utilize o hook `useRowSelectionFixedHandler`. Sem ele, o estado da caixa de seleção da linha pai ficará incorreto. https://github.com/TanStack/table/issues/4878

Para ativar estilos de aninhamento, passe `withNestingStyles = true` na configuração da coluna.

Indicadores de aninhamento podem ser desativados passando `showTreeDepthIndicators = false`.

Para adicionar um controle para expandir/recolher linhas, envolva o conteúdo da célula com o componente `TreeExpandableCell` ou com seu componente personalizado similar:

```tsx
import {TreeExpandableCell} from '@gravity-ui/table';

const columns: ColumnDef<Item>[] = [
  {
    accessorKey: 'name',
    header: 'Nome',
    size: 200,
    showTreeDepthIndicators: false,
    withNestingStyles: true,
    cell: ({row, info}) => (
      <TreeExpandableCell row={row}>{info.getValue<string>()}</TreeExpandableCell>
    ),
  },
  // ...outras colunas
];
```

### Reordenação

```tsx
import type {ReorderingProviderProps} from '@gravity-ui/table';
import {dragHandleColumn, ReorderingProvider} from '@gravity-ui/table';

const columns: ColumnDef<Person>[] = [
  dragHandleColumn,
  // ...outras colunas
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

### Reordenação de Colunas

Envolva a tabela com `ColumnReorderingProvider` para ativar a reordenação de colunas por meio de arrastar e soltar em seus cabeçalhos.

```tsx
import {ColumnReorderingProvider} from '@gravity-ui/table';

const columns: ColumnDef<Person>[] = [
  {accessorKey: 'name', header: 'Nome', size: 100},
  {accessorKey: 'age', header: 'Idade', size: 100},
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

Se você controlar `columnOrder` por conta própria (por exemplo, para persistir), passe `onReorder` e aplique a ordem resultante:

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

API CSS:

| Variável CSS                                 | Padrão                        | Descrição                      |
| -------------------------------------------- | ----------------------------- | -------------------------------- |
| `--gt-table-reordering-insertion-line-color` | `#4d8bff`                     | Cor da linha de inserção de arrastar |
| `--gt-table-reordering-insertion-line-width`

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

Saiba mais sobre as propriedades de redimensionamento de tabelas e colunas na documentação do [react-table](https://tanstack.com/table/v8/docs/api/features/column-sizing).

## Problemas Conhecidos e Compatibilidade

### Compatibilidade com React 19 + React Compiler

**⚠️ Problema Conhecido:** Existe um problema de compatibilidade conhecido com o React 19 e o React Compiler ao usar `@gravity-ui/table` (que é construído sobre o TanStack Table). A tabela pode não ser renderizada novamente quando os dados mudam. Veja a [issue #5567 do TanStack Table](https://github.com/TanStack/table/issues/5567) para mais detalhes.

**Solução Alternativa:**

Se você estiver usando o React 19 com o React Compiler e estiver enfrentando problemas com a renderização da tabela, você pode usar a diretiva `'use