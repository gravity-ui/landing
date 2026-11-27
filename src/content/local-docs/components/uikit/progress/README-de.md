<!--GITHUB_BLOCK-->

# Progress

<!--/GITHUB_BLOCK-->

Die Komponente `Progress` zeigt den Fortschritt einer aktuellen Operation an. Sie kann auch in Abschnitte unterteilt werden.

```tsx
import {Progress} from '@gravity-ui/uikit';
```

## Theme

Verwenden Sie die Eigenschaft `theme`, um die Farbe des gesamten Fortschritts oder des zusammengesetzten Teils anzugeben:

<!--SANDBOX
import {Box, Progress} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Box width={'30%'}>
                <Progress text="default" value={50} />
                <Box height={4} />
                <Progress text="success" theme="success" value={50} />
            </Box>
            <Box width={'30%'}>
                <Progress text="warning" theme="warning" value={50} />
                <Box height={4} />
                <Progress text="danger" theme="danger" value={50} />
            </Box>
            <Box width={'30%'}>
                <Progress text="info" theme="info" value={50} />
                <Box height={4} />
                <Progress text="misc" theme="misc" value={50} />
            </Box>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Progress text="default" value={50} />
<Progress text="warning" theme="warning" value={50} />
<Progress text="info" theme="info" value={50} />
<Progress text="success" theme="success" value={50} />
<Progress text="danger" theme="danger" value={50} />
<Progress text="misc" theme="misc" value={50} />
```

<!--/GITHUB_BLOCK-->

## Zustände

<!--SANDBOX
import {Box, Progress} from '@gravity-ui/uikit';

export default function () {
    return (
        <Box width={'30%'}>
            <Progress text="Loading" theme="misc" value={60} loading />
        </Box>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Progress text="Loading" theme="misc" value={60} loading={true} />
```

<!--/GITHUB_BLOCK-->

## Größe

Um die Größe der Komponente `Progress` zu steuern, verwenden Sie die Eigenschaft `size`, die die folgenden Werte annehmen kann: `"xs"`, `"s"` und `"m"`. Die Eigenschaft `text` funktioniert nur mit der Größe `"m"`.

<!--SANDBOX
import {Box, Progress} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Box width={'30%'}>
                <Progress theme="success" value={60} size="xs" />
            </Box>
            <Box width={'30%'}>
                <Progress theme="warning" value={70} size="s" />
            </Box>
            <Box width={'30%'}>
                <Progress theme="danger" value={80} size="m" />
            </Box>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Progress theme="success" value={60} size="xs" />
<Progress theme="warning" value={70} size="s" />
<Progress theme="danger" value={80} size="m" />
```

<!--/GITHUB_BLOCK-->

## Breakpoints

Verwenden Sie die Eigenschaft `colorStops`, um die Breakpoints der Komponente `Progress` festzulegen.

<!--SANDBOX
import {Box, Progress} from '@gravity-ui/uikit';

const colorStops = [
    {theme: 'danger', stop: 20},
    {theme: 'warning', stop: 50},
    {theme: 'success', stop: 100},
];

export default function () {
    return (
        <>
            <Box width={'30%'}>
                <Progress value={10} colorStops={colorStops} />
            </Box>
            <Box width={'30%'}>
                <Progress value={40} colorStops={colorStops} />
            </Box>
            <Box width={'30%'}>
                <Progress value={60} colorStops={colorStops} />
            </Box>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Progress value={10} colorStops={[{theme: 'danger', stop: 20}, {theme: 'warning', stop: 50}, {theme: 'success', stop: 100}]} />
<Progress value={40} colorStops={[{theme: 'danger', stop: 20}, {theme: 'warning', stop: 50}, {theme: 'success', stop: 100}]} />
<Progress value={60} colorStops={[{theme: 'danger', stop: 20}, {theme: 'warning', stop: 50}, {theme: 'success', stop: 100}]} />
```

<!--/GITHUB_BLOCK-->

Verwenden Sie die optionale Eigenschaft `color`, um die Theme-Farbe zu überschreiben:

<!--SANDBOX
import {Box, Progress} from '@gravity-ui/uikit';

const colorStops = [
    {theme: 'danger', stop: 20, color: '#ff4444'},
    {theme: 'warning', stop: 50, color: '#ffaa00'},
    {theme: 'success', stop: 100, color: '#44ff44'},
];

