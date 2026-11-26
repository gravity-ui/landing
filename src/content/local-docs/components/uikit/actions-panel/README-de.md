Verwenden Sie `ActionsPanel`, um mehrere Schaltflächen nebeneinander anzuzeigen.
Wenn nicht genügend Platz vorhanden ist, werden Schaltflächen, die nicht passen, in ein Überlaufmenü aufgenommen.

## Beispiel

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

## Aktionssymbole

Verwenden Sie die Eigenschaften `Button` oder `DropdownMenu`, um Symbole festzulegen.

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

## Hinweis

Verwenden Sie die Eigenschaft `renderNote`, um eine Notiz anzuzeigen.

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

## Gruppen im Dropdown-Menü

Verwenden Sie `action.dropdown.group` zum Gruppieren von Aktionen im Dropdown-Menü.

GRAVITY_TRANSLATION_BLOCK_6_END

GRAVITY_TRANSLATION_BLOCK_7_END

## Aktionsuntermenü und verschachteltes Dropdown-Menü

Siehe das `actions`-Beispiel unten und die Dokumentation zur Komponente `DropdownMenu`.

GRAVITY_TRANSLATION_BLOCK_8_END

GRAVITY_TRANSLATION_BLOCK_9_END

## Eigenschaften

| Name           | Beschreibung                                               |          Typ           | Standard |
| :------------- | :--------------------------------------------------------- | :--------------------: | :------: |
| actions        | Array von Aktionen                                         |  `ActionsPanelItem[]`  |          |
| onClose        | Optionaler Handler für Klicks auf die Schließen-Schaltfläche |      `() => void`      |          |
| renderNote     | Optionaler Render-Prop zur Anzeige des Inhalts einer Notiz | `() => React.ReactNode` |          |
| className      | Optionales HTML-Attribut `class`                           |        `string`        |          |
| noteClassName  | Optionales HTML-Attribut `class`                           |        `string`        |          |
| maxRowActions  | Maximale Anzahl von Aktionen in einer Zeile                |        `number`        |   `4`    |

## ActionsPanelItem:

| Name      | Beschreibung                                   |                    Typ                    | Standard |
| :-------- | :--------------------------------------------- | :---------------------------------------: | :------: |
| id        | Eindeutige Aktions-ID                          |                  `string`                 |          |
| dropdown  | Einstellungen für Dropdown-Aktion im Überlaufmenü | `{item: DropdownMenuItem; group?: string}` |          |
| button    | Einstellungen für Schaltflächenaktion          |           `{props: ButtonProps}`          |          |
| collapsed | Wenn `true`, dann ist das Element immer im Dropdown |                 `boolean`                 |          |