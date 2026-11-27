<!--GITHUB_BLOCK-->

# Button

<!--/GITHUB_BLOCK-->

Schaltflächen dienen als Auslöser für bestimmte Aktionen. Obwohl dies ihr Hauptzweck ist, können sie in sehr seltenen Fällen als Links zur Navigation zu anderen Seiten verwendet werden.

```tsx
import {Button} from '@gravity-ui/uikit';
```

## Erscheinungsbild

Es gibt vier `Button`-Typen in Bezug auf das Erscheinungsbild: basic, outlined, flat und contrast.
Das Erscheinungsbild des `Button` wird durch die `view`-Eigenschaft bestimmt.

### Basic

`action`: Der markanteste Typ von `Button`. Er wird für die primäre Aktion auf einem Bildschirm verwendet, die die meiste Aufmerksamkeit erfordert.
Wir empfehlen, nur einen solchen Button pro Seite zu verwenden.

`normal`: Standardtyp von `Button`, der für sekundäre Aktionen oder zur Beibehaltung der Wichtigkeit einer Aktion ohne übermäßige Betonung konzipiert ist.

`raised`: Wird über dem Inhalt als schwebendes Element platziert, normalerweise mit einer festen Position.

<!--SANDBOX
import {Button} from '@gravity-ui/uikit'

