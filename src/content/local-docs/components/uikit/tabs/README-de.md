GRAVITY_TRANSLATION_BLOCK_0_END
Die Tabs-Komponente wird verwendet, um Inhalte zu erkunden, zu organisieren und zwischen verschiedenen Ansichten zu wechseln.

```tsx
import {TabProvider, TabList, Tab, TabPanel} from '@gravity-ui/uikit';
```

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

### Komponenten

- [TabProvider](#tabprovider)
- [TabList](#tablist)
- [Tab](#tab)
- [TabPanel](#tabpanel)

## TabProvider

Eine Komponente, die die Funktionalität zur Auswahl von Tabs bereitstellt.

## Eigenschaften

| Name     | Beschreibung                                                    |      Typ       | Standard |
| :------- | :-------------------------------------------------------------- | :------------: | :------: |
| children | Liste von Tabs und Tab-Panels, wahrscheinlich mit einigen Wrappern | `React.ReactNode` |          |
| value    | Aktueller Tab-Wert                                              |    `string`    |          |
| onUpdate | Handler zum Aktualisieren des Tabs                              | `(value: string) => void` |          |

## TabList

Komponente, die als Container für eine Reihe von `tabs` dient.

### Größe

Um die Größe der `tabs` zu steuern, verwenden Sie die Eigenschaft `size`. Die Standardgröße ist `m`.

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

### Eigenschaften

`TabList` akzeptiert zusätzlich zu diesen alle gültigen `div`-Element-Eigenschaften:

| Name            | Beschreibung                                                                            |               Typ               | Standard |
| :-------------- | :-------------------------------------------------------------------------------------- | :-----------------------------: | :------: |
| children        | Liste von Tabs, wahrscheinlich mit einigen Wrappern                                      |        `React.ReactNode`        |          |
| value           | Aktueller Tab-Wert                                                                      |             `string`            |          |
| onUpdate        | Handler zum Aktualisieren des Tabs                                                      |    `(value: string) => void`    |          |
| className       | CSS-Klasse des Elements                                                                 |             `string`            |          |
| activateOnFocus | Tab beim Fokus aktivieren. Verwenden Sie dies nur, wenn der Inhalt des Panels sofort angezeigt werden kann. |           `boolean`           | `false`  |
| size            | Elementgröße                                                                            |     `"m"` `"l"` `"xl"`      |  `"m"`   |
| contentOverflow | Wie mit Elementen umgegangen wird, die horizontal nicht passen (umbruch, scrollen oder ein **Mehr**-Menü) | `"wrap"` `"scroll"` `"collapse"` | `"wrap"` |
| moreLabel       | Beschriftung für den Trigger zur Umbruch-Überlaufanzeige, wenn der aktive Tab in der Liste sichtbar ist |        `React.ReactNode`        | `"More"` |
| qa              | HTML `data-qa`-Attribut, verwendet in Tests                                             |             `string`            |          |

## Tab

Diese Komponente wird zum Rendern von Tab-Elementen verwendet.

### Icon

Wird verwendet, wenn Sie ein Symbol für ein Tab-Element anzeigen möchten.

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

### Zustände

Das Tab-Element hat eine Deaktivierungsflagge.

GRAVITY_TRANSLATION_BLOCK_7_END

GRAVITY_TRANSLATION_BLOCK_8_END

### Zähler

Wird verwendet, wenn Sie eine Zahl für ein Tab-Element anzeigen möchten.

GRAVITY_TRANSLATION_BLOCK_9_END

GRAVITY_TRANSLATION_BLOCK_10_END

### Beschriftung

Wird verwendet, wenn Sie eine Beschriftung für ein Tab-Element anzeigen möchten.

GRAVITY_TRANSLATION_BLOCK_11_END

GRAVITY_TRANSLATION_BLOCK_12_END

### Überlauf des Inhalts

Wird verwendet, wenn Sie Tab-Elemente einklappen möchten.

GRAVITY_TRANSLATION_BLOCK_13_END

GRAVITY_TRANSLATION_BLOCK_14_END

### Eigenschaften

`Tab` akzeptiert zusätzlich zu diesen alle gültigen `button`- oder `a`-Element-Eigenschaften:

| Name      | Beschreibung                             |        Typ          | Standard |
| :-------- | :--------------------------------------- | :-----------------: | :------: |
| value     | Tab-Wert                                 |      `string`       |          |
| title     | Tab-Titel                                |      `string`       |          |
| icon      | Symbol, das am Anfang angezeigt wird     |  `React.ReactNode`  |          |
| counter   | Inhalt, der am Ende angezeigt wird      |  `number` `string`  |          |
| href      | Eine URL, zu der verlinkt werden soll.   |      `string `      |          |
| label     | `<Label>`, das am Ende angezeigt wird    |  `React.ReactNode`  |          |
| disabled  | Inaktiver Zustand                        |      `boolean`      |          |
| component | Überschreibt die Root-Komponente         | `React.ElementType` |          |
| children  | Inhalt des Tabs                          |  `React.ReactNode`  |          |
| qa        | HTML `data-qa`-Attribut, verwendet in Tests |      `string`       |          |

## TabPanel

Ist ein Container-Element für Inhalte, die einem Tab zugeordnet sind.

### Eigenschaften

`TabPanel` akzeptiert alle gültigen `div`-Element-Eigenschaften zusätzlich zu diesen:

| Name     | Beschreibung           |       Typ        | Standard |
| :------- | :--------------------- | :--------------: | :------: |
| children | Inhalt des Panels      | `React.ReactNode` |          |
| value    | Aktiver Tab-Wert       |     `string`     |          |
| qa       | HTML `data-qa`-Attribut, verwendet in Tests |     `string`     |          |

## CSS API

| Name                             | Beschreibung               |
| :------------------------------- | :------------------------- |
| `--g-tabs-border-width`          | Tabs-Randbreite            |
| `--g-tabs-item-height`           | Tabs-Element-Höhe          |
| `--g-tabs-item-border-width`     | Tabs-Element-Randbreite    |
| `--g-tabs-item-gap`              | Abstand zwischen Tabs      |
| `--g-tabs-vertical-item-height`  | Vertikale Tabs-Element-Höhe |
| `--g-tabs-vertical-item-padding` | Vertikale Tabs-Element-Abstand |