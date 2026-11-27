<!--GITHUB_BLOCK-->

# Label

<!--/GITHUB_BLOCK-->

Sie können `Label`s zur Hervorhebung bestimmter Informationen verwenden. Ein `Label` mit der Schaltfläche `Close` oder `Copy` kann für verschiedene einfache Aktionen nützlich sein.

`Label`s eignen sich am besten zur Anzeige einzeiliger Textinformationen mit unterschiedlichen Farbcodes, die deren Wichtigkeit anzeigen.

```tsx
import {Label} from '@gravity-ui/uikit';
```

## Erscheinungsbild

Ein `Label` kann in verschiedenen Stilen angezeigt werden.

### Thema

Verwenden Sie die Eigenschaft `theme`, um verschiedene Themen für verschiedene Status anzuwenden. Sie können die folgenden Werte verwenden: `normal`, `info`, `success`, `warning`, `danger`, `utility`, `unknown` und `clear`.
Das Standardthema ist `normal`.

<!--SANDBOX
import {Label} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Label theme="normal">Normal</Label>
            <Label theme="info">Info</Label>
            <Label theme="success">Success</Label>
            <Label theme="warning">Warning</Label>
            <Label theme="danger">Danger</Label>
            <Label theme="utility">Utility</Label>
            <Label theme="unknown">Unknown</Label>
            <Label theme="clear">Clear</Label>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Label theme="normal">Normal</Label>
<Label theme="info">Info</Label>
<Label theme="success">Success</Label>
<Label theme="warning">Warning</Label>
<Label theme="danger">Danger</Label>
<Label theme="utility">Utility</Label>
<Label theme="unknown">Unknown</Label>
<Label theme="clear">Clear</Label>
```

<!--/GITHUB_BLOCK-->

### Typ

Die Eigenschaft `type` fügt einem `Label` verschiedene Optionen hinzu:

`copy`: Fügt eine Kopierschaltfläche hinzu; beim Klicken kopiert sie den Wert der Eigenschaft `copyText`.

`close`: Fügt eine Schließschaltfläche zur Verwaltung von Label-Listen hinzu.

`info`: Fügt dem Label ein Info-Symbol hinzu.

<!--SANDBOX
import {Label} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Label type="default" onClick={() => alert('On click label')} size="s">
                Clickable
            </Label>
            <Label type="close" onCloseClick={() => alert('On click close')} size="s">
                Closable
            </Label>
            <Label type="copy" copyText="Copy" onCopy={() => alert('On copy')} size="s">
                Copy
            </Label>
            <Label type="info" size="s">Info</Label>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Label type="default" onClick={() => alert('On click label')} size="s">Clickable</Label>
<Label type="close" onCloseClick={() => alert('On click close')} size="s">Closable</Label>
<Label type="copy" copyText="Copy" onCopy={() => alert('On copy')} size="s">Copy</Label>
<Label type="info" size="s">Info</Label>
```

<!--/GITHUB_BLOCK-->

### Symbol

Sie können ein Symbol mit der Eigenschaft `icon` hinzufügen. Verwenden Sie dazu die Komponente [`Icon`](../Icon), die ein spezieller Wrapper für SVGs ist.

<!--SANDBOX
import {Icon, Label} from '@gravity-ui/uikit';
import {Gear} from '@gravity-ui/icons';

