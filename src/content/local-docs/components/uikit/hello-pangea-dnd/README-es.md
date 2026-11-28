GRAVITY_TRANSLATION_BLOCK_0_END

El punto de entrada que hace que una [Lista](../List/README.md) sea reordenable con `@hello-pangea/dnd`, la biblioteca recomendada para arrastrar y soltar.

```tsx
import {ListHelloPangeaDnd} from '@gravity-ui/uikit/hello-pangea-dnd';
```

Este punto de entrada requiere `@hello-pangea/dnd` y React 18 o posterior: instala la biblioteca junto a `@gravity-ui/uikit`, una copia de ella — `Draggable` y `DragDropContext` de tu código deben provenir de la misma copia que el kit.

## Uso

Envuelve la lista y asígnale `role="grid"`: el manejador de arrastre es interactivo, y el contenido interactivo dentro de una fila solo es válido en el modelo de rol de cuadrícula. El contenedor posee el `DragDropContext` y el `Droppable`, toma los mismos `items` que la lista y devuelve el array reordenado.

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

Cada fila obtiene un manejador en su borde más externo. El ratón arrastra una fila por el manejador; el teclado accede al manejador con `←`/`→`, levanta la fila con `Space`, la mueve con `↑`/`↓` y la suelta con `Space` (`Escape` cancela). Las filas que la lista deshabilita no son arrastrables, y `getItemDragDisabled` fija más de ellas. El nombre del manejador y las instrucciones que la biblioteca da a los lectores de pantalla siguen el idioma establecido con `configure` (bajo un `DragDropContext` propio, pasa tú mismo su `dragHandleUsageInstructions`).

Una lista dentro de una `Sheet`, un `Dialog` o un popup animado se arrastra de la misma manera: el kit compensa un ancestro transformado. Para datos que no son un array en memoria, usa `onDrop` en lugar de `onItemsUpdate`.

El kit cubre listas planas: la biblioteca necesita índices contiguos, y se cuentan sobre `items`. Las secciones no son arrastrables.

Los hijos del contenedor son la lista y nada más: el adaptador va a la Lista más cercana debajo, por lo que un Select o un Menu colocados junto a la lista lo tomarían. `getItemId` y `getItemDragDisabled` deben ser estables — una función en línea vuelve a renderizar cada fila en cada render del padre.

### Las ranuras de una fila

La fila predeterminada es `ListHelloPangeaDnd.Row`. Renderízala en `renderItem` para llenar las ranuras de la vista de fila.

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

### Marcado personalizado

Cuando una fila no es `List.ItemView`, escribe tú mismo el `Draggable` y toma el cableado de `getHelloPangeaRowProps`; el manejador y el contenido obtienen una celda cada uno. El índice del `Draggable` es la posición del elemento en `items`.

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

Despliega `handleProps` en lugar de los `dragHandleProps` de la biblioteca: además del contrato de cuadrícula, mantienen un arrastre táctil activo bajo virtualización.

`HelloPangeaDragHandle` es el agarre con un nombre accesible; sus hijos reemplazan el icono.

### Virtualización

Coloca `ListVirtualizer` **fuera** del contenedor: el contenedor lee la virtualización de la lista y cambia el `Droppable` al modo virtual. Bajo un `minItemsCount`, cuenta sus `items` de la misma manera que la lista cuenta sus filas, por lo que una lista por debajo del umbral mantiene el modo estándar.

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

La fila arrastrada se dibuja mediante un clon — una copia de la `Row` — por lo que una fila personalizada necesita `renderClone`: recibe `{item, provided, snapshot}` del clon. Las alturas de las filas no deben cambiar durante un arrastre: la biblioteca las mide al levantar.

### Varias listas

Bajo un `DragDropContext` propio — varias listas, movimientos entre ellas — el contenedor no renderiza contexto. Dale a cada lista un estado de `useListHelloPangeaDnd` y un `droppableId`, y llama a los manejadores de cada estado desde el contexto; `onItemsUpdate` y `onDrop` del contenedor funcionan como de costumbre. Un estado reordena solo su propia lista; un movimiento de una lista a otra es tuyo para manejarlo en `onDragEnd`.

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
    <List role="grid" aria-label="Por hacer" items={todoItems} getItemContent={(i) => i.title} />
  </ListHelloPangeaDnd>
  <ListHelloPangeaDnd
    items={doneItems}
    onItemsUpdate={setDoneItems}
    state={done}
    droppableId="done"
  >
    <List role="grid" aria-label="Hecho" items={doneItems} getItemContent={(i) => i.title} />
  </ListHelloPangeaDnd>
