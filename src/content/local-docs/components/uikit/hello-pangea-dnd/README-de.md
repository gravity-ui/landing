GRAVITY_TRANSLATION_BLOCK_0_END

Der Einstiegspunkt, der eine [Liste](../List/README.md) mit `@hello-pangea/dnd`, der empfohlenen Drag-and-Drop-Bibliothek, neu anordnen lässt.

```tsx
import {ListHelloPangeaDnd} from '@gravity-ui/uikit/hello-pangea-dnd';
```

Dieser Einstiegspunkt benötigt `@hello-pangea/dnd` und React 18 oder neuer: Installieren Sie die Bibliothek neben `@gravity-ui/uikit`, eine Kopie davon – `Draggable` und `DragDropContext` Ihres Codes müssen aus derselben Kopie wie das Kit stammen.

## Verwendung

Umschließen Sie die Liste und geben Sie ihr `role="grid"`: Der Ziehpunkt ist interaktiv, und interaktiver Inhalt innerhalb einer Zeile ist nur im Grid-Rollenmodell gültig. Der Wrapper besitzt den `DragDropContext` und den `Droppable`, nimmt dieselben `items` wie die Liste und gibt das neu geordnete Array zurück.

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

Jede Zeile erhält einen Ziehpunkt an ihrem äußersten Rand. Die Maus zieht eine Zeile am Ziehpunkt; die Tastatur erreicht den Ziehpunkt mit `←`/`→`, hebt die Zeile mit `Leertaste` an, bewegt sie mit `↑`/`↓` und lässt sie mit `Leertaste` fallen (`Esc` bricht ab). Zeilen, die die Liste deaktiviert, sind nicht ziehbar, und `getItemDragDisabled` heftet weitere davon an. Der Name des Ziehpunkts und die Anweisungen, die die Bibliothek für Screenreader gibt, folgen der mit `configure` eingestellten Sprache (unter einem eigenen `DragDropContext` übergeben Sie dessen `dragHandleUsageInstructions` selbst).

Eine Liste innerhalb eines `Sheet`, eines `Dialog` oder eines animierten Popups lässt sich auf die gleiche Weise ziehen: Das Kit kompensiert einen transformierten Vorfahren. Für Daten, die keine Arrays im Speicher sind, verwenden Sie `onDrop` anstelle von `onItemsUpdate`.

Das Kit deckt flache Listen ab: Die Bibliothek benötigt zusammenhängende Indizes, und diese werden über `items` gezählt. Abschnitte sind nicht ziehbar.

Die Kinder des Wrappers sind die Liste und nichts anderes: Der Adapter geht zur nächstgelegenen Liste darunter, sodass ein `Select` oder ein `Menu` neben der Liste diese übernehmen würde. `getItemId` und `getItemDragDisabled` sollten stabil sein – eine Inline-Funktion rendert jede Zeile bei jedem Rendern des übergeordneten Elements neu.

### Die Slots einer Zeile

Die Standardzeile ist `ListHelloPangeaDnd.Row`. Rendern Sie sie in `renderItem`, um die Slots der Zeilenansicht zu füllen.

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

### Benutzerdefinierter Markup

Wenn eine Zeile nicht `List.ItemView` ist, schreiben Sie den `Draggable` selbst und nehmen Sie die Verkabelung von `getHelloPangeaRowProps`; der Ziehpunkt und der Inhalt erhalten jeweils eine Zelle. Der Index des `Draggable` ist die Position des Elements in `items`.

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

Spreaden Sie `handleProps` anstelle der `dragHandleProps` der Bibliothek: Neben dem Grid-Vertrag halten sie einen Touch-Drag unter Virtualisierung am Leben.

`HelloPangeaDragHandle` ist der Griff mit einem zugänglichen Namen; seine Kinder ersetzen das Symbol.

### Virtualisierung

Platzieren Sie `ListVirtualizer` **außerhalb** des Wrappers: Der Wrapper liest die Virtualisierung der Liste und schaltet den `Droppable` in den virtuellen Modus. Unter einer `minItemsCount` zählt er seine `items` so, wie die Liste ihre Zeilen zählt, sodass eine Liste unter dem Schwellenwert im Standardmodus bleibt.

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

