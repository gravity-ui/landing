Le curseur est un composant React personnalisable et réactif qui permet aux utilisateurs de sélectionner une seule valeur ou une plage de valeurs à partir d'un ensemble de données spécifié.

```tsx
import {Slider} from '@gravity-ui/uikit';
```

## Variations du curseur

### Curseur unique

Ceci est un curseur avec une seule poignée pour sélectionner une seule valeur. Il est utilisé par défaut.

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

### Curseur de plage

Ceci est un curseur avec deux poignées pour sélectionner une plage. Pour l'utiliser, définissez `defaultValue` (pour un curseur non contrôlé) ou `value` (pour un curseur contrôlé) pour le tableau.

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

## États

### Désactivé

C'est un état d'un `Slider` où vous ne souhaitez pas permettre à l'utilisateur d'interagir avec ce composant.

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

### Erreur

Cet état du `Slider` est destiné aux entrées utilisateur incorrectes. Pour modifier l'apparence du `Slider`, utilisez la propriété `validationState` avec la valeur `"invalid"`. Vous pouvez éventuellement fournir un message d'erreur via la propriété `errorMessage`. Ce texte de message sera rendu sous le curseur.

GRAVITY_TRANSLATION_BLOCK_6_END

GRAVITY_TRANSLATION_BLOCK_7_END

## Taille

Utilisez la propriété `size` pour gérer la taille du `Slider`. La taille par défaut est `m`.

GRAVITY_TRANSLATION_BLOCK_8_END

GRAVITY_TRANSLATION_BLOCK_9_END

## Valeur

### Valeur minimale et maximale

Les propriétés `min` et `max` définissent les limites de la plage que le `Slider` peut gérer. Ces propriétés sont essentielles pour définir les limites des valeurs sélectionnables.

GRAVITY_TRANSLATION_BLOCK_10_END

GRAVITY_TRANSLATION_BLOCK_11_END

### Pas

La propriété `step` détermine les incréments dans la plage de valeurs minimale et maximale. Cela signifie de combien la valeur change à chaque déplacement du curseur.

GRAVITY_TRANSLATION_BLOCK_12_END

GRAVITY_TRANSLATION_BLOCK_13_END

### Marques

La propriété `marks` est utilisée dans le composant `Slider` pour spécifier des marqueurs visuels le long du curseur qui aident à indiquer divers points entre la valeur minimale et maximale. Cette propriété améliore l'utilisabilité et l'interface visuelle du curseur, en particulier pour indiquer des intervalles spécifiques. Par défaut, il y en a 2 (valeurs `min` et `max`). Vous pouvez l'utiliser de 2 manières différentes :

- le nombre de marqueurs visuels le long du curseur

GRAVITY_TRANSLATION_BLOCK_14_END

GRAVITY_TRANSLATION_BLOCK_15_END

- le tableau des valeurs des marqueurs le long du curseur

GRAVITY_TRANSLATION_BLOCK_16_END

GRAVITY_TRANSLATION_BLOCK_17_END

La valeur `0` ou un tableau vide `[]` dans la propriété `marks` masque toutes les marques du `Slider`.

GRAVITY_TRANSLATION_BLOCK_18_END

GRAVITY_TRANSLATION_BLOCK_19_END

> La valeur de la marque est disponible pour la sélection, même si elle ne correspond pas à la condition de la valeur `step`.

Vous pouvez modifier le format d'affichage des valeurs des marques en utilisant la propriété `marksFormat`.

#### Définir les valeurs disponibles

Vous pouvez définir la propriété `step` sur `null` pour définir un ensemble de valeurs spécifiques que le curseur peut gérer, par opposition à une plage continue. Ceci est particulièrement utile lorsque seules certaines valeurs discrètes sont valides pour la sélection. Dans ce cas, les propriétés `min`, `max` et `marks` permettent de spécifier un tableau de nombres représentant les valeurs exactes que les utilisateurs sont autorisés à sélectionner à l'aide du `Slider`.

GRAVITY_TRANSLATION_BLOCK_20_END

GRAVITY_TRANSLATION_BLOCK_21_END

## Point de départ

La propriété `startPoint` vous permet de définir le point de départ de la piste. Elle utilise la valeur minimale du `Slider` par défaut. Elle sera ignorée si vous utilisez le `Slider` avec des valeurs de plage ou si vous définissez la propriété `inverted`.

GRAVITY_TRANSLATION_BLOCK_22_END

GRAVITY_TRANSLATION_BLOCK_23_END

## Inversé

La propriété `inverted` vous permet de définir la vue inversée de la piste du `Slider`.
Par défaut ( `false`), le `Slider` affiche l'intervalle de `min` à la poignée.
Si `true`, il indique l'intervalle de la poignée à `max`.
Uniquement pour un `Slider` unique. La propriété `startPoint` sera ignorée.

GRAVITY_TRANSLATION_BLOCK_24_END

