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

### Seleção de Linha

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

  return <Table table={table} />;
};
```

Para usar agrupamento com seleção, utilize o hook `useRowSelectionFixedHandler`. Sem ele, o estado da caixa de seleção da linha pai ficará incorreto. https://github.com/TanStack/table/issues/4878

### Coluna de Seleção em Intervalo Personalizada

O hook `useToggleRangeSelectionHandler` retorna um manipulador de eventos que escuta cliques com a tecla Shift e realiza a seleção de linhas em intervalo. Ele precisa receber uma instância de `CellContext` para ter acesso aos estados internos da tabela e da linha.

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
  // ...outras colunas
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

Existe também o componente `RangedSelectionCheckbox`, que utiliza o hook internamente e aceita uma instância de `CellContext` como prop. Este componente oferece um atalho para adicionar a funcionalidade de seleção em intervalo a colunas de seleção personalizadas.

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

Por padrão, a coluna de seleção gerada com `selectionColumn` inclui a funcionalidade de seleção em intervalo.

```tsx
import {selectionColumn} from '@gravity-ui/table';
import type {ColumnDef} from '@gravity-ui/table/tanstack';

const columns: ColumnDef<Person>[] = [
  selectionColumn as ColumnDef<Person>,
  // ...outras colunas
];
```

**Observação**: Se a tabela contiver linhas aninhadas, a seleção em intervalo não funcionará. No momento, isso é considerado um comportamento indefinido.

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

  // Sua coluna DEVE ter accessorFn para que a ordenação seja habilitada

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

Para habilitar estilos de aninhamento, passe `withNestingStyles = true` na configuração da coluna.

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

Envolva a tabela com `ColumnReorderingProvider` para habilitar a reordenação de colunas por meio de arrastar e soltar em seus cabeçalhos.

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
| `--gt-table-reordering-insertion-line-width` | `2px`                         | Largura da linha de inserção de arrastar |
| `--gt-table-reordering-dragged-opacity`      | `0.4`                         | Opacidade da coluna arrastada    |
| `--gt-table-drag-overlay-background`         | `#fff`                        | Fundo da prévia de arrastar      |
| `--gt-table-drag-overlay-shadow`             | `0 3px 12px rgba(0,0,0,0.15)` | Sombra da caixa da prévia de arrastar |
| `--gt-table-drag-overlay-border-radius`      | `6px`                         | Raio da borda da prévia de arrastar |

Para proibir a reordenação de uma coluna específica, defina `enableColumnReordering: false` na sua definição de coluna. Colunas de placeholder (agrupadas) não são arrastáveis. Use `activationDistance` (padrão `8`) para ajustar a distância que o ponteiro deve se mover antes que um arrasto comece, o que mantém os cliques no cabeçalho (como ordenação) funcionando.

Colunas fixadas também podem ser reordenadas, mas apenas entre si: uma coluna pode ser movida dentro do grupo fixado à esquerda, do grupo fixado à direita ou do grupo central (não fixado) — ela nunca cruza um limite de fixação ao ser arrastada.

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

Durante o arrasto:

- uma prévia flutuante da coluna (seu cabeçalho mais as primeiras linhas) segue o ponteiro em uma sobreposição de arrasto;
- a coluna arrastada fica semitransparente;
- uma linha de inserção azul é desenhada onde a coluna será solta;

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

### Virtualização

Use se você quiser usar o contêiner da grade como elemento de rolagem (se quiser usar a janela, veja a seção de virtualização de janela). Certifique-se de definir uma altura fixa no contêiner; caso contrário, a virtualização não funcionará.

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

Se você usar virtualização com o recurso de reordenação, também precisará passar a opção `rangeExtractor`:

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

### Virtualização de Janela

Use se você quiser usar a janela como elemento de rolagem

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

### Redimensionamento

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

### Configurações de Coluna

