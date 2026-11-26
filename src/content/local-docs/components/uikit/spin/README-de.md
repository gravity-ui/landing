Der `Spin`-Komponente zeigt den Ladezustand (einen rotierenden Halbkreis) in Inline-Szenarien an. Im Gegensatz zu `Loader` wird diese Komponente verwendet, um den Ladezustand in Inline-Szenarien anzuzeigen, z. B. in einem `Button` oder `Label`.

```tsx
import {Spin} from '@gravity-ui/uikit';
```

### Größe

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

`XS`: Extra klein.

`S`: Klein, wird verwendet, wenn ein mittelgroßer Spin zu groß ist.

`M`: Mittel (Standard), wird in den meisten Fällen verwendet.

`L`: Groß, wird verwendet, wenn ein mittelgroßer Spin zu klein ist.

`XL`: Extra groß.

## Eigenschaften

| Name      | Beschreibung                          |              Typ               | Standard |
| :-------- | :------------------------------------ | :-----------------------------: | :------: |
| size      | Spin-Größe                            | `"xs"` `"s"` `"m"` `"l"` `"xl"` |  `"m"`   |
| style     | Benutzerdefinierte CSS-Stile für das Wurzelelement |      `React.CSSProperties`      |          |
| className | Benutzerdefinierte CSS-Klasse für das Wurzelelement |            `string`             |          |
| qa        | Testattribut (`data-qa`)              |            `string`             |          |

### CSS API

| Name             | Beschreibung                      |
| :--------------- | :-------------------------------- |
| `--g-spin-color` | Die Hauptfarbe der Komponente     |
GRAVITY_TRANSLATION_BLOCK_2_END