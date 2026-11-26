<!--GITHUB_BLOCK-->

# ArrowToggle

<!--/GITHUB_BLOCK-->

`ArrowToggle` ist eine Komponente zur Anzeige des Pfeil-Icons. Sie kann sich in vier Richtungen drehen und zur Anzeige von Dropdown-Listen, Cut-Komponenten usw. verwendet werden.

## Aussehen

`ArrowToggle` hat vier mögliche Richtungen: `top`, `right`, `bottom` und `left`.

<!--SANDBOX
import {ArrowToggle} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <ArrowToggle direction="top" /> oben
            <ArrowToggle direction="right" /> rechts
            <ArrowToggle direction="bottom" /> unten
            <ArrowToggle direction="left" /> links
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<ArrowToggle direction="top" /> oben
<ArrowToggle direction="right" /> rechts
<ArrowToggle direction="bottom" /> unten
<ArrowToggle direction="left" /> links
```

<!--/GITHUB_BLOCK-->

## Größe

<!--SANDBOX
import {ArrowToggle} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <ArrowToggle size={10} /> 10
            <ArrowToggle size={20} /> 20
            <ArrowToggle size={30} /> 30
            <ArrowToggle size={40} /> 40
            <ArrowToggle size={50} /> 50
            <ArrowToggle size={100} /> 100
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<ArrowToggle size={10} /> 10
<ArrowToggle size={20} /> 20
<ArrowToggle size={30} /> 30
<ArrowToggle size={40} /> 40
<ArrowToggle size={50} /> 50
<ArrowToggle size={100} /> 100
```

<!--/GITHUB_BLOCK-->

## Verwendung als interaktives Element

Hier ist ein Beispiel für die Verwendung von ArrowToggle mit einem umschaltbaren Icon:

<!--SANDBOX
import {useState} from 'react';
import type {ArrowToggleProps} from '@gravity-ui/uikit';
import {ArrowToggle, Button} from '@gravity-ui/uikit';

const directions = ['top', 'left', 'bottom', 'right'] as Array<ArrowToggleProps['direction']>;

export default function () {
    const [directionIndex, setDirectionIndex] = useState(0);
    const direction = directions[directionIndex % directions.length];

    return (
        <Button onClick={() => setDirectionIndex(directionIndex + 1)} view="flat">
            <ArrowToggle direction={direction} /> <span>{direction}</span>
        </Button>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
const [directionIndex, setDirectionIndex] = React.useState(0);
const directions = ['top', 'left', 'bottom', 'right'] as Array<ArrowToggleProps['direction']>;
const direction = directions[directionIndex % directions.length];

return (
  <Button onClick={() => setDirectionIndex(directionIndex + 1)} view="flat">
    <ArrowToggle {...args} direction={direction} /> <span>{direction}</span>
  </Button>
);
```

<!--/GITHUB_BLOCK-->

## Eigenschaften

| Name      | Beschreibung                                |   Typ   |  Standard   |
| :-------- | :------------------------------------------ | :-----: | :---------: |
| className | `class` HTML-Attribut                       | `string` |             |
| direction | Wird verwendet, um die Richtung von `arrowToggle` festzulegen | `string` | `"bottom"` |
| size      | Größe von `arrowToggle` (in Pixeln)         | `number` |    `16`     |
| qa        | `data-qa` HTML-Attribut, wird für Tests verwendet | `string` |             |

## CSS API

| Name                                   | Beschreibung            |
| :------------------------------------- | :---------------------- |
| `--g-arrow-toggle-transition-duration` | Übergangsdauer         |