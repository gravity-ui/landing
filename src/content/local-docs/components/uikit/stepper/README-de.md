`Stepper` führt den Benutzer durch eine Reihe nummerierter Schritte und zeigt den Fortschritt in einem Assistenten-ähnlichen, mehrstufigen Workflow an.

```tsx
import {Stepper} from '@gravity-ui/uikit';
```

## Beispiel

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

### Interaktive Elemente

Verwenden Sie die Props `onUpdate` und `value` mit benutzerdefiniertem Zustand, um Schritte zu manipulieren.

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

### Verschiedene Ansichten

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

### Verschiedene Größen

GRAVITY_TRANSLATION_BLOCK_6_END

GRAVITY_TRANSLATION_BLOCK_7_END

### Deaktivierte Schritte

GRAVITY_TRANSLATION_BLOCK_8_END

GRAVITY_TRANSLATION_BLOCK_9_END

### Benutzerdefinierte Icons

GRAVITY_TRANSLATION_BLOCK_10_END

GRAVITY_TRANSLATION_BLOCK_11_END

### Benutzerdefinierter Schritttrenner

GRAVITY_TRANSLATION_BLOCK_12_END

GRAVITY_TRANSLATION_BLOCK_13_END

### Schritt mit schwebendem Element

GRAVITY_TRANSLATION_BLOCK_14_END

GRAVITY_TRANSLATION_BLOCK_15_END

## Eigenschaften (Props)

| Name             | Beschreibung                                               |                  Typ                  | Standard |
| :--------------- | :-------------------------------------------------------- | :------------------------------------: | :------: |
| children         | Stepper-Elemente.                                         | `React.ReactElement<StepperItemProps>` |          |
| size             | Legt die Größe des `Step` fest.                           |           `"s"` `"m"` `"l"`            |  `"s"`   |
| value            | Aktuell ausgewählte `Step`-ID.                            |           `number` `string`            |          |
| onUpdate         | Funktion zum Ändern des aktuellen `Step`.                 |               `Function`               |          |
| qa               | `data-qa` HTML-Attribut, wird für Tests verwendet.        |                `string`                |          |
| separator        | Benutzerdefiniertes Trennelement.                          |           `React.ReactNode`            |          |
| className        | CSS-Klassenname für den Stepper-Container.                |                `string`                |          |
| style            | Legt den Inline-Stil für den Stepper-Container fest.      |            `CSSProperties`             |          |
| aria-label       | Definiert einen Zeichenkettenwert, der das aktuelle Element beschriftet. |                `string`                |          |
| aria-labelledby  | Identifiziert das/die Element(e), das/die das aktuelle Element beschriftet. |                `string`                |          |
| aria-describedby | Identifiziert das/die Element(e), das/die das Objekt beschreibt. |                `string`                |          |

### StepperItemProps

| Name      | Beschreibung                                       |              Typ              | Standard |
| :-------- | :------------------------------------------------ | :----------------------------: | :------: |
| id        | Legt die `Step`-ID fest. Standard ist der Index des Array-Elements. |       `string` `number`        |          |
| view      | Legt die Ansicht des `Step` fest.                 | `"idle"` `"error"` `"success"` | `"idle"` |
| children  | Inhalt des `Step`.                                |          `React.Node`          |          |
| disabled  | Bestimmt, ob der `Step` deaktiviert ist.          |           `boolean`            |          |
| icon      | Benutzerdefiniertes Icon-Element.                  |         `SVGIconData`          |          |
| onClick   | Klick-Handler für den Schritt.                    |   `React.MouseEventHandler`    |          |
| className | CSS-Klassenname für das Element.                  |            `string`            |          |

### CSS API

| Name                              | Beschreibung                               |
| :-------------------------------- | :----------------------------------------- |
| `--g-stepper-gap`                 | Abstand zwischen Schritt-Elementen und Trennlinie. |
| `--g-stepper-item-text-max-width` | Maximale Breite des Textes eines Schritt-Elements. |