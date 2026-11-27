<!--GITHUB_BLOCK-->

# RelativeDateField

<!--/GITHUB_BLOCK-->

```tsx
import {RelativeDateField} from '@gravity-ui/date-components';
```

Le composant `RelativeDateField` est utilisé uniquement pour la saisie de dates relatives. Il ne peut pas être utilisé comme un `DateField` "normal".

## Entrée relative

Le composant reçoit des valeurs dans un format relatif spécial. Vous définissez les valeurs comme des formules qui vous aideront à calculer la date exacte. Nous pouvons appeler cela le `format de type Grafana` car il est très similaire au format des champs de temps relatif de Grafana. Pour en savoir plus sur les valeurs de temps relatif dans Grafana, lisez [la documentation](https://grafana.com/docs/grafana/latest/panels-visualizations/query-transform-data/).

En utilisant ce mode, vous pouvez livrer vos données de la source à la destination et calculer la valeur exacte directement au point de terminaison nécessaire sans inexactitude.

## Règles de saisie valides

- une valeur doit commencer par le mot-clé `now`
- l'expression de date relative ressemble généralement à : `now${opérateur}${compteur}${unité}`
- valeurs disponibles pour `opérateur` :
  - `-` - soustraction
  - `+` - addition
  - `/` - ramener au début de l'`unité`
- valeurs valides de `compteur` - tout nombre naturel
- valeurs valides de `unité` :
  - `d` - jour
  - `w` - semaine
  - `M` - mois
  - `Q` - trimestre
  - `y` - année
  - `h` - heure
  - `m` - minute

### Exemples d'utilisation

> `now-1d`
>
> `now/w`
>
> `now+10d-5d/M`

## Propriétés

| Nom             | Description                                                                                                          |                     Type                      |     Défaut      |
| :-------------- | :------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------: | :-------------: |
| aria-describedby | L'attribut `aria-describedby` du contrôle                                                                            |                   `string`                    |                 |
| aria-details     | L'attribut `aria-details` du contrôle                                                                                |                   `string`                    |                 |
| aria-label       | L'attribut `aria-label` du contrôle                                                                                  |                   `string`                    |                 |
| aria-labelledby  | L'attribut `aria-labelledby` du contrôle                                                                             |                   `string`                    |                 |
| autoFocus        | L'attribut `autofocus` du contrôle                                                                                   |                   `boolean`                   |                 |
| className        | Le nom de classe du wrapper du contrôle                                                                              |                   `string`                    |                 |
| defaultValue     | Définit la valeur initiale pour un composant non contrôlé.                                                           |                   `string`                    |                 |
| disabled         | Indique que l'utilisateur ne peut pas interagir avec le contrôle                                                     |                   `boolean`                   |     `false`     |
| errorMessage     | Texte d'erreur                                                                                                       |                  `ReactNode`                  |                 |
| hasClear         | Affiche l'icône pour effacer la valeur du contrôle                                                                   |                   `boolean`                   |     `false`     |
| hasTime          | Affiche le champ d'heure dans la valeur du popup                                                                     |                   `boolean`                   |     `false`     |
| id               | L'attribut `id` du contrôle                                                                                          |                   `string`                    |                 |
| label            | Texte d'aide rendu à gauche du nœud d'entrée                                                                         |                   `string`                    |                 |
| leftContent      | Le nœud de l'utilisateur rendu avant le label et l'entrée                                                            |               `React.ReactNode`               |                 |
| onBlur           | Se déclenche lorsque le contrôle perd le focus. Fournit l'événement de focus comme argument du callback              | `((e: FocusEvent<Element, Element>) => void)` |                 |
| onFocus          | Se déclenche lorsque le contrôle obtient le focus. Fournit l'événement de focus comme argument du callback            | `((e: FocusEvent<Element, Element>) => void)` |                 |
| onKeyDown        | Se déclenche lorsqu'une touche est pressée. Fournit l'événement clavier comme argument du callback                    |    `((e: KeyboardEvent<Element>) => void)`    |                 |
| onKeyUp          | Se déclenche lorsqu'une touche est relâchée. Fournit l'événement clavier comme argument du callback                   |    `((e: KeyboardEvent<Element>) => void)`    |                 |
| onUpdate         | Se déclenche lorsque la valeur est modifiée par l'utilisateur. Fournit la nouvelle valeur comme argument du callback |      `((value: string \| null) => void`       |                 |
| pin              | Arrondi des coins                                                                                                    |                   `string`                    | `'round-round'` |
| placeholder      | Texte qui apparaît dans le contrôle lorsqu'il n'a pas de valeur définie                                              |                   `string`                    |                 |
| readOnly         | Indique si la valeur du composant est immuable.                                                                      |                   `boolean`                   |     `false`     |
| rightContent     | Nœud de l'utilisateur rendu après le nœud d'entrée et le bouton d'effacement                                         |               `React.ReactNode`               |                 |
| size             | La taille du contrôle                                                                                                |           `"s"` `"m"` `"l"` `"xl"`            |      `"m"`      |
| style            | Définit le style en ligne pour l'élément.                                                                            |                `CSSProperties`                |                 |
| timeZone         | Définit le fuseau horaire. [En savoir plus sur les fuseaux horaires](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List) |                   `string`                    |                 |
| validationState  | État de validation                                                                                                   |                  `"invalid"`                  |                 |
| value            | La valeur du contrôle                                                                                                |                `string` `null`                |                 |
| view             | La vue du contrôle                                                                                                    |             `"normal"` `"clear"`              |   `"normal"`    |
