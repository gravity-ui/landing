`Select` est un contrôle qui fournit une liste d'options parmi lesquelles l'utilisateur peut choisir.

```tsx
import {Select} from '@gravity-ui/uikit';
```

## Options

Options à sélectionner.

### Définition des options

Vous pouvez définir les options sous forme de tableau d'objets ou comme enfants d'un composant. La première approche est utile lorsque les options nécessitent une préparation complexe et, éventuellement, une mémorisation. La seconde est pratique lorsqu'il y a peu d'options et que leur configuration ne nécessite pas de calculs complexes.

#### Liste plate

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

#### Liste groupée

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

### Stockage des données dans les options

Vous pouvez définir et stocker des données uniques dans chaque option en utilisant la propriété `option.data`. Cela peut être utile lorsque vous avez besoin d'enrichir les données lors de l'utilisation du callback `onUpdate` ou, par exemple, lors du rendu de vos options avec `renderOption`.

## Sélection de plusieurs options

Pour activer la sélection multiple, utilisez la propriété `multiple`. Sa valeur par défaut est `false`.

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

### Compteur

Vous pouvez ajouter un compteur des éléments sélectionnés au composant en utilisant la propriété `hasCounter`.

GRAVITY_TRANSLATION_BLOCK_7_END

GRAVITY_TRANSLATION_BLOCK_8_END

## Filtrage des options

Pour activer la section de filtre, utilisez la propriété `filterable`. Sa valeur par défaut est `false`.

GRAVITY_TRANSLATION_BLOCK_9_END

GRAVITY_TRANSLATION_BLOCK_10_END

## Taille

Pour gérer la taille par défaut du contrôle et des options, utilisez la propriété `size`. Sa taille par défaut est `m`.

GRAVITY_TRANSLATION_BLOCK_11_END

GRAVITY_TRANSLATION_BLOCK_12_END

## Largeur du contrôle

Par défaut, la largeur du contrôle s'étire pour correspondre à la largeur du contenu des options sélectionnées. Vous pouvez la gérer en utilisant la propriété `width` :

`'max'`: S'étire sur toute la largeur du parent.

`number`: Applique la largeur en pixels.

GRAVITY_TRANSLATION_BLOCK_13_END

## Largeur de la popup

Vous pouvez gérer la largeur de la popup avec la propriété `popupWidth`. Les valeurs disponibles sont :

`'fit'`: Applique la largeur du contrôle.

`number`: Applique la largeur en pixels.

Points à noter sur le comportement par défaut :

