<!--GITHUB_BLOCK-->

# Palette

<!--/GITHUB_BLOCK-->

Die `Palette`-Komponente wird verwendet, um ein Raster aus Symbolen, Emojis, Reaktionen und Zeichen anzuzeigen, die Sie auswählen oder abwählen können.

```tsx
import {Palette} from '@gravity-ui/uikit';
```

### Deaktivierter Zustand

Sie können alle Optionen mit der Eigenschaft `disabled` deaktivieren. Wenn Sie nur bestimmte Optionen deaktivieren möchten, können Sie die Eigenschaft `disabled` dieser `options` (`PaletteOption[]`) ändern.

<!--SANDBOX
import type {PaletteOption} from '@gravity-ui/uikit';
import {Palette} from '@gravity-ui/uikit';

const options: PaletteOption[] = [
    {content: '😎', value: 'ID-cool'},
    {content: '🥴', value: 'ID-woozy'},
];

const disabledOptions: PaletteOption[] = [{...options[0], disabled: true}, options[1]];

export default function () {
    return (
        <>
            <Palette options={disabledOptions} />
            <Palette options={options} disabled />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
const options: PaletteOption[] = [
  // disable a single item
  {content: '😎', value: 'ID-cool', disabled: true},
  {content: '🥴', value: 'ID-woozy'},
];
// or disable all of them
<Palette options={options} disabled={true} />;
```

<!--/GITHUB_BLOCK-->

### Größe

Verwenden Sie die Eigenschaft `size`, um die Größe der `Palette` zu verwalten. Die Standardgröße ist `s`.

<!--SANDBOX
import type {PaletteOption} from '@gravity-ui/uikit';
import {Palette} from '@gravity-ui/uikit';

const options: PaletteOption[] = [
    {content: '😎', value: 'ID-cool'},
    {content: '🥴', value: 'ID-woozy'},
];

export default function () {
    return (
        <>
            <Palette options={options} size="xs" />
            <Palette options={options} size="s" />
            <Palette options={options} size="m" />
            <Palette options={options} size="l" />
            <Palette options={options} size="xl" />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
const options: PaletteOption[] = [
    {content: '😎', value: 'ID-cool'},
    {content: '🥴', value: 'ID-woozy'},
];
<Palette options={options} size={"xs"} />
<Palette options={options} size={"s"} />
<Palette options={options} size={"m"} />
<Palette options={options} size={"l"} />
<Palette options={options} size={"xl"} />
```

<!--/GITHUB_BLOCK-->

### Spalten

Sie können die Anzahl der Spalten im Raster ändern, indem Sie die Eigenschaft `columns` ändern (der Standardwert ist `6`).

<!--SANDBOX
import type {PaletteOption} from '@gravity-ui/uikit';
import {Palette} from '@gravity-ui/uikit';

const options: PaletteOption[] = [
    {content: '😎', value: 'ID-cool'},
    {content: '🥴', value: 'ID-woozy'},
];

export default function () {
    return <Palette options={options} columns={1} />;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
const options: PaletteOption[] = [
  {content: '😎', value: 'ID-cool'},
  {content: '🥴', value: 'ID-woozy'},
];
<Palette options={options} columns={1} />;
```

<!--/GITHUB_BLOCK-->

### Mehrfachauswahl

Standardmäßig können Sie mehrere Optionen auswählen und abwählen. Wenn Sie nur eine einzelne Option auswählbar machen möchten, können Sie die Eigenschaft `multiple` deaktivieren.

<!--SANDBOX
import type {PaletteOption} from '@gravity-ui/uikit';
import {Palette} from '@gravity-ui/uikit';

const options: PaletteOption[] = [
    {content: '😎', value: 'ID-cool'},
    {content: '🥴', value: 'ID-woozy'},
];

export default function () {
    return <Palette options={options} multiple={false} />;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
const options: PaletteOption[] = [
  {content: '😎', value: 'ID-cool'},
  {content: '🥴', value: 'ID-woozy'},
];
<Palette options={options} columns={1} />;
```

<!--/GITHUB_BLOCK-->

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
