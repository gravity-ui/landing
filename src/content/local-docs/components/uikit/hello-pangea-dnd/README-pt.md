GRAVITY_TRANSLATION_BLOCK_0_END

O ponto de entrada que torna uma [Lista](../List/README.md) reordenável com `@hello-pangea/dnd`, a biblioteca recomendada de arrastar e soltar.

```tsx
import {ListHelloPangeaDnd} from '@gravity-ui/uikit/hello-pangea-dnd';
```

Este ponto de entrada requer `@hello-pangea/dnd` e React 18 ou posterior: instale a biblioteca ao lado de `@gravity-ui/uikit`, uma cópia dela — `Draggable` e `DragDropContext` do seu código devem vir da mesma cópia que o kit.

## Uso

Envolva a lista e dê a ela `role="grid"`: o manipulador de arrastar é interativo, e conteúdo interativo dentro de uma linha é válido apenas no modelo de função `grid`. O wrapper possui o `DragDropContext` e o `Droppable`, recebe os mesmos `items` da lista e retorna o array reordenado.

```tsx
import {List} from '@gravity-ui/uikit';
import {ListHelloPangeaDnd} from '@gravity-ui/uikit/hello-pangea-dnd';

function Playlist() {
  const [tracks, setTracks] = React.useState(initialTracks);

  return (
    <ListHelloPangeaDnd items={tracks} onItemsUpdate={setTracks}>
      <List role="grid" aria-label="Playlist" items={tracks} getItemContent={(t) => t.title} />
    </ListHelloPangeaDnd>
  );
}
```

Cada linha recebe um manipulador em sua borda mais externa. O mouse arrasta uma linha pelo manipulador; o teclado alcança o manipulador com `←`/`→`, levanta a linha com `Space`, move-a com `↑`/`↓` e a solta com `Space` (`Escape` cancela). Linhas que a lista desabilita não são arrastáveis, e `getItemDragDisabled` fixa mais delas. O nome do manipulador e as instruções que a biblioteca fornece aos leitores de tela seguem o idioma definido com `configure` (sob um `DragDropContext` próprio, passe seu `dragHandleUsageInstructions` pessoalmente).

Uma lista dentro de um `Sheet`, um `Dialog` ou um popup animado arrasta da mesma forma: o kit compensa um ancestral transformado. Para dados que não são um array em memória, use `onDrop` em vez de `onItemsUpdate`.

O kit cobre listas planas: a biblioteca precisa de índices contíguos, e eles são contados sobre `items`. Seções não são arrastáveis.

Os filhos do wrapper são a lista e nada mais: o adaptador vai para a Lista mais próxima abaixo, então um Select ou um Menu colocado ao lado da lista o pegaria. `getItemId` e `getItemDragDisabled` devem ser estáveis — uma função inline re-renderiza cada linha a cada renderização do pai.

### Os slots de uma linha

A linha padrão é `ListHelloPangeaDnd.Row`. Renderize-a em `renderItem` para preencher os slots da visualização da linha.

```tsx
<List
  role="grid"
  aria-label="Playlist"
  items={tracks}
  getItemContent={(t) => t.title}
  renderItem={(ctx, helpers) => (
    <ListHelloPangeaDnd.Row
      ctx={ctx}
      helpers={helpers}
      description={ctx.item.artist}
      endContent={<Label>{ctx.item.duration}</Label>}
      handlePlacement="end"
    />
  )}
/>
```

### Marcação personalizada

Quando uma linha não é `List.ItemView`, escreva o `Draggable` você mesmo e pegue a conexão de `getHelloPangeaRowProps`; o manipulador e o conteúdo recebem uma célula cada. O índice do `Draggable` é a posição do item em `items`.

```tsx
import {Draggable} from '@hello-pangea/dnd';
import {HelloPangeaDragHandle, getHelloPangeaRowProps} from '@gravity-ui/uikit/hello-pangea-dnd';

<List
  role="grid"
  aria-label="Speakers"
  items={people}
  renderItem={(ctx, helpers) => (
    <Draggable draggableId={ctx.id} index={people.indexOf(ctx.item)}>
      {(provided, snapshot) => {
        const {rowProps, handleProps, cellProps} = getHelloPangeaRowProps({
          ctx,
          helpers,
          provided,
          snapshot,
        });
        return (
          <article {...rowProps}>
            <span {...cellProps}>
              <HelloPangeaDragHandle {...handleProps} />
            </span>
            <span {...cellProps}>{ctx.item.name}</span>
          </article>
        );
      }}
    </Draggable>
  )}
/>;
```