Die gezogene Zeile wird von einer Kopie gezeichnet – einer Kopie der `Row` –, sodass eine benutzerdefinierte Zeile `renderClone` benötigt: Sie erhält `{item, provided, snapshot}` der Kopie. Zeilenhöhen dürfen sich während eines Ziehvorgangs nicht ändern: Die Bibliothek misst sie beim Anheben.

### Mehrere Listen

Unter einem eigenen `DragDropContext` – mehrere Listen, Bewegungen zwischen ihnen – rendert der Wrapper keinen Kontext. Geben Sie jeder Liste einen Zustand von `useListHelloPangeaDnd` und eine `droppableId`, und rufen Sie die Handler jedes Zustands aus dem Kontext auf; `onItemsUpdate` und `onDrop` des Wrappers funktionieren wie gewohnt. Ein Zustand ordnet nur seine eigene Liste neu an; eine Bewegung von einer Liste in eine andere ist Ihre Aufgabe, die Sie in `onDragEnd` behandeln müssen.

```tsx
import {DragDropContext} from '@hello-pangea/dnd';
import {List} from '@gravity-ui/uikit';
import {ListHelloPangeaDnd, useListHelloPangeaDnd} from '@gravity-ui/uikit/hello-pangea-dnd';

const todo = useListHelloPangeaDnd();
const done = useListHelloPangeaDnd();
```

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
    <List role="grid" aria-label="Zu erledigen" items={todoItems} getItemContent={(i) => i.title} />
  </ListHelloPangeaDnd>
  <ListHelloPangeaDnd
    items={doneItems}
    onItemsUpdate={setDoneItems}
    state={done}
    droppableId="done"
  >
    <List role="grid" aria-label="Erledigt" items={doneItems} getItemContent={(i) => i.title} />
  </ListHelloPangeaDnd>
