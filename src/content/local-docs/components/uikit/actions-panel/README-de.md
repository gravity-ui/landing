GRAVITY_TRANSLATION_BLOCK_0_END

Verwenden Sie `ActionsPanel`, um mehrere Schaltflächen nebeneinander anzuzeigen.
Wenn nicht genügend Platz vorhanden ist, werden Schaltflächen, die nicht passen, in ein Überlaufmenü aufgenommen.
Der Überlauf verwendet `Menu`; `menu.item` akzeptiert `MenuItemProps`.

## Beispiel

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

## Aktionssymbole

Verwenden Sie die Eigenschaften `Button` oder `menu.item`, um Symbole festzulegen.

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

## Hinweis

Verwenden Sie die Eigenschaft `renderNote`, um eine Notiz anzuzeigen.

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

## Gruppen im Überlaufmenü

Verwenden Sie `action.menu.group`, um Aktionen im Überlaufmenü zu gruppieren.

GRAVITY_TRANSLATION_BLOCK_7_END

GRAVITY_TRANSLATION_BLOCK_8_END

## Aktionsuntermenü und verschachteltes Menü

Übergeben Sie ein `Menu` als direktes Kind von `menu.item.children`, um ein Untermenü hinzuzufügen. Eine sichtbare Aktionsschaltfläche verwendet dasselbe Untermenü.

GRAVITY_TRANSLATION_BLOCK_9_END

GRAVITY_TRANSLATION_BLOCK_10_END

## Eigenschaften

| Name          | Beschreibung                                               |          Typ           | Standard |
| :------------ | :--------------------------------------------------------- | :--------------------: | :------: |
| actions       | Array von Aktionen                                         |  `ActionsPanelItem[]`  |          |
| onClose       | Optionaler Handler für den Klick auf die Schließen-Schaltfläche |      `() => void`      |          |
| renderNote    | Optionales Render-Prop zur Anzeige des Inhalts einer Notiz | `() => React.ReactNode` |          |
| className     | Optionales HTML-Attribut `class`                           |        `string`        |          |
| noteClassName | Optionales HTML-Attribut `class`                           |        `string`        |          |
| maxRowActions | Maximale Anzahl von Aktionen in einer Zeile                |        `number`        |   `4`    |

## ActionsPanelItem

| Name   | Beschreibung                                     |                  Typ                   | Standard |
| :----- | :----------------------------------------------- | :------------------------------------: | :------: |
| id     | Eindeutige Aktions-ID                            |                `string`                |          |
| menu   | Einstellungen für die Aktion im Überlaufmenü     | `{item: MenuItemProps; group?: string}` |          |
| button | Einstellungen für die Schaltflächenaktion        |         `{props: ButtonProps}`         |          |
| collapsed | Wenn `true`, befindet sich das Element immer im Überlaufmenü |                `boolean`                |          |