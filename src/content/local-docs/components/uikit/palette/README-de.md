Die `Palette`-Komponente wird verwendet, um ein Raster aus Symbolen, Emojis, Reaktionen und Zeichen anzuzeigen, die Sie auswählen oder abwählen können.

```tsx
import {Palette} from '@gravity-ui/uikit';
```

### Deaktivierter Zustand

Sie können alle Optionen mit der Eigenschaft `disabled` deaktivieren. Wenn Sie nur bestimmte Optionen deaktivieren möchten, können Sie die Eigenschaft `disabled` dieser `options` (`PaletteOption[]`) ändern.

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

### Größe

Verwenden Sie die Eigenschaft `size`, um die Größe der `Palette` zu verwalten. Die Standardgröße ist `s`.

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

### Spalten

Sie können die Anzahl der Spalten im Raster ändern, indem Sie die Eigenschaft `columns` ändern (der Standardwert ist `6`).

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

### Mehrfachauswahl

Standardmäßig können Sie mehrere Optionen auswählen und abwählen. Wenn Sie nur eine einzelne Option auswählbar machen möchten, können Sie die Eigenschaft `multiple` deaktivieren.

GRAVITY_TRANSLATION_BLOCK_7_END

GRAVITY_TRANSLATION_BLOCK_8_END

## Eigenschaften

`PaletteProps`:

| Name            | Beschreibung                                                                          |                          Typ                          | Standard |
| :-------------- | :------------------------------------------------------------------------------------ | :----------------------------------------------------: | :------: |
| aria-label      | `aria-label` HTML-Attribut                                                            |                        `string`                        |          |
| aria-labelledby | ID des sichtbaren `Palette`-Beschriftungselements                                    |                        `string`                        |          |
| className       | `class` HTML-Attribut                                                                 |                        `string`                        |          |
| columns         | Anzahl der Elemente pro Zeile                                                         |                        `number`                        |   `6`    |
| defaultValue    | Legt den anfänglichen Wertzustand fest, wenn die Komponente gemountet wird           |                       `string[]`                       |          |
| disabled        | Deaktiviert die Optionen                                                              |                       `boolean`                        | `false`  |
| multiple        | Ermöglicht die Auswahl mehrerer Optionen                                               |                       `boolean`                        |  `true`  |
| onBlur          | `onBlur`-Ereignisbehandlungsroutine                                                   | `(event: React.FocusEvent<HTMLButtonElement>) => void` |          |
| onFocus         | `onFocus`-Ereignisbehandlungsroutine                                                  | `(event: React.FocusEvent<HTMLButtonElement>) => void` |          |
| onUpdate        | Wird ausgelöst, wenn der Benutzer den Zustand ändert. Bietet den neuen Wert als Argument des Callbacks |              `(value: string[]) => void`               |          |
| optionClassName | `class` HTML-Attribut für den Palette-Button                                          |                        `string`                        |          |
| options         | Liste der Optionen (Palette-Elemente)                                                 |                   `PaletteOption[]`                    |   `[]`   |
| qa              | `data-qa` HTML-Attribut, verwendet für Tests                                          |                        `string`                        |          |
| rowClassName    | `class` HTML-Attribut für eine Palette-Zeile                                          |                        `string`                        |          |
| size            | Legt die Größe der Elemente fest                                                      |                 `xs` `s` `m` `l` `xl`                  |   `m`    |
| style           | `style` HTML-Attribut                                                                 |                 `React.CSSProperties`                  |          |
| value           | Aktueller Wert für die gesteuerte Verwendung der Komponente                           |                       `string[]`                       |          |

`PaletteOption`:

| Name     | Beschreibung             |    Typ     | Standard |
| :------- | :----------------------- | :--------: | :------: |
| content  | `class` HTML-Attribut    | `ReactNode` |          |
| disabled | Deaktiviert den Button   |  `boolean` | `false`  |
| title    | `title` HTML-Attribut    |  `string`  |          |
| value    | Steuerwert               |  `string`  |          |