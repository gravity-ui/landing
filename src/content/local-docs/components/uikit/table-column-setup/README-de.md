<!--GITHUB_BLOCK-->

# TableColumnSetup

<!--/GITHUB_BLOCK-->

Der `TableColumnSetup`-Komponente bietet eine Benutzeroberfläche zur Konfiguration der Sichtbarkeit und Reihenfolge von Tabellenspalten. Sie zeigt eine Schaltfläche an, die ein Popup mit einer Liste verfügbarer Spalten öffnet, sodass Benutzer Spalten ein-/ausblenden und optional per Drag & Drop neu anordnen können.

```tsx
import {TableColumnSetup} from '@gravity-ui/uikit';
```

<!--SANDBOX
import {TableColumnSetup} from '@gravity-ui/uikit';

const items = [
    {id: 'name', title: 'Name', selected: true, required: true},
    {id: 'email', title: 'Email', selected: true},
    {id: 'phone', title: 'Phone', selected: false},
];

export default function () {
    return <TableColumnSetup items={items} onUpdate={(updatedItems) => console.log(updatedItems)} />;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
const items = [
  {id: 'name', title: 'Name', selected: true, required: true},
  {id: 'email', title: 'Email', selected: true},
  {id: 'phone', title: 'Phone', selected: false},
];

<TableColumnSetup items={items} onUpdate={(updatedItems) => console.log(updatedItems)} />;
```

<!--/GITHUB_BLOCK-->

## Sortierbare Spalten

Aktivieren Sie die Drag & Drop-Funktionalität, damit Benutzer Spalten neu anordnen können, indem Sie die Eigenschaft `sortable` auf `true` setzen.

<!--SANDBOX
import {TableColumnSetup} from '@gravity-ui/uikit';

const items = [
    {id: 'name', title: 'Name', selected: true, required: true},
    {id: 'email', title: 'Email', selected: true},
    {id: 'phone', title: 'Phone', selected: false},
];

export default function () {
    return (
        <TableColumnSetup
            items={items}
            sortable
            onUpdate={(updatedItems) => console.log(updatedItems)}
        />
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<TableColumnSetup items={items} sortable onUpdate={(updatedItems) => console.log(updatedItems)} />
```

<!--/GITHUB_BLOCK-->

## Anwendungsmodi

Steuern Sie, wann Änderungen angewendet werden, mit der Eigenschaft `hideApplyButton`:

- `true` - Änderungen werden sofort angewendet, wenn der Benutzer Spalten umschaltet
- `false` - Änderungen werden erst angewendet, wenn der Benutzer auf die Schaltfläche "Anwenden" klickt

<!--SANDBOX
import {TableColumnSetup} from '@gravity-ui/uikit';

const items = [
    {id: 'name', title: 'Name', selected: true, required: true},
    {id: 'email', title: 'Email', selected: true},
    {id: 'phone', title: 'Phone', selected: false},
];

export default function () {
    return (
        <TableColumnSetup
            items={items}
            hideApplyButton
            onUpdate={(updatedItems) => console.log(updatedItems)}
        />
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<TableColumnSetup
  items={items}
  hideApplyButton
  onUpdate={(updatedItems) => console.log(updatedItems)}
/>
```

<!--/GITHUB_BLOCK-->

## Statusanzeige

Zeigen Sie die Anzahl der ausgewählten Spalten in der Umschalt-Schaltfläche an, indem Sie die Eigenschaft `showStatus` aktivieren.

<!--SANDBOX
import {TableColumnSetup} from '@gravity-ui/uikit';

const items = [
    {id: 'name', title: 'Name', selected: true, required: true},
    {id: 'email', title: 'Email', selected: true},
    {id: 'phone', title: 'Phone', selected: false},
];

export default function () {
    return <TableColumnSetup items={items} showStatus onUpdate={(updatedItems) => console.log(updatedItems)} />;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<TableColumnSetup
  items={items}
  showStatus={true}
  onUpdate={(updatedItems) => console.log(updatedItems)}
/>
```

<!--/GITHUB_BLOCK-->

## Benutzerdefinierter Umschalter

Passen Sie die Auslöser-Schaltfläche mit der Eigenschaft `renderSwitcher` an.

<!--SANDBOX
import {Button, TableColumnSetup} from '@gravity-ui/uikit';

const items = [
    {id: 'name', title: 'Name', selected: true, required: true},
    {id: 'email', title: 'Email', selected: true},
    {id: 'phone', title: 'Phone', selected: false},
];

export default function () {
    return (
        <TableColumnSetup
            items={items}
            renderSwitcher={({onClick, onKeyDown}) => (
                <Button onClick={onClick} onKeyDown={onKeyDown} view="outlined">
                    Configure Columns
                </Button>
            )}
            onUpdate={(updatedItems) => console.log(updatedItems)}
        />
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<TableColumnSetup
  items={items}
  renderSwitcher={({onClick, onKeyDown}) => (
    <Button onClick={onClick} onKeyDown={onKeyDown} view="outlined">
      Configure Columns
    </Button>
  )}
  onUpdate={(updatedItems) => console.log(updatedItems)}
/>
```

<!--/GITHUB_BLOCK-->

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

| Name      | Beschreibung                            |                   Typ                    |
| :-------- | :-------------------------------------- | :---------------------------------------: |
| onClick   | Klick-Ereignisbehandlungsroutine für den Schalter |  `React.MouseEventHandler<HTMLElement>`   |
| onKeyDown | KeyDown-Ereignisbehandlungsroutine für den Schalter | `React.KeyboardEventHandler<HTMLElement>` |
