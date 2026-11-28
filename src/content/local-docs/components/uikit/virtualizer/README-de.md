GRAVITY_TRANSLATION_BLOCK_0_END

Der Virtualizer rendert nur das Fenster von Zeilen, das gerade sichtbar ist, was Listen mit Zehntausenden von Elementen erschwinglich macht.

```tsx
import {ListVirtualizer, Virtualizer} from '@gravity-ui/uikit/virtualizer';
```

Dieser Einstiegspunkt benötigt `@tanstack/react-virtual`: Es ist eine optionale Peer-Abhängigkeit, also installieren Sie es neben `@gravity-ui/uikit`.

Hier befinden sich zwei Dinge. `Virtualizer` ist die Engine – ein Scroll-Container, der von Ihnen gerenderte Zeilen positioniert und misst. `ListVirtualizer` ist die Virtualisierungsschicht der [List](../List/README.md): Sie umschließt eine `<List>`, und die Liste wird über die Engine gerendert, ohne weitere Änderungen.

## Virtualizer

Das von der Komponente gerenderte Element ist der Scroll-Container selbst, daher muss seine Höhe begrenzt sein. `getItemSize` ist die Schätzung, die verwendet wird, bevor eine Zeile gerendert wird; es sei denn, `measure` ist deaktiviert, ersetzt die gemessene Höhe einer Zeile der obersten Ebene diese nach dem Mounten, weshalb Zeilen mit variabler Höhe keine Konfiguration benötigen.

```tsx
import {Virtualizer} from '@gravity-ui/uikit/virtualizer';

const ROW_HEIGHT = 32;

function Log({records}) {
  return (
    <Virtualizer
      style={{height: 400}}
      count={records.length}
      getItemSize={() => ROW_HEIGHT}
      getItemKey={(index) => records[index].id}
      renderRow={({index}) => <div style={{height: ROW_HEIGHT}}>{records[index].message}</div>}
    />
  );
}
```

## ListVirtualizer

Der Wrapper ist das Einzige, was sich ändert – die Liste darin bleibt, wie sie war. Alle ihre Konfigurations-Props sind optional: Ohne `estimateItemSize` stammen die Zeilenhöhen aus der `size` der Liste.

```tsx
import {List} from '@gravity-ui/uikit';
import {ListVirtualizer} from '@gravity-ui/uikit/virtualizer';

function TrackList({tracks}) {
  return (
    <ListVirtualizer estimateItemSize={28}>
      <List
        aria-label="Archive"
        style={{maxHeight: 480}}
        items={tracks}
        getItemContent={(track) => track.title}
      />
    </ListVirtualizer>
  );
}
```

