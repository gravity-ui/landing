```tsx
import {RelativeDatePicker} from '@gravity-ui/date-components';
```

`RelativeDatePicker` est un composant très similaire à `DatePicker`, mais il a la capacité d'utiliser des dates relatives.

## Différence avec `DatePicker`

`RelativeDatePicker` peut fonctionner dans deux modes : `absolute` et `relative`. Vous pouvez basculer interactivement en cliquant sur le bouton `f(x)`. Ou vous pouvez définir le champ `type` dans l'objet `value` ou `defaultValue`.

### Absolu

Le comportement de `RelativeDatePicker` en mode `absolute` est très similaire à celui de `DatePicker` simple.

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

### Relatif

Dans ce mode, `RelativeDatePicker` obtient et renvoie des valeurs dans un format relatif spécial.

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

## Propriétés

| Nom              | Description                                                                                                                                |                     Type                      |          Défaut          |
| :--------------- | :----------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------: | :----------------------: |
| aria-describedby  | L'`aria-describedby` du contrôle. Identifie l'élément (ou les éléments) qui décrit l'objet. attribut                                |                   `string`                    |                           |
| aria-details      | L'`aria-details` du contrôle. Identifie l'élément (ou les éléments) qui fournissent une description détaillée et étendue de l'objet. attribut |                   `string`                    |                           |
| aria-label        | L'`aria-label` du contrôle. Définit une valeur de chaîne qui étiquette l'élément actuel. attribut                                              |                   `string`                    |                           |
| aria-labelledby   | L'`aria-labelledby` du contrôle. Identifie l'élément (ou les éléments) qui étiquettent l'élément actuel. attribut                           |                   `string`                    |                           |
| autoFocus         | L'`autofocus` du contrôle. L'élément doit-il recevoir le focus lors du rendu. attribut                                                   |                   `boolean`                   |                           |
| className         | Le nom de classe du wrapper du contrôle                                                                                                           |                   `string`                    |                           |
| defaultValue      | Définit la valeur initiale pour un composant non contrôlé.                                                                                         |                    `Value`                    |                           |
| disabled          | Indique que l'utilisateur ne peut pas interagir avec le contrôle                                                                                   |                   `boolean`                   |          `false`          |
| errorMessage      | Texte d'erreur                                                                                                                                 |                  `ReactNode`                  |                           |
| format            | Format de la date lorsqu'elle est rendue dans l'entrée. [Formats disponibles](https://day.js.org/docs/en/display/format)                              |                   `string`                    |                           |
| hasClear          | Affiche l'icône pour effacer la valeur du contrôle                                                                                                 |                   `boolean`                   |          `false`          |
| id                | L'attribut `id` du contrôle                                                                                                               |                   `string`                    |                           |
| isDateUnavailable | Callback appelé pour chaque date du calendrier. S'il renvoie `true`, la date n'est pas disponible.                                   |        `((date: DateTime) => boolean)`        |                           |
| label             | Texte d'aide rendu à gauche du nœud d'entrée                                                                                           |                   `string`                    |                           |
| maxValue          | La date maximale autorisée qu'un utilisateur peut sélectionner.                                                                                           |                  `DateTime`                   |                           |
| minValue          | La date minimale autorisée qu'un utilisateur peut sélectionner.                                                                                           |                  `DateTime`                   |                           |
| onBlur            | Se déclenche lorsque le contrôle perd le focus. Fournit l'événement de focus comme argument du callback                                                           | `((e: FocusEvent<Element, Element>) => void)` |                           |
| onFocus           | Se déclenche lorsque le contrôle obtient le focus. Fournit l'événement de focus comme argument du callback                                                           | `((e: FocusEvent<Element, Element>) => void)` |                           |
| onKeyDown         | Se déclenche lorsqu'une touche est enfoncée. Fournit l'événement clavier comme argument du callback                                                              |    `((e: KeyboardEvent<Element>) => void)`    |                           |
| onKeyUp           | Se déclenche lorsqu'une touche est relâchée. Fournit l'événement clavier comme argument du callback                                                              |    `((e: KeyboardEvent<Element>) => void)`    |                           |
| onUpdate          | Se déclenche lorsque la valeur est modifiée par l'utilisateur. Fournit la nouvelle valeur comme argument du callback                                                  |       `((value: Value \| null) => void`       |                           |
| pin               | Arrondi des coins                                                                                                                            |                `TextInputPin`                 |      `'round-round'`      |
| placeholder       | Texte qui apparaît dans le contrôle lorsqu'aucune valeur n'est définie                                                                                  |                   `string`                    |                           |
| placeholderValue  | Une date de remplacement qui contrôle les valeurs par défaut de chaque segment lorsque l'utilisateur interagit avec eux pour la première fois.                               |                  `DateTime`                   | `today's date at midnigh` |
| readOnly          | La valeur du composant est-elle immuable.                                                                                                |                   `boolean`                   |          `false`          |
| size              | La taille du contrôle                                                                                                                    |           `"s"` `"m"` `"l"` `"xl"`            |           `"m"`           |
| style             | Définit le style en ligne de l'élément.                                                                                                         |                `CSSProperties`                |                           |
| timeZone          | Définit le fuseau horaire. [En savoir plus sur les fuseaux horaires](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List)                       |                   `string`                    |                           |
| validationState   | État de validation                                                                                                                           |                  `"invalid"`                  |                           |
| value             | La valeur du contrôle                                                                                                                   |                `Value` `null`                 |                           |
| view              | La vue du contrôle                                                                                                                    |             `"normal"` `"clear"`              |        `"normal"`         |