export default function () {
    return (
        <>
            <Box width={'30%'}>
                <Progress value={10} colorStops={colorStops} />
            </Box>
            <Box width={'30%'}>
                <Progress value={40} colorStops={colorStops} />
            </Box>
            <Box width={'30%'}>
                <Progress value={60} colorStops={colorStops} />
            </Box>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Progress value={10} colorStops={[{theme: 'danger', stop: 20, color: '#ff4444'}, {theme: 'warning', stop: 50, color: '#ffaa00'}, {theme: 'success', stop: 100, color: '#44ff44'}]} />
<Progress value={40} colorStops={[{theme: 'danger', stop: 20, color: '#ff4444'}, {theme: 'warning', stop: 50, color: '#ffaa00'}, {theme: 'success', stop: 100, color: '#44ff44'}]} />
<Progress value={60} colorStops={[{theme: 'danger', stop: 20, color: '#ff4444'}, {theme: 'warning', stop: 50, color: '#ffaa00'}, {theme: 'success', stop: 100, color: '#44ff44'}]} />
```

<!--/GITHUB_BLOCK-->

## Stack

<!--SANDBOX
import type {Stack} from '@gravity-ui/uikit';
import {Box, Progress} from '@gravity-ui/uikit';

const defaultStack: Stack[] = [
    {theme: 'default', content: 'First', value: 25},
    {theme: 'success', content: 'Second', value: 25},
    {theme: 'warning', content: 'Third', value: 25},
    {theme: 'danger', content: 'Fourth', value: 25},
];

const customColorStack: Stack[] = [
    {color: '#6e5d8c', value: 33.333333333333336},
    {color: '#5b785b', value: 33.333333333333336},
    {color: '#956069', value: 33.333333333333336},
];

export default function () {
    return (
        <>
            <Box width={'30%'}>
                <Progress stack={defaultStack} />
            </Box>
            <Box width={'30%'}>
                <Progress text="Progress with custom colors" stack={customColorStack} />
            </Box>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Progress stack={[
  {theme: 'default', content: 'First', value: 25},
  {theme: 'success', content: 'Second', value: 25},
  {theme: 'warning', content: 'Third', value: 25},
  {theme: 'danger', content: 'Fourth', value: 25},
]} />
<Progress text="Progress with custom colors" stack={[
  {color: '#6e5d8c', value: 33.333333333333336},
  {color: '#5b785b', value: 33.333333333333336},
  {color: '#956069', value: 33.333333333333336},
]} />
```

<!--/GITHUB_BLOCK-->

## Eigenschaften

| Name            | Beschreibung                                                                                                                            |                          Typ                          |   Standard   |
| :-------------- | :-------------------------------------------------------------------------------------------------------------------------------------- | :-----------------------------------------------------: | :----------: |
| className       | HTML `class`-Attribut                                                                                                                   |                        `string`                        |              |
| colorStops      | Legt Haltepunkte mit Themen fest                                                                                                        | `Array<{theme: string; stop: number; color?: string}>` |              |
| colorStopsValue | Legt den Wert für die Auswahl des aktuellen Haltepunkts oder einen alternativen Wert für `colorStops` fest. Der verfügbare Bereich liegt zwischen 0 und 100. |                        `number`                        |              |
| loading         | Schaltet den `loading`-Zustand um                                                                                                       |                       `boolean`                        |   `false`   |
| size            | Legt die Größe des Fortschrittsbalkens fest. Der Text des Fortschrittsbalkens kann nur in der Größe `"m"` angezeigt werden.              |                        `string`                        |    `"m"`    |
| stack           | Konfiguration des zusammengesetzten Fortschrittsbalkens. Nicht erforderlich, wenn ein `value` angegeben wird.                           |                     `Array<Stack>`                     |              |
| stackClassName  | HTML `class`-Attribut des Stacks                                                                                                        |                        `string`                        |              |
| text            | Text innerhalb des Fortschrittsbalkens                                                                                                  |                      `ReactNode`                       |              |
| theme           | Legt die Fortschrittsfarbe fest                                                                                                         |                        `string`                        | `"default"` |
| value           | Aktueller Fortschrittswert. Der verfügbare Bereich liegt zwischen 0 und 100. Die Verwendung des `stack`-Eigenschaftswerts ist optional und wird als `maxValue` verwendet. |                        `number`                        |              |

### `Stack`

| Name      | Beschreibung                                                                                                                            |    Typ     |   Standard   |
| :-------- | :-------------------------------------------------------------------------------------------------------------------------------------- | :--------: | :----------: |
| className | `class` HTML-Attribut des Stack-Elements                                                                                                |  `string`  |              |
| color     | Setzt die Hintergrundfarbe für das `style` HTML-Attribut                                                                                |  `string`  |              |
| content   | Inhalt des Stack-Elements                                                                                                               | `ReactNode` |              |
| title     | `title` HTML-Attribut                                                                                                                   |  `string`  |              |
| theme     | Setzt die Farbe des Stack-Elements                                                                                                      |  `string`  | `"default"`  |
| value     | Aktueller Fortschrittswert. Der verfügbare Bereich liegt zwischen 0 und 100. Die Verwendung des `stack`-Eigenschaftswerts ist optional und wird als `maxValue` verwendet. |  `number`  |              |
| qa        | `data-qa` HTML-Attribut, das zum Testen verwendet wird                                                                                  |  `string`  |              |

## CSS API

| Name                                   | Beschreibung                        |
| :------------------------------------- | :---------------------------------- |
| `--g-progress-empty-text-color`        | Leere `Progress`-Textfarbe        |
| `--g-progress-filled-text-color`       | Gefüllte `Progress`-Textfarbe       |
| `--g-progress-empty-background-color`  | Leere `Progress`-Hintergrundfarbe  |
| `--g-progress-filled-background-color` | Gefüllte `Progress`-Hintergrundfarbe |