</DragDropContext>;
```

Ohne `state` rendert jeder Wrapper einen eigenen `DragDropContext`, und verschachtelte Kontexte duplizieren die Sensoren der Bibliothek.

## Eigenschaften

### ListHelloPangeaDnd

| Name                | Beschreibung                                                                                        |                                      Typ                                       |        Standard        |
| :------------------ | :-------------------------------------------------------------------------------------------------- | :-----------------------------------------------------------------------------: | :-------------------: |
| items               | Die Elemente der Liste im Inneren, in der gleichen Reihenfolge                                      |                                 `readonly T[]`                                  |                       |
| getItemId           | Die ID eines Elements; sie sollte gleich der `getItemId` der `List` sein                             |                              `(item: T) => string`                              | die der `List` |
| onItemsUpdate       | Das neu geordnete Array, `moveItem` wurde bereits angewendet                                        |                             `(items: T[]) => void`                              |                       |
| onDrop              | Der Drop als IDs und eine Kante                                                                     |     `(fromId: string, toId: string, position: 'before' \| 'after') => void`     |                       |
| droppableId         | Die ID des `Droppable`                                                                              |                                    `string`                                     | eine automatische ID |
| getItemDragDisabled | Zeilen, die nicht gezogen werden können, zusätzlich zu den deaktivierten                           |                             `(item: T) => boolean`                              |                       |
| renderClone         | Virtueller Modus: die Kopie einer gezogenen Zeile, erforderlich für benutzerdefinierte Zeilen       |                `({item, provided, snapshot}) => React.ReactNode`                | eine Kopie der `Row`  |
| state               | `useListHelloPangeaDnd` Zustand für Ihren eigenen `DragDropContext` — siehe [Mehrere Listen](#mehrere-listen) |                          `UseListHelloPangeaDndResult`                          |                       |
| droppableProps      | An den `Droppable` übergeben                                                                        | `Pick<DroppableProps, 'isDropDisabled' \| 'ignoreContainerClipping' \| 'type'>` |                       |
| children            | Die `List`, mit `role="grid"`                                                                       |                                   `ReactNode`                                   |                       |

### ListHelloPangeaDnd.Row

| Name            | Beschreibung                                                      |         Typ          |      Standard      |
| :-------------- | :--------------------------------------------------------------- | :------------------: | :----------------: |
| ctx             | Das erste Argument von `renderItem`                               |   `ListItemContext`   |                   |
| helpers         | Das zweite Argument von `renderItem`                              |   `ListItemHelpers`   |                   |
| children        | Der Inhalt der Zeile                                           |      `ReactNode`      |   `ctx.content`   |
| startContent    | Der Start-Slot der Ansicht                                       |      `ReactNode`      |                   |
| description     | Die zweite Zeile der Ansicht                                      |      `ReactNode`      |                   |
| endContent      | Der End-Slot der Ansicht                                         |      `ReactNode`      |                   |
| handleLabel     | Der zugängliche Name des Handles                                |       `string`        | "Drag to reorder" |
| handlePlacement | Die Kante des Handles: der äußerste Slot oder nach `endContent` |  `'start' \| 'end'`   |     `'start'`     |
| className       | Die CSS-Klasse der Zeile                                         |       `string`        |                   |
| style           | Der Inline-Stil der Zeile                                      | `React.CSSProperties` |                   |
| qa              | Das `data-qa`-Attribut der Zeile                               |       `string`        |                   |

### getHelloPangeaRowProps

Nimmt `{ctx, helpers, provided, snapshot, handleLabel?}` — die Argumente von `renderItem` und der Renderfunktion von `Draggable` — und gibt zurück:

| Name        | Beschreibung                                                                                        |            Typ             |
| :---------- | :-------------------------------------------------------------------------------------------------- | :------------------------: |
| rowProps    | Die Props der Zeile: die der Liste mit den Draggable-Props und dem Ref der Bibliothek     |     `ListItemDOMProps`      |
| handleProps | Die Props des Handles: `dragHandleProps`, `tabIndex={-1}` und der Name; dekorativ, wenn deaktiviert | `HelloPangeaHandleDOMProps` |
| cellProps   | Die Props einer Zelle                                                                                |     `ListCellDOMProps`      |

### HelloPangeaDragHandle

Nimmt die Props eines `span` außer `tabIndex` und:

| Name       | Beschreibung                       |    Typ     |      Standard      |
| :--------- | :-------------------------------- | :--------: | :----------------: |
| aria-label | Der zugängliche Name des Handles |  `string`   | "Drag to reorder" |
| qa         | Das `data-qa`-Attribut           |  `string`   |                   |
| children   | Der Inhalt anstelle des Griffs   | `ReactNode` |   das Griff-Icon   |

### useListHelloPangeaDnd

Der Zustand des Ziehens für einen `DragDropContext` Ihrer Wahl — der `state` des Wrappers (keine Props erforderlich) oder die `dnd`-Prop einer manuell verdrahteten Liste. Die optionalen Props:

| Name   | Beschreibung                                                                                             |                                  Typ                                   |
| :----- | :------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------: |
| ids    | Die IDs der Zeilen in der Reihenfolge der Liste; Standardwert — die von `ListHelloPangeaDnd` im gegebenen Zustand |                           `readonly string[]`                           |
| onDrop | Der Drop — paarweise mit `moveItem(items, fromId, toId, position)`; optional unter einem `ListHelloPangeaDnd`  | `(fromId: string, toId: string, position: 'before' \| 'after') => void` |

Was es zurückgibt:

| Name        | Beschreibung                                               |              Typ              |
| :---------- | :--------------------------------------------------------- | :---------------------------: |
| draggingId  | Was gerade gezogen wird — geht in den Adapter der Liste   |        `string \| null`        |
| onDragStart | Für den `DragDropContext`                                 |  `(start: DragStart) => void`  |
| onDragEnd   | Für den `DragDropContext`; ruft `onDrop` bei einer echten Bewegung auf  | `(result: DropResult) => void` |