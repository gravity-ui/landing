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

### Componentes

Existem dois componentes `Table` que você pode usar:

- `BaseTable` - um componente com estilos básicos apenas;
- `Table` - um componente com estilos baseados no Gravity UI.

#### Seleção de Linha

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

#### Coluna de Seleção de Intervalo Personalizada

O hook `useToggleRangeSelectionHandler` retorna um manipulador de eventos que escuta cliques com a tecla Shift pressionada e realiza a seleção de linhas em intervalo. Ele precisa receber uma instância de `CellContext` para ter acesso aos estados internos da tabela e da linha.

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

Existe também o componente `RangedSelectionCheckbox`, que utiliza o hook internamente e aceita uma instância de `CellContext` como prop. Este componente oferece um atalho para adicionar a funcionalidade de seleção de intervalo a colunas de seleção personalizadas.

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

Por padrão, a coluna de seleção gerada com `selectionColumn` inclui a funcionalidade de seleção de intervalo.

```tsx
import {selectionColumn} from '@gravity-ui/table';
import type {ColumnDef} from '@gravity-ui/table/tanstack';

const columns: ColumnDef<Person>[] = [
  selectionColumn as ColumnDef<Person>,
  // ...outras colunas
];
```

**Observação**: Se a tabela contiver linhas aninhadas, a seleção de intervalo não funcionará. No momento, isso é considerado um comportamento indefinido.

#### Ordenação

