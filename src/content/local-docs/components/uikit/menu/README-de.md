Der `Menu`-Komponente ermöglicht die einfache Erstellung von Ansichten für Aktionslisten.

```tsx
import {Menu} from '@gravity-ui/uikit';
```

Sie verfügt über dedizierte Komponenten für Elemente (`Menu.Item`) und Gruppen (`Menu.Group`). Sie können diese kombinieren, um komplexere Menüs zu erstellen.

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

### Größe

Diese Eigenschaft wird verwendet, um die Menügröße auszuwählen. Der Standardwert ist `m`.

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

## Eigenschaften

| Name      | Beschreibung                                |           Typ           | Standard |
| :-------- | :------------------------------------------ | :---------------------: | :------: |
| size      | Menügröße                                   | `"s"` `"m"` `"l"` `"xl"` |  `"m"`   |
| children  | Kindelement                                 |    `React.ReactNode`    |          |
| className | `class`-HTML-Attribut                       |        `string`         |          |
| style     | `style`-HTML-Attribut                       |  `React.CSSProperties`  |          |
| qa        | `data-qa`-HTML-Attribut, für Tests verwendet |        `string`         |          |

## Menu.Item

Diese Eigenschaft wird zum Rendern von Menüelementen verwendet.

### Symbol

Verwenden Sie die Eigenschaft `iconStart` oder `iconEnd`, um ein Symbol am Anfang oder Ende eines Menüelements anzuzeigen:

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

### Zustände

Mit dieser Eigenschaft können Sie bestimmte Menüelemente aktivieren oder deaktivieren (ausgrauen):

GRAVITY_TRANSLATION_BLOCK_7_END

GRAVITY_TRANSLATION_BLOCK_8_END

### Thema

Dies ermöglicht es Ihnen, das Thema des Menüelements zu ändern. Das Standardthema ist `normal`.

GRAVITY_TRANSLATION_BLOCK_9_END

GRAVITY_TRANSLATION_BLOCK_10_END

### Eigenschaften

| Name             | Beschreibung                                       |           Typ            |  Standardwert  |
| :--------------- | :------------------------------------------------- | :----------------------: | :------------: |
| iconStart        | Menü-Icon vor dem Elementtext                      |        `ReactNode`       |                |
| iconEnd          | Menü-Icon nach dem Elementtext                     |        `ReactNode`       |                |
| selected         | Flag für ausgewähltes Menüelement                  |         `boolean`        |    `false`     |
| disabled         | Flag für deaktiviertes Menüelement                 |         `boolean`        |    `false`     |
| active           | Flag für aktives Menüelement                       |         `boolean`        |    `false`     |
| href             | URL                                                |         `string`         |                |
| title            | Titel-Attribut                                     |         `string`         |                |
| target           | Target-Attribut                                    |         `string`         |                |
| rel              | Rel-Attribut                                       |         `string`         |                |
| onClick          | Handler für das onclick-Ereignis                   | `React.MouseEventHandler` |                |
| theme            | Thema des Menüelements                             |   `"normal"` `"danger"`  |   `"normal"`   |
| children         | Kindelement                                        |     `React.ReactNode`    |                |
| className        | `class`-HTML-Attribut für das Root-Element        |         `string`         |                |
| contentClassName | `class`-HTML-Attribut für das Content-Element     |         `string`         |                |
| style            | `style`-HTML-Attribut                              |   `React.CSSProperties`  |                |
| qa               | `data-qa`-HTML-Attribut, für Tests verwendet       |         `string`         |                |
| extraProps       | Zusätzliche HTML-Attribute                         |         `Record`         |                |

## Menu.Group

Sie können Elemente nach Themen innerhalb eines einzelnen Menüs gruppieren:

GRAVITY_TRANSLATION_BLOCK_11_END

GRAVITY_TRANSLATION_BLOCK_12_END

### Eigenschaften

| Name      | Beschreibung                               |         Typ          | Standardwert |
| :-------- | :----------------------------------------- | :------------------: | :----------: |
| label     | Bezeichnung der Menügruppe                 |       `string`       |              |
| children  | Kindelement                                |   `React.ReactNode`  |              |
| className | `class`-HTML-Attribut                      |       `string`       |              |
| style     | `style`-HTML-Attribut                      | `React.CSSProperties`|              |
| qa        | `data-qa`-HTML-Attribut, für Tests verwendet |       `string`       |              |