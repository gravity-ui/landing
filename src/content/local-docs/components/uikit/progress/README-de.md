Die Komponente `Progress` zeigt den Fortschritt einer aktuellen Operation an. Sie kann auch in Abschnitte unterteilt werden.

```tsx
import {Progress} from '@gravity-ui/uikit';
```

## Theme

Verwenden Sie die Eigenschaft `theme`, um die Farbe des gesamten Fortschritts oder des zusammengesetzten Teils anzugeben:

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

## Zustände

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

## Größe

Um die Größe der Komponente `Progress` zu steuern, verwenden Sie die Eigenschaft `size`, die die folgenden Werte annehmen kann: `"xs"`, `"s"` und `"m"`. Die Eigenschaft `text` funktioniert nur mit der Größe `"m"`.

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

## Breakpoints

Verwenden Sie die Eigenschaft `colorStops`, um die Breakpoints der Komponente `Progress` festzulegen.

GRAVITY_TRANSLATION_BLOCK_6_END

GRAVITY_TRANSLATION_BLOCK_7_END

Verwenden Sie die optionale Eigenschaft `color`, um die Theme-Farbe zu überschreiben:

GRAVITY_TRANSLATION_BLOCK_8_END

GRAVITY_TRANSLATION_BLOCK_9_END

## Stack

GRAVITY_TRANSLATION_BLOCK_10_END

GRAVITY_TRANSLATION_BLOCK_11_END

## Eigenschaften

| Name            | Beschreibung                                                                                                                            |                          Typ                          |   Standard   |
| :-------------- | :-------------------------------------------------------------------------------------------------------------------------------------- | :-----------------------------------------------------: | :----------: |
| className       | HTML `class`-Attribut                                                                                                                   |                        `string`                        |              |
| colorStops      | Legt Haltepunkte mit Themen fest                                                                                                        | `Array<{theme: string; stop: number; color?: string}>` |              |
| colorStopsValue | Legt den Wert für die Auswahl des aktuellen Haltepunkts oder einen alternativen Wert für `colorStops` fest. Der verfügbare Bereich liegt zwischen 0 und 100. |                        `number`                        |              |
| loading         | Schaltet den `loading`-Zustand um                                                                                                       |                       `boolean`                        |   `false`   |
| size            | Legt die Größe des Fortschrittsbalkens fest. Der Text des Fortschrittsbalkens kann nur in der Größe `"m"` angezeigt werden.              |                        `string`                        |    `"m"`    |
| stack           | Konfiguration des zusammengesetzten Fortschrittsbalkens. Nicht erforderlich, wenn ein `value` angegeben wird.                           |                     `Array<Stack>`                     |              |
| stackClassName  | HTML `class`-Attribut des Stacks                                                                                                        |                        `string`                        |              |
| text            | Text innerhalb des Fortschrittsbalkens                                                                                                  |                      `ReactNode`                       |              |
| theme           | Legt die Fortschrittsfarbe fest                                                                                                         |                        `string`                        | `"default"` |
| value           | Aktueller Fortschrittswert. Der verfügbare Bereich liegt zwischen 0 und 100. Die Verwendung des `stack`-Eigenschaftswerts ist optional und wird als `maxValue` verwendet. |                        `number`                        |              |

### `Stack`

| Name      | Beschreibung                                                                                                                            |    Typ     |   Standard   |
| :-------- | :-------------------------------------------------------------------------------------------------------------------------------------- | :--------: | :----------: |
| className | `class` HTML-Attribut des Stack-Elements                                                                                                |  `string`  |              |
| color     | Setzt die Hintergrundfarbe für das `style` HTML-Attribut                                                                                |  `string`  |              |
| content   | Inhalt des Stack-Elements                                                                                                               | `ReactNode` |              |
| title     | `title` HTML-Attribut                                                                                                                   |  `string`  |              |
| theme     | Setzt die Farbe des Stack-Elements                                                                                                      |  `string`  | `"default"`  |
| value     | Aktueller Fortschrittswert. Der verfügbare Bereich liegt zwischen 0 und 100. Die Verwendung des `stack`-Eigenschaftswerts ist optional und wird als `maxValue` verwendet. |  `number`  |              |
| qa        | `data-qa` HTML-Attribut, das zum Testen verwendet wird                                                                                  |  `string`  |              |

## CSS API

| Name                                   | Beschreibung                        |
| :------------------------------------- | :---------------------------------- |
| `--g-progress-empty-text-color`        | Leere `Progress`-Textfarbe        |
| `--g-progress-filled-text-color`       | Gefüllte `Progress`-Textfarbe       |
| `--g-progress-empty-background-color`  | Leere `Progress`-Hintergrundfarbe  |
| `--g-progress-filled-background-color` | Gefüllte `Progress`-Hintergrundfarbe |