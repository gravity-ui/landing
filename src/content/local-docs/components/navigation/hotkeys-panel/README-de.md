Ein Navigationspanel für Hotkey-Dokumentation.
Das Panel zeigt eine Reihe von Hotkeys für Ihre Anwendung mit einer Beschreibung ihres Zwecks an.

```ts
import {HotkeysPanel} from '@gravity-ui/navigation';
```

## Eigenschaften
GRAVITY_TRANSLATION_BLOCK_0_END

| Eigenschaft           | Typ             | Erforderlich | Standard | Beschreibung                                                                                             |
| :-------------------- | :-------------- | :----------: | :------- | :------------------------------------------------------------------------------------------------------- |
| hotkeys               | `Array`         |     ja       |          | Liste der Hotkey-Gruppen                                                                                 |
| title                 | `ReactNode`     |              |          | Der Titel des Panels                                                                                     |
| togglePanelHotkey     | `String`        |              |          | Der Hotkey zum Öffnen/Schließen des Panels                                                               |
| open                  | `Boolean`       |     ja       |          | Ob die Schublade geöffnet ist oder nicht                                                                 |
| onClose               | `Function`      |              |          | Handler zum Schließen der Schublade                                                                      |
| filterable            | `Boolean`       |              | true     | Ob die Suchleiste angezeigt werden soll oder nicht                                                       |
| filterPlaceholder     | `String`        |              |          | Platzhaltertext für die Suchleiste                                                                       |
| filterClassName       | `String`        |              |          | Klassenname für die Suchleiste                                                                           |
| leftOffset            | `Number/String` |              |          | Linker Versatz der Schublade                                                                             |
| topOffset             | `Number/String` |              |          | Oberer Versatz der Schublade                                                                             |
| emptyState            | `ReactNode`     |              |          | Platzhalter, wenn keine Suchergebnisse gefunden werden                                                   |
| className             | `String`        |              |          | Klassenname für die Schublade                                                                            |
| drawerItemClassName   | `String`        |              |          | Klassenname für ein Element in der Schublade                                                             |
| titleClassName        | `String`        |              |          | Klassenname für den Titel                                                                                |
| itemContentClassName  | `String`        |              |          | Klassenname für den Inhalt eines Listenelements                                                          |
| listClassName         | `String`        |              |          | Klassenname für die Liste                                                                                |
| platform              | `'pc'`/`'mac'`  |              | auto     | Plattform für das Format der Hotkey-Anzeige                                                              |
| drawerProps           | `DrawerProps`   |              |          | Zusätzliche Eigenschaften für die `Drawer`-Komponente (style, container, hideVeil, etc.)               |
| disableNavigationOffset | `Boolean`       |              | false    | Ob der automatische linke Versatz basierend auf der Größe von `AsideHeader` deaktiviert werden soll |

Preserve component names, API identifiers, links, and code blocks.
Copy each GRAVITY_TRANSLATION_BLOCK_<number>_END placeholder verbatim on its
own line, in the original order. Keep placeholders outside Markdown code fences.
Translate the surrounding prose and table descriptions. Return Markdown without an outer code fence.
And all the `List` PropTypes, but not `items` and filter props (you can find them [here](https://github.com/gravity-ui/uikit/blob/main/src/components/List/README.md))

## CSS API

| Name                                 | Beschreibung                       | Standard |
| :----------------------------------- | :--------------------------------- | :------: |
| `--hotkeys-panel-width`              | Die Breite des Panels              | `400px`  |
| `--hotkeys-panel-vertical-padding`   | Die oberen und unteren Abstände des Panels | `18px`   |
| `--hotkeys-panel-horizontal-padding` | Die linken und rechten Abstände des Panels | `24px`   |

### Verwendung

Siehe Storybook-Beispiel `src/components/HotkeysPanel/__stories__/HotkeysPanelShowcase`.