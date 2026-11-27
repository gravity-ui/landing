<!--GITHUB_BLOCK-->

# Hotkey

<!--/GITHUB_BLOCK-->

Sie können die Komponente `Hotkey` verwenden, um Tastenkombinationen für Mac und PC anzuzeigen.

```tsx
import {Hotkey} from '@gravity-ui/uikit';
```

### Wert

Tastenkombinationen werden im Format `<taste>+<taste>` festgelegt, was bedeutet, dass Sie mehrere Tasten durch ein Pluszeichen getrennt angeben müssen, z. B. `shift+tab`.

Die Reihenfolge der Tastenkombinationen kann durch ein Leerzeichen getrennt werden: `<kombination> <kombination>`, z. B. `ctrl+a ctrl+c ctrl+v`.

Sie können `mod` als Kurzform für `cmd` unter Mac und `ctrl` für andere Plattformen verwenden. Zum Beispiel wird `mod+v` unter Mac als ⌘+A und unter PC als Ctrl+A gerendert.

### Ansicht

`light`: Wird verwendet, wenn die Komponente auf einem hellen Hintergrund angezeigt wird (standardmäßig verwendet).

`dark`: Wird verwendet, wenn die Komponente auf einem dunklen Hintergrund angezeigt wird.

<!--SANDBOX
import {Hotkey} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Hotkey view="light" value="mod+a mod+c mod+v" />
            <Hotkey view="dark" value="mod+a mod+c mod+v" />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```
<Hotkey view="light" value="mod+a mod+c mod+v" />
<Hotkey view="dark" value="mod+a mod+c mod+v" />
```

<!--/GITHUB_BLOCK-->

### Plattform

`pc`: Wird verwendet, um Tastenkombinationen für eine normale PC-Tastatur anzuzeigen.

`mac`: Wird verwendet, um Tastenkombinationen für eine Macintosh-Tastatur anzuzeigen.

Standardmäßig wird die Plattform automatisch erkannt.

<!--SANDBOX
import {Hotkey} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Hotkey value="mod+a mod+c mod+v" />
            <Hotkey platform="pc" value="mod+a mod+c mod+v" />
            <Hotkey platform="mac" value="mod+a mod+c mod+v" />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```
<Hotkey value="mod+a mod+c mod+v" />
<Hotkey platform="pc" value="mod+a mod+c mod+v" />
<Hotkey platform="mac" value="mod+a mod+c mod+v" />
```

<!--/GITHUB_BLOCK-->

## Eigenschaften

| Name      | Beschreibung                                                              |         Typ          |        Standard         |
| :-------- | :------------------------------------------------------------------------ | :------------------: | :---------------------: |
| view      | Wird verwendet, um das Farbschema festzulegen                            | `"light"` `"dark"`   |       `"light"`       |
| platform  | Wird verwendet, um die Plattform (PC oder Macintosh) für die Anzeige der Tastenkombination auszuwählen | `"pc"` `"mac"`     | Automatisch erkannt |
| title     | Wert der Tastenkombination                                                |      `string`      |                         |
| style     | HTML-Stilattribut                                                         | `React.CSSProperties` |                         |
| className | Alert-Klassenname                                                         |      `string`      |                         |