Espalhe `handleProps` em vez de `dragHandleProps` da biblioteca: além do contrato de grid, eles mantêm um arrasto por toque ativo sob virtualização.

`HelloPangeaDragHandle` é o grip com um nome acessível; seus filhos substituem o ícone.

### Virtualização

Coloque `ListVirtualizer` **fora** do wrapper: o wrapper lê a virtualização da lista e alterna o `Droppable` para o modo virtual. Sob um `minItemsCount`, ele conta seus `items` da maneira que a lista conta suas linhas, então uma lista abaixo do limite mantém o modo padrão.

```tsx
import {ListVirtualizer} from '@gravity-ui/uikit/virtualizer';

<ListVirtualizer estimateItemSize={28}>
  <ListHelloPangeaDnd items={tracks} onItemsUpdate={setTracks}>
    <List
      role="grid"
      aria-label="Archive"
      style={{height: 480}}
      items={tracks}
      getItemContent={(t) => t.title}
    />
  </ListHelloPangeaDnd>
</ListVirtualizer>;
```

A linha arrastada é desenhada por um clone — uma cópia da `Row` — então uma linha personalizada precisa de `renderClone`: ela recebe `{item, provided, snapshot}` do clone. As alturas das linhas não devem mudar durante um arrasto: a biblioteca as mede ao levantar.

### Várias listas

Sob um `DragDropContext` próprio — várias listas, movimentos entre elas — o wrapper não renderiza contexto. Dê a cada lista um estado de `useListHelloPangeaDnd` e um `droppableId`, e chame os manipuladores de cada estado do contexto; `onItemsUpdate` e `onDrop` do wrapper funcionam como de costume. Um estado reordena apenas sua própria lista; um movimento de uma lista para outra é seu para lidar em `onDragEnd`.

```tsx
import {DragDropContext} from '@hello-pangea/dnd';
import {List} from '@gravity-ui/uikit';
import {ListHelloPangeaDnd, useListHelloPangeaDnd} from '@gravity-ui/uikit/hello-pangea-dnd';

const todo = useListHelloPangeaDnd();
const done = useListHelloPangeaDnd();

<DragDropContext
  onDragStart={(start) => {
    todo.onDragStart(start);
    done.onDragStart(start);
  }}
  onDragEnd={(result) => {
    todo.onDragEnd(result);
    done.onDragEnd(result);
  }}
>
  <ListHelloPangeaDnd
    items={todoItems}
    onItemsUpdate={setTodoItems}
    state={todo}
    droppableId="todo"
  >
    <List role="grid" aria-label="A fazer" items={todoItems} getItemContent={(i) => i.title} />
  </ListHelloPangeaDnd>
  <ListHelloPangeaDnd
    items={doneItems}
    onItemsUpdate={setDoneItems}
    state={done}
    droppableId="done"
  >
    <List role="grid" aria-label="Feito" items={doneItems} getItemContent={(i) => i.title} />
  </ListHelloPangeaDnd>
</DragDropContext>;
```

Sem `state`, cada wrapper renderiza seu próprio `DragDropContext`, e contextos aninhados duplicam os sensores da biblioteca.

## Propriedades

### ListHelloPangeaDnd
GRAVITY_TRANSLATION_BLOCK_1_END


