`ClipboardIcon` ist ein animiertes Kopiersymbol, das den Kopierstatus (inaktiv oder erfolgreich) widerspiegelt. Es ist dafür gedacht, innerhalb von `CopyToClipboard` oder `ClipboardButton` verwendet zu werden und nicht alleinstehend.

```tsx
import {ClipboardIcon} from '@gravity-ui/uikit';
```

### Status

Abhängig von der `status`-Eigenschaft ändert sich das Symbol entsprechend:

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

## Eigenschaften

| Name      | Beschreibung                                           | Typ      | Standard |
| :-------- | :----------------------------------------------------- | :------- | :------- |
| className | `class` HTML-Attribut                                  | `string` |          |
| size      | Bestimmt die Größe des Symbols                         | `number` |          |
| status    | Die verfügbaren Werte sind `pending`, `success` und `error`. | `string` |          |

GRAVITY_TRANSLATION_BLOCK_2_END