Saiba mais sobre as propriedades de coluna na [documentação](https://tanstack.com/table/v8/docs/guide/sorting) do react-table.

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

#### Agrupamento

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

Para adicionar um controle para expandir/recolher linhas, envolva o conteúdo da célula com o componente `TreeExpandableCell` ou com um componente personalizado semelhante:

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

#### Reordenação

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

#### Reordenação sem alça de arrastar

Defina `dragWithoutHandle` para usar a linha inteira como ativador de arrastar e omita
`dragHandleColumn` das definições de coluna:

```tsx
const columns: ColumnDef<Person>[] = [
  {accessorKey: 'name', header: 'Nome'},
  {accessorKey: 'age', header: 'Idade'},
];

return (
  <ReorderingProvider table={table} dragWithoutHandle onReorder={handleReorder}>
    <Table table={table} />
  </ReorderingProvider>
);
```

O ponteiro deve se mover 8 pixels antes que o arrastar comece, para que cliques normais na linha e em controles continuem funcionando. Para excluir uma parte personalizada de uma linha de iniciar um arrastar, chame `preventDefault()` em seu
manipulador `onPointerDown`.

`ReorderingProvider` ativa a rolagem automática vertical do dnd-kit por padrão. Passe `autoScroll={false}`
quando a aplicação fornecer sua própria implementação de rolagem automática de arrastar; executar ambos ao mesmo tempo pode
produzir conflitos de escrita de rolagem.

Alças de arrastar personalizadas devem ler `attributes`, `listeners` e `setActivatorNodeRef` do
`DraggableRowContext` e anexá-los ao elemento da alça. Isso reutiliza o registro DnD da linha. Não chame `useSortable` novamente com o mesmo id de linha: uma alça montada posteriormente pela virtualização substituiria o nó DOM registrado da linha.

#### Reordenação por teclado e acessibilidade

`ReorderingProvider` suporta arrastar linhas por teclado.
Foque em uma alça de arrastar, pressione Espaço ou Enter para pegar a linha, use as teclas de seta para movê-la e pressione Espaço ou Enter para soltá-la. Escape cancela o movimento.
O arrastar por teclado se aplica apenas a linhas; as interações por teclado com cabeçalhos de coluna permanecem inalteradas.

Use `accessibility` para personalizar instruções do leitor de tela do dnd-kit, anúncios, contêiner de anúncios e restauração de foco para arrastar por teclado e ponteiro.
Quando provedores de linha e coluna são aninhados, eles compartilham o mesmo contexto DnD e configurações de acessibilidade; a ordem dos provedores não importa.

```tsx
<ReorderingProvider
  table={table}
  onReorder={handleReorder}
  accessibility={{
    screenReaderInstructions: {
      draggable:
        'Pressione Espaço para pegar uma linha, setas para mover, Enter para soltar ou Escape para cancelar.',
    },
  }}
>
  <Table table={table} />
</ReorderingProvider>
```

#### Reordenação de colunas

Envolva a tabela com `ColumnReorderingProvider` para ativar a reordenação de colunas por arrastar e soltar em seus cabeçalhos.

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

### Reordenação de linhas e colunas juntas

Aninhe `ColumnReorderingProvider` e `ReorderingProvider` para habilitar ambos os eixos de arrastar ao mesmo tempo. A ordem dos provedores não importa — eles compartilham um único contexto dnd-kit internamente.

```tsx
import type {ColumnReorderingProviderProps, ReorderingProviderProps} from '@gravity-ui/table';
import {ColumnReorderingProvider, ReorderingProvider, dragHandleColumn} from '@gravity-ui/table';

const columns: ColumnDef<Person>[] = [
  dragHandleColumn,
  {accessorKey: 'name', header: 'Nome'},
  {accessorKey: 'age', header: 'Idade'},
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
    // atualiza o array de dados
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

Se você controlar `columnOrder` manualmente (por exemplo, para persistir), passe `onReorder` e aplique a ordem resultante:

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

| Variável CSS                                 | Padrão                          | Descrição                      |
| -------------------------------------------- | ------------------------------- | ------------------------------ |
| `--gt-table-reordering-insertion-line-color` | `#4d8bff`                       | Cor da linha de inserção de drop |
| `--gt-table-reordering-insertion-line-width` | `2px`                           | Largura da linha de inserção de drop |
| `--gt-table-reordering-dragged-opacity`      | `0.4`                           | Opacidade da coluna arrastada  |
| `--gt-table-drag-overlay-background`         | `#fff`                          | Fundo da prévia de arrastar    |
| `--gt-table-drag-overlay-shadow`             | `0 3px 12px rgba(0,0,0,0.15)`   | Sombra da caixa da prévia de arrastar |
| `--gt-table-drag-overlay-border-radius`      | `6px`                           | Raio da borda da prévia de arrastar |

Para proibir a reordenação de uma coluna específica, defina `enableColumnReordering: false` em sua definição de coluna. Colunas placeholder (agrupadas) não são arrastáveis. Use `activationDistance` (padrão `8`) para ajustar a distância que o ponteiro deve se mover antes que um arrasto comece, o que mantém os cliques no cabeçalho (como ordenação) funcionando.

Colunas fixadas também podem ser reordenadas, mas apenas entre si: uma coluna pode ser movida dentro do grupo fixado à esquerda, do grupo fixado à direita ou do grupo central (não fixado) — ela nunca cruza um limite de fixação ao arrastar.

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

Enquanto arrasta:

- uma prévia flutuante da coluna (seu cabeçalho mais as primeiras linhas) segue o ponteiro em uma sobreposição de arrastar;
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

#### Virtualização

Use se quiser usar o contêiner da grade como elemento de rolagem (se quiser usar a janela, veja a seção de virtualização de janela). Certifique-se de definir uma altura fixa no contêiner; caso contrário, a virtualização não funcionará.

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

Para tabelas que devem permanecer cobertas durante a rolagem bidirecional contínua, habilite o modo adaptativo
direct-DOM e use chaves semânticas estáveis. A mesma chave deve identificar uma linha antes e depois de uma reordenação imutável ou de um reparenting de árvore:

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

`adaptiveFlushSync` mantém um intervalo montado "aquecido" e preenche de forma síncrona apenas um intervalo visível não coberto. `directDomUpdates` permite que o virtualizador atualize as posições das linhas e o tamanho do corpo sem uma renderização do React para cada notificação de rolagem. Use `position` para linhas de tabela, a menos que transformações sejam necessárias pelo layout circundante. Mantenha `getRowId` e `getItemKey` estáveis e defina `count` a partir do modelo de linha achatado atual após expandir, recolher, reordenar ou reparentar linhas. Um `rangeExtractor` personalizado arbitrário permanece autoritativo e desabilita o planejamento adaptativo da janela.

`getColumnAwareRowOverscan(columnCount, options?)` reduz o overscan de linha base à medida que o número de colunas aumenta. Por padrão, ele divide um orçamento de 240 células pelo número de colunas, arredonda para baixo e limita o resultado a 4–24 linhas. Use `table.getVisibleLeafColumns().length` para excluir colunas ocultas e incluir colunas fixadas. O helper funciona com `useRowVirtualizer` e `useWindowRowVirtualizer`; você ainda pode passar um `overscan` numérico explícito em vez disso.

Ajuste o orçamento e os limites para o custo de renderização de suas células. Se sua aplicação virtualiza colunas, defina `renderedColumnLimit` para o número máximo de colunas renderizadas por linha, incluindo colunas fixadas; o helper limita a contagem de colunas fornecida a esse valor:

```tsx
const overscan = getColumnAwareRowOverscan(table.getVisibleLeafColumns().length, {
  renderedColumnLimit: 16,
  cellBudget: 320,
  minOverscan: 4,
  maxOverscan: 20,
});
```

O resultado é um overscan de linha base, não um limite estrito para linhas ou células montadas. Linhas visíveis são renderizadas além do overscan, e a rolagem adaptativa pode estender o intervalo montado. Todas as entradas do helper devem ser inteiros seguros não negativos, e `maxOverscan` deve ser pelo menos `minOverscan`; valores inválidos lançam um `RangeError`. Zero colunas são tratadas como uma para o cálculo.

`BaseTable.canDeferOffscreenCellContent` é uma opção adicional para tabelas adaptativas muito largas. Retorne `true` apenas para conteúdo de célula passivo cuja montagem atrasada não possa alterar a geometria, o foco, a acessibilidade ou o estado da aplicação. Linhas personalizadas, linhas de grupo, células fixadas e conteúdo interativo ou com efeitos colaterais devem permanecer "eager".

Com o extrator de intervalo adaptativo padrão, `BaseTable` fixa a linha ativa sendo arrastada automaticamente. Um extrator de intervalo personalizado é responsável por reter essa linha. Se você usar reordenação com um virtualizador não adaptativo, mantenha o mesmo contrato semântico `getItemKey` e passe a opção `rangeExtractor`:

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

#### Virtualização de Janela

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

#### Redimensionamento

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

#### Configurações de Coluna

```tsx
const columns: ColumnDef<Person>[] = [
  // ...outras colunas
  {
    id: 'settings_column_id',
    header: ({table}) => <TableSettings table={table} />,
    meta: {
      hideInSettings: false, // Opcional. Permite ocultar esta coluna do popover de configurações
      titleInSettings: 'ReactNode', // Opcional. Substitui o campo header para o popover de configurações (se você precisar de conteúdo diferente para o header e o popover de configurações)
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
    /* ids das colunas leaf */
  ]); // para controle externo e estado inicial

  // Variante alternativa para obter estado, callbacks e definir callbacks de aplicação de configuração - usando o hook useTableSettings:
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

Saiba mais sobre as propriedades de redimensionamento de tabela e coluna na [documentação](https://tanstack.com/table/v8/docs/api/features/column-sizing) do react-table.

## Problemas Conhecidos e Compatibilidade

### Compatibilidade com React 19 + React Compiler

**⚠️ Problema Conhecido:** Existe um problema de compatibilidade conhecido com o React 19 e o React Compiler ao usar `@gravity-ui/table` (que é construído sobre o TanStack Table). A tabela pode não ser renderizada novamente quando os dados mudam. Veja a [issue #5567 do TanStack Table](https://github.com/TanStack/table/issues/5567) para detalhes.

**Solução:**

Se você estiver usando o React 19 com o React Compiler e estiver enfrentando problemas com a re-renderização da tabela, você pode usar a diretiva `'use no memo'` no código do seu componente:

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
```

```markdown
# @gravity-ui/table

## Solução Alternativa

Você também pode memoizar explicitamente a instância da tabela ou os dados para garantir re-renderizações adequadas:

```tsx
import React from 'react';
import {Table, useTable} from '@gravity-ui/table';
import type {ColumnDef} from '@gravity-ui/table/tanstack';

function MyTable() {
  const [data, setData] = React.useState<Person[]>([]);

  // Memoiza explicitamente os dados para garantir re-renderizações
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

Uma grade de dados headless, alimentada por TanStack Table, para aplicativos Gravity UI — use-a para tabelas classificáveis, selecionáveis, agrupáveis, reordenáveis e virtualizadas em vez de compor marcação bruta sobre a `Table` básica do uikit.

### Quando usar

- Grandes conjuntos de dados que precisam de virtualização de linha ou janela (`useRowVirtualizer`, `useWindowRowVirtualizer`).
- Classificação de colunas, redimensionamento, reordenação (`ColumnReorderingProvider`), fixação e configurações de coluna por usuário (`TableSettings`).
- Seleção de linha (única/múltipla, intervalo) e linhas de árvore/agrupadas com células expansíveis.

### Quando não usar

- Uma tabela simples e estática com algumas linhas e sem recursos avançados — a `Table` integrada do uikit de [`@gravity-ui/uikit`](https://github.com/gravity-ui/uikit) é mais leve.
- Uma lista não tabular — use `List` de [`@gravity-ui/uikit`](https://github.com/gravity-ui/uikit).
- Edição de células em linha no estilo de planilha — esta grade é focada em leitura/exibição, não em uma planilha editável.

### Armadilhas comuns

- **Você constrói a tabela com `useTable`, depois renderiza `<Table table={table} />`.** A propriedade principal é `table` (a instância), não `data`/`columns` diretamente em `<Table>`; passe `data` e `columns` para `useTable`.
- **Os tipos vêm do subcaminho `@gravity-ui/table/tanstack`.** Importe `ColumnDef`, `RowSelectionState`, `SortingState`, etc. de `@gravity-ui/table/tanstack`, não da raiz do pacote.
- **A classificação precisa de um acessador.** Uma coluna deve ter `accessorKey`/`accessorFn` para que a classificação funcione; defina `enableSorting` e forneça `getRowId`.
- **React 19 + React Compiler pode pular re-renderizações.** Este é um problema upstream da TanStack Table — adicione a diretiva `'use no memo'` ao componente ou memoize `data`.
- **A seleção de intervalo falha com linhas aninhadas.** A seleção de intervalo é um comportamento indefinido quando a tabela tem linhas agrupadas/aninhadas; use `useRowSelectionFixedHandler` para o estado correto da caixa de seleção pai com agrupamento.

## Documentação para agentes de IA

A documentação legível por agente para a versão instalada está localizada em `node_modules/@gravity-ui/table/build/docs/INDEX.md`.
```