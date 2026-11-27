<!--GITHUB_BLOCK-->

# ClipboardButton

<!--/GITHUB_BLOCK-->

`ClipboardButton` ist ein fertiger Button, der einen gegebenen Text in die Zwischenablage kopiert und eine Erfolgsanimation abspielt. Er kombiniert [`CopyToClipboard`](../CopyToClipboard/README.md) (das Kopierverhalten) mit [`ClipboardIcon`](../ClipboardIcon/README.md) (dem animierten Icon).

```tsx
import {ClipboardButton} from '@gravity-ui/uikit';
```

<!--SANDBOX
import {ClipboardButton} from '@gravity-ui/uikit';

export default function () {
    return <ClipboardButton text="Some text to copy" />;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<ClipboardButton text="Some text to copy" />
```

<!--/GITHUB_BLOCK-->

## Eigenschaften

Die Eigenschaften von `ClipboardButton` werden von den [Eigenschaften](../Button/README.md#properties) von `Button` geerbt.

| Name               | Beschreibung                                                               |            Typ            |   Standard   |
| :----------------- | :------------------------------------------------------------------------ | :-----------------------: | :----------: |
| hasTooltip         | Schaltet die Anzeige des Tooltips um                                      |         `boolean`         |   `true`     |
| onCopy             | Callback nach dem Kopieren `(text: string, result: boolean) => void`      |         `Function`        |              |
| text               | Zu kopierender Text (kann ein String oder eine Funktion sein, die einen String zurückgibt) |  `string \| () => string` |              |
| timeout            | Zeit, bevor der Zustand nach dem Klicken des Buttons auf normal zurückspringt |          `number`         |   `1000`     |
| tooltipInitialText | Text, der vor dem Kopieren angezeigt wird                                 |          `string`         |  `"Copy"`    |
| tooltipSuccessText | Text, der nach dem Kopieren angezeigt wird                                |          `string`         | `"Copied!"`  |
| icon               | Benutzerdefiniertes Icon                                                  |     `React.ReactNode`     |              |
| iconPosition       | Position des Icons                                                        | `start          \|    end` |   `start`    |