export default function () {
    return (
        <>
            <Button view="action" size="l">Action</Button>
            <Button view="normal" size="l">Normal</Button>
            <Button view="raised" size="l">Raised</Button>
        </>
    )
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Button view="action" size="l">Action</Button>
<Button view="normal" size="l">Normal</Button>
<Button view="raised" size="l">Raised</Button>
```

<!--/GITHUB_BLOCK-->

### Outlined

`outlined`: Wird für sekundäre Aktionen verwendet, die weniger Aufmerksamkeit erfordern. Er kann mit oder ohne Hauptbutton verwendet werden; im ersteren Fall muss es sich um einen hervorgehobenen Button handeln.

`outlined-action`: Wird normalerweise als Link zu einer anderen Seite oder einer externen Ressource verwendet.

Dieser Typ hat auch semantische Variationen, die verwendet werden können, wenn zusätzliche Semantik benötigt wird: `outlined-info`, `outlined-success`, `outlined-warning` und `outlined-danger`.

<!--SANDBOX
import {Button} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Button view="outlined" size="l">Outlined</Button>
            <Button view="outlined-action" size="l">Outlined Action</Button>
            <Button view="outlined-info" size="l">Outlined Info</Button>
            <Button view="outlined-success" size="l">Outlined Success</Button>
            <Button view="outlined-warning" size="l">Outlined Warning</Button>
            <Button view="outlined-danger" size="l">Outlined Danger</Button>
            <Button view="outlined-utility" size="l">Outlined Utility</Button>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Button view="outlined" size="l">Outlined</Button>
<Button view="outlined-action" size="l">Outlined Action</Button>
<Button view="outlined-info" size="l">Outlined Info</Button>
<Button view="outlined-success" size="l">Outlined Success</Button>
<Button view="outlined-warning" size="l">Outlined Warning</Button>
<Button view="outlined-danger" size="l">Outlined Danger</Button>
<Button view="outlined-utility" size="l">Outlined Utility</Button>
```

<!--/GITHUB_BLOCK-->

### Flat

`flat`: Wird für Hilfsaktionen verwendet, die am wenigsten Aufmerksamkeit erfordern. Er wird oft in einer Liste von Buttons oder Aktionssymbolen (ohne Text) in einem Editor verwendet.

`flat-secondary`: Weniger hervorgehoben als der `flat`-Button. Er wird oft als sekundärer Button in Dialogen und modalen Fenstern verwendet.

`flat-action`: Wird normalerweise als Link zu einer anderen Seite oder einer externen Ressource verwendet.

Er hat auch semantische Variationen, die verwendet werden können, wenn zusätzliche Semantik benötigt wird: `outlined-info`, `outlined-success`, `outlined-warning` und `outlined-danger`.

<!--SANDBOX
import {Button} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Button view="flat" size="l">Flat</Button>
            <Button view="flat-action" size="l">Flat Action</Button>
            <Button view="flat-info" size="l">Flat Info</Button>
            <Button view="flat-success" size="l">Flat Success</Button>
            <Button view="flat-warning" size="l">Flat Warning</Button>
            <Button view="flat-danger" size="l">Flat Danger</Button>
            <Button view="flat-utility" size="l">Flat Utility</Button>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Button view="flat" size="l">Flat</Button>
<Button view="flat-secondary" size="l">Flat Secondary</Button>
<Button view="flat-action" size="l">Flat Action</Button>
<Button view="flat-info" size="l">Flat Info</Button>
<Button view="flat-success" size="l">Flat Success</Button>
<Button view="flat-warning" size="l">Flat Warning</Button>
<Button view="flat-danger" size="l">Flat Danger</Button>
<Button view="flat-utility" size="l">Flat Utility</Button>
```

<!--/GITHUB_BLOCK-->

### Contrast

Die Buttons `normal-contrast`, `outline-contrast` und `flat-contrast` heben Aktionen gegen komplexe Hintergründe, z. B. in einem Banner, oder gegen einen inversen Hintergrund hervor.

<!--SANDBOX
import {Button} from '@gravity-ui/uikit'
import {type CSSProperties} from 'react';

const containerStyle: CSSProperties = {
    display: 'flex',
    gap: 16,
    backgroundColor: 'rgb(68, 38, 204)',
    padding: '20px',
    borderRadius: '8px'
}

export default function () {
    return (
        <div style={containerStyle}>
            <Button view="normal-contrast" size="l">Normal Contrast</Button>
            <Button view="outlined-contrast" size="l">Outlined Contrast</Button>
            <Button view="flat-contrast" size="l">Flat Contrast</Button>
        </div>
    )
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Button view="normal-contrast" size="l">Normal Contrast</Button>
<Button view="outlined-contrast" size="l">Outlined Contrast</Button>
<Button view="flat-contrast" size="l">Flat Contrast</Button>
```

<!--/GITHUB_BLOCK-->

## Icons

Um einem `Button` ein Symbol hinzuzufügen, verwenden Sie die Komponente [`Icon`](../Icon), die ein spezieller Wrapper für SVGs ist.

<!--SANDBOX
import {Gear} from '@gravity-ui/icons';
import {Button, Icon} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Button view="outlined" size="l">
                <Icon data={Gear} size={18} />
                Start
            </Button>
            <Button view="outlined" size="l">
                End
                <Icon data={Gear} size={18} />
            </Button>
            <Button view="outlined" size="l">
                <Icon data={Gear} size={18} />
                Both
                <Icon data={Gear} size={18} />
            </Button>
            <Button view="outlined" size="l">
                <Icon data={Gear} size={18} />
            </Button>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Button view="outlined" size="l">
    <Icon data={Gear} size={18} />
    Start
</Button>
<Button view="outlined" size="l">
    End
    <Icon data={Gear} size={18} />
</Button>
<Button view="outlined" size="l">
    <Icon data={Gear} size={18} />
    Both
    <Icon data={Gear} size={18} />
</Button>
<Button view="outlined" size="l">
    No text:
    <Icon data={Gear} size={18} />
</Button>
```

<!--/GITHUB_BLOCK-->

## Zustände

Ein `Button` kann verschiedene Zustände haben:

`disabled`: Wenn der Button aus irgendeinem Grund nicht verfügbar ist.

`loading`: Wenn im Hintergrund asynchrone Prozesse laufen.

`selected`: Wenn der Benutzer den Button **aktivieren** und **deaktivieren** kann.

<!--SANDBOX
import {Button} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Button size="l" disabled>Disabled</Button>
            <Button size="l" loading>Loading</Button>
            <Button size="l" selected>Selected</Button>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Button size="l" disabled>Disabled</Button>
<Button size="l" loading>Loading</Button>
<Button size="l" selected>Selected</Button>
```

<!--/GITHUB_BLOCK-->

### Menü-Auslöser

Der `Button` ändert automatisch sein Erscheinungsbild, wenn entsprechende Aria-Attribute (`aria-haspopup`, `aria-expanded`) übergeben werden:

<!--SANDBOX
import {Button} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Button aria-haspopup="menu" aria-expanded="true">Menu</Button>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Button aria-haspopup="menu" aria-expanded="true">
  Menu
</Button>
```

<!--/GITHUB_BLOCK-->

## Größe

Verwenden Sie die `size`-Eigenschaft, um die Größe des `Button` zu verwalten. Die Standardgröße ist `m`.

<!--SANDBOX
import {Button} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Button size="xs">XS Size</Button>
            <Button size="s">S Size</Button>
            <Button size="m">M Size</Button>
            <Button size="l">L Size</Button>
            <Button size="xl">XL Size</Button>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Button size="xs">XS Size</Button>
<Button size="s">S Size</Button>
<Button size="m">M Size</Button>
<Button size="l">L Size</Button>
<Button size="xl">XL Size</Button>
```

<!--/GITHUB_BLOCK-->

## Breite

Verwenden Sie die `width`-Eigenschaft, um das Verhalten des `Button` innerhalb des Containers zu steuern:

`auto`: Begrenzt die maximale Breite des `Button`, indem überlaufender Inhalt mit einer Ellipse ausgeblendet wird.

`max`: Passt die Breite des `Button` an die Breite des übergeordneten Containers an und blendet ebenfalls überlaufenden Inhalt mit einer Ellipse aus.

<!--SANDBOX
import {Button} from '@gravity-ui/uikit';
import {type CSSProperties} from 'react';

const containerStyle: CSSProperties = {
    width: 100,
    border: '2px dashed gray',
};

const titleStyle: CSSProperties = {
    textAlign: 'center',
};

export default function () {
    return (
        <>
            <div style={containerStyle}>
                <h4 style={titleStyle}>Default</h4>
                <p>
                    <Button>Text</Button>
                </p>
                <p>
                    <Button>Very Long Text</Button>
                </p>
            </div>
            <div style={containerStyle}>
                <h4 style={titleStyle}>Auto</h4>
                <p>
                    <Button width="auto">Text</Button>
                </p>
                <p>
                    <Button width="auto">Very Long Text</Button>
                </p>
            </div>
            <div style={containerStyle}>
                <h4 style={titleStyle}>Max</h4>
                <p>
                    <Button width="max">Text</Button>
                </p>
                <p>
                    <Button width="max">Very Long Text</Button>
                </p>
            </div>
        </>
    );
}
SANDBOX-->

## Pin

Die `pin`-Eigenschaft ermöglicht die Steuerung der Form der _Start_- und _End_-Kanten und wird normalerweise verwendet, um mehrere Buttons zu einer einzigen Einheit zu kombinieren.
Der Wert der `pin`-Eigenschaft besteht aus den Namen des _Start_- und _End_-Stils, getrennt durch einen Bindestrich, z. B. `round-brick`.
Die Kantenstile sind: `round` (Standard), `circle`, `brick` und `clear`.

<!--SANDBOX
import {Button} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <div>
                <Button view="action" size="l" pin="round-clear">Create</Button>
                <Button view="action" size="l" pin="brick-round">...</Button>
            </div>
            <div>
                <Button view="normal" size="l" pin="circle-clear">Start</Button>
                <Button view="normal" size="l" pin="brick-brick" selected>Center</Button>
                <Button view="normal" size="l" pin="clear-circle">End</Button>
            </div>
            <div>
                <Button view="outlined" pin="brick-clear">1</Button>
                <Button view="outlined" pin="clear-clear">2</Button>
                <Button view="outlined" pin="clear-clear">3</Button>
                <Button view="outlined" pin="clear-brick">4</Button>
            </div>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<div>
    <Button view="action" size="l" pin="round-brick">Create</Button>
    <Button view="action" size="l" pin="brick-round">...</Button>
</div>
<div>
    <Button view="normal" size="l" pin="circle-clear">Start</Button>
    <Button view="normal" size="l" pin="brick-brick" selected>Center</Button>
    <Button view="normal" size="l" pin="clear-circle">End</Button>
</div>
<div>
    <Button view="outlined" pin="brick-clear">1</Button>
    <Button view="outlined" pin="clear-clear">2</Button>
    <Button view="outlined" pin="clear-clear">3</Button>
    <Button view="outlined" pin="clear-brick">4</Button>
</div>
```

<!--/GITHUB_BLOCK-->

## Eigenschaften

`Button` akzeptiert zusätzlich zu diesen alle gültigen `button`- oder `a`-Element-Props:

| Name      | Beschreibung                                                              |              Typ               |     Standard     |
| :-------- | :------------------------------------------------------------------------ | :----------------------------: | :--------------: |
| children  | `Button`-Inhalt. Sie können sowohl Text als auch die `<Icon/>`-Komponente verwenden. |        `React.ReactNode`        |                  |
| component | Überschreibt die Root-Komponente                                          |       `React.ElementType`       |                  |
| disabled  | Schaltet den `disabled`-Zustand um                                        |            `boolean`            |     `false`     |
| href      | Übergeben Sie dies, um die Root-Komponente zu einem Link zu machen        |            `string`             |                  |
| loading   | Schaltet den `loading`-Zustand um                                         |            `boolean`            |     `false`     |
| pin       | Legt den `Button`-Kantenstil fest                                         |            `string`             | `"round-round"` |
| qa        | `data-qa`-HTML-Attribut, das zum Testen verwendet wird                    |            `string`             |                  |
| selected  | Schaltet den `selected`-Zustand um                                        |            `boolean`            |                  |
| size      | Legt die `Button`-Größe fest                                              | `"xs"` `"s"` `"m"` `"l"` `"xl"` |      `"m"`      |
| view      | Legt das Erscheinungsbild des `Button` fest                               |          `ButtonView`           |   `"normal"`    |
| width     | Steuert, wie der `Button` den Platz des Elternteils nutzt                 |        `"auto"` `"max"`         |                  |

## CSS API

| Name                                | Beschreibung               |
| :---------------------------------- | :------------------------- |
| `--g-button-text-color`             | Textfarbe                 |
| `--g-button-text-color-hover`       | Textfarbe beim Hover      |
| `--g-button-background-color`       | Hintergrundfarbe          |
| `--g-button-background-color-hover` | Hintergrundfarbe beim Hover |
| `--g-button-border-width`           | Randbreite                |
| `--g-button-border-color`           | Randfarbe                 |
| `--g-button-border-style`           | Randstil                  |
| `--g-button-focus-outline-width`    | Fokus-Umrissbreite        |
| `--g-button-focus-outline-color`    | Fokus-Umrissfarbe         |
| `--g-button-focus-outline-style`    | Fokus-Umrissstil          |
| `--g-button-focus-outline-offset`   | Fokus-Umrissversatz       |
| `--g-button-height`                 | Höhe (Zeilenhöhe)         |
| `--g-button-padding`                | Seitenabstände            |
| `--g-button-border-radius`          | Randradius                |
| `--g-button-font-size`              | Text-Schriftgröße         |
| `--g-button-icon-space`             | Verfügbarer Platz für Icons |
| `--g-button-icon-offset`            | Icon-Versatz              |
