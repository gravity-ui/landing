<!--GITHUB_BLOCK-->

# Slider

<!--/GITHUB_BLOCK-->

Le curseur est un composant React personnalisable et réactif qui permet aux utilisateurs de sélectionner une seule valeur ou une plage de valeurs à partir d'un ensemble de données spécifié.

```tsx
import {Slider} from '@gravity-ui/uikit';
```

## Variations du curseur

### Curseur unique

Ceci est un curseur avec une seule poignée pour sélectionner une seule valeur. Il est utilisé par défaut.

<!--SANDBOX
import {Box, Slider} from '@gravity-ui/uikit';

export default function () {
    return (
        <Box width="100%" maxWidth={300}>
            <Slider />
        </Box>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Slider />
```

<!--/GITHUB_BLOCK-->

### Curseur de plage

Ceci est un curseur avec deux poignées pour sélectionner une plage. Pour l'utiliser, définissez `defaultValue` (pour un curseur non contrôlé) ou `value` (pour un curseur contrôlé) pour le tableau.

<!--SANDBOX
import {Box, Slider} from '@gravity-ui/uikit';

export default function () {
    return (
        <Box width="100%" maxWidth={300}>
            <Slider defaultValue={[20, 40]} />
        </Box>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Slider defaultValue={[20, 40]} />
```

<!--/GITHUB_BLOCK-->

## États

### Désactivé

C'est un état d'un `Slider` où vous ne souhaitez pas permettre à l'utilisateur d'interagir avec ce composant.

<!--SANDBOX
import {Box, Slider} from '@gravity-ui/uikit';

export default function () {
    return (
        <Box width="100%" maxWidth={300}>
            <Slider disabled />
        </Box>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Slider disabled={true} />
```

<!--/GITHUB_BLOCK-->

### Erreur

Cet état du `Slider` est destiné aux entrées utilisateur incorrectes. Pour modifier l'apparence du `Slider`, utilisez la propriété `validationState` avec la valeur `"invalid"`. Vous pouvez éventuellement fournir un message d'erreur via la propriété `errorMessage`. Ce texte du message sera rendu sous le curseur.

<!--SANDBOX
import {Box, Slider} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Box width="100%" maxWidth={300}>
                <Slider validationState="invalid" />
            </Box>
            <Box width="100%" maxWidth={300}>
                <Slider validationState="invalid" errorMessage="Error message" />
            </Box>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Slider validationState={"invalid"} />
<Slider validationState={"invalid"} errorMessage="Error message" />
```

<!--/GITHUB_BLOCK-->

## Taille

Utilisez la propriété `size` pour gérer la taille du `Slider`. La taille par défaut est `m`.

<!--SANDBOX
import {Box, Slider} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Box width="100%" maxWidth={300}>
                <Slider size="s" />
            </Box>
            <Box width="100%" maxWidth={300}>
                <Slider size="m" />
            </Box>
            <Box width="100%" maxWidth={300}>
                <Slider size="l" />
            </Box>
            <Box width="100%" maxWidth={300}>
                <Slider size="xl" />
            </Box>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Slider size="s" />
<Slider size="m" />
<Slider size="l" />
<Slider size="xl" />
```

<!--/GITHUB_BLOCK-->

## Valeur

### Valeur minimale et maximale

Les propriétés `min` et `max` définissent les limites de la plage que le `Slider` peut gérer. Ces propriétés sont essentielles pour définir les limites des valeurs sélectionnables.

<!--SANDBOX
import {Box, Slider} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Box width="100%" maxWidth={300}>
                <Slider min={10} />
            </Box>
            <Box width="100%" maxWidth={300}>
                <Slider max={50} />
            </Box>
            <Box width="100%" maxWidth={300}>
                <Slider min={20} max={60} />
            </Box>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Slider min={10} />
<Slider max={50} />
<Slider min={20} max={60} />
```

<!--/GITHUB_BLOCK-->

### Pas

La propriété `step` détermine les incréments dans la plage de valeurs minimale et maximale. Cela signifie de combien la valeur change à chaque déplacement du curseur.

<!--SANDBOX
import {Box, Slider} from '@gravity-ui/uikit';

export default function () {
    return (
        <Box width="100%" maxWidth={300}>
            <Slider step={10} />
        </Box>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Slider step={10} />
```

<!--/GITHUB_BLOCK-->

### Marques

La propriété `marks` est utilisée dans le composant `Slider` pour spécifier des marqueurs visuels le long du curseur qui aident à indiquer différents points entre la valeur minimale et maximale. Cette propriété améliore l'utilisabilité et l'interface visuelle du curseur, en particulier pour indiquer des intervalles spécifiques. Par défaut, il y en a 2 (valeurs `min` et `max`). Vous pouvez l'utiliser de 2 manières différentes :

- le nombre de marqueurs visuels le long du curseur

<!--SANDBOX
import {Box, Slider} from '@gravity-ui/uikit';

export default function () {
    return (
        <Box width="100%" maxWidth={300}>
            <Slider marks={11} />
        </Box>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Slider marks={11} />
```

<!--/GITHUB_BLOCK-->

- le tableau des valeurs des marqueurs le long du curseur

<!--SANDBOX
import {Box, Slider} from '@gravity-ui/uikit';

export default function () {
    return (
        <Box width="100%" maxWidth={300}>
            <Slider marks={[0, 50, 100]} />
        </Box>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Slider marks={[0, 50, 100]} />
```

<!--/GITHUB_BLOCK-->

La valeur `0` ou un tableau vide `[]` dans la propriété `marks` masque toutes les marques du `Slider`.

<!--SANDBOX
import {Box, Slider} from '@gravity-ui/uikit';

export default function () {
    return (
        <Box width="100%" maxWidth={300}>
            <Slider marks={0} />
        </Box>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Slider marks={0} />
```

<!--/GITHUB_BLOCK-->

> La valeur de la marque est disponible pour la sélection, même si elle ne correspond pas à la condition de la valeur `step`.

Vous pouvez modifier le format d'affichage des valeurs des marques en utilisant la propriété `marksFormat`.

#### Définir les valeurs disponibles

Vous pouvez définir la propriété `step` sur `null` pour définir un ensemble de valeurs spécifiques que le curseur peut gérer, par opposition à une plage continue. Ceci est particulièrement utile lorsque seules certaines valeurs discrètes sont valides pour la sélection. Dans ce cas, les propriétés `min`, `max` et `marks` permettent de spécifier un tableau de nombres représentant les valeurs exactes que les utilisateurs sont autorisés à sélectionner à l'aide du `Slider`.

<!--SANDBOX
import {Box, Slider} from '@gravity-ui/uikit';

export default function () {
    return (
        <Box width="100%" maxWidth={300}>
            <Slider marks={[10, 20, 50, 55, 65, 80]} step={null} />
        </Box>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Slider marks={[10, 20, 50, 55, 65, 80]} step={null} />
```

<!--/GITHUB_BLOCK-->

## Point de départ

La propriété `startPoint` vous permet de définir le point de départ de la piste. Elle utilise la valeur minimale du `Slider` par défaut. Elle sera ignorée si vous utilisez le `Slider` avec des valeurs de plage ou si vous définissez la propriété `inverted`.

<!--SANDBOX
import {Box, Slider} from '@gravity-ui/uikit';

export default function () {
    return (
        <Box width="100%" maxWidth={300}>
            <Slider startPoint={50} />
        </Box>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Slider startPoint={50} />
```

<!--/GITHUB_BLOCK-->

## Inversé

La propriété `inverted` vous permet de définir la vue inversée de la piste du `Slider`.
Par défaut ( `false`), le `Slider` affiche l'intervalle de `min` à la poignée.
Si `true`, il indique l'intervalle de la poignée à `max`.
Uniquement pour un `Slider` unique. La propriété `startPoint` sera ignorée.

<!--SANDBOX
import {Box, Slider} from '@gravity-ui/uikit';

export default function () {
    return (
        <Box width="100%" maxWidth={300}>
            <Slider inverted />
        </Box>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Slider inverted />
```

<!--/GITHUB_BLOCK-->

## Infobulle

La propriété `tooltipDisplay` est utilisée dans le composant `Slider` pour contrôler le comportement d'affichage d'une infobulle qui montre la valeur actuelle lorsque l'utilisateur interagit avec le curseur. La valeur `auto` affiche l'infobulle uniquement lorsque les poignées du `Slider` sont survolées par le curseur ou focalisées.

<!--SANDBOX
import {Box, Slider} from '@gravity-ui/uikit';

export default function () {
    return (
        <Box width="100%" maxWidth={300}>
            <Slider tooltipDisplay="on" />
        </Box>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Slider tooltipDisplay="on" />
```

<!--/GITHUB_BLOCK-->

Vous pouvez modifier le format d'affichage de la valeur de l'infobulle en utilisant la propriété `tooltipFormat`. Si vous ne spécifiez pas `tooltipFormat`, `marksFormat` sera utilisé pour afficher la valeur dans l'infobulle.

## Propriétés

| Nom                             | Description                                                                                                                                                                              |                         Type                         | Défaut |
| :------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------: | :-----: |
| apiRef                           | Ref vers les props du composant Slider pour le focus et le blur                                                                                                                           |                `RefObject<SliderRef>`                |         |
| autoFocus                        | L'attribut `autofocus` du contrôle                                                                                                                                                       |                      `boolean`                       |         |
| className                        | Le nom de classe du wrapper du contrôle                                                                                                                                                  |                       `string`                       |         |
| [defaultValue](#slider-variants) | La valeur par défaut du contrôle, utilisée lorsque le composant n'est pas contrôlé. Il utilise la valeur minimale de `Slider` par défaut.                                                 |             `number` `[number, number]`              |         |
| [disabled](#disabled)            | Indique que l'utilisateur ne peut pas interagir avec le contrôle                                                                                                                         |                      `boolean`                       | `false` |
| [errorMessage](#error)           | Texte d'une erreur à afficher                                                                                                                                                            |                       `string`                       |         |
| [marks](#marks)                  | Marques textuelles sous le slider. Peut être défini sur le nombre de marques du slider, ou sur un tableau de valeurs qui devraient avoir des marques. La valeur `0` ou un tableau vide masque toutes les marques. |                 `number` `number[]`                  |   `2`   |
| [marksFormat](#marks)            | Formatteur pour la valeur affichée de la marque                                                                                                                                          |             `(value: number) => string`              |         |
| [max](#min-and-max-value)        | La valeur maximale du composant.                                                                                                                                                         |                       `number`                       |  `100`  |
| [min](#min-and-max-value)        | La valeur minimale du composant.                                                                                                                                                         |                       `number`                       |   `0`   |
| onBlur                           | Se déclenche lorsque le contrôle perd le focus. Fournit l'événement de focus comme argument du callback.                                                                                  | `((e: FocusEvent<HTMLDivElement, Element>) => void)` |         |
| onUpdate                         | Se déclenche lorsque la valeur du slider est modifiée par l'utilisateur. Fournit l'événement de changement comme argument du callback.                                                    |   `((value: number \| [number, number]) => void)`    |         |
| onUpdateComplete                 | Se déclenche lorsque `ontouchend` ou `onmouseup` est déclenché. Fournit l'événement de changement comme argument du callback.                                                             |   `((value: number \| [number, number]) => void)`    |         |
| onFocus                          | Se déclenche lorsque le contrôle obtient le focus. Fournit l'événement de focus comme argument du callback.                                                                               | `((e: FocusEvent<HTMLDivElement, Element>) => void)` |         |
| [size](#size)                    | La taille du contrôle                                                                                                                                                                    |               `"s"` `"m"` `"l"` `"xl"`               |  `"m"`  |
| [step](#step)                    | Valeur à ajouter ou soustraire à chaque étape du slider. Peut être défini sur `null` pour utiliser les `marks` comme étapes.                                                              |                   `number` `null`                    |   `1`   |
| [startPoint](#start-point)       | Point de départ de la piste. Ignoré pour les sliders de plage et les sliders inversés.                                                                                                    |                       `number`                       |         |
| [inverted](#inverted)            | Slider avec une piste inversée (de la poignée à `max`).                                                                                                                                  |                      `boolean`                       |         |
| tabIndex                         | L'attribut `tabIndex` du contrôle                                                                                                                                                        |             `number` `[number, number]`              |         |
| [tooltipDisplay](#tooltip)       | Le comportement d'affichage de l'infobulle                                                                                                                                              |                  `off` `on` `auto`                   |  `off`  |
| [tooltipFormat](#tooltip)        | Formatteur pour la valeur affichée de l'infobulle. Utilise `marksFormat` si non défini.                                                                                                  |             `(value: number) => string`              |         |
| [validationState](#error)        | État de validation                                                                                                                                                                       |                     `"invalid"`                      |         |
| [value](#slider-variants)        | La valeur du contrôle                                                                                                                                                                    |             `number` `[number, number]`              |         |
