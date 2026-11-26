Die Komponente `SegmentedRadioGroup` wird verwendet, um eine Gruppe von Radiobuttons zu erstellen, bei denen Benutzer eine einzelne Option aus mehreren Auswahlmöglichkeiten auswählen können.

```tsx
import {SegmentedRadioGroup} from '@gravity-ui/uikit';
```

### Deaktivierter Zustand

GRAVITY_TRANSLATION_BLOCK_0_END

### Größe

Verwenden Sie die Eigenschaft `size`, um die Größe von `SegmentedRadioGroup` zu verwalten. Die Standardgröße ist `m`.

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

### Breite

Verwenden Sie die Eigenschaft `width`, um die Breite von `SegmentedRadioGroup` zu verwalten:

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

## Eigenschaften

| Name         | Beschreibung                                                                                              |                Typ                | Standard |
| :----------- | :-------------------------------------------------------------------------------------------------------- | :-------------------------------: | :------: |
| children     | Inhalt des Radiobuttons.                                                                                  |            `ReactNode`            |          |
| disabled     | Schaltet den `disabled`-Zustand des Radiobuttons um.                                                      |             `boolean`             | `false`  |
| options      | Optionen für den Radiobutton.                                                                             | `SegmentedRadioGroupOptionProps[]` |          |
| defaultValue | Legt den anfänglichen Wertzustand fest, wenn die Komponente gemountet wird.                              |              `string`             |          |
| onUpdate     | Wird ausgelöst, wenn der Benutzer den Zustand des Radiobuttons ändert, und übergibt den neuen Wert als Callback-Argument. |     `(value: string) => void`     |          |
| onChange     | Wird ausgelöst, wenn der Benutzer den Zustand des Radiobuttons ändert, und übergibt das Änderungsereignis als Callback-Argument. |             `Function`            |          |
| onFocus      | Ereignisbehandlungsfunktion, die verwendet wird, wenn das Radio-Input-Element den Fokus erhält.          |             `Function`            |          |
| onBlur       | Ereignisbehandlungsfunktion, die verwendet wird, wenn das Radio-Input-Element den Fokus verliert.        |             `Function`            |          |
| width        | Legt die Breite des Radiobuttons fest.                                                                    |            `auto - max`           |          |
| size         | Legt die Größe des Radiobuttons fest.                                                                     |          `s` `m` `l` `xl`         |   `m`    |
| name         | `name`-HTML-Attribut für das Input-Element.                                                               |              `string`             |          |
| qa           | `data-qa`-HTML-Attribut, das zum Testen verwendet wird                                                     |              `string`             |          |
| style        | `style`-HTML-Attribut                                                                                     |       `React.CSSProperties`       |          |
| className    | `class`-HTML-Attribut                                                                                     |              `string`             |          |

## SegmentedRadioGroup.Option

Die Komponente `SegmentedRadioGroup` exportiert auch eine verschachtelte `Option`-Komponente. Sie können diese verwenden, um Radiobutton-Optionen innerhalb einer `SegmentedRadioGroup` zu erstellen.

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

### Eigenschaften

| Name     | Beschreibung                                         |    Typ     | Standard |
| :------- | :-------------------------------------------------- | :--------: | :------: |
| children | Der Inhalt des Radiobuttons (normalerweise ein Label). | `ReactNode` |          |
| content  | Der Inhalt des Radiobuttons (Alternative zu children). | `ReactNode` |          |
| disabled | Schaltet den `disabled`-Zustand des Radiobuttons um. |  `boolean`  | `false`  |
| value    | Kontrollwert                                        |  `string`  |          |