GRAVITY_TRANSLATION_BLOCK_25_END

## Infobulle

La propriété `tooltipDisplay` est utilisée dans le composant `Slider` pour contrôler le comportement d'affichage d'une infobulle qui montre la valeur actuelle lorsque l'utilisateur interagit avec le curseur. La valeur `auto` affiche l'infobulle uniquement lorsque les poignées du `Slider` sont survolées par le curseur ou focalisées.

GRAVITY_TRANSLATION_BLOCK_26_END

GRAVITY_TRANSLATION_BLOCK_27_END

Vous pouvez modifier le format d'affichage de la valeur de l'infobulle en utilisant la propriété `tooltipFormat`. Si vous ne spécifiez pas `tooltipFormat`, `marksFormat` sera utilisé pour afficher la valeur dans l'infobulle.

## Propriétés

| Nom                                | Description                                                                                                                                                                              |                         Type                         | Défaut |
| :--------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------: | :-----: |
| apiRef                             | Référence aux props du composant Slider pour le focus et le blur                                                                                                                          |                `RefObject<SliderRef>`                |         |
| autoFocus                          | L'attribut `autofocus` du contrôle                                                                                                                                                       |                      `boolean`                       |         |
| className                          | Nom de classe du wrapper du contrôle                                                                                                                                                     |                       `string`                       |         |
| [defaultValue](#slider-variations) | La valeur par défaut du contrôle, utilisée lorsque le composant n'est pas contrôlé. Elle utilise la valeur minimale de `Slider` par défaut.                                                |             `number` `[number, number]`              |         |
| [disabled](#disabled)              | Indique que l'utilisateur ne peut pas interagir avec le contrôle                                                                                                                         |                      `boolean`                       | `false` |
| [errorMessage](#error)             | Texte d'une erreur à afficher                                                                                                                                                            |                       `string`                       |         |
| [marks](#marks)                    | Marques textuelles sous le slider. Peut être défini sur le nombre de marques du slider, ou sur un tableau de valeurs qui devraient avoir des marques. La valeur `0` ou un tableau vide masque toutes les marques. |                 `number` `number[]`                  |   `2`   |
| [marksFormat](#marks)              | Formatteur pour la valeur affichée de la marque                                                                                                                                          |             `(value: number) => string`              |         |
| [max](#minimum-and-maximum-value)  | La valeur maximale du composant.                                                                                                                                                         |                       `number`                       |  `100`  |
| [min](#minimum-and-maximum-value)  | La valeur minimale du composant.                                                                                                                                                         |                       `number`                       |   `0`   |
| onBlur                             | Se déclenche lorsque le contrôle perd le focus. Fournit l'événement de focus comme argument du callback.                                                                                  | `((e: FocusEvent<HTMLDivElement, Element>) => void)` |         |
| onUpdate                           | Se déclenche lorsque la valeur du slider est modifiée par l'utilisateur. Fournit l'événement de changement comme argument du callback.                                                  |   `((value: number \| [number, number]) => void)`    |         |
| onUpdateComplete                   | Se déclenche lorsque `ontouchend` ou `onmouseup` est déclenché. Fournit l'événement de changement comme argument du callback.                                                             |   `((value: number \| [number, number]) => void)`    |         |
| onFocus                            | Se déclenche lorsque le contrôle obtient le focus. Fournit l'événement de focus comme argument du callback.                                                                              | `((e: FocusEvent<HTMLDivElement, Element>) => void)` |         |
| [size](#size)                      | La taille du contrôle                                                                                                                                                                    |               `"s"` `"m"` `"l"` `"xl"`               |  `"m"`  |
| [step](#step)                      | Valeur à ajouter ou soustraire à chaque étape du slider. Peut être défini sur `null` pour utiliser les `marks` comme étapes.                                                             |                   `number` `null`                    |   `1`   |
| [startPoint](#start-point)         | Point de départ de la piste. Ignoré pour les sliders de plage et les sliders inversés.                                                                                                    |                       `number`                       |         |
| [inverted](#inverted)              | Slider avec une piste inversée (de la poignée à `max`).                                                                                                                                  |                      `boolean`                       |         |
| tabIndex                           | L'attribut `tabIndex` du contrôle                                                                                                                                                        |             `number` `[number, number]`              |         |
| [tooltipDisplay](#tooltip)         | Le comportement d'affichage de l'infobulle                                                                                                                                              |                  `off` `on` `auto`                   |  `off`  |
| [tooltipFormat](#tooltip)          | Formatteur pour la valeur affichée de l'infobulle. Utilise `marksFormat` si non défini.                                                                                                  |             `(value: number) => string`              |         |
| [validationState](#error)          | État de validation                                                                                                                                                                       |                     `"invalid"`                      |         |
| [value](#slider-variations)        | La valeur du contrôle                                                                                                                                                                    |             `number` `[number, number]`              |         |