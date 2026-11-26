Der `TableColumnSetup`-Komponente bietet eine Benutzeroberfläche zur Konfiguration der Sichtbarkeit und Reihenfolge von Tabellenspalten. Sie zeigt eine Schaltfläche an, die ein Popup mit einer Liste verfügbarer Spalten öffnet, sodass Benutzer Spalten ein-/ausblenden und optional per Drag & Drop neu anordnen können.

```tsx
import {TableColumnSetup} from '@gravity-ui/uikit';
```

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

## Sortierbare Spalten

Aktivieren Sie die Drag & Drop-Funktionalität, damit Benutzer Spalten neu anordnen können, indem Sie die Eigenschaft `sortable` auf `true` setzen.

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

## Anwendungsmodi

Steuern Sie, wann Änderungen angewendet werden, mit der Eigenschaft `hideApplyButton`:

- `true` - Änderungen werden sofort angewendet, wenn der Benutzer Spalten umschaltet
- `false` - Änderungen werden erst angewendet, wenn der Benutzer auf die Schaltfläche "Anwenden" klickt

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

## Statusanzeige

Zeigen Sie die Anzahl der ausgewählten Spalten in der Umschalt-Schaltfläche an, indem Sie die Eigenschaft `showStatus` aktivieren.

GRAVITY_TRANSLATION_BLOCK_6_END

GRAVITY_TRANSLATION_BLOCK_7_END

## Benutzerdefinierter Umschalter

Passen Sie die Auslöser-Schaltfläche mit der Eigenschaft `renderSwitcher` an.

GRAVITY_TRANSLATION_BLOCK_8_END

GRAVITY_TRANSLATION_BLOCK_9_END

## Eigenschaften

| Name            | Beschreibung                                                     |                            Typ                             | Standard |
| :-------------- | :--------------------------------------------------------------- | :----------------------------------------------------------: | :------: |
| items           | Array von Spaltenkonfigurationselementen                         |                  `TableColumnSetupItem[]`                  |          |
| onUpdate        | Callback, der aufgerufen wird, wenn sich die Spaltenkonfiguration ändert |          `(items: TableColumnSetupItem[]) => void`          |          |
| disabled        | Deaktiviert die Umschalt-Schaltfläche                            |                          `boolean`                          | `false`  |
| sortable        | Aktiviert das Drag & Drop-Sortieren von Spalten                  |                          `boolean`                          | `true`   |
| hideApplyButton | Wann Änderungen angewendet werden: sofort oder manuell über die Schaltfläche "Anwenden" |                          `boolean`                          | `false`  |
| showStatus      | Zeigt die Anzahl der ausgewählten/gesamten Spalten in der Umschalt-Schaltfläche an |                          `boolean`                          | `false`  |
| popupWidth      | Breite des Popups                                                |                      `number \| 'fit'`                      |          |
| popupPlacement  | Position des Popups relativ zum Auslöser                         |      [`PopupPlacement`](../Popup/README.md#properties)      |          |
| renderSwitcher  | Benutzerdefinierte Render-Funktion für die Umschalt-Schaltfläche | `(props: SwitcherProps) => React.ReactElement \| undefined` |          |
| switcher        | **Veraltet.** Verwenden Sie stattdessen `renderSwitcher`         |              `React.ReactElement \| undefined`              |          |
| getItemTitle    | Funktion zum Abrufen des Elementtitels                           |      `(item: TableColumnSetupItem) => React.ReactNode`      |          |
| className       | Benutzerdefinierte CSS-Klasse für das Root-Element              |                          `string`                           |          |

### TableColumnSetupItem

| Name     | Beschreibung                                    |        Typ         | Standard |
| :------- | :---------------------------------------------- | :----------------: | :------: |
| id       | Eindeutige Kennung für die Spalte               |      `string`      |          |
| title    | Angezeigter Titel für die Spalte                |  `React.ReactNode` |          |
| selected | Ob die Spalte derzeit sichtbar ist              |      `boolean`     |          |
| required | Ob die Spalte erforderlich ist (kann nicht ausgeblendet werden) |      `boolean`     |          |
| sticky   | Feste Positionierung für die Spalte             | `'left' \| 'right'`|          |

### SwitcherProps
GRAVITY_TRANSLATION_BLOCK_10_END

| Name      | Beschreibung                            |                   Typ                    |
| :-------- | :-------------------------------------- | :---------------------------------------: |
| onClick   | Klick-Ereignisbehandlungsroutine für den Schalter |  `React.MouseEventHandler<HTMLElement>`   |
| onKeyDown | KeyDown-Ereignisbehandlungsroutine für den Schalter | `React.KeyboardEventHandler<HTMLElement>` |