export default function () {
    return (
        <>
            <Label icon={<Icon size={16} data={Gear} />}>Icon</Label>
            <Label type="close" icon={<Icon size={16} data={Gear} />}>Icon and close</Label>
            <Label type="copy" icon={<Icon size={16} data={Gear} />}>Icon and copy</Label>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Label icon={<Icon size={16} data={GearIcon} />}>Icon</Label>
<Label type="close" icon={<Icon size={16} data={GearIcon} />}>Icon and close</Label>
<Label type="copy" icon={<Icon size={16} data={GearIcon} />}>Icon and copy</Label>
```

<!--/GITHUB_BLOCK-->

## Wert

Sie können `Label`s zur Anzeige von Schlüssel-Wert-Informationen verwenden. Dazu müssen Sie den Schlüssel der Eigenschaft `children` und den Wert `value` übergeben:

<!--SANDBOX
import {Label} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Label theme="normal" value="Value">Key</Label>
            <Label theme="info" value="Value">Key</Label>
            <Label theme="success" value="Value">Key</Label>
            <Label theme="warning" value="Value">Key</Label>
            <Label theme="danger" value="Value">Key</Label>
            <Label theme="utility" value="Value">Key</Label>
            <Label theme="unknown" value="Value">Key</Label>
            <Label theme="clear" value="Value">Key</Label>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Label theme="normal" value="Value">Key</Label>
<Label theme="info" value="Value">Key</Label>
<Label theme="success" value="Value">Key</Label>
<Label theme="warning" value="Value">Key</Label>
<Label theme="danger" value="Value">Key</Label>
<Label theme="utility" value="Value">Key</Label>
<Label theme="unknown" value="Value">Key</Label>
<Label theme="clear" value="Value">Key</Label>
```

<!--/GITHUB_BLOCK-->

## Status

Ein `label` kann verschiedene Status haben:

- `disabled`: Keine Interaktionen erlaubt.
- `interactive`: Macht das Label hoverbar.
- `loading`: Zeigt einen Ladezustand an.

<!--SANDBOX
import {Label} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Label>Default</Label>
            <Label disabled>Disabled</Label>
            <Label interactive>Interactive</Label>
            <Label loading>Loading</Label>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Label>Default</Label>
<Label disabled>Disabled</Label>
<Label interactive>Interactive</Label>
<Label loading>Loading</Label>
```

<!--/GITHUB_BLOCK-->

## Größe

<!--SANDBOX
import {Label} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Label size="xxs">XXS size</Label>
            <Label size="xs">XS size</Label>
            <Label size="s">S size</Label>
            <Label size="m">M size</Label>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Label size="xxs">XXS size</Label>
<Label size="xs">XS size</Label>
<Label size="s">S size</Label>
<Label size="m">M size</Label>
```

<!--/GITHUB_BLOCK-->

## Eigenschaften

| Name             | Beschreibung                                     |                  Typ                   |   Standard   |
| :--------------- | :---------------------------------------------- | :-------------------------------------: | :----------: |
| children         | Inhalt                                          |            `React.ReactNode`            |              |
| className        | `class` HTML-Attribut                           |                `string`                 |              |
| closeButtonLabel | `aria-label` des Schließen-Buttons              |                `string`                 |              |
| copyButtonLabel  | `aria-label` des Kopieren-Buttons               |                `string`                 |              |
| copyText         | Zu kopierender Text                             |                `string`                 |              |
| disabled         | Deaktivierter Zustand                           |                `boolean`                |              |
| icon             | Label-Symbol (links)                            |            `React.ReactNode`            |              |
| interactive      | Aktiviert Hover-Effekt                          |                `boolean`                |              |
| loading          | Ladezustand                                     |                `boolean`                |   `false`    |
| onClick          | `click`-Ereignisbehandlungsroutine              |               `Function`                |              |
| onCloseClick     | Schließen-Button `click`-Ereignisbehandlungsroutine |               `Function`                |              |
| onCopy           | `copy`-Ereignisbehandlungsroutine               |               `Function`                |              |
| qa               | `data-qa` HTML-Attribut, für Tests verwendet    |                `string`                 |              |
| size             | Label-Größe                                     |       `"xxs"` `"xs"` `"s"` `"m"`        |   `"xs"`     |
| theme            | Label-Thema                                     |                `string`                 | `"normal"`   |
| title            | `title` HTML-Attribut                           |                `string`                 |              |
| type             | Label-Typ                                       | `"default"` `"copy"` `"close"` `"info"` | `"default"`  |
| value            | Label-Wert (angezeigt als `"children : value"`) |            `React.ReactNode`            |              |
| width            | Steuert, wie das Label den Platz des übergeordneten Elements nutzt |                `"auto"`                 |              |