| Nome                | Descrição                                                                                        |                                      Tipo                                       |        Padrão        |
| :------------------ | :------------------------------------------------------------------------------------------------- | :-----------------------------------------------------------------------------: | :-------------------: |
| items               | Os itens da lista interna, na mesma ordem                                                    |                                 `readonly T[]`                                  |                       |
| getItemId           | O id de um item; mantenha-o igual ao `getItemId` da `List`                                    |                              `(item: T) => string`                              | o da `List` |
| onItemsUpdate       | O array reordenado, com `moveItem` já aplicado                                                    |                             `(items: T[]) => void`                              |                       |
| onDrop              | O drop como ids e uma borda                                                                        |     `(fromId: string, toId: string, position: 'before' \| 'after') => void`     |                       |
| droppableId         | O id do `Droppable`                                                                          |                                    `string`                                     | um id automático       |
| getItemDragDisabled | Linhas que não podem ser arrastadas, além das desabilitadas                                      |                             `(item: T) => boolean`                              |                       |
| renderClone         | Modo virtual: a cópia de uma linha arrastada, necessária para linhas personalizadas                                  |                `({item, provided, snapshot}) => React.ReactNode`                |  uma cópia da `Row`  |
| state               | O estado `useListHelloPangeaDnd` para o seu próprio `DragDropContext` — veja [Várias listas](#várias-listas) |                          `UseListHelloPangeaDndResult`                          |                       |
| droppableProps      | Passado para o `Droppable`                                                                          | `Pick<DroppableProps, 'isDropDisabled' \| 'ignoreContainerClipping' \| 'type'>` |                       |
| children            | A `List`, com `role="grid"`                                                                     |                                   `ReactNode`                                   |                       |

### ListHelloPangeaDnd.Row

| Nome            | Descrição                                                      |         Tipo          |      Padrão      |
| :-------------- | :--------------------------------------------------------------- | :-------------------: | :--------------: |
| ctx             | O primeiro argumento de `renderItem`                               |   `ListItemContext`   |                  |
| helpers         | O segundo argumento de `renderItem`                              |   `ListItemHelpers`   |                  |
| children        | O conteúdo da linha                                           |      `ReactNode`      |   `ctx.content`   |
| startContent    | O slot inicial da visualização                                       |      `ReactNode`      |                  |
| description     | A segunda linha da visualização                                      |      `ReactNode`      |                  |
| endContent      | O slot final da visualização                                         |      `ReactNode`      |                  |
| handleLabel     | O nome acessível da alça                                |       `string`        | "Drag to reorder" |
| handlePlacement | A borda da alça: o slot mais externo ou após `endContent` |  `'start' \| 'end'`   |     `'start'`     |
| className       | A classe CSS da linha                                         |       `string`        |                  |
| style           | O estilo inline da linha                                      | `React.CSSProperties` |                  |
| qa              | O atributo `data-qa` da linha                               |       `string`        |                  |

### getHelloPangeaRowProps

Recebe `{ctx, helpers, provided, snapshot, handleLabel?}` — os argumentos de `renderItem` e da função de renderização de `Draggable` — e retorna:

| Nome        | Descrição                                                                                        |            Tipo             |
| :---------- | :------------------------------------------------------------------------------------------------- | :-------------------------: |
| rowProps    | As props da linha: as da lista com as props arrastáveis e a ref da biblioteca     |     `ListItemDOMProps`      |
| handleProps | As props da alça: `dragHandleProps`, `tabIndex={-1}` e o nome; decorativo quando desabilitado | `HelloPangeaHandleDOMProps` |
| cellProps   | As props de uma célula                                                                                |     `ListCellDOMProps`      |

### HelloPangeaDragHandle

Recebe as props de um `span` exceto `tabIndex`, e:

| Nome       | Descrição                       |    Tipo     |      Padrão      |
| :--------- | :-------------------------------- | :---------: | :--------------: |
| aria-label | O nome acessível da alça |  `string`   | "Drag to reorder" |
| qa         | O atributo `data-qa`           |  `string`   |                   |
| children   | O conteúdo em vez do ícone de arrastar   | `ReactNode` |   o ícone de arrastar   |

### useListHelloPangeaDnd

O estado de arrastar para um `DragDropContext` próprio — o `state` do wrapper (sem props necessárias), ou a prop `dnd` de uma lista configurada manualmente. As props, todas opcionais:

| Nome   | Descrição                                                                                               |                                  Tipo                                   |
| :----- | :-------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------: |
| ids    | Os ids das linhas na ordem da lista; padrão — aqueles do `ListHelloPangeaDnd` dado o estado |                           `readonly string[]`                           |
| onDrop | O drop — emparelhe com `moveItem(items, fromId, toId, position)`; opcional sob um `ListHelloPangeaDnd`  | `(fromId: string, toId: string, position: 'before' \| 'after') => void` |

O que retorna:

| Nome        | Descrição                                               |              Tipo              |
| :---------- | :-------------------------------------------------------- | :----------------------------: |
| draggingId  | O que está sendo arrastado — vai para o adaptador da lista |        `string \| null`        |
| onDragStart | Para o `DragDropContext`                                 |  `(start: DragStart) => void`  |
| onDragEnd   | Para o `DragDropContext`; chama `onDrop` em um movimento real  | `(result: DropResult) => void` |

GRAVITY_TRANSLATION_BLOCK_1_END
GRAVITY_TRANSLATION_BLOCK_2_END