<!--GITHUB_BLOCK-->

# ClipboardIcon

<!--/GITHUB_BLOCK-->

`ClipboardIcon` ist ein animiertes Kopiersymbol, das den Kopierstatus (inaktiv oder erfolgreich) widerspiegelt. Es ist dafür gedacht, innerhalb von `CopyToClipboard` oder `ClipboardButton` verwendet zu werden und nicht alleinstehend.

```tsx
import {ClipboardIcon} from '@gravity-ui/uikit';
```

### Status

Abhängig von der `status`-Eigenschaft ändert sich das Symbol entsprechend:

<!--SANDBOX
import {ClipboardIcon} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <ClipboardIcon size={24} />
            <ClipboardIcon size={24} status="success" />
            <ClipboardIcon size={24} status="error" />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<CopyToClipboard text="Some text to copy" timeout={500}>
  {(status) => <ClipboardIcon size={24} status={status} />}
</CopyToClipboard>
```

<!--/GITHUB_BLOCK-->

## Eigenschaften

| Name      | Beschreibung                                           | Typ      | Standard |
| :-------- | :----------------------------------------------------- | :------- | :------- |
| className | `class` HTML-Attribut                                  | `string` |          |
| size      | Bestimmt die Größe des Symbols                         | `number` |          |
| status    | Die verfügbaren Werte sind `pending`, `success` und `error`. | `string` |          |