Die Wurzel der `List` wird zum Scroll-Container, daher liegt es an Ihnen, ihre Höhe zu begrenzen – andernfalls degeneriert das Fenster zur vollständigen Liste. Die Details der Schicht finden Sie im Abschnitt [Virtualization](../List/README.md#virtualization) der List.

### Ein Wrapper für die gesamte App

Der Wrapper ist ein Kontext-Provider: Er deckt jede `List` und `Select` darunter ab, einschließlich der Popups der `Select`s. Mit `minItemsCount` kann er einmal neben dem `Provider` für das Theme stehen und nur die langen Listen virtualisieren – eine Liste mit weniger Zeilen wird gerendert, als ob kein Wrapper vorhanden wäre, jede Zeile im DOM.

```tsx
import {Provider} from '@gravity-ui/uikit';
import {ListVirtualizer} from '@gravity-ui/uikit/virtualizer';

root.render(
  <Provider theme="light">
    <ListVirtualizer minItemsCount={50}>
      <App />
    </ListVirtualizer>
  </Provider>,
);
```

Eine `List` zählt ihre Zeilen, einschließlich der Abschnittsüberschriften. Eine `Select` zählt ihre Optionen ohne die Gruppenüberschriften und ohne den Filter, sodass das Tippen in den Filter die Liste nicht von einem Modus in den anderen umschaltet.

Ein Wrapper innerhalb eines anderen ändert nur das, was ihm gegeben wird, und übernimmt den Rest von dem darüber liegenden, so wie ein verschachtelter Theme-`Provider` es tut. Um eine einzelne Liste unter dem Root-Wrapper herum:

- `<ListVirtualizer overscan={20}>` behält den Schwellenwert des Roots bei und ändert den Puffer;
- `<ListVirtualizer minItemsCount={0}>` virtualisiert die Liste unabhängig von ihrer Größe;
- `<ListVirtualizer minItemsCount={Infinity}>` belässt sie unverändert, und der Chunk wird nicht für sie geladen.

### Laden bei Bedarf

Der Code des Fensters – einschließlich `@tanstack/react-virtual` – ist ein eigener Chunk: Der Import von `ListVirtualizer` bringt ihn nicht in das Bundle der App. Der Chunk wird geladen, wenn die erste Liste, die lang genug für `minItemsCount` ist, gerendert wird, und eine `Select`, die virtualisiert werden soll, beginnt mit dem Laden beim Mounten, bevor sich ihr Popup öffnet. Bis der Chunk eintrifft, zeigt die Liste ihre ersten Zeilen im selben Root an: Die Seite wird nicht leer gelassen, und das Fenster ersetzt sie, sobald es gerendert werden kann, gescrollt zur aktiven Zeile, die die Liste angezeigt hat. Wenn der Chunk nicht geladen werden kann, erreicht der Fehler die nächstgelegene Fehlergrenze der Liste.

> [!NOTE]
> In serverseitig gerendertem HTML hat eine virtualisierte Liste ihre ersten Zeilen: Es gibt kein Viewport, um das Fenster dagegen zu messen, daher übernimmt das Fenster nach der Hydration die Kontrolle. Der Rest der Zeilen befindet sich nicht im Markup – lassen Sie eine Liste unverirtualisiert, wenn ihr gesamter Inhalt vorhanden sein muss.

## Eigenschaften

### Virtualizer

Die restlichen Props werden an das Scroll-Container-Element weitergegeben.

| Name                  | Beschreibung                                                                                             |                          Typ                          | Standardwert |
| :-------------------- | :------------------------------------------------------------------------------------------------------- | :----------------------------------------------------: | :----------: |
| count                 | Die Anzahl der Elemente der obersten Ebene in der Liste                                                  |                        `number`                        |              |
| getItemSize           | Die Höhe eines Elements, einschließlich seiner Kinder; Kinder kommen mit dem `parentKey` an                |            `(index, parentKey?) => number`             |              |
| getItemKey            | Der Schlüssel eines Elements; Kinder kommen mit dem `parentKey` an                                         |              `(index, parentKey?) => Key`              |              |
| renderRow             | Rendert eine Zeile: das Element, den Schlüssel seines Elternteils und eine Callback-Funktion zum Rendern seiner Kinder | `(item, parentKey, renderChildren) => React.ReactNode` |              |
| measure               | Misst die tatsächlichen Höhen der obersten Zeilen nach dem Mounten, anstatt sich auf `getItemSize` zu verlassen |                       `boolean`                        |    `true`    |
| overscan              | Die Anzahl der Zeilen, die oberhalb und unterhalb des sichtbaren Fensters gerendert werden                |                        `number`                        |     `0`      |
| disableVirtualization | Rendert jede Zeile; nützlich für eine Liste, von der bekannt ist, dass sie klein ist                      |                       `boolean`                        |              |
| persistedIndexes      | Zeilen, die im Fenster verbleiben, auch wenn sie aus dem sichtbaren Bereich herausgescrollt werden; jeder Eintrag ist ein Pfad von Indizes in der Hierarchie |                   `Array<number[]>`                    |              |
| loading               | Ob weitere Elemente geladen werden: Bis dies wieder auf `false` gesetzt wird, wird `onLoadMore` nicht erneut aufgerufen |                       `boolean`                        |              |
| onLoadMore            | Wird aufgerufen, wenn das Scrollen das Ende erreicht                                                     |                      `() => void`                      |              |
| apiRef                | Ref für die imperative API: `scrollToIndex`, `scrollToOffset`, `scrollOffset`, `scrollRect`              |              `React.Ref<VirtualizerApi>`               |              |
| containerRef          | Ref des Scroll-Container-Elements                                                                        |                `React.Ref<HTMLElement>`                |              |

### ListVirtualizer

| Name             | Beschreibung                                                                                                                               |            Typ             |          Standard          |
| :--------------- | :----------------------------------------------------------------------------------------------------------------------------------------- | :------------------------: | :------------------------: |
| children         | Die `<List>` darin                                                                                                                        |         `ReactNode`         |                            |
| estimateItemSize | Die Höhenschätzung einer Zeile, bevor sie gerendert wird – eine Konstante oder eine Funktion des Zeilenkontexts                               | `number \| (ctx) => number` | nach der `size` der Liste |
| measure          | Misst die tatsächlichen Höhen der Zeilen nach dem Mounten (Zeilen mit variabler Höhe out of the box)                                        |          `boolean`          |           `true`           |
| minItemsCount    | Eine Liste mit weniger Zeilen wird gerendert, als ob es keinen Wrapper gäbe; ein `Select` zählt seine Optionen, ohne die Gruppenüberschriften und ohne den Filter |          `number`           |            `0`             |
| overscan         | Der Puffer von Zeilen außerhalb des sichtbaren Fensters                                                                                    |          `number`           |            `5`             |

Ein Wrapper innerhalb eines anderen übernimmt die Props, die er nicht vom darüberliegenden erhält: Die Standardwerte in der Tabelle sind die des äußersten Wrappers.