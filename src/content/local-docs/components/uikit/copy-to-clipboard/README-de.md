<!--GITHUB_BLOCK-->

# CopyToClipboard

<!--/GITHUB_BLOCK-->

`CopyToClipboard` ist ein Render-Prop-Wrapper, der Text in die Zwischenablage kopiert und den Kopierstatus an sein Kind weitergibt, sodass Sie Ihren eigenen Trigger rendern können. Für eine fertige Schaltfläche verwenden Sie `ClipboardButton`.

```tsx
import {CopyToClipboard} from '@gravity-ui/uikit';
```

### Children (Renderfunktion)

Dies ist eine Renderfunktion, die als `children`-Eigenschaft bereitgestellt wird. Sie kann ihren Inhalt basierend auf dem Status aktualisieren, der als erstes Argument in der Renderfunktion zurückgegeben wird.
Es gibt drei verfügbare Status: `pending`, `success` und `error`.

`pending`: Anfangsstatus, der in der Renderfunktion im neutralen Fall zurückgegeben wird.

`success`: Ergebnisstatus, der in der Renderfunktion im Erfolgsfall zurückgegeben wird.

`error`: Ergebnisstatus, der in der Renderfunktion im Fehlerfall zurückgegeben wird.

Die Option `timeout` legt die Zeit in ms fest, um den Anfangsstatus (`pending`) nach einem der Ergebnisstatus (`success` oder `error`) wiederherzustellen.

<!--SANDBOX
import {Button, CopyToClipboard} from '@gravity-ui/uikit';

const buttonText = {
    pending: 'Click Me',
    success: 'Copied!',
    error: "Couldn't copy...",
};

export default function () {
    return (
        <CopyToClipboard text="Some text to copy" timeout={500}>
            {(status) => (
                <Button view="normal" size="l">
                    {buttonText[status]}
                </Button>
            )}
        </CopyToClipboard>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
const buttonText = {
  pending: 'Click Me',
  success: 'Copied!',
  error: "Couldn't copy...",
};

<CopyToClipboard text="Some text to copy" timeout={500}>
  {(status) => <button>{buttonText[status]}</button>}
</CopyToClipboard>;
```

<!--/GITHUB_BLOCK-->

## Eigenschaften

| Name     | Beschreibung                                                              |           Typ           | Standard |
| :------- | :------------------------------------------------------------------------ | :---------------------: | :------: |
| children | `(status: CopyToClipboardStatus) => React.ReactElement` Renderfunktion     |        `Function`       |          |
| onCopy   | `copy`-Ereignisbehandlungsroutine                                         |        `Function`       |          |
| text     | Zu kopierender Text (kann ein String oder eine Funktion sein, die einen String zurückgibt) | `string \| () => string` |          |
| timeout  | Zeit in ms, um den Anfangsstatus wiederherzustellen                      |         `number`        |          |
