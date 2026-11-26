```tsx
import {DatePicker} from '@gravity-ui/date-components';
```

`DatePicker` est un composant sophistiqué, léger et entièrement personnalisable, conçu pour offrir une fonctionnalité intuitive de sélection de date dans vos applications React. Conçu en tenant compte de l'expérience utilisateur et de la facilité d'intégration, il s'intègre parfaitement dans les formulaires, les modales ou tout autre élément d'interface utilisateur nécessitant une saisie de date. Il peut être contrôlé si vous définissez la propriété `value`. Ou il peut être non contrôlé si vous ne définissez aucune valeur, mais dans ce cas, vous pouvez gérer l'état initial avec la propriété optionnelle `defaultValue`. Le composant est non contrôlé par défaut.

### Addition utile

Pour définir les dates dans le bon format, vous devrez peut-être inclure des utilitaires supplémentaires de la bibliothèque [Date Utils](https://gravity-ui.com/libraries/date-utils)

```tsx
import {dateTimeParse, dateTime} from '@gravity-ui/date-utils';
```

## Apparence

L'apparence de `DatePicker` est contrôlée par les propriétés `size`, `view` et `pin`.

### Taille

Pour contrôler la taille de `DatePicker`, utilisez la propriété `size`. La taille par défaut est `m`.

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

### Vue

`normal` - la vue principale de `DatePicker` (utilisée par défaut).

GRAVITY_TRANSLATION_BLOCK_3_END

`clear` - vue de `DatePicker` sans bordures visibles (peut être utilisée avec un wrapper personnalisé)

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

### Pin

La propriété `pin` vous permet de contrôler la forme des bords droit et gauche et est généralement utilisée pour combiner plusieurs contrôles en une seule unité.
La valeur de la propriété `pin` se compose des noms de style des bords gauche et droit, séparés par un tiret, par exemple `"round-brick"`.
Les styles de bord sont : `round` (par défaut), `circle`, `brick` et `clear`.

GRAVITY_TRANSLATION_BLOCK_6_END

GRAVITY_TRANSLATION_BLOCK_7_END

## Valeur

### Valeur minimale et maximale

La propriété `minValue` vous permet de spécifier la date et l'heure les plus anciennes qui peuvent être saisies par l'utilisateur. Inversement, la propriété `maxValue` spécifie la date et l'heure les plus récentes qui peuvent être saisies. Si vous saisissez une valeur en dehors de ces limites, le composant modifie sa vue, comme dans le cas d'un état de validation invalide.

GRAVITY_TRANSLATION_BLOCK_8_END

GRAVITY_TRANSLATION_BLOCK_9_END

## États

### Désactivé

L'état de `DatePicker` où vous ne souhaitez pas que l'utilisateur puisse interagir avec le composant.

GRAVITY_TRANSLATION_BLOCK_10_END

GRAVITY_TRANSLATION_BLOCK_11_END

### Lecture seule

`readOnly` est un attribut booléen qui, lorsqu'il est défini sur true, rend le composant `DatePicker` immuable pour l'utilisateur. Cela signifie que bien que l'entrée affiche sa valeur actuelle, les utilisateurs ne pourront pas la modifier.

GRAVITY_TRANSLATION_BLOCK_12_END

GRAVITY_TRANSLATION_BLOCK_13_END

### Erreur

L'état de `DatePicker` dans lequel vous souhaitez indiquer une saisie utilisateur incorrecte. Pour modifier l'apparence de `DatePicker`, utilisez la propriété `validationState` avec la valeur `"invalid"`. Un message facultatif peut être ajouté via la propriété `errorMessage`. Le texte du message sera rendu sous le composant.

GRAVITY_TRANSLATION_BLOCK_14_END

GRAVITY_TRANSLATION_BLOCK_15_END

## Contenu supplémentaire

### Placeholder

Cette prop vous permet de fournir un court indice décrivant la valeur attendue du champ de saisie. Cet indice s'affiche dans le champ de saisie avant que l'utilisateur n'entre une valeur et disparaît lors de la saisie de texte.

GRAVITY_TRANSLATION_BLOCK_16_END

GRAVITY_TRANSLATION_BLOCK_17_END

### Libellé

Permet de placer le libellé dans la partie gauche du champ. Le libellé ne peut pas occuper plus de la moitié de la largeur totale de l'espace de `DatePicker`.

GRAVITY_TRANSLATION_BLOCK_18_END

GRAVITY_TRANSLATION_BLOCK_19_END

### Bouton Effacer

`hasClear` est une prop booléenne qui offre aux utilisateurs la possibilité d'effacer rapidement le contenu du champ de saisie.

GRAVITY_TRANSLATION_BLOCK_20_END

GRAVITY_TRANSLATION_BLOCK_21_END

## Format

La prop `format` est une chaîne de caractères qui définit le format de date et d'heure que le composant `DatePicker` acceptera et affichera. Cette prop détermine comment la date et l'heure sont présentées visuellement à l'utilisateur et comment la saisie de l'utilisateur doit être formatée. [Formats disponibles](https://day.js.org/docs/en/display/format)

GRAVITY_TRANSLATION_BLOCK_22_END

GRAVITY_TRANSLATION_BLOCK_23_END

### Analyseur de date personnalisé

Vous pouvez fournir une fonction d'analyse personnalisée pour gérer les chaînes de date collées via la prop `parseDateFromString`. Ceci est utile lorsque vous devez prendre en charge des formats de date spécifiques ou une logique d'analyse personnalisée différente du comportement par défaut.

GRAVITY_TRANSLATION_BLOCK_24_END

## Fuseau horaire

`timeZone` est la propriété pour définir le fuseau horaire de la valeur dans l'entrée. [En savoir plus sur les fuseaux horaires](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List)

## Personnalisation

Si vous souhaitez utiliser un composant calendrier personnalisé à l'intérieur de `DatePicker`, vous pouvez le passer comme `children` avec des props similaires à celles d'un calendrier.

GRAVITY_TRANSLATION_BLOCK_25_END

GRAVITY_TRANSLATION_BLOCK_26_END

## Propriétés

| Nom                           | Description                                                                                                                                |                               Type                                 |          Défaut          |
| :----------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------: | :-----------------------: |
| aria-describedby               | L'attribut `aria-describedby` du contrôle. Identifie l'élément (ou les éléments) qui décrit l'objet.                                      |                               `string`                               |                           |
| aria-details                   | L'attribut `aria-details` du contrôle. Identifie l'élément (ou les éléments) qui fournissent une description détaillée et étendue de l'objet. |                               `string`                               |                           |
| aria-label                     | L'attribut `aria-label` du contrôle. Définit une valeur de chaîne qui étiquette l'élément actuel.                                           |                               `string`                               |                           |
| aria-labelledby                | L'attribut `aria-labelledby` du contrôle. Identifie l'élément (ou les éléments) qui étiquettent l'élément actuel.                           |                               `string`                               |                           |
| autoFocus                      | L'attribut `autofocus` du contrôle. Indique si l'élément doit recevoir le focus lors du rendu.                                             |                              `boolean`                               |                           |
| className                      | Le nom de classe du wrapper du contrôle                                                                                                    |                               `string`                               |                           |
| [defaultValue](#datepicker)    | Définit la valeur initiale pour un composant non contrôlé.                                                                                 |                              `DateTime`                              |                           |
| [disabled](#disabled)          | Indique que l'utilisateur ne peut pas interagir avec le contrôle                                                                           |                              `boolean`                               |          `false`          |
| [errorMessage](#error)         | Texte d'erreur                                                                                                                             |                             `ReactNode`                              |                           |
| [format](#format)              | Format de la date lors du rendu dans le champ de saisie. [Formats disponibles](https://day.js.org/docs/en/display/format)                  |                               `string`                               |                           |
| [hasClear](#clear-button)      | Affiche l'icône pour effacer la valeur du contrôle                                                                                         |                              `boolean`                               |          `false`          |
| id                             | L'attribut `id` du contrôle                                                                                                                |                               `string`                               |                           |
| isDateUnavailable              | Callback appelé pour chaque date du calendrier. S'il renvoie `true`, la date n'est pas disponible.                                         |                   `((date: DateTime) => boolean)`                    |                           |
| [label](#label)                | Texte d'aide rendu à gauche du nœud de saisie                                                                                              |                               `string`                               |                           |
| [maxValue](#min-and-max-value) | La date maximale autorisée qu'un utilisateur peut sélectionner.                                                                             |                              `DateTime`                              |                           |
| [minValue](#min-and-max-value) | La date minimale autorisée qu'un utilisateur peut sélectionner.                                                                             |                              `DateTime`                              |                           |
| onBlur                         | Se déclenche lorsque le contrôle perd le focus. Fournit l'événement de focus comme argument du callback.                                   |            `((e: FocusEvent<Element, Element>) => void)`             |                           |
| onFocus                        | Se déclenche lorsque le contrôle obtient le focus. Fournit l'événement de focus comme argument du callback.                                |            `((e: FocusEvent<Element, Element>) => void)`             |                           |
| onKeyDown                      | Se déclenche lorsqu'une touche est enfoncée. Fournit l'événement clavier comme argument du callback.                                       |               `((e: KeyboardEvent<Element>) => void)`                |                           |
| onKeyUp                        | Se déclenche lorsqu'une touche est relâchée. Fournit l'événement clavier comme argument du callback.                                       |               `((e: KeyboardEvent<Element>) => void)`                |                           |
| onUpdate                       | Se déclenche lorsque la valeur est modifiée par l'utilisateur. Fournit la nouvelle valeur comme argument du callback.                       |                 `((value: DateTime \| null) => void`                 |                           |
| parseDateFromString            | Fonction de parsing personnalisée pour analyser les chaînes de dates collées. Si elle n'est pas fournie, le parser par défaut sera utilisé. | `((dateStr: string, format: string, timeZone?: string) => DateTime)` |                           |
| [pin](#pin)                    | Arrondi des coins                                                                                                                          |                            `TextInputPin`                            |      `'round-round'`      |
| [placeholder](#placeholder)    | Texte qui apparaît dans le contrôle lorsqu'aucune valeur n'est définie                                                                      |                               `string`                               |                           |
| placeholderValue               | Une date de substitution qui contrôle les valeurs par défaut de chaque segment lorsque l'utilisateur interagit avec eux pour la première fois. |                              `DateTime`                              | `today's date at midnigh` |
| [readOnly](#readonly)          | Indique si la valeur du composant est immuable.                                                                                            |                              `boolean`                               |          `false`          |
| [size](#size)                  | La taille du contrôle                                                                                                                      |                       `"s"` `"m"` `"l"` `"xl"`                       |           `"m"`           |
| style                          | Définit le style en ligne pour l'élément.                                                                                                  |                           `CSSProperties`                            |                           |
| [timeZone](#time-zone)         | Définit le fuseau horaire. [En savoir plus sur les fuseaux horaires](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List)       |                               `string`                               |                           |
| [validationState](#error)      | État de validation                                                                                                                         |                             `"invalid"`                              |                           |
| [value](#datepicker)           | La valeur du contrôle                                                                                                                      |                          `DateTime` `null`                           |                           |
| [view](#view)                  | La vue du contrôle                                                                                                                        |                         `"normal"` `"clear"`                         |        `"normal"`         |