</DragDropContext>;
```

Sin `state`, cada wrapper renderiza su propio `DragDropContext`, y los contextos anidados duplican los sensores de la biblioteca.

## Propiedades

### ListHelloPangeaDnd
GRAVITY_TRANSLATION_BLOCK_1_END


| Nombre                | Descripción                                                                                        |                                      Tipo                                       |        Predeterminado        |
| :------------------ | :------------------------------------------------------------------------------------------------- | :-----------------------------------------------------------------------------: | :-------------------: |
| items               | Los elementos de la lista en su interior, en el mismo orden                                        |                                 `readonly T[]`                                  |                       |
| getItemId           | El id de un elemento; mantenlo igual al `getItemId` de la `List`                                   |                              `(item: T) => string`                              | el de la `List` |
| onItemsUpdate       | El array reordenado, con `moveItem` ya aplicado                                                    |                             `(items: T[]) => void`                              |                       |
| onDrop              | El drop como ids y un borde                                                                        |     `(fromId: string, toId: string, position: 'before' \| 'after') => void`     |                       |
| droppableId         | El id del `Droppable`                                                                          |                                    `string`                                     |      un id automático       |
| getItemDragDisabled | Filas que no se pueden arrastrar, además de las deshabilitadas                                      |                             `(item: T) => boolean`                              |                       |
| renderClone         | Modo virtual: la copia de una fila arrastrada, requerido para filas personalizadas                                  |                `({item, provided, snapshot}) => React.ReactNode`                |  una copia de la `Row`  |
| state               | Estado de `useListHelloPangeaDnd` para tu propio `DragDropContext` — ver [Varias listas](#several-lists) |                          `UseListHelloPangeaDndResult`                          |                       |
| droppableProps      | Pasado al `Droppable`                                                                          | `Pick<DroppableProps, 'isDropDisabled' \| 'ignoreContainerClipping' \| 'type'>` |                       |
| children            | La `List`, con `role="grid"`                                                                     |                                   `ReactNode`                                   |                       |

### ListHelloPangeaDnd.Row

| Nombre            | Descripción                                                      |         Tipo          |      Predeterminado      |
| :---------------- | :--------------------------------------------------------------- | :-------------------: | :----------------------: |
| ctx             | El primer argumento de `renderItem`                               |   `ListItemContext`   |                          |
| helpers         | El segundo argumento de `renderItem`                              |   `ListItemHelpers`   |                          |
| children        | El contenido de la fila                                           |      `ReactNode`      |   `ctx.content`          |
| startContent    | El slot de inicio de la vista                                       |      `ReactNode`      |                          |
| description     | La segunda línea de la vista                                      |      `ReactNode`      |                          |
| endContent      | El slot de fin de la vista                                        |      `ReactNode`      |                          |
| handleLabel     | El nombre accesible del manejador                                |       `string`        | "Arrastrar para reordenar" |
| handlePlacement | El borde del manejador: el slot más externo o después de `endContent` |  `'start' \| 'end'`   |     `'start'`            |
| className       | La clase CSS de la fila                                         |       `string`        |                          |
| style           | El estilo en línea de la fila                                      | `React.CSSProperties` |                          |
| qa              | El atributo `data-qa` de la fila                               |       `string`        |                          |

### getHelloPangeaRowProps

Toma `{ctx, helpers, provided, snapshot, handleLabel?}` — los argumentos de `renderItem` y de la función de renderizado de `Draggable` — y devuelve:

| Nombre        | Descripción                                                                                        |            Tipo             |
| :---------- | :------------------------------------------------------------------------------------------------- | :-------------------------: |
| rowProps    | Las props de la fila: las de la lista con las props de arrastre y la ref de la librería     |     `ListItemDOMProps`      |
| handleProps | Las props del manejador: `dragHandleProps`, `tabIndex={-1}` y el nombre; decorativo cuando está deshabilitado | `HelloPangeaHandleDOMProps` |
| cellProps   | Las props de una celda                                                                                |     `ListCellDOMProps`      |

### HelloPangeaDragHandle

Toma las props de un `span` excepto `tabIndex`, y:

| Nombre       | Descripción                       |    Tipo     |      Predeterminado      |
| :---------- | :-------------------------------- | :---------: | :----------------------: |
| aria-label | El nombre accesible del manejador |  `string`   | "Arrastrar para reordenar" |
| qa         | El atributo `data-qa`           |  `string`   |                          |
| children   | El contenido en lugar del agarre   | `ReactNode` |   el icono del agarre    |

### useListHelloPangeaDnd

El estado del arrastre para un `DragDropContext` propio — el `state` del envoltorio (no se necesitan props), o la prop `dnd` de una lista cableada manualmente. Las props, todas opcionales:

| Nombre   | Descripción                                                                                               |                                  Tipo                                   |
| :------- | :-------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------: |
| ids    | Los ids de las filas en el orden de la lista; por defecto — los de `ListHelloPangeaDnd` dado el estado |                           `readonly string[]`                           |
| onDrop | El drop — emparejarlo con `moveItem(items, fromId, toId, position)`; opcional bajo un `ListHelloPangeaDnd`  | `(fromId: string, toId: string, position: 'before' \| 'after') => void` |

Lo que devuelve:

| Nombre        | Descripción                                               |              Tipo              |
| :---------- | :-------------------------------------------------------- | :----------------------------: |
| draggingId  | Lo que se está arrastrando — va al adaptador de la lista |        `string \| null`        |
| onDragStart | Para el `DragDropContext`                                 |  `(start: DragStart) => void`  |
| onDragEnd   | Para el `DragDropContext`; llama a `onDrop` en un movimiento real  | `(result: DropResult) => void` |