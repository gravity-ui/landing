`Popup` positioniert schwebende Inhalte über der Seite, verankert an einem Referenzelement – dem Low-Level-Primitive hinter Tooltips, Popovers und Menüs, aufgebaut auf [Floating UI](https://floating-ui.com). Seine Sichtbarkeit wird mit der `open`-Eigenschaft gesteuert; seine Kinder werden innerhalb der [`Portal`](../Portal)-Komponente gerendert, es sei denn, Sie setzen die `disablePortal`-Eigenschaft.

```tsx
import {Popup} from '@gravity-ui/uikit';
```

## Anker

Um den Anker eines schwebenden Elements anzugeben, können Sie die `anchorElement`-Eigenschaft verwenden.

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

## Platzierung

Verwenden Sie die `placement`-Eigenschaft, um die Position des `Popup` um das Anker-Element zu verwalten.
Standardmäßig verwendet `Popup` [flip middleware](https://floating-ui.com/docs/flip), um Überlauf zu verhindern.
Wenn die Eigenschaft auf ein Array gesetzt ist, wird das erste Element als Standard-Platzierungswert verwendet, die restlichen werden als [Fallback-Platzierungen](https://floating-ui.com/docs/flip#fallbackplacements) verwendet.
Es ist auch akzeptabel, die Werte `auto`, `auto-start`, `auto-end` zu verwenden, um [autoPlacement middleware](https://floating-ui.com/docs/autoPlacement) anstelle von flip zu verwenden.

GRAVITY_TRANSLATION_BLOCK_3_END

## Eigenschaften

| Name                    | Beschreibung                                                                               |                             Typ                              |     Standard     |
| :---------------------- | :----------------------------------------------------------------------------------------- | :-----------------------------------------------------------: | :-------------: |
| anchorElement           | Anker-Element. Kann auch ein `VirtualElement` sein                                         |                     `PopupAnchorElement`                      |                 |
| aria-describedby        | `aria-describedby`-Attribut. Verwenden Sie es, wenn Sie sowohl Beschriftungs- als auch Beschreibungsknoten haben |                           `string`                            |                 |
| aria-label              | `aria-label`-Attribut. Verwenden Sie es nur, wenn Sie keine sichtbare Beschriftung haben      |                           `string`                            |                 |
| aria-labelledby         | `aria-labelledby`-Attribut. Bevorzugt, wenn Sie eine sichtbare Beschriftung haben            |                           `string`                            |                 |
| children                | Beliebiger React-Inhalt                                                                    |                       `React.ReactNode`                       |                 |
| className               | `class`-HTML-Attribut für den Root-Knoten                                                  |                           `string`                            |                 |
| container               | DOM-Element, an das die Komponente über `Portal` angehängt wird                            |                         `HTMLElement`                         | `document.body` |
| disableEscapeKeyDown    | Deaktiviert das Schließen durch `Esc`                                                      |                           `boolean`                           |     `false`     |
| disableFocusOut         | Deaktiviert das Schließen bei Fokusverlust                                                 |                           `boolean`                           |     `false`     |
| disableOutsideClick     | Deaktiviert das Schließen bei Klicks außerhalb des Popups                                 |                           `boolean`                           |     `false`     |
| disablePortal           | Deaktiviert die Verwendung von `Portal`                                                    |                           `boolean`                           |     `false`     |
| disableTransition       | Deaktiviert die Animation beim Ein-/Ausblenden des Popups                                  |                           `boolean`                           |     `false`     |
| floatingClassName       | Zusätzliche Klasse für das `Floating UI`-Element                                           |                           `string`                            |                 |
| floatingContext         | `Floating UI`-Kontext zur Bereitstellung von Interaktionen                                 |                     `FloatingRootContext`                     |                 |
| floatingInteractions    | Überschreibt `Floating UI`-Interaktionen                                                   |                     `Array<ElementProps>`                     |                 |
| floatingMiddlewares     | `Floating UI`-Middlewares. Wenn gesetzt, überschreiben sie die Standard-Middlewares vollständig. |                      `Array<Middleware>`                      |                 |
| floatingStyles          | Stile für das `Floating UI`-Element                                                        |                     `React.CSSProperties`                     |                 |
| focusOrder              | Die Reihenfolge des Fokus-Kreislaufs                                                       |        `Array<'reference' \| 'floating' \| 'content'>`        |  `['content']`  |
| hasArrow                | Rendert einen Pfeil, der auf den Anker zeigt                                               |                           `boolean`                           |     `false`     |
| id                      | `id`-HTML-Attribut                                                                         |                           `string`                            |                 |
| initialFocus            | Das anfänglich fokussierte Element. Eine positive Zahl ist der Index des fokussierbaren Elements. |               `number` `React.Ref<HTMLElement>`               |                 |
| keepMounted             | `Popup` wird beim Ausblenden nicht aus dem DOM entfernt                                    |                           `boolean`                           |     `false`     |
| modal                   | Aktiviert das Fokus-Falle-Verhalten                                                        |                           `boolean`                           |     `false`     |
| offset                  | `Floating UI`-Offset-Wert                                                                  |                         `PopupOffset`                         |       `4`       |
| onOpenChange            | Behandelt das Ereignis für die Änderung des Öffnungszustands von `Popup`                    |                          `Function`                           |                 |
| onTransitionIn          | Beim Start der Popup-Öffnungsanimation                                                     |                          `Function`                           |                 |
| onTransitionInComplete  | Nach Abschluss der Popup-Öffnungsanimation                                                 |                          `Function`                           |                 |
| onTransitionOut         | Beim Start der Popup-Schließungsanimation                                                  |                          `Function`                           |                 |
| onTransitionOutComplete | Nach Abschluss der Popup-Schließungsanimation                                              |                          `Function`                           |                 |
| open                    | Verwaltet die Sichtbarkeit von `Popup`                                                     |                           `boolean`                           |     `false`     |
| placement               | `Floating UI`-Platzierung                                                                  | `Placement` `Array<Placement>` `auto` `auto-start` `auto-end` |                 |
| qa                      | Testattribut (`data-qa`)                                                                   |                           `string`                            |                 |
| returnFocus             | Element, das beim Schließen fokussiert werden soll                                         |              `boolean` `React.Ref<HTMLElement>`               |     `true`      |
| role                    | Barrierefreiheitsrolle für das Popup                                                       |                           `string`                            |                 |
| strategy                | `Floating UI`-Positionierungsstrategie                                                     |                      `absolute` `fixed`                       |   `absolute`    |
| style                   | `style`-HTML-Attribut für den Root-Knoten                                                  |                     `React.CSSProperties`                     |                 |

## CSS API

| Name                         | Beschreibung      |
| :--------------------------- | :--------------- |
| `--g-popup-background-color` | Hintergrundfarbe |
| `--g-popup-border-color`     | Randfarbe     |
| `--g-popup-border-radius`    | Eckenradius    |
| `--g-popup-border-width`     | Randbreite     |