```tsx
const columns: ColumnDef<Person>[] = [
  // ...outras colunas
  {
    id: 'settings_column_id',
    header: ({table}) => <TableSettings table={table} />,
    meta: {
      hideInSettings: false, // Opcional. Permite ocultar esta coluna do popover de configurações
      titleInSettings: 'ReactNode', // Opcional. Substitui o campo de cabeçalho para o popover de configurações (se você precisar de conteúdo diferente para o cabeçalho e o popover de configurações)
    },
  }, // ou você pode usar a função getSettingsColumn
];

const data: Person[] = [
  /* ... */
];

const TableSettingsDemo = () => {
  const [columnVisibility, onColumnVisibilityChange] = React.useState<VisibilityState>({
    // para controle externo e estado inicial
    column_id: false, // para ocultar por padrão
  });
  const [columnOrder, onColumnOrderChange] = React.useState<string[]>([
    /* ids das colunas folha */
  ]); // para controle externo e estado inicial

  // Variante alternativa para obter estado, callbacks e definir callbacks de aplicação de configuração - usando o hook useTableSettings:
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

Saiba mais sobre as propriedades de redimensionamento de tabelas e colunas na documentação do [react-table](https://tanstack.com/table/v8/docs/api/features/column-sizing).

## Problemas Conhecidos e Compatibilidade

### Compatibilidade com React 19 + React Compiler

**⚠️ Problema Conhecido:** Existe um problema de compatibilidade conhecido com o React 19 e o React Compiler ao usar `@gravity-ui/table` (que é construído sobre o TanStack Table). A tabela pode não ser renderizada novamente quando os dados mudam. Veja a [issue #5567 do TanStack Table](https://github.com/TanStack/table/issues/5567) para mais detalhes.

**Solução Alternativa:**

Se você estiver usando React 19 com React Compiler e estiver enfrentando problemas com a renderização da tabela, você pode usar a diretiva `'use no memo'` no código do seu componente:

```tsx
import React from 'react';
import {Table, useTable} from '@gravity-ui/table';
import type {ColumnDef} from '@gravity-ui/table/tanstack';

function MyTable() {
  'use no memo'; // Desabilita a memoização do React Compiler para este componente

  const [data, setData] = React.useState<Person[]>([]);

  const table = useTable({
    data,
    columns,
  });

  return <Table table={table} />;
}
```

**Solução Alternativa:**

Você também pode memoizar explicitamente a instância da tabela ou os dados para garantir renderizações corretas:

```tsx
import React from 'react';
import {Table, useTable} from '@gravity-ui/table';
import type {ColumnDef} from '@gravity-ui/table/tanstack';

function MyTable() {
  const [data, setData] = React.useState<Person[]>([]);

  // Memoiza explicitamente os dados para garantir renderizações
  const memoizedData = React.useMemo(() => data, [data]);

  const table = useTable({
    data: memoizedData,
    columns,
  });

  return <Table table={table} />;
}
```

**Observação:** Este problema está na biblioteca subjacente TanStack Table e precisará ser corrigido lá. As soluções alternativas acima devem ajudar até que uma correção esteja disponível.

## Licença

Distribuído sob a Licença MIT. Veja [LICENSE](LICENSE) para detalhes.

## Para agentes de IA

Uma grade de dados headless, alimentada por TanStack-Table, para aplicativos Gravity UI — utilize-a para tabelas com ordenação, seleção, agrupamento, reordenação e virtualização em vez de compor marcação bruta sobre a `Table` básica do uikit.

### Quando usar

- Grandes conjuntos de dados que precisam de virtualização de linha ou janela (`useRowVirtualizer`, `useWindowRowVirtualizer`).
- Ordenação de colunas, redimensionamento, reordenação (`ColumnReorderingProvider`), fixação e configurações de coluna por usuário (`TableSettings`).
- Seleção de linha (única/múltipla, intervalo) e linhas de árvore/agrupadas com células expansíveis.

### Quando não usar

- Uma tabela simples e estática com algumas linhas e sem recursos avançados — a `Table` integrada do uikit de [`@gravity-ui/uikit`](https://github.com/gravity-ui/uikit) é mais leve.
- Uma lista não tabular — use `List` de [`@gravity-ui/uikit`](https://github.com/gravity-ui/uikit).
- Edição de células inline no estilo de planilha — esta grade é focada em leitura/exibição, não em uma planilha editável.

### Armadilhas comuns

- **Você constrói a tabela com `useTable`, depois renderiza `<Table table={table} />`.** A propriedade principal é `table` (a instância), não `data`/`columns` diretamente em `<Table>`; passe `data` e `columns` para `useTable`.
- **Tipos vêm do subcaminho `@gravity-ui/table/tanstack`.** Importe `ColumnDef`, `RowSelectionState`, `SortingState`, etc. de `@gravity-ui/table/tanstack`, não da raiz do pacote.
- **A ordenação precisa de um acessador.** Uma coluna deve ter `accessorKey`/`accessorFn` para que a ordenação funcione; defina `enableSorting` e forneça `getRowId`.
- **React 19 + React Compiler pode pular renderizações.** Este é um problema upstream do TanStack Table — adicione a diretiva `'use no memo'` ao componente ou memoize `data`.
- **A seleção de intervalo falha com linhas aninhadas.** O comportamento da seleção de intervalo é indefinido quando a tabela tem linhas agrupadas/aninhadas; use `useRowSelectionFixedHandler` para o estado correto da caixa de seleção pai com agrupamento.