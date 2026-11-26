Die Komponente `Divider` wird als dünne Linie zum Abgrenzen und Gruppieren von Elementen verwendet, um die visuelle Hierarchie zu verstärken.

```tsx
import {Divider} from '@gravity-ui/uikit';
```

```tsx
<Divider className="custom-divider" direction="horizontal" />
```

### Ausrichtung

Verwenden Sie die Eigenschaft `direction`, um die Ausrichtung des `Divider` zu steuern. Die Standardausrichtung ist `horizontal`.

#### Horizontal

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

#### Vertikal

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

### Benutzerdefinierter Inhalt

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

### Positionierung

GRAVITY_TRANSLATION_BLOCK_7_END

GRAVITY_TRANSLATION_BLOCK_8_END

## Eigenschaften

| Name        | Beschreibung                               | Typ                    | Standard      |
| :---------- | :----------------------------------------- | :--------------------- | :------------ |
| className   | `class` HTML-Attribut                      | `string`               | -             |
| orientation | Bestimmt die Richtung des Trennzeichens    | `horizontal - vertical` | `horizontal` |
| children    | Benutzerdefinierter Inhalt innerhalb des Trennzeichens | `React.ReactNode`      |               |
| align       | Position des benutzerdefinierten Inhalts   | `start - center - end` | `start`       |
| style       | `style` HTML-Attribut                      | `React.CSSProperties`  |               |
| qa          | `data-qa` HTML-Attribut, für Tests verwendet | `string`               |               |

### CSS API

| Name                | Beschreibung                                                                      |
| :------------------ | :-------------------------------------------------------------------------------- |
| `--g-divider-color` | Farbe des Trennzeichens                                                           |
| `--g-divider-size`  | Größe des Trennzeichens (Höhe bei horizontaler Ausrichtung, Breite bei vertikaler Ausrichtung) |