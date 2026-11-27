<!--GITHUB_BLOCK-->

# ArrowToggle

<!--/GITHUB_BLOCK-->

`ArrowToggle` est un composant pour afficher l'icône en forme de chevron. Il peut pivoter dans quatre directions et être utilisé pour afficher des listes déroulantes, des composants coupés, etc.

## Apparence

`ArrowToggle` a quatre directions possibles : `top`, `right`, `bottom` et `left`.

<!--SANDBOX
import {ArrowToggle} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <ArrowToggle direction="top" /> top
            <ArrowToggle direction="right" /> right
            <ArrowToggle direction="bottom" /> bottom
            <ArrowToggle direction="left" /> left
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<ArrowToggle direction="top" /> top
<ArrowToggle direction="right" /> right
<ArrowToggle direction="bottom" /> bottom
<ArrowToggle direction="left" /> left
```

<!--/GITHUB_BLOCK-->

## Taille

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

## Utilisation comme élément interactif

Voici un exemple d'utilisation d'ArrowToggle avec une icône basculante :

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

## Propriétés

| Nom      | Description                                |   Type   |  Défaut   |
| :-------- | :----------------------------------------- | :------: | :--------: |
| className | Attribut HTML `class`                     | `string` |            |
| direction | Utilisé pour définir la direction de `arrowToggle` | `string` | `"bottom"` |
| size      | Taille de `arrowToggle` (en pixels)             | `number` |    `16`    |
| qa        | Attribut HTML `data-qa`, utilisé pour les tests | `string` |            |

## API CSS

| Nom                                   | Description         |
| :------------------------------------- | :------------------ |
| `--g-arrow-toggle-transition-duration` | Durée de transition |