- La largeur de la popup est égale à la largeur de l'option la plus large, mais pas plus large que `90vw`. Cela ne s'applique pas si vous utilisez la [virtualisation](#virtualized-list).

- Les options étroites sont étirées pour s'adapter à la largeur du contrôle.

GRAVITY_TRANSLATION_BLOCK_14_END

### Liste virtualisée

Pour un affichage optimal d'un grand nombre d'options, `Select` dispose d'un outil de virtualisation de liste intégré. La virtualisation est activée après avoir dépassé le seuil du nombre d'options (`50` par défaut). Vous pouvez gérer cette valeur en utilisant la propriété `virtualizationThreshold`.

Lors de l'utilisation de la virtualisation, certaines restrictions s'appliquent à l'élément popup :

- La largeur de la popup n'est plus ajustée à la longueur de l'option la plus longue.

- La largeur minimale de la popup est égale à la largeur du contrôle, ou `100px` si le contrôle est plus court.

GRAVITY_TRANSLATION_BLOCK_15_END

## Utilisation avancée

Il existe de nombreuses façons de personnaliser votre `Select`.

### Rendu d'un contrôle personnalisé

Pour rendre un contrôle personnalisé, utilisez la propriété `renderControl`.
Note : Vous devez transmettre tous les arguments à votre nœud afin d'activer un comportement cohérent, tout comme lors de l'utilisation du contrôle par défaut.

GRAVITY_TRANSLATION_BLOCK_16_END

GRAVITY_TRANSLATION_BLOCK_17_END

### Rendu d'une section de filtre personnalisée

Pour rendre une section de filtre personnalisée, utilisez la propriété `renderFilter` et définissez la propriété `filterable` sur `true`.
Note : Vous devez transmettre tous les arguments à votre nœud afin d'activer un filtre fonctionnel, tout comme lors de l'utilisation de la configuration par défaut.

GRAVITY_TRANSLATION_BLOCK_18_END

GRAVITY_TRANSLATION_BLOCK_19_END

### Rendu d'options personnalisées

Pour rendre des options personnalisées, utilisez la propriété `renderOption` :

GRAVITY_TRANSLATION_BLOCK_20_END

GRAVITY_TRANSLATION_BLOCK_21_END

### Rendu d'options sélectionnées personnalisées

Pour rendre des options sélectionnées personnalisées, utilisez la propriété `renderSelectedOption` :

GRAVITY_TRANSLATION_BLOCK_22_END

GRAVITY_TRANSLATION_BLOCK_23_END

### Rendu d'options de hauteurs différentes

Les options ont une hauteur fixe selon la propriété `size`. Si vous avez besoin de rendre des options de hauteurs différentes, vous pouvez utiliser la propriété `option.data`. Elle stockera les informations sur la hauteur que vous devez définir pour les options, ainsi que la propriété `getOptionHeight` pour définir cette valeur.

GRAVITY_TRANSLATION_BLOCK_24_END

GRAVITY_TRANSLATION_BLOCK_25_END

### Rendu d'un compteur personnalisé

Pour rendre un compteur personnalisé, utilisez la propriété `renderCounter`. Le compteur n'est affiché que lorsque la sélection multiple est activée (`multiple={true}`) et que `hasCounter={true}`.

GRAVITY_TRANSLATION_BLOCK_26_END

GRAVITY_TRANSLATION_BLOCK_27_END

### Rendu de la liste d'options

La propriété `renderPopup` vous permet de contrôler le contenu de la liste d'options : changer l'ordre des éléments standard (filtre, liste), les masquer, ou ajouter des éléments personnalisés entre, avant ou après eux.

GRAVITY_TRANSLATION_BLOCK_28_END

GRAVITY_TRANSLATION_BLOCK_29_END

### Erreur

Cet état `Select` est destiné aux entrées utilisateur incorrectes. Pour modifier l'apparence du `Select`, utilisez la propriété `validationState` avec la valeur `"invalid"`. Vous pouvez éventuellement fournir un message d'erreur via la propriété `errorMessage`. Par défaut, le texte du message est rendu à l'extérieur du composant.
Vous pouvez changer cela avec la propriété `errorPlacement`.

GRAVITY_TRANSLATION_BLOCK_30_END

## Propriétés

| Nom                                                      | Description                                                                                                                      | Type                                     | Défaut                                                  |
| :-------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------- | :------------------------------------------------------- |
| className                                                 | Contrôle de la classe CSS                                                                                                        | `string`                                 |                                                          |
| defaultValue                                              | Valeurs par défaut représentant les options sélectionnées en cas d'utilisation d'un état non contrôlé                                            | `string[]`                               |                                                          |
| disabled                                                  | Indique que l'utilisateur ne peut pas interagir avec le contrôle                                                                                 | `boolean`                                | `false`                                                  |
| [filterable](#filtering-options)                          | Indique que la fenêtre contextuelle de sélection contient une section de filtre                                                                                     | `boolean`                                | `false`                                                  |
| filterOption                                              | Utilisé pour comparer une option avec le filtre                                                                                               | `function`                               |                                                          |
| filterPlaceholder                                         | Texte du placeholder par défaut pour l'entrée de filtre                                                                                            | `string`                                 |                                                          |
| [getOptionHeight](#render-options-with-different-heights) | Utilisé pour définir la hauteur des options personnalisées de l'utilisateur                                                                                    | `function`                               |                                                          |
| getOptionGroupHeight                                      | Utilisé pour définir la hauteur des groupes d'options personnalisés de l'utilisateur                                                                               | `function`                               |                                                          |
| hasClear                                                  | Permet d'afficher une icône pour effacer les options sélectionnées                                                                            | `boolean`                                | `false`                                                  |
| id                                                        | Attribut HTML `id`                                                                                                              | `string`                                 |                                                          |
| label                                                     | Libellé du contrôle                                                                                                                    | `string`                                 |                                                          |
| loading                                                   | Ajoute l'élément de chargement à la fin de la liste d'options. Fonctionne comme un indicateur de chargement persistant lorsque la liste d'options est vide.  | `boolean`                                |                                                          |
| [multiple](#selecting-multiple-options)                   | Indique si plusieurs options peuvent être sélectionnées dans la liste                                                                       | `boolean`                                | `false`                                                  |
| name                                                      | Nom du contrôle                                                                                                              | `string`                                 |                                                          |
| onBlur                                                    | Gestionnaire appelé lorsque l'élément perd le focus.                                                                             | `function`                               |                                                          |
| filter                                                    | Valeur du filtre contrôlé                                                                                                          | `string`                                 | `''`                                                     |
| onFilterChange                                            | Se déclenche à chaque fois après la modification du filtre                                                                                       | `function`                               |                                                          |
| onFocus                                                   | Gestionnaire appelé lorsque l'élément obtient le focus                                                                               | `function`                               |                                                          |
| onLoadMore                                                | Se déclenche lorsque l'indicateur de chargement devient visible                                                                                    | `function`                               |                                                          |
| onOpenChange                                              | Se déclenche à chaque fois après la modification de la visibilité de la fenêtre contextuelle                                                                                 | `function`                               |                                                          |
| onUpdate                                                  | Se déclenche lorsqu'une modification de la valeur de `Select` est validée par l'utilisateur                                                          | `function`                               |                                                          |
| [options](#options)                                       | Options à sélectionner                                                                                                                | `(SelectOption \| SelectOptionGroup)[]`  |                                                          |
| pin                                                       | Vue de la bordure du contrôle                                                                                                              | `string`                                 | `'round-round'`                                          |
| placeholder                                               | Texte du placeholder                                                                                                                 | `string`                                 |                                                          |
| popupClassName                                            | Classe CSS de la fenêtre contextuelle avec la liste d'options                                                                                           | `string`                                 |                                                          |
| popupPlacement                                            | Placement de la fenêtre contextuelle                                                                                                                  | `PopupPlacement` `Array<PopupPlacement>` | `['bottom-start', 'bottom-end', 'top-start', 'top-end']` |
| [popupWidth](#popup-width)                                | Largeur de la fenêtre contextuelle                                                                                                                      | `number \| 'fit' \| 'outfit'`            | `'outfit'`                                               |
| qa                                                        | Attribut `data-qa` (identifiant de test)                                                                                                    | `string`                                 |                                                          |
| [renderControl](#render-custom-control)                   | Utilisé pour rendre le contrôle utilisateur                                                                                                      | `function`                               |                                                          |
| [renderCounter](#rendering-custom-counter)                | Utilisé pour rendre le compteur utilisateur. Fonctionne uniquement avec [hasCounter](#counter).                                                             | `function`                               |                                                          |
| renderEmptyOptions                                        | Utilisé pour rendre un nœud pour une liste d'options vide                                                                                   | `function`                               |                                                          |
| [renderFilter](#render-custom-filter-section)             | Utilisé pour rendre la section de filtre utilisateur                                                                                               | `function`                               |                                                          |
| [renderOption](#render-custom-options)                    | Utilisé pour rendre les options utilisateur                                                                                                      | `function`                               |                                                          |
| renderOptionGroup                                         | Utilisé pour rendre les groupes d'options utilisateur                                                                                                | `function`                               |                                                          |
| [renderSelectedOption](#render-custom-selected-options)   | Utilisé pour rendre les options sélectionnées par l'utilisateur                                                                                             | `function`                               |                                                          |
| [renderPopup](#rendering-options-list)                    | Utilisé pour rendre le contenu de la liste d'options                                                                                              | `function`                               |                                                          |
| [size](#size)                                             | Taille du contrôle / des options                                                                                                           | `string`                                 | `'m'`                                                    |
| value                                                     | Valeurs représentant les options sélectionnées                                                                                           | `string[]`                               |                                                          |
| view                                                      | Vue du contrôle                                                                                                                     | `string`                                 | `'normal'`                                               |
| [virtualizationThreshold](#virtualized-list)              | Seuil de nombre d'options après lequel la virtualisation est activée                                                                     | `number`                                 | `50`                                                     |
| [width](#control-width)                                   | Largeur du contrôle                                                                                                                    | `string \| number`                       | `undefined`                                              |
| errorMessage                                              | Texte d'erreur                                                                                                                       | `string`                                 |                                                          |
| errorPlacement                                            | Position de l'erreur                                                                                                                   | `outside` `inside`                       | `outside`                                                |
| validationState                                           | État de validation                                                                                                                 | `"invalid"`                              |                                                          |
| [hasCounter](#counter)                                    | Affiche le nombre d'options sélectionnées. Le compteur n'apparaît que lorsque la sélection [multiple](#selecting-multiple-options) est activée. | `boolean`                                |                                                          |

## API CSS

| Nom                             | Description                                   |
| :------------------------------- | :-------------------------------------------- |
| `--g-select-focus-outline-color` | Couleur du contour si focalisé (manquant par défaut) |